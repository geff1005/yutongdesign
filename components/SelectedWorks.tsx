import { PlaceholderImg } from "./PlaceholderImg";

const PROJECTS = [
  { title: "Automotive Motion", span: 7, hue: 210 },
  { title: "Urban Architecture", span: 5, hue: 30 },
  { title: "Human Perspective", span: 5, hue: 180 },
  { title: "Brand Identity", span: 7, hue: 280 },
] as const;

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
              A selection of projects I&rsquo;ve worked on, from concept to launch.
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
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              className={
                "work-card " +
                (p.span === 7 ? "col-span-7" : "col-span-5") +
                " aspect-4-3"
              }
              href="#"
            >
              <PlaceholderImg label={p.title} hue={p.hue} />
              <div className="halftone" />
              <div className="work-hover">
                <span className="view-pill">
                  <span className="view-pill-inner">
                    View — <em>{p.title}</em>
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
