import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { ScrollReveal } from '../components/ScrollReveal';
import { GradientMesh } from '../components/GradientMesh';
import { CTABanner } from '../components/CTABanner';
import { Schema } from '../components/Schema';
import { caseStudies } from '../lib/case-studies';
import { SITE, buildMetadata, breadcrumbSchema } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies | BranStan',
  description:
    'Detailed case studies from BranStan engagements — D2C skincare, B2B SaaS, regional F&B. The work, the numbers, and the lessons.',
  path: '/case-studies',
});

export default function CaseStudiesIndex() {
  return (
    <>
      <Schema
        data={breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'Case Studies', url: `${SITE.url}/case-studies` },
        ])}
      />
      <Nav />
      <main>
        <section className="relative pt-40 pb-16">
          <GradientMesh />
          <div className="container-page reveal">
            <p className="eyebrow mb-6">Proof &amp; perspective</p>
            <h1 className="section-h max-w-4xl">
              The work, the numbers, <br />
              <span className="text-gradient">and the lessons.</span>
            </h1>
            <p className="section-sub">
              Three case studies from the kinds of engagements we run every quarter. Each one is structured as a working playbook — read for the methodology, not just the metric.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-page space-y-6">
            {caseStudies.map((c, i) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="reveal glass glass-hover rounded-2xl p-7 md:p-10 group block transition"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-gray-500">
                      <span>{c.industry}</span>
                      <span className="text-gray-700">/</span>
                      <span>{c.service}</span>
                      <span className="text-gray-700">/</span>
                      <span>{c.readMinutes} min read</span>
                    </div>
                    <h2 className="mt-5 font-display text-2xl md:text-3xl font-semibold text-balance leading-snug">{c.title}</h2>
                    <p className="mt-4 text-gray-400 leading-relaxed max-w-2xl">{c.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm text-gray-300 group-hover:text-white transition">
                      Read the case study
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <div className="lg:col-span-4 lg:border-l lg:border-white/5 lg:pl-8 grid grid-cols-3 lg:grid-cols-1 gap-4">
                    <div>
                      <p className="font-display text-3xl font-semibold text-gradient">{c.heroMetric.value}</p>
                      <p className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">{c.heroMetric.label}</p>
                    </div>
                    {c.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <p className="font-display text-xl font-semibold text-white">{m.value}</p>
                        <p className="text-[11px] uppercase tracking-wider text-gray-500 mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner
          eyebrow="Your case study next"
          title={<>Want yours <br /><span className="text-gradient">on this page?</span></>}
          subtitle="Most case studies start with a quarterly engagement. Tell us the brand and the bottleneck."
        />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
