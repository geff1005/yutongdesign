import { mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";

const slugs = [
  "smataste",
  "co-cerebral",
  "skgplus",
  "beatrol",
  "poeticform",
  "greenmove",
  "syncoe",
  "meta-station",
  "bytedance",
];

const mode = process.argv[2] ?? "all";
const entry = "remotion/index.ts";
const composition = "FeaturedProjectProductCard";
const outputDir = "public/generated/featured";

mkdirSync(outputDir, { recursive: true });

function run(args) {
  const result = spawnSync("npx", ["remotion", ...args], {
    stdio: "inherit",
    env: process.env,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function renderStill(slug) {
  run([
    "still",
    entry,
    composition,
    `${outputDir}/${slug}.jpg`,
    "--frame=180",
    `--props=${JSON.stringify({ projectSlug: slug })}`,
  ]);
}

function renderVideo(slug) {
  run([
    "render",
    entry,
    composition,
    `${outputDir}/${slug}.mp4`,
    "--codec=h264",
    "--crf=23",
    `--props=${JSON.stringify({ projectSlug: slug })}`,
  ]);
}

for (const slug of slugs) {
  if (mode === "still" || mode === "all") renderStill(slug);
  if (mode === "video" || mode === "all") renderVideo(slug);
}
