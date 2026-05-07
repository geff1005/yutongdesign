"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { PLAY_ITEMS, type PlayItem } from "@/lib/play";

// Take up to 6 Play items as parallax preview cards. Skip items that have
// no thumbnail / src yet (so adding empty placeholders to lib/play.ts
// won't show up here).
function previewItems(): PlayItem[] {
  return PLAY_ITEMS.filter(
    (p) => p.thumbnail || p.src || p.kind === "spline"
  ).slice(0, 6);
}

export function Explorations() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);

  const items = previewItems();
  // If we have less than 2 items, skip the parallax — just CTA the section
  const showParallax = items.length >= 2;
  const half = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, half);
  const rightItems = items.slice(half);

  useLayoutEffect(() => {
    if (!showParallax) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const [{ gsap }, stMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        if (!sectionRef.current || !contentRef.current) return;
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: contentRef.current,
          pinSpacing: false,
        });
        gsap.to(leftColRef.current, {
          y: -200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(rightColRef.current, {
          y: -380,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, sectionRef);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [showParallax]);

  return (
    <section className="explorations" ref={sectionRef} id="explorations">
      <div className="explorations-pinned" ref={contentRef}>
        <div className="explorations-pinned-inner">
          <div className="section-header-eyebrow">
            <span className="eyebrow">Explorations</span>
          </div>
          <h2 className="section-heading">
            Visual <em>playground</em>
          </h2>
          <p className="section-sub" style={{ marginBottom: 28 }}>
            Posters, motion studies, GIFs, 3D scenes — work that lives outside client briefs.
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
      </div>

      {showParallax && (
        <div className="parallax-gallery">
          <div className="parallax-cols">
            <div className="parallax-col left" ref={leftColRef}>
              {leftItems.map((p) => (
                <PreviewCard key={p.slug} item={p} />
              ))}
            </div>
            <div className="parallax-col right" ref={rightColRef}>
              {rightItems.map((p) => (
                <PreviewCard key={p.slug} item={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function PreviewCard({ item }: { item: PlayItem }) {
  const thumb = item.thumbnail ?? item.src ?? null;
  const inner = thumb ? (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={thumb}
      alt={item.name ?? ""}
      className="parallax-card-img"
      loading="lazy"
    />
  ) : (
    <div className="parallax-card-fallback">{item.name?.charAt(0) ?? "•"}</div>
  );
  return (
    <Link href="/play" className="parallax-card">
      {inner}
    </Link>
  );
}
