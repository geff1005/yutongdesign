"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/site";

/**
 * Global site footer — an oversized modern wordmark at the bottom of every
 * page, in the Bending Spoons "Impossible. Maybe." scale pattern.
 *
 * Visual contract:
 *  - Big display-sans statement, no italic in the footer wordmark
 *  - Small meta row below it (location, role-availability, copyright)
 *  - Slides up + fades in once the band scrolls into view
 *  - Sits *after* the home page's existing Contact CTA, so it doesn't
 *    compete with the "let's build something good" hero block — it's the
 *    last visual frame of every page
 *
 * Wordmark text is held here as constants. To change it, edit the constants.
 */

const WORDMARK = {
  first: "Julian",
  inner: "Yutong",
  last: "Zhu.",
} as const;

const TAGLINE =
  "Designing interaction, interface and systems for human creativity and productivity through emerging technology.";

const EASE: [number, number, number, number] = [0.32, 0.72, 0, 1]; // Apple-flavour

export function SiteFooter() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <footer ref={ref} className="site-footer" id="contact" aria-label="Site footer">
      <div className="site-footer-inner">
        <motion.div
          className="site-footer-wordmark"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span className="site-footer-wordmark-primary">
            {WORDMARK.first}
          </span>
          <button
            className="site-footer-yutong"
            type="button"
            aria-label="Yutong, Julian's Chinese given name"
          >
            <span className="site-footer-yutong-paren">(</span>
            <span className="site-footer-yutong-text">{WORDMARK.inner}</span>
            <span className="site-footer-yutong-paren">)</span>
          </button>
          <span className="site-footer-wordmark-italic">{WORDMARK.last}</span>
        </motion.div>

        <motion.div
          className="site-footer-tagline"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        >
          {TAGLINE}
        </motion.div>

        <motion.div
          className="site-footer-meta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.3 }}
        >
          <div className="site-footer-meta-col">
            <div className="site-footer-meta-label eyebrow">Based in</div>
            <div className="site-footer-meta-value">London → worldwide</div>
          </div>
          <div className="site-footer-meta-col">
            <div className="site-footer-meta-label eyebrow">Status</div>
            <div className="site-footer-meta-value">
              <span className="dot-green animate-pulse-dot" /> Open to AI
              Product Designer roles
            </div>
          </div>
          <div className="site-footer-meta-col">
            <div className="site-footer-meta-label eyebrow">Connect</div>
            <div className="site-footer-meta-value site-footer-links">
              <a href={`mailto:${SITE.email}`}>Email</a>
              <span aria-hidden>·</span>
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span aria-hidden>·</span>
              <a
                href={SITE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="site-footer-meta-col site-footer-meta-col-right">
            <div className="site-footer-meta-label eyebrow">© 2026</div>
            <div className="site-footer-meta-value">
              {SITE.name}. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
