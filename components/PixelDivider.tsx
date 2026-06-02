"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PixelDivider.
 *
 * Black canvas band with white cells anchored to the top edge and the
 * bottom edge of the band, leaving a horizontal gap of black in the
 * middle. Each column has an independent top height and bottom height.
 * Scroll-into-view fades the whole band in once; cells themselves are
 * static after that.
 *
 * Used between Project (SelectedWorks) and Press (Journal) on the home
 * composition as a hard black visual beat that breaks the rhythm
 * before the dark press carousel.
 */

const ROWS = 5;

export function PixelDivider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // One-shot reveal when the band enters the viewport.
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Draw the pattern. Stable across re-renders because heights come from
  // deterministic noise, not Math.random.
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const setupAndDraw = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w === 0 || h === 0) return;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      const cell = h / ROWS;
      const cols = Math.ceil(w / cell);

      // Two-sided heightmap. Each column has a top height and a bottom
      // height. Their sum is capped at ROWS minus one so there is always
      // at least one row of black between the two stacks (the empty
      // middle band that gives the pattern its character).
      const heights: { top: number; bot: number }[] = Array.from(
        { length: cols },
        (_, i) => {
          const topNoise =
            Math.sin(i * 0.52) * 1.3 +
            1.7 +
            Math.sin(i * 1.9 + 1.3) * 0.7;
          const top = Math.max(0, Math.min(ROWS - 1, Math.round(topNoise)));
          const botNoise =
            Math.sin(i * 0.78 + 2.1) * 0.9 +
            1.0 +
            Math.sin(i * 1.7 + 0.4) * 0.5;
          const maxBot = Math.max(0, ROWS - 1 - top);
          const bot = Math.max(0, Math.min(maxBot, Math.round(botNoise)));
          return { top, bot };
        }
      );

      // Background.
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      // Cells. No inset between cells, so adjacent cells form continuous
      // shapes (matches the reference pattern).
      ctx.fillStyle = "#ffffff";
      for (let c = 0; c < cols; c++) {
        const { top, bot } = heights[c];
        const x = Math.round(c * cell);
        const cw = Math.ceil(cell);

        // Top-anchored cells, hanging from row 0 downward.
        for (let r = 0; r < top; r++) {
          ctx.fillRect(
            x,
            Math.round(r * cell),
            cw,
            Math.ceil(cell)
          );
        }
        // Bottom-anchored cells, rising from the last row upward.
        for (let r = 0; r < bot; r++) {
          const rIdx = ROWS - 1 - r;
          ctx.fillRect(
            x,
            Math.round(rIdx * cell),
            cw,
            Math.ceil(cell)
          );
        }
      }
    };

    setupAndDraw();

    // Redraw on resize so the column count adapts to the new width.
    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(setupAndDraw, 150);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={"pixel-divider" + (inView ? " is-in-view" : "")}
      aria-hidden
    >
      <canvas ref={canvasRef} className="pixel-divider-canvas" />
    </div>
  );
}
