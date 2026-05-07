// Play track — side projects, posters, motion studies, GIFs, and live experiments.
// Lower polish than /work, breadth over depth. Variant.com-style: small things,
// directly viewable, mixed media. Categories follow Behance taxonomy
// (mirrored from ~/iCloud/.../Design hub/0-Category folder).

export type PlayCategory =
  | "3d-art"
  | "advertising"
  | "animation-and-video"
  | "architecture"
  | "fine-art-and-crafts"
  | "fashion"
  | "game-design"
  | "graphic-design"
  | "interaction-design"
  | "logo-design"
  | "motion-and-film"
  | "product-design"
  | "photography"
  | "sound"
  | "ui-ux"
  | "web-design"
  | "illustration";

export const CATEGORY_LABEL: Record<PlayCategory, string> = {
  "3d-art": "3D Art",
  advertising: "Advertising",
  "animation-and-video": "Animation & Video",
  architecture: "Architecture",
  "fine-art-and-crafts": "Fine Art & Crafts",
  fashion: "Fashion",
  "game-design": "Game Design",
  "graphic-design": "Graphic Design & Branding",
  "interaction-design": "Interaction Design",
  "logo-design": "Logo Design",
  "motion-and-film": "Motion & Film",
  "product-design": "Product Design",
  photography: "Photography",
  sound: "Sound",
  "ui-ux": "UI · UX",
  "web-design": "Web Design",
  illustration: "Illustration",
};

// Display order for the /play page sections.
export const CATEGORY_ORDER: PlayCategory[] = [
  "3d-art",
  "graphic-design",
  "illustration",
  "photography",
  "fine-art-and-crafts",
  "interaction-design",
  "logo-design",
  "motion-and-film",
  "animation-and-video",
  "ui-ux",
  "web-design",
  "product-design",
  "game-design",
  "architecture",
  "fashion",
  "advertising",
  "sound",
];

export type PlayKind =
  | "image"
  | "gif"
  | "video"
  | "spline"
  | "external"
  | "embed";

export type PlayItem = {
  slug: string;
  name?: string;
  year: number;
  kind: PlayKind;
  category: PlayCategory;
  /** "1/1" "16/9" "3/4" etc. Default 1/1. */
  aspectRatio?: string;
  chips?: string[];
  description?: string;
  src?: string;
  videoSrc?: string;
  embedUrl?: string;
  externalUrl?: string;
  splineScene?: string;
  thumbnail?: string;
  hasDetail?: boolean;
};

