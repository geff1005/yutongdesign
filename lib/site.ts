// Personal info — keep this file as the single source of truth for identity content.
// Sourced from CV (JulianZhu Resume4-21-5.pdf) + Notion Designer Portfolio page.

export const SITE = {
  name: "Julian Zhu",
  fullName: "Julian Yutong Zhu",
  email: "julianyutongzhu@gmail.com",
  location: "London",
  pitch:
    "Designing AI-enabled creative workflows where emerging tech and human craft meet.",
  roles: [
    "Creative Technologist",
    "Designer",
    "Researcher",
    "Builder",
  ] as const,
  // Marquee text in Contact section (single phrase repeated; keep ALL CAPS).
  marquee: "DESIGN. BUILD. SHIP.",
  socials: {
    linkedin: "https://www.linkedin.com/in/yutongdesign",
    github: "https://github.com/geff1005",
    instagram: "",
    email: "mailto:julianyutongzhu@gmail.com",
  },
  // Real, verifiable numbers — replaces the fabricated "20+ years / 200% satisfied" stats.
  stats: [
    { num: "12+", label: "Years Practice" },
    { num: "9", label: "Featured Works" },
    { num: "3", label: "Design Awards" },
  ] as const,
  // Awards (sourced from Resume + Notion 06-荣誉奖项)
  awards: [
    { name: "Red Dot Design Concept (Shortlist)", year: 2023 },
    { name: "International Design Award — Silver & Bronze", year: 2023 },
    { name: "European Product Design Award (Top Design)", year: 2023 },
    { name: "The Guardian feature", year: 2026, note: "How art school creators are adapting to the age of AI" },
  ] as const,
};
