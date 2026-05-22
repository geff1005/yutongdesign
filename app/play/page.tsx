import type { Metadata } from "next";
import { itemsByCategory } from "@/lib/play";
import { PlayGallery } from "./PlayGallery";

export const metadata: Metadata = {
  title: "Playground — Julian Zhu",
  description:
    "Motion tests, visual systems, and small prototypes for emerging interfaces by Julian Zhu.",
};

export default function PlayIndexPage() {
  return <PlayGallery groups={itemsByCategory()} />;
}
