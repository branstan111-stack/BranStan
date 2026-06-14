import { agents } from '../lib/agents';
import { AgentCard } from './AgentCard';

export function AgentGrid() {
  return (
    <section id="engine" className="py-32 relative">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="eyebrow mb-6">Inside the engine</p>
          <h2 className="section-h">
            The proprietary <br />
            <span className="text-gradient">intelligence engine.</span>
          </h2>
          <p className="section-sub mx-auto">
            Six specialist intelligence modules — cultural analysis, consumer research, social listening, GEO monitoring, competitive intelligence, and growth synthesis — running together to uncover opportunities traditional agencies miss.
          </p>
          <p className="mt-5 text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Modules power our Sprint and individual capability engagements. You buy the intelligence; we run the engine.
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
