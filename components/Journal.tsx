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
          {[...PRESS]
            .sort((a, b) => {
              if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1;
              return a.date < b.date ? 1 : -1;
            })
            .map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={"journal-item" + (item.pinned ? " journal-item-pinned" : "")}
              >
                {item.thumbnail ? (
                  <div className="journal-thumb press-thumb-img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="press-thumb-img"
                      loading="lazy"
                    />
                    {item.pinned && <span className="press-thumb-star">★</span>}
                  </div>
                ) : (
                  <div className="journal-thumb press-tag-wrap">
                    <span className="press-tag eyebrow">
                      {item.pinned ? "★ " : ""}
                      {item.tag ?? "Link"}
                    </span>
                  </div>
                )}
                <div className="journal-body">
                  <h3 className="journal-title">{item.title}</h3>
                  <div className="journal-meta">
                    {item.tag && <span className="press-meta-tag">{item.tag}</span>}
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
