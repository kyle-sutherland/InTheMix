export const runtime = "nodejs";

import nodemailer from "nodemailer";

/* Outbound calls get a hard timeout so a hung upstream can't hold the function
   open until the platform kills it. */
const FETCH_TIMEOUT_MS = 10_000;

/* Length caps. The App Router does NOT honour the old Pages-Router
   `bodyParser.sizeLimit`, so without these a multi-megabyte field would be
   parsed and pasted straight into an email. */
const LIMITS = {
  name: 200,
  email: 320, // RFC 5321 maximum
  phone: 50,
  businessName: 200,
  location: 200,
  guests: 20,
  date: 40,
  startTime: 40,
  endTime: 40,
  message: 5000,
};

const FORM_TYPES = new Set(["event", "consulting", "general"]);

/* reCAPTCHA actions must match what the client passes to executeRecaptcha().
   Asserting this stops a token minted for one form (or on an attacker's own
   page using the public site key) from being replayed against another. */
const EXPECTED_ACTIONS = {
  event: "event_form",
  consulting: "consulting_form",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fieldError(data, field, { required = false } = {}) {
  const raw = data[field];
  if (raw === undefined || raw === null || String(raw).trim() === "") {
    return required ? `${field} is required` : null;
  }
  if (String(raw).length > LIMITS[field]) {
    return `${field} exceeds ${LIMITS[field]} characters`;
  }
  return null;
}

/**
 * Server-side validation. The forms validate with react-hook-form, but that is
 * client-side only and trivially bypassed by posting directly to this route.
 */
function validate(formType, data) {
  const required = {
    event: ["name", "email", "guests", "date", "startTime", "endTime"],
    consulting: ["businessName", "location", "name", "email", "phone"],
    general: ["name", "email"],
  }[formType];

  const errors = [];
  for (const field of Object.keys(LIMITS)) {
    const err = fieldError(data, field, { required: required.includes(field) });
    if (err) errors.push(err);
  }

  if (data.email && !EMAIL_RE.test(String(data.email).trim())) {
    errors.push("email is not a valid address");
  }

  return errors;
}

/** Cap array fields (checkbox groups) to known-sane sizes. */
function safeList(value, max = 20) {
  if (!Array.isArray(value)) return value ? [String(value).slice(0, 200)] : [];
  return value.slice(0, max).map((v) => String(v).slice(0, 200));
}

async function postForm(url, params) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  return res;
}

async function verifyRecaptcha(token, expectedAction) {
  if (!token) return { ok: false, reason: "missing token" };
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    // Fail closed: a missing secret must never mean "everyone passes".
    console.error("RECAPTCHA_SECRET_KEY is not set");
    return { ok: false, reason: "server misconfigured" };
  }

  let res;
  try {
    res = await postForm("https://www.google.com/recaptcha/api/siteverify", new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    }));
  } catch {
    return { ok: false, reason: "siteverify unreachable" };
  }

  if (!res.ok) return { ok: false, reason: `siteverify HTTP ${res.status}` };

  const data = await res.json();
  if (!data.success) {
    /* Google's `error-codes` is what separates the three unrelated causes:
       invalid-input-secret (wrong/missing RECAPTCHA_SECRET_KEY),
       browser-error (production domain not registered for the key), and
       timeout-or-duplicate (token expired or already redeemed). Collapsing
       them into one string makes this failure undiagnosable from the logs. */
    const codes = Array.isArray(data["error-codes"]) ? data["error-codes"].join(", ") : "none";
    return { ok: false, reason: `token rejected (${codes})` };
  }

  /* v3 always returns a numeric score. A v2 key returns none — and
     `undefined < 0.5` is false, which would silently let everything through.
     Require an actual number. */
  if (typeof data.score !== "number") {
    return { ok: false, reason: "no score (wrong key type?)" };
  }
  if (data.score < 0.5) return { ok: false, reason: `low score ${data.score}` };

  /* Deliberately NOT asserting `hostname`: siteverify reports the domain the
     token was minted on, which on Vercel includes every preview deploy URL.
     Asserting it would break the forms on previews. */
  if (expectedAction && data.action !== expectedAction) {
    return { ok: false, reason: `action mismatch: ${data.action}` };
  }

  return { ok: true };
}

