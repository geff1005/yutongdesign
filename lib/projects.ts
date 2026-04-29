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
  splineEmbeds?: { url: string; caption?: string; section?: 'research' | 'strategy' | 'implementation' | 'results'; emphasis?: 'live-demo' }[];
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
    /** Images interspersed in the case-study flow.
     *  Each renders below the section it's keyed to. */
    media?: {
      section: 'challenge' | 'research' | 'strategy' | 'implementation' | 'results' | 'lessons' | 'nextSteps';
      src: string;
      caption?: string;
      aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1' | '21/9';
    }[];
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "co-cerebral",
    title: "Co Cerebral · EduOS",
    description:
      "A voice-first agentic learning environment. Each of the Six Thinking Hats becomes its own embodied LLM agent — distinct voice, presence, and reasoning style. Built on Next.js 15, Spline 3D, Vercel AI SDK, and Web Speech, running on a £0 stack.",
    researchQuestion:
      "An RCA thesis on what AI in education feels like when each cognitive mode has a voice and a body.",
    intro:
      "Co Cerebral is my RCA Design Futures thesis. It pairs Edward de Bono's Six Thinking Hats methodology with multi-agent LLM architecture — White, Red, Black, Yellow, Green, and Blue, each as a distinct agent. The thinking partner you talk to instead of read.",
    type: "AI · Agentic UX · Live Build",
    year: 2026,
    tags: ["AI", "GenAI", "Agent", "Education", "Voice"],
    featured: true,
    thumbnail: "/thumbnails/co-cerebral.jpg",
    splineEmbeds: [
      {
        section: "research",
        url: "https://prod.spline.design/V18jAhOA0xMr5FXB/scene.splinecode",
        caption: "Research flow — how a learner moves through the Six Hats rotation, voice-mediated throughout.",
      },
      {
        section: "results",
        emphasis: "live-demo",
        url: "https://prod.spline.design/pOvUuyOOoI23lcJQ/scene.splinecode",
        caption: "EduOS live demo — drag to inspect each agent's embodiment.",
      },
    ],
    href: "/work/co-cerebral",
    caseStudy: {
      role: "Sole designer and engineer · RCA Design Futures thesis",
      timeline: "Active build (2026, ongoing)",
      team: "Solo build with supervisor support. Met a potential cofounder at Vercel Builder's Night who is interested in the education angle.",
      impact:
        "End-to-end working prototype on a £0 stack. Cofounder conversation in motion; thesis no longer just a demo.",
      challenge:
        `Most AI-in-education products today are static chat interfaces — text in, text out, no embodiment. As my RCA thesis on AI in Education, Co Cerebral asks a different question: what if each cognitive mode in a structured thinking framework had its own embodied agent — voice, visual presence, distinct personality — and you dialogued with the framework instead of reading about it?

The thesis is also a product hypothesis. The framing came from Edward de Bono's Six Thinking Hats — White (facts), Red (emotion), Black (critical), Yellow (optimistic), Green (creative), Blue (process) — where structured cognitive disagreement produces better thinking than open-ended chat.`,
      research:
        `The research flow embedded above maps how a learner moves through the system: from a single question, through the rotation of perspectives, into synthesis — voice-mediated throughout.

It is a learning interface designed around cognitive disagreement, not consensus. The hat structure is a constraint, and the constraint is the feature.`,
      strategy:
        `Three design commitments anchor the build:

- Voice-first, not chat-first. Web Speech API for input and synthesis — the agent speaks back, you don't read.
- Embodied, not disembodied. Each hat has a Spline 3D presence; agents are inhabited, not summoned.
- Structured, not free-form. Six Hats is a constraint that produces better thinking than open-ended chat — the structure IS the feature, not a limitation.`,
      implementation:
        `Tech stack:

- Frontend: Next.js 15 with TypeScript and Tailwind
- 3D: @splinetool/react-spline (the same library powering the embeds on this page)
- Spline Variables for material control across hat states
- Voice in: Web Speech API (free, browser-native)
- LLM: Vercel AI SDK v5 via AI Gateway
- Voice out: Web Speech Synthesis
- Deploy: Vercel Hobby
- Total ongoing cost: £0

This is intentional. A thesis that costs money to run is a thesis that doesn't survive past the deadline.`,
      results:
        `The live demo above is the working prototype. Drag the scene to inspect each hat's embodiment; speak to summon an agent. As of this writing the system is functional end-to-end on a £0 stack — and I am still iterating.

Met a potential cofounder at Vercel Builder's Night who is interested in the education angle. Conversations are early; the project is no longer just a thesis demo, it is a possible product.`,
      lessons:
        `Two things stand out so far:

- Constraints over features. Adding voice was hard but it changed the entire interaction quality. The hardest design decision wasn't a feature; it was choosing modality.
- Spec stability. The Apple Note brief that started this rebuild has barely changed in two months — locking the tech stack early let me ship instead of debate.`,
      nextSteps:
        `Immediate: publish the Spline scenes to public URLs and open the demo to cohort testing.

Then: decide K-12, corporate training, or adult learner as the wedge audience — currently undecided.

Eventually: if the cofounder conversation goes anywhere, productise the methodology framework, not the Six Hats specifically.`,
    },
  },
  {
    slug: "smataste",
    title: "SmaTaste",
    description:
      "An AI-driven workplace dining service for Sodexo. Two paired AI models — taste prediction for kitchens, personal health memory for diners — collaborate through one explainable interface. Won 3rd Place at the RCA × Sodexo Challenge; selected for 1–2 year pilot deployment.",
    researchQuestion:
      "Redefining the workplace dining experience.",
    intro:
      "SmaTaste is a workplace canteen service for Sodexo's hybrid Gen Z workforce. It pairs the Smart Taste Index — a personal health memory that adapts to mood, history, and explicit goals — with a taste-prediction model that feeds chefs parameterized raw-material data. As lead UX and AI on a 4-person interdisciplinary team, I owned the Smart Taste Index interface, the dual-model flow architecture, and the final pitch.",
    type: "Service Design · HCI Research · AI",
    year: 2024,
    tags: ["Service Design", "AI", "LLM", "HCI", "Real Client", "Pilot"],
    featured: true,
    thumbnail: "/thumbnails/smataste.jpg",
    href: "/work/smataste",
    caseStudy: {
      role: "Lead UX and AI architecture · Research Assistant (RCA × Sodexo AiD Lab)",
      timeline: "Spring 2024 · RCA × Sodexo Studio Project Challenge (~10 weeks)",
      team: "4-person interdisciplinary team across IoT and HCI privacy, market analysis, mobile front-end, and UX with AI. I owned the AI flow architecture, the Smart Taste Index interface, scenario writing, and the final pitch.",
      impact:
        "Won 3rd Place at the RCA × Sodexo Studio Project Challenge. Selected by Sodexo Europe for pilot implementation — Sodexo's engineering team is developing the system now for 1–2 year deployment.",
      challenge:
        `Sodexo asked us, across the RCA × Sodexo AiD Lab studio project, to design an interdisciplinary intervention for food-services digitalisation with implementation in mind for 2–5 years. The brief was wide — deliver a 'top-tier consumer experience' for hybrid-working Gen Z, while addressing social, societal, and environmental impacts.

A 4-person team across engineering, user research, digital visual, and fashion. We began with conflicting hypotheses about what 'top-tier' even meant — and one academic quarter to converge.`,
      research:
        `Two rounds of research, layered:

- Round 1 — 15 in-depth interviews with peers and adjacent users on dietary motivations, decision triggers, and what 'healthy' actually feels like to office workers.
- Round 2 — Sodexo's internal data: interviews their interns had run, plus the company's ongoing customer-habit research, accessed through our partnership.

The unlock came from a single word: spicy. 'Spicy' to a Chinese eater means chili oil — fragrant, layered, warming. 'Spicy' in the UK means peri-peri — fermented, sharp, acidic. Same word, two completely different mouths. If the system can't quantify that, it can't serve any of us.

That insight redirected the project. We had been building toward generic meal-prep — until Gen Z interviewees told us flatly 'meal-prep doesn't taste good.' Taste, not nutrition, became the unlock.`,
      strategy:
        `Three commitments shaped the build:

- Quantify taste, don't moralize about health. Replace 'eat this because it's healthy' with 'try this because it matches the taste profile you just told us about.' Health becomes a side-effect of preference, not a guilt trip.
- Two AI models, two audiences. Model 1 (taste prediction) feeds Sodexo's R&D and procurement — parameterized raw-material data for chefs. Model 2 (personal health memory) feeds the diner — meal recommendations that adapt to mood, history, and explicit goals.
- Explainability as a contract, not a feature. Every recommendation surfaces a 'why' — explainability is co-owned with chefs, diners, and Sodexo product, not bolted onto an AI engagement metric.`,
      implementation:
        `My ownership across the 4-person team:

- Smart Taste Index UI — most of the consumer-facing interface, including the 'why' explanation surface and the dietary health calendar.
- AI flow architecture — defined how Model 1 and Model 2 talk to each other and to the kitchen. Worked closely with Fangzhou Wu, who owned the information modules + UI implementation.
- Final visual language — converged the team after 3 rounds of clickable-prototype testing with users.
- Pitch leadership — owned the final in-person pitch deck and the data-acquisition meetings with Sodexo Europe (food supply chain Manager + Sodexo's internal designer).

Tools: Figma (UI + clickable prototype), structured AI prompting research, Microsoft Decision-Making expert consultations facilitated by our supervisor Dr. Elif Özden Yenigün.`,
      results:
        `- 3rd Place at the RCA × Sodexo Studio Project Challenge
- Pilot implementation signed under NDA — Sodexo's engineering team is now developing the system for 1–2 year deployment
- 15 user interviews + access to Sodexo's internal customer-habit research base
- 3 prototype iterations, each tested clickable with users
- Sodexo Europe's response: 'You really understand Gen Z' — they specifically called out our framing of taste over health`,
      lessons:
        `Three carry-forwards:

- Disagreement was the resource, not the bug. Four professional backgrounds (engineer, user researcher, digital visual, fashion) made our first month frustrating — and our second month productive. The 'spicy' insight wouldn't have surfaced from a homogeneous team.
- Stakeholder access is a design output. Talking to a Sodexo Europe Manager and Sodexo's internal designer changed the brief mid-flight. Designing without speaking to the people who'll inherit the system is a student-project luxury we shouldn't get used to.
- Explainability requires co-ownership. My notebook then: 'Embedding explainability into everyday services requires co-owning metrics with stakeholders, not just optimizing engagement.' That sentence has held up. If the chef doesn't agree with the 'why,' the diner won't either.`,
      nextSteps:
        `If I redesigned this tomorrow, I'd collapse the all-in-one menu. Right now it's structured to be compatible with Sodexo's existing system, which forces every workflow through a tab-style UI. The more intuitive future is to keep only an AI-dialog interface after first-time setup — let the agent understand each diner over time, surface controls only when needed. An AI-native dining companion, not an AI-augmented menu app.

The pilot now lives with Sodexo's engineers; the design baton has been passed. If pilot data surfaces, that's the moment to revisit the agent-vs-menu question with real adoption metrics, not user-test guesses.`,
      media: [
        {
          section: 'research',
          src: '/work/smataste/research-evaluation.jpg',
          caption: 'Comparative analysis of healthy-eating market players (Frive, Gousto, Mindful Chef) against academic frontiers — the gap that opened the door for taste-as-design-surface.',
          aspectRatio: '16/9',
        },
        {
          section: 'strategy',
          src: '/work/smataste/innovation-strategy.jpg',
          caption: 'Innovation strategy: dual-AI architecture (taste prediction model for chefs · personal health memory model for diners), with explainability surfaces co-owned across the kitchen-to-diner loop.',
          aspectRatio: '16/9',
        },
        {
          section: 'implementation',
          src: '/work/smataste/implementation-plan.jpg',
          caption: 'Implementation plan: rolling out Smart Taste Index across the canteen service, with stakeholder touchpoints and data flows.',
          aspectRatio: '16/9',
        },
        {
          section: 'results',
          src: '/work/smataste/prototype-b1.jpg',
          caption: 'Smart Taste Index prototype — a single recommendation surface, with the "why" explanation always one tap away.',
          aspectRatio: '16/9',
        },
        {
          section: 'results',
          src: '/work/smataste/prototype-all.jpg',
          caption: 'Three iterations of the prototype, tested clickable with users between rounds.',
          aspectRatio: '16/9',
        },
      ],
    },
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
