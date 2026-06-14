import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { AgentCard } from '../components/AgentCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { GradientMesh } from '../components/GradientMesh';
import { CTABanner } from '../components/CTABanner';
import { agents } from '../lib/agents';
import { SITE, buildMetadata, breadcrumbSchema } from '../lib/seo';
import { Schema } from '../components/Schema';

export const metadata: Metadata = buildMetadata({
  title: 'The Intelligence Engine | BranStan',
  description:
    'Inside the proprietary intelligence engine BranStan runs to deliver Consumer Intelligence Sprints — cultural, GEO, research, listening, social, and growth synthesis modules.',
  path: '/agents',
});

export default function AgentsIndex() {
  return (
    <>
      <Schema
        data={breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'Intelligence Engine', url: `${SITE.url}/agents` },
        ])}
      />
      <Nav />
      <main>
        <section className="relative pt-40 pb-20">
          <GradientMesh />
          <div className="container-page reveal">
            <p className="eyebrow mb-6">Inside the engine</p>
            <h1 className="section-h max-w-4xl">
              The proprietary <br />
              <span className="text-gradient">intelligence engine.</span>
            </h1>
            <p className="section-sub">
              Six specialist modules — cultural, GEO, research, listening, social, and growth synthesis — running together to power every Consumer Intelligence Sprint and individual capability engagement. Open any module for the full methodology, deliverables, and the questions buyers actually ask.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, i) => (
              <AgentCard key={agent.slug} agent={agent} index={i} />
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="container-page reveal glass rounded-2xl p-8 md:p-12">
            <p className="eyebrow mb-6">Not sure which module fits</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-balance">
              Most engagements start with the Sprint. <span className="text-gradient">The engine sequences itself behind the question.</span>
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed max-w-2xl">
              The Consumer Intelligence Sprint scopes the question first, then runs whichever modules the answer actually requires. Book a 30-minute scoping call and we will frame it together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact?service=Consumer%20Intelligence%20Sprint"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start a Sprint
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See the work
              </Link>
            </div>
          </div>
        </section>

        <CTABanner
          eyebrow="Run the engine"
          title={<>Ready for intelligence <br /><span className="text-gradient">before the bet?</span></>}
          subtitle="Tell us the decision in front of you. We will come back with a scoped Sprint or capability engagement."
          primaryLabel="Start a Consumer Intelligence Sprint"
        />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
