import SectionHeading from "../components/section-heading";
import { OutlineButton } from "../components/button";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section style={{ backgroundColor: "var(--color-cream)", padding: "6rem 1.5rem", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
        <SectionHeading>Page Not Found</SectionHeading>
        <p style={{ color: "var(--color-text)", lineHeight: 1.8, maxWidth: "500px", margin: "2rem auto" }}>
          We couldn&apos;t find the page you were looking for. It may have moved, or the
          link might be out of date.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <OutlineButton href="/">Back Home</OutlineButton>
          <OutlineButton href="/contact">Get In Touch</OutlineButton>
        </div>
      </div>
    </section>
  );
}
