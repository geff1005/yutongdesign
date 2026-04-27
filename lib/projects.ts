// Projects pulled from Notion Projects DB on 2026-04-27.
// Source DB (new): https://www.notion.so/20b9f7ed1e088013905ceccaf0bae66f
// Source DB (old, with Framer-hosted thumbnails):
//   https://www.notion.so/c916d4c6ccc74a3f95c93adea2f2774c
// Thumbnails: framerusercontent.com (CDN) when available, else local /public/thumbnails/.

export type Project = {
  slug: string;
  title: string;
  description: string;
  researchQuestion?: string;
  intro?: string;
  type?: string;
  year: number;
  tags: string[];
  featured: boolean;
  thumbnail: string;
  videoUrl?: string;
  href: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "syncoe",
    title: "Synco-E",
    description: "Next generation BCI Device for Esports Training",
    researchQuestion: "How will brain-computer interfaces shape our brains in the future?",
    intro:
      "Esports is more about mentality than physicality. Pro-gamers might be making slower progress than necessary because their brains are limiting them.",
    type: "Industrial Design",
    year: 2023,
    tags: ["Smart Systems", "Data Driven", "HCI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/ItIE3LjjpIh7r6cbWRLgv0KD41A.png",
    videoUrl: "",
    href: "/work/syncoe",
  },
  {
    slug: "beatrol",
    title: "BEATROL",
    description: "L4 Safety Human-Vehicle Co-Driving Cockpit for Fatigue Intervention",
    researchQuestion: "How can AI-driven systems enhance safety in autonomous driving?",
    intro:
      "Driving fatigue is a serious global problem. Existing in-vehicle systems can only alert, not intervene.",
    type: "Service / Experience Design",
    year: 2023,
    tags: ["Smart Systems", "UX/UI", "HMI"],
    featured: true,
    thumbnail: "/thumbnails/beatrol.jpg",
    videoUrl: "https://vimeo.com/817694480",
    href: "/work/beatrol",
  },
  {
    slug: "sprayscape",
    title: "SprayScape",
    description: "Street Art Trading Platform based on Spatial Computing for Urban Beautification",
    researchQuestion: "How can we harmonize graffiti culture with local community values?",
    intro:
      "A digital platform leveraging spatial computing and AR to bridge graffiti artists with local communities.",
    type: "Service Design",
    year: 2025,
    tags: ["UX/UI", "Smart Systems"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/swsE03EafovXxtL53gEI0UQUr8.png",
    videoUrl: "https://vimeo.com/883701939",
    href: "/work/sprayscape",
  },
  {
    slug: "wildfire-whispers",
    title: "Wildfire-Whispers",
    description: "Audio-visual mapping with gesture recognition",
    researchQuestion: "How do humans coexist with extreme weather?",
    intro:
      "An immersive interactive installation combining geometric wall-mounted physical work with interactive projection.",
    type: "Interaction Design",
    year: 2024,
    tags: ["Embodied Interaction"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/oyzMDOHWVh6rgkG7cfZqhJwwXtU.png",
    videoUrl: "https://vimeo.com/883703201",
    href: "/work/wildfire-whispers",
  },
  {
    slug: "poeticform",
    title: "Poetic-Form",
    description: "Digital sculpture creation based on Human-AI co-creation",
    researchQuestion: "How does AI portray the shape of the poem?",
    intro:
      "Generation of customized Taihu stone digital sculptures based on Eastern aesthetics through sound or semantic information.",
    type: "AIGC / Interaction Installation",
    year: 2023,
    tags: ["AI", "Digital Art", "GenAI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/JKkVLtCfp0YK7xRsEp9DDLTBE.jpg",
    videoUrl: "https://vimeo.com/1079210038",
    href: "/work/poeticform",
  },
  {
    slug: "lunacy",
    title: "LUNACY",
    description: "Digital Narrative based on Responsive web pages design",
    researchQuestion: "What role has the moon played in human culture and history?",
    intro:
      "A pseudo-archive from the future, dramatizing the narrative that the moon, once a living entity, was rendered lifeless by the march of science.",
    type: "UI/UX",
    year: 2021,
    tags: ["UX/UI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/uLavaDKo8wVaIV5gV0iwZeyOHIY.png",
    videoUrl: "https://vimeo.com/883707048",
    href: "/work/lunacy",
  },
  {
    slug: "botanictrum",
    title: "Botanictrum",
    description: "Sensing Installation",
    researchQuestion: "Can you transfer the pulse from plants?",
    intro:
      "Combining mechanical parts with soil to extract abstract information from plants and present them visually.",
    type: "Interaction Design",
    year: 2023,
    tags: ["Embodied Interaction"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/3kJj9nkoMq8ZxDS8OoA0OB0VmXI.jpg",
    videoUrl: "https://vimeo.com/883703983",
    href: "/work/botanictrum",
  },
  {
    slug: "meta-station",
    title: "Meta Station",
    description: "Interactive concept UI theme for HUAWEI Co., Ltd.",
    researchQuestion: "Will the Metaverse be the future of online network & remote work?",
    type: "UI/UX",
    year: 2020,
    tags: ["UX/UI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/q1KWuBoFjXN9Sdr3v9JbwL5QQW0.png",
    videoUrl: "https://vimeo.com/883705290",
    href: "/work/meta-station",
  },
  {
    slug: "neon-nike",
    title: "Neon-NIKE",
    description: "A concept visual for NIKE",
    type: "Concept Visual",
    year: 2024,
    tags: ["UX/UI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/9RxJa7zlJTN3uQ7PmhMOb3uYRAk.jpg",
    href: "/work/neon-nike",
  },
];

// Featured 4 for the home Selected Works bento grid
export const SELECTED_FEATURED = [
  PROJECTS.find((p) => p.slug === "beatrol")!,
  PROJECTS.find((p) => p.slug === "sprayscape")!,
  PROJECTS.find((p) => p.slug === "syncoe")!,
  PROJECTS.find((p) => p.slug === "wildfire-whispers")!,
];

// Explorations (Tier B / lighter projects) — 6 cards for the parallax section
export const EXPLORATIONS = [
  PROJECTS.find((p) => p.slug === "poeticform")!,
  PROJECTS.find((p) => p.slug === "botanictrum")!,
  PROJECTS.find((p) => p.slug === "lunacy")!,
  PROJECTS.find((p) => p.slug === "meta-station")!,
  PROJECTS.find((p) => p.slug === "neon-nike")!,
  PROJECTS.find((p) => p.slug === "wildfire-whispers")!,
];
