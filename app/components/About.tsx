export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container-page grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 reveal">
          <p className="eyebrow mb-6">Why BranStan exists</p>
          <h2 className="section-h">
            Your brand is personal. <br />
            <span className="text-gray-500">We treat it that way.</span>
          </h2>
          <div className="mt-8 space-y-6 text-gray-300 text-lg font-light leading-relaxed max-w-2xl">
            <p>
              Behind every brand is a story, late nights, and a vision that matters deeply to its creator. I started BranStan because I understand exactly how close your business is to your heart. It is not just a logo or a product; it is your baby.
            </p>
            <p>
              The marketing world is loud, crowded, and often overwhelming for founders who just want to focus on what they do best. You do not need another generic software subscription. You need a dedicated partner.
            </p>
            <p>
              That is what <strong className="text-white font-semibold">BranStan</strong> means. I stan for your brand. I support it, champion it, and fight for its visibility. Let&apos;s make your brand unstoppable.
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
                title="One partner, six agents"
                body="You get a single point of accountability — and the depth of a six-person specialist team."
              />
              <Pillar
                title="Strategy at the speed of decisions"
                body="The planning cycle is compressed from weeks to days. You move when the market moves."
              />
              <Pillar
                title="Outcomes, not output"
                body="We measure ourselves on the metrics that matter — pipeline, share-of-voice, brand citation rate."
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
