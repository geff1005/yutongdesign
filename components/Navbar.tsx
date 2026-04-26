"use client";

import { useEffect, useState } from "react";

const LINKS = ["Home", "Work", "Resume"];

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
            key={l}
            href={"#" + l.toLowerCase()}
            className={"nav-link" + (active === l ? " active" : "")}
            onClick={() => setActive(l)}
          >
            {l}
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
