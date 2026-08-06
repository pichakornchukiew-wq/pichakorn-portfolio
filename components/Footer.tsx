import Link from "next/link";
import { Mail, Instagram, MapPin, ArrowRight } from "lucide-react";
import { ARTIST } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-logo">PICHAKORN CHUKIEW TUAPENNOT</p>
          <p className="footer-loc">{ARTIST.location}</p>
        </div>

        <div className="footer-links">
          <a href={`mailto:${ARTIST.email}`} className="footer-link">
            <Mail size={14} strokeWidth={1.25} />
            {ARTIST.email}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <Instagram size={14} strokeWidth={1.25} />
            {ARTIST.instagram}
          </a>
          <span className="footer-link">
            <MapPin size={14} strokeWidth={1.25} />
            {ARTIST.location}
          </span>
        </div>

        <Link href="/work" className="footer-back">
          View Work <ArrowRight size={14} strokeWidth={1.25} />
        </Link>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Pichakorn Chukiew Tuapennot. All rights reserved.</span>
      </div>
    </footer>
  );
}
