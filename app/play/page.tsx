import Link from "next/link";
import type { Metadata } from "next";
import { PLAY_ITEMS, type PlayItem } from "@/lib/play";

export const metadata: Metadata = {
  title: "Play — Julian Zhu",
  description:
    "Side projects, experiments, and creative-coding pieces — lower polish, more fun.",
};

export default function PlayIndexPage() {
  return (
    <main className="play-index">
      <div className="play-index-nav">
        <Link href="/" className="case-nav-back">
          <span aria-hidden>←</span> Home
        </Link>
        <span className="case-nav-home">Play</span>
      </div>

      <header className="play-index-hero">
        <div className="eyebrow">Side of fries</div>
        <h1 className="play-index-title">
          <em>Play</em>
        </h1>
        <p className="play-index-sub">
          Side projects, experiments, and creative-coding pieces. Lower polish, more fun — built because I wanted to.
        </p>
      </header>

      <section className="play-grid">
        {PLAY_ITEMS.map((p) => (
          <PlayTile key={p.slug} item={p} />
        ))}
      </section>

      <footer className="case-footer">
        <Link href="/" className="case-footer-home">
          ← Back home
        </Link>
        <Link href="/work" className="case-footer-email">
          → All work
        </Link>
      </footer>
    </main>
  );
}

function PlayTile({ item }: { item: PlayItem }) {
  const inner = (
    <>
      <div className="play-tile-thumb-wrap">
        {item.thumbnail ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={item.thumbnail}
            alt={item.name}
            className="play-tile-thumb"
            loading="lazy"
          />
        ) : (
          <div className="play-tile-thumb-placeholder" aria-hidden>
            <span>{item.name.charAt(0)}</span>
          </div>
        )}
      </div>
      <div className="play-tile-meta">
        <div className="play-tile-row">
          <div className="play-tile-name">{item.name}</div>
          <div className="play-tile-year">{item.year}</div>
        </div>
        <div className="play-tile-chips">
          {item.chips.map((c) => (
            <span key={c} className="play-tile-chip">
              {c}
            </span>
          ))}
        </div>
        {item.description && (
          <div className="play-tile-desc">{item.description}</div>
        )}
      </div>
    </>
  );

  if (item.hasDetail) {
    return (
      <Link href={`/play/${item.slug}`} className="play-tile">
        {inner}
      </Link>
    );
  }
  if (item.externalUrl) {
    return (
      <a
        href={item.externalUrl}
        className="play-tile"
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }
  return <div className="play-tile play-tile-static">{inner}</div>;
}
