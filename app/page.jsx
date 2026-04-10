import Image from "next/image";
import SectionHeading from "../components/section-heading";
import { OutlineButton } from "../components/button";
import EventForm from "../components/forms/event-form";
import ConsultingForm from "../components/forms/consulting-form";

const container = {
  maxWidth: "1080px",
  margin: "0 auto",
  padding: "0 1.5rem",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "4rem 1.5rem",
          overflow: "hidden",
        }}
      >
        <Image
          src="/main-animation-avif.avif"
          fill
          alt=""
          priority
          unoptimized
          style={{ objectFit: "cover", zIndex: 0 }}
        />
<div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              margin: "0 0 1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Pride in the Pour
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            Crafted cocktails, thoughtful hospitality, and systems that make great service possible.
          </p>
          <OutlineButton href="/contact" variant="light">Contact Us</OutlineButton>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "5rem 1.5rem" }}>
        <div style={container}>
          <SectionHeading>What We Do</SectionHeading>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              marginTop: "3rem",
              alignItems: "start",
            }}
          >
            {/* Event Bartending */}
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <Image
                  src="/drink1.jpg"
                  alt="Event Bartending"
                  width={480}
                  height={320}
                  style={{ width: "100%", height: "280px", objectFit: "cover" }}
                />
              </div>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#1a1a1a",
                  margin: "0 0 1rem",
                }}
              >
                Event Bartending
              </h2>
              <p style={{ color: "var(--color-text)", lineHeight: 1.7, marginBottom: "0.75rem", fontSize: "1rem" }}>
                Elevated bar service designed to bring both professionalism and personality to your event. From custom cocktail menus to seamless service behind the bar, In The Mix focuses on creating thoughtful drink experiences that feel polished, intentional, and memorable.
              </p>
              <p style={{ color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem" }}>
                Whether you&apos;re hosting a wedding, corporate event, or private celebration, every bar program is structured for smooth service and great cocktails from the first pour to the last.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <OutlineButton href="/event-bartending">Learn More</OutlineButton>
              </div>
            </div>

            {/* Hospitality Consulting */}
            <div>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#1a1a1a",
                  margin: "0 0 1rem",
                }}
              >
                Hospitality Consulting
              </h2>
              <p style={{ color: "var(--color-text)", lineHeight: 1.7, marginBottom: "0.75rem", fontSize: "1rem" }}>
                Great hospitality experiences don&apos;t happen by accident — they&apos;re built with intention behind the scenes. Through consulting, In The Mix works with bars, restaurants, and hospitality concepts to develop thoughtful menus, beverage programs, and operational systems designed to support smooth, consistent service.
              </p>
              <p style={{ color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem" }}>
                From concept development to menu design and workflow planning, the focus is always the same: creating hospitality programs that look great on paper and perform just as well in real service.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <OutlineButton href="/consulting">Learn More</OutlineButton>
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <Image
                  src="/drink2.jpg"
                  alt="Hospitality Consulting"
                  width={480}
                  height={320}
                  style={{ width: "100%", height: "280px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section style={{ backgroundColor: "var(--color-cream)", padding: "4rem 1.5rem 5rem", borderTop: "1px solid #e0d8cf" }}>
        <div style={container}>
          <SectionHeading>Contact Us</SectionHeading>
          <p style={{ textAlign: "center", margin: "1rem 0 3rem", color: "var(--color-text)" }}>
            Have a question or ready to get started?{" "}
            Whether you&apos;re planning an event or exploring consulting services, share a few details below and we&apos;ll be in touch soon.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Event Bartending
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "1.5rem" }}>
                Planning an event? Share a few details and we&apos;ll follow up with availability and next steps.
              </p>
              <EventForm />
            </div>
            <div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Hospitality Consulting
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "1.5rem" }}>
                Tell us a little about your project and we&apos;ll be in touch to discuss how we can help.
              </p>
              <ConsultingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
