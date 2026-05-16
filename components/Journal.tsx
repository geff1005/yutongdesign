"use client";

import { useLayoutEffect, useRef } from "react";
import { PRESS } from "@/lib/press";

/**
 * Press & recognition — horizontal scroll-snap gallery.
 *
 * Desktop: GSAP ScrollTrigger pins the section to the top of the viewport
 * and translates the inner track horizontally as the user scrolls vertically.
 * Mobile: falls back to native horizontal scroll-snap (no pin, no jack).
 *
 * Reference: bendingspoons.com — same pin-and-scrub pattern for their press /
 * customer story rows.
 */

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
  });
}

export function Journal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      // Mobile: native horizontal scroll-snap handles it — skip GSAP pin.
      if (window.matchMedia("(max-width: 768px)").matches) return;
      if (!sectionRef.current || !trackRef.current) return;

      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const track = trackRef.current;
      const section = sectionRef.current;

      const ctx = gsap.context(() => {
        const getTranslate = () =>
          Math.max(0, track.scrollWidth - section.clientWidth);

        gsap.to(track, {
          x: () => -getTranslate(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getTranslate()}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }, section);

      cleanup = () => ctx.revert();
    })();

    return () => cleanup?.();
  }, []);

  const sorted = [...PRESS].sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
    return a.date < b.date ? 1 : -1;
  });

  return (
    <section className="press-h-section" id="journal" ref={sectionRef}>
      <div className="press-h-inner">
        <div className="press-h-header">
          <div className="section-header-eyebrow">
            <span className="eyebrow">Recent thinking</span>
          </div>
          <h2 className="section-heading">
            Press <em>&amp; recognition</em>
          </h2>
          <p className="section-sub">
            Coverage, awards, and exhibitions — scroll to read across.
          </p>
        </div>

        <div className="press-h-track-wrap">
          <div className="press-h-track" ref={trackRef}>
            {sorted.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "press-tile" + (item.pinned ? " press-tile-pinned" : "")
                }
              >
                {item.thumbnail ? (
                  <div className="press-tile-img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="press-tile-img"
                      loading="lazy"
                      onError={(e) => {
                        const wrap = e.currentTarget.parentElement;
                        if (!wrap) return;
                        wrap.classList.add("press-tile-img-wrap-fallback");
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    {item.pinned && (
                      <span className="press-tile-pin" aria-hidden>
                        ★
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="press-tile-img-wrap press-tile-img-wrap-fallback">
                    <span className="press-tile-fallback-tag eyebrow">
                      {item.pinned ? "★ " : ""}
                      {item.tag ?? "Press"}
                    </span>
                  </div>
                )}
                <div className="press-tile-body">
                  <div className="press-tile-meta-top eyebrow">
                    {item.tag ? `${item.tag} · ` : ""}
                    {item.outlet}
                  </div>
                  <h3 className="press-tile-title">{item.title}</h3>
                  <div className="press-tile-meta-bottom">
                    <span>{formatDate(item.date)}</span>
                    <span className="press-tile-arrow" aria-hidden>
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