async function getGoogleAccessToken() {
  const res = await postForm("https://oauth2.googleapis.com/token", new URLSearchParams({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    refresh_token: process.env.REFRESH_TOKEN,
    grant_type: "refresh_token",
  }));

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to get Google access token: ${err}`);
  }

  const data = await res.json();
  return data.access_token;
}

function buildEventEmail(data) {
  const {
    name, email, phone, guests, date, startTime, endTime,
    packages = [], customBarSelections = [], message,
  } = data;

  return {
    subject: `Event Bartending Inquiry from ${name}`,
    text: [
      `NAME: ${name}`,
      `EMAIL: ${email}`,
      `PHONE: ${phone || "—"}`,
      `GUESTS: ${guests}`,
      `DATE: ${date}`,
      `START TIME: ${startTime}`,
      `END TIME: ${endTime}`,
      `PACKAGES: ${safeList(packages).join(", ") || "—"}`,
      `CUSTOM BAR SELECTIONS: ${safeList(customBarSelections).join(", ") || "—"}`,
      `MESSAGE:\n${message || "—"}`,
    ].join("\n"),
  };
}

function buildConsultingEmail(data) {
  const { businessName, projectTypes = [], location, name, email, phone, message } = data;

  return {
    subject: `Hospitality Consulting Inquiry from ${name}`,
    text: [
      `BUSINESS / PROJECT: ${businessName}`,
      `PROJECT TYPE(S): ${safeList(projectTypes).join(", ") || "—"}`,
      `LOCATION: ${location}`,
      `NAME: ${name}`,
      `EMAIL: ${email}`,
      `PHONE: ${phone || "—"}`,
      `MESSAGE:\n${message || "—"}`,
    ].join("\n"),
  };
}

function buildGeneralEmail(data) {
  const { name, email, phone, message } = data;

  return {
    subject: `General Inquiry from ${name}`,
    text: [
      `NAME: ${name}`,
      `EMAIL: ${email}`,
      `PHONE: ${phone || "—"}`,
      `MESSAGE:\n${message || "—"}`,
    ].join("\n"),
  };
}

const BUILDERS = {
  event: buildEventEmail,
  consulting: buildConsultingEmail,
  general: buildGeneralEmail,
};

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const { formType = "general", recaptchaToken, _gotcha } = body;

    // Honeypot: real users never fill this hidden field in.
    if (_gotcha) {
      return Response.json({ error: "Submission rejected" }, { status: 400 });
    }

    /* Reject unknown form types rather than silently falling through to the
       general email, which used to happen for any typo'd value. */
    if (!FORM_TYPES.has(formType)) {
      return Response.json({ error: "Unknown form type" }, { status: 400 });
    }

    const recaptcha = await verifyRecaptcha(recaptchaToken, EXPECTED_ACTIONS[formType]);
    if (!recaptcha.ok) {
      console.warn("reCAPTCHA rejected submission:", recaptcha.reason);
      return Response.json({ error: "reCAPTCHA verification failed" }, { status: 403 });
    }

    const errors = validate(formType, body);
    if (errors.length) {
      return Response.json({ error: "Validation failed", details: errors }, { status: 400 });
    }

    const accessToken = await getGoogleAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.WEBMASTER_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken,
      },
    });

    const emailContent = BUILDERS[formType](body);

    await transporter.sendMail({
      from: process.env.WEBMASTER_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
      /* Safe only because `email` passed EMAIL_RE above — an unvalidated value
         in an address header would be injectable. */
      replyTo: String(body.email).trim(),
      subject: emailContent.subject,
      text: emailContent.text,
    });

    return Response.json({ message: "Form submitted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ error: "Method not allowed" }, { status: 405 });
}
