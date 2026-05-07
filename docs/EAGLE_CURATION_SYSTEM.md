# Eagle Curation System

Purpose: make Eagle the place where Julian chooses what is good enough, while `Design hub/0-Category ` stays the website sync source.

## Three Layers

### 1. Mine Is The Raw Ownership Archive

`Designer-Jeff.library/Mine` means "made by me". Keep this as the raw historical archive. Do not force it to match the website structure.

### 2. Tags Carry Meaning

Use tags for fast filtering across old folders.

Project tags:

- `project:A01-smataste`
- `project:A02-cocereb`
- `project:A03-skg-plus-web`
- `project:A04-beatrol`
- `project:A05-sync-e-bci`
- `project:A06-sprayscape`
- `project:A07-wildfire-whispers`
- `project:A08-meta-station-huawei`
- `project:B02-bamboo-wind`
- `project:B03-botanictrum`
- `project:B04-lunacy-moon`
- `project:B06-poetic-form`
- `project:B07-greenmove`
- `project:C01-runway-isee`
- `project:C02-sp-ai-collaboration`
- `project:C05-profile-promo`
- `project:needs-review`

Play category tags:

- `cat:3d-art`
- `cat:advertising`
- `cat:animation-and-video`
- `cat:architecture`
- `cat:fine-art-and-crafts`
- `cat:fashion`
- `cat:game-design`
- `cat:graphic-design`
- `cat:interaction-design`
- `cat:logo-design`
- `cat:motion-and-film`
- `cat:product-design`
- `cat:photography`
- `cat:sound`
- `cat:ui-ux`
- `cat:web-design`
- `cat:illustration`
- `cat:needs-review`

Website tags:

- `site:play`
- `site:home-playground`
- `site:case-study`
- `site:hero-candidate`
- `source:mine`

### 3. Stars Decide Promotion

- 5 stars: homepage playground candidate. Best GIF, motion poster, live visual, or image that carries the taste instantly.
- 4 stars: `/play` candidate. Good enough to publish after compression.
- 3 stars: case-study support asset. Useful, but not a standalone visual hit.
- 1-2 stars: archive or reference only.
- unrated: not reviewed.

## Folder Structure In Eagle

Keep `Mine` as-is. Add a separate top-level folder:

This tree is now managed by `npm run setup-eagle-curation`. The script is safe to rerun: it reuses existing folders and only creates missing ones.

```text
Website Curation
├── 01-Case Study Picks
│   ├── A01-SmaTaste
│   ├── A02-CoCereb
│   ├── A03-SKG-Plus-Web
│   ├── A04-BEATROL
│   ├── A05-Sync-E-BCI
│   ├── A06-SprayScape
│   ├── A07-Wildfire-Whispers
│   ├── A08-Meta-Station-Huawei
│   └── B06-Poetic-Form
├── 02-Play Category Picks
│   ├── *3D_3D Art
│   ├── *Gr-Graphic_Brainding
│   ├── *Mo_Motion_Film
│   ├── *Ph_Photography
│   └── ... same 17 folders as 0-Category
└── 03-Homepage Playground
    ├── GIFs
    ├── Dynamic Posters
    ├── 3D Loops
    └── Live Demos
```

An item can stay in its original Mine folder and also be added to these curation folders inside Eagle. That is the point: Mine preserves history, curation folders express website intent.

Do not create a case study just because the material uses AIGC, Runway, Midjourney, ComfyUI, or another tool. Those are methods and evidence, not the story container. For product / UIUX case studies, sort assets by documentation role: problem context, research evidence, design process, final outcome, demo video, docs, and raw source files.

Use the Design Hub project-folder convention as the real story structure:

```text
{Project}/
├── 00-cover/      hero or thumbnail candidate
├── 01-research/   problem context, market/user evidence, references
├── 02-process/    prompts, workflow screenshots, iterations, decision diagrams
├── 03-final/      polished screens, final stills, result frames, pitch images
├── 04-video/      Runway clips, image-to-video output, demos, screen recordings
├── 05-docs/       decks, briefs, PDFs, reports
└── raw/           source files, long unedited clips, project files
```

For AIGC-heavy work, place raw generated batches and long unedited Runway output in `raw/` or `04-video/`; only promote selected frames and edited clips into `03-final/` when they support the result section.

## Website Sync

Preferred flow:

1. Run `npm run map-eagle-cases` when the `Mine` folder changes.
2. Review `docs/EAGLE_CASE_MAPPING.md`, starting with `Actionable First Pass`.
3. In Eagle, filter `source:mine` plus 4 or 5 stars.
4. Add the best pieces to `Website Curation/02-Play Category Picks/<category>`.
5. Run `npm run sync-eagle-play`.
6. Run `npm run sync-play`.
7. Build, commit, push.

`npm run sync-eagle-play` copies approved Eagle category-folder files into `Design hub/0-Category `. It never edits or deletes Eagle content.

## Homepage Playground Rule

The homepage should show the highest-energy pieces only:

- animated poster or GIF if available
- short video loop if available
- striking 3D render if no motion is ready
- avoid low-resolution screenshots, process diagrams, or weak placeholders

Use `site:home-playground` plus 5 stars to mark these in Eagle. For now, the website pulls the first few `/play` items; once the homepage candidates are tagged and copied into the category folders, we can make the homepage prioritize that tag or a dedicated `03-Homepage Playground` export.
