"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PRESS } from "@/lib/press";

type Press = (typeof PRESS)[number];

function ReadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M5.5 5.7c0-.94.76-1.7 1.7-1.7H18a1.5 1.5 0 0 1 1.5 1.5v13.4c0 .43-.48.68-.83.44L16 17.55l-2.67 1.8a.52.52 0 0 1-.83-.44V5.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 5.7c0 1.04.84 1.88 1.88 1.88H19.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 11.2h6M9 14.1h4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.72"
      />
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

          <span className="press-interview-read" aria-hidden>
            <span className="press-interview-glow" />
            <span className="press-interview-read-inner">
              <ReadIcon />
              Read
            </span>
          </span>
        </div>

        <div
          ref={(node) => setTextRef(displayIndex, node)}
          className="press-interview-text"
          data-source-index={index}
        >
          <h5>{item.outlet}</h5>
          <p>{item.title}</p>
        </div>
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
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resetTimerRef = useRef<number | null>(null);
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

  const scrollToDisplay = (displayIndex: number, behavior: ScrollBehavior) => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[displayIndex];
    if (!viewport || !card) return;
    const left = card.offsetLeft - (viewport.clientWidth - card.clientWidth) / 2;
    viewport.scrollTo({ left, behavior });
  };

  const goTo = (index: number) => {
    if (sorted.length === 0) return;
    if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);

    if (sorted.length === 1) {
      setActiveIndex(0);
      scrollToDisplay(0, "smooth");
      return;
    }

    const isForwardWrap = index >= sorted.length;
    const isBackwardWrap = index < 0;
    const next = (index + sorted.length) % sorted.length;
    const displayIndex = isForwardWrap
      ? sorted.length + 1
      : isBackwardWrap
        ? 0
        : next + 1;

    setActiveIndex(next);
    scrollToDisplay(displayIndex, "smooth");

    if (isForwardWrap || isBackwardWrap) {
      resetTimerRef.current = window.setTimeout(() => {
        scrollToDisplay(next + 1, "auto");
        resetTimerRef.current = null;
      }, 620);
    }
  };

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) window.clearTimeout(resetTimerRef.current);
    };
  }, []);

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
      scrollToDisplay(sorted.length > 1 ? 1 : 0, "auto");
    });

    return () => cancelAnimationFrame(id);
  }, [sorted.length]);

  return (
    <section
      className="press-c-section press-interview-section"
      id="press"
      data-nav-theme="dark"
    >
      <span id="journal" className="press-anchor-compat" aria-hidden />
      <h2 className="press-interview-heading">Press</h2>

      <div className="press-interview-viewport" ref={viewportRef}>
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
