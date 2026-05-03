@AGENTS.md

# About Julian (Yutong) Zhu — Site Owner

Source-of-truth identity facts (CV verified, do not invent). When the site needs personal info, read these — don't guess.

- **Brand name**: Julian Zhu (display) / Julian Yutong Zhu (canonical)
- **Email**: julianyutongzhu@gmail.com
- **Phone**: +44 07857 160 706 (UK)
- **Location**: London (NOT Chicago — that was placeholder text from the original Next.js template, now removed)
- **LinkedIn**: linkedin.com/in/yutongdesign
- **GitHub**: github.com/geff1005
- **Site**: yutongdesign.art
- **Education**: RCA MDes Design Futures (Dec 2024 – Dec 2025), Sichuan Fine Arts BA Digital Media (Aug 2020 – Jun 2024)
- **Industry**: RCA Executive Education facilitator → SKG Studio web designer → HUAWEI UX intern → ByteDance visual designer
- **Key press**: The Guardian feature (Mar 2026) "How art school creators are adapting to the age of AI"
- **Key awards**: Red Dot Concept Shortlist 2023, IDA Silver+Bronze 2023, European Product Design Top Design 2023

# Job Search Context

Active job applications shape what gets featured on the site. Currently:

- **Accenture — GenAI Creative Technologist** (active application). The role wants ComfyUI / Weavy / Runway / HeyGen / ElevenLabs / node-based environments / repeatable workflows / art direction + emerging tech / marketing & content creation. SWOT analysis lives in Apple Note `ACCenture 匹配JD FOCUS`. **Not a generic Product Designer role** — academic BCI/industrial case studies (Synco-E, BEATROL) are secondary; ComfyUI / Six Hats Rebuild / ByteDance Filters / HUAWEI workflow / Symposium campaign are primary.
- **Product Designer roles in general** — Sodexo (SmaTaste) is the highest-leverage PD case study (real client + AI + tech systems + UIUX flow). Make it a Featured top-tier story whenever that audience is targeted.

# User Priorities (read this before strategising)

These are Julian's own stated priorities — defer to them.

1. **Sodexo / SmaTaste as #1 PD case study** ⭐
   - Real corporate client (Sodexo) + RCA collaboration → high credibility
   - Software system + AI + tech angle (matches "real PD work")
   - End-to-end UIUX flow makes it perfect for Product Designer applications
   - Press already exists (RCA × Sodexo articles in link tree DB)
   - Source assets: iCloud `Design hub/SmaTaste-SOD121-Design Innovation（sodexo）/` (204 MB) + Figma teams (likely "涌现小组" or "DF Symposium 25" — confirm). Currently NOT in the new Notion Projects DB.
   - When integrating: surface Sodexo collaboration prominently, keep AI/tech framing, structure narrative around UIUX flow.

2. **Six Thinking Hats Rebuild / CoCereb (毕设) = Julian's own time priority** 🎓
   - This is Julian's RCA thesis live-demo work — **Julian ships it, not me**
   - Apple Note `🎩 Project: Six Thinking Hats Rebuild` has the spec (Next.js 15 + Spline + LLM agents + Vercel AI SDK + Web Speech)
   - Vercel Builder's Night cofounder lead is real — this project is part of a potential collab
   - CoCereb Agent IRP (the AI in education thesis) lives in `iCloud/CoCereb Agent-IRP-P-R/`
   - **My job**: leave space for these on the site, prepare slots / Featured cards, but don't reimplement them. Once Julian ships, we link them in.

3. **Site is built for Julian, not for me to over-design**
   - Don't propose huge restructures unprompted
   - Replace placeholders with real data (already done in Phase 0)
   - Each subsequent change should be requested or clearly justified
   - Phase tracking: see docs/ROADMAP.md (V2 — Accenture-aligned)

# Asset Locations Quick Reference

Full registry: `docs/_HUB_REGISTRY.md` and `Design hub/_HUB/REGISTRY.md`. Quick paths:

