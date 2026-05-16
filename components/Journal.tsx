"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRESS } from "@/lib/press";

/**
 * Press & recognition — single-card carousel with ← → navigation.
 *
 * Pattern: Bending Spoons "Invest Like The Best" video carousel. One large
 * card visible at a time, big hero image, title bottom-left, ← → buttons
 * centered below, keyboard nav + drag-to-swipe. No scroll-jacking, no pin.
 *
 * The full press list is also reachable from the small "View all → /press"
 * link in the header for users who'd rather skim a list.
 */

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

export function Journal() {
  const sorted = [
    ...PRESS.slice().sort((a, b) => {
      if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
      return a.date < b.date ? 1 : -1;
    }),
  ];
  const [index, setIndex] = useState(0);
  const total = sorted.length;

  const next = useCallback(
    () => setIndex((i) => (i + 1) % total),
    [total]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );

  // Keyboard nav — ← → arrows when the section is in view.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    const section = document.getElementById("journal");
    if (!section) return;
    let active = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
      },
      { threshold: 0.4 }
    );
    io.observe(section);
    function bound(e: KeyboardEvent) {
      if (active) onKey(e);
    }
    window.addEventListener("keydown", bound);
    return () => {
      io.disconnect();
      window.removeEventListener("keydown", bound);
    };
  }, [next, prev]);

  const item = sorted[index];

  return (
    <section className="press-c-section" id="journal">
      <div className="press-c-inner">
        <div className="press-c-header">
          <div className="section-header-eyebrow">
            <span className="eyebrow">Recent thinking</span>
          </div>
          <h2 className="section-heading">
            Press <em>&amp; recognition</em>
          </h2>
          <p className="section-sub">
            Coverage, awards, and exhibitions — newest first. {index + 1} / {total}
          </p>
        </div>

        <div className="press-c-stage">
          <AnimatePresence mode="wait" initial={false}>
            <motion.a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                "press-c-card" + (item.pinned ? " press-c-card-pinned" : "")
              }
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.55, ease: EASE }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                else if (info.offset.x > 80) prev();
              }}
            >
              <div className="press-c-image-wrap">
                {item.thumbnail ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="press-c-image"
                    draggable={false}
                  />
                ) : (
                  <div className="press-c-image-fallback">
                    <span className="eyebrow">{item.tag ?? "Press"}</span>
                  </div>
                )}
                {item.pinned && (
                  <span className="press-c-pin" aria-hidden>
                    ★ Featured
                  </span>
                )}
              </div>
              <div className="press-c-body">
                <div className="press-c-meta-top eyebrow">
                  {item.tag ? `${item.tag} · ` : ""}
                  {item.outlet}
                </div>
                <h3 className="press-c-title">{item.title}</h3>
                <div className="press-c-meta-bottom">
                  <span>{formatDate(item.date)}</span>
                  <span className="press-c-arrow" aria-hidden>
                    Read ↗
                  </span>
                </div>
              </div>
            </motion.a>
          </AnimatePresence>
        </div>

        <div className="press-c-controls">
          <button
            type="button"
            className="press-c-btn"
            onClick={prev}
            aria-label="Previous"
          >
            <span aria-hidden>←</span>
          </button>
          <div className="press-c-dots" role="tablist" aria-label="Press carousel">
            {sorted.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={
                  "press-c-dot" + (i === index ? " press-c-dot-active" : "")
                }
                onClick={() => setIndex(i)}
                aria-label={`Go to item ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            className="press-c-btn"
            onClick={next}
            aria-label="Next"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
