#!/usr/bin/env node
/**
 * Sync images from Design hub project folders → /public/thumbnails + /public/work/{slug}/
 *
 * Convention:
 *   ~/Design hub/{Tier}{NN}-{Slug}/00-cover/    → first image becomes thumbnail
 *   ~/Design hub/{Tier}{NN}-{Slug}/01-research/ → /public/work/{slug}/research/
 *   ~/Design hub/{Tier}{NN}-{Slug}/02-process/  → /public/work/{slug}/strategy/
 *   ~/Design hub/{Tier}{NN}-{Slug}/03-final/    → /public/work/{slug}/results/
 *
 * Usage:
 *   npm run sync-images              # sync all known slugs
 *   npm run sync-images -- smataste  # sync just one
 *
 * Requirements: macOS (uses sips for compression).
 */

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");

const DESIGN_HUB =
  process.env.DESIGN_HUB ||
  "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/2*Areas of Foucs/Design hub";

// website slug → iCloud project folder name (Tier-NN-Slug)
const SLUG_TO_FOLDER = {
  smataste: "A01-SmaTaste-Sodexo-AID",
  "co-cerebral": "A02-CoCereb-IRP-Six-Hats",
  skgplus: "A03-SKG-Plus-Web",
  beatrol: "A04-Beatrol-Cockpit-L4",
  syncoe: "A05-Sync-E-BCI",
  sprayscape: "A06-SprayScape-Spatial",
  "wildfire-whispers": "A07-Wildfire-Whispers",
  "meta-station": "A08-Meta-Station-Huawei",
  poeticform: "B06-Poetic-Form",
  botanictrum: "B03-Botanictrum",
  lunacy: "B04-Lunacy-Moon",
  "neon-nike": null, // no folder yet
};

// section subfolder → website media section key
const SECTION_MAP = {
  "01-research": "research",
  "02-process": "strategy",
  "03-final": "results",
};

const IMG_RE = /\.(jpg|jpeg|png|webp)$/i;

function compress(src, dst, { width = 1600, quality = 60 } = {}) {
  execSync(
    `sips --resampleWidth ${width} --setProperty format jpeg --setProperty formatOptions ${quality} "${src}" -o "${dst}" >/dev/null 2>&1`
  );
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => IMG_RE.test(f)).sort();
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40);
}

const argSlugs = process.argv.slice(2);
const slugs = argSlugs.length ? argSlugs : Object.keys(SLUG_TO_FOLDER);

const manifest = {};
let totalThumbs = 0;
let totalSection = 0;

for (const slug of slugs) {
  const folderName = SLUG_TO_FOLDER[slug];
  if (!folderName) {
    console.log(`⚠  ${slug} — no folder mapping, skipped`);
    continue;
  }
  const projDir = path.join(DESIGN_HUB, folderName);
  if (!fs.existsSync(projDir)) {
    console.log(`⚠  ${slug} — folder not found: ${folderName}`);
    continue;
  }

  // 1. Thumbnail from 00-cover
  const coverImgs = listImages(path.join(projDir, "00-cover"));
  if (coverImgs.length > 0) {
    const dst = path.join(PUBLIC_DIR, "thumbnails", `${slug}.jpg`);
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    compress(path.join(projDir, "00-cover", coverImgs[0]), dst);
    console.log(`✓ ${slug} thumbnail ← ${coverImgs[0]}`);
    totalThumbs++;
  }

  // 2. Section media
  manifest[slug] = [];
  for (const [folder, section] of Object.entries(SECTION_MAP)) {
    const imgs = listImages(path.join(projDir, folder));
    if (imgs.length === 0) continue;
    const outDir = path.join(PUBLIC_DIR, "work", slug, section);
    fs.mkdirSync(outDir, { recursive: true });
    for (const img of imgs) {
      const dstName = `${slugify(img) || "img"}.jpg`;
      const dst = path.join(outDir, dstName);
      compress(path.join(projDir, folder, img), dst);
      manifest[slug].push({
        section,
        src: `/work/${slug}/${section}/${dstName}`,
        caption: "",
        aspectRatio: "16/9",
      });
      totalSection++;
    }
    console.log(`  ${slug}/${section}: ${imgs.length} images`);
  }
}

// Write manifest for review (doesn't auto-modify lib/projects.ts to preserve hand-crafted captions)
const manifestPath = path.join(ROOT, "lib", "_image-manifest.json");
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`\n📦  ${totalThumbs} thumbnails · ${totalSection} section images`);
console.log(`📝  Manifest written: lib/_image-manifest.json`);
console.log(`    Review and (optionally) merge media[] entries into lib/projects.ts.`);
