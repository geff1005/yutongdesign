// Play track — side projects, experiments, and creative-coding pieces.
// Lower polish than /work, breadth over depth. Each item has chips and a year;
// optional internal /play/[slug] page only for items that warrant a paragraph.

export type PlayItem = {
  slug: string;
  name: string;
  year: number;
  /** 2-4 chip tags, e.g. ["Generative", "Three.js", "Weekend"]. */
  chips: string[];
  /** One-line teaser, optional — skip when chips already do the work. */
  description?: string;
  /** Square thumbnail in /public. Optional. */
  thumbnail?: string;
  /** External link (GitHub, Behance, Framer, live demo). Skip if internal page covers it. */
  externalUrl?: string;
  /** Internal /play/[slug] page exists. */
  hasDetail?: boolean;
  /** For items that embed a Spline scene on their detail page. */
  splineScene?: string;
};

export const PLAY_ITEMS: PlayItem[] = [
  {
    slug: "spline-playground",
    name: "Spline Playground",
    year: 2025,
    chips: ["3D", "Spline", "Next.js"],
    description: "An interactive Spline scene — drag to orbit, scroll to zoom.",
    hasDetail: true,
    splineScene: "/play/spline-playground/scene.splinecode",
  },
];

export function findPlayItem(slug: string) {
  return PLAY_ITEMS.find((p) => p.slug === slug);
}
