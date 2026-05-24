"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { SELECTED_FEATURED } from "@/lib/projects";

/**
 * Selected Works — Bending Spoons "Products" card pattern.
 * The whole tile is the themed product surface; video is not nested inside
 * another thumbnail frame.
 */

const featuredCardThemes: Record<string, { bg: string; ink?: string; muted?: string }> = {
  smataste: { bg: "#f7ddd2", ink: "#211c1a", muted: "rgba(33, 28, 26, 0.58)" },
  "co-cerebral": { bg: "#e9ff45", ink: "#11120d", muted: "rgba(17, 18, 13, 0.58)" },
  skgplus: { bg: "#0e1624", ink: "#f6f8ff", muted: "rgba(246, 248, 255, 0.64)" },
  beatrol: { bg: "#9eb4c9", ink: "#101820", muted: "rgba(16, 24, 32, 0.58)" },
  poeticform: { bg: "#eef4ff", ink: "#091433", muted: "rgba(9, 20, 51, 0.58)" },
  greenmove: { bg: "#cfe9bc", ink: "#10160f", muted: "rgba(16, 22, 15, 0.58)" },
  syncoe: { bg: "#d8e8f8", ink: "#0b1724", muted: "rgba(11, 23, 36, 0.58)" },
  "meta-station": { bg: "#d8d5ff", ink: "#15122a", muted: "rgba(21, 18, 42, 0.58)" },
  bytedance: { bg: "#f6d6c7", ink: "#211815", muted: "rgba(33, 24, 21, 0.58)" },
};

export function SelectedWorks() {
  return (
    <section className="section sw-section" id="work">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-header-eyebrow">
              <span className="eyebrow">SELECTED_SYSTEMS / 01</span>
            </div>
            <h2 className="section-heading">
              Featured projects
            </h2>
            <p className="section-sub">
              AI products, client systems, industrial design, and speculative
              interface studies.
            </p>
          </div>
          <Link href="/work" className="view-all-btn">
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              More work <span aria-hidden>→</span>
            </span>
          </Link>
        </div>

        <div className="sw-grid">
          {SELECTED_FEATURED.map((p, i) => (
            <div key={p.slug} className="sw-card-shell">
              {(() => {
                const generatedPoster = `/generated/featured/${p.slug}.jpg`;
                const generatedVideo = `/generated/featured/${p.slug}.mp4`;
                const theme = featuredCardThemes[p.slug] ?? {
                  bg: "hsl(var(--surface))",
                  ink: "hsl(var(--text))",
                  muted: "hsl(var(--muted))",
                };
                const cardStyle = {
                  "--sw-card-bg": theme.bg,
                  "--sw-card-ink": theme.ink,
                  "--sw-card-muted": theme.muted,
                } as CSSProperties;

                return (
              <Link href={p.href} className="sw-card" style={cardStyle}>
                <div className="sw-card-copy">
                  <div className="sw-card-head">
                    <div className="sw-card-head-left">
                      <div className="sw-card-name">{p.title}</div>
                      {p.type && (
                        <div className="sw-card-type eyebrow">{p.type}</div>
                      )}
                    </div>
                    <span className="sw-card-cta">
                      Open case <span aria-hidden>↗</span>
                    </span>
                  </div>

                  <p className="sw-card-tagline">{p.description}</p>
                </div>

                <div className="sw-card-media-wrap">
                  <video
                    className="sw-card-media sw-card-video"
                    poster={generatedPoster}
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload={i < 2 ? "metadata" : "none"}
                    aria-hidden
                  >
                    <source src={generatedVideo} type="video/mp4" />
                  </video>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={generatedPoster}
                    alt={p.title}
                    className="sw-card-media sw-card-poster"
                    loading={i < 2 ? "eager" : "lazy"}
                    onError={(event) => {
                      event.currentTarget.src = p.thumbnail;
                    }}
                  />
                  {p.award && (
                    <span className="sw-card-award-chip">
                      <span aria-hidden>★</span> Awarded
                    </span>
                  )}
                </div>
              </Link>
                );
              })()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
