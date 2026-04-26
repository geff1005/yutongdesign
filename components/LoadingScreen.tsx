"use client";

import { useEffect, useState } from "react";

const WORDS = ["Design", "Create", "Inspire"];

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 2700;
    const tick = (t: number) => {
      const elapsed = t - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setCount(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => onComplete?.(), 600);
        }, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % WORDS.length), 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={"loading-screen" + (fadeOut ? " fade-out" : "")}>
      <div className="loading-label eyebrow">Portfolio</div>
      <div className="loading-center">
        <div key={wordIdx} className="loading-word animate-role-fade-in">
          {WORDS[wordIdx]}
        </div>
      </div>
      <div className="loading-bottom">
        <div className="eyebrow" style={{ marginBottom: 8 }}>Loading assets</div>
        <div className="loading-counter">{String(count).padStart(3, "0")}</div>
      </div>
      <div className="loading-progress">
        <div
          className="loading-progress-bar accent-gradient"
          style={{ transform: `scaleX(${count / 100})` }}
        />
      </div>
    </div>
  );
}
