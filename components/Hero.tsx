"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useHls, HLS_SRC } from "./useHls";
import { SITE } from "@/lib/site";

const ROLES = SITE.roles;

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useHls(videoRef, HLS_SRC);

  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".name-reveal", { opacity: 1, y: 0, duration: 1.2, delay: 0.1 });
      tl.to(
        ".blur-in",
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        "-=0.8"
      );
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-fade" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow eyebrow blur-in">COLLECTION &rsquo;26</div>
        <h1 className="hero-name name-reveal">{SITE.name}</h1>
        <p className="hero-role blur-in">
          A&nbsp;
          <span key={roleIdx} className="hero-role-word animate-role-fade-in">
            {ROLES[roleIdx]}
          </span>
          &nbsp;based in {SITE.location}.
        </p>
        <p className="hero-desc blur-in">{SITE.pitch}</p>
        <div className="hero-ctas blur-in">
          <a className="btn btn-solid" href="#work">
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              See Works <span aria-hidden>→</span>
            </span>
          </a>
          <a className="btn btn-outline" href="#contact">
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
