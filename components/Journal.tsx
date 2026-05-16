"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRESS } from "@/lib/press";

/**
 * Press & recognition — GSAP-showcase 3-card layout.
 *
 * Layout: previous card peeks from the left (smaller, dimmed, clickable),
 * active card sits center (full size), next card peeks from the right
 * (smaller, dimmed, clickable). ← → buttons + dots below. Drag/swipe + arrow
 * keys also work.
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

type Press = (typeof PRESS)[number];

function PressCard({
  item,
  isActive,
  onActivate,
}: {
  item: Press;
  isActive: boolean;
  onActivate?: () => void;
}) {
  return (
    <a
      href={isActive ? item.url : undefined}
      target={isActive ? "_blank" : undefined}
      rel={isActive ? "noopener noreferrer" : undefined}
      onClick={(e) => {
        if (!isActive) {
          e.preventDefault();
          onActivate?.();
        }
      }}
      className={
        "press-c-card" +
        (item.pinned ? " press-c-card-pinned" : "") +
        (isActive ? " press-c-card-active" : " press-c-card-peek")
      }
      aria-hidden={!isActive}
      tabIndex={isActive ? 0 : -1}
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
        {item.pinned && isActive && (
          <span className="press-c-pin" aria-hidden>
            ★ Featured
          </span>
        )}
      </div>
      {isActive && (
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
      )}
    </a>
  );
}

export function Journal() {
  const sorted = [
    ...PRESS.slice().sort((a, b) => {
      if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
      return a.date < b.date ? 1 : -1;
    }),
  ];
  const [index, setIndex] = useState(0);
  const total = sorted.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    const section = document.getElementById("journal");
    if (!section) return;
    let active = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
      },
      { threshold: 0.35 }
    );
    io.observe(section);
    function onKey(e: KeyboardEvent) {
      if (!active) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      io.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, [next, prev]);

  const prevItem = sorted[(index - 1 + total) % total];
  const activeItem = sorted[index];
  const nextItem = sorted[(index + 1) % total];

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
            Coverage, awards, and exhibitions — newest first. {index + 1} /{" "}
            {total}
          </p>
        </div>

        <div className="press-c-stage">
          <div
            className="press-c-card-slot press-c-card-slot-prev"
            onClick={prev}
            aria-label="Previous"
          >
            <PressCard item={prevItem} isActive={false} onActivate={prev} />
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeItem.url}
              className="press-c-card-slot press-c-card-slot-active"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -32 }}
              transition={{ duration: 0.5, ease: EASE }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next();
                else if (info.offset.x > 80) prev();
              }}
            >
              <PressCard item={activeItem} isActive />
            </motion.div>
          </AnimatePresence>

          <div
            className="press-c-card-slot press-c-card-slot-next"
            onClick={next}
            aria-label="Next"
          >
            <PressCard item={nextItem} isActive={false} onActivate={next} />
          </div>
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
          <div className="press-c-dots" role="tablist" aria-label="Press">
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
