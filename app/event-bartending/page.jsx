import Image from "next/image";
import SectionHeading from "../../components/section-heading";
import { Button } from "../../components/button";
import EventForm from "../../components/forms/event-form";

const container = { maxWidth: "1180px", margin: "0 auto", padding: "0 2rem" };

const features = [
  { num: "i", title: "Professional Bar Service", img: "/drink2.jpg",
    desc: "Experienced bartenders who bring both professionalism and hospitality to every event. From setup to the final pour, service is polished, efficient, and focused on a great experience for you and your guests." },
  { num: "ii", title: "Custom Cocktail Menus", img: "/drink3.jpg",
    desc: "Every event is unique, and the drinks should reflect that. Custom cocktail menus are thoughtfully developed to match the tone of your event while keeping service smooth and consistent behind the bar." },
  { num: "iii", title: "Seamless Event Execution", img: "/drink1.jpg",
    desc: "Behind every smooth bar service is thoughtful planning. Through structured batching, organized prep, and clear bar workflow, drinks are served efficiently — guests spend less time waiting, more time enjoying the event." },
];

const packages = [
  { label: "Classic Bar", price: "$38", tagline: "Perfect for straightforward bar service.",
    items: ["Beer, wine, and standard spirits", "Mix and garnish", "Glassware service"] },
  { label: "Signature Cocktail Bar", price: "$45", tagline: "Ideal for a curated cocktail experience.", popular: true,
    items: ["3 signature cocktails", "Mix and garnish", "Glassware service"] },
  { label: "Full Event Bar", price: "$52", tagline: "Best for a complete, all-inclusive bar.",
    items: ["3 signature cocktails", "Beer, wine, and standard spirits", "Mix and garnish", "Glassware service"] },
];

const customOptions = [
  { name: "Bartending Service", body: <><strong style={{ color: "var(--color-ink)" }}>$40</strong> per hour per bartender<br /><em style={{ fontSize: "0.85rem" }}>(4 hour minimum)</em></> },
  { name: "Mix & Garnish Program", body: <>Starting at <strong style={{ color: "var(--color-ink)" }}>$10</strong> per guest</> },
  { name: "Glassware", body: <>Starting at <strong style={{ color: "var(--color-ink)" }}>$7</strong> per guest</> },
  { name: "Liquor Packages", body: <>Beer, wine &amp; spirits from <strong style={{ color: "var(--color-ink)" }}>$20</strong> per guest<br />Signature cocktail batching from <strong style={{ color: "var(--color-ink)" }}>$25</strong> per guest</> },
];

const steps = [
  { num: "i.", title: "Select Your Package", desc: "Review our event bar packages and choose the option that best fits your event. Whether you're looking for a classic bar, a curated cocktail menu, or full service — each package is designed to deliver a seamless, elevated experience." },
  { num: "ii.", title: "Customize Your Bar", desc: "Tailor your bar service to your event. From signature cocktails and upgraded selections to glassware and additional enhancements, we'll refine the details so everything aligns with your vision and runs smoothly during service." },
  { num: "iii.", title: "Confirm the Details", desc: "Once everything is finalized, we'll confirm all logistics and ensure every detail is in place. From setup to last call, your bar service is structured to run efficiently — so you can focus on enjoying your event." },
];

