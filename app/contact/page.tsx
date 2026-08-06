import type { Metadata } from "next";
import { Mail, Instagram, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { ARTIST } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Pichakorn Chukiew Tuapennot",
  description: `Get in touch with ${ARTIST.name}'s studio.`,
};

export default function ContactPage() {
  return (
    <section className="contact-page">
      <Reveal>
        <p className="section-eyebrow">Contact</p>
        <h1 className="page-title">Get in touch</h1>
      </Reveal>

      <div className="contact-grid">
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>

        <Reveal delay={140} className="contact-details">
          <div className="contact-detail-row">
            <Mail size={16} strokeWidth={1.25} />
            <a href={`mailto:${ARTIST.email}`}>{ARTIST.email}</a>
          </div>
          <div className="contact-detail-row">
            <Instagram size={16} strokeWidth={1.25} />
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              {ARTIST.instagram}
            </a>
          </div>
          <div className="contact-detail-row">
            <MapPin size={16} strokeWidth={1.25} />
            <span>{ARTIST.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
