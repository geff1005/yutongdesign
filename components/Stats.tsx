import { SITE } from "@/lib/site";

const STATS = SITE.stats;

export function Stats() {
  return (
    <section className="section" id="stats">
      <div className="section-inner">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="stat-num">
                <em>{s.num}</em>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
