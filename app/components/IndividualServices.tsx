import Link from 'next/link';

type Capability = {
  name: string;
  body: string;
  service: string;
};

const CAPABILITIES: Capability[] = [
  {
    name: 'GEO Audit',
    body: 'See exactly where your brand appears — and where competitors are cited instead — inside ChatGPT, Perplexity, Gemini, and Claude.',
    service: 'GEO Audit',
  },
  {
    name: 'Cultural Analysis',
    body: 'Map your brand against the values, rituals, and language that drive purchase in each market you operate in.',
    service: 'Cultural Analysis',
  },
  {
    name: 'Consumer Research',
    body: 'Compressed category, buyer-signal, and pricing research with citable sources. Nine days, not nine weeks.',
    service: 'Consumer Research',
  },
  {
    name: 'Social Listening',
    body: 'Always-on monitoring across social, communities, and review surfaces — surfaced as briefings, not dashboards.',
    service: 'Social Listening',
  },
  {
    name: 'Competitive Intelligence',
    body: 'Positioning, pricing, claims, share-of-voice, and the unmet needs your top ten competitors are leaving on the table.',
    service: 'Competitive Intelligence',
  },
  {
    name: 'AI Visibility Assessment',
    body: 'A scoped read on whether LLMs are recommending you, ignoring you, or actively misrepresenting your brand.',
    service: 'AI Visibility Assessment',
  },
];

export function IndividualServices() {
  return (
    <section id="capabilities" className="py-32 relative bg-black/40 border-y border-white/5">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 reveal">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">À la carte</p>
            <h2 className="section-h">
              Need a specific <br />
              <span className="text-gradient">capability?</span>
            </h2>
            <p className="section-sub">
              Most brands start with the Sprint. If you already know the question you need answered, you can engage any single module of the intelligence engine on its own.
            </p>
          </div>
          <Link
            href="/contact?service=Consumer%20Intelligence%20Sprint"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start md:self-end"
          >
            Not sure? Start with the Sprint
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITIES.map((c, i) => (
            <Link
              key={c.name}
              href={`/contact?service=${encodeURIComponent(c.service)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal glass glass-hover rounded-2xl p-6 group flex flex-col transition"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3 className="text-lg font-semibold text-white">{c.name}</h3>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-1">{c.body}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-white transition">
                Request this engagement
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
