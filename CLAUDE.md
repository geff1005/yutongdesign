@AGENTS.md

# Agent context loading

For substantive website changes, load `AGENTS.md`, this `CLAUDE.md`, `../AGENTS.md`, `../_wiki/index.md`, `../_wiki/website-repo.md`, and any relevant project wiki page under `../_wiki/projects/` before editing files or changing public claims.

This is context loading, not a blocking ceremony. For tiny direct answers, quick status checks, or urgent narrow fixes, use the nearest relevant guide and continue. Follow the host Agent's normal planning/execution flow. Use Design Hub `_wiki/` as persistent memory, inspect raw project/CV/source files before changing claims, do not move/rename/delete original Design Hub assets, and append to `../_wiki/log.md` after any website alignment or significant maintenance edit. Do not log trivial read-only answers unless they create reusable knowledge.

Resume-first rule: portfolio copy should support the current canonical resume. Cross-check `../../JobAppl* /CLAUDE.md` and the current resume before changing role titles, project metrics, ordering, or job-search-facing claims.

Scaffold-first rule: when editing a project's case copy, look for `../../<PROJECT_FOLDER>/SCAFFOLD.md` first (e.g. `../../A06-SprayScape-Spatial/SCAFFOLD.md`). The scaffold is Julian's intent record: headline, what he actually did, anchor facts not to invent, framings to avoid, and pointers to the authoritative source files. Treat it as the primary brief. If a scaffold is absent or empty, ask before generating prose, do not invent intent from raw assets alone. The full Design Hub knowledge layer lives at `../../_wiki/` with the canonical scaffold template at `../../_wiki/_template-scaffold.md` and the wiki structure template at `../../_wiki/projects/_template.md`.

Sync safety rule: `npm run sync` is paused behind `ALLOW_NOTION_PROJECTS_OVERWRITE=1` because it can overwrite hand-written rich case studies in `lib/projects.ts`. Do not run it with the overwrite flag unless the user explicitly approves.

# Copy rules: banned punctuation in display copy

This rule governs **copy that reads as prose**: descriptions, intros, impacts, challenge / research / strategy / implementation / results / lessons / nextSteps body, role, timeline, team, media captions, alt text, error messages, button microcopy. The whole job of this section is to keep prose from leaking dash-clause or slash-clause habits onto the site.

This rule does **not** govern eyebrow-style typographic decoration: the small uppercase mono labels above titles (Hero "AI DESIGN SYSTEM / 2026", SelectedWorks "SELECTED_SYSTEMS / 01", Explorations "MOTION_LAB / GENERATED_STUDIES"), the `type` field on case data (rendered as the case eyebrow chip), and the footer's decorative `·` between items. Those are visual marks, not sentences. Leave them.

Banned in prose copy:

1. Slash `/` as a separator or "slash clause". Bad: "Designer / Engineer / Researcher".
2. Slash-style dividers `·` (middle dot) and `|` (pipe). Same prohibition, same intent.
3. Em-dash `—` and en-dash `–` of any kind, including range markers ("2025 – present"), parenthetical injections ("Co AI is shipping — the team is small — across three surfaces"), and stylistic emphasis. Periods and commas replace them.
4. Any sentence that depends on a dash to add a clause. The dash-clause pattern is a copy smell on this site.

Allowed:

1. Periods, commas, colons, semicolons.
2. Hyphens inside single compound words (Co-Founder, agent-centric, AI-enabled, multi-agent, image-to-3D). A hyphen inside one word is not a dash.
3. Code and path uses of `/`, `–`, `—` in file paths, URLs, CSS values, regex, TypeScript union types, and source comments. The rule only governs copy that renders to a reader.
4. Eyebrow / decorative typographic marks listed in the carve-out above.

When rewriting prose copy:

1. Split a dash clause into two complete sentences. Bad: "Six Hats is the constraint — that is the feature." Good: "Six Hats is the constraint. That constraint is the feature."
2. Replace a slash with a comma, the word "and", or remove it if the second term is redundant.
3. Replace a middle dot with a comma.
4. Replace a date range dash with the word "to", or rephrase to a single anchor date.
5. Do not rewrite the wording while you are at it. Mechanical replacement only, unless the user explicitly asks for a copy rewrite.

Audit before shipping any copy change. A new dash or slash in prose copy is a regression.

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
- Content: `lib/site.ts` (identity), `lib/projects.ts` (hand-authored portfolio source of truth), `lib/press.ts`
- Sync: retired. Case-study copy is maintained directly in `lib/projects.ts`; do not reintroduce the old Notion sync path without an explicit decision.
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

# Play track image sync (0-Category ↔ /play)

The `/play` page is auto-populated from the iCloud `0-Category ` folder. Source of truth is on disk; the website re-syncs on demand.

