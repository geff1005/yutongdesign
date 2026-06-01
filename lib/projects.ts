export type Project = {
  slug: string;
  title: string;
  cardHeadline?: string;
  description: string;
  researchQuestion?: string;
  intro?: string;
  type?: string;
  year: number;
  tags: string[];
  featured: boolean;
  thumbnail: string;
  videoUrl?: string;
  pdfUrl?: string;
  award?: string;
  splineEmbeds?: { url: string; caption?: string; section?: 'research' | 'strategy' | 'implementation' | 'results'; emphasis?: 'live-demo' | 'panoramic' }[];
  figmaEmbeds?: { url: string; caption?: string; viewport: 'mobile' | 'desktop'; audience?: 'diner' | 'kitchen' | 'general' }[];
  href: string;
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
    "slug": "co-cerebral",
    "title": "Co Cerebral",
    "cardHeadline": "Making AI reasoning visible before answers",
    "description": "An agentic learning prototype that turns Six Thinking Hats into multi-agent roles for group reasoning, tutor orchestration, and AI literacy.",
    "researchQuestion": "Designing AI learning tools that make reasoning visible.",
    "intro": "Co Cerebral translates an RCA Design Futures thesis into an agentic learning product. Six Thinking Hats become distinct AI roles so a study group can hear evidence, emotion, critique, optimism, creativity, and process control as separate voices.",
    "type": "Product, Agentic UX, Education",
    "year": 2026,
    "tags": [
      "AI",
      "Agent",
      "Education",
      "Orchestration",
      "Infrastructure",
      "Voice"
    ],
    "featured": true,
    "thumbnail": "/thumbnails/co-cerebral.jpg",
    "splineEmbeds": [
      {
        "section": "research",
        "emphasis": "panoramic",
        "url": "https://prod.spline.design/V18jAhOA0xMr5FXB/scene.splinecode",
        "caption": "Research flow, how a learner moves through the Six Hats rotation, voice-mediated throughout."
      },
      {
        "section": "results",
        "emphasis": "live-demo",
        "url": "https://prod.spline.design/pOvUuyOOoI23lcJQ/scene.splinecode",
        "caption": "Cerebral Learning embodied demo. Drag to inspect each agent's presence while the product orchestrates specialised LLM agents through voice and text affordances."
      }
    ],
    "href": "/work/co-cerebral",
    "caseStudy": {
      "role": "Co-Founder and Designer, Bold Ideas Lab",
      "timeline": "2025 to present, active product build",
      "team": "Sole research and design lead for the RCA thesis prototype, now translated into a Bold Ideas Lab product direction with educator feedback and ongoing pilot conversations.",
      "impact": "Built a working agentic learning prototype that turns a Design Futures thesis into a product direction for AI-supported group reasoning. The strongest outcome is a clear interaction model: students do not receive one polished answer, they compare distinct reasoning roles and discuss how the answer is formed.",
      "challenge": "In the era of AI, students can use AI to bypass the thinking process instead of developing it. Open chat can make an answer look complete before the group has questioned evidence, emotion, risk, optimism, or alternatives.\n\nCo Cerebral frames that problem as an interface challenge: how can AI make thinking visible enough for students and teachers to discuss it, instead of hiding the process behind one fluent response?",
      "research": "The project came from an 18-month RCA Design Futures thesis on AI in higher education. I used horizon scanning, stakeholder mapping, scenario building, co-speculation with students and tutors, and Six Thinking Hats as the reasoning method.\n\nThe key hypothesis was that a constrained agent system could make group thinking more visible than open chat. The research pointed to three needs: students need cognitive scaffolding, tutors need orchestration support, and institutions need AI literacy practices they can explain.",
      "strategy": "I kept the product deliberately structured. Six roles became the core interface: facts, emotion, critique, optimism, creativity, and process control.\n\nThat structure does two jobs. It gives each AI agent a clear responsibility, and it helps the group see when they are exploring evidence, risk, emotion, or synthesis.",
      "implementation": "The prototype combines voice interaction, agent roles, and embodied visual presence. Voice makes the system feel like a group dialogue; separate agents prevent every response from sounding like the same assistant.\n\nThe build remains transparent as a learning prototype: the point is to test the reasoning ritual and interface model before scaling it into wider school workflows.",
      "results": "The project produced a working agentic learning prototype, a research thesis, scenario materials, stakeholder maps, and a clear product thesis for Bold Ideas Lab. RCA press selected Julian as a strong spokesperson for AI in creative education partly because of this research direction.",
      "lessons": "The most valuable AI interface was not the most open one. A useful constraint can protect human authorship because it gives learners a structure for questioning, comparing, and deciding.",
      "nextSteps": "The next validation step is to test the six-role flow with a real study group and compare whether students produce more balanced reasoning than they do with open chat. A second track is teacher-facing orchestration: what signals help educators support discussion without turning learning into surveillance?",
      "media": [
        {
          "section": "challenge",
          "src": "/work/co-cerebral/challenge/problem-framing.jpg",
          "caption": "Problem framing slide from the RCA thesis process. The case starts from critical-thinking erosion and creativity suppression in AI-assisted collaborative learning.",
          "aspectRatio": "16/9"
        },
        {
          "section": "research",
          "src": "/work/co-cerebral/results/01-four-future-scenarios.jpg",
          "caption": "Four plausible 2050 scenarios for AI in education, a focused futures grid that turns the research flow into concrete learning contexts."
        },
        {
          "section": "strategy",
          "src": "/work/co-cerebral/strategy/08-six-agents.jpg",
          "caption": "Six co-thinker roles, one per Hat. The role system is the product core: each agent owns a distinct reasoning behavior inside the collaborative learning loop."
        },
        {
          "section": "strategy",
          "src": "/work/co-cerebral/strategy/07-stakeholder-map.jpg",
          "caption": "Stakeholder map across Reflection, Assessment, and Administration layers, showing where the product enters the education system and how each group uses it differently."
        },
        {
          "section": "strategy",
          "src": "/work/co-cerebral/strategy/05-agents-comparison.jpg",
          "caption": "Current versus future AI agents, a dimension comparison that defines what changes when agents gain memory, role, and embodied presence."
        },
        {
          "section": "strategy",
          "src": "/work/co-cerebral/strategy/01-learning-transformation-roadmap.jpg",
          "caption": "Learning transformation roadmap, placed after the role and stakeholder logic to show how the concept scales from a learning ritual into a transition path."
        }
      ],
      "designQuestions": [
        "How might AI make the thinking process visible in group learning?"
      ],
      "keyDecisions": [
        {
          "title": "Turn Six Hats into the product constraint",
          "problem": "Open-ended chat made the tutor feel smart, but it did not reliably make the learner think in different modes.",
          "decision": "I treated the Six Thinking Hats as the interaction model: each agent owns one cognitive mode, one voice, and one turn-taking behavior.",
          "why": "The framework gives AI a legible job. It prevents the system from collapsing into a single answer and lets the group compare evidence, emotion, risk, optimism, creativity, and synthesis.",
          "outcome": "The prototype, thesis materials, and tutor-facing scenarios all center on visible reasoning roles rather than final-answer generation."
        },
        {
          "title": "Make reasoning embodied, not invisible",
          "problem": "Learners could not tell which perspective was speaking when all guidance arrived as the same text interface.",
          "decision": "I paired voice input and speech output with distinct agent presences and visual states for each reasoning role.",
          "why": "Embodiment helps students remember that they are moving through a structured thinking process, not simply prompting a chatbot.",
          "outcome": "The demo gives tutors and students a concrete interface language for discussing multi-agent learning."
        }
      ]
    }
  },
  {
    "slug": "smataste",
    "title": "SmaTaste",
    "cardHeadline": "Making workplace lunch remember personal taste",
    "description": "An AI-enabled workplace dining service that connects personal taste memory with kitchen demand forecasting through one explainable service loop.",
    "researchQuestion": "Designing a taste-first canteen service.",
    "intro": "SmaTaste reframes the workplace canteen as a two-sided service: diners tune a personal Smart Taste Index, while kitchens receive aggregated demand signals for planning, recipes, and procurement.",
    "type": "Service Design, Product UX, AI",
    "year": 2025,
    "tags": [
      "Service Design",
      "AI",
      "LLM",
      "HCI",
      "Real Client",
      "Pilot"
    ],
    "featured": true,
    "thumbnail": "/thumbnails/smataste.jpg",
    "href": "/work/smataste",
    "caseStudy": {
      "role": "Service and Product Designer, UX and AI architecture, RCA and Sodexo AiD Lab",
      "timeline": "Jan to Jul 2025, RCA and Sodexo studio project",
      "team": "Interdisciplinary studio team. I owned the Smart Taste Index interface, service logic, AI workflow architecture, and final visual language.",
      "impact": "A two-sided workplace dining service for Sodexo: diners get an explainable preference memory, while kitchens receive aggregated demand signals for menu planning, recipe generation, and procurement.",
      "challenge": "Sodexo asked us, through the RCA and Sodexo AiD Lab studio project, to design an interdisciplinary intervention for food service digitalisation with implementation in mind for the next 2 to 5 years. The brief was wide: deliver a top-tier consumer experience for hybrid-working Gen Z, while addressing social, societal, and environmental impacts.\n\nThe useful design question was narrower: how can a canteen remember taste without becoming intrusive, and how can kitchens use that signal without adding more manual work?",
      "research": "The team ran 15 user interviews, reviewed comparable healthy food services, studied Sodexo internal customer-habit research, and tested recommendation logic through prototypes.\n\nOne insight redirected the project: users did not reject healthy food, they rejected food that felt generic or untasty. The word spicy became a useful proof point because it means different sensory experiences across cultures. That supported the hypothesis that taste needs to be modelled as personal and contextual, not as a flat menu label.",
      "strategy": "I split the system into two linked loops. The diner loop stores preference, explains recommendations, and lets people correct the Smart Taste Index. The kitchen loop translates aggregated patterns into ingredient forecasts, recipe suggestions, and flavour trend reports.\n\nThis kept the AI valuable for both sides: diners receive agency and relevance; kitchens receive planning confidence without reading private profiles.",
      "implementation": "I designed the Smart Taste Index screens, recommendation explanation moments, dietary calendar, AI ordering flow, and kitchen-side dashboard logic. The prototype connected mobile setup, conversational ordering, meal feedback, flavour trends, ingredient forecasting, and recipe generation into one service journey.\n\nThe work stayed compatible with Sodexo's operational context, but the interaction goal was to make the recommendation reason visible enough for a diner and chef to challenge it.",
      "results": "The case evidence includes 15 interviews, access to Sodexo internal research, 3 clickable prototype iterations, B2C and B2B touchpoints, a full service journey across app, dining hall, and kitchen, and external RCA recognition as 3rd Prize in the Sodexo studio challenge.",
      "lessons": "The strongest design move was treating explainability as a service contract. If the chef cannot understand the recommendation logic, the diner will not trust it either.",
      "nextSteps": "If pilot data becomes available, the next question is whether the menu-heavy interface should collapse into a more AI-native dining companion after first-time setup.",
      "media": [
        {
          "section": "challenge",
          "src": "/work/smataste/r3/r3-01.jpg",
          "caption": "Smataste concept board. The first image introduces the product as a workplace dining service built around taste memory, recommendation, and kitchen planning."
        },
        {
          "section": "research",
          "src": "/work/smataste/r3/r3-02.jpg",
          "caption": "Workplace dining problem. Diners expect meals that are healthy, fun, fast, and tasty, while Sodexo needs clearer signals for diverse needs and procurement planning."
        },
        {
          "section": "strategy",
          "src": "/work/smataste/r3/r3-03.jpg",
          "caption": "Strategy board. Smart Taste Index, Workspace Dietary Trend, and Personalized Dining connect consumer food care with Sodexo operations through one shared service loop."
        },
        {
          "section": "strategy",
          "src": "/work/smataste/r3/r3-09.jpg",
          "caption": "Operations diagram. Kitchen forecasting and recipe generation connect with diner recommendation, health goals, and taste feedback through one AI service loop."
        },
        {
          "section": "implementation",
          "src": "/work/smataste/r3/r3-04.jpg",
          "caption": "Service tracks. Basic and Premier tiers keep the proposal compatible with existing catering routines while leaving room for personalization."
        },
        {
          "section": "implementation",
          "src": "/work/smataste/r3/r3-06.jpg",
          "caption": "Interactive ordering. Conversational meal selection helps the diner understand the recommendation before joining the lunch line."
        },
        {
          "section": "implementation",
          "src": "/work/smataste/r3/r3-08.jpg",
          "caption": "Community and kitchen dashboards. Diner feedback becomes a flavour signal for chefs, closing the loop between personal memory and kitchen planning."
        }
      ],
      "designQuestions": [
        "How might a workplace dining service remember taste without feeling intrusive?"
      ],
      "keyDecisions": [
        {
          "title": "Split the system into diner memory and kitchen signal",
          "problem": "A single AI recommendation layer helped diners but did not solve the kitchen team's uncertainty around demand, waste, and prep.",
          "decision": "I designed two paired AI models: a personal taste memory for diners and an aggregated taste-prediction signal for chefs.",
          "why": "The split respects two different users. Diners need agency and relevance; kitchens need planning confidence, not individual surveillance.",
          "outcome": "the prototype links mobile preference setup, meal recommendation, kitchen dashboard, forecasting, and recipe generation in one service loop."
        },
        {
          "title": "Expose the Taste Index as a trust surface",
          "problem": "If AI silently changes meal options, diners have little reason to trust or correct the system.",
          "decision": "I made the Smart Taste Index visible and adjustable through lightweight mobile moments and kitchen-side summaries.",
          "why": "A visible index turns prediction into a conversation: diners can understand what the system thinks it knows, and kitchens can see patterns without reading private profiles.",
          "outcome": "the Smart Taste Index appears in both diner-facing recommendation moments and kitchen-side summaries, making the AI logic reviewable."
        }
      ]
    }
  },
  {
    "slug": "skgplus",
    "title": "SKG+",
    "cardHeadline": "International portfolio taxonomy",
    "description": "A real-client website redesign that turned SKG+ from static service tiles into an international portfolio taxonomy, motion system, and maintainable archive.",
    "researchQuestion": "How can a local service-led studio site become an international immersive portfolio?",
    "intro": "SKG+ is an immersive entertainment studio in mainland China. I joined as remote contract Web Designer and reshaped skgplus.cn from a service-led company site into a clearer portfolio system for mapping, exhibitions, cultural heritage, LED installations, and public show work.",
    "type": "Web Design, IA, Motion System",
    "year": 2025,
    "tags": [
      "Web Design",
      "IA",
      "Visual System",
      "Real Client",
      "Motion"
    ],
    "featured": true,
    "thumbnail": "/thumbnails/skgplus.jpg",
    "href": "/work/skgplus",
    "caseStudy": {
      "role": "Web Designer, contract and remote",
      "timeline": "2025 to 2026, shipped client website and ongoing maintenance",
      "team": "Worked with the founder, internal content lead, and principal creators. I owned visual direction, information architecture, category logic, interaction planning, and publishing workflow design.",
      "impact": "Reframed SKG+ from a service-led studio site into an international-facing immersive portfolio. The work turned a static services grid into a clearer taxonomy, restrained visual language, and motion-led archive for more than 170 works.",
      "challenge": "SKG+ had a rich body of projection mapping, exhibitions, cultural heritage, LED, and show work, but the old site made visitors decode the studio through broad service labels and dense visual presentation.\n\nThe design problem was not to make the site louder. It was to make the studio easier to understand internationally while letting the work remain the spectacle.",
      "research": "I mapped the content operation with the founder and internal content team, then audited how the archive needed to support media-heavy projects, frequent updates, and different client audiences.\n\nThe hypothesis was that a quieter frame and category-first structure would improve scanning more than another immersive visual layer. The site's job became selection and orientation, not decoration.",
      "strategy": "I organized the archive around project categories and reusable content patterns. Mapping, exhibitions, cultural heritage, LED work, and immersive spaces became browsing logic rather than background copy.\n\nThe visual system stayed restrained because SKG+'s project media is already high-saturation and motion-heavy. The interface should create rhythm, hierarchy, and trust.",
      "implementation": "I designed the site information architecture, category logic, visual direction, motion cues, and maintainable publishing workflow. The same system then helped the team ship a related mapping contest site under a compressed timeline.\n\nThe key implementation decision was to treat content operations as part of UX: project data, media hosting, filtering, and responsive presentation all had to work for maintainers, not only visitors.",
      "results": "The public evidence is a shipped client website, a scalable archive for more than 170 works, and an adjacent competition site launched quickly from the same system logic. The case shows client delivery, IA, motion direction, and maintainable web design under real constraints.",
      "lessons": "A client site can fail even when it looks impressive if the team cannot maintain it. The strongest design decision was reducing visual noise so the work, taxonomy, and publishing workflow could carry the experience.",
      "nextSteps": "The next useful improvement is stronger public documentation of the publishing workflow, with a clean pipeline diagram and fresh live-site screenshots for desktop and mobile.",
      "media": [
        {
          "section": "challenge",
          "src": "/work/skgplus/research/skgplus-legacy-service-home.png",
          "caption": "Legacy SKG+ homepage before the redesign: a dark service-led entrance where About, Works, Class, Exhibition, Honor, and Find carried the site's main logic. This became the before-state for reframing the studio as an international-facing portfolio."
        },
        {
          "section": "research",
          "src": "/work/skgplus/research/skgplus-home-2026.jpg",
          "caption": "Live skgplus.cn homepage captured in 2026: the final direction keeps the brand stark and quiet so the studio's show imagery can carry the spectacle."
        },
        {
          "section": "strategy",
          "src": "/work/skgplus/research/skgplus-works-2026.jpg",
          "caption": "Works archive on the live site: category filters turn heterogeneous public-space projects into a browsable system for clients and collaborators."
        },
        {
          "section": "strategy",
          "src": "/work/skgplus/strategy/function-section-draft-planning.jpg",
          "caption": "Early section planning: translating old service modules into reusable portfolio sections, category entry points, and media-led project views."
        },
        {
          "section": "implementation",
          "src": "/work/skgplus/02-shenzhen-yantian.jpg",
          "caption": "Shenzhen Yantian. A 200-million-pixel LED immersive space shaped the new visual logic: large media first, interface second."
        },
        {
          "section": "results",
          "src": "/work/skgplus/01-berlin-circle.jpg",
          "caption": "Berlin Festival of Lights. SKG+ CHINA mapped the Brandenburg Gate with the CIRCLE programme, so the rebuilt archive needed to surface international work quickly."
        },
        {
          "section": "results",
          "src": "/work/skgplus/03-qingdao-beer-festival.jpg",
          "caption": "Qingdao Beer Festival, 34th edition. A brand-forward mapping show that demonstrates why the site needed fast publishing and strong media hierarchy."
        },
        {
          "section": "results",
          "src": "/work/skgplus/04-scfai-museum-yuan-su-iv.jpg",
          "caption": "Sichuan Fine Arts Institute Museum Night, Elements IV. The mapped stage became a high-traffic archive entry, so the template had to support strong cover imagery."
        }
      ],
      "designQuestions": [
        "How can a service-led studio site become an international-facing portfolio that is cinematic, categorized, and easy to scan?"
      ],
      "keyDecisions": [
        {
          "title": "Service tiles to portfolio taxonomy",
          "problem": "The old site explained SKG+ through broad service doors, but visitors still had to decode what kind of creative work the studio actually made.",
          "decision": "I rebuilt the archive around project categories such as mapping, exhibitions, cultural heritage, LED installations, and immersive spaces.",
          "why": "Category-first browsing lets international clients scan by experience type, scale, and atmosphere.",
          "outcome": "the new archive foregrounds project categories and more than 170 works instead of asking visitors to start from generic service doors."
        },
        {
          "title": "Motion as category language",
          "problem": "Static JPG explanations could not express the timing and scale of projection mapping, LED work, or exhibition systems.",
          "decision": "I paired a restrained international frame with compact icons, hover states, and showreel-like motion cues.",
          "why": "The quiet frame lets the media carry the spectacle while motion explains the temporal nature of the work.",
          "outcome": "restrained framing, compact icons, hover states, and showreel cues let the project media carry spectacle while visitors keep orientation."
        }
      ]
    }
  },
  {
    "slug": "syncoe",
    "title": "Synco-E",
    "cardHeadline": "BCI training companion",
    "description": "Next generation BCI Device for Esports Training",
    "researchQuestion": "How will brain-computer interfaces shape our brains in the future?",
    "intro": "A speculative BCI device for pro-esports training. Designed to make the cognitive layer. the part traditional training treats as invisible. visible to coach and player in real time.",
    "type": "Innovation Product Design · UX · HCI",
    "year": 2024,
    "tags": [
      "Industrial Design",
      "BCI",
      "HCI",
      "Speculative"
    ],
    "featured": true,
    "thumbnail": "https://framerusercontent.com/images/ItIE3LjjpIh7r6cbWRLgv0KD41A.png",
    "videoUrl": "",
    "href": "/work/syncoe",
    "caseStudy": {
      "role": "Solo design lead · Sichuan Fine Arts BA Digital Media graduation track",
      "timeline": "2023 to 2024 graduation thesis (~16 weeks)",
      "team": "Solo project, supervised. Field research with the A1 E-Sports team in Hangzhou (9 positions, 64 shortlisted candidates, average retirement age 24, ~100,000 youth-camp participants nationally). 45-player survey across psychological pressure, age, and stress dimensions.",
      "impact": "A speculative BCI device that asks whether the next generation of competitive players should be measured by their EEG response curves the way runners are measured by their heart-rate zones. Designed to make mental fortitude. the layer esports training treats as invisible. visible to coaches and players in real time.",
      "challenge": "China's pro-esports pipeline is expanding faster than its mental-health infrastructure. Players retire at 24. The same cortisol load as a race-car driver, sustained for hours daily, with no recognised pathway for psychological recovery. Existing training maps reps and reaction time, but says nothing about cognitive fatigue, rumination, or the mental ceilings that limit a player's ability to break through performance plateaus.",
      "research": "45-player survey across light-vs-severe psychological pressure, age group, and stress comparison. Coach interviews at the Hangzhou A1 academy.\n\nKey insight from one coach: 'Esports athletes hit up to 400 movements on the keyboard and mouse per minute. four times the general population. The cortisol output is comparable to a race-car driver.' The same insight made the inverse possible: brainwave training has documented effects on rumination and cognitive recovery.",
      "strategy": "Three design commitments:\n\n- Make mental training visible. EEG + PPG + EDA + IR sensors feed a real-time cognitive dashboard for player and coach.\n- Design for the coach as much as the player. The neurofeedback loop only closes if the coach can read it during a match, not in a post-mortem PDF.\n- Modular, not monolithic. Bio-sensor band + detachable microphone + gaming earbuds + emotion-indicator LED ring. each component has a separate failure mode and a separate price point.",
      "implementation": "Hardware: multichannel bio-sensor headset with 4-channel active EEG (TDCS anodes and cathodes), PPG, EDA, and an IR sensor. Modular gaming earbuds, detachable microphone, flexible PCB band, indicator LED ring for coach-facing emotion state. CMF in PC ABS with sandblasted finish. Three head-size variants (140 mm, 154 mm, and 179 to 186 mm).\n\nDigital: training-review platform pairing EEG traces with match replays. Comparative metrics chart 'traditional training' (mechanical memory + repetition) against 'advanced training with EEG' (enhanced accuracy, faster skill execution, better mental performance, boosted visual working memory).\n\nCutaway packaging model: easy carry plus organise on the go.",
      "results": "Two design outputs:\n\n- An EEG training device positioned for esports coaches and players, not generic 'brain training' consumers.\n- A neurofeedback training framework that pairs match data with cognitive state for shared coach-player review.\n\nSelected for the 27th Sichuan Fine Arts Institute Graduation Showcase (2024).",
      "lessons": "Three carry-forwards:\n\n- Mental health needs an interface, not just a campaign. Esports already has rich performance data; what was missing was a way for the cognitive layer to enter the conversation.\n- Two users, one device. A wearable that has to live on a player's head and on a coach's screen simultaneously is a different design problem than a consumer fitness tracker.\n- Speculative product, real measurement. Even if today's BCI fidelity is more aspirational than shipping-grade, the framework. pair every match with a cognitive-state trace. is real and adoptable now with cheaper sensors.",
      "nextSteps": "The framework generalises: any high-cognitive-load profession with a coach in the loop (chess, surgery training, music performance) could ride the same neurofeedback-plus-replay structure. The harder open question is what privacy looks like when a player's cognitive state is owned by their team.",
      "media": [
        {
          "section": "challenge",
          "src": "/work/syncoe/portfolio/01-overview.jpg",
          "caption": "Project overview. esports mental-load research, A1 academy data, and the case for visible cognitive training."
        },
        {
          "section": "research",
          "src": "/work/syncoe/portfolio/02-research-design.jpg",
          "caption": "Research and design. survey results, comparative training framework, and the human-centred AI positioning."
        },
        {
          "section": "implementation",
          "src": "/work/syncoe/portfolio/03-product-structure.jpg",
          "caption": "Product display. multichannel bio-sensor headset, modular components, CMF treatment, and exploded structure view."
        },
        {
          "section": "results",
          "src": "/work/syncoe/portfolio/04-platform.jpg",
          "caption": "Training-review platform. pairs EEG traces with match replays for shared coach and player review."
        }
      ],
      "designQuestions": [
        "How might invisible cognitive state become a useful coaching signal without reducing the player to a score?",
        "How can BCI feedback be shown during esports training without distracting from performance?"
      ],
      "keyDecisions": [
        {
          "title": "Translate brain data into coaching language",
          "problem": "Raw BCI signals are meaningful to researchers, but not actionable for players or coaches in a training session.",
          "decision": "I designed the interface around states, thresholds, and session patterns rather than raw neurological graphs.",
          "why": "Coaches need to identify moments of fatigue, focus, or overload and connect them to training decisions.",
          "outcome": "The product story shifted from device novelty to a usable training companion."
        },
        {
          "title": "Keep feedback peripheral during play",
          "problem": "A dashboard that asks for too much attention can harm the very performance it tries to improve.",
          "decision": "I separated live peripheral indicators from deeper post-session analysis.",
          "why": "The player receives enough feedback to stay aware, while the coach can inspect richer patterns after the session.",
          "outcome": "The prototype balances real-time awareness with reviewable performance evidence."
        }
      ]
    }
  },
  {
    "slug": "beatrol",
    "title": "BEATROL",
    "cardHeadline": "Helping tired drivers hand control back safely",
    "description": "L4 Safety Human-Vehicle Co-Driving Cockpit for Fatigue Intervention",
    "researchQuestion": "How can AI-driven systems enhance safety in autonomous driving?",
    "intro": "A speculative L4 cockpit that treats driver fatigue as a design surface. not a single signal to wake someone up, but a graded handover where the vehicle takes more authority as the driver's attention degrades.",
    "type": "HMI · Experience Design · Product Design",
    "year": 2023,
    "tags": [
      "HMI",
      "UX",
      "Industrial Design",
      "Speculative",
      "AI"
    ],
    "featured": true,
    "thumbnail": "/thumbnails/beatrol.jpg",
    "videoUrl": "https://vimeo.com/817694480",
    "href": "/work/beatrol",
    "caseStudy": {
      "role": "Solo design lead · Sichuan Fine Arts BA · Innovation Product Design",
      "timeline": "Spring to Summer 2023 (~12 weeks)",
      "team": "Solo project, faculty supervised. Comparative experiment ran in a simulated cab with an EAGOLAB sensor set (EEG, ECG, EDA, plus a forward-facing CV camera). Stimulus generators tested across tactile, vibration, and olfactory modules.",
      "impact": "A speculative L4 cockpit that re-frames driver fatigue as a design surface. not a signal to wake the driver up, but a sequence for handing power back and forth between human and vehicle as attention degrades. The fatigue case is one slice of a larger question about how authority should move between humans and machines as their relative competence shifts.",
      "challenge": "Fatigue-related crashes account for around 30% of road accidents and a quarter of fatalities, with millions of incidents per year. The in-vehicle systems being shipped today can detect fatigue and beep. they cannot intervene. As autonomous driving moves toward L4, the design question stops being 'how do we wake a driver up?' and becomes 'how do we hand power back and forth between human and vehicle as the driver's attention degrades?'",
      "research": "Two questions framed the inquiry:\n\n- How do existing fatigue-driving interventions work. olfactory, auditory, visual, tactile. and where do they fail?\n- How can drivers and machines collaborate to reach a shared safety goal, instead of one yelling at the other?\n\nThe literature converges on multimodality and on intervention curves keyed to fatigue level. The Karolinska Sleepiness Scale (KSS) anchors the measurement; the gap is in tying KSS bands to graded automation handovers.",
      "strategy": "Three design commitments anchor the build:\n\n- A fatigue state graph as the spine. Awake → Mild fatigue → Deep fatigue maps to intervention layers, not single triggers.\n- Sensors as a stack, not a single source. EEG, EDA, ECG, eye tracking, and a forward-facing CV camera feed a fused fatigue estimate.\n- Handover as a designed sequence. Active → semi-active → passive transition. the system steadily takes more control as the driver's fatigue band rises, ending in vehicle-led parking when 'deep fatigue' is detected.",
      "implementation": "Physical: a tactile steering wheel with programmable fabric (a Mini-LED display layer + flexible pressure sensors + vibration modules + camera location) that folds into a docking position when the system fully takes over.\n\nDigital: DIM dashboard with anti-fatigue pitch settings (mid fatigue 45 to 120 dB · deep fatigue 10 to 60 Hz), AI assistance with stand-by, listening, and response visual feedback, and a multimodal intervention flow.\n\nTested in a simulated cab with one driver across six lab sessions. SAM (subjective) and KSS (physiological) measures collected at each stimulus.",
      "results": "Three design outputs the project carries:\n\n- A fatigue-graded intervention framework. KSS bands as design surfaces.\n- A tactile-first steering wheel with a foldable handover state.\n- An anti-fatigue DIM dashboard with multimodal sensory layers (audio, vibration, light, scent).\n\nSubmitted to industrial design competitions in 2023; the design language was framed as 'L4 sensory symbiosis space', not 'driver-monitoring product'.",
      "lessons": "Two carry-forwards:\n\n- Designing the handover, not the alarm. The hardest design problem wasn't detecting fatigue. sensors do that. it was choreographing the 30-second window where the system is taking over and the driver still feels like an agent, not a passenger.\n- Sensors are vocabulary, not data. EEG, EDA, eye-tracking each speak a different language about attention. The job was translating between them and surfacing only the parts the driver needed to feel.",
      "nextSteps": "Take the handover-as-choreography frame into other co-driving moments. lane-keeping under low confidence, urban-merge negotiations, valet handoff. The fatigue case is one slice of a larger question about how authority should move between humans and machines as their relative competence shifts.",
      "media": [
        {
          "section": "challenge",
          "src": "/work/beatrol/portfolio/01-overview.jpg",
          "caption": "Project overview. abstract, research questions, fatigue-state framing, and the 'L4 sensory symbiosis' positioning."
        },
        {
          "section": "research",
          "src": "/work/beatrol/portfolio/02-system-prototype.jpg",
          "caption": "System map, multimodal output channels, KSS-based fatigue measurement, and the comparative experiment setup in the simulated cab."
        },
        {
          "section": "strategy",
          "src": "/work/beatrol/portfolio/03-tactile-wheel.jpg",
          "caption": "Tactile steering wheel. programmable fabric with Mini-LEDs, pressure sensors, and folding intervention states."
        },
        {
          "section": "implementation",
          "src": "/work/beatrol/portfolio/04-multimodal-ai.jpg",
          "caption": "Multimodal intervention process and DIM dashboard. voice, visual, vibration, tactile, audible, ambient light, and olfactory layers tied to fatigue level."
        }
      ],
      "designQuestions": [
        "How might an autonomous driving interface communicate fatigue and handover risk before it becomes an emergency?",
        "What should a tactile control surface do when the driver is between active control and automation trust?"
      ],
      "keyDecisions": [
        {
          "title": "Design fatigue as a gradual state",
          "problem": "Binary alerts make the system feel reactive; drivers need time to understand why control is being requested.",
          "decision": "I represented fatigue through progressive visual states, soft warnings, and a tactile steering-wheel interaction.",
          "why": "A gradual model supports trust because the car explains risk before it demands action.",
          "outcome": "The interface reframed handover as a shared negotiation between driver and system."
        },
        {
          "title": "Use the wheel as the communication point",
          "problem": "A screen-only warning can be missed in a semi-autonomous cockpit, especially when attention is already degraded.",
          "decision": "I moved part of the feedback into the steering wheel as a physical, glance-free cue.",
          "why": "The wheel is already the handover object, so it is the most direct place to signal readiness and urgency.",
          "outcome": "The prototype made the service scenario more believable than a pure dashboard concept."
        }
      ]
    }
  },
  {
    "slug": "sprayscape",
    "title": "SprayScape",
    "cardHeadline": "Turning public walls into negotiable spatial archives",
    "description": "A spatial service concept for public wall negotiation, street-art authorship, and MR-based context preservation.",
    "researchQuestion": "How can public wall art keep authorship, context, and place?",
    "intro": "SprayScape treats street art as a public system, not only a visual feed. Artists, viewers, property owners, and cities negotiate wall context through capture, archive, and mixed-reality replay.",
    "type": "Service Design, Spatial UX, MR",
    "year": 2024,
    "tags": [
      "Service Design",
      "UX",
      "Spatial Computing",
      "AR"
    ],
    "featured": true,
    "thumbnail": "https://framerusercontent.com/images/swsE03EafovXxtL53gEI0UQUr8.png",
    "videoUrl": "https://vimeo.com/883701939",
    "href": "/work/sprayscape",
    "caseStudy": {
      "role": "Spatial interaction designer, service design and MR archive",
      "timeline": "2024 (~12 weeks)",
      "team": "Solo project. Three case studies across Brooklyn (Graffiti Hall of Fame), Chongqing (UK), and Los Angeles. Site analysis across five style categories (taglines, murals, stickers, bombs, tags).",
      "impact": "A spatial interaction and service system for public wall-making. SprayScape reframes graffiti documentation as a negotiation between artist authorship, city context, wall surface, time, and archive.",
      "challenge": "Street art is temporary, contested, and deeply tied to place. A photo can preserve the image, but it often loses the wall, scale, neighborhood, authorship, and lifespan of the work.\n\nThe design challenge was to build an archive that keeps street art connected to public context instead of flattening it into a generic image feed.",
      "research": "I treated the wall as a stakeholder system. Artists need authorship and visibility; viewers encounter work in place; cities manage public surfaces and conflict.\n\nThe hypothesis was that a useful archive needs metadata about surface, time, location, and audience, not only an image upload. That led to the later MR direction: spatial computing can preserve scale and wall context more clearly than a flat gallery.",
      "strategy": "The product direction moved from posting finished artwork toward building spatial records. Each work is understood through image, wall, location, author, and time.\n\nThe MR layer became a design decision because it supports contextual replay. The viewer can revisit a work in relation to a real or reconstructed wall, not only as a cropped asset.",
      "implementation": "The prototype combines capture, browsing, authorship records, and contextual replay. The later MR extension uses wall and room context as part of the interface rather than decoration.\n\nThis turns SprayScape into a service system for public creativity: documentation, negotiation, rediscovery, and memory.",
      "results": "The case now presents SprayScape as a spatial archive prototype, not a visual-sharing concept. The evidence is the service flow, MR interface direction, and portfolio boards showing how wall, artwork, location, and viewer context stay connected.",
      "lessons": "The technology matters only when it preserves what the ordinary archive loses. For this case, MR is useful because scale, placement, and wall context are part of the artwork.",
      "nextSteps": "A future version should test the archive flow with artists, local viewers, and property stakeholders to define what metadata feels useful instead of extractive.",
      "media": [
        {
          "section": "challenge",
          "src": "/work/sprayscape/results/clipboard---2023-11-04-13-34-35--eagle-l.jpg",
          "caption": "The cultural subject. A runner crosses a Chongqing graffiti wall mid-stride, showing how street art lives in the city even when makers and viewers rarely meet."
        },
        {
          "section": "research",
          "src": "/work/sprayscape/results/local-case-study--eagle-mmbs4nko99lw8.jpg",
          "caption": "Situated practice. A Huangjueping Graffiti Art Street study maps tagging, murals, and mobility patterns that shape where work appears."
        },
        {
          "section": "strategy",
          "src": "/work/sprayscape/portfolio/02-service-design.jpg",
          "caption": "Service strategy. Artist, buyer, and community perspectives define the touchpoint roadmap from negotiation through publication."
        },
        {
          "section": "implementation",
          "src": "/work/sprayscape/results/sprayscape-v5-7-10--eagle-mmbs4nkpketoe.jpg",
          "caption": "Full UX flow. Historical navigation, community upload, commission matching, and on-wall scan all support authorship and context."
        },
        {
          "section": "implementation",
          "src": "/work/sprayscape/results/sprayscape-uiux---eagle-mmbssqw2i30uo.jpg",
          "caption": "Brand and product identity. SprayScape positions itself as a street-art platform with a clear role for artists, buyers, and city stakeholders."
        },
        {
          "section": "results",
          "kind": "video",
          "src": "/play/previews/sprayscape-mr-original.mp4",
          "poster": "/play/highlights/sprayscape-mr.jpg",
          "aspectRatio": "16/9",
          "caption": "SprayScape MR. Later mixed-reality extension for onsite co-archiving, in-situ time travel, offsite exploration, and remixing street-art heritage."
        },
        {
          "section": "results",
          "src": "/work/sprayscape/results/sprayscape-z-1080p-60-09121727---5-00--e.jpg",
          "caption": "On-wall preview, in motion. The phone shows a sanctioned scout overlay; the right frame is a real spray pass on the wall. Leave a trace."
        },
        {
          "section": "results",
          "src": "/work/sprayscape/results/sprayscape-yutongzhu-1080p-60-09121756--.jpg",
          "caption": "Real-world context. The SprayScape mark over Chongqing shows the platform at city scale, where graffiti, business, and audience already share the same walls."
        }
      ],
      "designQuestions": [
        "How might a public-wall platform preserve authorship and spatial context?"
      ],
      "keyDecisions": [
        {
          "title": "Treat the wall as part of the data model",
          "problem": "A cropped photo can document an artwork, but it strips away the surface, neighbourhood, and temporal context that made the work meaningful.",
          "decision": "I framed each piece as a spatial record: artwork plus wall, location, authorship, and time.",
          "why": "Street art is inseparable from public context. Preserving that context makes the archive more truthful and more useful.",
          "outcome": "the portfolio boards shift the product from artwork upload to contextual wall record, with location, author, surface, and time as core information."
        },
        {
          "title": "Add MR as contextual replay",
          "problem": "A normal gallery view cannot show how a temporary artwork occupied public space.",
          "decision": "I added an MR direction that lets the work be revisited in relation to a real or reconstructed wall.",
          "why": "Spatial computing carries scale and placement, which are exactly the details lost in ordinary documentation.",
          "outcome": "the MR concept shows why scale and placement matter when a temporary work is removed or covered."
        }
      ]
    }
  },
  {
    "slug": "wildfire-whispers",
    "title": "Wildfire-Whispers",
    "cardHeadline": "Climate risk as sensory interface",
    "description": "Data-driven immersive installation with embodied gesture design for climate awareness",
    "researchQuestion": "How do humans coexist with extreme weather?",
    "intro": "A 3m×2m geometric installation paired with a satellite-data poster series. Real-time gesture recognition turns five years of wildfire records into something a body can feel.",
    "type": "Interaction Design · Information Visualization · Storytelling",
    "year": 2024,
    "tags": [
      "Embodied Interaction",
      "Data Viz",
      "Installation",
      "Climate"
    ],
    "featured": true,
    "thumbnail": "https://framerusercontent.com/images/oyzMDOHWVh6rgkG7cfZqhJwwXtU.png",
    "videoUrl": "https://vimeo.com/883703201",
    "href": "/work/wildfire-whispers",
    "caseStudy": {
      "role": "Solo design lead · Sichuan Fine Arts BA",
      "timeline": "Late 2022 to early 2024 (multi-stage build)",
      "team": "Solo project. Source data: Fire Information for Resource Management System (FIRMS) wildfire database, 2017 to 2021. Inspired by the August 2022 Jinyun Mountain wildfire in Chongqing.",
      "impact": "An immersive installation that turns five years of satellite wildfire data into something a body can feel. Gesture-driven projections plus a starburst-tree poster series invite a visitor to encounter climate intensity as a sensory event, not a chart.",
      "challenge": "Wildfire awareness usually arrives as bar charts and dashboards. and gets scrolled past. As an undergraduate designer interested in how environmental data changes behaviour, the design question became: can the same data be felt rather than read, without trivialising the disaster, and without losing data integrity?",
      "research": "Inspiration drawn from Arrival. the alien language as circular, ink-blot symbols evoking the cyclic nature of time. That visual primitive translated cleanly to wildfire data: each fire has a start, an expansion arc, and a fade.\n\nSource data: global satellite wildfire records, 2017 to 2021 (FIRMS). The work uses both the data itself and a fictional frame ('In a futuristic world called Whispering Wildfire, wildfire has a deep connection with both humans and animals…') drawn through the project, mapped to UN SDG Goal 15 (Life on Land).",
      "strategy": "Three design commitments:\n\n- Two parts, one logic. Part 1. a real-time installation with audio-visual mapping driven by gesture recognition. Part 2. a data-visualisation poster series turning satellite wildfire data into 'starburst tree' compositions.\n- Body-first input. Leap Motion plus Unreal Engine for gesture-driven interaction; the visitor's hand becomes the cursor onto the data.\n- Role reversal as game design. In the interactive puzzle layer, players switch between 'New Human' and 'Animal' to experience two perspectives. as a New Human, you solve wildfire-related puzzles and protect the flora and fauna; as an Animal, you escape the flames and find food.",
      "implementation": "Hardware: a 3m × 2m geometric wall-mounted setup with responsive projections. Leap Motion sensor for gesture recognition. NVIDIA PhysX SDK + NVIDIA FLOW + a custom node-flow and dataflow pipeline.\n\nSoftware: real-time gesture-driven particle effects and parametric arrays of flowing, leaf-like shapes; the visitor's hand sets a sense of spatial physicality and energetic flow. Music visualisation as a secondary input.\n\nVisualisation series: selected global satellite data (2017 to 2021) → starburst-tree posters where fire severity drives the visual cadence.",
      "results": "Two design outputs:\n\n- An immersive embodied installation translating wildfire intensity into gesture-driven audio-visual response.\n- A data-visualisation poster series that holds up to scrutiny as both data work and as design objects.\n\nFinal exhibition at H.U.B Cherrytree Gallery, Chongqing.",
      "lessons": "Two carry-forwards:\n\n- Embodied data is design, not data. The same dataset earns a thousand different feelings depending on what the body does to interact with it. The design contribution sits in the gesture-to-mapping function, not in the dataset.\n- Speculative fiction earns the data its weight. Without the 'Whispering Wildfire' framing, the visualisations are pretty; with it, they have a story to live in.",
      "nextSteps": "The pattern. pair satellite environmental data with a body-first input layer. is portable to deforestation, glacial retreat, ocean acidification. Each one needs its own gestural vocabulary, but the underlying technique transfers.",
      "media": [
        {
          "section": "challenge",
          "src": "/work/wildfire-whispers/portfolio/01-overview.jpg",
          "caption": "Project overview. concept, inspiration ('Arrival' as visual primitive), information architecture, and the New Human / Animal role-reversal frame."
        },
        {
          "section": "implementation",
          "src": "/work/wildfire-whispers/portfolio/02-installation.jpg",
          "caption": "Installation build. gesture-driven audio-visual mapping with Leap Motion and Unreal, plus the satellite-data poster series and final exhibition at H.U.B Cherrytree Gallery, Chongqing."
        }
      ],
      "designQuestions": [
        "How might climate risk be experienced as a living signal rather than a distant data visualisation?",
        "What interaction language can make a speculative environmental interface feel fragile, embodied, and urgent?"
      ],
      "keyDecisions": [
        {
          "title": "Turn wildfire data into a sensory encounter",
          "problem": "Charts can explain fire risk, but they rarely make the viewer feel the instability of an ecosystem under stress.",
          "decision": "I translated the topic into an interactive installation with responsive visuals, sound, and gesture-driven behaviour.",
          "why": "Embodied feedback creates a more immediate relationship between human action and environmental change.",
          "outcome": "The work becomes an affective climate interface rather than a conventional awareness poster."
        },
        {
          "title": "Use fragility as the interaction rule",
          "problem": "A polished, stable interface would undercut the subject of volatility and ecological loss.",
          "decision": "I designed the visual system to shift, flicker, and respond as if it were unstable.",
          "why": "The behaviour lets the installation communicate risk through motion and atmosphere, not explanation.",
          "outcome": "The final piece gives viewers a clearer emotional entry point into a complex climate issue."
        }
      ]
    }
  },
  {
    "slug": "poeticform",
    "title": "Poetic Form",
    "cardHeadline": "Turning poems into navigable AI-made forms",
    "description": "A Human-AI workflow translating Song poetry into ComfyUI-generated, image-to-3D poem sculptures.",
    "researchQuestion": "How can a poem's mood become a navigable spatial form?",
    "intro": "AI Creative Technologist, Human-AI workflow. A compact case on structured prompting, ComfyUI production, image-to-3D reconstruction, and exhibition validation.",
    "type": "AI Creative Technology, Human-AI Workflow",
    "year": 2024,
    "tags": [
      "AI Creative Technology",
      "ComfyUI",
      "Human-AI Workflow",
      "AIGC",
      "Digital Sculpture"
    ],
    "featured": true,
    "thumbnail": "/thumbnails/poeticform.jpg",
    "videoUrl": "https://vimeo.com/1079210038",
    "href": "/work/poeticform",
    "caseStudy": {
      "role": "AI Creative Technologist, Human-AI workflow",
      "timeline": "2024, undergraduate graduation project",
      "team": "Solo capstone at Sichuan Fine Arts Institute",
      "impact": "Built a repeatable Human-AI workflow that turned Song poetry into digital poem sculptures: poem interpretation, structured prompt schema, ComfyUI generation, image-to-3D reconstruction, and exhibition interaction.",
      "challenge": "Most AI poetry experiments stop at illustration: a poem enters the model and a decorative image comes out. That loses the structure of the poem, especially its mood, imagery, cultural references, and rhythm.\n\nThe design challenge was to make poetic interpretation visible inside the workflow, then test whether selected images could become navigable spatial forms.",
      "research": "I treated the poem as structured material rather than a sentence to decorate. The research mapped Song Ci imagery, emotional tone, word style, cultural objects, and sensory cues into variables a generation workflow could use.\n\nThat revealed the authorship problem. AI could produce variation, but it could not decide what counted as poetic fidelity. The designer had to stay in the loop: selecting source meaning, defining the schema, tuning prompts, curating outputs, and deciding which results deserved reconstruction.",
      "strategy": "The case is structured as one workflow: poem interpretation, structured prompt, ComfyUI generation, image-to-3D reconstruction, exhibition object.\n\n- Interpretation turns mood, imagery, culture, and material cues into design inputs.\n- The prompt schema keeps those inputs legible across iterations.\n- ComfyUI becomes the node-based co-creation environment, where the workflow can be adjusted rather than hidden.\n- Image-to-3D tools turn selected results into spatial probes for a digital garden and physical exhibition.",
      "implementation": "I designed the prompt schema around subject, action, object, culture, emotion, mood, lighting, setting, perspective, style, texture, and medium. That made the poem actionable without flattening it into one prompt.\n\nComfyUI handled the generation layer as a visible, adjustable graph. Selected images then moved into emerging image-to-3D tools, including CSM-style viewers, Fantasia3D references, and TripoSR probes. The point was not to claim perfect mesh quality. It was to test whether generated poetic imagery could become a spatial object visitors could orbit, compare, and encounter in an exhibition.",
      "results": "The final exhibition combined a workflow wall, a digital garden interface, poem-inspired sculptures, and screen-based interaction. Visitors could see both the artifacts and the production logic behind them.\n\nThe strongest result is the method. Poetic Form shows how a designer can orchestrate prompt systems, ComfyUI workflows, image-to-3D tools, curation, and exhibition display into one Human-AI creative process.",
      "lessons": "AI craft is not only output quality. The important design work sits before and after generation: defining the schema, choosing what the model should preserve, deciding what humans must judge, and making the workflow visible enough for others to trust.",
      "nextSteps": "The next direction is spatial computing: poem-sculptures as ambient desktop companions or MR artifacts that sit in a room, respond to context, and keep their poem-to-form lineage visible. These are future probes, not shipped products.",
      "designQuestions": [
        "How can a poem's mood become a navigable spatial form?"
      ],
      "keyDecisions": [
        {
          "title": "Prompt schema over one-shot prompting",
          "problem": "A direct poem-to-image prompt produced decorative images without a traceable relation to the poem.",
          "decision": "I translated each poem into variables for mood, imagery, cultural object, material, perspective, and medium.",
          "why": "The schema kept the model responsive to a designed interpretation layer rather than a loose sentence.",
          "outcome": "each output can be reviewed through poem meaning, prompt variables, visual judgement, and later reconstruction potential."
        },
        {
          "title": "Visible workflow from ComfyUI to spatial form",
          "problem": "Final renders alone made the project look like image taste, not AI system design.",
          "decision": "I exposed the ComfyUI graph and tested image-to-3D tools to move selected outputs into spatial artifacts.",
          "why": "Showing the pipeline made iteration, model control, and human curation part of the design evidence.",
          "outcome": "the case shows ComfyUI screenshots, image-to-3D platform evidence, a GLB probe, and final exhibition documentation."
        }
      ],
      "modelProbe": {
        "title": "Image-to-3D Probe",
        "src": "/work/poeticform/models/poeticform-probe.glb",
        "poster": "/work/poeticform/models/poeticform-probe-obj.jpg",
        "caption": "Early exploration of image-to-3D reconstruction when texture and mesh generation tools were still emerging. The source OBJ was converted into a web-ready GLB and lazy-loaded so the case keeps a light first paint."
      },
      "media": [
        {
          "section": "challenge",
          "src": "/work/poeticform/case/concept-description.jpg",
          "caption": "Graduation concept board: the project asks how a poem can become a spatial form rather than a single generated image."
        },
        {
          "section": "research",
          "src": "/work/poeticform/case/nlp-analysis.jpg",
          "caption": "Language analysis layer: the Song Ci corpus is translated into imagery, emotion, word style, and frequency signals before visual generation."
        },
        {
          "section": "strategy",
          "src": "/work/poeticform/case/human-ai-relationship.jpg",
          "caption": "Human-AI relationship diagram: designer, visitor, and AI are given different responsibilities in the creative loop."
        },
        {
          "section": "strategy",
          "src": "/work/poeticform/case/workflow-overview.jpg",
          "caption": "Full workflow overview: poem analysis, prompt engineering, model generation, view inference, and 3D reconstruction."
        },
        {
          "section": "implementation",
          "src": "/work/poeticform/case/prompt-engineering.jpg",
          "caption": "Prompt engineering schema: poetic language is split into subject, action, object, culture, emotion, mood, lighting, setting, perspective, style, texture, and medium."
        },
        {
          "section": "implementation",
          "src": "/work/poeticform/case/comfyui-tripo-workflow.jpg",
          "caption": "ComfyUI backend evidence: a node graph connects image generation, transparent decode, and Tripo-style GLB preview."
        },
        {
          "section": "implementation",
          "src": "/work/poeticform/case/technical-sd-lora.jpg",
          "caption": "Text-to-image technical support: prompt variables and LoRA-style model control shape material, voids, and posture."
        },
        {
          "section": "implementation",
          "src": "/work/poeticform/case/technical-image-to-3d.jpg",
          "caption": "Image-to-3D technical support: inference creates novel views, then reconstruction turns selected imagery into a 3D model."
        },
        {
          "section": "implementation",
          "src": "/work/poeticform/case/csm-3d-viewer-ui.jpg",
          "caption": "CSM 3D Viewer process evidence: original image, segmented image, mesh preview, texture resolution, topology, and OBJ export controls in one platform UI."
        },
        {
          "section": "implementation",
          "src": "/work/poeticform/case/voxcraft-image-to-3d-grid.mp4",
          "kind": "video",
          "poster": "/work/poeticform/case/voxcraft-image-to-3d-grid.jpg",
          "caption": "VoxCraft image-to-3D references used as process evidence for testing multiple generated forms as spatial objects."
        },
        {
          "section": "implementation",
          "src": "/work/poeticform/case/view-3d-reconstruction.jpg",
          "caption": "View inference and 3D reconstruction: selected generated forms move from image outputs into spatial artifacts."
        },
        {
          "section": "results",
          "src": "/work/poeticform/case/poem-sculpture-collage.jpg",
          "caption": "Generated and reconstructed poem-sculpture studies: a visual bank for choosing which forms deserved exhibition treatment."
        },
        {
          "section": "results",
          "src": "/work/poeticform/case/exhibition-entry-interface.jpg",
          "caption": "Digital garden entry interface: visitors enter the poem-sculpture space through a navigable scene."
        },
        {
          "section": "results",
          "src": "/work/poeticform/case/exhibition-garden-views.jpg",
          "caption": "Exhibition views from the digital garden, showing poem sculptures as navigable spatial objects."
        },
        {
          "section": "results",
          "src": "/work/poeticform/case/exhibition-installation-room.jpg",
          "caption": "Graduation exhibition installation with workflow wall, sculpture plinths, and desktop interface presented as one AI creative system."
        },
        {
          "section": "nextSteps",
          "src": "/work/poeticform/case/next-mr-interface.jpg",
          "caption": "Future direction: a visionOS-style MR interface where poem-sculptures become room-scale ambient artifacts. This is a concept direction, not a shipped product."
        },
        {
          "section": "nextSteps",
          "src": "/work/poeticform/case/next-desk-object.jpg",
          "caption": "Future direction: ambient desk-object companions that preserve the poem-to-form lineage as part of the interface."
        }
      ]
    }
  },
  {
    "slug": "lunacy",
    "title": "LUNACY",
    "cardHeadline": "Cinematic lunar archive",
    "description": "Digital Narrative based on Responsive web pages design",
    "researchQuestion": "What role has the moon played in human culture and history?",
    "intro": "A pseudo-archive from the future, dramatizing the narrative that the moon, once a living entity, was rendered lifeless by the march of science.",
    "type": "UI UX",
    "year": 2021,
    "tags": [
      "UX UI"
    ],
    "featured": true,
    "thumbnail": "https://framerusercontent.com/images/uLavaDKo8wVaIV5gV0iwZeyOHIY.png",
    "videoUrl": "https://vimeo.com/883707048",
    "href": "/work/lunacy",
    "caseStudy": {
      "role": "Designer · visual systems",
      "timeline": "2024",
      "team": "Self-initiated speculative archive",
      "impact": "A speculative web and motion archive that treats lunar mythology, image culture, and digital memory as a browsing system.",
      "challenge": "The project began with a problem of archive experience. Lunar references are scattered across science, folklore, cinema, and visual culture, but browsing them often feels like searching a database rather than entering a world.",
      "research": "I studied how moon imagery carries different meanings: measurement, madness, romance, navigation, ritual, and science. The tension was how to hold those meanings together without turning the site into a moodboard.",
      "strategy": "I framed LUNACY as an archive with atmosphere. The interface needed enough structure for browsing, but enough ambiguity to feel like entering a lunar field.",
      "implementation": "The work combines web layout, motion fragments, and image sequencing. Each screen balances index-like clarity with cinematic pacing.",
      "results": "The outcome is a visual archive concept that demonstrates how a cultural collection can feel navigable without losing its mythic quality.",
      "lessons": "Archives need hierarchy, but speculative archives also need drift. The useful design tension is between orientation and wonder.",
      "nextSteps": "A stronger next version would add source metadata, interactive filtering, and a clearer reading path for long-form research.",
      "designQuestions": [
        "How might an archive feel searchable and cinematic at the same time?",
        "How can lunar cultural material keep its ambiguity while still becoming a usable interface?"
      ],
      "keyDecisions": [
        {
          "title": "Balance index and atmosphere",
          "problem": "A pure gallery felt too loose, while a database view removed the emotional quality of the material.",
          "decision": "I used an archive structure but softened it with motion, image rhythm, and dark spatial pacing.",
          "why": "The moon is both scientific object and cultural symbol, so the interface needed both clarity and mystery.",
          "outcome": "The project communicates a stronger point of view than a standard visual collection."
        },
        {
          "title": "Use cinematic sequencing as navigation",
          "problem": "Users needed a way to move through references without reading a long explanation first.",
          "decision": "I treated transitions and image order as part of the storytelling system.",
          "why": "Sequence can guide attention before the user understands the full archive logic.",
          "outcome": "The experience feels closer to an exploratory cultural essay than a static index."
        }
      ]
    }
  },
  {
    "slug": "botanictrum",
    "title": "Botanictrum",
    "cardHeadline": "Plants as signal-bearing interfaces",
    "description": "Sensing Installation",
    "researchQuestion": "Can you transfer the pulse from plants?",
    "intro": "Combining mechanical parts with soil to extract abstract information from plants and present them visually.",
    "type": "Interaction Design",
    "year": 2023,
    "tags": [
      "Embodied Interaction"
    ],
    "featured": true,
    "thumbnail": "https://framerusercontent.com/images/3kJj9nkoMq8ZxDS8OoA0OB0VmXI.jpg",
    "videoUrl": "https://vimeo.com/883703983",
    "href": "/work/botanictrum",
    "caseStudy": {
      "role": "Designer · prototyper",
      "timeline": "2024",
      "team": "Self-initiated interaction study",
      "impact": "An interaction prototype exploring plants as signal-bearing interfaces through sensing, light, and speculative feedback.",
      "challenge": "Plant interfaces are often presented as decorative smart objects. I wanted to ask a more specific question: what would it mean to treat a plant as a living participant in an information system?",
      "research": "The research focused on the mismatch between human time and plant time. Plants respond slowly and indirectly, so the interface needed to translate subtle changes without pretending the plant behaves like a device.",
      "strategy": "I designed the work as an interpretive layer rather than a control panel. The interface should reveal patterns, not command the plant.",
      "implementation": "The prototype uses a small sensing and visual feedback setup to create a responsive installation language.",
      "results": "The project frames botanic interaction as a design problem of translation: how to make slow, living signals perceptible without over-instrumenting them.",
      "lessons": "The more the interface tried to explain, the less alive the system felt. The strongest moments were suggestive and ambient.",
      "nextSteps": "A future version could test longer-term sensing and compare how different viewers interpret the same plant signals.",
      "designQuestions": [
        "How might a plant become a participant in an interface without being reduced to a sensor?",
        "How can slow biological signals become legible to humans without pretending they are immediate data?"
      ],
      "keyDecisions": [
        {
          "title": "Design for translation, not control",
          "problem": "A dashboard would make the plant feel like a machine to monitor.",
          "decision": "I used ambient feedback and suggestive visual states rather than command-style controls.",
          "why": "The project is about co-presence with a living system, so the interaction needed to stay soft and interpretive.",
          "outcome": "The prototype keeps the plant's ambiguity while still making change perceptible."
        },
        {
          "title": "Respect plant time",
          "problem": "Human interfaces expect fast feedback, but plant responses are slow and contextual.",
          "decision": "I designed the feedback rhythm around gradual change instead of instant reaction.",
          "why": "A slower rhythm makes the system feel more honest to the material.",
          "outcome": "The work becomes a stronger speculative interaction study rather than a novelty sensor demo."
        }
      ]
    }
  },
  {
    "slug": "meta-station",
    "title": "HUAWEI Meta Station",
    "cardHeadline": "Making a lock screen feel social, not static",
    "description": "Interactive UI theme for HUAWEI HarmonyOS with lockscreen interaction, a 3D scene, and day and night sensing.",
    "researchQuestion": "Will the metaverse be the future of online network and remote work?",
    "intro": "As UX Designer intern at HUAWEI in Chengdu (Sep to Dec 2022), I shipped two design systems for phone and watch faces on the Huawei Theme Store. Alongside that, I redesigned 68 first-party icons, adapted 51 third-party icons for HarmonyOS, and launched a new HarmonyOS interaction template. Meta Station is the flagship of the work. a HarmonyOS theme that treats the lock screen as a small social place rather than a utility tile.",
    "type": "HUAWEI HarmonyOS Theme",
    "year": 2022,
    "tags": [
      "HUAWEI",
      "UX",
      "UI",
      "3D",
      "Theme Design"
    ],
    "featured": true,
    "thumbnail": "https://framerusercontent.com/images/q1KWuBoFjXN9Sdr3v9JbwL5QQW0.png",
    "videoUrl": "https://vimeo.com/883705290",
    "href": "/work/meta-station",
    "caseStudy": {
      "role": "UX Intern · HUAWEI Co., Ltd · Chengdu, China",
      "timeline": "2022 (internship)",
      "team": "UX intern under the HUAWEI Theme Design team. Designed the lockscreen interaction system, the day and night state mode, the 3D scene, and the multi-wallpaper variants for a single theme product.",
      "impact": "Shipped a HarmonyOS theme package that translated the virtual social space brief into a coherent phone surface: low-poly 3D world, day/night states, press-triggered scene motion, multi-wallpaper variants, and matching icon/weather language.",
      "challenge": "During the pandemic, online work and social life became normal, but mobile lock screens still behaved like static skins: glanceable, decorative, and quickly dismissed. The original concept brief framed Meta Station around rising demand for online social spaces and the coming overlap between physical life and virtual worlds.\n\nThe design question became: how can a HarmonyOS theme make the phone's front door feel like a small virtual social space, without turning a lightweight lock screen into a heavy app?",
      "research": "Style direction: 3D bright tone, virtual nostalgic, modernism, fashion style, future-of-the-past 80s to 90s. Target age groups: 21 to 35 year old hot-company employees and content seekers, the same fashion as the world.\n\nDesign philosophy borrowed from one internal note: 'Use the concept of meta-station to allow users to predict scenarios while navigating, creating fun in entertainment.'",
      "strategy": "Three commitments shaped the work. The first was treating the lock screen as a front door rather than a doormat. somewhere the user could press to reveal a small anecdote, swipe sideways to look around the scene, and discover hidden eggs in the map. The second was making the scene aware of time. The same city shifts colour, light, and mood between morning and night, while keeping its characters and architecture intact, so it reads as one place living through a day rather than two unrelated palettes. The third was speaking a single visual language across every surface. City, desktop, weather widgets, and icons all sit inside the same lowpoly grammar so the theme feels like one inhabited world rather than a folder of loosely related assets.",
      "implementation": "The work covered three connected pieces. authoring the 3D scene, designing the UI theme, and writing the lockscreen interaction logic. Out the other end came a meta-station city environment, multiple wallpaper variants, a day and night transition, and a weather-icon family that sits inside the same visual world as the rest of the theme.\n\nThe lockscreen interaction itself reads like a short sequence. When the desktop is pressed, a floating panorama of the meta-station appears. When released, the view returns to the city centre. Pressing reveals scene anecdotes, and the user can swipe left or right to move the camera and find hidden eggs in the map.",
      "results": "A complete HUAWEI Theme product that ships as a single coherent world. It bundles the UI theme, the lockscreen interaction, the 3D scene, day and night mode, multiple wallpaper variants, and a matching weather-icon family. Released on HUAWEI Themes as Meta-Station UI.",
      "lessons": "Two ideas carry forward from this project. The first is that a theme is a tiny game world rather than a skin. Once the lockscreen has anecdotes, a swipeable point of view, and hidden details, it stops being decoration and becomes a place users return to between tasks. The second is that time itself can be a design surface. Day and night is not only a palette switch but an opportunity to give the theme a life cycle that maps to the rhythm of the user's day.",
      "nextSteps": "Bring the same scene-as-place pattern into other small-screen surfaces. Apple Watch faces, in-flight entertainment lockscreens, smart-fridge ambient displays. Anywhere a screen sits in a person's life for hours but is treated as a static surface.",
      "media": [
        {
          "section": "challenge",
          "src": "/work/meta-station/portfolio/01-overview.jpg",
          "caption": "Original concept framing. a pandemic-era virtual social space translated into a lightweight HarmonyOS lockscreen theme."
        },
        {
          "section": "implementation",
          "src": "/work/meta-station/portfolio/02-3d-scenes.jpg",
          "caption": "3D scene system, lockscreen interaction (anecdote-pressing + swipeable POV), day and night mode, multiple wallpaper variants, and the weather-icon family."
        }
      ],
      "designQuestions": [
        "How might a HarmonyOS lockscreen become a tiny world instead of a static wallpaper?",
        "How can day and night states communicate a system mood without adding interaction complexity?"
      ],
      "keyDecisions": [
        {
          "title": "Build a world, not a wallpaper",
          "problem": "A static lockscreen image can be visually rich, but it does not make the phone feel responsive to time and context.",
          "decision": "I designed Meta Station as a miniature spatial scene with day and night states.",
          "why": "A world model gives the interface a sense of continuity while staying lightweight enough for a phone surface.",
          "outcome": "The concept feels more like an ambient system identity than a decorative background."
        },
        {
          "title": "Use state change as the motion story",
          "problem": "Extra interactions would make the lockscreen concept feel heavy and less platform-realistic.",
          "decision": "I focused the motion language on transitions between environmental states.",
          "why": "Time-based change is understandable, glanceable, and aligned with how people already read lockscreen context.",
          "outcome": "The final card and motion assets communicate the concept quickly without needing a full app flow."
        }
      ]
    }
  },
  {
    "slug": "neon-nike",
    "title": "Neon-NIKE",
    "cardHeadline": "Nocturnal performance motion",
    "description": "A concept visual for NIKE",
    "type": "Concept Visual",
    "year": 2024,
    "tags": [
      "UX UI"
    ],
    "featured": true,
    "thumbnail": "https://framerusercontent.com/images/9RxJa7zlJTN3uQ7PmhMOb3uYRAk.jpg",
    "href": "/work/neon-nike",
    "caseStudy": {
      "role": "Visual designer · motion concept",
      "timeline": "2024",
      "team": "Self-initiated brand atmosphere study",
      "impact": "A self-initiated motion and visual-system concept exploring how a performance brand could feel more nocturnal, kinetic, and urban.",
      "challenge": "The problem was not to redesign a brand identity. It was to test how a familiar sports language could shift atmosphere through light, speed, and surface.",
      "research": "I studied how performance visuals often rely on heroic product shots. The opportunity was to make the environment feel active too: neon, motion blur, rhythm, and city energy.",
      "strategy": "I treated the work as an atmosphere system. Instead of adding more logos or copy, the direction uses light behaviour and motion pacing to imply speed.",
      "implementation": "The study combines graphic composition, moving texture, and cinematic cropping into a compact visual direction.",
      "results": "The outcome is a visual experiment that shows how motion language can carry brand energy without relying on a campaign narrative.",
      "lessons": "The strongest brand studies do not need to explain the brand. They need to create a recognisable feeling quickly.",
      "nextSteps": "A fuller version could extend the system into product cards, launch screens, and event graphics.",
      "designQuestions": [
        "How might a sports visual system communicate speed through atmosphere rather than slogans?",
        "What happens when the city becomes the motion surface for a performance brand?"
      ],
      "keyDecisions": [
        {
          "title": "Let light become the brand behaviour",
          "problem": "A logo-heavy study would feel like a mock campaign instead of a design exploration.",
          "decision": "I used neon light, contrast, and motion texture as the primary system.",
          "why": "Light can imply speed and intensity without over-explaining the concept.",
          "outcome": "The work stays visual, immediate, and more premium."
        },
        {
          "title": "Crop for movement",
          "problem": "Centered compositions made the study feel like a poster.",
          "decision": "I used tighter, more cinematic cropping to create a sense of motion beyond the frame.",
          "why": "The viewer reads the composition as part of an ongoing sequence.",
          "outcome": "The concept feels closer to motion direction than static graphic design."
        }
      ]
    }
  },
  {
    "slug": "bytedance",
    "title": "ByteDance · TikTok AR Effects",
    "cardHeadline": "Shipping AR effects inside platform constraints",
    "description": "Production-ready AR effect loops for TikTok and TikTok Lite, shaped by trend analysis, instant camera feedback, and platform constraints.",
    "researchQuestion": "What makes an AR effect readable in the first few seconds?",
    "intro": "Visual Designer at ByteDance. Led custom AR effects across beauty, atmosphere, and interaction, then shipped two filters through TikTok and TikTok Lite as lightweight creative production assets.",
    "type": "AR Creative Production, Motion",
    "year": 2023,
    "tags": [
      "AR",
      "TikTok",
      "Visual Design",
      "ByteDance",
      "Motion"
    ],
    "featured": true,
    "thumbnail": "/work/bytedance/01-hero-football-baby.png",
    "videoUrl": "https://vimeo.com/1191365683",
    "href": "/work/bytedance",
    "caseStudy": {
      "role": "Visual Designer, AR effect production",
      "timeline": "Oct to Dec 2023, TikTok commercial workshop pipeline",
      "team": "Solo designer inside the AR effects commercial-workshop pipeline. Three effects produced: Mushroom Eyes, Pearl Glitter, and World Cup Soccer Baby.",
      "impact": "A short-form creative technology case that shipped platform-ready AR filters under real production constraints: trend analysis, instant-read interaction loops, lightweight 3D assets, texture craft, and store-ready delivery for TikTok and TikTok Lite.",
      "challenge": "On TikTok, an AR effect has only a few seconds to prove itself. It must read instantly in the camera, reward the user clearly, and stay light enough for social sharing.\n\nThe design challenge was to make each effect understandable before the user stops recording.",
      "research": "I reviewed recent TikTok effect trends and mapped three useful levers: beauty augmentation, atmosphere, and interaction. Beauty effects were crowded; atmosphere and simple interaction still had more room.\n\nThat research shaped the production hypothesis: each effect should own one clear modality, so users understand the loop without instructions.",
      "strategy": "I designed one effect per modality. Mushroom Eyes tested beauty-adjacent face augmentation, Pearl Glitter treated the whole frame as an atmosphere canvas, and World Cup Soccer Baby used interaction and timing around a global football moment.\n\nThe commercial fit came from matching creative ambition to platform constraints: fast comprehension, visual reward, and lightweight performance.",
      "implementation": "I worked through the ByteDance AR workshop pipeline, using Effect House source projects, visual concepting, texture work, and lightweight 3D production for the World Cup ball character.\n\nEach loop was kept compact: trigger, response, reward, reset. That made the effects easier to try, repeat, and share.",
      "results": "Two filters shipped to TikTok and TikTok Lite, reached 10K+ combined views, and received Best of the Week recognition. The workshop recording also became process evidence for the production pipeline.",
      "lessons": "The useful design lesson was speed of comprehension. A social AR effect needs a loop that can be understood, enjoyed, and repeated almost immediately.",
      "nextSteps": "The same logic can extend into longer AI and AR experiences: one clear input, visible response, quick reward, and a lightweight reset.",
      "media": [
        {
          "section": "strategy",
          "src": "/work/bytedance/01-hero-football-baby.png",
          "caption": "World Cup Soccer Baby. The official Al Rihla 3D ball is reskinned as a character, showing how the effect loop turns a known object into a camera reward."
        },
        {
          "section": "implementation",
          "src": "/work/bytedance/02-football-model.png",
          "caption": "Clean portfolio rebuild of the AR effect loop: character, camera preview, and lightweight status UI without third-party stock-watermark sources."
        },
        {
          "section": "research",
          "src": "/work/bytedance/03-basketball-render.jpg",
          "caption": "Original replacement for the early basketball concept, showing how object motion and camera framing could extend the effect beyond face filters."
        }
      ],
      "designQuestions": [
        "How might an AR effect become instantly understandable inside a short-form camera experience?"
      ],
      "keyDecisions": [
        {
          "title": "Design for the first three seconds",
          "problem": "TikTok AR effects have very little time to communicate what the user should do.",
          "decision": "I prioritised immediate camera feedback, simple character behaviour, and readable visual rewards.",
          "why": "Short-form users need to understand the interaction before they decide whether to keep recording.",
          "outcome": "shipped TikTok and TikTok Lite filters had clear camera feedback, short loops, and measurable public views."
        },
        {
          "title": "Keep the effect loop lightweight",
          "problem": "Too many visual layers can obscure the user's face or make the effect feel slow.",
          "decision": "I kept the interaction loop compact: trigger, response, reward, reset.",
          "why": "A lightweight loop supports performance constraints and makes the effect usable across more devices.",
          "outcome": "the final filters stayed platform-ready and were recognized in TikTok's Best of the Week context."
        }
      ]
    }
  },
  {
    "slug": "lantern-festival",
    "title": "Guizhou Lantern Festival GenAI Promo",
    "cardHeadline": "Turning festival references into controllable AI shots",
    "description": "A commercial GenAI motion workflow that turns lantern-festival references into a curated promotional shot bank through AI generation, upscaling, and edit direction.",
    "researchQuestion": "How can static festival references become cinematic commercial motion while preserving cultural specificity?",
    "intro": "A commercial GenAI video experiment for a Guizhou lantern-festival campaign. I curated real festival references, generated and animated shot variations, cleaned selected outputs, and edited a short promotional reel from unstable short clips.",
    "type": "GenAI Commercial Video, AI Art Direction",
    "year": 2024,
    "tags": [
      "GenAI Video",
      "Runway",
      "Commercial",
      "Art Direction",
      "AI Workflow"
    ],
    "featured": false,
    "thumbnail": "/thumbnails/lantern-festival.jpg",
    "href": "/work/lantern-festival",
    "caseStudy": {
      "role": "GenAI Creative Technologist, AI motion designer",
      "timeline": "Apr 2024, commercial lantern-festival promo experiment",
      "team": "Solo AI workflow and edit direction using client reference material, image-to-video generation, upscaling, and human editorial curation.",
      "impact": "A commercial GenAI video workflow for a lantern-festival campaign. The case shows reference curation, image-to-video generation, upscaling, shot selection, and editorial control under early tool instability.",
      "challenge": "The brief needed cinematic festival motion without drifting into generic fantasy imagery. Static lantern references carried the cultural specificity, but early AI video tools struggled with continuity, text, crowds, and spatial logic.\n\nThe design challenge was to use AI for shot exploration while keeping human art direction responsible for coherence.",
      "research": "I built a source world from real lantern installations, illuminated gates, dragon forms, stage moments, visitors, and night corridors.\n\nThe hypothesis was that reference-led generation would hold cultural specificity better than pure text prompting. Testing showed that AI video was strongest as a shot bank, not as a final-film generator.",
      "strategy": "I broke the promo into motion types: fly-through, lantern close-up, dragon reveal, crowd atmosphere, gate approach, and character movement.\n\nThat gave the workflow a production logic: generate many short attempts, compare them against the campaign mood, upscale selected shots, and edit only what holds together.",
      "implementation": "The pipeline combined reference curation, prompt direction, image-to-video generation, upscaling, and editorial selection. I used Runway-style generation for motion tests and then cut usable short outputs into a compact web reel.\n\nThe important design judgement was knowing when to discard an impressive clip because it broke the cultural or spatial promise.",
      "results": "The outcome is a compact GenAI promo reel and a repeatable method for commercial AI motion: source curation, motion-type batching, visual QA, upscaling, and human edit direction.",
      "lessons": "Early AI video rewards editorial discipline. The designer's job is deciding what the model should explore, which references must stay visible, and when an artifact breaks the brief.",
      "designQuestions": [
        "How might AI expand festival references into cinematic commercial shots?"
      ],
      "keyDecisions": [
        {
          "title": "Use real festival material as the anchor",
          "problem": "Pure text-to-video outputs drifted toward generic fantasy scenes and lost the specificity of the lantern-festival context.",
          "decision": "I curated real installation, stage, corridor, dragon, and night-market references before generating motion variations.",
          "why": "The references constrained the model and gave the final reel a clearer relationship to a real commercial brief.",
          "outcome": "the selected reel uses generated motion while keeping lantern architecture, night density, and campaign atmosphere visible."
        },
        {
          "title": "Treat AI video as a shot bank",
          "problem": "Early image-to-video tools were unstable in character continuity, text rendering, and spatial logic.",
          "decision": "I generated many short clips by motion type, then selected, upscaled, and cut only the usable outputs.",
          "why": "This preserves speed and exploration while keeping human judgement responsible for quality and coherence.",
          "outcome": "the final preview is a curated edit, not an unfiltered model output."
        }
      ],
      "media": [
        {
          "section": "implementation",
          "src": "/work/lantern-festival/preview.mp4",
          "kind": "video",
          "poster": "/work/lantern-festival/hero.jpg",
          "caption": "Edited web reel from selected image-to-video lantern-festival clips. The reel uses generated shots as a curated commercial shot bank, not as an unfiltered model output.",
          "aspectRatio": "16/9"
        },
        {
          "section": "results",
          "src": "/work/lantern-festival/hero.jpg",
          "caption": "Selected frame from the generated promotional shot bank, balancing spectacle, lantern architecture, and campaign readability.",
          "aspectRatio": "4/3"
        }
      ],
      "nextSteps": "A stronger next version would pair the reel with client-facing shot boards that show accepted clips, rejected clips, and the quality criteria used for selection."
    }
  },
  {
    "slug": "greenmove",
    "title": "Healmove",
    "cardHeadline": "GenAI future-mobility film",
    "description": "A future-mobility design fiction built through an early GenAI content pipeline, connecting low-carbon travel, micro-fitness, and human-edited AI film craft.",
    "researchQuestion": "By 2045, can the car become a third space for health rather than a fourth source of sedentary time?",
    "intro": "GreenMove is a future-mobility design fiction produced during the SCFAI and Wutong Carlink joint course. The film used a controlled GenAI production workflow: strategy and script, AI shot generation, Runway Gen-1 motion, and human edit direction.",
    "type": "GenAI Content Production, Future Mobility",
    "year": 2023,
    "tags": [
      "Content Creation",
      "Runway Gen-1",
      "Future Mobility",
      "Sustainable Design",
      "MidJourney",
      "Wutong Carlink"
    ],
    "featured": true,
    "thumbnail": "/work/greenmove/00-cover.png",
    "videoUrl": "https://vimeo.com/1191365682",
    "pdfUrl": "/work/greenmove/Healmove-EN.pdf",
    "award": "Best Sustainable Design Award · SCFAI × Wutong Carlink · 2024",
    "href": "/work/greenmove",
    "caseStudy": {
      "role": "AI Creative Technologist, GenAI video pipeline",
      "timeline": "Sep to Dec 2023, SCFAI and Wutong Carlink future-mobility course",
      "team": "Solo project inside a joint enterprise course between Sichuan Fine Arts Institute's Design Academy and Wutong Carlink, Tencent's connected-vehicle platform. Industry leads at Wutong Carlink and SCFAI faculty co-evaluated the final submissions.",
      "impact": "A pre-mainstream GenAI film workflow for a future-mobility concept: ChatGPT for scenario logic, MidJourney for shot generation, Runway Gen-1 for image-conditioned motion, and human editing with art direction for a coherent 1m20s reel.",
      "challenge": "The future-mobility brief could easily become a speculative car render. I reframed it around a user behavior problem: low-carbon choices rarely feel desirable when daily mobility is shaped by habit, convenience, cost, and comfort.",
      "strategy": "The service concept connects low-carbon travel, micro-fitness, adaptive guidance, and personal carbon feedback. Instead of making sustainability a dashboard metric, I placed it inside trip rituals and cabin moments.\n\nThe AI production strategy matched that service logic: story beats first, generated frames second, human edit last.",
      "implementation": "The production method was deliberately pipeline-based rather than one-shot. I used ChatGPT to structure the obesity-tax worldbuilding and persona arcs, MidJourney to generate the key frames and environment stills, Runway Gen-1 to animate selected frames through image-conditioned video, then edited the final sequence in Premiere. The value was not just the final film, but the ability to control a repeatable GenAI content workflow with human art direction at each stage.",
      "results": "The project delivered a 1m20s AI-filmed reel, a typeset case book, a worldbuilding deck, and a service-platform diagram. It received Best Sustainable Design Award in the SCFAI and Wutong Carlink course context.",
      "media": [
        {
          "section": "challenge",
          "src": "/work/greenmove/01-introduction.jpg",
          "caption": "Cover board. Healmove frames sustainable health and mobility as a customized travel experience on top of L5 autonomous driving."
        },
        {
          "section": "strategy",
          "src": "/work/greenmove/02-design-concept.jpg",
          "caption": "Main concept. Green Travel combines EV mobility and micro-fitness through immersive fitness, personal carbon tracking, and adaptive AI guidance."
        },
        {
          "section": "strategy",
          "src": "/work/greenmove/03-scenario.jpg",
          "caption": "Central theme. The 2045 obesity crisis sets up the Personal Carbon Account as a service infrastructure for healthier mobility behavior."
        },
        {
          "section": "implementation",
          "src": "/work/greenmove/04-world-building.jpg",
          "caption": "World building. Two personas carry the scenario, making the future mobility system easier to evaluate as lived experience."
        },
        {
          "section": "implementation",
          "src": "/work/greenmove/05-ai-filming.jpg",
          "caption": "Pre-mainstream AI content pipeline. MidJourney generated stills, Runway Gen-1 created image-conditioned motion, and human editing controlled pacing."
        },
        {
          "section": "results",
          "src": "/work/greenmove/06-award-certificate.jpg",
          "caption": "Best Sustainable Design Award certificate from the 2024 SCFAI and Wutong Carlink future-mobility joint course."
        }
      ],
      "research": "The project started with a behavioural tension: people understand climate urgency in the abstract, but mobility decisions are made through habit, convenience, and immediate cost. The design opportunity was to make a future mobility system emotionally legible, not only technically plausible.",
      "lessons": "The strongest speculative work connected carbon accounting to everyday rituals rather than presenting sustainability as a dashboard metric. The strongest AI workflow lesson was similar: generative tools are useful when the human designer owns the brief, shot list, selection criteria, and final edit.",
      "nextSteps": "A next iteration could prototype the service touchpoints around booking, in-vehicle feedback, and post-trip reflection with real users.",
      "designQuestions": [
        "How can a future mobility concept make low-carbon behaviour feel desirable instead of punitive?"
      ],
      "keyDecisions": [
        {
          "title": "Make carbon behaviour tangible",
          "problem": "Carbon metrics alone do not explain why someone would change a daily mobility habit.",
          "decision": "I linked carbon feedback to trip rituals, cabin moments, and service touchpoints.",
          "why": "Sustainable choices become more persuasive when they are embedded in the experience itself.",
          "outcome": "the boards connect cabin experience, carbon account logic, AI guidance, and post-trip behavior instead of stopping at a vehicle image."
        },
        {
          "title": "Controlled GenAI shot pipeline",
          "problem": "Early generative video produced atmosphere, but the clips became disconnected without a story process.",
          "decision": "I used a film pipeline: define story beats, generate key stills, animate selected frames, then edit with human pacing.",
          "why": "This makes the AI output accountable to a storyboard and service concept, not just to visual novelty.",
          "outcome": "the final film follows defined story beats and service moments rather than a loose sequence of generated clips."
        }
      ]
    }
  }
];

// Featured 8 for the home Selected Works.
// AI/product interface leads first, then platform, spatial, and one AI motion proof.
export const SELECTED_FEATURED = [
  PROJECTS.find((p) => p.slug === "smataste")!,
  PROJECTS.find((p) => p.slug === "co-cerebral")!,
  PROJECTS.find((p) => p.slug === "meta-station")!,
  PROJECTS.find((p) => p.slug === "beatrol")!,
  PROJECTS.find((p) => p.slug === "poeticform")!,
  PROJECTS.find((p) => p.slug === "bytedance")!,
  PROJECTS.find((p) => p.slug === "sprayscape")!,
  PROJECTS.find((p) => p.slug === "lantern-festival")!,
];

// Explorations for the parallax section.
export const EXPLORATIONS = [
  PROJECTS.find((p) => p.slug === "beatrol")!,
  PROJECTS.find((p) => p.slug === "botanictrum")!,
  PROJECTS.find((p) => p.slug === "lunacy")!,
  PROJECTS.find((p) => p.slug === "meta-station")!,
  PROJECTS.find((p) => p.slug === "neon-nike")!,
  PROJECTS.find((p) => p.slug === "wildfire-whispers")!,
];
