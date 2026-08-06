import type { Metadata } from "next";
import { Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import { ARTIST } from "@/lib/data";

export const metadata: Metadata = {
  title: "CV Profile | Pichakorn Chukiew Tuapennot",
  description: `About ${ARTIST.name} — biography, artist statement, and CV.`,
};

export default function CVProfilePage() {
  return (
    <section className="cv-page">
      <div className="cv-grid">
        <Reveal className="cv-portrait-wrap">
          <img
            src="https://picsum.photos/seed/pichakorn-portrait/700/900"
            alt={`Portrait of ${ARTIST.name}`}
            className="cv-portrait"
          />
        </Reveal>

        <Reveal className="cv-copy" delay={100}>
          <p className="section-eyebrow">CV Profile</p>
          <h1 className="page-title">{ARTIST.name}</h1>

          {ARTIST.bio.map((p, i) => (
            <p key={i} className="cv-paragraph">
              {p}
            </p>
          ))}

          <button className="cv-button" type="button">
            <Download size={14} strokeWidth={1.25} /> Download CV (PDF)
          </button>
        </Reveal>
      </div>

      <Reveal className="statement-block">
        <p className="section-eyebrow">Artist Statement</p>
        <p className="statement-text">{ARTIST.statement}</p>
      </Reveal>
    </section>
  );
}
