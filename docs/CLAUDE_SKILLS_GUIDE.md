# Claude Designer Skills — Curation Guide

5 skills installed on this machine, mapped to yutongdesign.art work. Use this doc to pick the right skill for the right task instead of running them blind.

## Quick install reference

```bash
# Skills CLI (universal: works with Claude Code, Codex, Cursor, Antigravity, +)
npx skills add emilkowalski/skill
npx skills add ParthJadhav/app-store-screenshots

# Claude Code marketplace plugins (clone to ~/.claude/plugins/marketplaces/)
git clone https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git
git clone https://github.com/anthropics/skills.git anthropics-skills
git clone https://github.com/garrytan/gstack.git
```

After installing in Claude Code, the official `frontend-design` skill auto-loads from `~/.claude/plugins/marketplaces/anthropics-skills/skills/frontend-design/`. The npx-installed ones land at `~/.agents/skills/<name>/` and are symlinked into `~/.claude/skills/`.

---

## Skill 1 — UI-UX Pro Max

**What it is.** A searchable database of UI styles, color palettes, font pairings, chart types, and UX guidelines, with AI prompts and CSS keywords baked in. Includes stack-specific variants (Tailwind, React, Next.js, Astro, Vue, Svelte, SwiftUI, RN, Flutter, shadcn).

**Command pattern:**
```bash
python3 ~/.claude/plugins/marketplaces/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "<query>" --domain <product|style|typography|color|landing|chart|ux>
```

**When to use it on yutongdesign work:**
- Picking a font pair for a new section ("editorial designer portfolio" → distinctive display + body pair)
- Deciding a `/play` tile aesthetic before committing (search `style` domain for "brutalist", "glassmorphism", etc.)
- Auditing existing color choices against accessibility (search `color` domain by product type)
- Picking a chart library for any future data viz on case studies

**Concrete prompts to throw at it:**
- *"Search style for editorial portfolio with strong typography"* → returns AI prompts + CSS keywords to feed back into a generation pass
- *"Search typography for serif display + sans body pairs that work on dark backgrounds"*
- *"Search ux for case study scrolling patterns"*

**Don't use it for:** writing code. It's a research/decision tool. After it returns recommendations, switch to Anthropic Frontend Design or Emil Kowalski for the actual build/polish.

---

## Skill 2 — Anthropic Frontend Design (`frontend-design`)

**What it is.** Official Anthropic skill for production-grade frontend with an explicit "anti-AI-slop" philosophy. Forces bold aesthetic direction (brutalist / maximalist / editorial / etc.) before coding, then produces real working code in HTML/CSS/JS, React, or Vue.

**Location:** `~/.claude/plugins/marketplaces/anthropics-skills/skills/frontend-design/SKILL.md`

**Triggers on:** "build web components", "build landing page", "build dashboard", "design a hero section", "style this UI", any greenfield frontend work.

