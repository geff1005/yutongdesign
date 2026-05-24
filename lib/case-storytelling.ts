import type { Project } from "./projects";

type CaseStudyStory = NonNullable<Project["caseStudy"]>;

export const CASE_STORYTELLING: Record<string, Partial<CaseStudyStory>> = {
  "co-cerebral": {
    designQuestions: [
      "How might an AI learning interface make structured disagreement visible instead of smoothing every answer into one fluent response?",
      "How can students understand when they are delegating thinking to AI versus using AI to scaffold better thinking?",
    ],
    keyDecisions: [
      {
        title: "Turn Six Hats into the product constraint",
        problem:
          "Open-ended chat made the tutor feel smart, but it did not reliably make the learner think in different modes.",
        decision:
          "I treated the Six Thinking Hats as the interaction model: each agent owns one cognitive mode, one voice, and one turn-taking behaviour.",
        why:
          "The framework gives AI a legible job. It prevents the system from collapsing into a single answer and lets the group compare evidence, emotion, risk, optimism, creativity, and synthesis.",
        outcome:
          "The prototype communicates AI as a co-thinker rather than an answer machine, which is the central thesis argument.",
      },
      {
        title: "Make reasoning embodied, not invisible",
        problem:
          "Learners could not tell which perspective was speaking when all guidance arrived as the same text interface.",
        decision:
          "I paired voice input/output with distinct Spline agent presences and visual states for each reasoning role.",
        why:
          "Embodiment helps students remember that they are moving through a structured thinking process, not simply prompting a chatbot.",
        outcome:
          "The demo gives tutors and students a concrete interface language for multi-agent learning.",
      },
    ],
  },
  smataste: {
    designQuestions: [
      "How might a workplace dining service remember personal food preferences without making diners feel surveilled?",
      "How can kitchen teams receive useful demand signals without adding another dashboard to their service routine?",
    ],
    keyDecisions: [
      {
        title: "Split the system into diner memory and kitchen signal",
        problem:
          "A single AI recommendation layer helped diners but did not solve the kitchen team's uncertainty around demand, waste, and prep.",
        decision:
          "I designed two paired AI models: a personal taste memory for diners and an aggregated taste-prediction signal for chefs.",
        why:
          "The split respects two different users. Diners need agency and relevance; kitchens need planning confidence, not individual surveillance.",
        outcome:
          "The prototype framed SmaTaste as an operational service system rather than a food app mockup.",
      },
      {
        title: "Expose the Taste Index as a trust surface",
        problem:
          "If AI silently changes meal options, diners have little reason to trust or correct the system.",
        decision:
          "I made the Smart Taste Index visible and adjustable through lightweight mobile moments and kitchen-side summaries.",
        why:
          "A visible index turns prediction into a conversation: diners can understand what the system thinks it knows, and kitchens can see patterns without reading private profiles.",
        outcome:
          "The prototype demonstrated a clearer service loop between preference, recommendation, and operational decision-making.",
      },
    ],
  },
  skgplus: {
    designQuestions: [
      "How might a service-led Chinese studio homepage become an international-facing immersive-studio portfolio?",
      "How can SKG+ show mapping, exhibitions, cultural heritage, LED installations, and show systems without forcing visitors through generic service labels?",
      "What category, icon, and motion language can make the archive feel cinematic while still being easy to scan?",
    ],
    keyDecisions: [
      {
        title: "Translate service tiles into portfolio entry points",
        problem:
          "The legacy homepage organized SKG+ through broad service doors such as About, Works, Class, Exhibition, Honor, and Find. It showed company scope, but visitors still had to decode what kind of creative work the studio actually made.",
        decision:
          "I reframed the navigation around client-facing project categories: Art Direction, 3D Mapping, Immersive Space, Cultural Heritage, LED Installations, and Exhibition Systems.",
        why:
          "A taxonomy lets viewers enter by experience type instead of company department. It turns the archive from a service board into a portfolio that can be scanned by discipline, scale, and atmosphere.",
        outcome:
          "170+ heterogeneous works became easier to browse without flattening everything into one generic project grid.",
      },
      {
        title: "Internationalize through restraint",
        problem:
          "The old site relied on a heavy dark texture and service JPGs. It felt atmospheric, but the visual system risked reading as local and dated rather than global and studio-grade.",
        decision:
          "I moved the interface toward a restrained black stage, sharp typography, compact icons, and media-led sections.",
        why:
          "SKG+'s project imagery is already spectacular. A quieter frame makes mapping, LED, cultural heritage, and exhibition visuals feel more premium instead of adding another decorative layer.",
        outcome:
          "The new direction feels closer to an international immersive-studio portfolio while still preserving the dramatic tone of the original brand.",
      },
      {
        title: "Make motion part of the category logic",
        problem:
          "Static JPG explanations could show what each service contained, but they could not express the temporal quality of projection mapping, festival-scale LED work, or exhibition motion.",
        decision:
          "I planned reveal states, hover behaviors, showreel-like transitions, and category icon motion so the archive itself behaves more like an immersive-media system.",
        why:
          "For this studio, motion is not decoration. It is a way to communicate scale, atmosphere, and the relationship between project categories.",
        outcome:
          "The portfolio became easier to scan while also feeling more aligned with SKG+'s live visual practice.",
      },
    ],
  },
  syncoe: {
    designQuestions: [
      "How might invisible cognitive state become a useful coaching signal without reducing the player to a score?",
      "How can BCI feedback be shown during esports training without distracting from performance?",
    ],
    keyDecisions: [
      {
        title: "Translate brain data into coaching language",
        problem:
          "Raw BCI signals are meaningful to researchers, but not actionable for players or coaches in a training session.",
        decision:
          "I designed the interface around states, thresholds, and session patterns rather than raw neurological graphs.",
        why:
          "Coaches need to identify moments of fatigue, focus, or overload and connect them to training decisions.",
        outcome:
          "The product story shifted from device novelty to a usable training companion.",
      },
      {
        title: "Keep feedback peripheral during play",
        problem:
          "A dashboard that asks for too much attention can harm the very performance it tries to improve.",
        decision:
          "I separated live peripheral indicators from deeper post-session analysis.",
        why:
          "The player receives enough feedback to stay aware, while the coach can inspect richer patterns after the session.",
        outcome:
          "The prototype balances real-time awareness with reviewable performance evidence.",
      },
    ],
  },
  beatrol: {
    designQuestions: [
      "How might an autonomous driving interface communicate fatigue and handover risk before it becomes an emergency?",
      "What should a tactile control surface do when the driver is between active control and automation trust?",
    ],
    keyDecisions: [
      {
        title: "Design fatigue as a gradual state",
        problem:
          "Binary alerts make the system feel reactive; drivers need time to understand why control is being requested.",
        decision:
          "I represented fatigue through progressive visual states, soft warnings, and a tactile steering-wheel interaction.",
        why:
          "A gradual model supports trust because the car explains risk before it demands action.",
        outcome:
          "The interface reframed handover as a shared negotiation between driver and system.",
      },
      {
        title: "Use the wheel as the communication point",
        problem:
          "A screen-only warning can be missed in a semi-autonomous cockpit, especially when attention is already degraded.",
        decision:
          "I moved part of the feedback into the steering wheel as a physical, glance-free cue.",
        why:
          "The wheel is already the handover object, so it is the most direct place to signal readiness and urgency.",
        outcome:
          "The prototype made the service scenario more believable than a pure dashboard concept.",
      },
    ],
  },
  sprayscape: {
    impact:
      "A spatial graffiti system exploring how public wall-making, authorship, and temporary street art can be negotiated and archived. The later MR extension turns SprayScape from a screen-based sharing concept into a context-aware spatial record: the wall, location, scale, and moment of making stay attached to the artwork.",
    challenge:
      "The original problem was not simply that street art needed another sharing platform. Graffiti and public wall work are temporary, contested, and deeply tied to place. A photo can preserve the image, but it often loses the social context: who made it, where it appeared, what wall it responded to, and how long it existed before being covered or removed.\n\nSprayScape started from that tension. If public mark-making is both creative expression and civic negotiation, the design challenge is to support discovery and archiving without flattening the work into a standard image feed.",
    research:
      "I treated the street wall as a system with multiple stakeholders: artists who want authorship and visibility, viewers who encounter work in place, and cities that manage public surfaces. The key insight was that archiving is not only about saving an image. It is about saving the relationship between artwork, surface, time, and audience.\n\nThat led to a second constraint: the archive should not feel like a gallery detached from the street. It needed to preserve enough spatial context for someone to understand how the work lived in public.",
    strategy:
      "The design direction moved from a generic upload platform toward a spatial archive. Instead of asking users to only post finished graffiti images, the system treats each work as a record with location, surface, authorship, and temporal metadata.\n\nThe MR extension became a key decision because spatial computing can keep the wall attached to the artwork. A viewer can revisit a piece in relation to the physical environment, not only as a cropped image in a feed.",
    implementation:
      "The core product logic is a public-wall archive with capture, browsing, and contextual replay. The later MR layer adds an immersive viewing mode, using the original wall and surrounding space as part of the record.\n\nThis shifted the prototype from a visual showcase into a system proposal: a way to negotiate public creativity, memory, and place through interface design.",
    results:
      "The project now communicates a clearer design problem: ephemeral street art needs a spatial archive, not only a social feed. The MR extension strengthens the argument by showing why ordinary image storage is not enough when the meaning of the work depends on wall, scale, location, and time.",
    designQuestions: [
      "How might a public-wall platform preserve authorship and context without turning street art into a generic image feed?",
      "How can mixed reality help archive temporary work when the wall, scale, and location are part of the artwork?",
    ],
    keyDecisions: [
      {
        title: "Treat the wall as part of the data model",
        problem:
          "A cropped photo can document an artwork, but it strips away the surface, neighbourhood, and temporal context that made the work meaningful.",
        decision:
          "I framed each piece as a spatial record: artwork plus wall, location, authorship, and time.",
        why:
          "Street art is inseparable from public context. Preserving that context makes the archive more truthful and more useful.",
        outcome:
          "SprayScape becomes an archiving system rather than a decorative gallery.",
      },
      {
        title: "Add MR as contextual replay",
        problem:
          "A normal gallery view cannot show how a temporary artwork occupied public space.",
        decision:
          "I added an MR direction that lets the work be revisited in relation to a real or reconstructed wall.",
        why:
          "Spatial computing carries scale and placement, which are exactly the details lost in ordinary documentation.",
        outcome:
          "The project gains a stronger design rationale for why emerging technology belongs in the service.",
      },
    ],
  },
  "wildfire-whispers": {
    designQuestions: [
      "How might climate risk be experienced as a living signal rather than a distant data visualisation?",
      "What interaction language can make a speculative environmental interface feel fragile, embodied, and urgent?",
    ],
    keyDecisions: [
      {
        title: "Turn wildfire data into a sensory encounter",
        problem:
          "Charts can explain fire risk, but they rarely make the viewer feel the instability of an ecosystem under stress.",
        decision:
          "I translated the topic into an interactive installation with responsive visuals, sound, and gesture-driven behaviour.",
        why:
          "Embodied feedback creates a more immediate relationship between human action and environmental change.",
        outcome:
          "The work becomes an affective climate interface rather than a conventional awareness poster.",
      },
      {
        title: "Use fragility as the interaction rule",
        problem:
          "A polished, stable interface would undercut the subject of volatility and ecological loss.",
        decision:
          "I designed the visual system to shift, flicker, and respond as if it were unstable.",
        why:
          "The behaviour lets the installation communicate risk through motion and atmosphere, not explanation.",
        outcome:
          "The final piece gives viewers a clearer emotional entry point into a complex climate issue.",
      },
    ],
  },
  poeticform: {
    role: "AI Creative Technologist · Interaction Designer",
    timeline: "2024 · Undergraduate graduation project",
    team: "Solo capstone · Sichuan Fine Arts Institute",
    impact:
      "Built a repeatable Human-AI workflow that turned Song poetry into digital poem sculptures: poem interpretation, structured prompt schema, ComfyUI generation, image-to-3D reconstruction, and exhibition interaction.",
    challenge:
      "Most AI poetry experiments stop at illustration: a poem enters the model and a decorative image comes out. That loses the structure of the poem, especially its mood, imagery, cultural references, and rhythm.\n\nThe core question became: how can a poem's mood become a navigable spatial form?",
    research:
      "I treated the poem as structured material rather than a sentence to decorate. The research mapped Song Ci imagery, emotional tone, word style, cultural objects, and sensory cues into variables a generation workflow could use.\n\nThat revealed the authorship problem. AI could produce variation, but it could not decide what counted as poetic fidelity. The designer had to stay in the loop: selecting source meaning, defining the schema, tuning prompts, curating outputs, and deciding which results deserved reconstruction.",
    strategy:
      "The case is structured as one workflow: poem interpretation, structured prompt, ComfyUI generation, image-to-3D reconstruction, exhibition object.\n\n- Interpretation turns mood, imagery, culture, and material cues into design inputs.\n- The prompt schema keeps those inputs legible across iterations.\n- ComfyUI becomes the node-based co-creation environment, where the workflow can be adjusted rather than hidden.\n- Image-to-3D tools turn selected results into spatial probes for a digital garden and physical exhibition.",
    implementation:
      "I designed the prompt schema around subject, action, object, culture, emotion, mood, lighting, setting, perspective, style, texture, and medium. That made the poem actionable without flattening it into one prompt.\n\nComfyUI handled the generation layer as a visible, adjustable graph. Selected images then moved into emerging image-to-3D tools, including CSM-style viewers, Fantasia3D references, and TripoSR probes. The point was not to claim perfect mesh quality. It was to test whether generated poetic imagery could become a spatial object visitors could orbit, compare, and encounter in an exhibition.",
    results:
      "The final exhibition combined a workflow wall, a digital garden interface, poem-inspired sculptures, and screen-based interaction. Visitors could see both the artifacts and the production logic behind them.\n\nThe strongest result is the method. Poetic Form shows how a designer can orchestrate prompt systems, ComfyUI workflows, image-to-3D tools, curation, and exhibition display into one Human-AI creative process.",
    lessons:
      "AI craft is not only output quality. The important design work sits before and after generation: defining the schema, choosing what the model should preserve, deciding what humans must judge, and making the workflow visible enough for others to trust.",
    nextSteps:
      "The next direction is spatial computing: poem-sculptures as ambient desktop companions or MR artifacts that sit in a room, respond to context, and keep their poem-to-form lineage visible. These are future probes, not shipped products.",
    designQuestions: [
      "How can a poem's mood become a navigable spatial form?",
      "How can an AI workflow preserve human authorship instead of replacing it?",
    ],
    keyDecisions: [
      {
        title: "Structured prompt system",
        problem:
          "A direct poem-to-image prompt produced attractive visuals, but it could not explain why a form belonged to a poem.",
        decision:
          "I broke each poem into mood, imagery, cultural objects, sensory cues, material direction, and camera language before generation.",
        why:
          "The schema made language operational. The model was responding to a designed interpretation layer, not guessing from a poetic sentence.",
        outcome:
          "Each artifact could be defended through a chain of meaning, prompt logic, and visual judgement.",
      },
      {
        title: "ComfyUI co-creation pipeline",
        problem:
          "If the backend stayed invisible, the project would look like a final image collection rather than a design system.",
        decision:
          "I used ComfyUI as a node-based production environment so generation choices could be inspected, tuned, and reused.",
        why:
          "A graph-based workflow makes the designer's labour visible: schema, model control, iteration, and curation become part of the work.",
        outcome:
          "The case demonstrates AI production literacy instead of only final visual taste.",
      },
      {
        title: "Image-to-3D exhibition object",
        problem:
          "Flat images could not carry the tactile quality of Taihu stone or the public experience of a graduation exhibition.",
        decision:
          "I tested image-to-3D reconstruction to turn selected generated results into digital sculptures, printed objects, and exhibition displays.",
        why:
          "The cultural idea needed a body. Spatial artifacts let visitors compare poem, image, model, and object in one exhibition loop.",
        outcome:
          "The final show presented a complete creative system: language, AI workflow, interface, sculpture, and audience.",
      },
    ],
    modelProbe: {
      title: "Image-to-3D Probe",
      src: "/work/poeticform/models/poeticform-probe.glb",
      poster: "/work/poeticform/models/poeticform-probe-obj.jpg",
      caption:
        "Early exploration of image-to-3D reconstruction when texture and mesh generation tools were still emerging. The source OBJ was converted into a web-ready GLB and lazy-loaded so the case keeps a light first paint.",
    },
    media: [
      {
        section: "challenge",
        src: "/work/poeticform/case/concept-description.jpg",
        caption:
          "Graduation concept board: the project asks how a poem can become a spatial form rather than a single generated image.",
      },
      {
        section: "research",
        src: "/work/poeticform/case/nlp-analysis.jpg",
        caption:
          "Language analysis layer: the Song Ci corpus is translated into imagery, emotion, word style, and frequency signals before visual generation.",
      },
      {
        section: "strategy",
        src: "/work/poeticform/case/human-ai-relationship.jpg",
        caption:
          "Human-AI relationship diagram: designer, visitor, and AI are given different responsibilities in the creative loop.",
      },
      {
        section: "strategy",
        src: "/work/poeticform/case/workflow-overview.jpg",
        caption:
          "Full workflow overview: poem analysis, prompt engineering, model generation, view inference, and 3D reconstruction.",
      },
      {
        section: "implementation",
        src: "/work/poeticform/case/prompt-engineering.jpg",
        caption:
          "Prompt engineering schema: poetic language is split into subject, action, object, culture, emotion, mood, lighting, setting, perspective, style, texture, and medium.",
      },
      {
        section: "implementation",
        src: "/work/poeticform/case/comfyui-tripo-workflow.jpg",
        caption:
          "ComfyUI backend evidence: a node graph connects image generation, transparent decode, and Tripo-style GLB preview.",
      },
      {
        section: "implementation",
        src: "/work/poeticform/case/technical-sd-lora.jpg",
        caption:
          "Text-to-image technical support: prompt variables and LoRA-style model control shape material, voids, and posture.",
      },
      {
        section: "implementation",
        src: "/work/poeticform/case/technical-image-to-3d.jpg",
        caption:
          "Image-to-3D technical support: inference creates novel views, then reconstruction turns selected imagery into a 3D model.",
      },
      {
        section: "implementation",
        src: "/work/poeticform/case/csm-3d-viewer-ui.jpg",
        caption:
          "CSM 3D Viewer process evidence: original image, segmented image, mesh preview, texture resolution, topology, and OBJ export controls in one platform UI.",
      },
      {
        section: "implementation",
        src: "/work/poeticform/case/voxcraft-image-to-3d-grid.mp4",
        kind: "video",
        poster: "/work/poeticform/case/voxcraft-image-to-3d-grid.jpg",
        caption:
          "VoxCraft image-to-3D references used as process evidence for testing multiple generated forms as spatial objects.",
      },
      {
        section: "implementation",
        src: "/work/poeticform/case/view-3d-reconstruction.jpg",
        caption:
          "View inference and 3D reconstruction: selected generated forms move from image outputs into spatial artifacts.",
      },
      {
        section: "results",
        src: "/work/poeticform/case/poem-sculpture-collage.jpg",
        caption:
          "Generated and reconstructed poem-sculpture studies: a visual bank for choosing which forms deserved exhibition treatment.",
      },
      {
        section: "results",
        src: "/work/poeticform/case/exhibition-entry-interface.jpg",
        caption:
          "Digital garden entry interface: visitors enter the poem-sculpture space through a navigable scene.",
      },
      {
        section: "results",
        src: "/work/poeticform/case/exhibition-garden-views.jpg",
        caption:
          "Exhibition views from the digital garden, showing poem sculptures as navigable spatial objects.",
      },
      {
        section: "results",
        src: "/work/poeticform/case/exhibition-installation-room.jpg",
        caption:
          "Graduation exhibition installation with workflow wall, sculpture plinths, and desktop interface presented as one AI creative system.",
      },
      {
        section: "nextSteps",
        src: "/work/poeticform/case/next-mr-interface.jpg",
        caption:
          "Future direction: a visionOS-style MR interface where poem-sculptures become room-scale ambient artifacts. This is a concept direction, not a shipped product.",
      },
      {
        section: "nextSteps",
        src: "/work/poeticform/case/next-desk-object.jpg",
        caption:
          "Future direction: ambient desk-object companions that preserve the poem-to-form lineage as part of the interface.",
      },
    ],
  },
  lunacy: {
    role: "Designer · visual systems",
    timeline: "2024",
    team: "Self-initiated speculative archive",
    impact:
      "A speculative web and motion archive that treats lunar mythology, image culture, and digital memory as a browsing system.",
    challenge:
      "The project began with a problem of archive experience. Lunar references are scattered across science, folklore, cinema, and visual culture, but browsing them often feels like searching a database rather than entering a world.",
    research:
      "I studied how moon imagery carries different meanings: measurement, madness, romance, navigation, ritual, and science. The tension was how to hold those meanings together without turning the site into a moodboard.",
    strategy:
      "I framed LUNACY as an archive with atmosphere. The interface needed enough structure for browsing, but enough ambiguity to feel like entering a lunar field.",
    implementation:
      "The work combines web layout, motion fragments, and image sequencing. Each screen balances index-like clarity with cinematic pacing.",
    results:
      "The outcome is a visual archive concept that demonstrates how a cultural collection can feel navigable without losing its mythic quality.",
    lessons:
      "Archives need hierarchy, but speculative archives also need drift. The useful design tension is between orientation and wonder.",
    nextSteps:
      "A stronger next version would add source metadata, interactive filtering, and a clearer reading path for long-form research.",
    designQuestions: [
      "How might an archive feel searchable and cinematic at the same time?",
      "How can lunar cultural material keep its ambiguity while still becoming a usable interface?",
    ],
    keyDecisions: [
      {
        title: "Balance index and atmosphere",
        problem:
          "A pure gallery felt too loose, while a database view removed the emotional quality of the material.",
        decision:
          "I used an archive structure but softened it with motion, image rhythm, and dark spatial pacing.",
        why:
          "The moon is both scientific object and cultural symbol, so the interface needed both clarity and mystery.",
        outcome:
          "The project communicates a stronger point of view than a standard visual collection.",
      },
      {
        title: "Use cinematic sequencing as navigation",
        problem:
          "Users needed a way to move through references without reading a long explanation first.",
        decision:
          "I treated transitions and image order as part of the storytelling system.",
        why:
          "Sequence can guide attention before the user understands the full archive logic.",
        outcome:
          "The experience feels closer to an exploratory cultural essay than a static index.",
      },
    ],
  },
  botanictrum: {
    role: "Designer · prototyper",
    timeline: "2024",
    team: "Self-initiated interaction study",
    impact:
      "An interaction prototype exploring plants as signal-bearing interfaces through sensing, light, and speculative feedback.",
    challenge:
      "Plant interfaces are often presented as decorative smart objects. I wanted to ask a more specific question: what would it mean to treat a plant as a living participant in an information system?",
    research:
      "The research focused on the mismatch between human time and plant time. Plants respond slowly and indirectly, so the interface needed to translate subtle changes without pretending the plant behaves like a device.",
    strategy:
      "I designed the work as an interpretive layer rather than a control panel. The interface should reveal patterns, not command the plant.",
    implementation:
      "The prototype uses a small sensing and visual feedback setup to create a responsive installation language.",
    results:
      "The project frames botanic interaction as a design problem of translation: how to make slow, living signals perceptible without over-instrumenting them.",
    lessons:
      "The more the interface tried to explain, the less alive the system felt. The strongest moments were suggestive and ambient.",
    nextSteps:
      "A future version could test longer-term sensing and compare how different viewers interpret the same plant signals.",
    designQuestions: [
      "How might a plant become a participant in an interface without being reduced to a sensor?",
      "How can slow biological signals become legible to humans without pretending they are immediate data?",
    ],
    keyDecisions: [
      {
        title: "Design for translation, not control",
        problem:
          "A dashboard would make the plant feel like a machine to monitor.",
        decision:
          "I used ambient feedback and suggestive visual states rather than command-style controls.",
        why:
          "The project is about co-presence with a living system, so the interaction needed to stay soft and interpretive.",
        outcome:
          "The prototype keeps the plant's ambiguity while still making change perceptible.",
      },
      {
        title: "Respect plant time",
        problem:
          "Human interfaces expect fast feedback, but plant responses are slow and contextual.",
        decision:
          "I designed the feedback rhythm around gradual change instead of instant reaction.",
        why:
          "A slower rhythm makes the system feel more honest to the material.",
        outcome:
          "The work becomes a stronger speculative interaction study rather than a novelty sensor demo.",
      },
    ],
  },
  "meta-station": {
    designQuestions: [
      "How might a HarmonyOS lockscreen become a tiny world instead of a static wallpaper?",
      "How can day and night states communicate a system mood without adding interaction complexity?",
    ],
    keyDecisions: [
      {
        title: "Build a world, not a wallpaper",
        problem:
          "A static lockscreen image can be visually rich, but it does not make the phone feel responsive to time and context.",
        decision:
          "I designed Meta Station as a miniature spatial scene with day and night states.",
        why:
          "A world model gives the interface a sense of continuity while staying lightweight enough for a phone surface.",
        outcome:
          "The concept feels more like an ambient system identity than a decorative background.",
      },
      {
        title: "Use state change as the motion story",
        problem:
          "Extra interactions would make the lockscreen concept feel heavy and less platform-realistic.",
        decision:
          "I focused the motion language on transitions between environmental states.",
        why:
          "Time-based change is understandable, glanceable, and aligned with how people already read lockscreen context.",
        outcome:
          "The final card and motion assets communicate the concept quickly without needing a full app flow.",
      },
    ],
  },
  "neon-nike": {
    role: "Visual designer · motion concept",
    timeline: "2024",
    team: "Self-initiated brand atmosphere study",
    impact:
      "A self-initiated motion and visual-system concept exploring how a performance brand could feel more nocturnal, kinetic, and urban.",
    challenge:
      "The problem was not to redesign a brand identity. It was to test how a familiar sports language could shift atmosphere through light, speed, and surface.",
    research:
      "I studied how performance visuals often rely on heroic product shots. The opportunity was to make the environment feel active too: neon, motion blur, rhythm, and city energy.",
    strategy:
      "I treated the work as an atmosphere system. Instead of adding more logos or copy, the direction uses light behaviour and motion pacing to imply speed.",
    implementation:
      "The study combines graphic composition, moving texture, and cinematic cropping into a compact visual direction.",
    results:
      "The outcome is a visual experiment that shows how motion language can carry brand energy without relying on a campaign narrative.",
    lessons:
      "The strongest brand studies do not need to explain the brand. They need to create a recognisable feeling quickly.",
    nextSteps:
      "A fuller version could extend the system into product cards, launch screens, and event graphics.",
    designQuestions: [
      "How might a sports visual system communicate speed through atmosphere rather than slogans?",
      "What happens when the city becomes the motion surface for a performance brand?",
    ],
    keyDecisions: [
      {
        title: "Let light become the brand behaviour",
        problem:
          "A logo-heavy study would feel like a mock campaign instead of a design exploration.",
        decision:
          "I used neon light, contrast, and motion texture as the primary system.",
        why:
          "Light can imply speed and intensity without over-explaining the concept.",
        outcome:
          "The work stays visual, immediate, and more premium.",
      },
      {
        title: "Crop for movement",
        problem:
          "Centered compositions made the study feel like a poster.",
        decision:
          "I used tighter, more cinematic cropping to create a sense of motion beyond the frame.",
        why:
          "The viewer reads the composition as part of an ongoing sequence.",
        outcome:
          "The concept feels closer to motion direction than static graphic design.",
      },
    ],
  },
  bytedance: {
    role: "AR Creative Technologist · Effect House production",
    impact:
      "A short-form creative technology project that shipped platform-ready AR filters under real production constraints: trend analysis, instant-read interaction loops, lightweight 3D/texture assets, and store-ready delivery for TikTok and TikTok Lite.",
    designQuestions: [
      "How might an AR effect become instantly understandable inside a short-form camera experience?",
      "How can character motion, face tracking, and visual reward work together without cluttering the screen?",
    ],
    keyDecisions: [
      {
        title: "Design for the first three seconds",
        problem:
          "TikTok AR effects have very little time to communicate what the user should do.",
        decision:
          "I prioritised immediate camera feedback, simple character behaviour, and readable visual rewards.",
        why:
          "Short-form users need to understand the interaction before they decide whether to keep recording.",
        outcome:
          "The effects became easier to try, repeat, and share.",
      },
      {
        title: "Keep the effect loop lightweight",
        problem:
          "Too many visual layers can obscure the user's face or make the effect feel slow.",
        decision:
          "I kept the interaction loop compact: trigger, response, reward, reset.",
        why:
          "A lightweight loop supports performance constraints and makes the effect usable across more devices.",
        outcome:
          "The final filters were suitable for high-volume social use and featured in TikTok's Best of the Week context.",
      },
    ],
  },
  greenmove: {
    role: "AI Creative Technologist · GenAI video production pipeline",
    impact:
      "A pre-mainstream GenAI film workflow for a future-mobility concept: ChatGPT for scenario logic, MidJourney for shot generation, Runway Gen-1 for image-conditioned motion, and human editing/art direction for a coherent 1m20s reel.",
    research:
      "The project started with a behavioural tension: people understand climate urgency in the abstract, but mobility decisions are made through habit, convenience, and immediate cost. The design opportunity was to make a future mobility system emotionally legible, not only technically plausible.",
    implementation:
      "The production method was deliberately pipeline-based rather than one-shot. I used ChatGPT to structure the obesity-tax worldbuilding and persona arcs, MidJourney to generate the key frames and environment stills, Runway Gen-1 to animate selected frames through image-conditioned video, then edited the final sequence in Premiere. The value was not just the final film, but the ability to control a repeatable GenAI content workflow with human art direction at each stage.",
    lessons:
      "The strongest speculative work connected carbon accounting to everyday rituals rather than presenting sustainability as a dashboard metric. The strongest AI workflow lesson was similar: generative tools are useful when the human designer owns the brief, shot list, selection criteria, and final edit.",
    nextSteps:
      "A next iteration could prototype the service touchpoints around booking, in-vehicle feedback, and post-trip reflection with real users.",
    designQuestions: [
      "How might a future mobility concept make low-carbon behaviour feel desirable instead of punitive?",
      "How can speculative video and interface design make an emerging mobility system feel believable?",
    ],
    keyDecisions: [
      {
        title: "Use fiction to make behaviour tangible",
        problem:
          "A sustainability concept can become abstract if it only explains carbon metrics.",
        decision:
          "I built a future-mobility fiction through Runway-generated video frames and interface moments.",
        why:
          "Fiction lets viewers see how the service would feel in use, not only what it claims to solve.",
        outcome:
          "The project earned Best Sustainable Design Award recognition and communicated a clearer mobility scenario.",
      },
      {
        title: "Turn Runway into a controlled shot pipeline",
        problem:
          "Early generative video could create atmosphere, but without a process it produced disconnected clips that did not tell a coherent product story.",
        decision:
          "I treated GenAI production like a film pipeline: define the story beat, generate key stills, animate only selected frames, then edit with human pacing and art direction.",
        why:
          "This makes the AI output accountable to a storyboard and service concept, not just to visual novelty.",
        outcome:
          "The final reel reads as a designed future-mobility narrative rather than a collection of AI experiments.",
      },
      {
        title: "Connect carbon to user experience",
        problem:
          "Carbon accounting alone does not explain why a person would change mobility behaviour.",
        decision:
          "I linked carbon feedback to trip rituals, cabin moments, and service touchpoints.",
        why:
          "Sustainable choices become more persuasive when they are embedded in the experience itself.",
        outcome:
          "The concept reads as a product-service system rather than a single campaign visual.",
      },
    ],
  },
};
