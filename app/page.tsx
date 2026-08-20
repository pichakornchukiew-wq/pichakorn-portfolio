import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import WallLabel from "@/components/WallLabel";
import { WORKS, EXHIBITION_WORK_IDS, HERO_IMAGE, ARTIST } from "@/lib/data";

export default function HomePage() {
  const hero = WORKS[0];
  const exhibitionWorks = WORKS.filter((w) => EXHIBITION_WORK_IDS.includes(w.id));

  return (
    <div>
      <section className="hero">
        <Image
         src={HERO_IMAGE} 
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="hero-eyebrow">Painting — Sculpture — Drawing</p>
          <h1 className="hero-title">Pichakorn Chukiew Tuapennot</h1>
          <p className="hero-intro">
            A studio practice built slowly, in series, around stillness, duration,
            and the rooms we leave behind.
          </p>
          <Link href="/work" className="hero-cta">
            Enter Work <ArrowRight size={16} strokeWidth={1.25} />
          </Link>
        </div>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span />
        </div>
      </section>

      <section className="intro-block">
        <Reveal>
          <p className="intro-text">{ARTIST.statement}</p>
        </Reveal>
      </section>

      <section id="exhibition" className="exhibition">
        <Reveal>
          <p className="section-eyebrow">Exhibition</p>
        </Reveal>

        {exhibitionWorks.map((w, i) => (
          <Reveal key={w.id} className="exhibition-row" delay={i * 80}>
            <Link
              href={`/work/${w.id}`}
              className={`exhibition-media ${i % 2 === 1 ? "order-2" : ""}`}
              aria-label={`View ${w.title}`}
            >
              <img src={w.image} alt={w.title} />
            </Link>
            <div className={`exhibition-copy ${i % 2 === 1 ? "order-1" : ""}`}>
              <WallLabel title={w.title} year={w.year} medium={w.medium} series={w.series} />
              <p className="exhibition-desc">{w.description}</p>
              <Link href={`/work/${w.id}`} className="text-link">
                View work <ArrowUpRight size={14} strokeWidth={1.25} />
              </Link>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
