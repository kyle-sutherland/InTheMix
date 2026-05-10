import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import RecaptchaProvider from "../components/recaptcha-provider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "In The Mix | Event Bartending & Hospitality Consulting",
  description:
    "Crafted cocktails, thoughtful hospitality, and systems that make great service possible. Event bartending and consulting for Calgary and beyond.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
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
