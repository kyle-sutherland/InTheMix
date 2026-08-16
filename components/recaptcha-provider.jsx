"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

/* Read as a full literal, never `process.env[name]`: Next.js substitutes
   NEXT_PUBLIC_* at build time by static text match, so a computed lookup is
   NOT replaced and always reads undefined in the browser. */
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

/* Fail the build rather than defaulting to "". An empty key lets the provider
   mount, leaves executeRecaptcha undefined, and the forms then post with no
   token — surfacing as an opaque 403 from the contact route with nothing
   anywhere naming the real cause. This has now bitten twice: once when the
   var was unset at build time, once when it was set as NEXT_PUBIC_ (sic).
   Prerendering this client component during `next build` runs the module,
   so a missing or malformed key breaks the deploy instead of production. */
if (!SITE_KEY) {
  throw new Error(
    "NEXT_PUBLIC_RECAPTCHA_KEY is not set at build time. The contact forms " +
      "cannot mint reCAPTCHA tokens without it and every submission will be " +
      "rejected. Set it in the Vercel project (exact spelling) and redeploy.",
  );
}

/* Guards against pasting the secret key into the public var — it would be
   published to every visitor. Classic v3 site keys start with "6L". */
if (!SITE_KEY.startsWith("6L")) {
  throw new Error(
    "NEXT_PUBLIC_RECAPTCHA_KEY does not look like a reCAPTCHA site key " +
      '(expected it to start with "6L"). Check that the site key, and not ' +
      "the secret key, is set in this variable.",
  );
}

export default function RecaptchaProvider({ children }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
