# Image management — the only rule you need

You drop images into the right project subfolder. You run one command. The site updates.

No Notion image upload. No code edit. No path lookup.

---

## Where to drop images

Inside any project folder:

\`\`\`
~/Design hub/{Tier}{NN}-{Slug}/
├── 00-cover/        ← drop ONE image here  → becomes the thumbnail (home + case study hero)
├── 01-research/     ← all images here       → "Research & Discovery" section
├── 02-process/      ← all images here       → "Design Strategy" section
├── 03-final/        ← all images here       → "Results & Impact" section
├── 04-video/        ← reserved for videos
├── 05-docs/         ← PDFs and decks (not site images)
└── raw/             ← source files (.fig .indd .ai .psd) — ignored
\`\`\`

One folder convention. No Notion image fields. No asset URLs.

---

## The one command

\`\`\`bash
npm run sync-images
\`\`\`

It:
1. Scans every Tier-A project folder under \`~/Design hub/\`
2. Finds the first image in each \`00-cover/\` → compresses → \`/public/thumbnails/{slug}.jpg\`
3. Finds all images in \`01-research/\`, \`02-process/\`, \`03-final/\` → compresses → \`/public/work/{slug}/{section}/\`
4. Writes a manifest of what was synced to \`lib/_image-manifest.json\`

After that:
\`\`\`bash
git add -A && git commit -m 'sync images' && git push
\`\`\`
Vercel auto-deploys in 60 seconds.

### Sync just one project
\`\`\`bash
npm run sync-images -- smataste
\`\`\`

---

## Where things actually live

| Layer | Path | Source of truth |
|-------|------|----------------|
| Master images (your originals) | \`~/Design hub/{Tier}{NN}-{Slug}/{section}/\` | iCloud (you in Finder) |
| Compressed for web (auto-generated) | \`/public/thumbnails/{slug}.jpg\` and \`/public/work/{slug}/{section}/*.jpg\` | the script (don't hand-edit) |
| Captions + ordering (currently manual) | \`lib/projects.ts\` \`media[]\` array | code (you or me) |

Originals untouched in iCloud. Compressed versions in repo. Captions live in code because they require thinking, not just file paths.

---

## What the script does NOT do yet

It generates the manifest but does NOT auto-rewrite \`lib/projects.ts media[]\` because:
- Captions are hand-crafted for case-study impact
- Section ordering can be curated (filename alphabetical isn't always the narrative order)

After running \`npm run sync-images\`, look at \`lib/_image-manifest.json\`. It tells you which slugs have new images to wire in. Tell me, I add them to \`media[]\` with proper captions in 2 minutes.

---

## Notion images (the thing you wanted to skip)

You said: Notion table image upload is annoying — upload, get URL, paste in cell.

You're right. None of the website images come from Notion image fields anymore. Notion is for text and structure (project descriptions, research questions, press URLs). Images live in iCloud folders with the convention above.

---

## Press images

Same pattern but simpler. They live at \`/public/press/{name}.jpg\` and you drop them there directly.

---

## Quick reference (today)

- SmaTaste — 2 cover candidates, 2 research, 7 process, 6 final images discovered
- SKG+ — 1 cover, 11 research, 1 process discovered
- BEATROL, Synco-E, Co Cerebral, Wildfire, Meta Station — folders exist, images not yet dropped