export const PLAY_ITEMS: PlayItem[] = [
  // ===== Spline playground (live demo, has detail page) =====
  {
    slug: "spline-playground",
    name: "Spline Playground",
    year: 2025,
    kind: "spline",
    category: "3d-art",
    aspectRatio: "16/10",
    chips: ["3D", "Spline", "Next.js"],
    description: "Interactive Spline scene — drag to orbit, scroll to zoom.",
    hasDetail: true,
    splineScene: "/play/spline-playground/scene.splinecode",
  },

  // ===== 3D Art =====
  {
    slug: "3d-fuzzy-magenta",
    name: "Fuzzy ball — magenta",
    year: 2023,
    kind: "image",
    category: "3d-art",
    aspectRatio: "16/10",
    src: "/play/seed/3d-fuzzy-magenta.jpg",
  },
  {
    slug: "3d-fuzzy-emerald",
    name: "Fuzzy ball — emerald",
    year: 2023,
    kind: "image",
    category: "3d-art",
    aspectRatio: "16/10",
    src: "/play/seed/3d-fuzzy-emerald.jpg",
  },
  {
    slug: "3d-organic-worm",
    name: "Organic accordion",
    year: 2023,
    kind: "image",
    category: "3d-art",
    aspectRatio: "16/10",
    src: "/play/seed/3d-organic-worm.jpg",
  },
  {
    slug: "3d-organic-green",
    name: "Green organism study",
    year: 2024,
    kind: "image",
    category: "3d-art",
    aspectRatio: "4/3",
    src: "/play/seed/3d-organic-green.jpg",
  },
  {
    slug: "3d-crystals",
    name: "Crystal formation",
    year: 2024,
    kind: "image",
    category: "3d-art",
    aspectRatio: "6/7",
    src: "/play/seed/3d-crystals.jpg",
  },
  {
    slug: "3d-iridescent-wave",
    name: "Iridescent wave",
    year: 2024,
    kind: "image",
    category: "3d-art",
    aspectRatio: "16/9",
    src: "/play/seed/3d-iridescent-wave.jpg",
  },

  // ===== Graphic Design & Branding =====
  {
    slug: "graphic-nms-sp307",
    name: "NMS · SP-307",
    year: 2023,
    kind: "image",
    category: "graphic-design",
    aspectRatio: "1/1",
    src: "/play/seed/graphic-nms-sp307.jpg",
  },
  {
    slug: "graphic-bauhaus-letters",
    name: "Bauhaus letterforms",
    year: 2023,
    kind: "image",
    category: "graphic-design",
    aspectRatio: "16/9",
    src: "/play/seed/graphic-bauhaus-letters.jpg",
  },
  {
    slug: "graphic-bauhaus-exhibit",
    name: "Bauhaus exhibit posters",
    year: 2023,
    kind: "image",
    category: "graphic-design",
    aspectRatio: "16/9",
    src: "/play/seed/graphic-bauhaus-exhibit.jpg",
  },
  {
    slug: "graphic-print-spreads",
    name: "Print spreads",
    year: 2022,
    kind: "image",
    category: "graphic-design",
    aspectRatio: "16/10",
    src: "/play/seed/graphic-print-spreads.jpg",
  },
  {
    slug: "graphic-book-pixel",
    name: "Pixel book covers",
    year: 2022,
    kind: "image",
    category: "graphic-design",
    aspectRatio: "16/10",
    src: "/play/seed/graphic-book-pixel.jpg",
  },
  {
    slug: "graphic-glitch",
    name: "Glitch study",
    year: 2024,
    kind: "image",
    category: "graphic-design",
    aspectRatio: "17/10",
    src: "/play/seed/graphic-glitch.jpg",
  },

  // ===== Illustration =====
  {
    slug: "illustration-yellow-black-pop",
    name: "Pop tetrad",
    year: 2023,
    kind: "image",
    category: "illustration",
    aspectRatio: "3/4",
    src: "/play/seed/illustration-yellow-black-pop.jpg",
  },
  {
    slug: "illustration-pink-figure",
    name: "Pink figure on black",
    year: 2024,
    kind: "image",
    category: "illustration",
    aspectRatio: "16/9",
    src: "/play/seed/illustration-pink-figure.jpg",
  },
  {
    slug: "illustration-memoji-avatar",
    name: "Memoji avatar",
    year: 2024,
    kind: "image",
    category: "illustration",
    aspectRatio: "1/1",
    src: "/play/seed/illustration-memoji-avatar.jpg",
  },

  // ===== Photography =====
  {
    slug: "photo-blue-spotlight",
    name: "Blue spotlight",
    year: 2024,
    kind: "image",
    category: "photography",
    aspectRatio: "3/4",
    src: "/play/seed/photo-blue-spotlight.jpg",
  },
  {
    slug: "photo-piano-purple",
    name: "Piano · purple",
    year: 2023,
    kind: "image",
    category: "photography",
    aspectRatio: "1/1",
    src: "/play/seed/photo-piano-purple.jpg",
  },
  {
    slug: "photo-light-painting",
    name: "Light painting",
    year: 2023,
    kind: "image",
    category: "photography",
    aspectRatio: "16/10",
    src: "/play/seed/photo-light-painting.jpg",
  },
  {
    slug: "photo-moon-figure",
    name: "Moon figure",
    year: 2023,
    kind: "image",
    category: "photography",
    aspectRatio: "1/1",
    src: "/play/seed/photo-moon-figure.jpg",
  },
  {
    slug: "photo-silhouette",
    name: "Silhouette",
    year: 2024,
    kind: "image",
    category: "photography",
    aspectRatio: "16/9",
    src: "/play/seed/photo-silhouette.jpg",
  },

  // ===== Fine Art & Crafts =====
  {
    slug: "craft-paper-collage",
    name: "Paper collage",
    year: 2022,
    kind: "image",
    category: "fine-art-and-crafts",
    aspectRatio: "3/4",
    src: "/play/seed/craft-paper-collage.jpg",
  },
  {
    slug: "installation-eyeballs",
    name: "Eyeball installation",
    year: 2023,
    kind: "image",
    category: "fine-art-and-crafts",
    aspectRatio: "3/4",
    src: "/play/seed/installation-eyeballs.jpg",
  },
  {
    slug: "craft-white-cloth",
    name: "White cloth study",
    year: 2024,
    kind: "image",
    category: "fine-art-and-crafts",
    aspectRatio: "9/16",
    src: "/play/seed/craft-white-cloth.jpg",
  },
  {
    slug: "craft-blank-canvas",
    name: "Blank canvas",
    year: 2024,
    kind: "image",
    category: "fine-art-and-crafts",
    aspectRatio: "4/5",
    src: "/play/seed/craft-blank-canvas.jpg",
  },

  // ===== Interaction Design =====
  {
    slug: "interaction-synth-hands",
    name: "Hands on synth panel",
    year: 2023,
    kind: "image",
    category: "interaction-design",
    aspectRatio: "16/9",
    src: "/play/seed/interaction-synth-hands.jpg",
  },

  // ===== Logo Design =====
  {
    slug: "logo-zhu-mark",
    name: "朱 mark",
    year: 2023,
    kind: "image",
    category: "logo-design",
    aspectRatio: "1/1",
    src: "/play/seed/logo-zhu-mark.jpg",
  },
];

export function findPlayItem(slug: string) {
  return PLAY_ITEMS.find((p) => p.slug === slug);
}

export function itemsByCategory() {
  const map = new Map<PlayCategory, PlayItem[]>();
  for (const cat of CATEGORY_ORDER) map.set(cat, []);
  for (const item of PLAY_ITEMS) {
    if (!map.has(item.category)) map.set(item.category, []);
    map.get(item.category)!.push(item);
  }
  // Filter empty categories
  const filtered: { category: PlayCategory; items: PlayItem[] }[] = [];
  for (const cat of CATEGORY_ORDER) {
    const items = map.get(cat) ?? [];
    if (items.length > 0) filtered.push({ category: cat, items });
  }
  return filtered;
}
