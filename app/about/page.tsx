import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About · Julian Yutong Zhu",
  description:
    "About Julian Yutong Zhu, a product experience designer and future strategist based in London.",
};

const linkItems = [
  { label: "Email", href: SITE.socials.email },
  { label: "LinkedIn", href: SITE.socials.linkedin },
  { label: "GitHub", href: SITE.socials.github },
];

const skillGroups = [
  {
    title: "Product & UX",
    items: ["Product strategy", "Service design", "Interaction design", "User research", "IA", "Design systems"],
  },
  {
    title: "AI Workflow",
    items: ["Agentic UX", "Prompt schema", "ComfyUI", "Image-to-3D", "Runway", "Human-AI curation"],
  },
  {
    title: "Spatial & Motion",
    items: ["AR effects", "3D interface", "Motion direction", "Exhibition systems", "Spatial computing"],
  },
  {
    title: "Build Tools",
    items: ["Figma", "Next.js", "TypeScript", "Framer Motion", "Cinema 4D", "Adobe CC"],
  },
];

const experience = [
  {
    role: "AI Product Designer",
    org: "Bold Ideas Lab",
    time: "2025 - Now",
    detail: "Designing agentic learning tools that make reasoning visible before answers.",
  },
  {
    role: "UX Designer",
    org: "HUAWEI",
    time: "2022",
    detail: "Designed HarmonyOS theme interactions, 3D lock-screen states, and visual systems.",
  },
  {
    role: "AR Creative Production",
    org: "ByteDance / TikTok",
    time: "2023",
    detail: "Produced platform-ready AR effects under fast iteration and review constraints.",
  },
  {
    role: "Digital Designer",
    org: "SKG+",
    time: "2024",
    detail: "Reframed a client portfolio system for international service clarity and motion.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-main">
          <h1 id="about-title" className="about-title">
            I design AI products, workflows, and spatial interfaces for human judgment.
          </h1>
          <p className="about-intro">
            I am Julian Yutong Zhu, a product experience designer and future strategist exploring how
            AI can support more equitable, creative, and human-flourishing futures. My practice bridges
            multimedia information design, speculative research, intelligent systems, and embodied
            interaction.
          </p>
        </div>

        <aside className="about-side" aria-label="Contact links">
          <div className="about-links">
            {linkItems.map((item) => (
              <a key={item.label} className="about-link" href={item.href}>
                <span>{item.label}</span>
                <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </aside>
      </section>

      <section className="about-section" aria-labelledby="about-skills-title">
        <div className="about-section-header">
          <p className="about-kicker">Skills</p>
          <h2 id="about-skills-title">What I bring into a project</h2>
        </div>
        <div className="about-skill-list">
          {skillGroups.map((group) => (
            <div className="about-skill-row" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span className="about-skill-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-work-title">
        <div className="about-section-header">
          <p className="about-kicker">Experience</p>
          <h2 id="about-work-title">Selected roles and collaborations</h2>
        </div>
        <div className="about-experience-list">
          {experience.map((item) => (
            <div className="about-experience-row" key={`${item.org}-${item.role}`}>
              <div>
                <h3>{item.role}</h3>
                <p>{item.detail}</p>
              </div>
              <span>{item.org}</span>
              <time>{item.time}</time>
            </div>
          ))}
        </div>
      </section>

      <section className="about-outro" aria-label="Next action">
        <h2>Want the project evidence?</h2>
        <Link className="about-work-link" href="/work">
          Open work index <span aria-hidden>→</span>
        </Link>
      </section>
    </main>
  );
}
