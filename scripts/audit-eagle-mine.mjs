#!/usr/bin/env node
/**
 * Read-only audit for the Eagle "Mine" folder.
 *
 * This scans Eagle's on-disk metadata, summarizes the Mine subtree, and writes
 * docs/eagle-mine-audit.md. It does not edit Eagle metadata.
 */
import fs from "node:fs";
import path from "node:path";

const EAGLE_LIBRARY =
  process.env.EAGLE_LIBRARY || "/Volumes/T7 Shield/Designer-Jeff.library";
const MINE_NAME = process.env.MINE_NAME || "Mine";
const OUT =
  process.env.OUT ||
  "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/2*Areas of Foucs/Design hub/Julianyutongzhu /yutongdesign/docs/eagle-mine-audit.md";

const metadataPath = path.join(EAGLE_LIBRARY, "metadata.json");
const imagesPath = path.join(EAGLE_LIBRARY, "images");

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}

function flattenFolders(folders, trail = []) {
  const out = [];
  for (const folder of folders ?? []) {
    const lineage = [...trail, folder.name];
    out.push({
      id: folder.id,
      name: folder.name,
      path: lineage.join(" / "),
      parentPath: trail.join(" / "),
      children: folder.children ?? [],
    });
    out.push(...flattenFolders(folder.children, lineage));
  }
  return out;
}

function descendants(folder) {
  const ids = new Set([folder.id]);
  for (const child of folder.children ?? []) {
    for (const id of descendants(child)) ids.add(id);
  }
  return ids;
}

function countMapAdd(map, key, inc = 1) {
  map.set(key, (map.get(key) ?? 0) + inc);
}

function topEntries(map, n = 12) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, n);
}

function suggestProject(pathName) {
  const p = pathName.toLowerCase();
  if (p.includes("botanictrum")) return "project:B03-botanictrum";
  if (p.includes("poetic form") || p.includes("诗之形") || p.includes("stone")) return "project:B06-poetic-form";
  if (p.includes("月球")) return "project:B04-lunacy-moon";
  if (p.includes("云宇宙") || p.includes("华为") || p.includes("meta")) return "project:A08-meta-station-huawei";
  if (p.includes("ai-未来出行") || p.includes("green")) return "project:B07-greenmove";
  if (p.includes("影像") || p.includes("视频") || p.includes("ae")) return "project:C05-profile-promo";
  if (p.includes("视觉中国") || p.includes("动态")) return "project:C02-sp-ai-collaboration";
  return "project:needs-review";
}

function suggestCategory(pathName) {
  const p = pathName.toLowerCase();
  if (p.includes("视频") || p.includes("影像") || p.includes("ae") || p.includes("motion")) return "cat:motion-and-film";
  if (p.includes("3d") || p.includes("三维") || p.includes("图生3d") || p.includes("石") || p.includes("渲染")) return "cat:3d-art";
  if (p.includes("平面") || p.includes("版式") || p.includes("字体") || p.includes("品牌") || p.includes("海报")) return "cat:graphic-design";
  if (p.includes("摄影") || p.includes("天台") || p.includes("江边")) return "cat:photography";
  if (p.includes("交互") || p.includes("touchdesigner") || p.includes("硬件")) return "cat:interaction-design";
  if (p.includes("空间") || p.includes("布展")) return "cat:architecture";
  if (p.includes("音乐")) return "cat:sound";
  if (p.includes("冲牙器") || p.includes("产品")) return "cat:product-design";
  return "cat:needs-review";
}

if (!fs.existsSync(metadataPath) || !fs.existsSync(imagesPath)) {
  console.error(`Eagle library not found: ${EAGLE_LIBRARY}`);
  process.exit(1);
}

const library = readJson(metadataPath);
const allFolders = flattenFolders(library.folders ?? []);
const mineFolder = allFolders.find((folder) => folder.name === MINE_NAME);

if (!mineFolder) {
  console.error(`Could not find Eagle folder named "${MINE_NAME}"`);
  process.exit(1);
}

const mineIds = descendants(mineFolder);
const folderById = new Map(allFolders.map((folder) => [folder.id, folder]));
const directCounts = new Map();
const recursiveCounts = new Map();
const extCounts = new Map();
const tagCounts = new Map();
const starCounts = new Map();
const topChildStats = new Map(
  mineFolder.children.map((child) => [
    child.id,
    { folder: child, recursive: 0, direct: 0, ext: new Map(), stars: new Map() },
  ])
);

let total = 0;
let totalBytes = 0;
let mineTagged = 0;

