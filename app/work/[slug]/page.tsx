import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/projects";

// Pre-generate one static page per project at build time.
export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

// Per-page metadata for OG / SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Julian Zhu`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Julian Zhu`,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

function vimeoEmbedUrl(url: string): string | null {
  const match = url.match(/vimeo\.com\/(\d+)/);
  if (!match) return null;
  return `https://player.vimeo.com/video/${match[1]}?title=0&byline=0&portrait=0`;
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const embed = project.videoUrl ? vimeoEmbedUrl(project.videoUrl) : null;
  const otherProjects = PROJECTS.filter(
    (p) => p.slug !== project.slug && p.featured
  ).slice(0, 3);

  return (
    <main className="case-study">
      {/* Top nav */}
      <div className="case-nav">
        <Link href="/" className="case-nav-back">
          <span aria-hidden>←</span> Back
        </Link>
        <Link href="/" className="case-nav-home">
          {project.title}
        </Link>
      </div>

      {/* Hero */}
      <header className="case-hero">
        <div className="case-hero-inner">
          <div className="eyebrow case-hero-eyebrow">{project.type ?? "Case Study"}</div>
          <h1 className="case-title">
            {project.title}
            {project.researchQuestion && (
              <em className="case-title-em">— {project.researchQuestion}</em>
            )}
          </h1>
          {project.intro && <p className="case-intro">{project.intro}</p>}
        </div>
        <div className="case-hero-image-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.thumbnail}
            alt={project.title}
            className="case-hero-image"
          />
        </div>
      </header>

      {/* Overview metadata block */}
      <section className="case-section case-overview">
        <div className="case-overview-grid">
          <div>
            <div className="eyebrow">Year</div>
            <div className="case-meta">{project.year}</div>
          </div>
          <div>
            <div className="eyebrow">Type</div>
            <div className="case-meta">{project.type ?? "—"}</div>
          </div>
          <div>
            <div className="eyebrow">Tags</div>
            <div className="case-meta">{project.tags.join(" · ")}</div>
          </div>
          <div>
            <div className="eyebrow">Status</div>
            <div className="case-meta">
              {project.featured ? "Featured" : "Archive"}
            </div>
          </div>
        </div>
      </section>

      {/* Video embed if available */}
      {embed && (
        <section className="case-section case-video-section">
          <div className="case-video-wrap">
            <iframe
              src={embed}
              className="case-video-frame"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={`${project.title} video`}
            />
          </div>
        </section>
      )}

      {/* Description */}
      <section className="case-section">
        <div className="case-prose">
          <h2 className="case-h2">
            About <em>this work</em>
          </h2>
          <p className="case-paragraph">{project.description}</p>
          {project.intro && project.intro !== project.description && (
            <p className="case-paragraph">{project.intro}</p>
          )}
        </div>
      </section>

      {/* Placeholder for the 7-section PD case study (to be filled) */}
      <section className="case-section">
        <div className="case-prose">
          <h2 className="case-h2">
            Process <em>&amp; reflection</em>
          </h2>
          <p className="case-paragraph case-paragraph-muted">
            Detailed case study content — research, design strategy, implementation,
            outcomes, and lessons learned — coming soon. Source materials live in the
            project folder; the long-form write-up is being migrated from earlier
            portfolio decks.
          </p>
          {project.videoUrl && (
            <p className="case-paragraph case-paragraph-muted">
              In the meantime, the video above shows the project in motion.
            </p>
          )}
        </div>
      </section>

      {/* More work */}
      {otherProjects.length > 0 && (
        <section className="case-section case-more">
          <div className="eyebrow case-more-eyebrow">Continue exploring</div>
          <h2 className="case-h2">
            Other <em>work</em>
          </h2>
          <div className="case-more-grid">
            {otherProjects.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="case-more-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.thumbnail} alt={p.title} className="case-more-image" />
                <div className="case-more-meta">
                  <div className="case-more-title">{p.title}</div>
                  <div className="case-more-desc">{p.description}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer className="case-footer">
        <Link href="/" className="case-footer-home">
          ← Back to all work
        </Link>
        <a className="case-footer-email" href="mailto:julianyutongzhu@gmail.com">
          julianyutongzhu@gmail.com ↗
        </a>
      </footer>
    </main>
  );
}
