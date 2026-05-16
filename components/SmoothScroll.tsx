"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Site-wide smooth scroll using Lenis.
 *
 * Mounted once at the root layout. The Lenis instance drives a single
 * requestAnimationFrame loop that smooths every scroll event on the page
 * (mouse wheel, touch, keyboard). It does not change the document's scroll
 * height, so anchor links and ScrollTrigger-style libraries continue to
 * work against `window.scrollY` as usual.
 *
 * Easing is set to roughly match Apple / Bending-Spoons cubic-bezier
 * personality: a brief acceleration at the top, an extended glide at the
 * tail.
 */
export function SmoothScroll() {
  useEffect(() => {
    // Respect users who've opted out of motion (system preference).
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      // Custom easing — Apple-flavour glide (BS / Faculty reference).
      easing: (t: number) =>
        t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      // Touch devices: use native scroll. Lenis on iOS Safari occasionally
      // fights the rubber-band; native is smoother for the average phone.
      smoothWheel: true,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
