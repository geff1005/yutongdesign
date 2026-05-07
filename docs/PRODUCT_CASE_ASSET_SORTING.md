# Product Case Asset Sorting

Use this when sorting Eagle or Design Hub assets for a product / UIUX case study.

The story decides the folder. The tool does not. Runway, Midjourney, ComfyUI, TouchDesigner, and Figma are production methods; they should not become the top-level case-study structure unless the case study is specifically about building that tool.

## Canonical Design Hub Structure

```text
{Project}/
├── 00-cover/
├── 01-research/
├── 02-process/
├── 03-final/
├── 04-video/
├── 05-docs/
└── raw/
```

## Sorting Logic

| Folder | Story role | Put here | Do not put here |
|---|---|---|---|
| `00-cover/` | First impression | 1-3 strongest hero / thumbnail candidates | Long process screenshots, weak alternates |
| `01-research/` | Why this problem matters | user context, references, market scans, insight evidence, moodboard only when it supports problem framing | final outputs, random inspiration dumps |
| `02-process/` | How the design evolved | prompt experiments, workflow screenshots, iteration grids, Figma drafts, decision diagrams, failed-but-informative outputs | polished result images with no explanation |
| `03-final/` | Result / impact | final UI screens, polished stills, key product frames, final campaign/result images, pitch-ready result boards | raw batches, unedited video dumps |
| `04-video/` | Demo / motion evidence | Runway clips, image-to-video outputs, screen recordings, GIF candidates, edited demos | still-image batches |
| `05-docs/` | Supporting documents | PDFs, decks, briefs, reports, exported docs | web gallery images |
| `raw/` | Source archive | `.fig`, `.psd`, `.ai`, `.toe`, `.blend`, long unedited clips, huge generated batches | anything already selected for the case narrative |

## AIGC-Heavy Product Work

For AIGC short film or product-story material, classify by narrative purpose:

- **Input / context** -> `01-research/`
- **Prompt and workflow process** -> `02-process/`
- **Raw Runway generations** -> `04-video/` if they are viewable clips, `raw/` if they are long dumps or source material
- **Generated still batches** -> `02-process/` if they show exploration, `03-final/` only if they are polished result candidates
- **Best final frames** -> `03-final/`
- **Hero candidate** -> `00-cover/`

## Practical First Pass

Do not over-sort at first. Use only four decisions:

1. Is this a hero? -> `00-cover/`
2. Does it explain the problem or context? -> `01-research/`
3. Does it show how the design was made or changed? -> `02-process/`
4. Is it a polished result or demo? -> `03-final/` or `04-video/`

Everything unclear stays in `raw/` until the case-study outline is written.
