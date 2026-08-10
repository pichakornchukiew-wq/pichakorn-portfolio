"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { key: "home", label: "Home", href: "/" },
  { key: "work", label: "Work", href: "/work" },
  { key: "cv", label: "CV Profile", href: "/cv" },
  { key: "exhibition", label: "Exhibition", href: "/exhibition" },
  { key: "contact", label: "Contact", href: "/contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const go = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    }
  };

  return (
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="logo" aria-label="Pichakorn Chukiew Tuapennot, home">
          PICHAKORN&nbsp;CHUKIEW&nbsp;TUAPENNOT
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) =>
            l.href.startsWith("/#") ? (
              <button
                key={l.key}
                onClick={() => go(l.href)}
                className="nav-link"
              >
                {l.label}
              </button>
            ) : (
              <Link
                key={l.key}
                href={l.href}
                className={`nav-link ${isActive(pathname, l.href) ? "nav-link-active" : ""}`}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={20} strokeWidth={1.25} /> : <Menu size={20} strokeWidth={1.25} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="nav-mobile" aria-label="Primary mobile">
          {LINKS.map((l) =>
            l.href.startsWith("/#") ? (
              <button key={l.key} onClick={() => go(l.href)} className="nav-mobile-link">
                {l.label}
              </button>
            ) : (
              <Link key={l.key} href={l.href} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
