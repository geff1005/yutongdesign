<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio Website Agent Guide

This repo is the publishing layer for Design Hub, not the source of truth for raw project facts.

## Agent context loading

For substantive website changes, load this context before editing files or changing public claims:

1. This `AGENTS.md`.
2. `CLAUDE.md`.
3. `../AGENTS.md`.
4. `../_wiki/index.md`.
5. `../_wiki/website-repo.md`.
6. Any relevant project wiki page under `../_wiki/projects/`.

This is context loading, not a blocking ceremony. For tiny direct answers, quick status checks, or urgent narrow fixes, use the nearest relevant guide and continue. Follow the host Agent's normal planning/execution flow. Use Design Hub `_wiki/` as persistent memory, inspect raw project/CV/source files before changing claims, do not move/rename/delete original Design Hub assets, and append to `../_wiki/log.md` after any website alignment or significant maintenance edit. Do not log trivial read-only answers unless they create reusable knowledge.

Resume-first rule: for public portfolio positioning, cross-check `../../JobAppl* /CLAUDE.md` and the current canonical resume before changing role titles, metrics, project order, or CV-facing claims.

Sync safety rule: do not run `npm run sync` with `ALLOW_NOTION_PROJECTS_OVERWRITE=1` unless the user explicitly approves, because it can overwrite hand-written rich case studies in `lib/projects.ts`.
