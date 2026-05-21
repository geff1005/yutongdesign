"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CATEGORY_LABEL,
  type PlayCategory,
  type PlayItem,
} from "@/lib/play";

type PlayGroup = {
  category: PlayCategory;
  items: PlayItem[];
};

type Props = {
  groups: PlayGroup[];
};

type CursorPoint = {
  x: number;
  y: number;
};

type FlatPlayItem = {
  item: PlayItem;
  category: PlayCategory;
  categoryStart: boolean;
  index: number;
};

type PackedColumnItem = FlatPlayItem & {
  columnIndex: number;
  rowIndex: number;
};

export function PlayGallery({ groups }: Props) {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const seenSlugsRef = useRef<Set<string>>(new Set());
  const revealTimersRef = useRef<number[]>([]);
  const activeCategoryLockRef = useRef<number | null>(null);
  const [activeItem, setActiveItem] = useState<PlayItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<PlayCategory>(
    groups[0]?.category ?? "3d-art"
  );
  const [railCollapsed, setRailCollapsed] = useState(true);
  const [columnCount, setColumnCount] = useState(3);
  const [revealedDelays, setRevealedDelays] = useState<Record<string, number>>(
    {}
  );
  const [revealingSlugs, setRevealingSlugs] = useState<Record<string, boolean>>(
    {}
  );
  const [cursor, setCursor] = useState<CursorPoint>({ x: -80, y: -80 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPressed, setCursorPressed] = useState(false);

  const totalCount = useMemo(
    () => groups.reduce((sum, group) => sum + group.items.length, 0),
    [groups]
  );
  const flatItems = useMemo<FlatPlayItem[]>(() => {
    let index = 0;
    return groups.flatMap((group) =>
      group.items.map((item, itemIndex) => ({
        item,
        category: group.category,
        categoryStart: itemIndex === 0,
        index: index++,
      }))
    );
  }, [groups]);
  const playColumns = useMemo(
    () => packItemsIntoColumns(flatItems, columnCount),
    [flatItems, columnCount]
  );

  const scheduleRevealCleanup = useCallback(
    (reveals: Array<{ slug: string; delay: number; duration: number }>) => {
      if (reveals.length === 0) return;

      setRevealingSlugs((current) => {
        const next = { ...current };
        reveals.forEach(({ slug }) => {
          next[slug] = true;
        });
        return next;
      });

      reveals.forEach(({ slug, delay, duration }) => {
        const timer = window.setTimeout(() => {
          setRevealingSlugs((current) => {
            if (!current[slug]) return current;
            const next = { ...current };
            delete next[slug];
            return next;
          });
        }, delay + duration + 180);
        revealTimersRef.current.push(timer);
      });
    },
    []
  );

  const revealSlugs = useCallback(
    (slugs: string[], baseDelay = 0) => {
      const reveals: Array<{ slug: string; delay: number; duration: number }> =
        [];

      slugs.forEach((slug, index) => {
        if (seenSlugsRef.current.has(slug)) return;
        const delay = baseDelay + index * 22;
        const duration = 1200 + (index % 4) * 120;
        seenSlugsRef.current.add(slug);
        reveals.push({ slug, delay, duration });
      });

      if (reveals.length === 0) return;

      setRevealedDelays((current) => {
        const next = { ...current };
        reveals.forEach(({ slug, delay }) => {
          next[slug] = delay;
        });
        return next;
      });

      scheduleRevealCleanup(reveals);
    },
    [scheduleRevealCleanup]
  );

  useEffect(() => {
    const initialSlugs = flatItems
      .slice(0, Math.min(12, flatItems.length))
      .map(({ item }) => item.slug);
    revealSlugs(initialSlugs, 0);
  }, [flatItems, revealSlugs]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const updateColumns = (width: number) => {
      const next = width < 640 ? 1 : width < 1024 ? 2 : 3;
      setColumnCount((current) => (current === next ? current : next));
    };
    updateColumns(grid.getBoundingClientRect().width);

    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > 0) updateColumns(entry.contentRect.width);
    });
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealTimers = revealTimersRef.current;
    return () => {
      revealTimers.forEach((timer) => window.clearTimeout(timer));
      if (activeCategoryLockRef.current !== null) {
        window.clearTimeout(activeCategoryLockRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(
      grid.querySelectorAll<HTMLButtonElement>(".play-tile-link")
    ).filter((card) => {
      const slug = card.dataset.slug;
      return slug ? !seenSlugsRef.current.has(slug) : false;
    });
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const enteringCards = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLButtonElement)
          .sort(
            (a, b) =>
              a.getBoundingClientRect().top - b.getBoundingClientRect().top
          );
        const enteringSlugs = enteringCards
          .map((card) => card.dataset.slug)
          .filter((slug): slug is string =>
            Boolean(slug && !seenSlugsRef.current.has(slug))
          );

        if (enteringSlugs.length === 0) return;
        revealSlugs(enteringSlugs, 0);
        enteringCards.forEach((card) => observer.unobserve(card));
      },
      { rootMargin: "0px 0px 140% 0px", threshold: 0.01 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [playColumns, revealSlugs]);

  useEffect(() => {
    const sections = groups
      .map((group) => document.getElementById(`cat-${group.category}`))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id.replace("cat-", "") as
          | PlayCategory
          | undefined;
        if (activeCategoryLockRef.current !== null) return;
        if (id) setActiveCategory(id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.08, 0.2, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [groups]);

  useEffect(() => {
    if (!activeItem) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveItem(null);
    };

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem]);

  const scrollToCategory = (category: PlayCategory) => {
    setActiveCategory(category);
    if (activeCategoryLockRef.current !== null) {
      window.clearTimeout(activeCategoryLockRef.current);
    }
    activeCategoryLockRef.current = window.setTimeout(() => {
      activeCategoryLockRef.current = null;
    }, 900);
    document
      .getElementById(`cat-${category}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="play-index">
      <button
        type="button"
        className={`play-index-fab ${railCollapsed ? "" : "is-open"}`}
        onClick={() => setRailCollapsed((value) => !value)}
        aria-label={railCollapsed ? "Show category index" : "Hide category index"}
        aria-expanded={!railCollapsed}
      >
        <RailToggleArt mode={railCollapsed ? "index" : "close"} />
      </button>

      <div
        className={`play-dashboard-shell ${
          railCollapsed ? "is-rail-collapsed" : ""
        }`}
      >
        <aside
          className="play-category-rail"
          aria-label="Play category index"
          aria-hidden={railCollapsed}
        >
          <div className="play-category-rail-list">
            {groups.map((group) => (
              <button
                key={group.category}
                type="button"
                className={`play-category-rail-pill ${
                  activeCategory === group.category ? "is-active" : ""
                }`}
                onClick={() => scrollToCategory(group.category)}
              >
                <span>{CATEGORY_LABEL[group.category]}</span>
                <span>{group.items.length}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="play-dashboard-main">
          <header className="play-index-hero">
            <div className="eyebrow">Artifact index / {totalCount}</div>
            <h1 className="play-index-title">Play</h1>
            <p className="play-index-sub">
              Posters, motion studies, GIFs, 3D scenes, and live experiments.
              Small things to scan, open, and inspect.
            </p>

            <nav className="play-cat-nav" aria-label="Categories">
              {groups.map((group) => (
                <button
                  key={group.category}
                  type="button"
                  className={`play-cat-pill ${
                    activeCategory === group.category ? "is-active" : ""
                  }`}
                  onClick={() => scrollToCategory(group.category)}
                >
                  <span className="play-cat-pill-label">
                    {CATEGORY_LABEL[group.category]}
                  </span>
                  <span className="play-cat-pill-count">
                    {group.items.length}
                  </span>
                </button>
              ))}
            </nav>
          </header>

          <div className="play-artifact-stage">
            <div
              ref={gridRef}
              className="play-artifact-grid"
              style={{ "--play-grid-cols": columnCount } as CSSProperties}
            >
              {playColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="play-artifact-col">
                  {column.map(({ item, category, categoryStart, rowIndex }) => (
                    <PlayArtifactTile
                      key={item.slug}
                      item={item}
                      columnIndex={columnIndex}
                      columnCount={columnCount}
                      rowIndex={rowIndex}
                      anchorId={categoryStart ? `cat-${category}` : undefined}
                      revealDelay={revealedDelays[item.slug]}
                      isRevealing={Boolean(revealingSlugs[item.slug])}
                      onOpen={() => setActiveItem(item)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="case-footer">
        <Link href="/#home" className="case-footer-home">
          ← Back home
        </Link>
        <Link href="/work" className="case-footer-email">
          → All work
        </Link>
      </footer>

      {activeItem && (
        <PlayPreviewOverlay
          item={activeItem}
          cursor={cursor}
          cursorVisible={cursorVisible}
          cursorPressed={cursorPressed}
          onClose={() => setActiveItem(null)}
          onMouseMove={(point) => setCursor(point)}
          onCursorVisible={setCursorVisible}
          onCursorPressed={setCursorPressed}
        />
      )}
    </main>
  );
}

function PlayArtifactTile({
  item,
  columnIndex,
  columnCount,
  rowIndex,
  anchorId,
  revealDelay,
  isRevealing,
  onOpen,
}: {
  item: PlayItem;
  columnIndex: number;
  columnCount: number;
  rowIndex: number;
  anchorId?: string;
  revealDelay?: number;
  isRevealing?: boolean;
  onOpen: () => void;
}) {
  const aspect = getAspectNumber(item);
  const entryX =
    columnCount === 1
      ? 0
      : columnCount === 2
      ? columnIndex === 0
        ? -350
        : 350
      : columnIndex === 0
        ? -350
        : columnIndex === 1
          ? 0
          : 350;
  const entryY = 300 + rowIndex * 100;
  const entryScale = 1.5;
  const entryDuration = 1200 + ((columnIndex + rowIndex) % 4) * 120;

  return (
    <button
      id={anchorId}
      type="button"
      className={`play-tile-link play-tile-artifact ${
        revealDelay !== undefined ? "is-revealed" : ""
      } ${isRevealing ? "is-revealing" : ""
      }`}
      data-slug={item.slug}
      aria-label={`Preview ${item.name ?? "play artifact"}`}
      style={
        {
          "--entry-x": `${entryX}px`,
          "--entry-y": `${entryY}px`,
          "--entry-scale": entryScale,
          "--entry-delay": `${columnIndex * 32 + rowIndex * 16}ms`,
          "--entry-duration": `${entryDuration}ms`,
          "--reveal-delay": `${revealDelay ?? 0}ms`,
          "--play-card-aspect": aspect,
        } as CSSProperties
      }
      onClick={onOpen}
    >
      <div className="play-tile-frame">
        <PlayTileVisual item={item} mode="tile" />
      </div>
    </button>
  );
}

function RailToggleArt({ mode }: { mode: "index" | "close" }) {
  return (
    <span className="play-rail-toggle-art" data-mode={mode} aria-hidden>
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function getAspectNumber(item: PlayItem) {
  if (item.kind === "spline") return 16 / 10;
  if ((item.kind === "video" || item.kind === "embed") && !item.aspectRatio) {
    return 16 / 9;
  }

  const [width, height] = (item.aspectRatio ?? "1/1")
    .split("/")
    .map((value) => Number(value.trim()));
  if (!width || !height) return 1;
  return width / height;
}

function packItemsIntoColumns(items: FlatPlayItem[], columnCount: number) {
  const columns: PackedColumnItem[][] = Array.from(
    { length: columnCount },
    () => []
  );
  const heights = Array.from({ length: columnCount }, () => 0);

  for (const item of items) {
    const shortestColumn = heights.reduce(
      (shortest, height, index) => (height < heights[shortest] ? index : shortest),
      0
    );
    const rowIndex = columns[shortestColumn].length;
    columns[shortestColumn].push({
      ...item,
      columnIndex: shortestColumn,
      rowIndex,
    });
    heights[shortestColumn] += 1 / getAspectNumber(item.item);
  }

  return columns;
}

function PlayPreviewOverlay({
  item,
  cursor,
  cursorVisible,
  cursorPressed,
  onClose,
  onMouseMove,
  onCursorVisible,
  onCursorPressed,
}: {
  item: PlayItem;
  cursor: CursorPoint;
  cursorVisible: boolean;
  cursorPressed: boolean;
  onClose: () => void;
  onMouseMove: (point: CursorPoint) => void;
  onCursorVisible: (visible: boolean) => void;
  onCursorPressed: (pressed: boolean) => void;
}) {
  const chips =
    item.chips && item.chips.length > 0
      ? item.chips
      : [CATEGORY_LABEL[item.category]];

  return (
    <div
      className="play-preview-overlay is-open"
      role="dialog"
      aria-modal="true"
      aria-label={item.name ?? "Play preview"}
      onMouseMove={(event) => onMouseMove({ x: event.clientX, y: event.clientY })}
      onMouseEnter={() => onCursorVisible(true)}
      onMouseLeave={() => onCursorVisible(false)}
      onMouseDown={() => onCursorPressed(true)}
      onMouseUp={() => onCursorPressed(false)}
    >
      <button
        type="button"
        className="play-preview-backdrop"
        aria-label="Close preview"
        onClick={onClose}
      />
      <div
        className="play-preview-cursor"
        data-visible={cursorVisible}
        data-pressed={cursorPressed}
        style={
          {
            "--cursor-x": `${cursor.x}px`,
            "--cursor-y": `${cursor.y}px`,
          } as CSSProperties
        }
        aria-hidden
      >
        <span>
          <span />
          <span />
        </span>
      </div>

      <article className="play-preview-card">
        <button
          type="button"
          className="play-preview-mobile-close"
          onClick={onClose}
          aria-label="Close preview"
        >
          ×
        </button>
        <div className="play-preview-media">
          <PlayTileVisual item={item} mode="preview" />
        </div>
        <div className="play-preview-meta">
          <div>
            <div className="play-preview-title">{item.name ?? "Untitled"}</div>
            <div className="play-preview-sub">
              {CATEGORY_LABEL[item.category]} · {item.year}
            </div>
            <div className="play-preview-chips" aria-label="Tags">
              {chips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
          </div>
          <div className="play-preview-actions">
            {item.hasDetail && (
              <Link href={`/play/${item.slug}`} className="play-preview-action">
                Open interactive ↗
              </Link>
            )}
            {item.externalUrl && (
              <a
                href={item.externalUrl}
                className="play-preview-action"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open source ↗
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

function PlayTileVisual({
  item,
  mode,
}: {
  item: PlayItem;
  mode: "tile" | "preview";
}) {
  const imageSrc = item.src ?? item.thumbnail;
  const videoSrc =
    mode === "preview" && item.previewVideoSrc
      ? item.previewVideoSrc
      : item.videoSrc;
  const embedUrl =
    mode === "preview" && item.previewEmbedUrl
      ? item.previewEmbedUrl
      : item.embedUrl;

  if (mode === "preview" && embedUrl) {
    return (
      <iframe
        src={embedUrl}
        className="play-tile-visual play-tile-iframe"
        style={
          {
            "--preview-aspect": item.previewAspectRatio ?? item.aspectRatio ?? "16/9",
          } as CSSProperties
        }
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  if ((item.kind === "image" || item.kind === "gif") && imageSrc) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={imageSrc}
        alt={item.name ?? ""}
        className="play-tile-visual"
        loading={mode === "tile" ? "lazy" : "eager"}
      />
    );
  }

  if (item.kind === "video" && videoSrc) {
    const isHighlight = item.videoSrc?.startsWith("/play/highlights/");

    return (
      <video
        src={videoSrc}
        poster={item.thumbnail}
        className="play-tile-visual"
        muted
        autoPlay={mode === "preview" || isHighlight}
        loop
        playsInline
        controls={mode === "preview"}
        preload={mode === "preview" ? "auto" : "metadata"}
      />
    );
  }

  if (item.kind === "embed" && embedUrl) {
    return (
      <iframe
        src={embedUrl}
        className="play-tile-visual play-tile-iframe"
        style={
          {
            "--preview-aspect": item.previewAspectRatio ?? item.aspectRatio ?? "16/9",
          } as CSSProperties
        }
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  if (imageSrc) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={imageSrc}
        alt={item.name ?? ""}
        className="play-tile-visual"
        loading={mode === "tile" ? "lazy" : "eager"}
      />
    );
  }

  return (
    <div className="play-tile-placeholder" aria-hidden>
      <span>{(item.name ?? "•").charAt(0)}</span>
    </div>
  );
}
