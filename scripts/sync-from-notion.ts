/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Sync Notion → lib/projects.ts + lib/press.ts
 *
 * Usage:
 *   NOTION_TOKEN=secret_xxx npx tsx scripts/sync-from-notion.ts
 *   # or via npm script: npm run sync
 *
 * Setup (see docs/AUTOMATION_SETUP.md):
 *   1. Create a Notion integration at https://www.notion.so/profile/integrations
 *   2. Share each DB below with that integration ("+ Add connection")
 *   3. Set NOTION_TOKEN env var (locally) or NOTION_TOKEN GitHub Secret (CI)
 */

import { Client } from "@notionhq/client";
import * as fs from "node:fs";
import * as path from "node:path";

// --- Config -----------------------------------------------------------------

const PROJECTS_DB_NEW = "20b9f7ed-1e08-8013-905c-eccaf0bae66f";   // Projects (new schema, Featured flags)
const PROJECTS_DB_OLD = "c916d4c6-ccc7-4a3f-95c9-3adea2f2774c";   // Design Projects DB (old, has framer thumbnails)
const LINK_TREE_DB    = "1a19f7ed-1e08-80eb-ab4f-c39fca75417f";   // link tree (press)

const OUT_PROJECTS = path.resolve(__dirname, "..", "lib", "projects.ts");
const OUT_PRESS    = path.resolve(__dirname, "..", "lib", "press.ts");

// Curated default groupings used by the home page. If the new DB grows,
// these slugs anchor the layout — others fall through to /work/[slug] only.
const SELECTED_FEATURED_SLUGS = ["beatrol", "sprayscape", "syncoe", "wildfire-whispers"];
const EXPLORATION_SLUGS = [
  "poeticform",
  "botanictrum",
  "lunacy",
  "meta-station",
  "neon-nike",
  "wildfire-whispers",
];

// --- Helpers ----------------------------------------------------------------

const token = process.env.NOTION_TOKEN;
if (!token) {
  console.error("✘ NOTION_TOKEN env var missing.");
  console.error("  Create an integration at https://www.notion.so/profile/integrations");
  console.error("  then run with NOTION_TOKEN=secret_xxx npm run sync");
  process.exit(1);
}

const notion = new Client({ auth: token });

function txt(prop: any): string {
  if (!prop) return "";
  if (prop.title?.length) return prop.title.map((t: any) => t.plain_text).join("");
  if (prop.rich_text?.length) return prop.rich_text.map((t: any) => t.plain_text).join("");
  if (prop.url) return prop.url;
  if (prop.select?.name) return prop.select.name;
  if (typeof prop === "string") return prop;
  return "";
}

function multi(prop: any): string[] {
  if (!prop?.multi_select) return [];
  return prop.multi_select.map((o: any) => o.name);
}

function checkbox(prop: any): boolean {
  return Boolean(prop?.checkbox);
}

function asInt(s: string, fallback = 0): number {
  const m = s.match(/(\d{4})/);
  return m ? parseInt(m[1], 10) : fallback;
}

async function queryAll(databaseId: string): Promise<any[]> {
  const out: any[] = [];
  let cursor: string | undefined = undefined;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const res: any = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
      page_size: 100,
    });
    out.push(...res.results);
    if (!res.has_more) break;
    cursor = res.next_cursor;
  }
  return out;
}

// --- Project sync -----------------------------------------------------------

type ProjectOut = {
  slug: string;
  title: string;
  description: string;
  researchQuestion?: string;
  intro?: string;
  type?: string;
  year: number;
  tags: string[];
  featured: boolean;
  thumbnail: string;
  videoUrl?: string;
  href: string;
};

async function buildProjects(): Promise<ProjectOut[]> {
  const [newRows, oldRows] = await Promise.all([
    queryAll(PROJECTS_DB_NEW),
    queryAll(PROJECTS_DB_OLD),
  ]);

  // Index old DB by slug for thumbnail fallback (framerusercontent.com).
  const oldBySlug = new Map<string, any>();
  for (const row of oldRows) {
    const slug =
      txt(row.properties["Slug"]) ||
      txt(row.properties["slug"]) ||
      txt(row.properties["Title"]).toLowerCase().replace(/\s+/g, "-");
    if (slug) oldBySlug.set(slug.toLowerCase(), row);
  }

  const projects: ProjectOut[] = [];
  for (const row of newRows) {
    const props = row.properties;
    const title = txt(props["Title main"]);
    const slug = (txt(props["slug"]) || title.toLowerCase().replace(/\s+/g, "-"))
      .toLowerCase();
    if (!title || !slug) continue;

    // Thumbnail: prefer old DB's framer thumbnail, fall back to local.
    const oldRow = oldBySlug.get(slug) || oldBySlug.get(slug.replace(/-/g, ""));
    const oldThumb =
      txt(oldRow?.properties["Thumbnail Image"]) ||
      txt(oldRow?.properties["Image1"]);
    const thumbnail = oldThumb || `/thumbnails/${slug}.jpg`;

    const videoUrl =
      txt(props["Video URL1"]) ||
      txt(props["Video1"]) ||
      txt(props["Project Link"]).match(/vimeo\.com/) ? txt(props["Project Link"]) : "";

    projects.push({
      slug,
      title,
      description: txt(props["Project Description "]) || txt(props["Project Description"]),
      researchQuestion: txt(props["Research Question"]) || undefined,
      intro: txt(props["Project Introduction"]) || txt(props["Project Intro"]) || undefined,
      type: txt(props["Project Type"]) || txt(props["Project Type 2"]) || undefined,
      year: asInt(txt(props["Project Timeline"])),
      tags: multi(props["Project Tag "]),
      featured: checkbox(props["Featured"]),
      thumbnail,
      videoUrl: videoUrl || undefined,
      href: `/work/${slug}`,
    });
  }

  // Sort: featured first, then by year desc.
  projects.sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    return b.year - a.year;
  });

  return projects;
}