- **Per-project raw assets**: `~/iCloud/.../Design hub/<Project>/` (20+ folders, ~270 GB total)
- **Polished portfolio PDFs (8)**: `Design hub/0-Portfolio/` and `Design hub/_HUB/FINAL_PDFS/`
- **Notion**: 3 DBs — Projects (new) `20b9f7ed1e088013905ceccaf0bae66f`, Design Projects (old, has framer thumbnails) `c916d4c6ccc74a3f95c93adea2f2774c`, link tree (press) `1a19f7ed1e0880ebab4fc39fca75417f`
- **Figma**: 13 teams. Known files: ALL Design Universe `3UWWwCbnRRubuvUgeAmb5g`, 00-ZHU-V2 `lvGC5pqs9F8fNdYmlTvKq4`, Symposium-25 `4VUeNNXEkPAHVYOBluXN7O`
- **Apple Notes**: Accenture JD analysis ⭐, Six Thinking Hats Rebuild ⭐, Linkedin Post draft, 伦敦两年上岸计划
- **External HD (T7 Shield / TTBase)**: RCA archive, DJI footage, DaVinci, SKG+, Designer-Jeff Eagle library (23,912 items)

# Site Architecture (current)

- Next.js 16 (App Router, Turbopack)
- Hosted: Vercel `judeforlove13-4509s-projects/yutongdesign`, deployed via auto-deploy on `main` push
- Domain: yutongdesign.art (DNS at Aliyun: A @ 76.76.21.21 + CNAME www → cname.vercel-dns.com)
- Content: `lib/site.ts` (identity), `lib/projects.ts` (auto-generated from Notion via sync), `lib/press.ts` (auto-generated via sync)
- Sync: `npm run sync` locally OR daily GitHub Action (needs `NOTION_TOKEN` secret — see `docs/AUTOMATION_SETUP.md`)
- Routes: `/` home, `/work/[slug]` per-project case study (statically pre-generated)

# Per-Project README Convention (NEW)

Each major project folder under `~/iCloud/.../Design hub/<Project>/` now has two canonical text files:

- **`README.md`** — structured PD case study skeleton I scaffold from Notion + Resume. Has TODO bullets for Julian to fill.
- **`thinking.md`** — Julian's brain-dump (bullets / Chinese / English / fragments). This is **the source of truth for what's in his head** — read this every time before writing case study content.

When integrating a project into the website case study (`/work/[slug]`):
1. Read `Design hub/<Project>/README.md` for known facts
2. Read `Design hub/<Project>/thinking.md` for Julian's drafts
3. Look in `Design hub/<Project>/images/` and `docs/` for visuals
4. Combine → write the case study page

Currently scaffolded (using Tier-prefix folder convention as of 2026-04-29):
- `A01-SmaTaste-Sodexo-AID/` — RCA × Sodexo (Featured #1, PD hero)
- `A02-CoCereb-IRP-Six-Hats/` — RCA thesis · Six Thinking Hats agentic UX (Featured #2, contains stakeholder-map.pdf + IRP-Graphic-123.zip)
- `A03-SKG-Plus-Web/` — SKG+ contract web design (Featured #3, merged from old "SKG WebDeisgn")
- `A04-Beatrol-Cockpit-L4/` — L4 fatigue cockpit (Featured #4)
- `A05` to `A08` — Sync-E-BCI / SprayScape-Spatial / Wildfire-Whispers / Meta-Station-Huawei
- `B01` to `B08` — Library tier (Pulse / Bamboo-Wind / Botanictrum / Lunacy-Moon / Walking-Heaven / Poetic-Form / GreenMove / Massbot-Digital-Legacy)
- `C01` to `C05` — Experiments / archive (Runway-ISEE / SP-AI-Collab / Mercury-Piano / Profile-Promo)

Folder convention: `{Tier}{NN}-{Slug-EN}` (no spaces, no parens, no hashtags). Tier prefix sorts in Finder. See `docs/RENAME_PLAN.md` for full mapping.

# Editing Conventions

- Don't introduce CMS / database without justification — current TS files are fine for the project size
- Real data > placeholders, always. If something must be temporarily fake, mark it with `// TODO:` and explain
- Image hosts to allow: framerusercontent.com (CDN, used for thumbnails) — no need for Next/Image because we use plain `<img>`
- All long content (audits, registries) goes in `docs/` not in component code
- Brand voice: Julian = creative + technical, calm, declarative, no emoji on user-facing copy

# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.