export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container-page grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 reveal">
          <p className="eyebrow mb-6">Why BranStan exists</p>
          <h2 className="section-h">
            Founders deserve <br />
            <span className="text-gray-500">intelligence, not opinions.</span>
          </h2>
          <div className="mt-8 space-y-6 text-gray-300 text-lg font-light leading-relaxed max-w-2xl">
            <p>
              I started BranStan because the founders I worked with kept making seven-figure growth decisions on stale research, gut feel, and slideware dressed up as strategy. The decisions that mattered most were the ones with the weakest signal underneath them.
            </p>
            <p>
              BranStan is the answer to that gap. An AI-native intelligence partner that helps you see your consumer, your culture, your competitors, and your AI visibility clearly — before you spend on the next bet.
            </p>
            <p>
              The brand promise is in the name. <strong className="text-white font-semibold">We Stan Your Brand</strong> — we support it, champion it, and fight for it. The way we do that is by giving you the sharpest read of your market a founder-led team can buy.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-gradient flex items-center justify-center text-lg font-bold text-white shadow-glow">
              A
            </div>
            <div>
              <p className="text-white font-semibold">Anubhuti</p>
              <p className="text-sm text-gray-500">Founder, BranStan</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 reveal" style={{ transitionDelay: '120ms' }}>
          <div className="glass rounded-2xl p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">How we operate</p>
            <ul className="space-y-5">
              <Pillar
                title="Intelligence, not opinions"
                body="Every recommendation is grounded in cited consumer, cultural, competitive, or AI-visibility signal — never founder gut feel dressed up as strategy."
              />
              <Pillar
                title="Decisions at the speed of the market"
                body="Sprint cycles deliver a defensible read in 14 days. You move when the signal moves."
              />
              <Pillar
                title="Senior judgment over raw AI output"
                body="The engine compresses the desk-research phase. A senior strategist owns synthesis, pruning, and what reaches you."
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-violet-400" />
      <div>
        <p className="text-white font-semibold">{title}</p>
        <p className="text-sm text-gray-400 mt-1 leading-relaxed">{body}</p>
      </div>
    </li>
  );
}