**To add a poster / GIF / video to `/play`:**
1. Drop the file into `~/Design hub/0-Category /<Behance category>/`. Folder names follow the `*Xx_<full name>` pattern (e.g. `*Gr-Graphic_Brainding`, `*Ph_Photography`).
2. Run `npm run sync-play` from the repo root.
3. Commit + push.

**Eagle curation workflow (preferred for higher-quality selection):**
1. Run `npm run setup-eagle-curation` if the `Website Curation` folder tree is missing.
2. Curate approved visuals into those Eagle folders.
3. Run `npm run sync-eagle-play` to mirror matching Eagle folders into `0-Category `.
4. Run `npm run sync-play` to compress the mirrored files and update `/play`.

`scripts/setup-eagle-curation.mjs` talks to Eagle's local API and is idempotent. It creates/reuses `Website Curation/01-Case Study Picks`, `02-Play Category Picks`, and `03-Homepage Playground`; it never moves, tags, rates, or deletes images.

The Eagle bridge (`scripts/sync-eagle-play.mjs`) reads Eagle library metadata from disk and copies files only when missing or changed. It never edits Eagle metadata and never deletes files. By default it reads `Design hub/eagle 图库/Designer Julian.library`; override with `EAGLE_LIBRARY=/path/to/name.library npm run sync-eagle-play`.

The sync script (`scripts/sync-play.mjs`):
- walks the 17 category subfolders
- compresses each image to `public/play/seed/<slug>.jpg` (max 1600px wide, JPEG q80) via macOS `sips`
- copies GIFs and MP4s straight through
- writes `lib/_play-manifest.json` with `{slug, category, kind, src, aspectRatio, name, year}` per item

`lib/play.ts` merges this manifest with a `MANUAL` array for hand-curated entries (Spline live demos, items needing custom chips/descriptions/external URLs). Manual entries win on slug clash.

**To customise an auto-imported item** (better name, custom chips, description), add a manual entry to `MANUAL` in `lib/play.ts` with the same slug — the merge keeps the manual version and drops the manifest version.

Folder → category mapping is hard-coded in `FOLDER_TO_SLUG` inside `scripts/sync-play.mjs`. If a new top-level category folder appears in `0-Category `, add it there.

# Editing Conventions

## Hard rules — do not break

These have been violated repeatedly. Treat them as build-time invariants when touching `lib/projects.ts`, `lib/site.ts`, or any user-facing copy:

1. **No `/` slash anywhere in user-facing prose.** Project descriptions, intros, types, research questions, all caseStudy fields (challenge / research / strategy / implementation / results / lessons / nextSteps), media captions, footer text. The only OK forward slashes are: URL paths, npm package names like `@splinetool/react-spline`, code identifiers, and CSS values (`aspect-ratio: 16/9`). For lists use commas or ` · ` middle dots. For paired concepts use a hyphen, "and", or rewrite as a sentence. For ratios in prose write "16-by-9" or "21-by-9".
2. **No chopped-up parenthetical chains.** A reader on a phone shouldn't see `As contract Web Designer (remote, Apr 2025–Apr 2026), I rebuilt skgplus.cn from a brittle Framer back-end into a CMS-driven showroom — and shipped a parallel competition platform amacontest.com under a 3-week emergency timeline that drew 400+ teams from across Asia.` That's one sentence with three asides. Break it into three sentences, drop the parentheticals.
3. **researchQuestion target: ≤ 1 row on desktop hero.** Keep it under ~80 characters. If the question wraps to 3 rows on desktop, it's too long. Phone screens make this 5–6 rows.
4. **Case study density target: 250–500 words across challenge+research+strategy+implementation+results+lessons+nextSteps combined.** Niklas.space pattern. Run `python3 docs/count-words.py` (when it exists) before merging, or do it by eye.
5. **Email**: `julianyutongzhu@gmail.com` only. No `judeforlove13@gmail.com`, no `zhuyutong2001@outlook.com`, no `hello@…` placeholders.
6. **Contact-line order on resume + footer**: site → email → phone → LinkedIn (Jess's recommendation). On the website, "site" is implicit and phone is private, so footer renders email → GitHub → LinkedIn.
7. **No emoji in user-facing copy.** Emoji are fine in commit messages, internal docs, and shell output.

When auditing, run this from the repo root:
```bash
python3 -c "
import re
s = open('lib/projects.ts').read()
for f in ['description', 'intro', 'type', 'researchQuestion', 'role', 'timeline', 'team', 'impact', 'challenge', 'research', 'strategy', 'implementation', 'results', 'lessons', 'nextSteps']:
    for m in re.finditer(rf'\b{f}:\s*([\`"\'])([\s\S]*?)\1\s*,', s):
        t = m.group(2)
        cleaned = re.sub(r'@[a-z][a-z0-9-]+/[a-z0-9-]+', '', t)
        if '/' in cleaned: print(f, t[:120])
"
```

## General

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