for (const infoDirName of fs.readdirSync(imagesPath)) {
  if (!infoDirName.endsWith(".info")) continue;
  const meta = readJson(path.join(imagesPath, infoDirName, "metadata.json"));
  if (!meta || meta.isDeleted) continue;

  const folders = meta.folders ?? [];
  const inMine = folders.some((folderId) => mineIds.has(folderId));
  if (!inMine) continue;

  total++;
  totalBytes += meta.size ?? 0;
  countMapAdd(extCounts, meta.ext ?? "unknown");
  countMapAdd(starCounts, String(meta.star ?? "unrated"));
  if ((meta.tags ?? []).length > 0) mineTagged++;
  for (const tag of meta.tags ?? []) countMapAdd(tagCounts, tag);

  for (const folderId of folders) {
    if (mineIds.has(folderId)) countMapAdd(directCounts, folderId);
  }

  for (const folderId of mineIds) {
    const folder = folderById.get(folderId);
    if (!folder) continue;
    const ids = descendants(folder);
    if (folders.some((itemFolderId) => ids.has(itemFolderId))) {
      countMapAdd(recursiveCounts, folderId);
    }
  }

  for (const topChild of mineFolder.children) {
    const ids = descendants(topChild);
    if (folders.some((folderId) => ids.has(folderId))) {
      const stat = topChildStats.get(topChild.id);
      stat.recursive++;
      countMapAdd(stat.ext, meta.ext ?? "unknown");
      countMapAdd(stat.stars, String(meta.star ?? "unrated"));
      if (folders.includes(topChild.id)) stat.direct++;
    }
  }
}

const mb = (totalBytes / 1024 / 1024).toFixed(1);
const lines = [];
lines.push("# Eagle Mine Audit");
lines.push("");
lines.push(`Generated: ${new Date().toISOString().slice(0, 10)}`);
lines.push(`Library: \`${EAGLE_LIBRARY}\``);
lines.push(`Folder: \`${mineFolder.path}\` (${mineFolder.id})`);
lines.push("");
lines.push("## Summary");
lines.push("");
lines.push(`- Items in Mine subtree: ${total}`);
lines.push(`- Approx total size: ${mb} MB`);
lines.push(`- Items with at least one tag: ${mineTagged}`);
lines.push(`- Mine subfolders: ${mineIds.size - 1}`);
lines.push("");
lines.push("## File Types");
lines.push("");
for (const [ext, count] of topEntries(extCounts, 20)) lines.push(`- ${ext}: ${count}`);
lines.push("");
lines.push("## Star Distribution");
lines.push("");
for (const [star, count] of topEntries(starCounts, 10)) lines.push(`- ${star}: ${count}`);
lines.push("");
lines.push("## Existing Tags In Mine");
lines.push("");
for (const [tag, count] of topEntries(tagCounts, 40)) lines.push(`- ${tag}: ${count}`);
lines.push("");
lines.push("## Top-Level Mine Folders");
lines.push("");
lines.push("| Folder | Direct | Recursive | Types | Stars | Suggested project tag | Suggested category tag |");
lines.push("|---|---:|---:|---|---|---|---|");
for (const { folder, recursive, direct, ext, stars } of [...topChildStats.values()].sort(
  (a, b) => b.recursive - a.recursive || a.folder.name.localeCompare(b.folder.name)
)) {
  const types = topEntries(ext, 6)
    .map(([k, v]) => `${k} ${v}`)
    .join(", ");
  const starText = topEntries(stars, 6)
    .map(([k, v]) => `${k} ${v}`)
    .join(", ");
  lines.push(
    `| ${folder.name} | ${direct} | ${recursive} | ${types || "-"} | ${starText || "-"} | ${suggestProject(
      folder.name
    )} | ${suggestCategory(folder.name)} |`
  );
}
lines.push("");
lines.push("## Proposed Workflow");
lines.push("");
lines.push("Use this audit as a starting point, then curate in Eagle:");
lines.push("");
lines.push("- Add one `project:*` tag to each item that belongs to a website case study.");
lines.push("- Add one `cat:*` tag to each item that should be discoverable for `/play`.");
lines.push("- Use 5 stars for homepage playground candidates, 4 stars for `/play`, 3 stars for case-study support, 1-2 stars for archive.");
lines.push("- Put only approved 4-5 star visual pieces into the mirrored Eagle category folders before running the website sync.");
lines.push("");

fs.writeFileSync(OUT, `${lines.join("\n")}\n`);
console.log(`Wrote ${OUT}`);
