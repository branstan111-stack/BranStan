import { agents } from '../lib/agents';
import { AgentCard } from './AgentCard';

export function AgentGrid() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="eyebrow mb-6">The system</p>
          <h2 className="section-h">
            The minds behind <br />
            <span className="text-gradient">your growth.</span>
          </h2>
          <p className="section-sub mx-auto">
            Six specialist AI agents. Each owns one part of the modern marketing stack. Together, they form a single growth system that compounds quarter over quarter.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <AgentCard key={agent.slug} agent={agent} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
