import type { Metadata } from "next";
import { Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import { ARTIST, type CVEntry } from "@/lib/data";

export const metadata: Metadata = {
  title: "CV Profile | Pichakorn Chukiew Tuapennot",
  description: `About ${ARTIST.name} — biography, artist statement, and CV.`,
};

function CVSection({ title, entries }: { title: string; entries: CVEntry[] }) {
  if (!entries || entries.length === 0) return null;
  return (
    <div className="cv-section">
      <p className="cv-section-title">{title}</p>
      {entries.map((e, i) => (
        <p key={i} className="cv-entry-line">
          {e.year ? `${e.year} - ` : ""}
          {e.text}
        </p>
      ))}
    </div>
  );
}

export default function CVProfilePage() {
  return (
    <section className="cv-page">
      <div className="cv-grid">
        <Reveal className="cv-portrait-wrap">
          <img
            src="/pichakorn-portrait.jpg"
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

      <Reveal className="cv-history-block">
        <p className="section-eyebrow">CV</p>
        <CVSection title="Education" entries={ARTIST.education} />
        <CVSection title="Solo Exhibition" entries={ARTIST.soloExhibitions} />
        <CVSection title="Group Exhibition" entries={ARTIST.groupExhibitions} />
        <CVSection title="Collaboration Project" entries={ARTIST.collaborations} />
        <CVSection title="Art in Residency" entries={ARTIST.residencies} />
        <CVSection title="Design" entries={ARTIST.design} />
        <CVSection title="Award" entries={ARTIST.awards} />
      </Reveal>

      <Reveal className="statement-block">
        <p className="section-eyebrow">Artist Statement</p>
        <p className="statement-text">{ARTIST.statement}</p>
      </Reveal>
    </section>
  );
}
