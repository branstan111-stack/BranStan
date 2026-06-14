import Link from 'next/link';

const UNCOVERS = [
  { label: 'Consumer insights', body: 'What your buyer actually believes — beyond the persona deck.' },
  { label: 'Market shifts', body: 'Where demand is moving next, and how fast.' },
  { label: 'Competitive opportunities', body: 'Where incumbents are weak, slow, or misreading the room.' },
  { label: 'Cultural trends', body: 'The values, rituals, and language driving purchase decisions.' },
  { label: 'AI discoverability gaps', body: 'Where ChatGPT, Perplexity, and Gemini are citing competitors instead of you.' },
  { label: 'Growth opportunities', body: 'The two or three bets the intelligence actually supports.' },
];

const TIMELINE = [
  { week: 'Days 1–3', title: 'Scope & ingest', body: 'We define the question, then point the engine at consumer, cultural, competitive, and AI-visibility signal.' },
  { week: 'Days 4–9', title: 'Analyze & synthesize', body: 'Pattern extraction across the signal substrate. A senior strategist reviews and prunes the machine output.' },
  { week: 'Days 10–14', title: 'Intelligence readout', body: 'A written readout with the findings, the decisions they support, and a sequenced growth recommendation.' },
];

export function SprintOffer() {
  return (
    <section id="sprint" className="py-32 relative">
      <div className="container-page">
        <div className="reveal glass-strong rounded-3xl px-8 md:px-14 py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.45), transparent 60%)' }}
            />
            <div
              className="absolute -bottom-32 -right-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.45), transparent 60%)' }}
            />
          </div>

          <div className="relative grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <p className="eyebrow !text-violet-200">Flagship engagement</p>
                <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                  Recommended starting point
                </span>
              </div>

              <h2 className="section-h">
                The Consumer <br />
                <span className="text-gradient">Intelligence Sprint.</span>
              </h2>

              <p className="section-sub max-w-xl">
                A 14-day strategic engagement that gives you a defensible read on the four surfaces driving growth in 2026 — and the recommendation on what to do with it.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {UNCOVERS.map((u) => (
                  <div key={u.label} className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-400" />
                    <div>
                      <p className="text-white font-semibold text-[15px]">{u.label}</p>
                      <p className="text-sm text-gray-400 mt-0.5 leading-relaxed">{u.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact?service=Consumer%20Intelligence%20Sprint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base"
                >
                  Start a Sprint
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/#engine" className="btn-secondary text-base">
                  See the engine behind it
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="glass rounded-2xl p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Sprint shape · 14 days</p>
                <ol className="space-y-6">
                  {TIMELINE.map((t, i) => (
                    <li key={t.week} className="flex gap-4">
                      <span className="font-display text-xl font-semibold text-gradient flex-shrink-0 w-10">
                        0{i + 1}
                      </span>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-gray-500">{t.week}</p>
                        <p className="text-white font-semibold mt-0.5">{t.title}</p>
                        <p className="text-sm text-gray-400 mt-1 leading-relaxed">{t.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-[11px] uppercase tracking-wider text-gray-500">You walk away with</p>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    A written intelligence readout, a prioritized opportunity map, and a 90-day growth recommendation your team — or your next agency — can execute against.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
