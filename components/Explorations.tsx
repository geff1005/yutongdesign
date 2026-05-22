"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { CATEGORY_LABEL, PLAY_ITEMS, type PlayItem } from "@/lib/play";

/**
 * Visual playground — Bending Spoons hero-style CTA.
 *
 * Mirrors the public Bending Spoons hero pattern: DOM cards placed around a
 * CSS 3D cylinder with GSAP. The cards themselves become trapezoids through
 * perspective rather than through clip-path hacks.
 */

const PLAYGROUND_PREVIEW_SLUGS = [
  "3d-crystals",
  "3d-fuzzy-magenta",
  "3d-organic-worm",
  "demain-day-night",
  "photo-blue-spotlight",
  "beginning-of-winter",
  "craft-paper-collage",
  "3d-iridescent-wave",
  "graphic-book-pixel",
  "graphic-bauhaus-letters",
];

function previewItems(): PlayItem[] {
  const bySlug = new Map(PLAY_ITEMS.map((item) => [item.slug, item]));
  return PLAYGROUND_PREVIEW_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (item): item is PlayItem => Boolean(item?.thumbnail || item?.videoSrc || item?.src),
  );
}

function previewAsset(item: PlayItem) {
  return item.thumbnail ?? item.src ?? "";
}

function previewHref(item: PlayItem) {
  return item.hasDetail ? `/play/${item.slug}` : "/play";
}

export function Explorations() {
  const items = previewItems();
  const [layoutKey, setLayoutKey] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window.addEventListener !== "function") return;

    let timeout: ReturnType<typeof setTimeout>;
    let resizeObserver: ResizeObserver | undefined;
    const refreshLayout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setLayoutKey((key) => key + 1), 160);
    };

    window.addEventListener("resize", refreshLayout);
    window.addEventListener("orientationchange", refreshLayout);
    window.visualViewport?.addEventListener("resize", refreshLayout);
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(refreshLayout);
      resizeObserver.observe(document.body);
    }

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", refreshLayout);
      window.removeEventListener("orientationchange", refreshLayout);
      window.visualViewport?.removeEventListener("resize", refreshLayout);
      resizeObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const stage = stageRef.current;
    const ring = ringRef.current;
    if (!header || !stage || !ring || items.length < 2) return;

    const cards = gsap.utils.toArray<HTMLElement>(
      ring.querySelectorAll(".playground-cylinder-card"),
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setupCarousel = (radiusDivisor: number) => {
      const radius = window.innerWidth / radiusDivisor;
      gsap.set(cards, {
        rotateY: (i) => i * (-360 / cards.length),
        transformOrigin: `50% 50% ${radius}px`,
        z: -radius,
        backfaceVisibility: "hidden",
      });

      const canAnimate =
        typeof window.requestAnimationFrame === "function" ||
        typeof window.setTimeout === "function";

      if (!canAnimate) {
        gsap.set(header, { opacity: 1, y: 0 });
        gsap.set(stage, {
          opacity: 1,
          y: 0,
          filter: "blur(0px) grayscale(0%)",
        });
        gsap.set(ring, { rotationY: 45 });
        return () => undefined;
      }

      gsap.set(ring, { rotationY: 0 });

      let tl: gsap.core.Timeline | undefined;
      let hasPlayed = false;
      const playOnce = () => {
        if (hasPlayed) return;
        hasPlayed = true;
        tl = gsap
          .timeline()
          .fromTo(
            header,
            { opacity: 0.58, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          )
          .fromTo(
            stage,
            { opacity: 0.58, y: 150, filter: "blur(1.5px) grayscale(45%)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px) grayscale(0%)",
              duration: 1,
              ease: "power2.out",
            },
            "<50%",
          )
          .to(
            ring,
            {
              rotationY: 45,
              duration: reduceMotion ? 0 : 3,
              ease: "circ.out",
            },
            "<",
          )
          .to(
            ring,
            {
              rotationY: 360,
              duration: reduceMotion ? 0 : 48,
              ease: "none",
              repeat: reduceMotion ? 0 : -1,
            },
            reduceMotion ? ">" : "<70%",
          );
      };

      const isStageVisible = () => {
        const rect = stage.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.76 && rect.bottom > window.innerHeight * 0.18;
      };

      if (isStageVisible()) {
        playOnce();
        return () => tl?.kill();
      }

      const checkVisibility = () => {
        if (isStageVisible()) {
          playOnce();
        }
      };

      const canObserve = typeof IntersectionObserver === "function";
      const canListen = typeof window.addEventListener === "function";
      const raf =
        typeof window.requestAnimationFrame === "function"
          ? window.requestAnimationFrame(checkVisibility)
          : undefined;
      const delayedCheck =
        typeof window.setTimeout === "function"
          ? window.setTimeout(checkVisibility, 450)
          : undefined;

      if (!canObserve && !canListen) {
        gsap.set(header, { opacity: 1, y: 0 });
        gsap.set(stage, {
          opacity: 1,
          y: 0,
          filter: "blur(0px) grayscale(0%)",
        });
        gsap.set(ring, { rotationY: 45 });
        return () => tl?.kill();
      }

      let observer: IntersectionObserver | undefined;
      if (canObserve) {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry?.isIntersecting) {
              playOnce();
              observer?.disconnect();
            }
          },
          {
            threshold: 0.28,
            rootMargin: "0px 0px -12% 0px",
          },
        );
      }

      observer?.observe(stage);
      window.addEventListener("scroll", checkVisibility, { passive: true });
      window.addEventListener("resize", checkVisibility);
      return () => {
        if (typeof raf === "number") window.cancelAnimationFrame(raf);
        if (typeof delayedCheck === "number") window.clearTimeout(delayedCheck);
        window.removeEventListener("scroll", checkVisibility);
        window.removeEventListener("resize", checkVisibility);
        observer?.disconnect();
        tl?.kill();
      };
    };

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => setupCarousel(2.5));
    mm.add("(max-width: 767px)", () => setupCarousel(1.25));

    return () => mm.revert();
  }, [items.length, layoutKey]);

  return (
    <section className="explorations-arc-section" id="explorations">
      <div className="explorations-arc-inner">
        <div
          className="explorations-arc-header"
          ref={headerRef}
        >
          <div className="eyebrow">MOTION_LAB / GENERATED_STUDIES</div>
          <h2 className="section-heading">
            Motion playground
          </h2>
          <p className="section-sub">
            Generated artifacts, 3D tests, posters, and visual experiments
            orbiting outside client briefs.
          </p>
          <Link
            className="view-all-btn explorations-cta"
            href="/play"
          >
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              Enter playground <span aria-hidden>→</span>
            </span>
          </Link>
        </div>

        <div className="playground-cylinder-shell" role="list" ref={stageRef}>
          <div className="playground-cylinder-ring" key={layoutKey} ref={ringRef}>
          {items.map((item) => {
            const label = item.name ?? CATEGORY_LABEL[item.category];
            const thumb = previewAsset(item);
            const href = previewHref(item);
            return (
              <Link
                key={item.slug}
                role="listitem"
                href={href}
                className="playground-cylinder-card"
                aria-label={label}
              >
                {item.kind === "video" && item.videoSrc ? (
                  <video
                    src={item.videoSrc}
                    poster={thumb}
                    className="playground-cylinder-img playground-cylinder-video"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                    disablePictureInPicture
                    aria-hidden="true"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={thumb}
                    alt=""
                    className="playground-cylinder-img"
                    loading="eager"
                  />
                )}
              </Link>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
