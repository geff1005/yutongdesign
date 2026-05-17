"use client";

import { useEffect, useState } from "react";

/**
 * Inline backdrop-filter — Lightning CSS (Tailwind 4 / Next 16 build
 * pipeline) was stripping `backdrop-filter` from globals.css at compile
 * time, leaving the pill nav opaque-white instead of glassy. Setting it
 * via the React style prop bypasses the optimizer.
 */
const GLASS_STYLE: React.CSSProperties = {
  backdropFilter: "blur(24px) saturate(190%)",
  WebkitBackdropFilter: "blur(24px) saturate(190%)",
};

type Link = { label: string; href: string; external?: boolean };
const LINKS: Link[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Play", href: "/play" },
  { label: "Press", href: "#journal" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open + close on Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Desktop pill nav — visible >= 768px */}
      <div className="nav-wrap nav-wrap-desktop">
        <nav
          className={"nav-pill" + (scrolled ? " scrolled" : "")}
          style={GLASS_STYLE}
        >
          <a className="nav-logo" href="#top" aria-label="Home">
            <span className="nav-logo-inner">JZ</span>
          </a>
          <span className="nav-divider" />
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className={"nav-link" + (active === l.label ? " active" : "")}
              onClick={() => setActive(l.label)}
            >
              {l.label}
              {l.external && <span aria-hidden> ↗</span>}
            </a>
          ))}
          <span className="nav-divider" />
          <a className="say-hi" href="#contact">
            <span className="say-hi-bg" />
            <span className="say-hi-inner">
              Say hi <span aria-hidden>↗</span>
            </span>
          </a>
        </nav>
      </div>

      {/* Mobile bar — visible < 768px */}
      <div className="nav-wrap nav-wrap-mobile">
        <a className="nav-logo nav-logo-mobile" href="#top" aria-label="Home">
          <span className="nav-logo-inner">JZ</span>
        </a>
        <button
          className="nav-hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav-overlay"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={"nav-hamburger-icon" + (open ? " open" : "")}>
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        id="mobile-nav-overlay"
        className={"nav-overlay" + (open ? " open" : "")}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        onClick={(e) => {
          // Click on backdrop closes; clicks on nav-overlay-inner bubble up if they're not links
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <div className="nav-overlay-inner">
          <nav className="nav-overlay-list">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="nav-overlay-link"
                onClick={() => {
                  setActive(l.label);
                  setOpen(false);
                }}
              >
                {l.label}
                {l.external && <span aria-hidden> ↗</span>}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-overlay-link nav-overlay-link-cta"
              onClick={() => setOpen(false)}
            >
              Say hi <span aria-hidden>↗</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
