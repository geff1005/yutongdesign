"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="nav-wrap">
      <nav className={"nav-pill" + (scrolled ? " scrolled" : "")}>
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
  );
}
