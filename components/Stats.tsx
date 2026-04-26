const STATS = [
  { num: "20+", label: "Years Experience" },
  { num: "95+", label: "Projects Done" },
  { num: "200%", label: "Satisfied Clients" },
] as const;

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
