"use client";

import Link from "next/link";
import { PLAY_ITEMS, type PlayItem } from "@/lib/play";

// Take a small, mixed preview set for the homepage. Skip items that have no
// thumbnail / src yet so manual placeholders never leak into the visual teaser.
function previewItems(): PlayItem[] {
  return PLAY_ITEMS.filter(
    (p) => p.thumbnail || p.src || p.kind === "spline"
  ).slice(0, 8);
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
  const inner = thumb ? (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={thumb}
      alt={item.name ?? ""}
      className="playground-preview-img"
      loading="lazy"
    />
  ) : (
    <div className="playground-preview-fallback">{item.name?.charAt(0) ?? "•"}</div>
  );
  return (
    <Link href="/play" className={`playground-preview-card card-${index + 1}`}>
      {inner}
    </Link>
  );
}
