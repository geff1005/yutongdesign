#!/usr/bin/env node
/**
 * Generate docs/EAGLE_CASE_MAPPING.md.
 *
 * Read-only: compares Eagle Mine folder paths against the Design Hub case-study
 * taxonomy and proposes project/category tags with confidence levels.
 */
import fs from "node:fs";
import path from "node:path";

const EAGLE_LIBRARY =
  process.env.EAGLE_LIBRARY || "/Volumes/T7 Shield/Designer-Jeff.library";
const OUT =
  process.env.OUT ||
  "/Users/apple/Library/Mobile Documents/com~apple~CloudDocs/2*Areas of Foucs/Design hub/Julianyutongzhu /yutongdesign/docs/EAGLE_CASE_MAPPING.md";
const MINE_NAME = "Mine";

const PROJECTS = [
  { tag: "project:A01-smataste", label: "A01 SmaTaste", aliases: ["smataste", "sodexo", "sod121", "smartaste", "inno-sodexo"] },
  { tag: "project:A02-cocereb", label: "A02 CoCereb", aliases: ["cocereb", "six hats", "six-hats", "preferebral", "irp", "agent"] },
  { tag: "project:A03-skg-plus-web", label: "A03 SKG+ Web", aliases: ["skg", "amacontest"] },
  { tag: "project:A04-beatrol", label: "A04 BEATROL", aliases: ["beatrol", "疲劳座舱", "cockpit", "l4"] },
  { tag: "project:A05-sync-e-bci", label: "A05 Sync-E BCI", aliases: ["sync-e", "synco", "bci", "脑波"] },
  { tag: "project:A06-sprayscape", label: "A06 SprayScape", aliases: ["sprayscape", "spray scape", "涂行", "graffiti"] },
  { tag: "project:A07-wildfire-whispers", label: "A07 Wildfire Whispers", aliases: ["wildfire", "pulse", "野火"] },
  { tag: "project:A08-meta-station-huawei", label: "A08 Meta Station Huawei", aliases: ["meta station", "meta项目", "云宇宙", "华为", "huawei", "主题"] },
  { tag: "project:B02-bamboo-wind", label: "B02 Bamboo Wind", aliases: ["bamboo", "竹风", "共书"] },
  { tag: "project:B03-botanictrum", label: "B03 Botanictrum", aliases: ["botanictrum", "绿脉", "植物"] },
  { tag: "project:B04-lunacy-moon", label: "B04 Lunacy Moon", aliases: ["lunacy", "月球", "生命档案"] },
  { tag: "project:B05-walking-heaven", label: "B05 Walking Heaven", aliases: ["walking", "步天歌", "天文"] },
  { tag: "project:B06-poetic-form", label: "B06 Poetic Form", aliases: ["poetic form", "诗之形", "宋韵", "太湖石", "stone"] },
  { tag: "project:B07-greenmove", label: "B07 GreenMove", aliases: ["greenmove", "未来出行", "移动健身"] },
  { tag: "project:B08-massbot-digital-legacy", label: "B08 Massbot Digital Legacy", aliases: ["massbot", "digital legacy", "数字遗产"] },
  { tag: "project:C01-runway-isee", label: "C01 Runway ISEE", aliases: ["runway", "isee"] },
  { tag: "project:C02-sp-ai-collaboration", label: "C02 SP AI Collaboration", aliases: ["ai实践", "ai实践记录", "collaboration", "视觉中国", "动态"] },
  { tag: "project:C03-mercury-piano", label: "C03 Mercury Piano", aliases: ["mercury", "钢琴", "弹琴", "音乐实践"] },
  { tag: "project:C05-profile-promo", label: "C05 Profile Promo", aliases: ["profile", "自媒体", "影像", "视听", "ae", "未来有朝"] },
];

const CATEGORY_RULES = [
  { tag: "cat:motion-and-film", aliases: ["视频", "影像", "视听", "ae", "motion", "film", "mp4", "mov", "动态"] },
  { tag: "cat:3d-art", aliases: ["3d", "三维", "图生3d", "太湖石", "stone", "渲染", "obj", "glb", "splat"] },
  { tag: "cat:graphic-design", aliases: ["平面", "版式", "字体", "品牌", "海报", "poster"] },
  { tag: "cat:photography", aliases: ["摄影", "照片", "江边", "天台", "人像"] },
  { tag: "cat:interaction-design", aliases: ["交互", "touchdesigner", "硬件", "arduino", "leapmotion"] },
  { tag: "cat:architecture", aliases: ["空间", "布展", "建筑", "场景"] },
  { tag: "cat:sound", aliases: ["声音", "音乐", "sound"] },
  { tag: "cat:product-design", aliases: ["产品", "冲牙器", "工业"] },
  { tag: "cat:ui-ux", aliases: ["ui", "界面", "网页端", "移动端"] },
  { tag: "cat:illustration", aliases: ["插画", "手绘"] },
  { tag: "cat:fine-art-and-crafts", aliases: ["实验艺术", "装置", "craft", "艺术"] },
];

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}

