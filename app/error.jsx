"use client";

import { useEffect } from "react";
import SectionHeading from "../components/section-heading";
import { Button, OutlineButton } from "../components/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Surfaces in Vercel's runtime logs. There is no error monitoring service
    // wired up, so this is the only signal that something broke.
    console.error("Unhandled page error:", error);
  }, [error]);

  return (
    <section style={{ backgroundColor: "var(--color-cream)", padding: "6rem 1.5rem", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
        <SectionHeading>Something Went Wrong</SectionHeading>
        <p style={{ color: "var(--color-text)", lineHeight: 1.8, maxWidth: "500px", margin: "2rem auto" }}>
          Sorry — something went wrong on our end. Please try again, or reach out
          directly and we&apos;ll get back to you.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Button onClick={reset}>Try Again</Button>
          <OutlineButton href="/contact">Get In Touch</OutlineButton>
        </div>
      </div>
    </section>
  );
}
