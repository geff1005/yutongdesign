#!/usr/bin/env node
/**
 * Curate Eagle "Website Curation / 01-Case Study Picks" into Design Hub
 * project folders using the product case-study story structure.
 *
 * Non-destructive:
 * - reads Eagle metadata from disk
 * - copies selected source files into Design Hub project subfolders
 * - never edits Eagle metadata
 * - never deletes or overwrites a file with identical size
 */
import fs from "node:fs";
import path from "node:path";

const DESIGN_HUB =
  process.env.DESIGN_HUB ||
  "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/2*Areas of Foucs/Design hub";
const EAGLE_LIBRARY = process.env.EAGLE_LIBRARY || "/Volumes/T7 Shield/Designer-Jeff.library";
const REPORT =
  process.env.REPORT ||
  path.join(
    DESIGN_HUB,
    "Julianyutongzhu ",
    "yutongdesign",
    "docs",
    "EAGLE_CASE_ASSET_SYNC.md"
  );

const APPLY = process.argv.includes("--apply");

const CASE_ROOT_NAME = "01-Case Study Picks";
const IGNORED_CASES = new Set(["B09-AIGC-Short-Film", "B09-Generative-AI-Direction"]);

const PROJECT_TARGETS = new Map([
  ["A01-SmaTaste", "A01-SmaTaste-Sodexo-AID"],
  ["A02-CoCereb", "A02-CoCereb-IRP-Six-Hats"],
  ["A03-SKG-Plus-Web", "A03-SKG-Plus-Web"],
  ["A04-BEATROL", "A04-Beatrol-Cockpit-L4"],
  ["A05-Sync-E-BCI", "A05-Sync-E-BCI"],
  ["A06-SprayScape", "A06-SprayScape-Spatial"],
  ["A07-Wildfire-Whispers", "A07-Wildfire-Whispers"],
  ["A08-Meta-Station-Huawei", "A08-Meta-Station-Huawei"],
  ["B02-Bamboo-Wind", "B02-Bamboo-Wind"],
  ["B03-Botanictrum", "B03-Botanictrum"],
  ["B04-Lunacy-Moon", "B04-Lunacy-Moon"],
  ["B05-Walking-Heaven", "B05-Walking-Heaven"],
  ["B06-Poetic-Form", "B06-Poetic-Form"],
  ["B07-GreenMove", "B07-GreenMove"],
  ["B08-Massbot-Digital-Legacy", "B08-Massbot-Digital-Legacy"],
  ["C01-Runway-ISEE", "C01-Runway-ISEE"],
  ["C02-SP-AI-Collaboration", "C02-SP-AI-Collaboration"],
  ["C03-Mercury-Piano", "C03-Mercury-Piano"],
  ["C05-Profile-Promo", "C05-Profile-Promo-Done"],
]);

const LIMITS = {
  "00-cover": 3,
  "01-research": 14,
  "02-process": 22,
  "03-final": 22,
  "04-video": 14,
  "05-docs": 8,
};

const IMAGE_EXT = new Set(["jpg", "jpeg", "png", "webp", "gif"]);
const VIDEO_EXT = new Set(["mp4", "mov"]);
const DOC_EXT = new Set(["pdf", "ppt", "pptx", "txt", "xmind", "url"]);
const RAW_EXT = new Set(["fig", "psd", "ai", "indd", "blend", "toe", "tox", "obj", "mtl", "glb", "splat", "json"]);
const SUPPORTED_EXT = new Set([...IMAGE_EXT, ...VIDEO_EXT, ...DOC_EXT]);

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}

function flattenFolders(folders, trail = [], parent = null) {
  const out = [];
  for (const folder of folders ?? []) {
    const lineage = [...trail, folder.name];
    out.push({
      id: folder.id,
      name: folder.name,
      path: lineage.join(" / "),
      children: folder.children ?? [],
      parent,
    });
    out.push(...flattenFolders(folder.children, lineage, folder.id));
  }
  return out;
}

function findFolder(folders, name) {
  for (const folder of folders ?? []) {
    if (folder.name === name) return folder;
    const found = findFolder(folder.children, name);
    if (found) return found;
  }
  return null;
}

function descendants(folder, ids = new Set()) {
  ids.add(folder.id);
  for (const child of folder.children ?? []) descendants(child, ids);
  return ids;
}

function itemOriginalPath(infoDir, meta) {
  const exact = path.join(infoDir, `${meta.name}.${meta.ext}`);
  if (fs.existsSync(exact)) return exact;

  const candidates = fs
    .readdirSync(infoDir)
    .filter((file) => path.extname(file).slice(1).toLowerCase() === String(meta.ext).toLowerCase())
    .filter((file) => !file.toLowerCase().includes("_thumbnail"))
    .sort();
  return candidates[0] ? path.join(infoDir, candidates[0]) : null;
}

