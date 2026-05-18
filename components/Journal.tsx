"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PRESS } from "@/lib/press";

type Press = (typeof PRESS)[number];

function PlayIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M6 18.2V6.5c0-1.55 1.68-2.51 3.02-1.72l9.26 5.47c1.26.75 1.32 2.56.1 3.38l-9.26 6.26C7.79 20.79 6 19.84 6 18.2Z" />
    </svg>
  );
}

function PressInterviewCard({
  item,
  index,
  displayIndex,
  active,
  setCardRef,
  setTextRef,
}: {
  item: Press;
  index: number;
  displayIndex: number;
  active: boolean;
  setCardRef: (index: number, node: HTMLAnchorElement | null) => void;
  setTextRef: (index: number, node: HTMLDivElement | null) => void;
}) {
  return (
    <a
      ref={(node) => setCardRef(displayIndex, node)}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={"press-interview-slide" + (active ? " is-active" : "")}
      data-source-index={index}
      aria-label={`${item.outlet}: ${item.title}`}
    >
      <div className="press-interview-scale">
        <div className="press-interview-media">
          {item.thumbnail ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={item.thumbnail}
              alt=""
              className="press-interview-image"
              draggable={false}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ) : (
            <div className="press-interview-fallback" aria-hidden>
              <span>{item.outlet}</span>
            </div>
          )}
          <div
            ref={(node) => setTextRef(displayIndex, node)}
            className="press-interview-text"
            data-source-index={index}
          >
            <h5>{item.outlet}</h5>
            <p>{item.title}</p>
          </div>
        </div>

        <span className="press-interview-read" aria-hidden>
          <span className="press-interview-glow" />
          <span className="press-interview-read-inner">
            <PlayIcon />
            Read
          </span>
        </span>
      </div>
    </a>
  );
}

export function Journal() {
  const sorted = PRESS.slice().sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
    return a.date < b.date ? 1 : -1;
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const displayItems =
    sorted.length > 1
      ? [
          { item: sorted[sorted.length - 1], sourceIndex: sorted.length - 1, clone: "head" },
          ...sorted.map((item, sourceIndex) => ({ item, sourceIndex, clone: "none" })),
          { item: sorted[0], sourceIndex: 0, clone: "tail" },
        ]
      : sorted.map((item, sourceIndex) => ({ item, sourceIndex, clone: "none" }));

  const setCardRef = useCallback((index: number, node: HTMLAnchorElement | null) => {
    cardRefs.current[index] = node;
  }, []);

  const setTextRef = useCallback((index: number, node: HTMLDivElement | null) => {
    textRefs.current[index] = node;
  }, []);

  const goTo = (index: number) => {
    const next = (index + sorted.length) % sorted.length;
    setActiveIndex(next);
    cardRefs.current[next + (sorted.length > 1 ? 1 : 0)]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((node) => {
        if (!node) return;
        const sourceIndex = Number(node.dataset.sourceIndex);
        gsap.to(node.querySelector(".press-interview-scale"), {
          scale: sourceIndex === activeIndex ? 1 : 0.72,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true,
        });
      });

      textRefs.current.forEach((node) => {
        if (!node) return;
        const sourceIndex = Number(node.dataset.sourceIndex);
        const children = node.querySelectorAll("h5, p");
        gsap.to(children, {
          autoAlpha: sourceIndex === activeIndex ? 1 : 0,
          y: sourceIndex === activeIndex ? 0 : 20,
          duration: sourceIndex === activeIndex ? 0.4 : 0.3,
          ease: sourceIndex === activeIndex ? "power2.out" : "power2.in",
          stagger: sourceIndex === activeIndex ? 0.04 : 0,
          overwrite: true,
        });
      });
    });

    return () => ctx.revert();
  }, [activeIndex]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      cardRefs.current[sorted.length > 1 ? 1 : 0]?.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "center",
      });
    });

    return () => cancelAnimationFrame(id);
  }, [sorted.length]);

  return (
    <section
      className="press-c-section press-interview-section"
      id="journal"
      data-nav-theme="dark"
    >
      <h2 className="press-interview-heading">Press</h2>

      <div className="press-interview-viewport">
        <div className="press-interview-track">
          {displayItems.map(({ item, sourceIndex, clone }, displayIndex) => (
            <PressInterviewCard
              key={`${item.url}-${clone}`}
              item={item}
              index={sourceIndex}
              displayIndex={displayIndex}
              active={sourceIndex === activeIndex}
              setCardRef={setCardRef}
              setTextRef={setTextRef}
            />
          ))}
        </div>
      </div>

      <div className="press-interview-controls" aria-label="Press navigation">
        <button
          type="button"
          className="press-interview-button"
          aria-label="Previous press item"
          onClick={() => goTo(activeIndex - 1)}
        >
          <span aria-hidden>←</span>
        </button>
        <button
          type="button"
          className="press-interview-button"
          aria-label="Next press item"
          onClick={() => goTo(activeIndex + 1)}
        >
          <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}
