"use client";

import { useLayoutEffect, useRef } from "react";
import { useHls, HLS_SRC } from "./useHls";

const SOCIALS = [
  { name: "Twitter", icon: "𝕏" },
  { name: "LinkedIn", icon: "in" },
  { name: "Dribbble", icon: "●" },
  { name: "GitHub", icon: "◉" },
];

const MARQUEE = new Array(10).fill("BUILDING THE FUTURE");

export function Contact() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  useHls(videoRef, HLS_SRC);

  useLayoutEffect(() => {
    let cancelled = false;
    let tween: { kill: () => void } | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled || !marqueeRef.current) return;
      tween = gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    })();

    return () => {
      cancelled = true;
      tween?.kill();
    };
  }, []);

  return (
    <section className="contact" id="contact">
      <div className="contact-video-wrap">
        <video
          ref={videoRef}
          className="contact-video"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="contact-overlay" />
        <div className="contact-top-fade" />
      </div>

      <div className="contact-inner">
        <div className="marquee">
          <div className="marquee-track" ref={marqueeRef}>
            {MARQUEE.concat(MARQUEE).map((t, i) => (
              <span key={i} className="marquee-item">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="contact-cta">
          <div className="contact-eyebrow eyebrow">Get in touch</div>
          <h2 className="contact-heading">
            Let&rsquo;s build
            <br />
            something good.
          </h2>
          <a className="email-btn" href="mailto:hello@julianzhu.com">
            <span>hello@julianzhu.com</span>
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="footer-bar">
          <div className="footer-copy">© 2026 Julian Zhu. All rights reserved.</div>
          <div className="footer-socials">
            {SOCIALS.map((s) => (
              <a key={s.name} className="footer-social" href="#" aria-label={s.name}>
                {s.icon}
              </a>
            ))}
          </div>
          <div className="footer-available">
            <span className="dot-green animate-pulse-dot" />
            Available for projects
          </div>
        </div>
      </div>
    </section>
  );
}
