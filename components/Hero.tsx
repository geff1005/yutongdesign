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
  const [londonDay, setLondonDay] = useState("");
  const [londonTime, setLondonTime] = useState("");

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

  useEffect(() => {
    const dayFormatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      weekday: "short",
    });
    const timeFormatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const syncTime = () => {
      const now = new Date();
      setLondonDay(dayFormatter.format(now).toUpperCase());
      setLondonTime(timeFormatter.format(now));
    };
    syncTime();
    const id = window.setInterval(syncTime, 30_000);
    return () => window.clearInterval(id);
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
          <span>based in</span>
          <span
            className="hero-time-pill"
            aria-label={`London time ${londonDay} ${londonTime}`.trim()}
          >
            <span className="hero-time-dot" aria-hidden />
            <span>London</span>
            {londonDay && <span>{londonDay}</span>}
            {londonTime && <time dateTime={londonTime}>{londonTime}</time>}
          </span>
          <span aria-hidden>.</span>
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

    </section>
  );
}
