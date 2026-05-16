"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PLAY_ITEMS, type PlayItem } from "@/lib/play";

/**
 * Visual playground — Bending Spoons "iconic products" arc pattern.
 *
 * Cards sit in a horizontal arc with CSS 3D perspective. Each card's tilt
 * + depth is recomputed every tick from a rolling `centerIdx` so the arc
 * appears to slowly rotate around its center axis — the BS iconic-products
 * cylinder feel. Hover pauses the rotation; the active center card can be
 * clicked to navigate to /play.
 *
 * Items must have a real thumbnail or src; PLAY_ITEMS without an asset are
 * filtered upstream so the earlier "giant S" letter fallback never returns.
 */

function previewItems(): PlayItem[] {
  return PLAY_ITEMS.filter((p) => Boolean(p.thumbnail || p.src)).slice(0, 7);
}

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];
/** Seconds between auto-advancing the arc one slot. */
const ROTATE_INTERVAL_MS = 3200;

export function Explorations() {
  const items = previewItems();
  const [centerIdx, setCenterIdx] = useState(Math.floor(items.length / 2));
  const pausedRef = useRef(false);

  // Auto-rotate: every ROTATE_INTERVAL_MS, advance one slot. Pause on hover
  // (the user is reading / about to click), respect reduced motion.
  useEffect(() => {
    if (items.length <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      if (pausedRef.current) return;
      setCenterIdx((c) => (c + 1) % items.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section className="explorations-arc-section" id="explorations">
      <div className="explorations-arc-inner">
        <motion.div
          className="explorations-arc-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="section-header-eyebrow">
            <span className="eyebrow">Explorations</span>
          </div>
          <h2 className="section-heading">
            Visual <em>playground</em>
          </h2>
          <p className="section-sub">
            Posters, motion studies, GIFs, 3D scenes, and visual tests that live
            outside client briefs.
          </p>
          <Link
            className="view-all-btn"
            style={{ display: "inline-flex", marginTop: 24 }}
            href="/play"
          >
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              Visit playground <span aria-hidden>→</span>
            </span>
          </Link>
        </motion.div>

        <div
          className="explorations-arc-row"
          role="list"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          {items.map((item, i) => {
            // Compute offset relative to the currently-centered slot.
            // Wrap so cards near the edges become "shortest distance" rather
            // than always huge — mod arithmetic for circular arc behavior.
            let raw = i - centerIdx;
            const half = Math.floor(items.length / 2);
            if (raw > half) raw -= items.length;
            if (raw < -half) raw += items.length;
            const offset = raw;
            const tilt = offset * -22; // outer cards rotate inward
            const depth = -Math.abs(offset) * 90; // outer cards pushed back
            const opacity = 1 - Math.abs(offset) * 0.08;
            const thumb = item.thumbnail ?? item.src ?? "";
            const isCenter = offset === 0;
            return (
              <motion.div
                key={item.slug}
                role="listitem"
                className={
                  "explorations-arc-slot" +
                  (isCenter ? " explorations-arc-slot-center" : "")
                }
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity, y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: EASE,
                }}
                style={{ zIndex: 10 - Math.abs(offset) }}
              >
                <div
                  className="explorations-arc-tile"
                  style={{
                    transform: `rotateY(${tilt}deg) translateZ(${depth}px)`,
                  }}
                >
                  <Link
                    href="/play"
                    className="explorations-arc-link"
                    aria-label={item.name ?? `Play item ${i + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={thumb}
                      alt={item.name ?? ""}
                      className="explorations-arc-img"
                      loading="lazy"
                    />
                    {item.name && (
                      <div className="explorations-arc-label">{item.name}</div>
                    )}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
