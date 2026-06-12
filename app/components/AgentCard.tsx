import Link from 'next/link';
import { Agent, accentMap } from '../lib/agents';

export function AgentCard({ agent, index = 0 }: { agent: Agent; index?: number }) {
  const a = accentMap[agent.accent];
  return (
    <Link
      href={`/agents/${agent.slug}`}
      className="reveal glass glass-hover rounded-2xl p-7 group relative overflow-hidden block transition"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-40 ${a.bg} group-hover:opacity-70 transition-opacity`} />
      <div className="relative">
        <div className={`h-11 w-11 rounded-xl ${a.bg} ${a.border} border flex items-center justify-center mb-6`}>
          <svg viewBox="0 0 24 24" className={`w-5 h-5 ${a.text}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={agent.iconPath} />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white">{agent.name}</h3>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed">{agent.tagline}</p>
        <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between">
          <div>
            <p className={`font-display text-2xl font-semibold ${a.text}`}>{agent.metric.value}</p>
            <p className="text-[11px] uppercase tracking-wider text-gray-500 mt-0.5">{agent.metric.label}</p>
          </div>
          <span className={`inline-flex items-center gap-1 text-xs ${a.text} group-hover:translate-x-0.5 transition-transform`}>
            Explore
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
