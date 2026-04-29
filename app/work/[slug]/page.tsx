import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Spline from "@splinetool/react-spline/next";
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

/** Render a markdown-lite block: paragraphs split by blank lines,
 *  consecutive `- ` lines become a bullet list. */
function ProseBlock({ text }: { text: string }) {
  const blocks = text.split(/\n\s*\n/);
  return (
    <>
      {blocks.map((block, i) => {
        const lines = block.split("\n").filter((l) => l.trim().length > 0);
        const isList = lines.every((l) => l.trim().startsWith("- "));
        if (isList && lines.length > 0) {
          return (
            <ul key={i} className="case-list">
              {lines.map((l, j) => (
                <li key={j}>{l.replace(/^\s*-\s+/, "")}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="case-paragraph">
            {block}
          </p>
        );
      })}
    </>
  );
}

const SECTION_META: Array<{
  key: keyof NonNullable<typeof PROJECTS[number]["caseStudy"]>;
  title: string;
  emphasis: string;
}> = [
  { key: "challenge", title: "The", emphasis: "Challenge" },
  { key: "research", title: "Research &", emphasis: "Discovery" },
  { key: "strategy", title: "Design", emphasis: "Strategy" },
  { key: "implementation", title: "Implementation &", emphasis: "Pipeline" },
  { key: "results", title: "Results &", emphasis: "Impact" },
  { key: "lessons", title: "Lessons", emphasis: "Learned" },
  { key: "nextSteps", title: "What's", emphasis: "Next" },
];

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const embed = project.videoUrl ? vimeoEmbedUrl(project.videoUrl) : null;
  const cs = project.caseStudy;
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
              <em className="case-title-em">{project.researchQuestion}</em>
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

      {/* Overview metadata block — uses caseStudy fields when present, else falls back */}
      <section className="case-section case-overview">
        <div className="case-overview-grid">
          <div>
            <div className="eyebrow">Role</div>
            <div className="case-meta">{cs?.role ?? "—"}</div>
          </div>
          <div>
            <div className="eyebrow">Timeline</div>
            <div className="case-meta">{cs?.timeline ?? String(project.year)}</div>
          </div>
          <div>
            <div className="eyebrow">Team</div>
            <div className="case-meta">{cs?.team ?? "—"}</div>
          </div>
          <div>
            <div className="eyebrow">Impact</div>
            <div className="case-meta">{cs?.impact ?? project.tags.join(" · ")}</div>
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

      {/* Standalone Spline scenes (those NOT anchored to a section render here) */}
      {project.splineEmbeds && project.splineEmbeds.filter((s) => !s.section).length > 0 && (
        <section className="case-section case-spline-section">
          <div className="case-prose">
            <h2 className="case-h2">
              Live <em>scenes</em>
            </h2>
            <p className="case-paragraph case-paragraph-muted">
              In-progress 3D environments. Drag to orbit; scroll to zoom.
            </p>
          </div>
          <div className="case-spline-grid">
            {project.splineEmbeds
              .filter((s) => !s.section)
              .map((scene, i) => (
                <div key={i} className="case-spline-tile">
                  <div className="case-spline-frame-wrap">
                    <iframe
                      src={scene.url}
                      className="case-spline-frame"
                      loading="lazy"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      allowFullScreen
                      title={scene.caption ?? `${project.title} 3D scene ${i + 1}`}
                    />
                  </div>
                  {scene.caption && (
                    <div className="case-spline-caption">{scene.caption}</div>
                  )}
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Description (only show when no caseStudy is present, since caseStudy
          covers it more thoroughly) */}
      {!cs && (
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
      )}

      {/* Rich case-study sections (when present) */}
      {cs &&
        SECTION_META.map(({ key, title, emphasis }) => {
          const text = cs[key];
          if (!text || typeof text !== "string") return null;
          const sectionMedia =
            cs.media?.filter((m) => m.section === key) ?? [];
          return (
            <section key={key} className="case-section">
              <div className="case-prose">
                <h2 className="case-h2">
                  {title} <em>{emphasis}</em>
                </h2>
                <ProseBlock text={text} />
              </div>
              {sectionMedia.length > 0 && (
                <div className="case-media-stack">
                  {sectionMedia.map((m, i) => (
                    <figure
                      key={i}
                      className="case-media-figure"
                      style={{
                        aspectRatio: m.aspectRatio?.replace("/", " / ") ?? "16 / 9",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={m.src}
                        alt={m.caption ?? ""}
                        className="case-media-image"
                        loading="lazy"
                      />
                      {m.caption && (
                        <figcaption className="case-media-caption">
                          {m.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}
              {(() => {
                const sectionSplines =
                  project.splineEmbeds?.filter((s) => s.section === key) ?? [];
                if (sectionSplines.length === 0) return null;
                return (
                  <div className="case-spline-stack">
                    {sectionSplines.map((scene, i) => {
                      const isLiveDemo = scene.emphasis === "live-demo";
                      return (
                        <div
                          key={i}
                          className={
                            "case-spline-tile" +
                            (isLiveDemo ? " case-spline-tile-live-demo" : "")
                          }
                        >
                          {isLiveDemo && (
                            <div className="case-live-demo-eyebrow eyebrow">
                              ★ Live Demo
                            </div>
                          )}
                          <div
                            className={
                              "case-spline-frame-wrap" +
                              (isLiveDemo ? " case-spline-frame-wrap-tall" : "")
                            }
                          >
                            {scene.url.endsWith(".splinecode") ? (
                              <Spline scene={scene.url} className="case-spline-react" />
                            ) : (
                              <iframe
                                src={scene.url}
                                className="case-spline-frame"
                                loading="lazy"
                                allow="autoplay; fullscreen; xr-spatial-tracking"
                                allowFullScreen
                                title={
                                  scene.caption ??
                                  `${project.title} 3D scene ${i + 1}`
                                }
                              />
                            )}
                          </div>
                          {scene.caption && (
                            <div className="case-spline-caption">
                              {scene.caption}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </section>
          );
        })}

      {/* Placeholder for projects without caseStudy yet */}
      {!cs && (
        <section className="case-section">
          <div className="case-prose">
            <h2 className="case-h2">
              Process <em>&amp; reflection</em>
            </h2>
            <p className="case-paragraph case-paragraph-muted">
              Detailed case study — research, design strategy, implementation,
              outcomes, and lessons learned — coming soon.
            </p>
          </div>
        </section>
      )}

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
