"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import WallLabel from "@/components/WallLabel";
import { WORKS, CATEGORIES, type Work } from "@/lib/data";

export default function WorkGrid() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<Work | null>(null);

  const filtered = WORKS.filter((w) => filter === "All" || w.category === filter);

  const closeLightbox = () => setLightbox(null);

  const step = (dir: number) => {
    if (!lightbox) return;
    const idx = filtered.findIndex((w) => w.id === lightbox.id);
    const next = filtered[(idx + dir + filtered.length) % filtered.length];
    setLightbox(next);
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, filtered]);

  return (
    <section className="work-page">
      <Reveal>
        <div className="work-header">
          <h1 className="page-title">Work</h1>
          <div className="filter-row" role="tablist" aria-label="Filter by category">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={`filter-pill ${filter === c ? "filter-pill-active" : ""}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="masonry">
        {filtered.map((w, i) => (
          <Reveal key={w.id} className="masonry-item" delay={(i % 6) * 60}>
            <button
              className="art-card"
              onClick={() => setLightbox(w)}
              aria-label={`Open ${w.title} in fullscreen viewer`}
            >
              <img src={w.image} alt={w.title} className={`art-card-image ${w.heightClass}`} loading="lazy" />
              <span className="art-card-zoom">View</span>
            </button>
            <WallLabel title={w.title} year={w.year} medium={w.medium} />
          </Reveal>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close viewer">
            <X size={22} strokeWidth={1} />
          </button>

          <button className="lightbox-nav lightbox-prev" onClick={() => step(-1)} aria-label="Previous artwork">
            <ChevronLeft size={26} strokeWidth={1} />
          </button>

          <div className="lightbox-content">
            <img src={lightbox.image} alt={lightbox.title} className="lightbox-image" />
            <WallLabel
              title={lightbox.title}
              year={lightbox.year}
              medium={lightbox.medium}
              series={lightbox.series}
              align="center"
            />
            <Link href={`/work/${lightbox.id}`} className="text-link" onClick={closeLightbox}>
              View full details <ArrowUpRight size={14} strokeWidth={1.25} />
            </Link>
          </div>

          <button className="lightbox-nav lightbox-next" onClick={() => step(1)} aria-label="Next artwork">
            <ChevronRight size={26} strokeWidth={1} />
          </button>
        </div>
      )}
    </section>
  );
}
