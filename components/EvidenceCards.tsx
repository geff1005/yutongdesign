"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CARDS = [
  {
    label: "ART",
    kicker: "ART SCHOOL",
    title: "Digital media artist",
    period: "Sichuan Fine Arts, 2020 to 2024",
    story:
      "I began as a maker of images, spaces, and interfaces. Digital mapping, XR, AR, VR, and early AIGC work taught me to treat technology as material, not decoration. That is why my AI work still begins with visual systems, motion, and spatial experience.",
    proofs: [
      "BA Digital Media",
      "ByteDance AR effects shipped",
      "Poetic Form AIGC workflow",
    ],
    takeaway: "I learned to build feeling before I tried to build products.",
    image: "/generated/featured/poeticform.jpg",
    tone: "identity",
  },
  {
    label: "RCA",
    kicker: "RCA FUTURES",
    title: "Future foresight designer",
    period: "RCA Design Futures, 2024 to 2025",
    story:
      "At RCA, I moved from making single artifacts to designing futures people can reason with. Co Cerebral turned AI education research into scenarios, workshops, role-based agents, and a live learning prototype. Strategy became the bridge between speculative questions and usable systems.",
    proofs: [
      "Design Futures thesis",
      "Six Thinking Hats agents",
      "Guardian AI education feature",
    ],
    takeaway:
      "I learned to make emerging technology discussable before making it usable.",
    image: "/generated/featured/co-cerebral.jpg",
    tone: "systems",
  },
  {
    label: "NOW",
    kicker: "NOW",
    title: "AI product designer",
    period: "London, now",
    story:
      "Today I turn creative AI experiments into product systems. SmaTaste used AI preference memory for workplace dining. Huawei, SKG, and ByteDance taught me how design systems, publishing workflows, and commercial constraints shape what actually ships.",
    proofs: [
      "RCA x Sodexo 3rd Prize",
      "Design systems and AI UX",
      "Commercial client work",
    ],
    takeaway: "I now design AI tools that keep imagination close to real use.",
    image: "/generated/featured/smataste.jpg",
    tone: "proof",
  },
] as const;

type EvidenceCard = (typeof CARDS)[number];
type CursorPoint = {
  x: number;
  y: number;
};

export function EvidenceCards() {
  const [activeCard, setActiveCard] = useState<EvidenceCard | null>(null);
  const [cursor, setCursor] = useState<CursorPoint>({ x: -80, y: -80 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPressed, setCursorPressed] = useState(false);

  const openCard = (card: EvidenceCard) => {
    setActiveCard(card);
  };

  useEffect(() => {
    if (!activeCard) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveCard(null);
    };

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.classList.add("story-preview-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.body.classList.remove("story-preview-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeCard]);

  return (
    <section className="evidence-section" aria-label="Portfolio evidence">
      <div className="evidence-inner">
        <div className="evidence-card-stack">
          {CARDS.map((card) => (
            <button
              key={card.title}
              type="button"
              className={`evidence-card evidence-card-${card.tone}`}
              aria-label={`Open story: ${card.title}`}
              onClick={() => openCard(card)}
            >
              <span className="evidence-dot" aria-hidden />
              <span className="evidence-label" aria-hidden>
                {card.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeCard && createPortal(
        <div
          className="evidence-preview-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={activeCard.title}
          onMouseMove={(event) =>
            setCursor({ x: event.clientX, y: event.clientY })
          }
          onMouseEnter={() => setCursorVisible(true)}
          onMouseLeave={() => setCursorVisible(false)}
          onMouseDown={() => setCursorPressed(true)}
          onMouseUp={() => setCursorPressed(false)}
        >
          <button
            type="button"
            className="evidence-preview-backdrop"
            aria-label="Close evidence preview"
            onClick={() => setActiveCard(null)}
          />
          <div
            className="evidence-preview-cursor"
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
          <article
            className={`evidence-preview-card evidence-preview-${activeCard.tone}`}
          >
            <div className="evidence-preview-media" aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={activeCard.image} alt="" />
            </div>
            <div className="evidence-preview-copy">
              <div className="evidence-preview-meta">
                <p className="evidence-kicker">{activeCard.kicker}</p>
                <p>{activeCard.period}</p>
              </div>
              <h2>{activeCard.title}</h2>
              <p className="evidence-preview-story">{activeCard.story}</p>
              <div className="evidence-proof-list" aria-label="Story proof points">
                {activeCard.proofs.map((proof) => (
                  <span key={proof}>{proof}</span>
                ))}
              </div>
              <p className="evidence-takeaway">{activeCard.takeaway}</p>
            </div>
          </article>
          <button
            type="button"
            className="evidence-preview-mobile-close"
            onClick={() => setActiveCard(null)}
            aria-label="Close evidence preview"
          >
            ×
          </button>
        </div>,
        document.body
      )}
    </section>
  );
}
