/**
 * Canonical origin for absolute URLs (metadata, sitemap, robots).
 *
 * Vercel injects VERCEL_PROJECT_PRODUCTION_URL on every deploy, so previews and
 * production both resolve correctly without a hardcoded domain. Set
 * NEXT_PUBLIC_SITE_URL once a custom domain is attached.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/** Public, indexable routes. /blog is omitted until it has real content. */
export const ROUTES = [
  { path: "/", changeFrequency: "monthly", priority: 1.0 },
  { path: "/event-bartending", changeFrequency: "monthly", priority: 0.9 },
  { path: "/consulting", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
];
