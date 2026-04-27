import { PRESS } from "@/lib/press";

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function Journal() {
  return (
    <section className="section" id="journal">
      <div className="section-inner">
        <div className="section-header">
          <div>
            <div className="section-header-eyebrow">
              <span className="eyebrow">Recent thinking</span>
            </div>
            <h2 className="section-heading">
              Press <em>&amp; recognition</em>
            </h2>
            <p className="section-sub">
              Coverage, awards, and exhibitions — sorted newest first.
            </p>
          </div>
        </div>

        <div className="journal-list">
          {PRESS.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="journal-item"
            >
              <div className="journal-thumb press-tag-wrap">
                <span className="press-tag eyebrow">{item.tag ?? "Link"}</span>
              </div>
              <div className="journal-body">
                <h3 className="journal-title">{item.title}</h3>
                <div className="journal-meta">
                  <span>{item.outlet}</span>
                  <span>·</span>
                  <span>{formatDate(item.date)}</span>
                </div>
              </div>
              <span className="journal-arrow" aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