function flattenFolders(folders, trail = [], parentId = null) {
  const out = [];
  for (const folder of folders ?? []) {
    const lineage = [...trail, folder.name];
    out.push({
      id: folder.id,
      name: folder.name,
      path: lineage.join(" / "),
      depth: lineage.length,
      parentId,
      children: folder.children ?? [],
    });
    out.push(...flattenFolders(folder.children, lineage, folder.id));
  }
  return out;
}

function findMine(folders) {
  for (const folder of folders ?? []) {
    if (folder.name === MINE_NAME) return folder;
    const found = findMine(folder.children);
    if (found) return found;
  }
  return null;
}

function collectIds(folder, ids = new Set()) {
  ids.add(folder.id);
  for (const child of folder.children ?? []) collectIds(child, ids);
  return ids;
}

function scoreRules(text, rules) {
  const lower = text.toLowerCase();
  let best = { tag: "project:needs-review", label: "Needs review", score: 0, hits: [] };
  for (const rule of rules) {
    const hits = rule.aliases.filter((alias) => lower.includes(alias.toLowerCase()));
    if (hits.length === 0) continue;
    const score = hits.reduce((sum, hit) => sum + Math.min(4, hit.length / 3), 0);
    if (score > best.score) best = { ...rule, score, hits };
  }
  return best;
}

function categoryFor(text, exts) {
  const enriched = `${text} ${[...exts.keys()].join(" ")}`;
  const best = scoreRules(enriched, CATEGORY_RULES);
  return best.score > 0 ? best : { tag: "cat:needs-review", score: 0, hits: [] };
}

function confidence(project, recursiveCount, depth) {
  if (project.score >= 3 && recursiveCount >= 10) return "high";
  if (project.score >= 1.5 && recursiveCount >= 5) return "medium";
  if (project.score > 0 || depth >= 4) return "low";
  return "needs-review";
}

function inc(map, key, n = 1) {
  map.set(key, (map.get(key) ?? 0) + n);
}

function fmtMap(map, limit = 5) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([k, v]) => `${k} ${v}`)
    .join(", ");
}

const libraryPath = path.join(EAGLE_LIBRARY, "metadata.json");
const imagesPath = path.join(EAGLE_LIBRARY, "images");
const library = readJson(libraryPath);
if (!library || !fs.existsSync(imagesPath)) {
  console.error(`Eagle library not found: ${EAGLE_LIBRARY}`);
  process.exit(1);
}

const mine = findMine(library.folders);
if (!mine) {
  console.error(`Mine folder not found in ${EAGLE_LIBRARY}`);
  process.exit(1);
}

const all = flattenFolders(library.folders);
const folderById = new Map(all.map((folder) => [folder.id, folder]));
const mineIds = collectIds(mine);
const mineFolderRows = all.filter((folder) => mineIds.has(folder.id));
const mineFolderIdSet = new Set(mineFolderRows.map((folder) => folder.id));

const ancestorById = new Map();
for (const folder of all) {
  const ids = [];
  let current = folder;
  while (current) {
    ids.push(current.id);
    current = folderById.get(current.parentId);
  }
  ancestorById.set(folder.id, ids);
}

const stats = new Map(
  mineFolderRows.map((folder) => [
    folder.id,
    { folder, recursive: 0, direct: 0, ext: new Map(), stars: new Map(), tags: new Map() },
  ])
);

for (const infoDir of fs.readdirSync(imagesPath)) {
  if (!infoDir.endsWith(".info")) continue;
  const meta = readJson(path.join(imagesPath, infoDir, "metadata.json"));
  if (!meta || meta.isDeleted) continue;
  const itemFolders = meta.folders ?? [];
  if (!itemFolders.some((folderId) => mineFolderIdSet.has(folderId))) continue;

  const touched = new Set();
  for (const folderId of itemFolders) {
    if (mineFolderIdSet.has(folderId)) {
      const stat = stats.get(folderId);
      if (stat) stat.direct++;
    }
    for (const ancestorId of ancestorById.get(folderId) ?? []) {
      if (mineFolderIdSet.has(ancestorId)) touched.add(ancestorId);
    }
  }

  for (const folderId of touched) {
    const stat = stats.get(folderId);
    if (!stat) continue;
    stat.recursive++;
    inc(stat.ext, meta.ext ?? "unknown");
    inc(stat.stars, String(meta.star ?? "unrated"));
    for (const tag of meta.tags ?? []) inc(stat.tags, tag);
  }
}

const rows = [];
for (const stat of stats.values()) {
  if (stat.folder.id === mine.id) continue;
  if (stat.recursive === 0 && stat.direct === 0) continue;
  const project = scoreRules(stat.folder.path, PROJECTS);
  const cat = categoryFor(stat.folder.path, stat.ext);
  rows.push({
    ...stat,
    project,
    category: cat,
    confidence: confidence(project, stat.recursive, stat.folder.depth),
  });
}

const topLevelRows = rows
  .filter((row) => row.folder.depth === 2)
  .sort((a, b) => b.recursive - a.recursive || a.folder.path.localeCompare(b.folder.path));