**When to use it on yutongdesign work:**
- **Building a new page from scratch** (e.g. when we eventually do `/about`, `/contact`, or a redesigned `/writing` page)
- **Replacing a section that's bland** (e.g. if you ever decide the homepage Hero is too templated)
- **Per-case bespoke hero treatments** — when one case study needs a unique top-of-page layout that breaks the standard template (you've already done this for Co Cerebral with the live demo + Impact block)

**Concrete prompts:**
- *"Build a new `/about` page for yutongdesign with editorial-magazine direction. 4-paragraph bio, experience table, awards list. Anti-AI-slop — pick distinctive serif display font."*
- *"Redesign the contact section at the bottom of `/` with brutalist-minimal direction. Single email CTA, large type, no decorative chrome."*

**Don't use it for:** small CSS tweaks or content updates on existing components. It wants to commit to a direction; for tweaks use Emil Kowalski.

---

## Skill 3 — Emil Kowalski (`emil-design-eng`)

**What it is.** Encodes Emil Kowalski's design engineering philosophy: animation curves, micro-interactions, taste, the invisible details that compound. Quiet, refined, the opposite of "make it pop".

**Location:** `~/.agents/skills/emil-design-eng/SKILL.md`

**Triggers on:** "polish this animation", "review this transition", "make this feel right", "what easing should I use", "tighten the hover state".

**When to use it on yutongdesign work:**
- **Polishing the `/play` mosaic hover** (caption fade-in is currently 200ms ease — Emil might recommend a different curve)
- **Reviewing the Spline live-demo enter animation** on `/work/co-cerebral`
- **Smoothing the mobile nav hamburger morph** (currently 200ms cubic)
- **Auditing the Explorations parallax** — feels right or oversold?
- **Any "this animation looks slightly off"** moment

**Concrete prompts:**
- *"Look at `app/play/page.tsx` — the play-tile-link hover translateY + caption opacity transition. Review the timing and easing per Emil Kowalski. Is the 200ms ease the right curve? Should it be cubic, spring, or out-back?"*
- *"The mobile nav overlay opens with opacity 0.2s + transform 0.25s — review and propose a single composite curve that feels right."*

**Don't use it for:** big layout decisions or content. It's a magnifying glass on detail.

---

## Skill 4 — App Store Screenshots

**What it is.** A Next.js scaffold that generates production-ready App Store / Google Play marketing screenshots. iPhone, iPad, Android phone/tablet, Feature Graphic. Treats screenshots as advertisements, not UI tours.

**Location:** `~/.agents/skills/app-store-screenshots/SKILL.md`

**When to use it on yutongdesign work:**
- ❌ NOT for yutongdesign.art portfolio site itself.
- ✅ For SmaTaste's clickable-prototype-to-iOS pivot (the path we discussed earlier — Figma → Next.js mini-rebuild → eventually App Store). When that lands, this skill generates the screenshots.
- ✅ For any project case study that gets an iOS-shipping epilogue.
- ✅ Possibly for a mock "what if SmaTaste shipped" screenshots block as part of the case study results section.

**Important:** This skill SCAFFOLDS A NEW NEXT.JS PROJECT, not integrates into yutongdesign repo. Run it in a sibling folder when you need it.

**Concrete invocation when SmaTaste lands:**
- *"Generate App Store screenshots for SmaTaste. 6 slides, clean/minimal warm-neutrals palette, calm premium feel. Sells the diner's mealtime feeling, not the UI."*

---

## Skill 5 — Garry Tan GStack

**What it is.** Turns Claude Code into a 23-specialist virtual product team via slash commands: `/plan`, `/plan-eng-review`, `/plan-design-review`, `/plan-devex-review`, `/design-consultation`, `/review`, `/investigate`, `/design-review`, `/devex-tester`, `/design-shotgun`. Each persona has a sharp scope (e.g. design-review = "Same audit as `/plan-design-review`, but then fixes what it finds. Atomic commits, before/after screenshots.")

**Location:** `~/.claude/plugins/marketplaces/gstack/`

**When to use it on yutongdesign work:**
- **Pre-merge design review** before deploying a big change (`/design-review` runs the audit + commits the fixes)
- **`/design-shotgun`** — generates multiple AI design variants, lets you compare side by side (good for "should this case study hero be left-text / centered-text / fullbleed?")
- **`/plan-design-review`** — when you're about to ship a new section, GStack scores 0-10 across design dimensions, explains what a 10 looks like, edits the plan
- **`/review`** — staff-engineer-level review on a PR before pushing to prod
- **`/investigate`** — when something on the live site is subtly broken and you don't know why

**Concrete invocations:**
- *"`/design-shotgun` — generate 4 variants of the `/about` page hero. Editorial / brutalist / refined-minimal / playful. Open a comparison board."*
- *"`/plan-design-review` on the current `/play` page. Rate the category-section UX 0-10. Explain what a 10 looks like."*

**Don't use it for:** small one-shot changes. Overkill. Use Emil for polish, Frontend Design for one fresh page.

---

## Combo workflows for common yutongdesign tasks

| Task | Skill chain |
|---|---|
| **Rebuild a case study from scratch** (e.g. someday: SmaTaste V2) | UI-UX Pro Max → pick a style/palette · Anthropic Frontend Design → build the layout · Emil Kowalski → polish the transitions · GStack `/plan-design-review` → final audit |
| **Add a new /play category section that pops** | UI-UX Pro Max → search the relevant Behance-aligned style · Anthropic Frontend Design → write the JSX/CSS · Emil → polish the entry animation |
| **Audit before a big push to prod** | GStack `/plan-design-review` + `/review` |
| **Compare 3 hero treatments before committing** | GStack `/design-shotgun` |
| **Tighten an animation that feels off** | Emil Kowalski alone |
| **One micro-copy decision** | None — write it yourself |

---

## Anti-patterns

- **Don't chain UI-UX Pro Max + Anthropic Frontend Design + Emil + GStack on a tweak.** That's overkill. Match skill heaviness to task heaviness.
- **Don't run App Store Screenshots inside the yutongdesign repo.** It scaffolds its own Next.js project; run it in a sibling folder.
- **Don't use Anthropic Frontend Design when the existing design system applies.** The skill wants to commit to a fresh direction. For maintenance, use Emil or just edit.
- **Don't run GStack `/design-shotgun` for a 3-line CSS change.** It's a multi-variant generator; the overhead isn't justified.

---

## Where each skill lives on disk

```
~/.claude/plugins/marketplaces/
├── ui-ux-pro-max-skill/        # Skill 1
├── anthropics-skills/
│   └── skills/frontend-design/ # Skill 2
└── gstack/                     # Skill 5

~/.agents/skills/
├── emil-design-eng/            # Skill 3 (symlinked from ~/.claude/skills/)
└── app-store-screenshots/      # Skill 4 (symlinked from ~/.claude/skills/)
```

To update any skill: `cd` into the folder and `git pull`, or `npx skills update` for the agents/skills ones.

---

## Verification: does this Cowork session see them?

This thread is Cowork mode (Claude desktop). Cowork-side skills load from a different path (`/var/folders/.../claude-hostloop-plugins/.../skills/`). The 5 skills above are installed for **Claude Code CLI** specifically — they activate when you `cd` into the yutongdesign repo and run `claude` from Terminal, not from this Cowork thread.

To use any of the 5 on a yutongdesign task:

```bash
cd ~/Library/Mobile\ Documents/com~apple~CloudDocs/2*Areas\ of\ Foucs/Design\ hub/Julianyutongzhu\ /yutongdesign
claude
# then in Claude Code: just describe your task — the skill auto-triggers from its description keywords
# or explicitly invoke: "Use the frontend-design skill to..."
```

If you want any of these accessible from Cowork too, that requires repackaging them as Cowork plugins (different format) — say so and we'll set it up.
