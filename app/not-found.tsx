import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="contact-page" style={{ textAlign: "center" }}>
      <p className="section-eyebrow">404</p>
      <h1 className="page-title">Page not found</h1>
      <p className="intro-text" style={{ marginTop: "1rem", marginBottom: "2rem" }}>
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className="hero-cta" style={{ display: "inline-flex" }}>
        Back to Home <ArrowRight size={16} strokeWidth={1.25} />
      </Link>
    </section>
  );
}
