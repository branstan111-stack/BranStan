const STEPS = [
  {
    n: '01',
    title: 'Frame the question',
    body: 'Every Sprint starts with the decision you are about to make. We frame the intelligence around the bet, not the dashboard.',
  },
  {
    n: '02',
    title: 'Ingest the signal',
    body: 'The engine pulls from twenty-plus consumer, cultural, competitive, and AI-visibility surfaces — continuously.',
  },
  {
    n: '03',
    title: 'Synthesize the intelligence',
    body: 'LLM-driven pattern extraction, reviewed and pruned by a senior strategist. We do not ship raw AI output.',
  },
  {
    n: '04',
    title: 'Deliver the recommendation',
    body: 'A written readout with the findings, the decisions they support, and a sequenced 90-day growth recommendation.',
  },
];

export function ProcessTimeline() {
  return (
    <section id="how" className="py-32 relative bg-black/40 border-y border-white/5">
      <div className="container-page">
        <div className="max-w-3xl reveal">
          <p className="eyebrow mb-6">How it works</p>
          <h2 className="section-h">
            From signal to <br />
            <span className="text-gradient">strategic decision.</span>
          </h2>
          <p className="section-sub">
            Most engagements stop at dashboards. We stop at decisions. The intelligence is only useful if it changes what you do next quarter.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className="reveal glass glass-hover rounded-2xl p-7 transition"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="font-display text-5xl font-semibold text-gradient">{s.n}</p>
              <h3 className="mt-5 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
