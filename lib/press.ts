// Press / Recent Thinking — sourced from Notion "link tree" DB:
// https://www.notion.so/joyjude/1a19f7ed1e0880ebab4fc39fca75417f
// Schema: Name (title) / userDefined:URL / Tags / Thumbnail / Published Date.
// Sorted: pinned-first, then by Published Date desc.

export type PressItem = {
  date: string; // ISO yyyy-mm-dd — when the article was published (not when added to Notion)
  title: string;
  outlet: string;
  url: string;
  tag?: string;
  thumbnail?: string; // optional og:image / hero image URL
  pinned?: boolean; // tier-1 outlets float to top regardless of date
};

export const PRESS: PressItem[] = [
  {
    date: "2026-03-05",
    title: "How art school creators are adapting to the age of AI",
    outlet: "The Guardian",
    url: "/press/guardian-ai-art-school",
    tag: "Feature",
    thumbnail: "/press/guardian-enhanced.webp",
    pinned: true,
  },
  {
    date: "2024-06-20",
    title:
      "'Eats and Algorithms': RCA and Sodexo collaborate on sustainable food solutions project",
    outlet: "Royal College of Art",
    url: "https://www.rca.ac.uk/business/case-studies/eats-and-algorithms-rca-and-sodexo-collaborate-on-sustainable-food-solutions-project/",
    tag: "Case Study",
    thumbnail: "/press/rca-sodexo-case.jpg",
  },
  {
    date: "2023-12-15",
    title: "SYNCOHE by Yutong Zhu — International Design Awards Winners",
    outlet: "IDA",
    url: "https://www.idesignawards.com/winners/zoom.php?eid=9-49848-23",
    tag: "Award",
    thumbnail: "/press/ida.jpg",
  },
  {
    date: "2024-05-26",
    title: "Valedictorian address at SCFAI Museum Night",
    outlet: "Sichuan Fine Arts Institute",
    url: "https://mp.weixin.qq.com/s/sI6mg_dyA-7F8qRjyoOJEg",
    tag: "Exhibition",
    thumbnail: "/press/scfai-museum-night.webp",
  },
  {
    date: "2023-08-10",
    title: "Capacitor Vol.2 — Smart Sensing & TinyML Workshop Recap",
    outlet: "Capacitor Magazine",
    url: "https://mp.weixin.qq.com/s/An2wXl44FVCy1TsqjspmXQ",
    tag: "Workshop",
    thumbnail: "/press/capacitor-workshop.jpg",
  },
];
