import SectionHeading from "../../components/section-heading";
import EventForm from "../../components/forms/event-form";
import ConsultingForm from "../../components/forms/consulting-form";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with In The Mix for event bartending or hospitality consulting in Calgary. Request a quote for your event or project.",
  alternates: { canonical: "/contact" },
};

const container = { maxWidth: "1080px", margin: "0 auto", padding: "0 1.5rem" };

export default function ContactPage() {
  return (
    <section style={{ backgroundColor: "var(--color-cream)", padding: "5rem 1.5rem" }}>
      <div style={container}>
        <SectionHeading>Contact Us</SectionHeading>

        <p style={{ textAlign: "center", fontWeight: 600, margin: "1.5rem 0 0.5rem" }}>
          Have a question or ready to get started?
        </p>
        <p style={{ textAlign: "center", margin: "0 0 3.5rem", color: "var(--color-text)", maxWidth: "680px", marginLeft: "auto", marginRight: "auto" }}>
          Whether you&apos;re planning an event or exploring consulting services, share a few details below and we&apos;ll be in touch soon.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Event Bartending */}
          <div>
            <h2 style={{ fontWeight: 700, fontSize: "1.5rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>
              Event Bartending
            </h2>
            <p style={{ fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.02em", color: "var(--color-text)", marginBottom: "0.25rem" }}>
              Planning an event?
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "2rem", lineHeight: 1.6 }}>
              Share a few details and we&apos;ll follow up with availability and next steps.
            </p>
            <EventForm />
          </div>

          {/* Hospitality Consulting */}
          <div>
            <h2 style={{ fontWeight: 700, fontSize: "1.5rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>
              Hospitality Consulting
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-text)", marginBottom: "2rem", lineHeight: 1.6 }}>
              Tell us a little about your project and we&apos;ll be in touch to discuss how we can help.
            </p>
            <ConsultingForm />
          </div>
        </div>

        {/* Footer contact info */}
        <div style={{ textAlign: "center", marginTop: "4rem", borderTop: "1px solid #e0d8cf", paddingTop: "2rem" }}>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text)" }}>
            We will respond within 48 hours. Based in Calgary, available for event travel and remote consulting.
          </p>
          <p style={{ fontSize: "0.9rem", color: "var(--color-text)", marginTop: "0.5rem" }}>
            inthemixcalgary@gmail.com &nbsp;|&nbsp; 587-893-2204
          </p>
        </div>
      </div>
    </section>
  );
}