export default function EventBartendingPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: 0, background: "var(--color-ink)", color: "#f4eee5", overflow: "hidden", position: "relative" }}>
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "78vh" }}>
          <div style={{ position: "relative", background: "#0d0a07", minHeight: "60vh" }}>
            <Image src="/drink3.jpg" alt="" fill style={{ objectFit: "cover" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#a89a86", display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <span style={{ width: 32, height: 1, background: "var(--color-accent)" }} />
              Service One — Event Bartending
            </p>
            <h1 className="h-display" style={{ color: "#f4eee5", fontSize: "clamp(2.6rem, 4.4vw, 4.4rem)", fontWeight: 300 }}>
              Thoughtful cocktails. <em style={{ fontStyle: "italic", color: "var(--color-accent)", fontWeight: 400 }}>Seamless</em> service.{" "}
              <span style={{ color: "var(--color-hover-soft)" }}>Memorable</span> events.
            </h1>
            <p className="h-script" style={{ color: "var(--color-hover-soft)", fontSize: "1.7rem", marginTop: "1.5rem" }}>
              Weddings · Private Events · Corporate
            </p>
            <p style={{ maxWidth: 460, color: "#c4b9a7", lineHeight: 1.7, marginTop: "1.75rem" }}>
              Where great cocktails, professional service, and attention to detail come together to create a memorable event.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
              <Button href="#contact" variant="light">Request a quote</Button>
              <Button href="#packages" style={{ borderColor: "#3a2e22", color: "#c4b9a7" }}>See packages</Button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: "var(--color-cream)", padding: "6rem 2rem 4rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <p className="h-eyebrow" style={{ marginBottom: "1.25rem" }}>The approach</p>
          <p className="h-serif" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", color: "var(--color-ink)", marginBottom: "1.5rem", lineHeight: 1.4 }}>
            In The Mix provides professional event bartending designed to elevate both the drinks and the experience.
          </p>
          <p style={{ color: "var(--color-text)", lineHeight: 1.8 }}>
            From custom cocktail menus to thoughtful batching systems, every bar program is structured to deliver great cocktails, efficient service, and a polished guest experience from the first pour to the last.
          </p>
        </div>
      </section>

      {/* 3 FEATURES */}
      <section style={{ background: "var(--color-cream)", padding: "2rem 0 6rem" }}>
        <div style={container}>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
            {features.map((f) => (
              <div key={f.num} style={{ textAlign: "center" }}>
                <div style={{ width: 180, height: 180, margin: "0 auto 1.75rem", position: "relative" }}>
                  <Image src={f.img} alt={f.title} width={180} height={180} className="img-circle" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <span style={{ position: "absolute", top: "-0.5rem", right: "-0.5rem", width: 42, height: 42, borderRadius: "50%", background: "var(--color-cream)", border: "1.5px solid var(--color-accent)", fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                    {f.num}
                  </span>
                </div>
                <h3 className="h-serif" style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>{f.title}</h3>
                <p style={{ color: "var(--color-text)", fontSize: "0.95rem" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" style={{ background: "var(--color-cream-deep)", padding: "6rem 0" }}>
        <div style={container}>
          <SectionHeading>Event packages</SectionHeading>
          <p style={{ textAlign: "center", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.2rem", color: "var(--color-ink)", margin: "0 auto 4rem", maxWidth: 600 }}>
            Choose a package or build a custom bar to fit your event.
          </p>

          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", alignItems: "stretch", position: "relative" }}>
            {packages.map((pkg) => (
              <div key={pkg.label} className={`pricing-card ${pkg.popular ? "popular" : ""}`}>
                {pkg.popular && (
                  <span style={{ position: "absolute", top: "-1rem", left: "50%", transform: "translateX(-50%)", background: "var(--color-cream-deep)", padding: "0.3rem 1.2rem", fontFamily: "var(--font-script)", fontSize: "1.4rem", color: "var(--color-hover)", border: "1.5px solid var(--color-ink)", whiteSpace: "nowrap" }}>
                    Most Popular
                  </span>
                )}
                <p className="h-eyebrow">{pkg.label}</p>
                <p className="h-serif" style={{ fontSize: "1.7rem", margin: "0.5rem 0 0.25rem" }}>
                  Starting at <span className="text-amber">{pkg.price}</span>
                  <span style={{ fontSize: "0.95rem", color: "var(--color-text)", fontFamily: "var(--font-sans)", fontWeight: 400 }}>  / guest</span>
                </p>
                <p style={{ color: "var(--color-text)", fontSize: "0.92rem", margin: "0 0 1rem" }}>{pkg.tagline}</p>
                <hr className="divider" />
                <p style={{ fontStyle: "italic", fontSize: "0.9rem", color: "var(--color-ink)", margin: "0 0 0.75rem" }}>Designed for:</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {pkg.items.map((it) => (
                    <li key={it} style={{ display: "flex", gap: "0.7rem", fontSize: "0.93rem" }}>
                      <span className="text-amber">›</span>{it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.92rem", color: "var(--color-text)", fontStyle: "italic" }}>
            All packages include professional bartenders and up to 4 hours of service unless otherwise specified.
          </p>

          <div style={{ background: "var(--color-cream-soft)", border: "1px solid var(--color-rule)", padding: "3rem 2.5rem", marginTop: "3rem", maxWidth: 880, marginLeft: "auto", marginRight: "auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <p className="h-eyebrow" style={{ marginBottom: "0.5rem" }}>Custom Bar Options</p>
              <p style={{ color: "var(--color-text)", fontSize: "0.95rem", margin: 0 }}>For more flexibility, customize your bar service based on your event needs.</p>
            </div>
            <div>
              {customOptions.map((opt, i) => (
                <div key={opt.name} style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", padding: "1.1rem 0", borderBottom: i < customOptions.length - 1 ? "1px solid var(--color-rule)" : "none" }}>
                  <span className="h-serif" style={{ fontSize: "1.05rem", fontWeight: 500 }}>{opt.name}</span>
                  <span style={{ color: "var(--color-text)" }}>{opt.body}</span>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: "0.88rem", color: "var(--color-text)", marginTop: "1.5rem", fontStyle: "italic" }}>
              All event packages are subject to a <strong style={{ color: "var(--color-ink)", fontStyle: "normal" }}>$75</strong> event coordination fee.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "var(--color-cream)", padding: "6rem 0" }}>
        <div style={container}>
          <SectionHeading>How it works</SectionHeading>
          <p style={{ textAlign: "center", color: "var(--color-text)", margin: "0 auto 4rem", maxWidth: 560 }}>
            A simple process designed to make planning your bar service easy.
          </p>
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {steps.map((s) => (
              <div key={s.num} className="card" style={{ display: "flex", flexDirection: "column", gap: "1rem", padding: "2.5rem 2rem" }}>
                <span className="numeral">{s.num}</span>
                <h3 className="h-serif" style={{ fontSize: "1.35rem", margin: 0 }}>{s.title}</h3>
                <hr className="divider" style={{ margin: 0 }} />
                <p style={{ color: "var(--color-text)", fontSize: "0.95rem", margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: "var(--color-cream)", borderTop: "1px solid var(--color-cream-deep)", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <SectionHeading>Contact us</SectionHeading>
          <p className="h-eyebrow" style={{ textAlign: "center", margin: "1.5rem 0 0.5rem" }}>Tell us about your event</p>
          <p style={{ textAlign: "center", color: "var(--color-text)", maxWidth: 560, margin: "0 auto 3rem" }}>
            Planning an event? Share a few details below and we&apos;ll help you build a bar experience that fits your vision, guest count, and budget.
          </p>
          <EventForm />
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </>
  );
}
