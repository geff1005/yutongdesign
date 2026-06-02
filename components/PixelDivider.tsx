"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PixelDivider.
 *
 * A canvas section divider that draws a low-resolution voxel skyline.
 * Pure 2D canvas, no libraries. Triggers a one-shot reveal animation when
 * scrolled into view, then sits static. Visual idiom inspired by the
 * dataannotation.tech pixel-box pattern but implemented from scratch.
 *
 * Used between Project (SelectedWorks) and Press (Journal) on the home
 * composition as a visual beat that transitions from the light project
 * section into the dark press carousel.
 */

const ROWS = 6;
const ANIM_MS = 1200;

export function PixelDivider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Trigger once when the divider enters the viewport.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Draw + animate.
  useEffect(() => {
    if (!inView) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const setupAndDraw = (animate: boolean) => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (!ctx) return () => {};
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Cell size adapts to height: ROWS rows fit exactly.
      const cell = h / ROWS;
      const cols = Math.ceil(w / cell);

      // Smooth-ish noise produces a varied skyline, not pure random,
      // and stays stable across re-renders (no per-frame randomness).
      const heights = Array.from({ length: cols }, (_, i) => {
        const base = Math.sin(i * 0.42) * 1.4 + 2.6;
        const noise = Math.sin(i * 1.9 + 1.7) * 0.9;
        return Math.max(1, Math.min(ROWS, Math.round(base + noise)));
      });

      const draw = (progress: number) => {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "#1a2542";
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = "#5b89b3";
        for (let c = 0; c < cols; c++) {
          const targetH = heights[c];
          const colDelay = (c / cols) * 0.5;
          const colT = Math.max(
            0,
            Math.min(1, (progress - colDelay) / Math.max(0.001, 1 - colDelay))
          );
          const eased = 1 - Math.pow(1 - colT, 3);
          const currH = targetH * eased;
          for (let r = 0; r < Math.floor(currH); r++) {
            ctx.fillRect(
              Math.round(c * cell) + 1,
              Math.round(h - (r + 1) * cell) + 1,
              Math.ceil(cell) - 2,
              Math.ceil(cell) - 2
            );
          }
        }
      };

      if (!animate) {
        draw(1);
        return () => {};
      }

      const start = performance.now();
      let raf = 0;
      const frame = (now: number) => {
        const t = Math.min(1, (now - start) / ANIM_MS);
        draw(t);
        if (t < 1) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
      return () => cancelAnimationFrame(raf);
    };

    const cleanup = setupAndDraw(!prefersReduced);

    // On resize, redraw at full state (no re-animation).
    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        setupAndDraw(false);
      }, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cleanup?.();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [inView]);

  return (
    <div ref={containerRef} className="pixel-divider" aria-hidden>
      <canvas ref={canvasRef} className="pixel-divider-canvas" />
    </div>
  );
}
