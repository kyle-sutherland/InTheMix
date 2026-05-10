import Image from "next/image";
import SectionHeading from "../../components/section-heading";
import { Button } from "../../components/button";

const container = { maxWidth: "1180px", margin: "0 auto", padding: "0 2rem" };

const timeline = [
  { era: "Age 13", body: "I started working in restaurants when I was 13, beginning in a local breakfast diner in Toronto. From there, I worked across a mix of places — coffee shops, lunch spots, and bars — getting experience in different types of service and learning how things actually run day-to-day." },
  { era: "Years later", body: "Over time, that shaped how I approach hospitality. Not just from a creative side, but from an operational one — understanding how service flows, how teams work together, and how the small details really impact the overall experience." },
  { era: "2019", sub: "Into events", body: "I started working in events, and I saw the opportunity to bring that experience into a different environment. Events require a different level of structure, where preparation and execution matter just as much as the drinks themselves." },
  { era: "2023", sub: "In The Mix", body: "I started In The Mix as a way to bring all of that together. What I had been doing for years in restaurants translated naturally into building bar programs and event services that are not just creative, but actually work in real service." },
  { era: "Now", body: "Everything I do is grounded in that experience — close to 20 years in hospitality, focused on creating bar programs and event experiences that feel polished, run smoothly, and make sense behind the bar." },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO — editorial portrait offset */}
      <section style={{ padding: 0, background: "var(--color-cream)", overflow: "hidden", position: "relative" }}>
        <div style={{ ...container, paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <p className="h-eyebrow" style={{ marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ width: 32, height: 1, background: "var(--color-accent)" }} />
                About — Robyn
              </p>
              <h1 className="h-display" style={{ fontSize: "clamp(2.6rem, 5vw, 4.4rem)", fontWeight: 300 }}>
                Built on <em style={{ fontStyle: "italic", color: "var(--color-accent)", fontWeight: 400 }}>experience</em>, designed for real service.
              </h1>
              <p className="h-script" style={{ color: "var(--color-hover)", fontSize: "2.2rem", marginTop: "1.5rem" }}>The story so far</p>
              <p style={{ color: "var(--color-text)", lineHeight: 1.8, marginTop: "1.5rem", maxWidth: 480 }}>
                Close to 20 years in hospitality — front of house, back of house, and now behind the bar at events and inside the systems that keep great service running.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/5", overflow: "hidden", position: "relative" }}>
                <Image src="/drink1.jpg" alt="Robyn" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: "-1rem", left: "-1rem", background: "var(--color-cream)", border: "1px solid var(--color-rule)", padding: "0.6rem 1rem" }}>
                <p className="h-script" style={{ color: "var(--color-hover)", fontSize: "1.4rem", lineHeight: 1 }}>Robyn</p>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-text)", margin: "0.25rem 0 0" }}>
                  Founder · Bartender · Consultant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section style={{ background: "var(--color-cream)", borderTop: "1px solid var(--color-cream-deep)", padding: "6rem 0" }}>
        <div style={container}>
          <SectionHeading>Origin story</SectionHeading>
          <div className="timeline" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "4rem", maxWidth: 960, margin: "4rem auto 0" }}>
            {timeline.map((row, i) => (
              <>
                {i > 0 && <div key={`r-${i}`} style={{ gridColumn: "1 / -1", height: 1, background: "var(--color-rule)", margin: "1.5rem 0" }} />}
                <div key={`era-${i}`}>
                  <p className="h-serif" style={{ fontStyle: "italic", fontSize: "2.2rem", color: "var(--color-accent)", margin: 0 }}>{row.era}</p>
                  {row.sub && (
                    <p style={{ fontSize: "0.78rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-text)" }}>{row.sub}</p>
                  )}
                </div>
                <div key={`body-${i}`}>
                  <p style={{ lineHeight: 1.8 }}>{row.body}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* FROM SERVICE TO SYSTEMS */}
      <section style={{ background: "var(--color-cream-deep)", padding: "6rem 0" }}>
        <div style={container}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", maxWidth: 1000, margin: "0 auto" }}>
            <div>
              <p className="h-eyebrow" style={{ marginBottom: "1.25rem" }}>Chapter Two</p>
              <h2 className="h-serif" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", marginBottom: "1.5rem" }}>
                From <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>service</em> to systems.
              </h2>
              <p style={{ lineHeight: 1.8, color: "var(--color-ink-soft)", marginBottom: "1rem" }}>
                After years working in hospitality, my approach naturally evolved beyond just service. I started focusing more on how things are built — from menu structure to workflow — and how those decisions impact the way service actually runs.
              </p>
            </div>
            <div style={{ aspectRatio: "4/5", overflow: "hidden", position: "relative" }}>
              <Image src="/drink2.jpg" alt="" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section style={{ background: "var(--color-cream)", padding: "6rem 0" }}>
        <div style={container}>
          <SectionHeading>What I build</SectionHeading>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "3rem", maxWidth: 960, margin: "3rem auto 0" }}>
            {[
              { eyebrow: "Event Bartending", img: "/drink1.jpg", desc: "Thoughtful bar service designed to elevate both the drinks and the guest experience. Every detail — from menu to execution — is built to run smoothly in real time.", items: ["Custom cocktail menus", "Structured prep and batching systems", "Professional, efficient service", "A polished guest experience from start to finish"], href: "/event-bartending" },
              { eyebrow: "Hospitality Consulting", img: "/drink2.jpg", desc: "Beverage programs, menu development, and operational systems designed to support both creativity and functionality — built to perform in real service environments.", items: ["Cocktail and menu development", "Costing and pricing strategy", "Workflow and system design", "Training and operational structure"], href: "/consulting" },
            ].map((b) => (
              <div key={b.eyebrow} className="card" style={{ textAlign: "center", padding: "2.5rem 2rem" }}>
                <p className="h-eyebrow" style={{ marginBottom: "1.5rem" }}>{b.eyebrow}</p>
                <div style={{ width: 160, height: 160, margin: "0 auto 1.5rem", position: "relative" }}>
                  <Image src={b.img} alt="" width={160} height={160} className="img-circle" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <p style={{ color: "var(--color-text)", fontSize: "0.95rem", marginBottom: "1.25rem" }}>{b.desc}</p>
                <hr className="divider" />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "left", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {b.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: "0.7rem", fontSize: "0.92rem", color: "var(--color-ink-soft)" }}>
                      <span className="text-amber">›</span>{it}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "1.75rem" }}>
                  <Button href={b.href}>Learn more</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUEST EXPERIENCE */}
      <section style={{ background: "var(--color-ink)", color: "#f4eee5", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <p className="h-eyebrow" style={{ color: "var(--color-accent)", marginBottom: "1.25rem" }}>Built around the guest experience</p>
          <h2 className="h-serif" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#f4eee5", marginBottom: "1.5rem" }}>
            We&apos;re not just here to serve drinks — we&apos;re here to <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>create experiences</em>.
          </h2>
          <p style={{ color: "#c4b9a7", lineHeight: 1.8, marginBottom: "2.5rem" }}>
            Great hospitality is about how everything comes together — from the atmosphere, to the flow of service, to how the guest feels from start to finish.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "3rem" }}>
            {[
              "Service should be attentive, efficient, and personable.",
              "Every detail should support the overall experience.",
              "Good service should feel effortless.",
            ].map((q) => (
              <p key={q} className="h-serif" style={{ fontStyle: "italic", fontSize: "1.4rem", color: "#f4eee5", margin: 0 }}>&ldquo;{q}&rdquo;</p>
            ))}
          </div>
          <p style={{ color: "#c4b9a7", marginBottom: "2.5rem" }}>At the end of the day, the guest experience is at the forefront of everything.</p>
          <Button href="/contact" variant="light">Contact us</Button>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid, .grid-2 { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .timeline { grid-template-columns: 1fr !important; gap: 1rem !important; }
        }
      `}</style>
    </>
  );
}
