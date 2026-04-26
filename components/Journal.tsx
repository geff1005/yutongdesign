import { PlaceholderImg } from "./PlaceholderImg";

const ENTRIES = [
  { title: "On the craft of microinteractions", read: "6 min read", date: "Mar 14, 2026", hue: 200 },
  { title: "Designing calm, capable systems", read: "4 min read", date: "Feb 28, 2026", hue: 340 },
  { title: "Type, tone & the space between", read: "8 min read", date: "Jan 20, 2026", hue: 80 },
  { title: "Letters from a pinned scroll", read: "5 min read", date: "Dec 10, 2025", hue: 260 },
] as const;

export function Journal() {
  return (
    <section className="section" id="journal">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-header-eyebrow">
              <span className="eyebrow">Journal</span>
            </div>
            <h2 className="section-heading">
              Recent <em>thoughts</em>
            </h2>
            <p className="section-sub">
              Notes on design, process, and the occasional tangent.
            </p>
          </div>
          <button className="view-all-btn">
            <span className="btn-gradient-ring" />
            <span className="btn-inner">
              View all entries <span aria-hidden>→</span>
            </span>
          </button>
        </div>

        <div className="journal-list">
          {ENTRIES.map((e) => (
            <a key={e.title} href="#" className="journal-item">
              <div className="journal-thumb">
                <PlaceholderImg label="Thumb" hue={e.hue} dark className="" />
              </div>
              <div className="journal-body">
                <h3 className="journal-title">{e.title}</h3>
                <div className="journal-meta">
                  <span>{e.read}</span>
                  <span>·</span>
                  <span>{e.date}</span>
                </div>
              </div>
              <span className="journal-arrow" aria-hidden>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
