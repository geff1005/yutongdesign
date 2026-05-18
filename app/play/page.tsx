import type { Metadata } from "next";
import { itemsByCategory } from "@/lib/play";
import { PlayGallery } from "./PlayGallery";

export const metadata: Metadata = {
  title: "Play — Julian Zhu",
  description:
    "Posters, motion studies, GIFs, 3D scenes, and live experiments — work that lives outside client briefs.",
};

export default function PlayIndexPage() {
  return <PlayGallery groups={itemsByCategory()} />;
}
