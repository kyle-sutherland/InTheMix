"use client";

import { useEffect } from "react";

/* Catches errors thrown by the root layout itself, which app/error.jsx cannot
   reach. It replaces the whole document, so it must render <html>/<body> and
   cannot rely on global styles or shared components loading. */
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Root layout error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4EEE5",
          color: "#1B1814",
          fontFamily: "system-ui, -apple-system, sans-serif",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div style={{ maxWidth: "440px" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 500, marginBottom: "1rem" }}>
            Something went wrong
          </h1>
          <p style={{ color: "#6B635A", lineHeight: 1.7, marginBottom: "2rem" }}>
            Sorry — the site hit an unexpected error. Please try again, or email{" "}
            <a href="mailto:inthemixcalgary@gmail.com" style={{ color: "#B7763E" }}>
              inthemixcalgary@gmail.com
            </a>
            .
          </p>
          <button
            onClick={reset}
            style={{
              padding: "0.85rem 1.6rem",
              fontSize: "0.82rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              border: "1px solid #B7763E",
              color: "#B7763E",
              background: "transparent",
              cursor: "pointer",
              borderRadius: "2px",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
