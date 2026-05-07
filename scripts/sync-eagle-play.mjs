#!/usr/bin/env node
/**
 * Mirror curated Eagle folders into `Design hub/0-Category /`.
 *
 * Intended workflow:
 * 1. In Eagle, create the same Behance-style category folders used by 0-Category.
 * 2. Curate images / GIFs / MP4s into those Eagle folders.
 * 3. Run `npm run sync-eagle-play`.
 * 4. Run `npm run sync-play` to compress and publish the website manifest.
 *
 * This script is deliberately non-destructive:
 * - It reads Eagle library metadata from disk.
 * - It copies original files into 0-Category only when missing or changed.
 * - It never edits Eagle metadata and never deletes files.
 *
 * Usage:
 *   npm run sync-eagle-play
 *   EAGLE_LIBRARY="/path/to/Designer Julian.library" npm run sync-eagle-play
 */
import fs from "node:fs";
import path from "node:path";

const DESIGN_HUB =
  process.env.DESIGN_HUB ||
  "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/2*Areas of Foucs/Design hub";

const EAGLE_LIBRARY =
  process.env.EAGLE_LIBRARY ||
  path.join(DESIGN_HUB, "eagle 图库", "Designer Julian.library");

const CATEGORY_ROOT = path.join(DESIGN_HUB, "0-Category ");
const EAGLE_IMAGES = path.join(EAGLE_LIBRARY, "images");
const EAGLE_METADATA = path.join(EAGLE_LIBRARY, "metadata.json");

const CATEGORY_FOLDERS = [
  "*3D_3D Art",
  "*Ad_Advertising",
  "*Animation & Video",
  "*Ar_Architecture",
  "*At_Fine Art & Cr_Crafts",
  "*Fa_Fashion",
  "*Ga_Game Design",
  "*Gr-Graphic_Brainding",
  "*Interaction Design",
  "*Logo Design",
  "*Mo_Motion_Film",
  "*Pd_Product Design",
  "*Ph_Photography",
  "*Sd_Sound",
  "*UI_UI:UX",
  "*Web Design",
  "*ll-Illustration",
];

const SUPPORTED_EXT = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".mp4",
  ".mov",
]);

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function flattenFolders(folders, parentNames = []) {
  const out = [];
  for (const folder of folders) {
    const lineage = [...parentNames, folder.name];
    out.push({ id: folder.id, name: folder.name, path: lineage.join(" / ") });
    if (folder.children?.length) out.push(...flattenFolders(folder.children, lineage));
  }
  return out;
}

function itemOriginalPath(infoDir, meta) {
  const exact = path.join(infoDir, `${meta.name}.${meta.ext}`);
  if (fs.existsSync(exact)) return exact;

  const candidates = fs
    .readdirSync(infoDir)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return SUPPORTED_EXT.has(ext) && !file.toLowerCase().includes("_thumbnail");
    })
    .sort();

  return candidates[0] ? path.join(infoDir, candidates[0]) : null;
}

function safeBaseName(name) {
  return name
    .replace(/[/:]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 140);
}

function copyIfNeeded(src, dest) {
  if (fs.existsSync(dest)) {
    const srcStat = fs.statSync(src);
    const destStat = fs.statSync(dest);
    if (srcStat.size === destStat.size) return "exists";
  }
  fs.copyFileSync(src, dest);
  return "copied";
}

if (!fs.existsSync(EAGLE_METADATA) || !fs.existsSync(EAGLE_IMAGES)) {
  console.error(`Eagle library not found or incomplete: ${EAGLE_LIBRARY}`);
  process.exit(1);
}
if (!fs.existsSync(CATEGORY_ROOT)) {
  console.error(`Category folder not found: ${CATEGORY_ROOT}`);
  process.exit(1);
}

const libraryMeta = readJson(EAGLE_METADATA);
const folders = flattenFolders(libraryMeta.folders ?? []);
const categoryById = new Map();

for (const folderName of CATEGORY_FOLDERS) {
  const matches = folders.filter((folder) => folder.name === folderName);
  if (matches.length === 0) continue;
  if (matches.length > 1) {
    console.warn(
      `Multiple Eagle folders named "${folderName}". Using: ${matches[0].path}`
    );
  }
  categoryById.set(matches[0].id, folderName);
}

if (categoryById.size === 0) {
  console.log("No matching Eagle category folders found yet.");
  console.log("Create these folders in Eagle when you are ready:");
  for (const folder of CATEGORY_FOLDERS) console.log(`  - ${folder}`);
  process.exit(0);
}

let scanned = 0;
let copied = 0;
let existing = 0;

for (const infoName of fs.readdirSync(EAGLE_IMAGES)) {
  if (!infoName.endsWith(".info")) continue;
  const infoDir = path.join(EAGLE_IMAGES, infoName);
  const metaPath = path.join(infoDir, "metadata.json");
  if (!fs.existsSync(metaPath)) continue;

  const meta = readJson(metaPath);
  if (meta.isDeleted) continue;

  const targetFolderName = (meta.folders ?? [])
    .map((folderId) => categoryById.get(folderId))
    .find(Boolean);
  if (!targetFolderName) continue;

  const src = itemOriginalPath(infoDir, meta);
  if (!src) continue;

  const ext = path.extname(src).toLowerCase();
  if (!SUPPORTED_EXT.has(ext)) continue;

  const targetDir = path.join(CATEGORY_ROOT, targetFolderName);
  fs.mkdirSync(targetDir, { recursive: true });

  const eagleId = meta.id ?? path.basename(infoName, ".info");
  const destName = `${safeBaseName(meta.name)}--eagle-${eagleId}${ext}`;
  const dest = path.join(targetDir, destName);
  const result = copyIfNeeded(src, dest);

  scanned++;
  if (result === "copied") {
    copied++;
    console.log(`${targetFolderName}: ${path.basename(src)} -> ${destName}`);
  } else {
    existing++;
  }
}

console.log(`\nEagle library: ${EAGLE_LIBRARY}`);
console.log(`Matched category folders: ${categoryById.size}`);
console.log(`Scanned matching items: ${scanned}`);
console.log(`Copied or updated: ${copied}`);
console.log(`Already current: ${existing}`);
console.log("\nNext: run `npm run sync-play` to publish these into /play.");
