import { Inter, Fraunces, Allura } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import RecaptchaProvider from "../components/recaptcha-provider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";

/* All three brand typefaces are loaded via next/font so they’re bundled,
   self-hosted, and exposed as CSS variables. globals.css references
   --font-inter / --font-fraunces / --font-allura through --font-sans /
   --font-serif / --font-script. */

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const allura = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-allura",
  display: "swap",
});

/* Canonical origin for absolute OG/canonical URLs. Vercel injects
   VERCEL_PROJECT_PRODUCTION_URL on every deploy, so previews and production
   both resolve correctly without hardcoding a domain. Override with
   NEXT_PUBLIC_SITE_URL once a custom domain is attached. */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

/* Icons come from the App Router file convention (app/icon.png,
   app/apple-icon.png) — no `icons` key needed. The previous metadata pointed
   at /favicon.ico, which never existed and 404'd on every page load. */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "In The Mix | Event Bartending & Hospitality Consulting",
    template: "%s | In The Mix",
  },
  description:
    "Crafted cocktails, thoughtful hospitality, and systems that make great service possible. Event bartending and consulting for Calgary and beyond.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "In The Mix Bartending",
    title: "In The Mix | Event Bartending & Hospitality Consulting",
    description:
      "Crafted cocktails, thoughtful hospitality, and systems that make great service possible. Event bartending and consulting for Calgary and beyond.",
    images: [{ url: "/group-drinks.jpg", width: 1200, height: 630, alt: "In The Mix Bartending" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "In The Mix | Event Bartending & Hospitality Consulting",
    description:
      "Crafted cocktails, thoughtful hospitality, and systems that make great service possible.",
    images: ["/group-drinks.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${allura.variable}`}
    >
      <body className={inter.className}>
        <RecaptchaProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </RecaptchaProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
