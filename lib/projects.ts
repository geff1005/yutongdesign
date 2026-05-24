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
  /** Optional PDF deliverable — typeset case book, exhibition booklet, or
   *  awarded artefact. Rendered as a "Download PDF" chip in the case-study
   *  hero when present. */
  pdfUrl?: string;
  /** Optional honour or recognition — surfaced as a small "Award" eyebrow on
   *  the case-study hero, above the type chip. */
  award?: string;
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
    modelProbe?: {
      title: string;
      src: string;
      poster?: string;
      caption: string;
    };
    designQuestions?: string[];
    keyDecisions?: {
      title: string;
      problem: string;
      decision: string;
      why: string;
      outcome?: string;
    }[];
    /** Images interspersed in the case-study flow.
     *  Each renders below the section it's keyed to. */
    media?: {
      section: 'challenge' | 'research' | 'strategy' | 'implementation' | 'results' | 'lessons' | 'nextSteps';
      src: string;
      kind?: 'image' | 'video';
      poster?: string;
      caption?: string;
      aspectRatio?: '16/9' | '4/3' | '3/4' | '1/1' | '21/9';
    }[];
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "co-cerebral",
    title: "Co Cerebral",
    description:
      "An agent-centric educational system improving learning outcomes for students and teachers, across school orchestration, admissions, and AI literacy infrastructure.",
    researchQuestion:
      "Designing an agent-centric educational system that scaffolds learning, not automates it, across students, teachers, and schools.",
    intro:
      "Co Cerebral is the agent-centric educational system Co AI is building, one multi-agent architecture serving students, teachers, and schools across classroom orchestration, admissions, and AI literacy infrastructure. The first shipped surface, grounded in an 18-month RCA Design Futures thesis on the Six Thinking Hats, is an embodied multi-agent thinker that turns structured reasoning into something a study group dialogues with.",
    type: "Product, Agentic UX, Educational Infrastructure",
    year: 2026,
    tags: ["AI", "Agent", "Education", "Orchestration", "Infrastructure", "Voice"],
    featured: true,
    thumbnail: "/thumbnails/co-cerebral.jpg",
    splineEmbeds: [
      {
        section: "research",
        emphasis: "panoramic",
        url: "https://prod.spline.design/V18jAhOA0xMr5FXB/scene.splinecode",
        caption: "Research flow, how a learner moves through the Six Hats rotation, voice-mediated throughout.",
      },
      {
        section: "results",
        emphasis: "live-demo",
        url: "https://prod.spline.design/pOvUuyOOoI23lcJQ/scene.splinecode",
        caption: "Cerebral Learning embodied demo. Drag to inspect each agent's presence while the product orchestrates specialised LLM agents through voice and text affordances.",
      },
    ],
    href: "/work/co-cerebral",
    caseStudy: {
      role: "Co-Founder & Designer, Co AI",
      timeline: "2025 to present, active build",
      team: "Co AI is the agent-centric education company I co-founded after an 18-month RCA Design Futures thesis. The team builds across product, applied AI, and research. I lead design and the agent UX surface. Foundational research with interdisciplinary student and tutor cohorts at the RCA; ongoing pilot conversations with educators and institutions.",
      impact:
        "Co Cerebral is the agent-centric educational system Co AI is building, three product surfaces (classroom orchestration, admissions, AI literacy infrastructure) bound by a shared multi-agent reasoning core. The first shipped artefact is an embodied Six-Hats thinker that turns structured reasoning into something students and teachers dialogue with, not read about. The architecture extends from there into school-wide orchestration and admissions workflows.",
      challenge:
        `AI in schools today shows up as bolted-on chatbots, fluent at answering, weak at anything else. Three layers stay broken: students get cognitive offloading instead of critical thinking; teachers carry orchestration work that AI could share; schools lack the literacy infrastructure to govern what gets deployed in classrooms.

Co Cerebral was started to design across all three at once, one agent architecture serving learner, educator, and institution, with a research foundation deep enough that the design holds up after the novelty fades.`,
      research:
        `The product sits on top of an 18-month thesis at the RCA Design Futures programme, Reimagining AI as Co-thinker: Shaping Cerebral Life in Higher Education by 2050. Three findings carried into the product:

- Over-reliance on AI undermines human agency, reduces critical thinking, and depresses creativity. The product must scaffold disagreement, not consensus.
- AI is already reshaping teaching roles, ready or not. Teachers need orchestration tools, not more output to grade.
- A personalised, decentralised, privacy-first ecosystem is what closes the digital divide. Cloud-deployable, learner-owned data is a product requirement, not a feature.

Methodology came from Edward de Bono's Six Thinking Hats, White (facts), Red (emotion), Black (critical), Yellow (optimistic), Green (creative), Blue (process), restructured as a multi-agent system where structured cognitive disagreement becomes the design surface, not a bug to smooth over. The research flow embedded above maps how a learner moves through the rotation, voice-mediated throughout.`,
      strategy:
        `Co Cerebral is one agent architecture serving three audiences:

- Students: embodied Six-Hats agents that scaffold critical thinking. Voice-first, structured-not-free-form. Each hat is its own agent with voice, presence, and reasoning style. A study group dialogues with the framework instead of reading about it.
- Teachers: classroom orchestration. The same agents that talk to students surface metacognition signals back to teachers: where a discussion stalled, which hat was missing, which student didn't speak. Less grading, more facilitation.
- Schools: admissions and AI literacy infrastructure. The agent architecture extends into admissions interviews, AI competency assessment, and the literacy onboarding that schools need before any AI tool can be deployed responsibly.

Three product commitments hold across all three surfaces:

- Voice-first, not chat-first. Web Speech API in, synthesis out, the agent speaks back, you don't read.
- Embodied, not disembodied. Each hat has a Spline 3D presence; agents are inhabited, not summoned.
- Structured, not free-form. Six Hats is a constraint that produces better thinking than open-ended chat. The structure IS the feature.`,
      implementation:
        `Shipping today:

- Embodied multi-agent Six-Hats thinker for student cohorts: six distinct agents, voice in and out, Spline 3D presence. The artefact you can drag above.
- Co-Speculation toolkit, for cohorts and educators to co-design how AI shows up in their classroom. Run at the RCA with interdisciplinary students and tutors.

In design and pilot:

- Teacher orchestration dashboard, surfaces metacognition signals from student sessions back to educators.
- Admissions agent pilot, structured interview using the Six-Hats rotation.
- AI literacy curriculum, institutional onboarding for schools deploying AI tools responsibly.

Tech stack:

- Frontend: Next.js 15 with TypeScript and Tailwind
- Spatial interface prototype for the agent room and hat states
- Voice in: Web Speech API (free, browser-native)
- LLM: Vercel AI SDK v5 via AI Gateway
- Voice out: Web Speech Synthesis
- Deploy: Vercel

The stack stays intentionally lean, small enough that the product keeps shipping while educators, peers, and partners can clone and run it.`,
      results:
        `What is live:

- The embodied Six-Hats agent system above: students can dialogue with each hat as a distinct voice and presence.
- Co-Speculation toolkit, run at the RCA with interdisciplinary students and tutors.
- A Roadmap toward Co-Intelligence 2050, the strategic frame that ties the artefact, orchestration, and infrastructure layers together.

For students and teachers, the design intent is concrete: scaffold critical reflection, support collective decision-making, and reduce the documented risks of AI in classrooms: cognitive offloading, automation bias, motivational displacement.

The product direction continues toward real-time multi-agent tutoring, the teacher orchestration surface, and the school-level literacy infrastructure that anchors the larger Co AI build.`,
      lessons:
        `Three carry-forwards:

- Constraints over features. Voice was hard to add but changed the interaction quality more than any feature could. The hardest design decision wasn't what to add. It was choosing modality.
- Embodiment is the contribution, not the LLM. Giving each hat a voice and a body shifted how participants spoke to the system, closer to a panel of distinct minds than a chat with a chatbot. The design intervention sits in that shift, not in the underlying model.
- One architecture, three audiences. The strongest product decision was refusing to ship a 'student tool' and a separate 'teacher tool'. The same agents serve both, with different visibility. That's what turns a study app into infrastructure.`,
      nextSteps:
        `Immediate: cohort testing of the embodied artefact with interdisciplinary student groups using the Six Hats rotation in real coursework. Metacognition signals from the sessions feed the teacher dashboard prototype.

Then: admissions agent pilot with one institution; AI literacy curriculum co-designed with a small school partner; the teacher orchestration dashboard moves from spec to shipped surface.

Longer view: take the agent architecture, embodied, dissent-based, voice-mediated, into other domains where collective reasoning under AI is fragile. Education is the first vertical; the methodology generalises.`,
      media: [
        {
          section: "strategy",
          src: "/work/co-cerebral/strategy/01-learning-transformation-roadmap.jpg",
          caption: "Co-Cerebral Learning Transformation Roadmap, the design framework that maps how learning rituals shift as agentic AI is woven into education.",
        },
        {
          section: "strategy",
          src: "/work/co-cerebral/strategy/05-agents-comparison.jpg",
          caption: "Current vs Future AI agents, a key-dimension comparison: from prompt-and-respond chat tools to agents with memory, role, and embodied presence.",
        },
        {
          section: "strategy",
          src: "/work/co-cerebral/strategy/07-stakeholder-map.jpg",
          caption: "Stakeholder map across Reflection, Assessment, and Administration layers. The AI Co-thinker shows up as a different role at each layer (peer for students, data partner for tutors, governance partner for ethics and policy).",
        },
        {
          section: "strategy",
          src: "/work/co-cerebral/strategy/08-six-agents.jpg",
          caption: "Six co-thinker roles, one per Hat. Facts collects inputs and context, Empathy carries gut feeling and intuition, Innovate thinks past the boundary, Optimise highlights value and benefit, Critic raises judgement and cautions, and Conduct regulates the decision-making flow.",
        },
        {
          section: "results",
          src: "/work/co-cerebral/results/01-four-future-scenarios.jpg",
          caption: "Four plausible 2050 scenarios for AI in education, the futures grid that the embodied Six Hats build is responding to.",
        },
      ],
    },
  },
  {
    slug: "smataste",
    title: "SmaTaste",
    description:
      "An AI-enabled workplace dining service that connects personal taste memory with kitchen demand forecasting through one explainable service loop.",
    researchQuestion:
      "Designing a taste-first canteen service.",
    intro:
      "SmaTaste reframes the workplace canteen as a two-sided service: diners tune a personal Smart Taste Index, while kitchens receive aggregated demand signals for planning, recipes, and procurement.",
    type: "Service Design · HCI Research · AI",
    year: 2025,
    tags: ["Service Design", "AI", "LLM", "HCI", "Real Client", "Pilot"],
    featured: true,
    thumbnail: "/thumbnails/smataste.jpg",
    href: "/work/smataste",
    caseStudy: {
      role: "Service Designer · UX and AI architecture (RCA × Sodexo AiD Lab)",
      timeline: "Jan-Jul 2025 · RCA × Sodexo Studio Project Challenge",
      team: "Interdisciplinary studio collaboration across UX, AI flow, market research, and prototyping. I owned the service logic, Smart Taste Index interface, and AI workflow architecture.",
      impact:
        "An explainable dining loop that turns personal taste signals into kitchen planning tools. Diners can understand and adjust why a meal is recommended; chefs see aggregated flavor demand before menus and procurement decisions are made.",
      challenge:
        `Sodexo asked us, across the RCA × Sodexo AiD Lab studio project, to design an interdisciplinary intervention for food-services digitalisation with implementation in mind for 2–5 years. The brief was wide — deliver a 'top-tier consumer experience' for hybrid-working Gen Z, while addressing social, societal, and environmental impacts.

The useful design question was narrower: how can a canteen remember taste without becoming intrusive, and how can kitchens use that signal without adding more manual work?`,
      research:
        `Two rounds of research, layered:

- Round 1 — 15 in-depth interviews with peers and adjacent users on dietary motivations, decision triggers, and what 'healthy' actually feels like to office workers.
- Round 2 — Sodexo's internal data: interviews their interns had run, plus the company's ongoing customer-habit research, accessed through our partnership.

The unlock came from a single word: spicy. 'Spicy' to a Chinese eater means chili oil — fragrant, layered, warming. 'Spicy' in the UK means peri-peri — fermented, sharp, acidic. Same word, two completely different mouths. If the system can't quantify that, it can't serve any of us.

That insight redirected the project. We had been building toward generic meal-prep — until Gen Z interviewees told us flatly 'meal-prep doesn't taste good.' Taste, not nutrition, became the unlock.`,
      strategy:
        `The build is one platform, two audiences, one feedback loop:

- Kitchen side: Forecast, Generate, Insight. AI Forecast turns historical demand and dietary-trend data into ingredient-consumption forecasts; AI Generation turns flavour signals into recipe drafts the chef can audit and ship.
- Diner side: Recommend, HealthCare, Taste. AI Memory remembers what each diner likes; AI Recommend serves the next meal; AI Suggestion nudges health goals; AI Feedback closes the loop back to the kitchen.
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

Two kitchen-side dashboards:

- Let chef know customer's flavour. Flavor Dietary Trend Report plus AI Recipes Generation: the kitchen sees what the next week's diners want before procurement closes.
- Forecast ingredient consumption. AI Ingredients Forecast: ranked stock list with predicted consumption against last week's mood and weather.

My design ownership:

- Smart Taste Index UI — most of the consumer-facing interface, including the 'why' explanation surface and the dietary health calendar.
- AI flow architecture — defined how the two models talk to each other and to the kitchen. Worked closely with Fangzhou Wu, who owned the information modules and UI implementation.
- Final visual language — converged the team after 3 rounds of clickable-prototype testing with users.

Tools: Figma (UI + clickable prototype), structured AI prompting research, Microsoft Decision-Making expert consultations facilitated by our supervisor Dr. Elif Özden Yenigün.`,
      results:
        `- 15 user interviews + access to Sodexo's internal customer-habit research base
- Full service journey mapped across kitchen, app and dining hall, translated into a Figma system covering 14+ touchpoints
- 3 prototype iterations, each tested clickable with users
- Explainability pattern designed for meal recommendations, taste correction, and kitchen planning
- Kitchen-side dashboard logic translated taste preference into forecast, recipe, and procurement signals`,
      lessons:
        `Three carry-forwards:

- Disagreement was the resource, not the bug. Four professional backgrounds (engineer, user researcher, digital visual, fashion) made our first month frustrating — and our second month productive. The 'spicy' insight wouldn't have surfaced from a homogeneous team.
- Stakeholder access is a design output. Talking to a Sodexo Europe Manager and Sodexo's internal designer changed the brief mid-flight. Designing without speaking to the people who'll inherit the system is a student-project luxury we shouldn't get used to.
- Explainability requires co-ownership. My notebook then: 'Embedding explainability into everyday services requires co-owning metrics with stakeholders, not just optimizing engagement.' That sentence has held up. If the chef doesn't agree with the 'why,' the diner won't either.`,
      nextSteps:
        `If I redesigned this tomorrow, I'd collapse the all-in-one menu. Right now it's structured to be compatible with Sodexo's existing system, which forces every workflow through a tab-style UI. The more intuitive future is to keep only an AI-dialog interface after first-time setup — let the agent understand each diner over time, surface controls only when needed. An AI-native dining companion, not an AI-augmented menu app.

If pilot data surfaces, that's the moment to revisit the agent-vs-menu question with real adoption metrics, not user-test guesses.`,
      media: [
        {
          section: 'challenge',
          src: '/work/smataste/r3/r3-01.jpg',
          caption: 'Smataste concept board — a workplace dining service built around taste memory, recommendation, and kitchen-side planning.',
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
          caption: 'Operations — the dual-loop architecture. Kitchen: Forecast, Generate, Insight. Diner: Recommend, HealthCare, Taste. Smataste AI binds both sides through a shared dataflow and feedback loop.',
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
      "Redesigned SKG+ as an international-facing immersive-studio portfolio, turning service tiles into a categorized, motion-led archive.",
    researchQuestion:
      "How can a local service-led studio site become an international immersive portfolio?",
    intro:
      "SKG+ is an immersive entertainment studio in mainland China. I joined as remote contract Web Designer and reshaped skgplus.cn from a service-led company site into a clearer portfolio system for mapping, exhibitions, cultural heritage, LED installations, and public show work.",
    type: "Web Design · Information Architecture · Motion System",
    year: 2025,
    tags: ["Web Design", "IA", "Visual System", "Real Client", "Motion"],
    featured: true,
    thumbnail: "/thumbnails/skgplus.jpg",
    href: "/work/skgplus",
    caseStudy: {
      role: "Lead Web Designer · contract · remote",
      timeline: "Apr 2025 – Apr 2026 (12 months, ongoing maintenance)",
      team: "Founder + internal content lead + principal creators. I owned visual direction, information architecture, category logic, and interaction planning.",
      impact:
        "Reframed SKG+ from a service-led company homepage into an international-facing immersive-studio portfolio. The redesign translated service tiles and JPG explanations into a clearer project taxonomy, a restrained black visual system, and motion-led portfolio entry points for 170+ works across mapping, exhibitions, cultural heritage, LED installations, and show systems.",
      challenge:
        "The legacy homepage introduced SKG+ through broad service doors — About, Works, Class, Exhibition, Honor, and Find — each sitting inside a heavy dark interface. It communicated company scope, but not project hierarchy: visitors still had to infer what SKG+ actually did, which work matched their needs, and why the studio's visual practice belonged in an international creative-technology context.\n\nThe design challenge was not to 'fix a broken website'. It was to translate a local service catalogue into a sharper portfolio system where the work, categories, and motion language could carry the studio's identity.",
      research:
        "I audited the old homepage, service JPGs, project archive, and peer immersive studios to understand what needed to be preserved and what needed to change.\n\nThree findings shaped the redesign:\n\n- The old navigation was company-facing, not client-facing. Service words described SKG+'s internal structure more than the experiences clients might search for.\n- The project media was already visually intense. Adding more color or decoration would compete with mapping, LED, exhibition, and cultural-heritage imagery.\n- The strongest portfolio story came from taxonomy and motion, not long descriptions. The site needed to let visitors scan discipline, scale, and atmosphere quickly.",
      strategy:
        "The upgrade logic became:\n\n- Internationalize the visual treatment: move from local service-board energy to a quieter, media-led stage.\n- Categorize the archive: turn heterogeneous works into browsable entry points such as Art Direction, 3D Mapping, Immersive Space, Cultural Heritage, LED Installations, and Exhibition Systems.\n- Define a motion language: use reveal states, hover motion, category icons, and showreel-like transitions to express an immersive studio without overexplaining it.\n\nThe design language became black, restrained, and type-led so SKG+'s work could remain the spectacle.",
      implementation:
        "I owned the brand visual system, information architecture, category logic, interaction direction, and ongoing content structure.\n\nThe redesign translated old service modules into portfolio behaviors: service JPGs became section visuals, broad labels became scan-friendly categories, and static project pages became a more modular archive. The interface uses a black stage, high-contrast type, compact category filters, icon/list/grid view states, and large media modules to make the work feel cinematic but still searchable.\n\nA lightweight CMS automation pipeline supports the design system in the background, but the front-end story is intentionally about visual hierarchy, category clarity, and motion rhythm.",
      results:
        "- 170+ works reorganized into a clearer portfolio taxonomy\n- Service-led navigation reframed into client-facing project categories\n- Visual system shifted SKG+ toward a more international immersive-studio language\n- Motion and category logic made mapping, exhibition, cultural heritage, LED installation, and show-system work easier to scan\n- The same structure later supported rapid publishing for campaign and competition microsites",
      lessons:
        "Three things I'd carry forward:\n\n- Founder briefs are hypotheses, not specs. 'Fancy + color-matched' decoded into 'don't look generic.' Restating the brief in design terms saved a week of revisions.\n- Taxonomy is a visual decision. The moment the categories became clear, the portfolio stopped feeling like a folder and started feeling like a studio system.\n- The hardest design choice was about what not to add. Reducing visual fatigue was harder to defend than adding more, but it made the work feel more premium.",
      nextSteps:
        "The next design pass would make the homepage more adaptive: recent works, category motion, and featured show systems could rotate as a living editorial surface rather than a fixed showreel. The larger brand evolution is still local-traditional to international-facing, and the site should keep documenting that transition through visual language rather than extra explanation.",
      media: [
        {
          section: "challenge",
          src: "/work/skgplus/research/skgplus-legacy-service-home.png",
          caption: "Legacy SKG+ homepage before the redesign: a dark service-led entrance where About, Works, Class, Exhibition, Honor, and Find carried the site's main logic. This became the before-state for reframing the studio as an international-facing portfolio.",
        },
        {
          section: "research",
          src: "/work/skgplus/research/skgplus-home-2026.jpg",
          caption: "Live skgplus.cn homepage captured in 2026: the final direction keeps the brand stark and quiet so the studio's show imagery can carry the spectacle.",
        },
        {
          section: "strategy",
          src: "/work/skgplus/research/skgplus-works-2026.jpg",
          caption: "Works archive on the live site: category filters turn heterogeneous public-space projects into a browsable system for clients and collaborators.",
        },
        {
          section: "strategy",
          src: "/work/skgplus/strategy/function-section-draft-planning.jpg",
          caption: "Early section planning: translating old service modules into reusable portfolio sections, category entry points, and media-led project views.",
        },
        {
          section: "implementation",
          src: "/work/skgplus/02-shenzhen-yantian.jpg",
          caption: "Shenzhen Yantian — a 200-million-pixel LED immersive space titled Flash and Shadowless. This kind of work shaped the new visual logic: large media first, interface second.",
        },
        {
          section: "results",
          src: "/work/skgplus/01-berlin-circle.jpg",
          caption: "Berlin Festival of Lights — SKG+ CHINA mapping the Brandenburg Gate with the “CIRCLE” programme. One of the studio's most internationally visible deployments and a piece I helped surface through the rebuilt skgplus.cn archive.",
        },
        {
          section: "results",
          src: "/work/skgplus/03-qingdao-beer-festival.jpg",
          caption: "Qingdao Beer Festival, 34th edition — a mapping show titled Cheers Arrive produced by SKG+. Brand-forward show key visual, surfaced on the studio archive within hours of delivery.",
        },
        {
          section: "results",
          src: "/work/skgplus/04-scfai-museum-yuan-su-iv.jpg",
          caption: "Sichuan Fine Arts Institute Museum Night, Elements IV — annual graduation showcase. The mapped stage is the cover of one of the studio's most heavily visited pages on the new CMS.",
        },
      ],
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

High-fidelity interface: hourly navigation, daily missions, creator profile, AR commission scout, reward levels, on-wall preview. Spatial layers: AR canvas overlays for real walls, viewable on phone or MR headset.

Later MR extension: the platform logic evolved from commissioning and previewing street art into a mixed-reality archive. The follow-up prototype combines 3D Gaussian Splatting, semantic artwork extraction, spatial anchors, and onsite/offsite MR modes so citizens can capture, revisit, and remix street art in its original urban context.`,
      results:
        `A complete service-design platform proposal — UI prototypes, system map, stakeholder map, and mission concept. Featured in Sichuan Fine Arts annual showcase.

The MR follow-up reframes SprayScape as civic digital heritage infrastructure: onsite visitors can archive a wall and replay earlier layers in place; offsite visitors can move from a city-scale discovery map into immersive street-art scenes and remix extracted works as spatial assets.`,
      lessons:
        `Two carry-forwards:

- The right question wasn't 'how do we control graffiti?' but 'how do we negotiate it?'. Designing the platform to give all three stakeholders something to defend turned a moral argument into a coordination problem.
- Spatial computing as context, not spectacle. The MR extension works because it preserves scale, texture, authorship, and location together — not because it simply places graphics on top of the street.`,
      nextSteps:
        `The negotiation pattern generalises to other forms of contested public expression — busking, pop-up performance, political postering. The MR archiving pattern opens a second track: ephemeral urban culture can become a participatory archive when capture, provenance, and spatial replay are simple enough for citizens to use.`,
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
          kind: "video",
          src: "/play/previews/sprayscape-mr-original.mp4",
          poster: "/play/highlights/sprayscape-mr.jpg",
          aspectRatio: "16/9",
          caption: "SprayScape MR — later mixed-reality extension for onsite co-archiving, in-situ time travel, offsite exploration, and remixing of street-art heritage.",
        },
        {
          section: "results",
          src: "/work/sprayscape/results/sprayscape-z-1080p-60-09121727---5-00--e.jpg",
          caption: "On-wall preview, in motion. The phone shows a sanctioned scout overlay; the right frame is a real spray pass on the wall. Leave a trace.",
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
    title: "Poetic Form",
    description:
      "A Human-AI workflow translating Song poetry into ComfyUI-generated, image-to-3D poem sculptures.",
    researchQuestion:
      "How can a poem's mood become a navigable spatial form?",
    intro:
      "AI Creative Technologist · Human-AI Workflow. A compact case on structured prompting, ComfyUI production, image-to-3D reconstruction, and exhibition validation.",
    type: "AI Creative Technologist · Human-AI Workflow",
    year: 2024,
    tags: ["AI Creative Technology", "ComfyUI", "Human-AI Workflow", "AIGC", "Digital Sculpture"],
    featured: true,
    thumbnail: "/thumbnails/poeticform.jpg",
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
      "Production-ready AR effect loops for TikTok and TikTok Lite — short-form camera assets shaped by trend analysis, visual craft, and platform constraints. Two filters drew 10K+ views and were featured on TikTok's Best of the Week.",
    researchQuestion:
      "What makes an AR effect stick — beyond a face filter that fades by Tuesday?",
    intro:
      "Visual Designer at ByteDance (Chongqing). Led custom AR effects — beauty, atmosphere, interaction — designed around DAU trend analysis and shipped through TikTok and TikTok Lite as lightweight creative production assets.",
    type: "AR Creative Production · Effect House · Motion",
    year: 2023,
    tags: ["AR", "TikTok", "Visual Design", "ByteDance", "Motion"],
    featured: true,
    thumbnail: "/work/bytedance/01-hero-football-baby.png",
    videoUrl: "https://vimeo.com/1191365683",
    href: "/work/bytedance",
    caseStudy: {
      role: "Visual Designer · ByteDance · Chongqing",
      timeline: "Oct 2023 – Dec 2023 (TikTok commercial workshop, late 2022 + 2023)",
      team:
        "Solo designer inside the AR effects commercial-workshop pipeline. Three effects produced — Mushroom Eyes, Pearl Glitter, and World Cup Soccer Baby.",
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

- **Mushroom Eyes** — a beauty-adjacent effect that augments the eye region with subtle mushroom motifs. Reads as cute, scales across selfie use cases, low-friction enter.
- **Pearl Glitter** — a pixel-art atmosphere overlay. Treats the whole frame as the canvas, not the face. Aimed at the under-served atmosphere lever.
- **World Cup Soccer Baby** — an interaction-led AR effect timed to the 2022 World Cup. The official Al Rihla 3D ball model in-effect; the user becomes the soccer baby. Timed to the tournament's emotional peak.`,
      implementation:
        `Built in ByteDance's Effect House (.ecpj source project files). Each effect went through the standard ByteDance AR pipeline: prototype → internal review → DAU pilot → published filter on TikTok / TikTok Lite store. Texture work for the World Cup ball used the official Al Rihla colour, normal, roughness, and metallic maps.

Source files preserved from the commercial workshop project files, including the World Cup model bundle. Workshop screen recording from the Oct 19 2022 commercial workshop captured the full creation flow.`,
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
          caption: "Clean portfolio rebuild of the AR effect loop: character, camera preview, and lightweight status UI without third-party stock-watermark sources.",
        },
        {
          section: "research",
          src: "/work/bytedance/03-basketball-render.jpg",
          caption: "Original replacement for the early basketball concept, showing how object motion and camera framing could extend the effect beyond face filters.",
        },
      ],
    },
  },
  {
    slug: "lantern-festival",
    title: "Guizhou Lantern Festival GenAI Promo",
    description:
      "An early-state GenAI commercial video workflow for a large-scale lantern-festival campaign, using festival references, Runway Gen-2, Luma-style image-to-video thinking, upscaling, and editorial curation to build a cinematic promotional shot bank.",
    researchQuestion:
      "How can static festival references become cinematic commercial motion while preserving cultural specificity?",
    intro:
      "A commercial GenAI video experiment for a Guizhou lantern-festival campaign. I curated real lantern-festival references, generated and animated shot variations with early image-to-video tools, cleaned selected outputs, and edited a short promotional reel from unstable 3-4 second clips.",
    type: "GenAI Commercial Video · Runway · AI Art Direction",
    year: 2024,
    tags: ["GenAI Video", "Runway", "Commercial", "Art Direction", "AI Workflow"],
    featured: false,
    thumbnail: "/thumbnails/lantern-festival.jpg",
    href: "/work/lantern-festival",
    caseStudy: {
      role: "GenAI Creative Technologist · AI motion designer",
      timeline: "Apr 2024 · Commercial lantern-festival promo experiment",
      team:
        "Solo AI workflow and edit direction using client/reference lantern-festival material, Runway Gen-2 style image-to-video generation, Luma-style motion exploration, image upscaling, and human editorial curation.",
      impact:
        "Built an early-state AI video production workflow for a commercial lantern-festival campaign, turning static festival references into a curated bank of cinematic motion shots. The work is intentionally documented as an early GenAI video project: useful for speed, mood, and shot exploration, but still dependent on human selection to manage temporal instability, cultural specificity, and visual consistency.",
      challenge:
        "The brief was not to make a generic fantasy lantern video. Guizhou's lantern-festival context required spectacle, local atmosphere, night-time density, and cultural specificity. Traditional production would require hard-to-stage drone shots, crowd control, lighting access, and repeatable night scenes. The design challenge was to use early image-to-video tools to expand static references into promotional motion without losing the visual anchor of the real festival.",
      research:
        "I started by curating the source world: large-scale lantern installations, illuminated gates, dragon forms, stage moments, visitors, and festival corridors. The reference set made the project less prompt-driven and more art-directed. The important discovery was that early GenAI video tools were strongest when treated as a shot-exploration engine, not a final-film generator. Some clips produced strong mood and camera motion; others failed through warped figures, unstable text, or inconsistent spatial logic.",
      strategy:
        "The strategy was to build a controlled shot bank. Instead of asking the model to generate a full commercial film, I broke the campaign into repeatable motion types: fly-through, lantern close-up, dragon reveal, crowd atmosphere, gate approach, and character movement. Each shot could be generated, upscaled, compared, and either accepted or discarded. This gave the workflow a commercial logic: many short attempts, strict curation, and a final edit that only uses the shots that hold together.",
      implementation:
        "The pipeline combined source curation, prompt direction, image-to-video generation, upscaling, and editorial selection. Runway handled much of the image-conditioned motion testing; Luma-style generation logic informed camera-movement experiments; upscaling tools improved selected frames and clips for presentation. I then cut the usable 3-4 second outputs into a short web reel, keeping the work transparent as an early-state video-generation project rather than pretending the model produced a finished advertisement in one pass.",
      results:
        "The outcome is a compact commercial GenAI reel and a reusable method: reference-led generation, motion-type batching, visual QA, upscaling, and human edit direction. For a hiring manager, the value is the workflow: I can translate creative intent into controllable GenAI production steps, make judgement calls under tool instability, and turn experimental outputs into a client-facing visual direction.",
      lessons:
        "The strongest lesson was that early video generation rewards editorial discipline. The designer's job is not only prompting; it is deciding what the model should never be asked to solve, which references must stay visible, and when an uncanny artifact breaks the commercial promise.",
      designQuestions: [
        "How might AI expand static lantern-festival references into cinematic commercial shots without becoming generic fantasy imagery?",
        "How can a designer turn unstable 3-4 second GenAI clips into a coherent promotional direction?",
      ],
      keyDecisions: [
        {
          title: "Use real festival material as the visual anchor",
          problem:
            "Pure text-to-video outputs drifted toward generic fantasy scenes and lost the specificity of the lantern-festival context.",
          decision:
            "I curated real installation, stage, corridor, dragon, and night-market references before generating motion variations.",
          why:
            "The references constrained the model and gave the final reel a clearer relationship to a real commercial brief.",
          outcome:
            "The project reads as a campaign workflow rather than an isolated AI experiment.",
        },
        {
          title: "Treat AI video as a shot bank, not a final editor",
          problem:
            "Early image-to-video tools were unstable in character continuity, text rendering, and spatial logic.",
          decision:
            "I generated many short clips by motion type, then selected, upscaled, and cut only the usable outputs.",
          why:
            "This preserves speed and exploration while keeping human judgement responsible for quality and coherence.",
          outcome:
            "The workflow produced a compact promotional reel and a repeatable commercial GenAI production method.",
        },
      ],
      media: [
        {
          section: "implementation",
          src: "/work/lantern-festival/preview.mp4",
          kind: "video",
          poster: "/work/lantern-festival/hero.jpg",
          caption:
            "Edited web reel from selected Runway / image-to-video lantern-festival clips. The reel uses generated shots as a curated commercial shot bank, not as an unfiltered model output.",
          aspectRatio: "16/9",
        },
        {
          section: "results",
          src: "/work/lantern-festival/hero.jpg",
          caption:
            "Selected frame from the generated promotional shot bank, balancing spectacle, lantern architecture, and campaign readability.",
          aspectRatio: "4/3",
        },
      ],
    },
  },
  {
    slug: "greenmove",
    title: "Healmove",
    description:
      "Best Sustainable Design Award. A 2023 future-mobility design fiction built through an early GenAI content pipeline: ChatGPT for scenario logic, MidJourney for shot generation, Runway Gen-1 for image-conditioned motion, and Premiere for final craft.",
    researchQuestion:
      "By 2045, can the car become a third space for health rather than a fourth source of sedentary time?",
    intro:
      "GreenMove is a future-mobility design fiction produced during the SCFAI × Wutong Carlink joint course in Sep–Dec 2023 — and the work that won the course's Best Sustainable Design Award. The film was made with a controlled GenAI production workflow before the modern text-to-video wave: strategy and script, AI shot generation, Runway Gen-1 motion, and human edit/art direction.",
    type: "GenAI Content Production · Runway Gen-1 · Future Mobility",
    year: 2023,
    tags: ["Content Creation", "Runway Gen-1", "Future Mobility", "Sustainable Design", "MidJourney", "Wutong Carlink"],
    featured: true,
    thumbnail: "/work/greenmove/00-cover.png",
    videoUrl: "https://vimeo.com/1191365682",
    pdfUrl: "/work/greenmove/Healmove-EN.pdf",
    award: "Best Sustainable Design Award · SCFAI × Wutong Carlink · 2024",
    href: "/work/greenmove",
    caseStudy: {
      role: "Solo designer — concept, AI content pipeline, storyboard, edit, typeset",
      timeline: "Sep–Dec 2023 · SCFAI × Wutong Carlink future-mobility joint course",
      team:
        "Solo project inside a joint enterprise course between Sichuan Fine Arts Institute's Design Academy and Wutong Carlink, Tencent's connected-vehicle platform. Industry leads at Wutong Carlink and SCFAI faculty co-evaluated the final submissions.",
      impact:
        "Best Sustainable Design Award winner — judged by industry leads at Wutong Carlink and the SCFAI design faculty. The project then anchored my 2024 Outstanding Graduate and UniSea Group Scholarship supporting portfolios.",
      challenge:
        `An open brief from Wutong Carlink: design a 2040+ future-mobility experience. The constraint I chose was the WHO's obesity projection — over one billion adults affected by 2045 — and the default L5 trajectory of making travel even more sedentary than it already is. The design problem became how to re-architect the cabin as a third space for health.`,
      strategy:
        `The proposal collapses three systems into one in-vehicle service. Green Travel becomes EV plus micro-fitness, with a deployable Mobile Fitness Space inside the cabin. A blockchain-backed Personal Carbon Account turns each commute into earned credits that fund health goals or low-carbon services. An Adaptive AI Guidance layer reads biometric and behavioural signals to surface one nudge at a time — without becoming a wellness scold.`,
      implementation:
        `Three-week solo content-creation pipeline, run pre-mainstream-AI. ChatGPT drafted the obesity-tax policy scenario and the two persona arcs (Simon, 35, an engineer with a beer belly; Alice, 28, a fitness model). MidJourney generated the city, the characters, and roughly 80 percent of the shot list. Runway Gen-1 — image-conditioned video-to-video, the early-2023 model that pre-dated today's text-to-video wave — animated selected stills into short clips. Premiere assembled the final 1m20s reel.`,
      results:
        `Best Sustainable Design Award. Deliverables: a five-page typeset English case book (linked above), a 1m20s AI-filmed reel built with Runway Gen-1, a worldbuild deck, and a service-platform diagram for the Personal Carbon Account flow. The project was subsequently featured in the supporting portfolios for two 2024 award applications — Outstanding Graduate (Municipal / School level) and UniSea Group Scholarship.`,
      media: [
        {
          section: "challenge",
          src: "/work/greenmove/01-introduction.jpg",
          caption: "Cover board — Healmove, A Journey to Sustainable Health and Mobility. Customized travel experience design on top of L5 autonomous driving.",
        },
        {
          section: "strategy",
          src: "/work/greenmove/02-design-concept.jpg",
          caption: "Main concept — Green Travel = EV + Micro-fitness. Six design pillars wrap three system levers: immersive fitness, a personal carbon tracker, and adaptive AI guidance.",
        },
        {
          section: "strategy",
          src: "/work/greenmove/03-scenario.jpg",
          caption: "Central theme — 2045 obesity crisis as backdrop, blockchain-based Personal Carbon Account as the foundational service infrastructure.",
        },
        {
          section: "implementation",
          src: "/work/greenmove/04-world-building.jpg",
          caption: "World building — two personas (Simon, the 35-year-old engineer; Alice, the 28-year-old fitness model) carrying a parallel storytelling structure.",
        },
        {
          section: "implementation",
          src: "/work/greenmove/05-ai-filming.jpg",
          caption: "Pre-mainstream-AI content pipeline — MidJourney for stills, Runway Gen-1 for image-conditioned motion, human edit on top.",
        },
        {
          section: "results",
          src: "/work/greenmove/06-award-certificate.jpg",
          caption: "Best Sustainable Design Award certificate — 2024 SCFAI × Wutong Carlink future-mobility joint course.",
        },
      ],
    },
  },
];

