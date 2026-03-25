import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-dark-footer)", color: "#ccc", padding: "3rem 1.5rem 2rem" }}>
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Contact Us */}
        <div>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            CONTACT US
          </p>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#aaa" }}>
            +1 587 893 2204
          </p>
          <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#aaa" }}>
            inthemixcalgary@gmail.com
          </p>
        </div>

        {/* Services */}
        <div>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            SERVICES
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <Link href="/contact" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.85rem" }}>Contact Us</Link>
            <Link href="/event-bartending" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.85rem" }}>Event Bartending</Link>
            <Link href="/consulting" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.85rem" }}>Consulting</Link>
          </div>
        </div>

        {/* Information */}
        <div>
          <p style={{ color: "#fff", fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            INFORMATION
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <Link href="/about" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.85rem" }}>About Us</Link>
            <Link href="/blog" style={{ color: "#aaa", textDecoration: "none", fontSize: "0.85rem" }}>Blog</Link>
          </div>
        </div>

        {/* Social */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", paddingTop: "0.25rem" }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
            style={{ color: "#aaa", fontSize: "1.25rem" }}>
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
            style={{ color: "#aaa", fontSize: "1.25rem" }}>
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
