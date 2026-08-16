import { SITE_URL } from "../lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /blog is a stub; /api has nothing crawlable.
      disallow: ["/api/", "/blog"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
