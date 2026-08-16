import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark-footer)", color: "#b3a896", padding: "4rem 0 2rem", fontSize: "0.85rem" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "3rem" }} className="footer-grid">
        <div>
          <p style={{ fontFamily: "var(--font-script)", color: "var(--color-hover-soft)", fontSize: "1.6rem", margin: "0 0 0.5rem", lineHeight: 1 }}>In The Mix</p>
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            Crafted cocktails, thoughtful hospitality, and systems that make great service possible.
          </p>
        </div>

        <FooterCol title="Contact">
          <a href="tel:+15878932204" style={footerLink}>+1 587 893 2204</a>
          <a href="mailto:inthemixcalgary@gmail.com" style={footerLink}>inthemixcalgary@gmail.com</a>
        </FooterCol>

        <FooterCol title="Services">
          <Link href="/event-bartending" style={footerLink}>Event Bartending</Link>
          <Link href="/consulting" style={footerLink}>Consulting</Link>
          <Link href="/contact" style={footerLink}>Contact</Link>
        </FooterCol>

        {/* Blog is intentionally unlinked until it has real content — the page
            still exists at /blog, just isn't advertised. */}
        <FooterCol title="Information">
          <Link href="/about" style={footerLink}>About</Link>
        </FooterCol>
      </div>

      {/* Social icons removed: they pointed at instagram.com / facebook.com
          (platform home pages, not profiles). Restore with real profile URLs. */}
      <div style={{ maxWidth: "1180px", margin: "3rem auto 0", padding: "1.5rem 2rem 0", borderTop: "1px solid #2a2118", fontSize: "0.75rem", color: "#6b5e4f" }}>
        <span>© {new Date().getFullYear()} In The Mix Bartending · Calgary, AB</span>
      </div>

      <style>{`
        @media (max-width: 800px) {
          footer .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  );
}

const footerLink = { color: "#b3a896", textDecoration: "none", display: "block", padding: "0.2rem 0" };

function FooterCol({ title, children }) {
  return (
    <div>
      <h4 style={{ color: "#fff", fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", margin: "0 0 1rem" }}>{title}</h4>
      {children}
    </div>
  );
}
