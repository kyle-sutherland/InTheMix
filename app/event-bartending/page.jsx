import Image from "next/image";
import SectionHeading from "../../components/section-heading";
import { OutlineButton } from "../../components/button";
import EventForm from "../../components/forms/event-form";

const container = { maxWidth: "1080px", margin: "0 auto", padding: "0 1.5rem" };

const features = [
  {
    title: "Professional Bar Service",
    desc: "Experienced bartenders who bring both professionalism and hospitality to every event. From setup to the final pour, service is polished, efficient, and focused on creating a great experience for you and your guests.",
    img: "/drink1.jpg",
  },
  {
    title: "Custom Cocktail Menus",
    desc: "Every event is unique, and the drinks should reflect that. Custom cocktail menus are thoughtfully developed to match the tone of your event while keeping service smooth and consistent behind the bar.",
    img: "/drink2.jpg",
  },
  {
    title: "Seamless Event Execution",
    desc: "Behind every smooth bar service is thoughtful planning. Through structured batching, organized prep, and clear bar workflow, drinks are served efficiently so guests spend less time waiting and more time enjoying the event.",
    img: "/drink3.jpg",
  },
];

const packages = [
  {
    label: "CLASSIC BAR",
    price: "$38",
    tagline: "Perfect for straightforward bar service",
    items: ["Beer, wine, and standard spirits", "Mix and garnish", "Glassware service"],
    popular: false,
  },
  {
    label: "SIGNATURE COCKTAIL BAR",
    price: "$45",
    tagline: "Ideal for a curated cocktail experience",
    items: ["3 Signature cocktails", "Mix and garnish", "Glassware service"],
    popular: true,
  },
  {
    label: "FULL EVENT BAR",
    price: "$52",
    tagline: "Best for a complete, all-inclusive bar",
    items: ["3 Signature cocktails", "Beer, wine, and standard spirits", "Mix and garnish", "Glassware service"],
    popular: false,
  },
];

const customOptions = [
  { name: "Bartending Service", price: "$40 per hour per bartender", sub: "(4 hour minimum)" },
  { name: "Mix & Garnish Program", price: "Starting at $10 per guest" },
  { name: "Glassware", price: "Starting at $7 per guest" },
  { name: "Liquor packages", price: "Beer, wine, & spirits from $20 per guest", sub: "Signature cocktail batching from $25 per guest" },
];

const steps = [
  {
    num: "1",
    title: "Select Your Package",
    desc: "Review our event bar packages and choose the option that best fits your event. Whether you're looking for a classic bar, a curated cocktail menu, or full service, each package is designed to deliver a seamless and elevated experience.",
  },
  {
    num: "2",
    title: "Customize Your Bar",
    desc: "Tailor your bar service to your event. From signature cocktails and upgraded selections to glassware and additional enhancements, we'll refine the details to ensure everything aligns with your vision and runs smoothly during service.",
  },
  {
    num: "3",
    title: "Confirm the Details",
    desc: "Once everything is finalized, we'll confirm all logistics and ensure every detail is in place. From setup to last call, your bar service is structured to run efficiently so you can focus on enjoying your event.",
  },
];