function slugName(value) {
  return value
    .replace(/[/:]/g, "-")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 110);
}

function storySection(meta, relativeFolderPath) {
  const ext = String(meta.ext ?? "").toLowerCase();
  const text = `${relativeFolderPath} ${meta.name}`.toLowerCase();

  if (VIDEO_EXT.has(ext) || text.includes("video") || text.includes("视频")) return "04-video";
  if (DOC_EXT.has(ext)) return "05-docs";
  if (RAW_EXT.has(ext)) return "raw";
  if (
    relativeFolderPath.toLowerCase().includes("00-cover") ||
    relativeFolderPath.toLowerCase().includes("thumbnail") ||
    relativeFolderPath.includes("封面") ||
    text.includes("hero")
  ) {
    return "00-cover";
  }
  if (
    text.includes("research") ||
    text.includes("reference") ||
    text.includes("参考") ||
    text.includes("对标") ||
    text.includes("dataset") ||
    text.includes("data") ||
    text.includes("资料") ||
    text.includes("调研") ||
    text.includes("理论")
  ) {
    return "01-research";
  }
  if (
    text.includes("process") ||
    text.includes("workflow") ||
    text.includes("prompt") ||
    text.includes("sketch") ||
    text.includes("iteration") ||
    text.includes("mid图") ||
    text.includes("技术") ||
    text.includes("生成") ||
    text.includes("过程") ||
    text.includes("方案")
  ) {
    return "02-process";
  }
  if (
    text.includes("final") ||
    text.includes("output") ||
    text.includes("result") ||
    text.includes("成图") ||
    text.includes("产出") ||
    text.includes("交付") ||
    text.includes("展示") ||
    text.includes("结果")
  ) {
    return "03-final";
  }

  return IMAGE_EXT.has(ext) ? "03-final" : "raw";
}

function shouldSkip(meta, relativeFolderPath) {
  const ext = String(meta.ext ?? "").toLowerCase();
  const text = `${relativeFolderPath} ${meta.name}`.toLowerCase();
  if (!SUPPORTED_EXT.has(ext)) return true;
  if (text.includes("before { content")) return true;
  if (text.includes("promoted")) return true;
  if (text.includes("adobe stock")) return true;
  if (text.includes("search results page")) return true;
  if (text.includes("批量下载")) return true;
  if (text.includes("__macosx")) return true;
  if (text.includes("._")) return true;
  return false;
}

function qualityScore(meta, section, relativeFolderPath) {
  const ext = String(meta.ext ?? "").toLowerCase();
  const pixels = (meta.width ?? 0) * (meta.height ?? 0);
  const star = Number(meta.star ?? 0);
  const text = `${relativeFolderPath} ${meta.name}`.toLowerCase();
  let score = 0;

  score += Math.min(70, pixels / 45000);
  score += Math.min(20, (meta.size ?? 0) / 600000);
  score += star * 45;
  if (section === "00-cover") score += 30;
  if (section === "03-final") score += 20;
  if (text.includes("final") || text.includes("output") || text.includes("产出") || text.includes("交付")) score += 28;
  if (text.includes("cover") || text.includes("封面") || text.includes("hero")) score += 35;
  if (text.includes("screenshot") || text.includes("截图")) score -= 8;
  if (text.includes("dataset") || text.includes("批量下载") || text.includes("search results")) score -= 30;
  if (RAW_EXT.has(ext)) score -= 100;
  return score;
}

function copyIfNeeded(src, dest) {
  if (fs.existsSync(dest)) {
    const source = fs.statSync(src);
    const target = fs.statSync(dest);
    if (source.size === target.size) return "exists";
  }
  fs.copyFileSync(src, dest);
  return "copied";
}

const metadataPath = path.join(EAGLE_LIBRARY, "metadata.json");
const imagesPath = path.join(EAGLE_LIBRARY, "images");
const library = readJson(metadataPath);

if (!library || !fs.existsSync(imagesPath)) {
  console.error(`Eagle library not found: ${EAGLE_LIBRARY}`);
  process.exit(1);
}

const allFolders = flattenFolders(library.folders ?? []);
const folderById = new Map(allFolders.map((folder) => [folder.id, folder]));
const caseRoot = findFolder(library.folders, CASE_ROOT_NAME);

if (!caseRoot) {
  console.error(`Could not find Eagle folder: ${CASE_ROOT_NAME}`);
  process.exit(1);
}

const caseFolders = (caseRoot.children ?? []).filter(
  (folder) => PROJECT_TARGETS.has(folder.name) && !IGNORED_CASES.has(folder.name)
);
const caseByDescendantId = new Map();
for (const folder of caseFolders) {
  for (const id of descendants(folder)) caseByDescendantId.set(id, folder);
}

