import Image from "next/image";
import SectionHeading from "../../components/section-heading";
import { OutlineButton } from "../../components/button";

const container = { maxWidth: "1080px", margin: "0 auto", padding: "0 1.5rem" };

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "65vh",
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
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, margin: "0 0 0.75rem" }}>
            Built on Experience, Designed for Real Service
          </h1>
          <p style={{ fontFamily: "var(--font-script)", color: "var(--color-hover)", fontSize: "2rem", margin: 0 }}>
            The Story So Far
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "5rem 1.5rem" }}>
        <div style={{ ...container, maxWidth: "760px" }}>
          <SectionHeading>Origin Story</SectionHeading>
          <div style={{ marginTop: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ textAlign: "center", lineHeight: 1.8 }}>
              I started working in restaurants when I was 13, beginning in a local breakfast diner in Toronto. From there, I worked across a mix of places — coffee shops, lunch spots, and bars — getting experience in different types of service and learning how things actually run day-to-day.
            </p>
            <p style={{ textAlign: "center", lineHeight: 1.8 }}>
              Over time, that shaped how I approach hospitality. Not just from a creative side, but from an operational one — understanding how service flows, how teams work together, and how the small details really impact the overall experience.
            </p>
            <p style={{ textAlign: "center", lineHeight: 1.8 }}>
              In 2019, I started working in events, and I saw the opportunity to bring that experience into a different environment. Events require a different level of structure, where preparation and execution matter just as much as the drinks themselves.
            </p>
            <p style={{ textAlign: "center", lineHeight: 1.8 }}>
              In 2023, I started In The Mix as a way to bring all of that together. What I had been doing for years in restaurants translated naturally into building bar programs and event services that are not just creative, but actually work in real service.
            </p>
            <p style={{ textAlign: "center", lineHeight: 1.8 }}>
              Now, everything I do is grounded in that experience — close to 20 years in hospitality, focused on creating bar programs and event experiences that feel polished, run smoothly, and make sense behind the bar.
            </p>
          </div>
        </div>
      </section>

      {/* From Service to Systems */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4rem 1.5rem", borderTop: "1px solid #e0d8cf" }}>
        <div style={container}>
          <h2
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              margin: "0 0 3rem",
              color: "#1a1a1a",
            }}
          >
            FROM SERVICE TO SYSTEMS
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <p style={{ lineHeight: 1.8 }}>
              After years working in hospitality, my approach naturally evolved beyond just service. I started focusing more on how things are built — from menu structure to workflow — and how those decisions impact the way service actually runs.
            </p>
            <Image
              src="/drink1.jpg"
              alt="Robyn at work"
              width={480}
              height={380}
              style={{ width: "100%", height: "320px", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4rem 1.5rem", borderTop: "1px solid #e0d8cf" }}>
        <div style={container}>
          <SectionHeading>What I Build</SectionHeading>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}
          >
            {/* Event Bartending card */}
            <div className="service-card" style={{ textAlign: "center" }}>
              <h3 style={{ fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", color: "#1a1a1a" }}>
                EVENT BARTENDING
              </h3>
              <Image
                src="/drink1.jpg"
                alt="Event Bartending"
                width={160}
                height={160}
                className="img-circle"
                style={{ width: "150px", height: "150px", margin: "0 auto 1.25rem" }}
              />
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                Thoughtful bar service designed to elevate both the drinks and the guest experience. Every detail — from menu to execution — is built to run smoothly in real time.
              </p>
              <hr style={{ border: "none", borderTop: "1px solid #d4b896", margin: "1rem 0" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "left" }}>
                {["Custom cocktail menus", "Structured prep and batching systems", "Professional, efficient service", "A polished guest experience from start to finish"].map((item) => (
                  <li key={item} style={{ fontSize: "0.9rem", padding: "0.3rem 0", color: "var(--color-text)" }}>
                    • {item}
                  </li>
                ))}
              </ul>
              <hr style={{ border: "none", borderTop: "1px solid #d4b896", margin: "1rem 0" }} />
            </div>

            {/* Hospitality Consulting card */}
            <div className="service-card" style={{ textAlign: "center" }}>
              <h3 style={{ fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem", color: "#1a1a1a" }}>
                HOSPITALITY CONSULTING
              </h3>
              <Image
                src="/drink2.jpg"
                alt="Hospitality Consulting"
                width={160}
                height={160}
                className="img-circle"
                style={{ width: "150px", height: "150px", margin: "0 auto 1.25rem" }}
              />
              <p style={{ fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                Beverage programs, menu development, and operational systems designed to support both creativity and functionality — built to perform in real service environments.
              </p>
              <hr style={{ border: "none", borderTop: "1px solid #d4b896", margin: "1rem 0" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: 0, textAlign: "left" }}>
                {["Cocktail and menu development", "Costing and pricing strategy", "Workflow and system design", "Training and operational structure"].map((item) => (
                  <li key={item} style={{ fontSize: "0.9rem", padding: "0.3rem 0", color: "var(--color-text)" }}>
                    • {item}
                  </li>
                ))}
              </ul>
              <hr style={{ border: "none", borderTop: "1px solid #d4b896", margin: "1rem 0" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Built Around the Guest Experience */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "5rem 1.5rem", borderTop: "1px solid #e0d8cf" }}>
        <div style={{ ...container, maxWidth: "760px", textAlign: "center" }}>
          <h2 style={{ fontWeight: 700, fontSize: "clamp(1.3rem, 3vw, 1.8rem)", letterSpacing: "0.05em", textTransform: "uppercase", margin: "0 0 2rem", color: "#1a1a1a" }}>
            BUILT AROUND THE GUEST EXPERIENCE
          </h2>
          <p style={{ lineHeight: 1.8, marginBottom: "1rem" }}>
            Great hospitality is about how everything comes together — from the atmosphere, to the flow of service, to how the guest feels from start to finish.
          </p>
          <p style={{ lineHeight: 1.8, marginBottom: "2rem" }}>
            We&apos;re not just here to serve drinks, we&apos;re here to create experiences.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {[
              "Service should be attentive, efficient, and personable",
              "Every detail should support the overall experience",
              "Good service should feel effortless",
            ].map((line) => (
              <p key={line} style={{ fontWeight: 700, fontStyle: "italic", fontSize: "1.1rem", margin: 0, color: "#1a1a1a" }}>
                {line}
              </p>
            ))}
          </div>
          <p style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}>
            At the end of the day, the guest experience is at the forefront of everything.
          </p>
          <OutlineButton href="/contact">Contact Us</OutlineButton>
        </div>
      </section>
    </>
  );
}
