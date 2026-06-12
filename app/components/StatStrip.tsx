const STATS = [
  { value: '+47%', label: 'LLM brand mention rate', sub: 'across ChatGPT + Perplexity' },
  { value: '6wk → 9d', label: 'planning cycle compression', sub: 'with continuous research' },
  { value: '4x', label: 'qualified pipeline growth', sub: 'over two quarters' },
  { value: '< 1hr', label: 'crisis detection lead time', sub: 'with always-on listening' },
];

export function StatStrip() {
  return (
    <section className="relative py-20 border-y border-white/5 bg-black/40">
      <div className="container-page">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-gray-500 mb-12">
          Outcomes our agents have shipped
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={s.label} className="reveal text-center" style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="font-display text-4xl md:text-5xl font-semibold text-gradient">{s.value}</p>
              <p className="mt-3 text-sm font-medium text-white">{s.label}</p>
              <p className="text-xs text-gray-500 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
