"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PLAY_ITEMS, type PlayItem } from "@/lib/play";

/**
 * Visual playground — Bending Spoons "iconic products" arc pattern.
 *
 * Cards sit in a horizontal arc with CSS 3D perspective: the outer cards tilt
 * inward (rotateY proportional to distance from center) and recede in Z so the
 * row reads as a curved surface, not a flat strip. Hover flattens a card and
 * pulls it forward. Mobile falls back to native horizontal scroll-snap.
 *
 * Items must have a real thumbnail or src — the earlier giant-S-letter
 * fallback is gone, and PLAY_ITEMS without an asset are filtered upstream.
 */

function previewItems(): PlayItem[] {
  return PLAY_ITEMS.filter((p) => Boolean(p.thumbnail || p.src)).slice(0, 7);
}

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

export function Explorations() {
  const items = previewItems();
  const mid = (items.length - 1) / 2;

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

        <div className="explorations-arc-row" role="list">
          {items.map((item, i) => {
            const offset = i - mid; // negative on the left, positive on the right
            const tilt = offset * -22; // outer cards rotate inward (stronger curve)
            const depth = -Math.abs(offset) * 90; // outer cards pushed back
            const opacity = 1 - Math.abs(offset) * 0.06;
            const thumb = item.thumbnail ?? item.src ?? "";
            return (
              <motion.div
                key={item.slug}
                role="listitem"
                className="explorations-arc-tile"
                style={
                  {
                    "--arc-tilt": `${tilt}deg`,
                    "--arc-depth": `${depth}px`,
                    "--arc-opa": opacity,
                  } as React.CSSProperties
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: opacity, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  ease: EASE,
                  delay: Math.min(Math.abs(offset) * 0.07, 0.35),
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
                    <div className="explorations-arc-label">
                      {item.name}
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
