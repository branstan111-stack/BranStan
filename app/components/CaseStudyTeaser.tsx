import Link from 'next/link';
import { caseStudies } from '../lib/case-studies';

export function CaseStudyTeaser() {
  return (
    <section className="py-32 relative">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 reveal">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Proof</p>
            <h2 className="section-h">
              Intelligence that <br />
              <span className="text-gradient">changed the decision.</span>
            </h2>
            <p className="section-sub">
              Three engagements where the readout pointed the brand somewhere they would not have gone on their own. The intelligence, the call it supported, and what happened next.
            </p>
          </div>
          <Link href="/case-studies" className="btn-secondary self-start md:self-end">
            All case studies
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {caseStudies.map((c, i) => (
            <Link
              key={c.slug}
              href={`/case-studies/${c.slug}`}
              className="reveal glass glass-hover rounded-2xl p-7 group flex flex-col transition"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">{c.industry}</p>
              <h3 className="mt-4 text-xl font-semibold text-white leading-snug">
                {c.title}
              </h3>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed line-clamp-4">{c.summary}</p>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-end justify-between">
                <div>
                  <p className="font-display text-3xl font-semibold text-gradient">{c.heroMetric.value}</p>
                  <p className="text-[11px] uppercase tracking-wider text-gray-500 mt-1 max-w-[14ch]">
                    {c.heroMetric.label}
                  </p>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition flex items-center gap-1">
                  Read
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
