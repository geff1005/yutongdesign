"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SELECTED_FEATURED } from "@/lib/projects";

/**
 * Selected Works — Bending Spoons "Products" card pattern.
 *
 * 2-column responsive grid of equal-height cards. Each card:
 *   - project name + type chip (top-left)
 *   - "View case ↗" link (top-right)
 *   - short tagline / description
 *   - large thumbnail / GIF / video (bottom)
 *
 * Replaces the old 4-up bento with mixed-size tiles. Uniform sizes scale
 * the section gracefully when more projects are added (extend SELECTED_FEATURED
 * in lib/projects.ts). Tomorrow the user will drop in AE-style GIFs which
 * slot into the same `thumbnail` field — no layout change needed.
 */

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

export function SelectedWorks() {
  return (
    <section className="section sw-section" id="work">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-header-eyebrow">
              <span className="eyebrow">Selected Work</span>
            </div>
            <h2 className="section-heading">
              Featured <em>projects</em>
            </h2>
            <p className="section-sub">
              A selection of projects spanning AI product design, real-client
              web, industrial design, and speculative content.
            </p>
          </div>
          <Link href="/work" className="view-all-btn">
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              View all work <span aria-hidden>→</span>
            </span>
          </Link>
        </div>

        <div className="sw-grid">
          {SELECTED_FEATURED.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: EASE,
                delay: Math.min(i * 0.06, 0.3),
              }}
            >
              <Link href={p.href} className="sw-card">
                <div className="sw-card-head">
                  <div className="sw-card-head-left">
                    <div className="sw-card-name">{p.title}</div>
                    {p.type && (
                      <div className="sw-card-type eyebrow">{p.type}</div>
                    )}
                  </div>
                  <span className="sw-card-cta">
                    View case <span aria-hidden>↗</span>
                  </span>
                </div>

                <p className="sw-card-tagline">{p.description}</p>

                <div className="sw-card-media-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="sw-card-media"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                  {p.award && (
                    <span className="sw-card-award-chip">
                      <span aria-hidden>★</span> Awarded
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
