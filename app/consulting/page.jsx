import Image from "next/image";
import SectionHeading from "../../components/section-heading";
import { Button } from "../../components/button";
import ConsultingForm from "../../components/forms/consulting-form";

export const metadata = {
  title: "Hospitality Consulting",
  description:
    "Bar and restaurant consulting in Calgary: new openings, beverage and culinary program development, service infrastructure, and full concept development.",
  alternates: { canonical: "/consulting" },
};

const container = { maxWidth: "1180px", margin: "0 auto", padding: "0 2rem" };

const consultingPackages = [
  {
    title: "Beverage Program Development",
    badge: "Core Specialty",
    img: "/drink2.jpg",
    imgFirst: false,
    items: ["Cocktail & mocktail menu development", "Menu engineering & pricing strategy", "Costed specifications", "Batch systems & prep structure"],
  },
  {
    title: "Culinary Program Development",
    img: "/drink1.jpg",
    imgFirst: false,
    items: ["Food & beverage alignment", "Kitchen workflow design", "Food costing & margin review", "Pairing strategy & concept cohesion"],
  },
  {
    title: "Operations & Service Infrastructure",
    img: "/drink3.jpg",
    imgFirst: true,
    items: ["Bar & kitchen workflow design", "Production forecasting", "Standard operating procedures (SOPs)", "Training documentation & implementation"],
  },
  {
    title: "Full Concept Development",
    img: "/drink2.jpg",
    imgFirst: false,
    items: ["Concept & brand alignment", "Integrated menu development (food & beverage)", "Operational system design", "Cost & margin strategy", "Pre-launch implementation support"],
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: 0, background: "var(--color-ink)", color: "#f4eee5", overflow: "hidden", position: "relative" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "78vh" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#a89a86", display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <span style={{ width: 32, height: 1, background: "var(--color-accent)" }} />
              Service Two — Hospitality Consulting
            </p>
            <h1 className="h-display" style={{ color: "#f4eee5", fontSize: "clamp(2.4rem, 4.2vw, 4.2rem)", fontWeight: 300 }}>
              Thoughtful hospitality, <em style={{ fontStyle: "italic", color: "var(--color-accent)", fontWeight: 400 }}>built</em> for real service.
            </h1>
            <p className="h-script" style={{ color: "var(--color-hover-soft)", fontSize: "2rem", marginTop: "1.5rem" }}>Consulting</p>
            <p style={{ maxWidth: 460, color: "#c4b9a7", lineHeight: 1.7, marginTop: "1.75rem" }}>
              Beverage programs, menu development, and operational systems designed to help hospitality concepts run smoothly and serve better.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <Button href="#contact" variant="light">Request a quote</Button>
              <Button href="#packages" style={{ borderColor: "#3a2e22", color: "#c4b9a7" }}>View packages</Button>
            </div>
          </div>
          <div style={{ position: "relative", background: "#0d0a07", minHeight: "60vh" }}>
            <Image src="/drink1.jpg" alt="A bartender shaking a cocktail in a gold shaker" fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: "var(--color-cream)", padding: "6rem 2rem 4rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <p className="h-eyebrow" style={{ marginBottom: "1.25rem" }}>The philosophy</p>
          <p className="h-serif" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", color: "var(--color-ink)", marginBottom: "1.5rem", lineHeight: 1.4 }}>
            Behind every great hospitality experience is thoughtful structure.
          </p>
          <p style={{ color: "var(--color-text)", lineHeight: 1.8, marginBottom: "1rem" }}>
            In The Mix provides consulting for beverage programs, menus, and operational systems designed to support both creativity and smooth execution.
          </p>
          <p style={{ color: "var(--color-text)", lineHeight: 1.8 }}>
            From concept development to workflow planning, every recommendation is grounded in real hospitality experience and built to perform during service.
          </p>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" style={{ background: "var(--color-cream)", padding: "0 0 6rem" }}>
        <div style={container}>
          <SectionHeading>Consulting packages</SectionHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "3rem" }}>
            {/* No overflow:hidden on the article — it lives on .pkg-grid so the
                badge can straddle the card's top border without being clipped. */}
            {consultingPackages.map((pkg) => (
              <article key={pkg.title} className="card pkg-card" style={{ padding: 0, position: "relative" }}>
                {pkg.badge && (
                  <span className="pkg-badge">{pkg.badge}</span>
                )}
                <div style={{ display: "grid", gridTemplateColumns: pkg.imgFirst ? "1fr 1.4fr" : "1.4fr 1fr", gap: 0, minHeight: 360 }} className="pkg-grid">
                  {pkg.imgFirst && (
                    <div style={{ position: "relative", background: "#1a1410", minHeight: 280 }}>
                      <Image src={pkg.img} alt="" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
                    </div>
                  )}
                  <div className="pkg-body">
                    <h2 className="h-eyebrow" style={{ marginBottom: "1.5rem", fontSize: "0.78rem" }}>{pkg.title}</h2>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {pkg.items.map((it, i) => (
                        <li key={it} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.85rem 0", borderBottom: i < pkg.items.length - 1 ? "1px solid var(--color-rule)" : "none", fontFamily: "var(--font-serif)", fontSize: "1.05rem", color: "var(--color-ink)" }}>
                          <span>{it}</span>
                          <span className="text-amber" style={{ fontFamily: "var(--font-sans)", fontSize: "1.2rem" }}>›</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {!pkg.imgFirst && (
                    <div style={{ position: "relative", background: "#1a1410", minHeight: 280 }}>
                      <Image src={pkg.img} alt="" fill sizes="(max-width: 900px) 100vw, 40vw" style={{ objectFit: "cover" }} />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "var(--color-cream)", borderTop: "1px solid var(--color-cream-deep)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SectionHeading>Contact us</SectionHeading>
          <p className="h-eyebrow" style={{ textAlign: "center", margin: "1.5rem 0 0.5rem" }}>Tell us about your project</p>
          <p style={{ textAlign: "center", color: "var(--color-text)", maxWidth: 560, margin: "0 auto 3rem" }}>
            Every concept is different, and the best solutions are built around how you want your space to feel and function. If you&apos;re exploring an idea or looking to improve an existing program, I&apos;d love to hear more.
          </p>
          <ConsultingForm />
        </div>
      </section>

      <style>{`
        /* Clipping lives here rather than on .pkg-card so the images stay inside
           the card's rounded corners while the badge can overhang the top edge. */
        .pkg-grid { overflow: hidden; border-radius: 4px; }

        .pkg-body { padding: 3rem 2.5rem 2.5rem; }

        /* Straddles the card's top border, matching the "Most Popular" badge on
           the event-bartending page. */
        .pkg-badge {
          position: absolute;
          top: -1rem;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-cream-soft);
          padding: 0.3rem 1.4rem;
          font-family: var(--font-script);
          font-size: 1.5rem;
          color: var(--color-hover);
          border: 1.5px solid var(--color-ink);
          white-space: nowrap;
          z-index: 2;
        }

        /* No max-width needed on the title: the badge sits above the card's
           content rather than over it, so the two can't collide at any width —
           which is what makes this robust for longer titles too. */

        @media (max-width: 900px) {
          .hero-grid, .pkg-grid { grid-template-columns: 1fr !important; }
          /* Clear the overhanging badge once the card stacks and the text
             column runs full width. */
          .pkg-card .pkg-body { padding-top: 3.5rem; }
        }
      `}</style>
    </>
  );
}
