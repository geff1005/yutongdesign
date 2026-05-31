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
      duration: 0.82,
      // Custom easing — Apple-flavour glide (BS / Faculty reference).
      easing: (t: number) =>
        t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      // Touch devices: use native scroll. Lenis on iOS Safari occasionally
      // fights the rubber-band; native is smoother for the average phone.
      smoothWheel: true,
    });

    const normalizeHash = (hash: string) => {
      const id = hash.replace(/^#/, "");
      if (id === "explorations") return "play";
      return id;
    };

    const scrollToHash = (hash: string, updateUrl = true) => {
      const id = normalizeHash(hash);
      const target = document.getElementById(id);
      if (!target) return false;

      lenis.scrollTo(target, {
        offset: id === "home" ? 0 : -92,
        duration: id === "home" ? 0.72 : 0.78,
        easing: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -12 * t)),
      });

      if (updateUrl) {
        window.history.pushState(null, "", `/#${id}`);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
      return true;
    };

    const onAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest?.("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const url = new URL(anchor.href, window.location.href);
      const isHomeAnchor =
        url.origin === window.location.origin &&
        url.pathname === "/" &&
        Boolean(url.hash);
      if (!isHomeAnchor) return;

      const id = normalizeHash(url.hash);
      if (!["home", "work", "play"].includes(id)) return;

      if (window.location.pathname !== "/") {
        return;
      }

      event.preventDefault();
      scrollToHash(`#${id}`);
    };

    document.addEventListener("click", onAnchorClick, { capture: true });

    if (window.location.pathname === "/" && window.location.hash) {
      window.requestAnimationFrame(() => {
        scrollToHash(window.location.hash, false);
      });
    }

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick, { capture: true });
      lenis.destroy();
    };
  }, []);

  return null;
}