export default function EventBartendingPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "5rem 1.5rem",
          overflow: "hidden",
          backgroundColor: "#1a1a1a",
        }}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, margin: "0 0 1rem", maxWidth: "700px" }}>
            Thoughtful Cocktails. Seamless Service. Memorable Events.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-script)",
              color: "var(--color-hover)",
              fontSize: "1.8rem",
              margin: "0 0 2rem",
            }}
          >
            Weddings • Private Events • Corporate Functions
          </p>
          <OutlineButton href="/contact">Request a Quote</OutlineButton>
        </div>
      </section>

      {/* Intro + 3 features */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "5rem 1.5rem" }}>
        <div style={container}>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 1rem", lineHeight: 1.7 }}>
            Where great cocktails, professional service, and attention to detail come together to create a memorable event.
          </p>
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3.5rem", lineHeight: 1.7 }}>
            In The Mix provides professional event bartending designed to elevate both the drinks and the experience. From custom cocktail menus to thoughtful batching systems, every bar program is structured to deliver great cocktails, efficient service, and a polished guest experience from the first pour to the last.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2.5rem" }}>
            {features.map((f) => (
              <div key={f.title} style={{ textAlign: "center" }}>
                <Image
                  src={f.img}
                  alt={f.title}
                  width={220}
                  height={220}
                  className="img-circle"
                  style={{ width: "200px", height: "200px", margin: "0 auto 1.25rem", display: "block" }}
                />
                <h3 style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.75rem", color: "#1a1a1a" }}>{f.title}</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--color-text)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Packages */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4rem 1.5rem", borderTop: "1px solid #e0d8cf" }}>
        <div style={container}>
          <SectionHeading>Event Packages</SectionHeading>
          <p style={{ textAlign: "center", fontWeight: 600, margin: "1.5rem 0 2.5rem", fontSize: "1.05rem" }}>
            Choose a package or build a custom bar to fit your event.
          </p>

          <div style={{ position: "relative", display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
            {/* Most Popular badge */}
            <div
              style={{
                position: "absolute",
                top: "-1.5rem",
                left: "50%",
                transform: "translateX(-50%)",
                border: "1.5px solid #1a1a1a",
                padding: "0.3rem 1.5rem",
                fontFamily: "var(--font-script)",
                fontSize: "1.3rem",
                background: "var(--color-cream)",
                whiteSpace: "nowrap",
                zIndex: 2,
              }}
            >
              Most Popular
            </div>

            {packages.map((pkg) => (
              <div
                key={pkg.label}
                className="pricing-card"
                style={{
                  flex: "1 1 240px",
                  maxWidth: "320px",
                  borderColor: pkg.popular ? "#1a1a1a" : "#e0d8cf",
                  borderWidth: pkg.popular ? "1.5px" : "1px",
                }}
              >
                <p style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
                  {pkg.label}
                </p>
                <p style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.25rem" }}>
                  Starting at <span style={{ color: "var(--color-accent)" }}>{pkg.price}</span> per guest
                </p>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "1rem" }}>{pkg.tagline}</p>
                <hr style={{ border: "none", borderTop: "1px solid #d4b896", marginBottom: "1rem" }} />
                <p style={{ fontStyle: "italic", fontSize: "0.9rem", marginBottom: "0.5rem" }}>Designed for:</p>
                <ul style={{ paddingLeft: "1rem", margin: 0 }}>
                  {pkg.items.map((item) => (
                    <li key={item} style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--color-text)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
                <hr style={{ border: "none", borderTop: "1px solid #d4b896", marginTop: "1rem" }} />
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", fontSize: "0.9rem", marginTop: "1.5rem", color: "var(--color-text)" }}>
            All packages include professional bartenders and up to 4 hours of service unless otherwise specified.
          </p>

          {/* Custom Bar Options */}
          <div
            style={{
              border: "1px solid #e0d8cf",
              borderRadius: "0.5rem",
              padding: "2rem",
              marginTop: "2.5rem",
              textAlign: "center",
            }}
          >
            <p style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              CUSTOM BAR OPTIONS
            </p>
            <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem", color: "var(--color-text)" }}>
              For more flexibility, customize your bar service based on your event needs.
            </p>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
              {customOptions.map((opt) => (
                <div
                  key={opt.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid #e0d8cf",
                    gap: "1rem",
                  }}
                >
                  <span style={{ fontWeight: 500, fontSize: "0.95rem", textAlign: "left" }}>{opt.name}</span>
                  <span style={{ textAlign: "right", fontSize: "0.9rem", color: "var(--color-text)" }}>
                    {opt.price}
                    {opt.sub && <><br /><span style={{ fontSize: "0.85rem" }}>{opt.sub}</span></>}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.9rem", marginTop: "1rem", color: "var(--color-text)" }}>
              All event packages are subject to a <strong>$75</strong> event coordination fee
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4rem 1.5rem", borderTop: "1px solid #e0d8cf" }}>
        <div style={container}>
          <SectionHeading>How It Works</SectionHeading>
          <p style={{ textAlign: "center", margin: "1rem 0 2.5rem", color: "var(--color-text)" }}>
            A simple process designed to make planning your bar service easy.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {steps.map((step) => (
              <div key={step.num} className="step-card">
                <div className="step-number">{step.num}</div>
                <h3 style={{ fontWeight: 600, fontSize: "1.1rem", textAlign: "center", color: "#1a1a1a", margin: 0, width: "100%" }}>
                  {step.title}
                </h3>
                <hr style={{ border: "none", borderTop: "1px solid #d4b896", width: "100%" }} />
                <p style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "var(--color-text)", margin: 0 }}>{step.desc}</p>
                <hr style={{ border: "none", borderTop: "1px solid #d4b896", width: "100%", marginTop: "auto" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4rem 1.5rem 5rem", borderTop: "1px solid #e0d8cf" }}>
        <div style={{ ...container, maxWidth: "640px" }}>
          <SectionHeading>Contact Us</SectionHeading>
          <h2 style={{ textAlign: "center", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase", margin: "1.5rem 0 0.5rem" }}>
            TELL ME ABOUT YOUR EVENT
          </h2>
          <p style={{ textAlign: "center", fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "2rem" }}>
            Planning an event? Share a few details and we&apos;ll follow up with availability and next steps.
          </p>
          <EventForm />
        </div>
      </section>
    </>
  );
}
