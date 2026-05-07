import Link from "next/link";
import type { Metadata } from "next";
import {
  itemsByCategory,
  CATEGORY_LABEL,
  type PlayItem,
} from "@/lib/play";

export const metadata: Metadata = {
  title: "Play — Julian Zhu",
  description:
    "Posters, motion studies, GIFs, 3D scenes, and live experiments — work that lives outside client briefs.",
};

export default function PlayIndexPage() {
  const groups = itemsByCategory();

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
          Posters, motion studies, GIFs, 3D scenes, and live experiments. Lower polish, more fun — small things you can scan in a minute.
        </p>
        {/* Category quick-jump */}
        <nav className="play-cat-nav" aria-label="Categories">
          {groups.map((g) => (
            <a
              key={g.category}
              href={`#cat-${g.category}`}
              className="play-cat-pill"
            >
              {CATEGORY_LABEL[g.category]} <span className="play-cat-pill-count">{g.items.length}</span>
            </a>
          ))}
        </nav>
      </header>

      {groups.map((g) => (
        <section
          key={g.category}
          id={`cat-${g.category}`}
          className="play-cat-section"
        >
          <header className="play-cat-header">
            <div className="eyebrow play-cat-eyebrow">
              {CATEGORY_LABEL[g.category]}
            </div>
            <div className="play-cat-count">
              {g.items.length} {g.items.length === 1 ? "piece" : "pieces"}
            </div>
          </header>
          <div className="play-mosaic">
            {g.items.map((p) => (
              <PlayTile key={p.slug} item={p} />
            ))}
          </div>
        </section>
      ))}

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
  const aspect = item.aspectRatio ?? "1/1";

  const visual = (() => {
    if (item.kind === "image" || item.kind === "gif") {
      return (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={item.src ?? ""}
          alt={item.name ?? ""}
          className="play-tile-visual"
          loading="lazy"
        />
      );
    }
    if (item.kind === "video") {
      return (
        <video
          src={item.videoSrc}
          poster={item.thumbnail}
          className="play-tile-visual"
          muted
          autoPlay
          loop
          playsInline
        />
      );
    }
    if (item.kind === "embed" && item.embedUrl) {
      return (
        <iframe
          src={item.embedUrl}
          className="play-tile-visual play-tile-iframe"
          loading="lazy"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      );
    }
    if (item.thumbnail) {
      return (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={item.thumbnail}
          alt={item.name ?? ""}
          className="play-tile-visual"
          loading="lazy"
        />
      );
    }
    return (
      <div className="play-tile-placeholder" aria-hidden>
        <span>{(item.name ?? "•").charAt(0)}</span>
      </div>
    );
  })();

  const tileBody = (
    <>
      <div
        className="play-tile-frame"
        style={{ aspectRatio: aspect.replace("/", " / ") }}
      >
        {visual}
      </div>
      {(item.name || item.year || (item.chips && item.chips.length > 0)) && (
        <div className="play-tile-caption">
          <div className="play-tile-caption-row">
            <span className="play-tile-caption-name">{item.name ?? ""}</span>
            <span className="play-tile-caption-year">{item.year}</span>
          </div>
          {item.chips && item.chips.length > 0 && (
            <div className="play-tile-caption-chips">
              {item.chips.map((c) => (
                <span key={c} className="play-tile-caption-chip">
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );

  if (item.hasDetail) {
    return (
      <Link href={`/play/${item.slug}`} className="play-tile-link">
        {tileBody}
      </Link>
    );
  }
  if (item.externalUrl) {
    return (
      <a
        href={item.externalUrl}
        className="play-tile-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {tileBody}
      </a>
    );
  }
  return <div className="play-tile-link play-tile-static">{tileBody}</div>;
}
