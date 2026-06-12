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
import { caseStudies, getCaseStudy } from '../../lib/case-studies';
import { getAgent } from '../../lib/agents';
import {
  SITE,
  buildMetadata,
  articleSchema,
  faqSchema,
  breadcrumbSchema,
} from '../../lib/seo';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return buildMetadata({
    title: `${study.title} | BranStan Case Study`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
    type: 'article',
    publishedTime: study.date,
    authors: ['Anubhuti, BranStan'],
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const url = `${SITE.url}/case-studies/${study.slug}`;
  const usedAgents = study.agentsUsed.map((slug) => getAgent(slug)).filter(Boolean);

  return (
    <>
      <Schema
        data={[
          articleSchema({
            headline: study.title,
            description: study.summary,
            url,
            datePublished: study.date,
          }),
          faqSchema(study.faqs),
          breadcrumbSchema([
            { name: 'Home', url: SITE.url },
            { name: 'Case Studies', url: `${SITE.url}/case-studies` },
            { name: study.title, url },
          ]),
        ]}
      />
      <Nav />
      <main>
        <section className="relative pt-36 pb-16 overflow-hidden">
          <GradientMesh />
          <div className="container-page relative">
            <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2 reveal">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <span>/</span>
              <Link href="/case-studies" className="hover:text-white transition">Case Studies</Link>
              <span>/</span>
              <span className="text-gray-300 truncate max-w-[50ch]">{study.industry}</span>
            </nav>

            <div className="reveal max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-gray-500">
                <span className="px-3 py-1 rounded-full glass">{study.industry}</span>
                <span>{study.service}</span>
                <span className="text-gray-700">·</span>
                <span>{formatDate(study.date)}</span>
                <span className="text-gray-700">·</span>
                <span>{study.readMinutes} min read</span>
              </div>
              <h1 className="mt-6 font-display font-semibold tracking-tightest text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05]">
                {study.title}
              </h1>
              <div className="mt-8 p-6 glass rounded-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">TL;DR</p>
                <p className="text-gray-200 leading-relaxed">{study.summary}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6">
            <MetricBlock value={study.heroMetric.value} label={study.heroMetric.label} hero />
            {study.metrics.map((m) => (
              <MetricBlock key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="container-page grid lg:grid-cols-12 gap-12">
            <article className="lg:col-span-8 prose-article reveal">
              <h2>The challenge</h2>
              {study.challenge.map((p, i) => <p key={i}>{p}</p>)}

              <h2>The approach</h2>
              <div className="not-prose space-y-5">
                {study.approach.map((step) => (
                  <div key={step.step} className="glass rounded-xl p-6">
                    <div className="flex items-baseline gap-4">
                      <p className="font-display text-2xl font-semibold text-gradient">{step.step}</p>
                      <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-3 text-gray-400 leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>

              <h2>The outcome</h2>
              {study.outcome.map((p, i) => <p key={i}>{p}</p>)}

              <h2>Lessons</h2>
              <ul>
                {study.lessons.map((l) => <li key={l}>{l}</li>)}
              </ul>

              <div className="not-prose mt-12 glass-strong rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl opacity-30 bg-violet-500/40" />
                <svg className="w-8 h-8 text-violet-300 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="text-xl text-white font-display leading-snug text-balance">{study.testimonial.quote}</p>
                <p className="mt-5 text-sm text-gray-400">
                  <span className="text-white font-semibold">{study.testimonial.author}</span>, {study.testimonial.role}
                </p>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-6">
              <div className="reveal glass-strong rounded-2xl p-7 lg:sticky lg:top-28">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Agents deployed</p>
                <ul className="space-y-3">
                  {usedAgents.map((a) => a && (
                    <li key={a.slug}>
                      <Link href={`/agents/${a.slug}`} className="flex items-center justify-between group">
                        <span className="text-white font-medium">{a.name}</span>
                        <svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 btn-primary !py-2.5 text-sm w-full"
                >
                  Run this play for us
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <FAQ faqs={study.faqs} title={<>Questions about this <span className="text-gradient">engagement</span></>} />

        <CTABanner
          eyebrow="Run it for your brand"
          title={<>Want a result <br /><span className="text-gradient">like this one?</span></>}
          subtitle="Most engagements start with a 30-minute scoping call. Tell us where your brand is stuck — we will come back with a 90-day plan."
        />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}

function MetricBlock({ value, label, hero }: { value: string; label: string; hero?: boolean }) {
  return (
    <div className={`reveal glass rounded-2xl p-6 ${hero ? 'col-span-2' : ''}`}>
      <p className={`font-display font-semibold ${hero ? 'text-5xl md:text-6xl text-gradient' : 'text-3xl text-white'}`}>
        {value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-wider text-gray-500">{label}</p>
    </div>
  );
}
