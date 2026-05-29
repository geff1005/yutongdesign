"use client";

import { useEffect, useRef } from "react";

const GLYPHS = " .:-=+*#%@AI<>01";
const CELL = 16;
const FONT_SIZE = 12;
const POINTER_RADIUS = 280;
const DPR_MAX = 2;

function hash(x: number, y: number) {
  const value = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return value - Math.floor(value);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function HeroAsciiField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const coarse = window.matchMedia("(hover: none), (pointer: coarse)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const disabled = () => coarse.matches || reduced.matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let active = 0;
    let target = 0;
    let pointerX = 0;
    let pointerY = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, DPR_MAX);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${FONT_SIZE}px var(--font-fragment-mono), var(--font-geist-mono), monospace`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      const columns = Math.ceil(width / CELL);
      const rows = Math.ceil(height / CELL);
      const phase = time * 0.0012;

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < columns; x += 1) {
          const px = x * CELL + CELL / 2;
          const py = y * CELL + CELL / 2;
          const distance = Math.hypot(px - pointerX, py - pointerY);
          const falloff = clamp(1 - distance / POINTER_RADIUS, 0, 1);
          const intensity = Math.pow(falloff, 1.8) * active;
          const seed = hash(x, y);
          const wave = (Math.sin(phase + seed * 8 + x * 0.12 + y * 0.18) + 1) / 2;
          const baseVisible = seed > 0.86 ? 0.08 : 0;
          const alpha = clamp(baseVisible + intensity * (0.28 + wave * 0.62), 0, 0.92);

          if (alpha <= 0.01) continue;

          const glyphIndex = Math.floor(
            clamp(seed * GLYPHS.length + intensity * GLYPHS.length * 0.9 + wave * 2, 0, GLYPHS.length - 1),
          );
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fillText(GLYPHS[glyphIndex], px, py);
        }
      }
    };

    const tick = (time: number) => {
      active += (target - active) * 0.11;
      draw(time);
      if (target > 0 || active > 0.01) {
        raf = window.requestAnimationFrame(tick);
      } else {
        active = 0;
        draw(0);
        raf = 0;
      }
    };

    const start = () => {
      if (!raf && !disabled()) raf = window.requestAnimationFrame(tick);
    };

    const move = (event: PointerEvent) => {
      if (disabled()) return;
      const rect = canvas.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (inside) {
        pointerX = event.clientX - rect.left;
        pointerY = event.clientY - rect.top;
        target = 1;
      } else {
        target = 0;
      }
      start();
    };

    const leave = () => {
      target = 0;
      start();
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    if (!disabled()) {
      window.addEventListener("pointermove", move, { passive: true });
      window.addEventListener("pointerleave", leave);
    }

    const handleMediaChange = () => {
      target = 0;
      active = 0;
      if (raf) {
        window.cancelAnimationFrame(raf);
        raf = 0;
      }
      draw(0);
    };

    coarse.addEventListener("change", handleMediaChange);
    reduced.addEventListener("change", handleMediaChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      coarse.removeEventListener("change", handleMediaChange);
      reduced.removeEventListener("change", handleMediaChange);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-ascii-field" aria-hidden="true" />;
}