const projectRollup = new Map();
for (const row of topLevelRows) {
  const key = row.project.tag;
  const current =
    projectRollup.get(key) ?? {
      project: row.project,
      items: 0,
      folders: 0,
      high: 0,
      medium: 0,
      low: 0,
      needsReview: 0,
      examples: [],
    };
  current.items += row.recursive;
  current.folders++;
  if (row.confidence === "high") current.high++;
  if (row.confidence === "medium") current.medium++;
  if (row.confidence === "low") current.low++;
  if (row.confidence === "needs-review") current.needsReview++;
  if (current.examples.length < 4) current.examples.push(row.folder.path.replace(/^Mine \/ /, ""));
  projectRollup.set(key, current);
}

const actionRows = topLevelRows.filter((row) => row.confidence === "high" || row.confidence === "medium");

rows.sort((a, b) => {
  const rank = { high: 0, medium: 1, low: 2, "needs-review": 3 };
  return rank[a.confidence] - rank[b.confidence] || b.recursive - a.recursive || a.folder.path.localeCompare(b.folder.path);
});

const lines = [];
lines.push("# Eagle Case Mapping");
lines.push("");
lines.push(`Generated: ${new Date().toISOString().slice(0, 10)}`);
lines.push(`Library: \`${EAGLE_LIBRARY}\``);
lines.push(`Source folder: \`Mine\` (${mine.id})`);
lines.push("");
lines.push("This is a semi-automatic mapping from Eagle `Mine` folders to the current Design Hub case-study taxonomy. Treat `high` rows as good first-pass candidates, `medium` as reviewable, and `low/needs-review` as manual triage.");
lines.push("");
lines.push("## Summary");
lines.push("");
for (const level of ["high", "medium", "low", "needs-review"]) {
  lines.push(`- ${level}: ${rows.filter((row) => row.confidence === level).length}`);
}
lines.push("");
lines.push("## Case Study Rollup");
lines.push("");
lines.push("This rollup only counts direct children of `Mine`, so one large project does not drown the planning view with nested dataset folders.");
lines.push("");
lines.push("| Project tag | Top-level folders | Approx items | Confidence mix | Example Eagle folders |");
lines.push("|---|---:|---:|---|---|");
for (const rollup of [...projectRollup.values()].sort((a, b) => b.items - a.items || a.project.tag.localeCompare(b.project.tag))) {
  lines.push(
    `| ${rollup.project.tag} | ${rollup.folders} | ${rollup.items} | high ${rollup.high}, medium ${rollup.medium}, low ${rollup.low}, review ${rollup.needsReview} | ${rollup.examples.join("; ")} |`
  );
}
lines.push("");
lines.push("## Actionable First Pass");
lines.push("");
lines.push("Start here. These are top-level `Mine` folders with enough evidence to tag or move first, before touching deeper nested folders.");
lines.push("");
lines.push("| Confidence | Eagle folder | Items | Project tag | Category tag | Evidence | Types | Stars |");
lines.push("|---|---|---:|---|---|---|---|---|");
for (const row of actionRows) {
  lines.push(
    `| ${row.confidence} | ${row.folder.path.replace(/^Mine \/ /, "")} | ${row.recursive} | ${row.project.tag} | ${row.category.tag} | ${row.project.hits.join(", ")} | ${fmtMap(row.ext)} | ${fmtMap(row.stars)} |`
  );
}
lines.push("");
lines.push("## High Confidence Detailed Rows");
lines.push("");
lines.push("| Eagle folder | Items | Project tag | Category tag | Evidence | Types | Stars |");
lines.push("|---|---:|---|---|---|---|---|");
for (const row of rows.filter((row) => row.confidence === "high")) {
  lines.push(
    `| ${row.folder.path.replace(/^Mine \/ /, "")} | ${row.recursive} | ${row.project.tag} | ${row.category.tag} | ${row.project.hits.join(", ")} | ${fmtMap(row.ext)} | ${fmtMap(row.stars)} |`
  );
}
lines.push("");
lines.push("## Full Mapping");
lines.push("");
lines.push("| Confidence | Eagle folder | Items | Direct | Project tag | Category tag | Evidence | Types | Stars |");
lines.push("|---|---|---:|---:|---|---|---|---|---|");
for (const row of rows) {
  lines.push(
    `| ${row.confidence} | ${row.folder.path.replace(/^Mine \/ /, "")} | ${row.recursive} | ${row.direct} | ${row.project.tag} | ${row.category.tag} | ${row.project.hits.join(", ") || "-"} | ${fmtMap(row.ext) || "-"} | ${fmtMap(row.stars) || "-"} |`
  );
}
lines.push("");
lines.push("## Recommended Next Step");
lines.push("");
lines.push("Start only with `high` confidence rows. For each high-confidence folder, sample the 4-5 star items first, then visually review strong GIF/video/large image candidates before writing tags into Eagle.");
lines.push("");

fs.writeFileSync(OUT, `${lines.join("\n")}\n`);
console.log(`Wrote ${OUT} (${rows.length} mapped folders)`);
