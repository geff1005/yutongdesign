import { SELECTED_FEATURED } from "@/lib/projects";

// Bento layout pattern: 7-5 / 5-7 alternating
const SPANS = [7, 5, 5, 7] as const;

export function SelectedWorks() {
  return (
    <section className="section" id="work">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-header-eyebrow">
              <span className="eyebrow">Selected Work</span>
            </div>
            <h2 className="section-heading">
              Featured <em>projects</em>
            </h2>
            <p className="section-sub">
              A selection of projects spanning industrial design, interaction, and AI-driven systems.
            </p>
          </div>
          <button className="view-all-btn">
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              View all work <span aria-hidden>→</span>
            </span>
          </button>
        </div>

        <div className="bento">
          {SELECTED_FEATURED.map((p, i) => {
            const span = SPANS[i] ?? 5;
            return (
              <a
                key={p.slug}
                className={
                  "work-card " +
                  (span === 7 ? "col-span-7" : "col-span-5") +
                  " aspect-4-3"
                }
                href={p.href}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="work-img"
                  src={p.thumbnail}
                  alt={p.title}
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <div className="halftone" />
                <div className="work-hover">
                  <span className="view-pill">
                    <span className="view-pill-inner">
                      View — <em>{p.title}</em>
                    </span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
