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

export const metadata = {
  title: "In The Mix | Event Bartending & Hospitality Consulting",
  description:
    "Crafted cocktails, thoughtful hospitality, and systems that make great service possible. Event bartending and consulting for Calgary and beyond.",
  icons: { icon: "/favicon.ico" },
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
