"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { PlaceholderImg } from "./PlaceholderImg";

type Card = { hue: number; label: string };

const LEFT: Card[] = [
  { hue: 220, label: "Study 01" },
  { hue: 40, label: "Study 02" },
  { hue: 320, label: "Study 03" },
];
const RIGHT: Card[] = [
  { hue: 140, label: "Study 04" },
  { hue: 20, label: "Study 05" },
  { hue: 260, label: "Study 06" },
];

export function Explorations() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);
  const [lightbox, setLightbox] = useState<Card | null>(null);

  useLayoutEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, stMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        if (!sectionRef.current || !contentRef.current) return;
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: contentRef.current,
          pinSpacing: false,
        });

        gsap.to(leftColRef.current, {
          y: -200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(rightColRef.current, {
          y: -380,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, sectionRef);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section className="explorations" ref={sectionRef} id="explorations">
      <div className="explorations-pinned" ref={contentRef}>
        <div className="explorations-pinned-inner">
          <div className="section-header-eyebrow">
            <span className="eyebrow">Explorations</span>
          </div>
          <h2 className="section-heading">
            Visual <em>playground</em>
          </h2>
          <p className="section-sub" style={{ marginBottom: 28 }}>
            Motion studies, type tests, and interface sketches — work that lives
            outside client briefs.
          </p>
          <a
            className="view-all-btn"
            style={{ display: "inline-flex" }}
            href="#"
          >
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              Dribbble <span aria-hidden>↗</span>
            </span>
          </a>
        </div>
      </div>

      <div className="parallax-gallery">
        <div className="parallax-cols">
          <div className="parallax-col left" ref={leftColRef}>
            {LEFT.map((c) => (
              <div
                key={c.label}
                className="parallax-card"
                onClick={() => setLightbox(c)}
              >
                <PlaceholderImg label={c.label} hue={c.hue} className="" />
              </div>
            ))}
          </div>
          <div className="parallax-col right" ref={rightColRef}>
            {RIGHT.map((c) => (
              <div
                key={c.label}
                className="parallax-card"
                onClick={() => setLightbox(c)}
              >
                <PlaceholderImg label={c.label} hue={c.hue} className="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={"lightbox" + (lightbox ? " open" : "")}
        onClick={() => setLightbox(null)}
      >
        {lightbox && (
          <PlaceholderImg label={lightbox.label} hue={lightbox.hue} className="" />
        )}
        <button
          className="lightbox-close"
          onClick={(e) => {
            e.stopPropagation();
            setLightbox(null);
          }}
        >
          ✕
        </button>
      </div>
    </section>
  );
}
