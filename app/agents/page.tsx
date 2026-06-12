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
  title: 'The Agents | BranStan',
  description:
    'Meet the six specialist AI agents BranStan deploys for ambitious founders — cultural, GEO optimization, market research, social listening, social media, and growth strategy.',
  path: '/agents',
});

export default function AgentsIndex() {
  return (
    <>
      <Schema
        data={breadcrumbSchema([
          { name: 'Home', url: SITE.url },
          { name: 'Agents', url: `${SITE.url}/agents` },
        ])}
      />
      <Nav />
      <main>
        <section className="relative pt-40 pb-20">
          <GradientMesh />
          <div className="container-page reveal">
            <p className="eyebrow mb-6">The system</p>
            <h1 className="section-h max-w-4xl">
              Six specialist agents. <br />
              <span className="text-gradient">One growth system.</span>
            </h1>
            <p className="section-sub">
              Each agent owns one part of the modern marketing stack. Click any agent for the full industry-grade explanation, deliverables, and the questions buyers actually ask.
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
            <p className="eyebrow mb-6">Not sure which agent fits</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-balance">
              Most engagements start with two or three. <span className="text-gradient">We help you sequence them.</span>
            </h2>
            <p className="mt-5 text-gray-400 leading-relaxed max-w-2xl">
              The Growth Strategy Agent acts as the architect — diagnosing your real bottleneck and recommending which specialist agents to deploy in which order. Book a 30-minute strategy session and we will map it out together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book the diagnostic
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See the work
              </Link>
            </div>
          </div>
        </section>

        <CTABanner
          eyebrow="Deploy the system"
          title={<>Ready to put the agents <br /><span className="text-gradient">to work?</span></>}
          subtitle="Tell us the brand, the bottleneck, and the timeline. We will come back with the agent mix and the 90-day plan."
        />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
