import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { ScrollReveal } from '../../components/ScrollReveal';
import { GradientMesh } from '../../components/GradientMesh';
import { FAQ } from '../../components/FAQ';
import { CTABanner } from '../../components/CTABanner';
import { Schema } from '../../components/Schema';
import { agents, accentMap, getAgent } from '../../lib/agents';
import { getCaseStudy } from '../../lib/case-studies';
import {
  SITE,
  buildMetadata,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from '../../lib/seo';

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const agent = getAgent(params.slug);
  if (!agent) return {};
  return buildMetadata({
    title: `${agent.name} | BranStan`,
    description: agent.summary,
    path: `/agents/${agent.slug}`,
  });
}

export default function AgentPage({ params }: { params: { slug: string } }) {
  const agent = getAgent(params.slug);
  if (!agent) notFound();

  const a = accentMap[agent.accent];
  const url = `${SITE.url}/agents/${agent.slug}`;
  const related = getCaseStudy(agent.relatedCaseStudy);

  return (
    <>
      <Schema
        data={[
          serviceSchema({ name: agent.name, description: agent.summary, url }),
          faqSchema(agent.faqs),
          breadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Agents', url: `${SITE.url}/agents` },
            { name: agent.name, url },
          ]),
        ]}
      />
      <Nav />
      <main>
        <section className="relative pt-36 pb-20 overflow-hidden">
          <GradientMesh />
          <div className="container-page relative">
            <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2 reveal">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/agents" className="hover:text-white transition">Agents</Link>
              <span>/</span>
              <span className="text-gray-300">{agent.shortName}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8 reveal">
                <div className={`inline-flex items-center gap-3 rounded-full border px-4 py-1.5 ${a.chip} text-xs uppercase tracking-[0.18em]`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${a.bg}`} />
                  Specialist Agent
                </div>
                <h1 className="mt-6 font-display font-semibold tracking-tightest text-5xl md:text-6xl lg:text-7xl text-balance leading-[1]">
                  {agent.name}
                </h1>
                <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-2xl text-pretty">
                  {agent.tagline}
                </p>

                <div className="mt-10 p-6 glass rounded-2xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">TL;DR</p>
                  <p className="text-gray-200 leading-relaxed">{agent.summary}</p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/contact?service=${encodeURIComponent(agent.shortName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Deploy this agent
                  </Link>
                  {related ? (
                    <Link href={`/case-studies/${related.slug}`} className="btn-secondary">
                      See it in a case study
                    </Link>
                  ) : null}
                </div>
              </div>

              <aside className="lg:col-span-4 lg:sticky lg:top-28 reveal" style={{ transitionDelay: '120ms' }}>
                <div className={`glass-strong rounded-2xl p-7 ${a.glow}`}>
                  <div className={`h-14 w-14 rounded-xl ${a.bg} ${a.border} border flex items-center justify-center mb-6`}>
                    <svg viewBox="0 0 24 24" className={`w-7 h-7 ${a.text}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={agent.iconPath} />
                    </svg>
                  </div>
                  <p className={`font-display text-5xl font-semibold ${a.text}`}>{agent.metric.value}</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">{agent.metric.label}</p>

                  <ul className="mt-8 space-y-3 text-sm text-gray-300">
                    {agent.deliverables.slice(0, 4).map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${a.bg.replace('/10', '/60')} flex-shrink-0`} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <div className="container-page grid lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8 prose-article reveal">
              <h2>The problem this agent solves</h2>
              <p>{agent.problem}</p>

              <h2>How it works</h2>
              <div className="not-prose space-y-5">
                {agent.howItWorks.map((step, i) => (
                  <div key={step.title} className="glass rounded-xl p-6">
                    <div className="flex items-baseline gap-4">
                      <p className={`font-display text-2xl font-semibold ${a.text}`}>{String(i + 1).padStart(2, '0')}</p>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-gray-400 leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>

              <h2>What you get</h2>
              <ul>
                {agent.deliverables.map((d) => <li key={d}>{d}</li>)}
              </ul>

              <h2>When you need it</h2>
              <ul>
                {agent.signalsYouNeedIt.map((s) => <li key={s}>{s}</li>)}
              </ul>

              <h2>Industry context</h2>
              {agent.industryContext.map((p, i) => <p key={i}>{p}</p>)}

              <h2>Use cases</h2>
              <div className="not-prose grid sm:grid-cols-3 gap-4">
                {agent.useCases.map((uc) => (
                  <div key={uc.headline} className="glass rounded-xl p-5">
                    <p className={`text-sm font-semibold ${a.text}`}>{uc.headline}</p>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">{uc.body}</p>
                  </div>
                ))}
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-6">
              {related ? (
                <div className="reveal glass-strong rounded-2xl p-7">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Related case study</p>
                  <Link href={`/case-studies/${related.slug}`} className="block group">
                    <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-gradient transition">{related.title}</h3>
                    <p className="mt-3 text-sm text-gray-400 line-clamp-3">{related.summary}</p>
                    <p className={`mt-5 font-display text-3xl ${a.text}`}>{related.heroMetric.value}</p>
                    <p className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">{related.heroMetric.label}</p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm text-gray-300 group-hover:text-white transition">
                      Read the case study
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </div>
              ) : null}

              <div className="reveal glass rounded-2xl p-7">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">Other agents</p>
                <ul className="space-y-3">
                  {agents.filter((x) => x.slug !== agent.slug).slice(0, 4).map((x) => (
                    <li key={x.slug}>
                      <Link href={`/agents/${x.slug}`} className="flex items-center justify-between text-sm text-gray-300 hover:text-white transition group">
                        <span>{x.name}</span>
                        <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <FAQ faqs={agent.faqs} title={<>Common questions about the <span className="text-gradient">{agent.shortName} Agent</span></>} />

        <CTABanner
          eyebrow="Ready to deploy"
          title={<>Put the {agent.shortName} Agent <br /><span className="text-gradient">to work on your brand.</span></>}
          subtitle="Share the bottleneck. We will come back with a scoped engagement and a 90-day plan."
        />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
