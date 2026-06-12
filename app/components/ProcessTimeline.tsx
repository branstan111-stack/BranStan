const STEPS = [
  {
    n: '01',
    title: 'Diagnose',
    body: 'We start with a growth diagnostic to find your real bottleneck — not the symptom you think it is.',
  },
  {
    n: '02',
    title: 'Strategize',
    body: 'Two to three quarterly bets with explicit success criteria. The rest of the tactical work sequences behind them.',
  },
  {
    n: '03',
    title: 'Deploy',
    body: 'The specialist agents go live. Cultural, GEO, research, listening, social — whichever the plan calls for.',
  },
  {
    n: '04',
    title: 'Iterate',
    body: 'Weekly review. What shipped, what moved, what to change. Strategy that does not get re-examined drifts.',
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-32 relative bg-black/40 border-y border-white/5">
      <div className="container-page">
        <div className="max-w-3xl reveal">
          <p className="eyebrow mb-6">How we work</p>
          <h2 className="section-h">
            A growth system, <br />
            <span className="text-gradient">not a campaign sprint.</span>
          </h2>
          <p className="section-sub">
            Most marketing engagements stop at campaigns. We build the operating system underneath them — the part that makes every campaign compound rather than reset.
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
