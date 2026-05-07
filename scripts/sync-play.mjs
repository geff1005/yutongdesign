#!/usr/bin/env node
/**
 * Sync /play visuals from `~/Design hub/0-Category /<Category>/*.jpg|png|gif`
 * → /public/play/seed/<slug>.jpg
 * → /lib/_play-manifest.json
 *
 * Source of truth = the iCloud `0-Category` folder. Drop a new poster into
 * `*Gr-Graphic_Brainding/` and `npm run sync-play` propagates it onto /play
 * under the matching category.
 *
 * Usage:
 *   npm run sync-play
 *   DESIGN_HUB=/somewhere/else npm run sync-play
 *
 * Requirements: macOS (uses sips for compression).
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_PLAY = path.join(ROOT, "public", "play", "seed");
const MANIFEST = path.join(ROOT, "lib", "_play-manifest.json");

const DESIGN_HUB =
  process.env.DESIGN_HUB ||
  "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/2*Areas of Foucs/Design hub";
const CATEGORY_ROOT = path.join(DESIGN_HUB, "0-Category ");

// Finder-side folder name → site-side category slug. Mirrors the Behance
// taxonomy in lib/play.ts PlayCategory.
const FOLDER_TO_SLUG = {
  "*3D_3D Art": "3d-art",
  "*Ad_Advertising": "advertising",
  "*Animation & Video": "animation-and-video",
  "*Ar_Architecture": "architecture",
  "*At_Fine Art & Cr_Crafts": "fine-art-and-crafts",
  "*Fa_Fashion": "fashion",
  "*Ga_Game Design": "game-design",
  "*Gr-Graphic_Brainding": "graphic-design",
  "*Interaction Design": "interaction-design",
  "*Logo Design": "logo-design",
  "*Mo_Motion_Film": "motion-and-film",
  "*Pd_Product Design": "product-design",
  "*Ph_Photography": "photography",
  "*Sd_Sound": "sound",
  "*UI_UI:UX": "ui-ux",
  "*Web Design": "web-design",
  "*ll-Illustration": "illustration",
};

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const GIF_EXT = new Set([".gif"]);
const VIDEO_EXT = new Set([".mp4", ".mov"]);

// Compress via macOS sips: max 1600px wide, JPEG q80
function compressImage(srcPath, destPath) {
  const tmp = `${destPath}.tmp.jpg`;
  // sips can't always read directly into JPEG with a width limit in one go
  // when source is not jpeg, so do it in two steps
  execSync(
    `sips -s format jpeg -s formatOptions 80 --resampleWidth 1600 ${JSON.stringify(srcPath)} --out ${JSON.stringify(tmp)}`,
    { stdio: "pipe" }
  );
  fs.renameSync(tmp, destPath);
}

// Naive aspect ratio detection from sips
function getAspectRatio(srcPath) {
  try {
    const out = execSync(`sips -g pixelWidth -g pixelHeight ${JSON.stringify(srcPath)}`, {
      encoding: "utf8",
    });
    const w = +(out.match(/pixelWidth: (\d+)/)?.[1] ?? 1);
    const h = +(out.match(/pixelHeight: (\d+)/)?.[1] ?? 1);
    if (!w || !h) return "1/1";
    // Reduce by GCD
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    const g = gcd(w, h);
    return `${w / g}/${h / g}`;
  } catch {
    return "1/1";
  }
}

// Friendly name from filename
function nameFromSlug(slug) {
  // turn "graphic-bauhaus-letters" → "Bauhaus letters"
  // strip leading category prefix if present (3d-, graphic-, photo-, illustration-, craft-, installation-, interaction-, logo-)
  const stripped = slug.replace(
    /^(3d-|graphic-|photo-|illustration-|craft-|installation-|interaction-|logo-)/,
    ""
  );
  return stripped
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

if (!fs.existsSync(CATEGORY_ROOT)) {
  console.error(`Category folder not found: ${CATEGORY_ROOT}`);
  process.exit(1);
}
fs.mkdirSync(PUBLIC_PLAY, { recursive: true });

const items = [];
let imageCount = 0;

for (const folder of fs.readdirSync(CATEGORY_ROOT)) {
  const fullFolder = path.join(CATEGORY_ROOT, folder);
  const stat = fs.statSync(fullFolder);
  if (!stat.isDirectory()) continue;
  const slug = FOLDER_TO_SLUG[folder];
  if (!slug) {
    console.warn(`  Unknown category folder: ${folder}`);
    continue;
  }
  const files = fs
    .readdirSync(fullFolder)
    .filter((f) => !f.startsWith(".") && !f.startsWith("_"))
    .sort();

  if (files.length === 0) continue;
  console.log(`\n${slug}  (${folder}, ${files.length} files)`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const base = path.basename(file, ext);
    const srcFull = path.join(fullFolder, file);

    if (IMAGE_EXT.has(ext)) {
      const itemSlug = base.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
      const destFile = `${itemSlug}.jpg`;
      const destFull = path.join(PUBLIC_PLAY, destFile);
      try {
        compressImage(srcFull, destFull);
      } catch (e) {
        console.warn(`    [skip] ${file}: ${e.message.split("\n")[0]}`);
        continue;
      }
      const aspect = getAspectRatio(destFull);
      items.push({
        slug: itemSlug,
        category: slug,
        kind: "image",
        src: `/play/seed/${destFile}`,
        aspectRatio: aspect,
        name: nameFromSlug(itemSlug),
        // Year inferred from EXIF later; default to current year
        year: new Date().getFullYear(),
      });
      imageCount++;
      console.log(`    ${file}  →  ${destFile}  (${aspect})`);
    } else if (GIF_EXT.has(ext)) {
      const itemSlug = base.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
      const destFile = `${itemSlug}.gif`;
      const destFull = path.join(PUBLIC_PLAY, destFile);
      fs.copyFileSync(srcFull, destFull);
      items.push({
        slug: itemSlug,
        category: slug,
        kind: "gif",
        src: `/play/seed/${destFile}`,
        aspectRatio: "1/1",
        name: nameFromSlug(itemSlug),
        year: new Date().getFullYear(),
      });
      imageCount++;
      console.log(`    ${file}  →  ${destFile}  (gif, no compress)`);
    } else if (VIDEO_EXT.has(ext)) {
      const itemSlug = base.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");
      const destFile = `${itemSlug}${ext}`;
      const destFull = path.join(PUBLIC_PLAY, destFile);
      fs.copyFileSync(srcFull, destFull);
      items.push({
        slug: itemSlug,
        category: slug,
        kind: "video",
        videoSrc: `/play/seed/${destFile}`,
        aspectRatio: "16/9",
        name: nameFromSlug(itemSlug),
        year: new Date().getFullYear(),
      });
      imageCount++;
      console.log(`    ${file}  →  ${destFile}  (video copy)`);
    } else {
      // Unknown ext, ignore silently
    }
  }
}

fs.writeFileSync(MANIFEST, JSON.stringify({ items }, null, 2));
console.log(`\nManifest written: ${MANIFEST}  (${items.length} items)`);
console.log(`Total processed: ${imageCount} files`);
