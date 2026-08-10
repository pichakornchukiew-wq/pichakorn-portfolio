import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { EXHIBITIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Exhibition | Pichakorn Chukiew Tuapennot",
  description: "Exhibition history and documentation.",
};

export default function ExhibitionPage() {
  return (
    <section className="exhibition-page">
      <Reveal>
        <p className="section-eyebrow">Exhibition</p>
        <h1 className="page-title">Exhibition History</h1>
      </Reveal>

      {EXHIBITIONS.map((ex, i) => (
        <Reveal key={ex.slug} className="exhibition-entry" delay={i * 80}>
          <p className="exhibition-entry-type">{ex.type}</p>
          <h2 className="exhibition-entry-title">{ex.title}</h2>
          <p className="exhibition-entry-meta">
            {ex.venue} — {ex.dates}
          </p>

          <div className="exhibition-entry-images">
            {ex.images.map((src, j) => (
              <img
                key={j}
                src={src}
                alt={`${ex.title} ${j + 1}`}
                className="exhibition-entry-image"
              />
            ))}
          </div>

          <div className="exhibition-entry-text">
            {ex.text.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </Reveal>
      ))}
    </section>
  );
}
