# Per-Project Folder Convention

Every A-tier project folder uses the same internal layout so we (you + Claude) always know where things live.

## Standard layout

```
{Tier}{NN}-{Slug}/
├── README.md          ← project facts (Claude scaffolds, you fill TODOs)
├── thinking.md        ← your raw bullet drafts — source of truth in your head
│
├── 00-cover/          ← single hero / thumbnail image used on the website
├── 01-research/       ← interviews, surveys, competitive analysis, field notes
├── 02-process/        ← strategy diagrams, sketches, mid-fi mockups, iteration
├── 03-final/          ← polished UI screens, prints, pitch deck slides
├── 04-video/          ← screen recordings, demo reels, walkthroughs (.mp4 / .mov / .gif)
├── 05-docs/           ← PDFs, reports, contracts, briefs, slide decks
└── raw/               ← source files (.fig / .indd / .ai / .psd / .toe / .blend)
```

## Where do I put X?

| File type | Folder |
|-----------|--------|
| Hero / cover image | `00-cover/` |
| User interview note | `01-research/` |
| Strategy / framework diagram | `02-process/` |
| Final UI screen | `03-final/` |
| Pitch deck slide PNG | `03-final/` |
| **Video (.mp4 .mov)** | **`04-video/`** |
| Screen recording / GIF demo | `04-video/` |
| Final report PDF | `05-docs/` |
| Brief / contract / slides PDF | `05-docs/` |
| `.fig` / `.indd` / `.ai` / `.psd` / `.toe` | `raw/` |
| Anything unsure | leave at root, ask later |

A-tier follows this. B/C optional until polished.
