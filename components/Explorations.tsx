"use client";

import Link from "next/link";
import { PLAY_ITEMS, type PlayItem } from "@/lib/play";

// Take a small, mixed preview set for the homepage. Items must have a real
// visual asset (thumbnail OR src image). Spline-only entries with no poster
// image are excluded — they used to fall through to a giant-letter fallback
// which read as visual noise rather than a teaser.
function previewItems(): PlayItem[] {
  return PLAY_ITEMS.filter((p) => Boolean(p.thumbnail || p.src)).slice(0, 8);
}

export function Explorations() {
  const items = previewItems();

  return (
    <section className="explorations" id="explorations">
      <div className="explorations-inner">
        <div className="explorations-copy">
          <div className="section-header-eyebrow">
            <span className="eyebrow">Explorations</span>
          </div>
          <h2 className="section-heading">
            Visual <em>playground</em>
          </h2>
          <p className="section-sub" style={{ marginBottom: 28 }}>
            Posters, motion studies, GIFs, 3D scenes, and visual tests that live outside client briefs.
          </p>
          <Link
            className="view-all-btn"
            style={{ display: "inline-flex" }}
            href="/play"
          >
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              Visit playground <span aria-hidden>→</span>
            </span>
          </Link>
        </div>

        <div className="playground-preview" aria-label="Selected play items">
          {items.map((p, index) => (
            <PreviewCard key={p.slug} item={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PreviewCard({ item, index }: { item: PlayItem; index: number }) {
  const thumb = item.thumbnail ?? item.src ?? null;
  // Guard: if an item somehow slips through without a thumb, skip rendering
  // entirely rather than fall back to a giant letter glyph.
  if (!thumb) return null;
  return (
    <Link href="/play" className={`playground-preview-card card-${index + 1}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumb}
        alt={item.name ?? ""}
        className="playground-preview-img"
        loading="lazy"
      />
    </Link>
  );
}
