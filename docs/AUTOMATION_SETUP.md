# Automation Setup — Notion → Site

This site auto-syncs content from Notion daily. Once-off setup ~5 min.

## What it does

- Daily 03:00 UTC, GitHub Action runs `npm run sync`
- The script reads 3 Notion DBs:
  - **Projects DB (new)** — Featured / Title / Description / Tags / Year
  - **Design Projects DB (old)** — Framer CDN thumbnails + research questions
  - **link tree DB** — Press articles
- Re-generates `lib/projects.ts` and `lib/press.ts`
- If anything changed, commits with `chore(sync): refresh content from Notion`
- Vercel auto-deploys the new commit (60-90 sec)

## One-time setup

### 1. Create a Notion integration

1. Go to **https://www.notion.so/profile/integrations**
2. Click **New integration**
3. Name: `yutongdesign-sync` (or anything)
4. Workspace: pick your workspace
5. Type: **Internal**
6. Capabilities: only `Read content` is needed
7. Submit → copy the **Internal Integration Token** (starts with `secret_…` or `ntn_…`)

### 2. Share each DB with the integration

Open each DB in Notion → click `⋯` (top right) → **Connections** → search `yutongdesign-sync` → **Confirm**.

DBs to share:
- Projects DB — `https://www.notion.so/20b9f7ed1e088013905ceccaf0bae66f`
- Design Projects DB — `https://www.notion.so/c916d4c6ccc74a3f95c93adea2f2774c`
- link tree — `https://www.notion.so/1a19f7ed1e0880ebab4fc39fca75417f`

### 3. Add token to GitHub Secrets

1. Go to https://github.com/geff1005/yutongdesign/settings/secrets/actions
2. Click **New repository secret**
3. Name: `NOTION_TOKEN`
4. Value: the integration token from step 1
5. Save

Done. The action will run automatically tonight at 03:00 UTC.

## Run sync manually

### From GitHub UI
Actions tab → **Sync from Notion** → Run workflow

### From your laptop
```bash
cd ~/path/to/yutongdesign
NOTION_TOKEN=secret_xxx npm run sync
git add lib/projects.ts lib/press.ts
git commit -m "chore(sync): refresh content"
git push
```

## How to add new content

| Want to add | Where to put it | Auto-syncs? |
|-------------|----------------|------------|
| New press article | Notion link tree DB → new row with Name + URL | ✅ next sync |
| New Featured project | Projects DB → tick `Featured` checkbox | ✅ next sync |
| Project thumbnail (better) | Design Projects DB → set `Thumbnail Image` URL (framer or otherwise) | ✅ next sync |
| Project Research Question / Intro | Both DBs (new schema preferred) | ✅ next sync |
| Site identity (name / pitch / location) | `lib/site.ts` directly | manual |
| Resume PDF | replace `public/resume.pdf` directly | manual |

## Troubleshooting

**"NOTION_TOKEN env var missing"** — set it in GitHub Secrets (CI) or in your shell (local).

**Sync ran but no new project shows** — check the project has `Featured` ✅ and a `slug` filled. Slug is what becomes `/work/[slug]`.

**Press item missing outlet** — script auto-detects outlet from URL (rca.ac.uk → Royal College of Art, etc.). For new outlets, add a case in `inferOutlet()` inside `scripts/sync-from-notion.ts`.
