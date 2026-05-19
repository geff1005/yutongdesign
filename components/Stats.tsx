"use client";

import { useEffect, useRef, useState } from "react";

type LogoItem = {
  name: string;
  src: string;
};

const LOGOS: LogoItem[] = [
  { name: "Sodexo", src: "/logos/collaborators/sodexo.svg" },
  { name: "HUAWEI", src: "/logos/collaborators/huawei.svg" },
  { name: "ByteDance", src: "/logos/collaborators/bytedance.svg" },
  { name: "SKG+", src: "/logos/collaborators/skg-plus-mark.png" },
  { name: "Royal College of Art", src: "/logos/collaborators/royal-college-of-art.webp" },
  { name: "InnovationRCA", src: "/logos/collaborators/innovation-rca.png" },
  { name: "Imperial College London", src: "/logos/collaborators/imperial-college-london.svg" },
  { name: "The Design Museum", src: "/logos/collaborators/design-museum.png" },
  { name: "V&A", src: "/logos/collaborators/v-and-a.png" },
  { name: "IDEO", src: "/logos/collaborators/ideo.png" },
  { name: "Creativity-AI-Colab", src: "/logos/collaborators/creativity-ai-colab-logo.png" },
  { name: "Sichuan Fine Arts Institute", src: "/logos/collaborators/sichuan-fine-arts-design.png" },
];

function LogoMark({ item }: { item: LogoItem }) {
  return (
    <div className="logo-marquee-card" aria-label={item.name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.src} alt={item.name} className="logo-marquee-img" loading="lazy" />
    </div>
  );
}

function LogoRow({
  items,
  reverse = false,
}: {
  items: LogoItem[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items, ...items];
  return (
    <div className="logo-marquee-row" data-reverse={reverse}>
      <div className="logo-marquee-track">
        {loop.map((item, index) => (
          <LogoMark key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [kicked, setKicked] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let timeout = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setKicked(true);
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => setKicked(false), 1450);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.35 }
    );

    observer.observe(section);
    return () => {
      window.clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`collab-strip ${kicked ? "is-kicked" : ""}`}
      id="collaborators"
      aria-label="Collaborators and contexts"
    >
      <div className="collab-strip-head">
        <h2>Worked with</h2>
      </div>
      <div className="logo-marquee-shell">
        <LogoRow items={LOGOS} />
      </div>
    </section>
  );
}
