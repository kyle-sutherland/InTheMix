import { Inter, Fraunces, Allura } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "../lib/site";
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
    // Dimensions omitted deliberately: Next infers them from the local file.
    // Hardcoding them risks lying to scrapers if the image is ever swapped.
    images: [{ url: "/group-drinks.jpg", alt: "In The Mix Bartending" }],
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
