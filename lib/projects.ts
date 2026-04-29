// Projects pulled from Notion Projects DB on 2026-04-27.
// Source DB (new): https://www.notion.so/20b9f7ed1e088013905ceccaf0bae66f
// Source DB (old, with Framer-hosted thumbnails):
//   https://www.notion.so/c916d4c6ccc74a3f95c93adea2f2774c
// Thumbnails: framerusercontent.com (CDN) when available, else local /public/thumbnails/.

export type Project = {
  slug: string;
  title: string;
  description: string;
  researchQuestion?: string;
  intro?: string;
  type?: string;
  year: number;
  tags: string[];
  featured: boolean;
  thumbnail: string;
  videoUrl?: string;
  splineEmbeds?: { url: string; caption?: string }[];
  href: string;
  /** Optional rich case-study sections. Each is plain text or simple
   *  markdown — paragraphs split on blank lines, list lines start with "- ".
   *  Rendered by /work/[slug]/page.tsx when present. */
  caseStudy?: {
    role?: string;
    timeline?: string;
    team?: string;
    impact?: string;
    challenge?: string;
    research?: string;
    strategy?: string;
    implementation?: string;
    results?: string;
    lessons?: string;
    nextSteps?: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "co-cerebral",
    title: "Co Cerebral",
    description:
      "An agentic learning environment built around the Six Thinking Hats — six LLM personas with distinct voices, embodied in a Spline 3D scene. Live demo coming soon.",
    researchQuestion:
      "What does an agentic, voice-first learning interface look like when each cognitive mode has its own embodied agent?",
    intro:
      "Co Cerebral is my RCA thesis on AI in education. The current build pairs Edward de Bono's Six Thinking Hats methodology with a multi-agent LLM system on Next.js 15 + Spline + Vercel AI SDK + Web Speech — a voice-first thinking partner where each hat is a different agent.",
    type: "AI / Agentic UX · Live Build",
    year: 2026,
    tags: ["AI", "GenAI", "Agent", "Education", "Voice"],
    featured: true,
    thumbnail: "/thumbnails/co-cerebral.jpg",
    splineEmbeds: [
      {
        url: "https://app.spline.design/file/bd392fb8-d979-436b-bfd4-d63ef7aa29a0",
        caption: "Six Thinking Hats — environment scene",
      },
      {
        url: "https://app.spline.design/file/4d007b5c-a1c9-4803-94bb-980e5aa44c1f",
        caption: "Six Thinking Hats — agent embodiment",
      },
    ],
    href: "/work/co-cerebral",
  },
  {
    slug: "smataste",
    title: "SmaTaste",
    description:
      "AI-driven dining experience for Sodexo: Smart Taste Index combining preference + nutrition signals, with explainable AI interfaces.",
    researchQuestion:
      "How can explainable AI rebalance efficiency and ethics in everyday food services?",
    intro:
      "SmaTaste integrates XAI into a canteen service. As Research Assistant on the RCA × Sodexo France AiD Lab project, I worked across interface design, participatory research, and evaluation — producing a deployable service artifact and evidence package.",
    type: "Service Design · HCI Research · AI",
    year: 2024,
    tags: ["Service Design", "AI / LLM", "HCI", "Real Client"],
    featured: true,
    thumbnail: "/thumbnails/smataste.jpg",
    href: "/work/smataste",
  },
  {
    slug: "skgplus",
    title: "SKG+",
    description:
      "End-to-end web rebuild + CMS automation for an immersive entertainment studio. Plus a 3-week emergency launch of amacontest.com — 400+ teams from across Asia.",
    researchQuestion:
      "How do you turn a studio's chaotic content backend into a launchable presence — and persuade the founder that restraint serves the work?",
    intro:
      "SKG+ is an immersive entertainment studio in mainland China. As contract Web Designer (remote, Apr 2025–Apr 2026), I rebuilt skgplus.cn from a brittle Framer back-end into a CMS-driven showroom — and shipped a parallel competition platform amacontest.com under a 3-week emergency timeline that drew 400+ teams from across Asia.",
    type: "Web Design · CMS / Automation · Brand",
    year: 2025,
    tags: ["Web Design", "CMS", "Brand", "Real Client", "Automation"],
    featured: true,
    thumbnail: "/thumbnails/skgplus.jpg",
    href: "/work/skgplus",
    caseStudy: {
      role: "Lead Web Designer · contract / remote",
      timeline: "Apr 2025 – Apr 2026 (12 months, ongoing maintenance)",
      team: "Founder + internal content lead + principal creators. I owned design, IA, deployment, and the content pipeline.",
      impact:
        "170+ works officially listed via reusable automation. amacontest.com launched in 3 weeks and drew 400+ teams from across Asia.",
      challenge:
        "The studio's existing Framer back-end was breaking under maintenance — 170+ works were unmanageable to update. The founder asked for a 'fancy, color-matched' hero. But the studio's source work was already saturated, vivid, dense — adding visual density on top would create fatigue. And mid-project, an emergency: a 3-week window to launch amacontest.com (Asia Mapping Art Contest) with no extension.",
      research:
        "I sat directly with the CEO and the principal creators to map their content workflow. Two findings drove everything that followed:\n\n- The Framer back-end was the real bottleneck — content updates broke layouts every release.\n- The founder's 'fancy' brief was a hypothesis, not a spec. What he actually meant was 'don't look generic.' Restraint, not maximalism, was the right answer once we held up examples of peer immersive studios.",
      strategy:
        "Three decisions shaped the build:\n\n- Restraint as service. The studio's work IS the color; the web should be the frame. After A/B-comparing color-saturated mockups against a near-monochrome scaffold, the team agreed.\n- Pipeline before pages. Instead of manually uploading 170+ works to Framer, I built a Google Sheet → Make.com → Gumlet → Framer sync. Update one row in a sheet, the website refreshes.\n- Reusable design system. Components and tokens were structured so the amacontest.com 3-week emergency could lift the entire visual language and ship a new site without re-designing primitives.",
      implementation:
        "I owned: brand visual, IA, interaction logic, deployment, ongoing content maintenance.\n\nPipeline stack:\n\n- Content layer: Google Sheet (creators + content team can edit)\n- Automation: Make.com scenarios trigger on sheet edits\n- Video hosting: Gumlet (paid, optimized)\n- Site: Framer (front-end)\n- Sync: sheet → Make.com → Framer CMS API → live\n\nThis turned content updates from a designer-blocker into a 30-second self-serve action.",
      results:
        "- 170+ works officially listed and managed via the automation pipeline\n- amacontest.com launched in 3 weeks (target was 4), drew 400+ teams from across Asia\n- Founder approved the visual restraint direction post-launch — the first time the studio shipped without a 'more color' note\n- Maintenance time per content drop dropped from ~10 minutes to ~30 seconds",
      lessons:
        "Three things I'd carry forward:\n\n- Founder briefs are hypotheses, not specs. 'Fancy + color-matched' decoded into 'don't look generic.' Restating the brief in user-facing terms saved a week of revisions.\n- Pipelines compound. Building the Google Sheet ↔ Make.com sync early made the 3-week amacontest emergency feasible — the system already knew how to ship content.\n- The hardest design choice was about what NOT to add. Reducing visual fatigue on the home page was harder to defend than adding more — but it earned more trust from the team than any addition.",
      nextSteps:
        "The home page currently lives as 'showreel + logo' for maintainability. If I redesigned it tomorrow, I'd build a layout that adapts dynamically to the work library — surfacing recent or featured pieces without manual curation. The information architecture for that already exists in the pipeline; only the front-end rendering needs to catch up.\n\nNext brand evolution: the studio's visual language is shifting from local-traditional → international as it engages global competitions. Documenting that transition is the next deliverable.",
    },
  },
  {
    slug: "syncoe",
    title: "Synco-E",
    description: "Next generation BCI Device for Esports Training",
    researchQuestion: "How will brain-computer interfaces shape our brains in the future?",
    intro:
      "Esports is more about mentality than physicality. Pro-gamers might be making slower progress than necessary because their brains are limiting them.",
    type: "Industrial Design",
    year: 2023,
    tags: ["Smart Systems", "Data Driven", "HCI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/ItIE3LjjpIh7r6cbWRLgv0KD41A.png",
    videoUrl: "",
    href: "/work/syncoe",
  },
  {
    slug: "beatrol",
    title: "BEATROL",
    description: "L4 Safety Human-Vehicle Co-Driving Cockpit for Fatigue Intervention",
    researchQuestion: "How can AI-driven systems enhance safety in autonomous driving?",
    intro:
      "Driving fatigue is a serious global problem. Existing in-vehicle systems can only alert, not intervene.",
    type: "Service / Experience Design",
    year: 2023,
    tags: ["Smart Systems", "UX/UI", "HMI"],
    featured: true,
    thumbnail: "/thumbnails/beatrol.jpg",
    videoUrl: "https://vimeo.com/817694480",
    href: "/work/beatrol",
  },
  {
    slug: "sprayscape",
    title: "SprayScape",
    description: "Street Art Trading Platform based on Spatial Computing for Urban Beautification",
    researchQuestion: "How can we harmonize graffiti culture with local community values?",
    intro:
      "A digital platform leveraging spatial computing and AR to bridge graffiti artists with local communities.",
    type: "Service Design",
    year: 2025,
    tags: ["UX/UI", "Smart Systems"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/swsE03EafovXxtL53gEI0UQUr8.png",
    videoUrl: "https://vimeo.com/883701939",
    href: "/work/sprayscape",
  },
  {
    slug: "wildfire-whispers",
    title: "Wildfire-Whispers",
    description: "Audio-visual mapping with gesture recognition",
    researchQuestion: "How do humans coexist with extreme weather?",
    intro:
      "An immersive interactive installation combining geometric wall-mounted physical work with interactive projection.",
    type: "Interaction Design",
    year: 2024,
    tags: ["Embodied Interaction"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/oyzMDOHWVh6rgkG7cfZqhJwwXtU.png",
    videoUrl: "https://vimeo.com/883703201",
    href: "/work/wildfire-whispers",
  },
  {
    slug: "poeticform",
    title: "Poetic-Form",
    description: "Digital sculpture creation based on Human-AI co-creation",
    researchQuestion: "How does AI portray the shape of the poem?",
    intro:
      "Generation of customized Taihu stone digital sculptures based on Eastern aesthetics through sound or semantic information.",
    type: "AIGC / Interaction Installation",
    year: 2023,
    tags: ["AI", "Digital Art", "GenAI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/JKkVLtCfp0YK7xRsEp9DDLTBE.jpg",
    videoUrl: "https://vimeo.com/1079210038",
    href: "/work/poeticform",
  },
  {
    slug: "lunacy",
    title: "LUNACY",
    description: "Digital Narrative based on Responsive web pages design",
    researchQuestion: "What role has the moon played in human culture and history?",
    intro:
      "A pseudo-archive from the future, dramatizing the narrative that the moon, once a living entity, was rendered lifeless by the march of science.",
    type: "UI/UX",
    year: 2021,
    tags: ["UX/UI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/uLavaDKo8wVaIV5gV0iwZeyOHIY.png",
    videoUrl: "https://vimeo.com/883707048",
    href: "/work/lunacy",
  },
  {
    slug: "botanictrum",
    title: "Botanictrum",
    description: "Sensing Installation",
    researchQuestion: "Can you transfer the pulse from plants?",
    intro:
      "Combining mechanical parts with soil to extract abstract information from plants and present them visually.",
    type: "Interaction Design",
    year: 2023,
    tags: ["Embodied Interaction"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/3kJj9nkoMq8ZxDS8OoA0OB0VmXI.jpg",
    videoUrl: "https://vimeo.com/883703983",
    href: "/work/botanictrum",
  },
  {
    slug: "meta-station",
    title: "Meta Station",
    description: "Interactive concept UI theme for HUAWEI Co., Ltd.",
    researchQuestion: "Will the Metaverse be the future of online network & remote work?",
    type: "UI/UX",
    year: 2020,
    tags: ["UX/UI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/q1KWuBoFjXN9Sdr3v9JbwL5QQW0.png",
    videoUrl: "https://vimeo.com/883705290",
    href: "/work/meta-station",
  },
  {
    slug: "neon-nike",
    title: "Neon-NIKE",
    description: "A concept visual for NIKE",
    type: "Concept Visual",
    year: 2024,
    tags: ["UX/UI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/9RxJa7zlJTN3uQ7PmhMOb3uYRAk.jpg",
    href: "/work/neon-nike",
  },
];

// Featured 4 for the home Selected Works bento grid.
// PD-track positioning: SmaTaste leads (real client + AI), Co Cerebral
// (live agentic build), SKG+ (deployed real-client + automation pipeline),
// BEATROL (HMI/UX). Other PROJECTS still get their own /work/[slug] page.
export const SELECTED_FEATURED = [
  PROJECTS.find((p) => p.slug === "smataste")!,
  PROJECTS.find((p) => p.slug === "co-cerebral")!,
  PROJECTS.find((p) => p.slug === "skgplus")!,
  PROJECTS.find((p) => p.slug === "beatrol")!,
];

// Explorations (Tier B / lighter projects) — 6 cards for the parallax section
export const EXPLORATIONS = [
  PROJECTS.find((p) => p.slug === "poeticform")!,
  PROJECTS.find((p) => p.slug === "botanictrum")!,
  PROJECTS.find((p) => p.slug === "lunacy")!,
  PROJECTS.find((p) => p.slug === "meta-station")!,
  PROJECTS.find((p) => p.slug === "neon-nike")!,
  PROJECTS.find((p) => p.slug === "wildfire-whispers")!,
];
