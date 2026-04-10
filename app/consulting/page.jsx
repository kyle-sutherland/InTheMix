import Image from "next/image";
import SectionHeading from "../../components/section-heading";
import { OutlineButton } from "../../components/button";
import ConsultingForm from "../../components/forms/consulting-form";

const container = { maxWidth: "1080px", margin: "0 auto", padding: "0 1.5rem" };

const consultingPackages = [
  {
    badge: "Core Specialty",
    title: "BEVERAGE PROGRAM DEVELOPMENT",
    items: [
      { label: "Cocktail & mocktail menu development", desc: "Custom cocktail and mocktail menus built around your concept, space, and target demographic. Every drink is developed with both creativity and real service in mind — designed to be consistent, efficient to execute, and aligned with your overall program." },
      { label: "Menu engineering & pricing strategy", desc: "Menu structuring and pricing built to improve profitability and guide guest decision-making. From how drinks are placed to how they're priced, everything is designed to feel clear, intentional, and make sense for your business." },
      { label: "Costed specifications", desc: "Clear cocktail specs with built-in costing to support consistency and profitability. Designed to be easy to execute while keeping costs in line with your concept and target demographic." },
      { label: "Batch systems & prep structure", desc: "Batching and prep systems built to make service smoother and more manageable. Focused on keeping things consistent, efficient, and easy to execute behind the bar." },
    ],
    img: "/drink1.jpg",
  },
  {
    title: "CULINARY PROGRAM DEVELOPMENT",
    items: [
      { label: "Food & beverage alignment", desc: "Food and beverage programs developed to work together and support the overall concept. Focused on creating a menu that feels cohesive, intentional, and consistent with the experience you want to create." },
      { label: "Kitchen workflow design", desc: "Kitchen workflows built to make service run more smoothly. Focused on how the space functions, helping teams work more efficiently and keeping things consistent during service." },
      { label: "Food costing & margin review", desc: "Food costing and margin review to make sure your pricing makes sense for your concept and target demographic. Focused on improving profitability while keeping the menu balanced and sustainable." },
      { label: "Pairing strategy & concept cohesion", desc: "Pairing and menu development designed to bring everything together and support the overall concept. Focused on creating a cohesive and intentional experience where food and beverage feel connected." },
    ],
    img: "/drink2.jpg",
  },
  {
    title: "OPERATIONS & SERVICE INFRASTRUCTURE",
    items: [
      { label: "Bar & kitchen workflow design", desc: "Bar and/or kitchen workflow designs built to ensure service runs smoothly and efficiently. Focused on improving communication, consistency, and how each area functions day-to-day." },
      { label: "Production forecasting", desc: "Production forecasting to help you better plan prep, ordering, and volume. Focused on reducing waste, improving efficiency, and making service easier to execute." },
      { label: "Standard operating procedures (SOPs)", desc: "Standard operating procedures built to give your team clear direction and structure. Focused on making training easier, improving communication, and keeping everyone on the same page." },
      { label: "Training documentation & implementation", desc: "Training documentation and implementation built to support your team day-to-day. Focused on making expectations clear, improving onboarding, and helping systems carry through into service." },
    ],
    img: "/drink3.jpg",
  },
  {
    title: "FULL CONCEPT DEVELOPMENT",
    items: [
      { label: "Concept & brand alignment", desc: "Concept and brand alignment to make sure everything is working toward the same vision. Focused on building a concept that feels intentional, cohesive, and makes sense for the experience you want to create." },
      { label: "Integrated menu development (food & beverage)", desc: "Food and beverage menus developed together to work as one cohesive program. Focused on creating a menu that feels balanced, intentional, and aligned with the overall concept." },
      { label: "Operational system design", desc: "Operational systems built to support how things run day-to-day. Focused on creating structure behind the scenes so service feels smoother and easier to execute." },
      { label: "Cost & margin strategy", desc: "Cost and margin strategy designed to ensure pricing supports both profitability and sustainability. Focused on making sure your numbers make sense while maintaining the experience you want to deliver." },
      { label: "Pre-launch implementation support", desc: "Launch and implementation support to help bring everything together. Focused on making sure everything is set up properly and your team feels confident heading into service." },
    ],
    img: "/drink1.jpg",
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          backgroundColor: "#1a1a1a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "5rem 1.5rem",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%" }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, margin: "0 auto 0.75rem", maxWidth: "700px" }}>
            Thoughtful Hospitality, Built for Real Service
          </h1>
          <p style={{ fontFamily: "var(--font-script)", color: "var(--color-hover)", fontSize: "2rem", margin: "0 0 2rem" }}>
            Consulting
          </p>
          <OutlineButton href="/contact">Request a Quote</OutlineButton>
        </div>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "5rem 1.5rem" }}>
        <div style={{ ...container, maxWidth: "720px" }}>
          <p style={{ textAlign: "center", lineHeight: 1.8, marginBottom: "1rem" }}>
            Behind every great hospitality experience is thoughtful structure. In The Mix provides consulting for beverage programs, menus, and operational systems designed to support both creativity and smooth execution.
          </p>
          <p style={{ textAlign: "center", lineHeight: 1.8 }}>
            From concept development to workflow planning, every recommendation is grounded in real hospitality experience and built to perform during service.
          </p>
        </div>
      </section>

      {/* Consulting Packages */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "2rem 1.5rem 5rem", borderTop: "1px solid #e0d8cf" }}>
        <div style={container}>
          <SectionHeading>Consulting Packages</SectionHeading>

          <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {consultingPackages.map((pkg) => (
              <div key={pkg.title} className="service-card">
                {pkg.badge && (
                  <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                    <span
                      style={{
                        display: "inline-block",
                        border: "1.5px solid #1a1a1a",
                        padding: "0.2rem 1.5rem",
                        fontFamily: "var(--font-script)",
                        fontSize: "1.3rem",
                      }}
                    >
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 400px" }}>
                    <h2 style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "0.1em", marginBottom: "1.5rem", color: "#1a1a1a" }}>
                      {pkg.title}
                    </h2>
                    <div>
                      {pkg.items.map((item) => (
                        <div key={item.label} className="service-item">
                          <span>{item.label}</span>
                          <span className="service-item-chevron">›</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <Image
                      src={pkg.img}
                      alt={pkg.title}
                      width={200}
                      height={200}
                      className="img-circle"
                      style={{ width: "180px", height: "180px" }}
                    />
                  </div>
                </div>
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
            TELL ME ABOUT YOUR PROJECT
          </h2>
          <p style={{ textAlign: "center", fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "2rem" }}>
            Every concept is different, and the best solutions are built around how you want your space to feel and function. If you&apos;re exploring an idea or looking to improve an existing program, I&apos;d love to hear more.
          </p>
          <ConsultingForm />
        </div>
      </section>
    </>
  );
}