const selections = new Map();
for (const folder of caseFolders) {
  selections.set(folder.name, {
    folder,
    projectDir: path.join(DESIGN_HUB, PROJECT_TARGETS.get(folder.name)),
    items: [],
    bySection: new Map(),
  });
}

for (const infoName of fs.readdirSync(imagesPath)) {
  if (!infoName.endsWith(".info") || infoName.startsWith("._")) continue;
  const infoDir = path.join(imagesPath, infoName);
  if (!fs.statSync(infoDir).isDirectory()) continue;
  const meta = readJson(path.join(infoDir, "metadata.json"));
  if (!meta || meta.isDeleted) continue;
  const ext = String(meta.ext ?? "").toLowerCase();
  if (!SUPPORTED_EXT.has(ext)) continue;

  const caseFolder = (meta.folders ?? []).map((id) => caseByDescendantId.get(id)).find(Boolean);
  if (!caseFolder) continue;

  const directFolder = (meta.folders ?? [])
    .map((id) => folderById.get(id))
    .filter((folder) => folder?.path.startsWith(caseFolder.path))
    .sort((a, b) => b.path.length - a.path.length)[0];
  const relativeFolderPath = directFolder
    ? directFolder.path.replace(`${caseFolder.path} / `, "")
    : caseFolder.name;
  if (shouldSkip(meta, relativeFolderPath)) continue;
  const section = storySection(meta, relativeFolderPath);
  if (section === "raw") continue;

  const src = itemOriginalPath(infoDir, meta);
  if (!src) continue;

  const row = {
    meta,
    src,
    section,
    relativeFolderPath,
    score: qualityScore(meta, section, relativeFolderPath),
  };
  const project = selections.get(caseFolder.name);
  project.items.push(row);
  if (!project.bySection.has(section)) project.bySection.set(section, []);
  project.bySection.get(section).push(row);
}

const lines = [];
lines.push("# Eagle Case Asset Sync");
lines.push("");
lines.push(`Generated: ${new Date().toISOString().slice(0, 10)}`);
lines.push(`Mode: ${APPLY ? "apply" : "dry run"}`);
lines.push(`Eagle library: \`${EAGLE_LIBRARY}\``);
lines.push("");
lines.push("This sync uses the Product Case Study structure: `00-cover`, `01-research`, `02-process`, `03-final`, `04-video`, `05-docs`. It intentionally ignores raw source files and large dataset dumps.");
lines.push("");

let copied = 0;
let existing = 0;
let planned = 0;

for (const [caseName, project] of selections) {
  const targetExists = fs.existsSync(project.projectDir);
  if (project.items.length === 0) continue;
  lines.push(`## ${caseName} -> \`${project.projectDir}\``);
  if (!targetExists) lines.push("");
  if (!targetExists) lines.push("Skipped: target Design Hub project folder does not exist.");
  lines.push("");

  for (const section of Object.keys(LIMITS)) {
    const candidates = (project.bySection.get(section) ?? [])
      .sort((a, b) => b.score - a.score || (b.meta.size ?? 0) - (a.meta.size ?? 0))
      .slice(0, LIMITS[section]);
    if (candidates.length === 0) continue;

    lines.push(`### ${section}`);
    for (const item of candidates) {
      const ext = path.extname(item.src).toLowerCase();
      const destName = `${slugName(item.meta.name)}--eagle-${item.meta.id}${ext}`;
      const destDir = path.join(project.projectDir, section);
      const dest = path.join(destDir, destName);
      let status = "planned";
      if (targetExists && APPLY) {
        fs.mkdirSync(destDir, { recursive: true });
        status = copyIfNeeded(item.src, dest);
        if (status === "copied") copied++;
        if (status === "exists") existing++;
      } else {
        planned++;
      }
      lines.push(
        `- ${status}: ${item.meta.name}.${item.meta.ext} (${item.meta.width ?? "?"}x${item.meta.height ?? "?"}, score ${item.score.toFixed(
          1
        )}) from \`${item.relativeFolderPath}\``
      );
    }
    lines.push("");
  }
}

lines.push("## Summary");
lines.push("");
lines.push(`- copied: ${copied}`);
lines.push(`- already current: ${existing}`);
lines.push(`- planned only: ${planned}`);
lines.push("");

fs.mkdirSync(path.dirname(REPORT), { recursive: true });
fs.writeFileSync(REPORT, `${lines.join("\n")}\n`);

console.log(`Wrote ${REPORT}`);
console.log(APPLY ? `Copied ${copied}, already current ${existing}.` : `Dry run planned ${planned} files.`);
console.log("Use `npm run sync-eagle-case-assets -- --apply` to copy files.");
