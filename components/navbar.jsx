"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "ABOUT US", href: "/about" },
  { label: "EVENT BARTENDING", href: "/event-bartending" },
  { label: "CONSULTING", href: "/consulting" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#1a1a1a", position: "sticky", top: 0, zIndex: 50 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          padding: "0 1.5rem",
          height: "10rem",
        }}
      >
        <Link href="/" aria-label="In The Mix home">
          <Image
            src="/In-The-Mix(teal).svg"
            width={620}
            height={186}
            alt="In The Mix Bartending"
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "1.75rem", alignItems: "center" }} className="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className="nav-hamburger"
          style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }}
        >
          <span style={{ color: "#e0d8cf", fontSize: "1.5rem" }}>
            {mobileOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          style={{
            backgroundColor: "#111",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: "1rem" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      <style>{`
        .nav-desktop { display: flex; }
        .nav-hamburger { display: none; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
