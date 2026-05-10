"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Event Bartending", href: "/event-bartending" },
  { label: "Consulting", href: "/consulting" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--color-ink)", color: "#f4eee5" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "1.4rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.7rem", textDecoration: "none" }}>
          <span style={{ width: 38, height: 38, border: "1.5px solid var(--color-hover-soft)", borderBottom: 0, borderRadius: "50% 50% 0 0 / 75% 75% 0 0", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 4 }}>
            <span style={{ width: 4, height: 6, background: "var(--color-hover-soft)", borderRadius: 1 }} />
          </span>
          <span style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: "1.05rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#f4eee5", lineHeight: 1 }}>
            In The Mix
            <small style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.62rem", letterSpacing: "0.32em", color: "var(--color-hover-soft)", fontWeight: 400, marginTop: "0.35rem" }}>Bartending</small>
          </span>
        </Link>

        <nav className="nav-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta-desktop" style={{ display: "inline-flex", alignItems: "center", padding: "0.6rem 1.2rem", border: "1px solid var(--color-accent)", color: "var(--color-accent)", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontWeight: 500 }}>
          Get in touch
        </Link>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="nav-hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#e0d8cf", fontSize: "1.5rem", padding: "0.5rem" }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav style={{ background: "#111", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link" onClick={() => setOpen(false)} style={{ fontSize: "0.95rem" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-link" onClick={() => setOpen(false)} style={{ fontSize: "0.95rem", color: "var(--color-accent)" }}>
            Get in touch
          </Link>
        </nav>
      )}

      <style>{`
        .nav-desktop, .nav-cta-desktop { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 900px) {
          .nav-desktop, .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
