import SectionHeading from "../../components/section-heading";
import { OutlineButton } from "../../components/button";

export const metadata = {
  title: "Blog",
  description: "Insights on event bartending, hospitality consulting, and building beverage programs.",
  // Not linked from nav yet and excluded from the sitemap until it has posts.
  robots: { index: false, follow: true },
};

export default function BlogPage() {
  return (
    <section style={{ backgroundColor: "var(--color-cream)", padding: "6rem 1.5rem", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
        <SectionHeading>Blog</SectionHeading>
        <p style={{ marginTop: "2rem", color: "var(--color-text)", lineHeight: 1.8, maxWidth: "500px", margin: "2rem auto" }}>
          Insights on event bartending, beverage program development, and building hospitality systems that work — coming soon.
        </p>
        <OutlineButton href="/contact" style={{ marginTop: "1.5rem" }}>Get In Touch</OutlineButton>
      </div>
    </section>
  );
}
