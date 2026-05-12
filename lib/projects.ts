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
  splineEmbeds?: { url: string; caption?: string; section?: 'research' | 'strategy' | 'implementation' | 'results'; emphasis?: 'live-demo' | 'panoramic' }[];
  /** Figma prototype embeds — clickable in-page demos. */
  figmaEmbeds?: { url: string; caption?: string; viewport: 'mobile' | 'desktop'; audience?: 'diner' | 'kitchen' | 'general' }[];
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
      "A voice-first agentic learning environment for higher education. Each of the Six Thinking Hats becomes its own embodied LLM agent — distinct voice, presence, and reasoning style — so a study group can dialogue with the framework instead of reading about it.",
    researchQuestion:
      "Reimagining AI as a co-thinker for higher education — what does collaborative learning beyond automation feel like?",
    intro:
      "Co Cerebral is my RCA Design Futures thesis — Reimagining AI as Co-thinker: Shaping Cerebral Life in Higher Education by 2050. It pairs Edward de Bono's Six Thinking Hats methodology with multi-agent LLM architecture — White, Red, Black, Yellow, Green, and Blue, each as a distinct embodied agent. A thinking companion you dialogue with rather than prompt.",
    type: "Design Futures Thesis · Agentic UX · AI",
    year: 2026,
    tags: ["AI", "GenAI", "Agent", "Education", "Voice"],
    featured: true,
    thumbnail: "/thumbnails/co-cerebral.jpg",
    splineEmbeds: [
      {
        section: "research",
        emphasis: "panoramic",
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
      team: "Sole researcher and designer · supervised at the Royal College of Art Design Futures programme. Co-speculation workshop run with interdisciplinary students and tutors; questionnaire study targeted at AI-supported group learning.",
      impact:
        "A Design Futures thesis reimagining AI as a co-thinker for higher education by 2050. Through foresight, speculative design, and co-creation, the project proposes a preferable future where embodied AI agents scaffold critical reflection, collective decision-making, and richer learning outcomes for students and teachers — instead of accelerating cognitive offloading, automation bias, and motivational displacement.",
      challenge:
        `Most AI-in-education tools today are static chat interfaces — text in, text out, no embodiment. They optimise for fluency, not for friction. The result, well-documented across the AI-in-education literature: cognitive offloading, motivational displacement, automation bias, and an erosion of the critical thinking and creativity that group learning is supposed to cultivate.

This thesis asks a different question, framed in the Design Futures tradition: what if each cognitive mode in a structured thinking framework had its own embodied agent — voice, visual presence, distinct reasoning style — and a study group dialogued with the framework rather than reading about it?

The framing draws on Edward de Bono's Six Thinking Hats — White (facts), Red (emotion), Black (critical), Yellow (optimistic), Green (creative), Blue (process) — where structured cognitive disagreement is treated as the design surface, not a bug to smooth over.`,
      research:
        `The research flow embedded above maps how a learner moves through the system: from a single question, through the rotation of perspectives, into synthesis — voice-mediated throughout.

The thesis sits on three claims about AI in education:

- Over-reliance on AI undermines human agency, reduces critical thinking, and depresses creativity.
- AI is already transforming traditional teaching roles and learning experiences, whether the field is ready or not.
- A personalised, decentralised, privacy-first AI learning ecosystem is what closes the digital divide and advances learning equity.

The preferable future I am designing toward is Co-Intelligence Learning 2050. By 2050, every campus hosts AI-literacy classrooms where collective learning unfolds between human learners, teachers, and AI Co-thinkers. In these mixed-reality hybrid arenas, AI agents take on six dynamic roles — Analyst, Empath, Critic, Optimist, Innovator, and Conductor — to surface biases, offer insights and emotions, and co-create inclusive agendas.

Inside this collective intelligence ecosystem, learning is project-based, collaborative, and deeply personalised. Students co-learn with AI through tailored sessions that scaffold critical thinking and creativity. Teachers co-coach with AI to ensure privacy, inclusivity, and learner agency. Cloud deployments keep data in learners' hands.

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

The stack is intentionally lean — small enough that the artefact survives the academic year and remains accessible to readers, peers, and educators after the thesis defends.`,
      results:
        `Three design outcomes carry the thesis:

- A Co-Speculation toolkit — for cohorts and educators to imagine educational futures together. Used in the RCA workshop with interdisciplinary students and tutors.
- The CoCereb AI Co-thinker artefact — the embodied demo above. Each hat's voice and presence is dialogue, not interface; the framework lives in the room with the learner.
- A Roadmap toward Co-Intelligence 2050 — the strategic frame that ties the artefact and toolkit to the larger shift in higher education.

For students and teachers, the design intent is concrete: scaffold critical reflection, support better collective decision-making, and reduce the risks the literature documents — cognitive offloading, automation bias, motivational displacement.

The live demo above is the working artefact. Drag the scene to inspect each hat's embodiment; speak to summon an agent.`,
      lessons:
        `Two design lessons carry forward:

- Constraints over features. Adding voice was difficult, but it changed the interaction quality more than any feature could. The hardest design decision wasn't what to add; it was choosing modality.
- Embodiment is the contribution, not the LLM. Giving each hat a voice and a body shifted how participants spoke to the system — closer to a panel of distinct minds than a chat with a chatbot. The design intervention sits in that shift, not in the underlying model.`,
      nextSteps:
        `Immediate: open the embodied demo to cohort testing — gather metacognition signals from interdisciplinary student groups using the Six Hats rotation in real coursework.

Then: extend the AI literacy framework with co-teaching strategies for educators and a competency framework for educational AI agents — both named in the thesis as research outputs and still in development.

Longer view: take the methodology — embodied, dissent-based, voice-mediated cognitive scaffolds — into other domains where collective reasoning under AI is fragile, not just higher education.`,
      media: [
        {
          section: "strategy",
          src: "/work/co-cerebral/strategy/01-learning-transformation-roadmap.jpg",
          caption: "Co-Cerebral Learning Transformation Roadmap — the design framework that maps how learning rituals shift as agentic AI is woven into education.",
        },
        {
          section: "strategy",
          src: "/work/co-cerebral/strategy/05-agents-comparison.jpg",
          caption: "Current vs Future AI agents — a key-dimension comparison: from prompt-and-respond chat tools to agents with memory, role, and embodied presence.",
        },
        {
          section: "strategy",
          src: "/work/co-cerebral/strategy/07-stakeholder-map.jpg",
          caption: "Stakeholder map across Reflection, Assessment, and Administration layers — the AI Co-thinker shows up as a different role at each layer (peer for students, data partner for tutors, governance partner for ethics and policy).",
        },
        {
          section: "strategy",
          src: "/work/co-cerebral/strategy/08-six-agents.jpg",
          caption: "Six co-thinker roles, one per Hat — Facts collects inputs and context, Empathy carries gut feeling and intuition, Innovate thinks past the boundary, Optimise highlights value and benefit, Critic raises judgement and cautions, and Conduct regulates the decision-making flow.",
        },
        {
          section: "results",
          src: "/work/co-cerebral/results/01-four-future-scenarios.jpg",
          caption: "Four plausible 2050 scenarios for AI in education — the futures grid that the embodied Six Hats build is responding to.",
        },
      ],
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
    figmaEmbeds: [
      {
        url: "https://embed.figma.com/proto/Dqf1crEdIMI1GXnFXv7eG4/Sodexo-Eats-%26-Algorithms?page-id=883%3A1940&node-id=1014-1918&viewport=-6203%2C1291%2C0.43&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1014%3A1918&embed-host=share",
        viewport: "mobile",
        audience: "diner",
        caption: "Diner — Smart Taste Index onboarding. Spicy tolerance, cuisine, and label preferences seed the AI Memory.",
      },
      {
        url: "https://embed.figma.com/proto/Dqf1crEdIMI1GXnFXv7eG4/Sodexo-Eats-%26-Algorithms?page-id=796%3A295&node-id=796-301&viewport=18%2C450%2C0.25&scaling=scale-down&content-scaling=fixed&starting-point-node-id=796%3A301&embed-host=share",
        viewport: "mobile",
        audience: "diner",
        caption: "Diner — Talk to AI and order in seconds. Conversational ordering with health recommendation and AI Feedback before the lunch line.",
      },
      {
        url: "https://embed.figma.com/proto/Dqf1crEdIMI1GXnFXv7eG4/Sodexo-Eats-%26-Algorithms?page-id=1276%3A5226&node-id=1276-5233&p=f&viewport=90%2C251%2C0.18&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1276%3A5233&embed-host=share",
        viewport: "desktop",
        audience: "kitchen",
        caption: "Kitchen — Forecast ingredient consumption. AI Ingredients Forecast turns the canteen's history and dietary trend into a ranked stock list.",
      },
      {
        url: "https://embed.figma.com/proto/Dqf1crEdIMI1GXnFXv7eG4/Sodexo-Eats-%26-Algorithms?page-id=883%3A1219&node-id=1276-2925&p=f&viewport=403%2C85%2C0.12&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1276%3A2925&embed-host=share",
        viewport: "desktop",
        audience: "kitchen",
        caption: "Kitchen — Let chef know customer's flavour. Flavor Dietary Trend Report plus AI Recipes Generation for next week's menu.",
      },
    ],
    caseStudy: {
      role: "Lead UX and AI architecture · Research Assistant (RCA × Sodexo AiD Lab)",
      timeline: "Spring 2024 · RCA × Sodexo Studio Project Challenge (~10 weeks)",
      team: "4-person interdisciplinary team across IoT and HCI privacy, market analysis, mobile front-end, and UX with AI. I owned the AI flow architecture, the Smart Taste Index interface, scenario writing, and the final pitch.",
      impact:
        "A workplace dining service where Gen Z workers feel seen by what they eat, not lectured at by what they should eat. By replacing nutrition prescriptions with a personal taste memory and pairing every meal recommendation with an explainable 'why', SmaTaste shifts the canteen experience from compliance to consent. Won 3rd Place at the RCA × Sodexo Studio Project Challenge; selected by Sodexo Europe for 1–2 year pilot deployment.",
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
        `The build is one platform, two audiences, one feedback loop:

- B-side (kitchens): Forecast, Generate, Insight. AI Forecast turns historical demand and dietary-trend data into ingredient-consumption forecasts; AI Generation turns flavour signals into recipe drafts the chef can audit and ship.
- C-side (diners): Recommend, HealthCare, Taste. AI Memory remembers what each diner likes; AI Recommend serves the next meal; AI Suggestion nudges health goals; AI Feedback closes the loop back to the kitchen.
- Smataste AI in the middle. Both sides share the same Smart Taste Index, the same explainability contract, and the same data substrate — so the kitchen sees what the diner felt, and the diner trusts what the kitchen prepared.

Three commitments shaped the build:

- Quantify taste, don't moralize about health. 'Try this because it matches the taste profile you just told us about', not 'eat this because it's healthy'. Health becomes a side-effect of preference.
- Two AI models, two audiences. Taste-prediction feeds Sodexo's R&D and procurement; personal health memory feeds the diner.
- Explainability as a contract, not a feature. Every recommendation surfaces a 'why', co-owned with chefs, diners, and Sodexo product.`,
      implementation:
        `Service tracks. Basic uses what's already in caterers today; Premier reads the diner's Smart Taste Index and personal health goal. Both ride a modular pack: Main, Side, Toppings, Drinks, Dips.

Four C-side feature surfaces:

- Healthy — Setting eating preference. Spicy tolerance, cuisine, label system. AI Memory writes the baseline.
- Interactive — Talk to AI and order in seconds. Health recommendation, AI feedback. The diner negotiates the menu before the lunch line.
- Tasty — Dietary trend, mood calendar, health insights. The agent remembers what the diner liked and dynamically supports the health goal.
- Community — Share, rate and growth. Diner reviews flow back to the kitchen as ranked signal.

Two B-side dashboards:

- Let chef know customer's flavour. Flavor Dietary Trend Report plus AI Recipes Generation: the kitchen sees what the next week's diners want before procurement closes.
- Forecast ingredient consumption. AI Ingredients Forecast: ranked stock list with predicted consumption against last week's mood and weather.

My ownership across the 4-person team:

- Smart Taste Index UI — most of the consumer-facing interface, including the 'why' explanation surface and the dietary health calendar.
- AI flow architecture — defined how the two models talk to each other and to the kitchen. Worked closely with Fangzhou Wu, who owned the information modules and UI implementation.
- Final visual language — converged the team after 3 rounds of clickable-prototype testing with users.
- Pitch leadership — owned the final in-person pitch deck and the data-acquisition meetings with Sodexo Europe.

Tools: Figma (UI + clickable prototype), structured AI prompting research, Microsoft Decision-Making expert consultations facilitated by our supervisor Dr. Elif Özden Yenigün.`,
      results:
        `- 3rd Place at the RCA × Sodexo Studio Project Challenge
- Pilot implementation signed under NDA — Sodexo's engineering team is now developing the system for 1–2 year deployment
- 15 user interviews + access to Sodexo's internal customer-habit research base
- 3 prototype iterations, each tested clickable with users
- Sodexo Europe's response: 'You really understand Gen Z' — they specifically called out our framing of taste over health

Projected impact at scale (presented to Sodexo Europe in the final pitch, not yet measured live):

- Decrease 25% of the time spent on R&D management
- Increase user satisfaction to 90%
- AI Forecasting projected to shave 30% prep time and 15% in ingredients cost
- Zero-waste packaging across the modular pack
- Tasting the Future — the team's framing for what AI-driven workplace dining looks like in 2 to 5 years.`,
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
          section: 'challenge',
          src: '/work/smataste/r3/r3-01.jpg',
          caption: 'Smataste — Redefining Workplace Food Experiences. RCA × Sodexo team: Zixiang Feng, Fangzhou Wu, Yutong Zhu, Wenjinhan Chen.',
        },
        {
          section: 'research',
          src: '/work/smataste/r3/r3-02.jpg',
          caption: "What's the problem in workplace dining — Gen Z expects healthy, fun and fast tasty; Sodexo struggles with diverse needs and procurement mismatches; high-pressure workplaces leave a gap between healthy intent and the canteen reality.",
        },
        {
          section: 'strategy',
          src: '/work/smataste/r3/r3-03.jpg',
          caption: 'Our strategy — an AI-driven canteen platform built around three pillars: Smart Taste Index, Workspace Dietary Trend, and Personalized Dining. The service circle ties consumer food-care apps to Sodexo soft-facilities management through a shared algorithm.',
        },
        {
          section: 'strategy',
          src: '/work/smataste/r3/r3-09.jpg',
          caption: 'Operations — the dual-loop architecture. To B: Forecast, Generate, Insight. To C: Recommend, HealthCare, Taste. Smataste AI sits in the middle, binding the food service circle to the soft-facilities management circle through a shared dataflow and feedback loop.',
        },
        {
          section: 'implementation',
          src: '/work/smataste/r3/r3-04.jpg',
          caption: 'Service tracks — Basic and Premier service tiers, riding a modular pack: Main, Side, Toppings, Drinks, Dips.',
        },
        {
          section: 'implementation',
          src: '/work/smataste/r3/r3-06.jpg',
          caption: 'Interactive — Talk to AI and order in seconds, before you join the lunch line. C-side conversational ordering with health recommendation and AI feedback modules (C1, C2).',
        },
        {
          section: 'implementation',
          src: '/work/smataste/r3/r3-08.jpg',
          caption: "Community plus B-side dashboards. Diners share, rate and grow; the kitchen reads the resulting flavour signal as Let chef know customer's flavour and Forecast ingredient consumption — the closing loop where C-side memory becomes B-side insight.",
        },
      ],
    },
  },
  {
    slug: "skgplus",
    title: "SKG+",
    description:
      "Rebuilt skgplus.cn as a CMS-driven live archive. Shipped amacontest.com in three weeks; 400+ Asian teams competed.",
    researchQuestion:
      "How does a studio's brittle backend become a presence that publishes itself?",
    intro:
      "SKG+ is an immersive entertainment studio in mainland China. I joined as remote contract Web Designer for a year and rebuilt skgplus.cn into a CMS-driven live archive. Then a three-week emergency: amacontest.com, a competition platform that drew 400+ teams across Asia.",
    type: "Web Design · CMS Automation · Brand",
    year: 2025,
    tags: ["Web Design", "CMS", "Brand", "Real Client", "Automation"],
    featured: true,
    thumbnail: "/thumbnails/skgplus.jpg",
    href: "/work/skgplus",
    caseStudy: {
      role: "Lead Web Designer · contract · remote",
      timeline: "Apr 2025 – Apr 2026 (12 months, ongoing maintenance)",
      team: "Founder + internal content lead + principal creators. I owned design, IA, deployment, and the content pipeline.",
      impact:
        "A studio's brittle CMS replaced with a self-growing live archive — 170+ works now publish themselves, freeing the team to make work instead of file it. A parallel competition platform built in 3 weeks that gave 400+ design teams across Asia a real venue to compete in, instead of yet another social-media submission form.",
      challenge:
        "The studio's existing Framer back-end was breaking under maintenance — 170+ works were unmanageable to update. The founder asked for a 'fancy, color-matched' hero. But the studio's source work was already saturated, vivid, dense — adding visual density on top would create fatigue. And mid-project, an emergency: a 3-week window to launch amacontest.com (Asia Mapping Art Contest) with no extension.",
      research:
        "I sat directly with the CEO and the principal creators to map their content workflow. Two findings drove everything that followed:\n\n- The Framer back-end was the real bottleneck — content updates broke layouts every release.\n- The founder's 'fancy' brief was a hypothesis, not a spec. What he actually meant was 'don't look generic.' Restraint, not maximalism, was the right answer once we held up examples of peer immersive studios.",
      strategy:
        "Three decisions shaped the build:\n\n- Restraint as service. The studio's work IS the color; the web should be the frame. After comparing color-saturated mockups side-by-side against a near-monochrome scaffold, the team agreed.\n- Pipeline before pages. Instead of manually uploading 170+ works to Framer, I built a Google Sheet → Make.com → Gumlet → Framer sync. Update one row in a sheet, the website refreshes.\n- Reusable design system. Components and tokens were structured so the amacontest.com 3-week emergency could lift the entire visual language and ship a new site without re-designing primitives.",
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
      "A speculative BCI device for pro-esports training. Designed to make the cognitive layer — the part traditional training treats as invisible — visible to coach and player in real time.",
    type: "Innovation Product Design · UX · HCI",
    year: 2024,
    tags: ["Industrial Design", "BCI", "HCI", "Speculative"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/ItIE3LjjpIh7r6cbWRLgv0KD41A.png",
    videoUrl: "",
    href: "/work/syncoe",
    caseStudy: {
      role: "Solo design lead · Sichuan Fine Arts BA Digital Media graduation track",
      timeline: "2023–2024 graduation thesis (~16 weeks)",
      team:
        "Solo project, supervised. Field research with the A1 E-Sports team in Hangzhou (9 positions, 64 shortlisted candidates, average retirement age 24, ~100,000 youth-camp participants nationally). 45-player survey across psychological pressure, age, and stress dimensions.",
      impact:
        "A speculative BCI device that asks whether the next generation of competitive players should be measured by their EEG response curves the way runners are measured by their heart-rate zones. Designed to make mental fortitude — the layer esports training treats as invisible — visible to coaches and players in real time.",
      challenge:
        `China's pro-esports pipeline is expanding faster than its mental-health infrastructure. Players retire at 24. The same cortisol load as a race-car driver, sustained for hours daily, with no recognised pathway for psychological recovery. Existing training maps reps and reaction time, but says nothing about cognitive fatigue, rumination, or the mental ceilings that limit a player's ability to break through performance plateaus.`,
      research:
        `45-player survey across light-vs-severe psychological pressure, age group, and stress comparison. Coach interviews at the Hangzhou A1 academy.

Key insight from one coach: 'Esports athletes hit up to 400 movements on the keyboard and mouse per minute — four times the general population. The cortisol output is comparable to a race-car driver.' The same insight made the inverse possible: brainwave training has documented effects on rumination and cognitive recovery.`,
      strategy:
        `Three design commitments:

- Make mental training visible. EEG + PPG + EDA + IR sensors feed a real-time cognitive dashboard for player and coach.
- Design for the coach as much as the player. The neurofeedback loop only closes if the coach can read it during a match, not in a post-mortem PDF.
- Modular, not monolithic. Bio-sensor band + detachable microphone + gaming earbuds + emotion-indicator LED ring — each component has a separate failure mode and a separate price point.`,
      implementation:
        `Hardware: multichannel bio-sensor headset with 4-channel active EEG (TDCS anodes and cathodes), PPG, EDA, and an IR sensor. Modular gaming earbuds, detachable microphone, flexible PCB band, indicator LED ring for coach-facing emotion state. CMF in PC ABS with sandblasted finish. Three head-size variants (140 mm, 154 mm, and 179–186 mm).

Digital: training-review platform pairing EEG traces with match replays. Comparative metrics chart 'traditional training' (mechanical memory + repetition) against 'advanced training with EEG' (enhanced accuracy, faster skill execution, better mental performance, boosted visual working memory).

Cutaway packaging model: easy carry plus organise on the go.`,
      results:
        `Two design outputs:

- An EEG training device positioned for esports coaches and players, not generic 'brain training' consumers.
- A neurofeedback training framework that pairs match data with cognitive state for shared coach-player review.

Selected for the 27th Sichuan Fine Arts Institute Graduation Showcase (2024).`,
      lessons:
        `Three carry-forwards:

- Mental health needs an interface, not just a campaign. Esports already has rich performance data; what was missing was a way for the cognitive layer to enter the conversation.
- Two users, one device. A wearable that has to live on a player's head and on a coach's screen simultaneously is a different design problem than a consumer fitness tracker.
- Speculative product, real measurement. Even if today's BCI fidelity is more aspirational than shipping-grade, the framework — pair every match with a cognitive-state trace — is real and adoptable now with cheaper sensors.`,
      nextSteps:
        `The framework generalises: any high-cognitive-load profession with a coach in the loop (chess, surgery training, music performance) could ride the same neurofeedback-plus-replay structure. The harder open question is what privacy looks like when a player's cognitive state is owned by their team.`,
      media: [
        {
          section: "challenge",
          src: "/work/syncoe/portfolio/01-overview.jpg",
          caption: "Project overview — esports mental-load research, A1 academy data, and the case for visible cognitive training.",
        },
        {
          section: "research",
          src: "/work/syncoe/portfolio/02-research-design.jpg",
          caption: "Research and design — survey results, comparative training framework, and the human-centred AI positioning.",
        },
        {
          section: "implementation",
          src: "/work/syncoe/portfolio/03-product-structure.jpg",
          caption: "Product display — multichannel bio-sensor headset, modular components, CMF treatment, and exploded structure view.",
        },
        {
          section: "results",
          src: "/work/syncoe/portfolio/04-platform.jpg",
          caption: "Training-review platform — pairs EEG traces with match replays for shared coach–player review.",
        },
      ],
    },
  },
  {
    slug: "beatrol",
    title: "BEATROL",
    description: "L4 Safety Human-Vehicle Co-Driving Cockpit for Fatigue Intervention",
    researchQuestion: "How can AI-driven systems enhance safety in autonomous driving?",
    intro:
      "A speculative L4 cockpit that treats driver fatigue as a design surface — not a single signal to wake someone up, but a graded handover where the vehicle takes more authority as the driver's attention degrades.",
    type: "HMI · Experience Design · Product Design",
    year: 2023,
    tags: ["HMI", "UX", "Industrial Design", "Speculative", "AI"],
    featured: true,
    thumbnail: "/thumbnails/beatrol.jpg",
    videoUrl: "https://vimeo.com/817694480",
    href: "/work/beatrol",
    caseStudy: {
      role: "Solo design lead · Sichuan Fine Arts BA · Innovation Product Design",
      timeline: "Spring–Summer 2023 (~12 weeks)",
      team:
        "Solo project, faculty supervised. Comparative experiment ran in a simulated cab with an EAGOLAB sensor set (EEG, ECG, EDA, plus a forward-facing CV camera). Stimulus generators tested across tactile, vibration, and olfactory modules.",
      impact:
        "A speculative L4 cockpit that re-frames driver fatigue as a design surface — not a signal to wake the driver up, but a sequence for handing power back and forth between human and vehicle as attention degrades. The fatigue case is one slice of a larger question about how authority should move between humans and machines as their relative competence shifts.",
      challenge:
        `Fatigue-related crashes account for around 30% of road accidents and a quarter of fatalities, with millions of incidents per year. The in-vehicle systems being shipped today can detect fatigue and beep — they cannot intervene. As autonomous driving moves toward L4, the design question stops being 'how do we wake a driver up?' and becomes 'how do we hand power back and forth between human and vehicle as the driver's attention degrades?'`,
      research:
        `Two questions framed the inquiry:

- How do existing fatigue-driving interventions work — olfactory, auditory, visual, tactile — and where do they fail?
- How can drivers and machines collaborate to reach a shared safety goal, instead of one yelling at the other?

The literature converges on multimodality and on intervention curves keyed to fatigue level. The Karolinska Sleepiness Scale (KSS) anchors the measurement; the gap is in tying KSS bands to graded automation handovers.`,
      strategy:
        `Three design commitments anchor the build:

- A fatigue state graph as the spine. Awake → Mild fatigue → Deep fatigue maps to intervention layers, not single triggers.
- Sensors as a stack, not a single source. EEG, EDA, ECG, eye tracking, and a forward-facing CV camera feed a fused fatigue estimate.
- Handover as a designed sequence. Active → semi-active → passive transition — the system steadily takes more control as the driver's fatigue band rises, ending in vehicle-led parking when 'deep fatigue' is detected.`,
      implementation:
        `Physical: a tactile steering wheel with programmable fabric (a Mini-LED display layer + flexible pressure sensors + vibration modules + camera location) that folds into a docking position when the system fully takes over.

Digital: DIM dashboard with anti-fatigue pitch settings (mid fatigue 45–120 dB · deep fatigue 10–60 Hz), AI assistance with stand-by, listening, and response visual feedback, and a multimodal intervention flow.

Tested in a simulated cab with one driver across six lab sessions. SAM (subjective) and KSS (physiological) measures collected at each stimulus.`,
      results:
        `Three design outputs the project carries:

- A fatigue-graded intervention framework — KSS bands as design surfaces.
- A tactile-first steering wheel with a foldable handover state.
- An anti-fatigue DIM dashboard with multimodal sensory layers (audio, vibration, light, scent).

Submitted to industrial design competitions in 2023; the design language was framed as 'L4 sensory symbiosis space', not 'driver-monitoring product'.`,
      lessons:
        `Two carry-forwards:

- Designing the handover, not the alarm. The hardest design problem wasn't detecting fatigue — sensors do that — it was choreographing the 30-second window where the system is taking over and the driver still feels like an agent, not a passenger.
- Sensors are vocabulary, not data. EEG, EDA, eye-tracking each speak a different language about attention. The job was translating between them and surfacing only the parts the driver needed to feel.`,
      nextSteps:
        `Take the handover-as-choreography frame into other co-driving moments — lane-keeping under low confidence, urban-merge negotiations, valet handoff. The fatigue case is one slice of a larger question about how authority should move between humans and machines as their relative competence shifts.`,
      media: [
        {
          section: "challenge",
          src: "/work/beatrol/portfolio/01-overview.jpg",
          caption: "Project overview — abstract, research questions, fatigue-state framing, and the 'L4 sensory symbiosis' positioning.",
        },
        {
          section: "research",
          src: "/work/beatrol/portfolio/02-system-prototype.jpg",
          caption: "System map, multimodal output channels, KSS-based fatigue measurement, and the comparative experiment setup in the simulated cab.",
        },
        {
          section: "strategy",
          src: "/work/beatrol/portfolio/03-tactile-wheel.jpg",
          caption: "Tactile steering wheel — programmable fabric with Mini-LEDs, pressure sensors, and folding intervention states.",
        },
        {
          section: "implementation",
          src: "/work/beatrol/portfolio/04-multimodal-ai.jpg",
          caption: "Multimodal intervention process and DIM dashboard — voice, visual, vibration, tactile, audible, ambient light, and olfactory layers tied to fatigue level.",
        },
      ],
    },
  },
  {
    slug: "sprayscape",
    title: "SprayScape",
    description: "Street Art Trading Platform based on Spatial Computing for Urban Beautification",
    researchQuestion: "How can we harmonize graffiti culture with local community values?",
    intro:
      "A service-design proposal for a two-sided platform where graffiti artists and property owners negotiate space through spatial-computing previews — turning a tug-of-war over walls into a coordination problem.",
    type: "Service Design · Culture Study · UX",
    year: 2024,
    tags: ["Service Design", "UX", "Spatial Computing", "AR"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/swsE03EafovXxtL53gEI0UQUr8.png",
    videoUrl: "https://vimeo.com/883701939",
    href: "/work/sprayscape",
    caseStudy: {
      role: "Solo design lead · Sichuan Fine Arts BA · Service design, culture study, UX",
      timeline: "2024 (~12 weeks)",
      team:
        "Solo project. Three case studies across Brooklyn (Graffiti Hall of Fame), Chongqing (UK), and Los Angeles. Site analysis across five style categories (taglines, murals, stickers, bombs, tags).",
      impact:
        "A service-design intervention that reframes graffiti from a legal liability into a negotiable urban asset. The proposal: a two-sided platform where artists and property owners agree on space through spatial-computing previews, so a city's walls become a coordination problem instead of a tug-of-war.",
      challenge:
        `Graffiti artists face a stack of structural barriers: tight legal frameworks, scarce sanctioned surfaces, limited display channels, and no infrastructure for repeat commissioning. Property owners and councils face the inverse problem: graffiti shows up uninvited, and there is no efficient way to commission what they actually want. Both sides lose: the artist loses creative freedom; the city loses both authentic culture and orderly walls.`,
      research:
        `Three case studies (Brooklyn, Chongqing, LA), site analysis across five style categories. Interviews with one artist, one buyer, and one community representative.

Key insight, distilled from the interviews: 'Graffiti is updated quickly and lacks protection. It is distributed in many places — rooftops, under bridges, in parks. The graffiti management system is not well developed. Graffiti is in conflict with public organisations and is generally confrontational. Graffiti has aesthetic value and can beautify the city.'`,
      strategy:
        `A two-way platform connecting three perspectives:

- Artists — sanctioned wall access, recognition, financial stability, urban-beautification credit.
- Buyers — creative freedom, legal support, content matching for tone and culture.
- Community — improved security, sustainable development, city exploration, emotional connection.

Touchpoints across the loop: an AR platform to build a graffiti space, social-collaboration engagement, mapping contests, defined graffiti culture and public organisations, multi-party agreement synchronisation, digital platform, take-the-snap-as-an-internet-famous-site, special spatial-computing interaction layer, social media.`,
      implementation:
        `System map across three layers: an online platform connecting players with operators and merchants; a service system connecting ecosystem operators and stakeholders; and a mission frame oriented to high-quality street communities and cultural value, driving offline visits and a strong business ecology.

Concept flow: Confirm → Creation Process → Outcome Check → Post & sharing.

High-fidelity interface: hourly navigation, daily missions, creator profile, AR commission scout, reward levels, on-wall preview. Spatial layers: AR canvas overlays for real walls, viewable on phone or MR headset.`,
      results:
        `A complete service-design platform proposal — UI prototypes, system map, stakeholder map, and mission concept. Featured in Sichuan Fine Arts annual showcase.`,
      lessons:
        `Two carry-forwards:

- The right question wasn't 'how do we control graffiti?' but 'how do we negotiate it?'. Designing the platform to give all three stakeholders something to defend turned a moral argument into a coordination problem.
- Spatial computing as preview, not as product. Letting buyers see a piece on the wall before commissioning closes the trust gap that legal channels alone cannot.`,
      nextSteps:
        `The negotiation pattern generalises to other forms of contested public expression — busking, pop-up performance, political postering. Any domain where the artist, the audience, and the property owner are usually in a three-way standoff, and a digital previewing layer could let them rehearse the agreement first.`,
      media: [
        {
          section: "challenge",
          src: "/work/sprayscape/results/clipboard---2023-11-04-13-34-35--eagle-l.jpg",
          caption: "The cultural subject — a runner crosses a Chongqing graffiti wall mid-stride. Street art lives in the city, but its makers and viewers rarely meet.",
        },
        {
          section: "research",
          src: "/work/sprayscape/results/local-case-study--eagle-mmbs4nko99lw8.jpg",
          caption: "Situated practice — a deep case study at Huangjueping Graffiti Art Street in Chongqing. Spatial analysis maps tagging, masterpieces, murals, and the mobility patterns that shape where work appears.",
        },
        {
          section: "strategy",
          src: "/work/sprayscape/portfolio/02-service-design.jpg",
          caption: "Service strategy — three perspectives (artist, buyer, community), pains and gains, and the touchpoint roadmap from negotiation through publication.",
        },
        {
          section: "implementation",
          src: "/work/sprayscape/results/sprayscape-v5-7-10--eagle-mmbs4nkpketoe.jpg",
          caption: "Full UX flow — historical navigation, community upload with metadata, requirement matching for commissions, and an artist-profile flow that confirms authorship via on-wall scan.",
        },
        {
          section: "implementation",
          src: "/work/sprayscape/results/sprayscape-uiux---eagle-mmbssqw2i30uo.jpg",
          caption: "Brand and product identity — SprayScape positions itself as a street-art trading platform for urban beautification, with the role and contribution scope spelled out for stakeholders.",
        },
        {
          section: "results",
          src: "/work/sprayscape/results/sprayscape-z-1080p-60-09121727---5-00--e.jpg",
          caption: "On-wall preview, in motion. The phone shows a sanctioned scout overlay; the right frame is a real spray pass on the wall. 留下痕迹 — leave a trace.",
        },
        {
          section: "results",
          src: "/work/sprayscape/results/sprayscape-yutongzhu-1080p-60-09121756--.jpg",
          caption: "Real-world context — the SprayScape mark over the Chongqing skyline. The platform is sized for cities where graffiti, business, and audience already share the same walls.",
        },
      ],
    },
  },
  {
    slug: "wildfire-whispers",
    title: "Wildfire-Whispers",
    description: "Data-driven immersive installation with embodied gesture design for climate awareness",
    researchQuestion: "How do humans coexist with extreme weather?",
    intro:
      "A 3m×2m geometric installation paired with a satellite-data poster series. Real-time gesture recognition turns five years of wildfire records into something a body can feel.",
    type: "Interaction Design · Information Visualization · Storytelling",
    year: 2024,
    tags: ["Embodied Interaction", "Data Viz", "Installation", "Climate"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/oyzMDOHWVh6rgkG7cfZqhJwwXtU.png",
    videoUrl: "https://vimeo.com/883703201",
    href: "/work/wildfire-whispers",
    caseStudy: {
      role: "Solo design lead · Sichuan Fine Arts BA",
      timeline: "Late 2022 – early 2024 (multi-stage build)",
      team:
        "Solo project. Source data: Fire Information for Resource Management System (FIRMS) wildfire database, 2017–2021. Inspired by the August 2022 Jinyun Mountain wildfire in Chongqing.",
      impact:
        "An immersive installation that turns five years of satellite wildfire data into something a body can feel. Gesture-driven projections plus a starburst-tree poster series invite a visitor to encounter climate intensity as a sensory event, not a chart.",
      challenge:
        `Wildfire awareness usually arrives as bar charts and dashboards — and gets scrolled past. As an undergraduate designer interested in how environmental data changes behaviour, the design question became: can the same data be felt rather than read, without trivialising the disaster, and without losing data integrity?`,
      research:
        `Inspiration drawn from Arrival — the alien language as circular, ink-blot symbols evoking the cyclic nature of time. That visual primitive translated cleanly to wildfire data: each fire has a start, an expansion arc, and a fade.

Source data: global satellite wildfire records, 2017–2021 (FIRMS). The work uses both the data itself and a fictional frame ('In a futuristic world called Whispering Wildfire, wildfire has a deep connection with both humans and animals…') drawn through the project, mapped to UN SDG Goal 15 (Life on Land).`,
      strategy:
        `Three design commitments:

- Two parts, one logic. Part 1 — a real-time installation with audio-visual mapping driven by gesture recognition. Part 2 — a data-visualisation poster series turning satellite wildfire data into 'starburst tree' compositions.
- Body-first input. Leap Motion plus Unreal Engine for gesture-driven interaction; the visitor's hand becomes the cursor onto the data.
- Role reversal as game design. In the interactive puzzle layer, players switch between 'New Human' and 'Animal' to experience two perspectives — as a New Human, you solve wildfire-related puzzles and protect the flora and fauna; as an Animal, you escape the flames and find food.`,
      implementation:
        `Hardware: a 3m × 2m geometric wall-mounted setup with responsive projections. Leap Motion sensor for gesture recognition. NVIDIA PhysX SDK + NVIDIA FLOW + a custom node-flow and dataflow pipeline.

Software: real-time gesture-driven particle effects and parametric arrays of flowing, leaf-like shapes; the visitor's hand sets a sense of spatial physicality and energetic flow. Music visualisation as a secondary input.

Visualisation series: selected global satellite data (2017–2021) → starburst-tree posters where fire severity drives the visual cadence.`,
      results:
        `Two design outputs:

- An immersive embodied installation translating wildfire intensity into gesture-driven audio-visual response.
- A data-visualisation poster series that holds up to scrutiny as both data work and as design objects.

Final exhibition at H.U.B Cherrytree Gallery, Chongqing.`,
      lessons:
        `Two carry-forwards:

- Embodied data is design, not data. The same dataset earns a thousand different feelings depending on what the body does to interact with it. The design contribution sits in the gesture-to-mapping function, not in the dataset.
- Speculative fiction earns the data its weight. Without the 'Whispering Wildfire' framing, the visualisations are pretty; with it, they have a story to live in.`,
      nextSteps:
        `The pattern — pair satellite environmental data with a body-first input layer — is portable to deforestation, glacial retreat, ocean acidification. Each one needs its own gestural vocabulary, but the underlying technique transfers.`,
      media: [
        {
          section: "challenge",
          src: "/work/wildfire-whispers/portfolio/01-overview.jpg",
          caption: "Project overview — concept, inspiration ('Arrival' as visual primitive), information architecture, and the New Human / Animal role-reversal frame.",
        },
        {
          section: "implementation",
          src: "/work/wildfire-whispers/portfolio/02-installation.jpg",
          caption: "Installation build — gesture-driven audio-visual mapping with Leap Motion and Unreal, plus the satellite-data poster series and final exhibition at H.U.B Cherrytree Gallery, Chongqing.",
        },
      ],
    },
  },
  {
    slug: "poeticform",
    title: "Poetic-Form",
    description: "Digital sculpture creation based on Human-AI co-creation",
    researchQuestion: "How does AI portray the shape of the poem?",
    intro:
      "Generation of customized Taihu stone digital sculptures based on Eastern aesthetics through sound or semantic information.",
    type: "AIGC Interaction Installation",
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
    type: "UI UX",
    year: 2021,
    tags: ["UX UI"],
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
    title: "HUAWEI Meta Station",
    description: "Interactive UI theme for HUAWEI HarmonyOS — lockscreen interaction, 3D scene, and day-and-night sensing.",
    researchQuestion: "Will the metaverse be the future of online network and remote work?",
    intro:
      "As UX Designer intern at HUAWEI in Chengdu (Sep–Dec 2022), I shipped two design systems for phone and watch faces on the Huawei Theme Store. Alongside that, I redesigned 68 first-party icons, adapted 51 third-party icons for HarmonyOS, and launched a new HarmonyOS interaction template. Meta Station is the flagship of the work — a HarmonyOS theme that treats the lock screen as a small social place rather than a utility tile.",
    type: "HUAWEI HarmonyOS Theme",
    year: 2022,
    tags: ["HUAWEI", "UX", "UI", "3D", "Theme Design"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/q1KWuBoFjXN9Sdr3v9JbwL5QQW0.png",
    videoUrl: "https://vimeo.com/883705290",
    href: "/work/meta-station",
    caseStudy: {
      role: "UX Intern · HUAWEI Co., Ltd · Chengdu, China",
      timeline: "2022 (internship)",
      team:
        "UX intern under the HUAWEI Theme Design team. Designed the lockscreen interaction system, the day-and-night state mode, the 3D scene, and the multi-wallpaper variants for a single theme product.",
      impact:
        "A HUAWEI HarmonyOS theme that treats the lock screen as a small social place rather than a utility surface. Day–night sensing, anecdote-pressing, and a lowpoly meta-city create a phone front-door that feels inhabited — mid-pandemic, when remote work made the boundary between online and offline porous.",
      challenge:
        `When the pandemic made online socialisation and online office the default, mobile interfaces were still designed around tap-and-go utility. The brief: imagine a HarmonyOS theme where the phone surface itself feels like a lowpoly virtual social space — somewhere between a wallpaper, a desktop pet, and a metaverse outpost. Built for the era of the full-fledged Internet.`,
      research:
        `Style direction: 3D bright tone, virtual nostalgic, modernism, fashion style, future-of-the-past 80s–90s. Target age groups: 21–35-year-old hot-company employees and content seekers, the same fashion as the world.

Design philosophy borrowed from one internal note: 'Use the concept of meta-station to allow users to predict scenarios while navigating, creating fun in entertainment.'`,
      strategy:
        `Three commitments shaped the work. The first was treating the lock screen as a front door rather than a doormat — somewhere the user could press to reveal a small anecdote, swipe sideways to look around the scene, and discover hidden eggs in the map. The second was making the scene aware of time. The same city shifts colour, light, and mood between morning and night, while keeping its characters and architecture intact, so it reads as one place living through a day rather than two unrelated palettes. The third was speaking a single visual language across every surface. City, desktop, weather widgets, and icons all sit inside the same lowpoly grammar so the theme feels like one inhabited world rather than a folder of loosely related assets.`,
      implementation:
        `The work covered three connected pieces — authoring the 3D scene, designing the UI theme, and writing the lockscreen interaction logic. Out the other end came a meta-station city environment, multiple wallpaper variants, a day-and-night transition, and a weather-icon family that sits inside the same visual world as the rest of the theme.

The lockscreen interaction itself reads like a short sequence. When the desktop is pressed, a floating panorama of the meta-station appears. When released, the view returns to the city centre. Pressing reveals scene anecdotes, and the user can swipe left or right to move the camera and find hidden eggs in the map.`,
      results:
        `A complete HUAWEI Theme product that ships as a single coherent world. It bundles the UI theme, the lockscreen interaction, the 3D scene, day-and-night mode, multiple wallpaper variants, and a matching weather-icon family. Released on HUAWEI Themes as Meta-Station UI.`,
      lessons:
        `Two ideas carry forward from this project. The first is that a theme is a tiny game world rather than a skin. Once the lockscreen has anecdotes, a swipeable point of view, and hidden details, it stops being decoration and becomes a place users return to between tasks. The second is that time itself can be a design surface. Day and night is not only a palette switch but an opportunity to give the theme a life cycle that maps to the rhythm of the user's day.`,
      nextSteps:
        `Bring the same scene-as-place pattern into other small-screen surfaces — Apple Watch faces, in-flight entertainment lockscreens, smart-fridge ambient displays. Anywhere a screen sits in a person's life for hours but is treated as a static surface.`,
      media: [
        {
          section: "challenge",
          src: "/work/meta-station/portfolio/01-overview.jpg",
          caption: "Project overview — meta-station theme concept, target audience, and the lockscreen-as-front-door framing.",
        },
        {
          section: "implementation",
          src: "/work/meta-station/portfolio/02-3d-scenes.jpg",
          caption: "3D scene system, lockscreen interaction (anecdote-pressing + swipeable POV), day-and-night mode, multiple wallpaper variants, and the weather-icon family.",
        },
      ],
    },
  },
  {
    slug: "neon-nike",
    title: "Neon-NIKE",
    description: "A concept visual for NIKE",
    type: "Concept Visual",
    year: 2024,
    tags: ["UX UI"],
    featured: true,
    thumbnail: "https://framerusercontent.com/images/9RxJa7zlJTN3uQ7PmhMOb3uYRAk.jpg",
    href: "/work/neon-nike",
  },
  {
    slug: "bytedance",
    title: "ByteDance · TikTok AR Effects",
    description:
      "Two TikTok / TikTok Lite filters that drew 10K+ views and were featured on TikTok's Best of the Week. Custom AR effects (beauty, atmosphere, interaction) informed by DAU trend analysis.",
    researchQuestion:
      "What makes an AR effect stick — beyond a face filter that fades by Tuesday?",
    intro:
      "Visual Designer at ByteDance (Chongqing). Led custom AR effects — beauty, atmosphere, interaction — designed around DAU trend analysis and shipped through TikTok and TikTok Lite.",
    type: "Visual Design · AR · Motion",
    year: 2023,
    tags: ["AR", "TikTok", "Visual Design", "ByteDance", "Motion"],
    featured: true,
    thumbnail: "/work/bytedance/01-hero-football-baby.png",
    href: "/work/bytedance",
    caseStudy: {
      role: "Visual Designer · ByteDance · Chongqing",
      timeline: "Oct 2023 – Dec 2023 (TikTok commercial workshop, late 2022 + 2023)",
      team:
        "Solo designer inside the AR effects commercial-workshop pipeline. Three effects produced — 蘑菇眼 (Mushroom Eyes), 珠光宝气 (Pearl Glitter), and 世界杯AR-足球宝宝 (World Cup Soccer Baby).",
      impact:
        "Two TikTok / TikTok Lite filters shipped to a global audience with 10K+ combined views, featured on TikTok's Best of the Week. The work proved that AR effects can move from face-decoration to atmosphere — short interaction loops that change the emotional register of a short-form video, not just the face on it.",
      challenge:
        `On TikTok, an AR effect competes against thousands of new filters every week. Most fade in a few days. The brief, given through the ByteDance commercial-workshop pipeline, was to build effects that read instantly, scale across face / atmosphere / interaction modalities, and survive Tuesday.`,
      research:
        `Looked at the previous quarter of TikTok DAU trend data — which effects were trending, what they had in common, what they were missing. Three threads emerged:

- Beauty effects had hit saturation; the marginal innovation was in atmosphere (light, particles, environmental change), not facial geometry.
- The audience interaction lever (tap to change, blink to trigger) was under-used outside of the top 1% of effects.
- The World Cup 2022 was about to dominate short-form video — a brand moment that would carry a themed effect far past Tuesday if the timing was right.`,
      strategy:
        `Three effects, one per modality:

- **蘑菇眼 (Mushroom Eyes)** — a beauty-adjacent effect that augments the eye region with subtle mushroom motifs. Reads as cute, scales across selfie use cases, low-friction enter.
- **珠光宝气 (Pearl Glitter)** — a pixel-art atmosphere overlay. Treats the whole frame as the canvas, not the face. Aimed at the under-served atmosphere lever.
- **世界杯-足球宝宝 (World Cup Soccer Baby)** — an interaction-led AR effect timed to the 2022 World Cup. The official Al Rihla 3D ball model in-effect; the user becomes the soccer baby. Timed to the tournament's emotional peak.`,
      implementation:
        `Built in ByteDance's Effect House (.ecpj source project files). Each effect went through the standard ByteDance AR pipeline: prototype → internal review → DAU pilot → published filter on TikTok / TikTok Lite store. Texture work for the World Cup ball used the official Al Rihla colour, normal, roughness, and metallic maps.

Source files preserved (蘑菇眼.ecpj plus the World Cup model bundle in /20221124足球/2022世界杯足球模型1741.fbm). Workshop screen recording from the Oct 19 2022 commercial workshop captured the full creation flow.`,
      results:
        `- Two filters shipped to TikTok / TikTok Lite.
- 10K+ combined views.
- Featured on TikTok's Best of the Week.
- Process used as teaching material in subsequent ByteDance commercial workshops.`,
      lessons:
        `Two carry-forwards:

- The face is not the only canvas. Atmosphere effects (particle systems, ambient light, environmental treatment) had more headroom than facial-geometry effects in 2022–2023. The Pearl Glitter effect outperformed its complexity budget on that basis.
- Time-locked effects pay off. The World Cup effect would have been a footnote in March. Timed to the tournament's emotional peak, it carried itself.`,
      nextSteps:
        `The ByteDance workshop pipeline informed how I now think about agentic UX more broadly: a viral short-form effect is, structurally, a one-shot agent — it takes a single input (a frame from your camera, a tap, a face) and ships back a transformed output in real time. The interaction-design lessons port directly to longer-running AI products.`,
      media: [
        {
          section: "strategy",
          src: "/work/bytedance/01-hero-football-baby.png",
          caption: "World Cup Soccer Baby — the official Al Rihla 3D ball reskinned as a character. Beauty render from the in-effect 3D pipeline.",
        },
        {
          section: "implementation",
          src: "/work/bytedance/02-football-model.png",
          caption: "3D model preview from the in-house pipeline. Al Rihla colour, normal, roughness, and metallic maps baked onto the Soccer Baby character rig.",
        },
        {
          section: "research",
          src: "/work/bytedance/03-basketball-render.jpg",
          caption: "Companion render from the early concept stage — basketball-character study before the brief locked onto the World Cup ball.",
        },
      ],
    },
  },
  {
    slug: "greenmove",
    title: "Healmove · 绿途",
    description:
      "Speculative design fiction for sustainable health-and-mobility — L5 autonomous mobility, personal carbon accounts, and in-vehicle micro-fitness, set in the global obesity crisis of 2045.",
    researchQuestion:
      "By 2045, can the car become a third space for health rather than a fourth source of sedentary time?",
    intro:
      "Healmove is a design-fiction project from the 2023 Future Mobility course at Sichuan Fine Arts Institute (with industry sponsor 梧桐车联 Wutong Carlink). The brief: imagine an autonomous vehicle and service platform that fight the 2045 obesity crisis instead of accelerating it. The deliverable is a worldbuilding deck, two AI-filmed character narratives (Simon and Alice), and a video produced through a MidJourney → Runway Gen-2 → human-edit pipeline.",
    type: "Speculative Design · Design Fiction · AI Film",
    year: 2023,
    tags: ["Speculative Design", "Design Fiction", "Future Mobility", "AI Film", "MidJourney", "Runway"],
    featured: true,
    thumbnail: "/work/greenmove/00-cover.png",
    videoUrl: "",
    href: "/work/greenmove",
    caseStudy: {
      role: "Designer · Sichuan Fine Arts Institute × 梧桐车联 (Wutong Carlink)",
      timeline: "Sep–Dec 2023 (Future Mobility studio, taught by 曾真)",
      team:
        "Solo design fiction project produced inside a studio brief co-sponsored by Wutong Carlink, the connected-vehicle platform. Worldbuilding, scenario, persona, AI image generation, AI video generation, and final edit done end-to-end.",
      impact:
        "A self-contained design-fiction package — a future-city worldbuild, two AI-filmed character stories, and a service-platform proposal — that the studio used as a working artefact for discussing how mobility, health, and behavioural economics intersect in an L5 autonomous future.",
      challenge:
        `The studio brief was open-ended: design a future-mobility experience for 2040 and beyond. The constraint that mattered to me was the obesity backdrop. By 2045, the WHO projects over a billion adults affected, and the autonomous-vehicle industry is on a default trajectory of making travel even more sedentary than it already is. The challenge became: design an AV interior that solves a behavioural problem, not just a transport problem.`,
      research:
        `Three observations shaped the brief. First, mobility design after L5 is mostly interior-space design — the car becomes a third space, not a steering experience. Second, carbon and health systems already trade currencies in places like Singapore and Shenzhen, but the credits never sit inside a vehicle UX. Third, AI filmmaking is finally good enough that a single designer can stage a credible future-world narrative in a few weeks — which is the studio brief's real test.`,
      strategy:
        `The proposal collapses three normally separate things into a single in-vehicle service. Green Travel is reframed as EV plus micro-fitness — the commute itself becomes movement, with a deployable Mobile Fitness Space inside the cabin. A blockchain-backed Personal Carbon Account turns the daily commute into earned credits that fund health goals, gym access, or other low-carbon services. An Adaptive AI Guidance layer reads biometric and behavioural signals to surface the next nudge — a posture cue, a route swap, a partner workout — without becoming a wellness scold.`,
      implementation:
        `Worldbuilding was done first, in writing. I used ChatGPT for the obesity-tax policy scenario and for the two-persona structure, then wrote the storyboards by hand. Image generation moved into MidJourney for both characters (Simon, 35, software engineer with a beer belly; Alice, 28, fitness model) and for the city renderings — white, eco, simple, morning-tone keywords carried the look across hundreds of variants. Runway Gen-2 took selected stills into short motion clips. Final cut, voice-over, and editorial pacing were assembled in Premiere as a single linear film, then re-cut into the 30-second portfolio version.`,
      results:
        `A complete speculative-design package: an introduction reel positioning Healmove inside the 2045 obesity scenario, a two-persona narrative film told as parallel stories, a service-platform diagram covering the Personal Carbon Account flow, and a worldbuild deck used in the studio's final review. Adopted by the studio as a working artefact for subsequent discussions of L5 mobility, behavioural design, and AI-assisted production.`,
      lessons:
        `Two ideas carry forward. The first is that speculative design lives or dies on the strength of its characters. Simon and Alice — flawed, recognisable, on opposite ends of a health spectrum — anchor a future world more effectively than any policy diagram could. The second is that an AI film pipeline (MidJourney → Runway → human edit) is now a viable solo workflow for a designer pitching a scenario. It compresses the worldbuilding-to-stakeholders loop from months to weeks, which is exactly the kind of cycle a speculative-design course was designed to teach.`,
      nextSteps:
        `The same character-anchored, AI-filmed pipeline ports directly to product design fiction — sketching a near-future AI agent or interface and stress-testing it against two opposite personas before any UI is built. The Personal Carbon Account thread is a separate provocation worth its own service-design brief.`,
      media: [
        {
          section: "challenge",
          src: "/work/greenmove/01-introduction.jpg",
          caption: "Title board — Healmove, A Journey to Sustainable Health and Mobility. Customized travel experience design built on L5 autonomous driving.",
        },
        {
          section: "strategy",
          src: "/work/greenmove/02-design-concept.jpg",
          caption: "Main concept formula — Green Travel = EV + Micro-fitness. Six design pillars: social engagement, green impact, gamification, mobile fitness space, habit formation, and adaptive AI guidance.",
        },
        {
          section: "research",
          src: "/work/greenmove/03-scenario.jpg",
          caption: "Central theme and strategy — 2045 obesity crisis as backdrop, blockchain-based personal carbon account as the foundational service infrastructure.",
        },
        {
          section: "implementation",
          src: "/work/greenmove/04-world-building.jpg",
          caption: "World building — two personas (Simon, 35-year-old engineer; Alice, 28-year-old fitness model) carrying the parallel narrative through a storytelling table that links cause, process, and effect.",
        },
        {
          section: "implementation",
          src: "/work/greenmove/05-ai-filming.jpg",
          caption: "AI filming workflow — MidJourney for image generation, Runway Gen-2 for video, and human editing to assemble the journey-from-home-to-workspace sequence.",
        },
      ],
    },
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