// Featured 8 for the home Selected Works (BS Products-style 2-col grid).
// Each card slot maps to one project; uniform sizes; the SelectedWorks
// component now renders these as 2-col cards with title + "View case ↗" +
// tagline + thumbnail/GIF. Easy to expand to 10–12 later — just append.
// PD-track ordering: real-client AI first, then agentic builds, then HMI/UX,
// then speculative + spatial, then communication design.
export const SELECTED_FEATURED = [
  PROJECTS.find((p) => p.slug === "smataste")!,
  PROJECTS.find((p) => p.slug === "co-cerebral")!,
  PROJECTS.find((p) => p.slug === "skgplus")!,
  PROJECTS.find((p) => p.slug === "poeticform")!,
  PROJECTS.find((p) => p.slug === "greenmove")!,
  PROJECTS.find((p) => p.slug === "syncoe")!,
  PROJECTS.find((p) => p.slug === "meta-station")!,
  PROJECTS.find((p) => p.slug === "bytedance")!,
];

// Explorations (Tier B / lighter projects) — 6 cards for the parallax section
export const EXPLORATIONS = [
  PROJECTS.find((p) => p.slug === "beatrol")!,
  PROJECTS.find((p) => p.slug === "botanictrum")!,
  PROJECTS.find((p) => p.slug === "lunacy")!,
  PROJECTS.find((p) => p.slug === "meta-station")!,
  PROJECTS.find((p) => p.slug === "neon-nike")!,
  PROJECTS.find((p) => p.slug === "wildfire-whispers")!,
];
