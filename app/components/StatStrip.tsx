const STATS = [
  { value: '14d', label: 'sprint readout time', sub: 'from kickoff to written intelligence' },
  { value: '20+', label: 'signal sources', sub: 'consumer, cultural, competitive, AI' },
  { value: '4 LLMs', label: 'AI visibility coverage', sub: 'ChatGPT, Perplexity, Gemini, Claude' },
  { value: '< 1hr', label: 'cultural-shift alerting', sub: 'when the signal threshold breaks' },
];

export function StatStrip() {
  return (
    <section className="relative py-20 border-y border-white/5 bg-black/40">
      <div className="container-page">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-gray-500 mb-12">
          Intelligence outcomes our engine delivers
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
