import Link from "next/link";
import type { Metadata } from "next";
import { PROJECTS, SELECTED_FEATURED } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work — Julian Zhu",
  description:
    "All projects — service design, AI agentic UX, web, industrial design, and exploration work by Julian Zhu.",
};

export default function WorkIndexPage() {
  const featuredSlugs = new Set(SELECTED_FEATURED.map((p) => p.slug));
  const featured = SELECTED_FEATURED;
  const rest = PROJECTS.filter((p) => !featuredSlugs.has(p.slug));

  return (
    <main className="work-index">
      <div className="work-index-nav">
        <Link href="/" className="case-nav-back">
          <span aria-hidden>←</span> Home
        </Link>
        <span className="case-nav-home">All work</span>
      </div>

      <header className="work-index-hero">
        <div className="eyebrow">Index</div>
        <h1 className="work-index-title">
          All <em>work</em>
        </h1>
        <p className="work-index-sub">
          Service design, agentic UX, web, industrial design, and exploration work — newest and most relevant first.
        </p>
      </header>

      <section className="work-index-section">
        <div className="eyebrow work-index-section-eyebrow">Featured</div>
        <div className="work-index-grid work-index-grid-featured">
          {featured.map((p) => (
            <WorkCard key={p.slug} project={p} priority />
          ))}
        </div>
      </section>

      {rest.length > 0 && (
        <section className="work-index-section">
          <div className="eyebrow work-index-section-eyebrow">More work</div>
          <div className="work-index-grid">
            {rest.map((p) => (
              <WorkCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}

      <footer className="case-footer">
        <Link href="/" className="case-footer-home">
          ← Back home
        </Link>
        <a className="case-footer-email" href="mailto:julianyutongzhu@gmail.com">
          julianyutongzhu@gmail.com ↗
        </a>
      </footer>
    </main>
  );
}

function WorkCard({
  project,
  priority = false,
}: {
  project: (typeof PROJECTS)[number];
  priority?: boolean;
}) {
  return (
    <Link href={project.href} className="work-index-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="work-index-card-image"
        loading={priority ? "eager" : "lazy"}
      />
      <div className="work-index-card-meta">
        <div className="work-index-card-row">
          <div className="work-index-card-title">{project.title}</div>
          <div className="work-index-card-year">{project.year}</div>
        </div>
        {project.type && (
          <div className="eyebrow work-index-card-type">{project.type}</div>
        )}
        <p className="work-index-card-desc">{project.description}</p>
      </div>
    </Link>
  );
}
