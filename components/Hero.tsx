"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HeroAsciiField } from "@/components/HeroAsciiField";
import { SITE } from "@/lib/site";

const ROLES = SITE.roles;
const articleForRole = (role: string) => (/^[aeiou]/i.test(role) ? "An" : "A");

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [layoutKey, setLayoutKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let timeout = 0;
    const onResize = () => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setLayoutKey((key) => key + 1);
      }, 180);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden>
        <HeroAsciiField />
      </div>
      <div className="hero-bottom-glow" aria-hidden />
      <div className="hero-bottom-arc" aria-hidden />
      <div className="hero-content" key={`copy-${layoutKey}`}>
        <h1 className="hero-name">
          {SITE.name} builds AI imagination tools.
        </h1>
        <p className="hero-role">
          {articleForRole(ROLES[roleIdx])}&nbsp;
          <span key={roleIdx} className="hero-role-word animate-role-fade-in">
            {ROLES[roleIdx]}
          </span>
          &nbsp;based in {SITE.location}.
        </p>
        <div className="hero-ctas">
          <Link className="btn btn-solid" href="/#work">
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              See Works <span aria-hidden>→</span>
            </span>
          </Link>
          <a className="btn btn-outline" href={SITE.socials.email}>
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              Reach out <span aria-hidden>↗</span>
            </span>
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="eyebrow" style={{ letterSpacing: "0.2em" }}>SCROLL</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}
