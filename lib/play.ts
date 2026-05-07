// Play track — side projects, posters, motion studies, GIFs, and live experiments.
// Lower polish than /work, breadth over depth. Variant.com-style: small things,
// directly viewable, mixed media. The /play page is the destination; the
// homepage Explorations section is a teaser that links here.

export type PlayKind =
  | "image" // static poster, photo, mockup
  | "gif" // animated image (renders as <img>)
  | "video" // mp4 (self-hosted) or vimeo embed
  | "spline" // Spline 3D scene with own detail page
  | "external" // clickthrough to live deploy / GitHub / Behance / Framer
  | "embed"; // iframe embed (YouTube, CodePen, Vimeo, etc.)

export type PlayItem = {
  slug: string;
  name?: string; // optional — bare visuals can omit
  year: number;
  kind: PlayKind;
  /** Aspect ratio for the tile, e.g. "1/1" "16/9" "3/4". Defaults to "1/1". */
  aspectRatio?: string;
  /** Optional 2-4 chips. Skip for bare visuals. */
  chips?: string[];
  /** One-line teaser, optional. */
  description?: string;
  /** Static image source (kind=image | gif). Path under /public. */
  src?: string;
  /** Self-hosted mp4 source (kind=video). */
  videoSrc?: string;
  /** Iframe URL (kind=embed: vimeo, youtube, codepen, etc.). */
  embedUrl?: string;
  /** External link (kind=external). */
  externalUrl?: string;
  /** Spline scene path (kind=spline) — also used by detail page. */
  splineScene?: string;
  /** Tile thumbnail override. Defaults to src for image/gif, poster for video. */
  thumbnail?: string;
  /** Internal /play/[slug] page exists (Spline scenes use this). */
  hasDetail?: boolean;
};

export const PLAY_ITEMS: PlayItem[] = [
  {
    slug: "spline-playground",
    name: "Spline Playground",
    year: 2025,
    kind: "spline",
    aspectRatio: "16/10",
    chips: ["3D", "Spline", "Next.js"],
    description: "Interactive Spline scene — drag to orbit, scroll to zoom.",
    hasDetail: true,
    splineScene: "/play/spline-playground/scene.splinecode",
  },
  // Posters, GIFs, motion studies, live deploys land here as Julian
  // copy-pastes URLs / drops files into /public/play/.
];

export function findPlayItem(slug: string) {
  return PLAY_ITEMS.find((p) => p.slug === slug);
}
