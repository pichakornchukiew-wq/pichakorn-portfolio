import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { WORKS, getWorkById, getAdjacentWorks } from "@/lib/data";

interface ArtworkPageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return WORKS.map((w) => ({ id: String(w.id) }));
}

export function generateMetadata({ params }: ArtworkPageProps): Metadata {
  const work = getWorkById(Number(params.id));
  if (!work) return {};
  return {
    title: `${work.title} | Pichakorn Chukiew Tuapennot`,
    description: work.description,
  };
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const id = Number(params.id);
  const work = getWorkById(id);

  if (!work) {
    notFound();
  }

  const { prev, next } = getAdjacentWorks(id);

  return (
    <section className="artwork-page">
      <Reveal>
        <Link href="/work" className="text-link back-link">
          <ChevronLeft size={14} strokeWidth={1.25} /> Back to Work
        </Link>
      </Reveal>

      <div className="artwork-grid">
        <Reveal className="artwork-image-wrap">
          <img src={work.image} alt={work.title} className="artwork-image" />
        </Reveal>

        <Reveal className="artwork-info" delay={100}>
          <p className="section-eyebrow">{work.series}</p>
          <h1 className="artwork-title">{work.title}</h1>

          <dl className="spec-list">
            <div className="spec-row">
              <dt>Year</dt>
              <dd>{work.year}</dd>
            </div>
            <div className="spec-row">
              <dt>Medium</dt>
              <dd>{work.medium}</dd>
            </div>
            <div className="spec-row">
              <dt>Dimensions</dt>
              <dd>{work.dimensions}</dd>
            </div>
            <div className="spec-row">
              <dt>Series</dt>
              <dd>{work.series}</dd>
            </div>
          </dl>

          <p className="artwork-desc">{work.description}</p>
        </Reveal>
      </div>

      <div className="artwork-pager">
        <Link href={`/work/${prev.id}`} className="pager-btn">
          <ChevronLeft size={16} strokeWidth={1.25} />
          <span>
            <span className="pager-label">Previous</span>
            <span className="pager-title">{prev.title}</span>
          </span>
        </Link>
        <Link href={`/work/${next.id}`} className="pager-btn pager-btn-right">
          <span>
            <span className="pager-label">Next</span>
            <span className="pager-title">{next.title}</span>
          </span>
          <ChevronRight size={16} strokeWidth={1.25} />
        </Link>
      </div>
    </section>
  );
}