function emitProjects(projects: ProjectOut[]): string {
  const projectLines = projects.map((p) => {
    return `  ${JSON.stringify(p, null, 4).split("\n").join("\n  ")}`;
  });

  const found = (slug: string) =>
    `PROJECTS.find((p) => p.slug === ${JSON.stringify(slug)})`;

  return `// AUTO-GENERATED by scripts/sync-from-notion.ts — do not edit by hand.
// Source: Notion Projects DB (${PROJECTS_DB_NEW}) + Design Projects DB (${PROJECTS_DB_OLD}).
// Last synced: ${new Date().toISOString()}

export type Project = {
  slug: string;
  title: string;
  description: string;
  researchQuestion?: string;
  intro?: string;
  type?: string;
  year: number;
  tags: string[];
  featured: boolean;
  thumbnail: string;
  videoUrl?: string;
  href: string;
};

export const PROJECTS: Project[] = [
${projectLines.join(",\n")}
];

// Featured 4 for the home Selected Works bento grid
export const SELECTED_FEATURED = [
${SELECTED_FEATURED_SLUGS.map((s) => `  ${found(s)}!`).join(",\n")}
].filter(Boolean) as Project[];

// Explorations (Tier B / lighter projects) for the parallax section
export const EXPLORATIONS = [
${EXPLORATION_SLUGS.map((s) => `  ${found(s)}!`).join(",\n")}
].filter(Boolean) as Project[];
`;
}

// --- Press sync -------------------------------------------------------------

type PressOut = {
  date: string;
  title: string;
  outlet: string;
  url: string;
  tag?: string;
  thumbnail?: string;
  pinned?: boolean;
};

// Outlets that automatically pin to the top regardless of date.
// Tier-1 press = stays visible. Add more as bigger outlets cover Julian.
const TIER1_HOSTS = [
  "theguardian.com",
  "ft.com",
  "nytimes.com",
  "wired.com",
  "fastcompany.com",
  "designboom.com",
  "dezeen.com",
  "creativeapplications.net",
];

function inferOutlet(name: string, url: string): string {
  const u = url.toLowerCase();
  if (u.includes("rca.ac.uk")) return "Royal College of Art";
  if (u.includes("theguardian.com")) return "The Guardian";
  if (u.includes("idesignawards.com")) return "IDA";
  if (u.includes("sparkawards.com")) return "Spark Awards";
  if (u.includes("mp.weixin.qq.com")) return "WeChat";
  // Heuristic from name suffix
  const m = name.match(/—\s*([^—]+)$/);
  if (m) return m[1].trim();
  try {
    const host = new URL(url).hostname;
    return host;
  } catch {
    return "—";
  }
}

async function buildPress(): Promise<PressOut[]> {
  const rows = await queryAll(LINK_TREE_DB);
  const out: PressOut[] = [];
  for (const row of rows) {
    const props = row.properties;
    const name = txt(props["Name"]).replace(/^\[?\s*🔗?\s*link\s*\]?\s*—?\s*/i, "").trim();
    const url = txt(props["URL"]) || txt(props["official link"]);
    if (!name || !url) continue;
    // Prefer the user-set "Published Date" over Notion's auto Created stamp.
    const publishedStart: string =
      props["Published Date"]?.date?.start || "";
    const created: string =
      publishedStart ||
      props["Created"]?.created_time ||
      row.created_time ||
      "";
    const tags = multi(props["Tags"]);
    const pinned = TIER1_HOSTS.some((h) => url.toLowerCase().includes(h));
    const thumbnail = txt(props["Thumbnail"]) || undefined;
    out.push({
      date: created.slice(0, 10),
      title: name,
      outlet: inferOutlet(name, url),
      url,
      tag: tags[0] || undefined,
      thumbnail,
      pinned: pinned || undefined,
    });
  }
  // Pinned first, then date desc.
  out.sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
    return a.date < b.date ? 1 : -1;
  });
  return out;
}

function emitPress(items: PressOut[]): string {
  return `// AUTO-GENERATED by scripts/sync-from-notion.ts — do not edit by hand.
// Source: Notion link tree DB (${LINK_TREE_DB}).
// Last synced: ${new Date().toISOString()}

export type PressItem = {
  date: string;
  title: string;
  outlet: string;
  url: string;
  tag?: string;
};

export const PRESS: PressItem[] = ${JSON.stringify(items, null, 2)};
`;
}

// --- Main -------------------------------------------------------------------

(async () => {
  console.log("→ Querying Notion…");
  const [projects, press] = await Promise.all([buildProjects(), buildPress()]);

  fs.writeFileSync(OUT_PROJECTS, emitProjects(projects));
  fs.writeFileSync(OUT_PRESS, emitPress(press));

  console.log(`✓ ${projects.length} projects → lib/projects.ts`);
  console.log(`✓ ${press.length} press items → lib/press.ts`);
})().catch((err) => {
  console.error("✘ Sync failed:", err.message || err);
  process.exit(1);
});
