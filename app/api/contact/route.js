export const runtime = "nodejs";

import nodemailer from "nodemailer";

/**
 * Exchange a refresh token for an access token using Google's token endpoint directly.
 * This avoids the googleapis/google-auth-library stack which has a broken
 * transitive dep (buffer-equal-constant-time) on Node 25.
 */
async function verifyRecaptcha(token) {
  if (!token) return { success: false, score: 0 };

  const params = new URLSearchParams({
    secret: process.env.RECAPTCHA_SECRET_KEY,
    response: token,
  });

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) return { success: false, score: 0 };

  return res.json();
}

async function getGoogleAccessToken() {
  const params = new URLSearchParams({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    refresh_token: process.env.REFRESH_TOKEN,
    grant_type: "refresh_token",
  });

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

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
      `PACKAGES: ${Array.isArray(packages) ? packages.join(", ") : packages || "—"}`,
      `CUSTOM BAR SELECTIONS: ${Array.isArray(customBarSelections) ? customBarSelections.join(", ") : customBarSelections || "—"}`,
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
      `PROJECT TYPE(S): ${Array.isArray(projectTypes) ? projectTypes.join(", ") : projectTypes || "—"}`,
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

export async function POST(request) {
  try {
    const body = await request.json();
    const { formType, recaptchaToken, _gotcha } = body;

    // Honeypot: real users never fill this hidden field in.
    if (_gotcha) {
      return Response.json({ error: "Submission rejected" }, { status: 400 });
    }

    const { success, score } = await verifyRecaptcha(recaptchaToken);
    if (!success || score < 0.5) {
      return Response.json({ error: "reCAPTCHA verification failed" }, { status: 403 });
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

    let emailContent;
    if (formType === "event") {
      emailContent = buildEventEmail(body);
    } else if (formType === "consulting") {
      emailContent = buildConsultingEmail(body);
    } else {
      emailContent = buildGeneralEmail(body);
    }

    await transporter.sendMail({
      from: process.env.WEBMASTER_EMAIL,
      to: process.env.RECIPIENT_EMAIL,
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
