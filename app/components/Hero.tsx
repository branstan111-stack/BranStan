import Link from 'next/link';
import { GradientMesh } from './GradientMesh';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      <GradientMesh />

      <div className="container-page relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 reveal">
          <div className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse-soft" />
            AI-native Consumer Intelligence
          </div>

          <h1 className="mt-8 font-display font-semibold tracking-tightest text-6xl md:text-7xl lg:text-[88px] leading-[0.95] text-balance">
            Intelligence before <br />
            <span className="text-gradient">your next growth bet.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            BranStan helps founder-led brands understand consumers, culture, competitors, and AI visibility — so every growth decision is made with signal, not instinct. We deliver the intelligence; you make the call.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact?service=Consumer%20Intelligence%20Sprint"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              Start a Consumer Intelligence Sprint
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/#how" className="btn-secondary text-base">
              How it works
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-6 text-xs text-gray-500 uppercase tracking-[0.18em]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Consumer · Cultural · Competitive · AI Visibility
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 reveal" style={{ transitionDelay: '120ms' }}>
          <HeroTerminal />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 text-[11px] tracking-[0.3em] uppercase flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}

function HeroTerminal() {
  return (
    <div className="glass-strong rounded-2xl p-5 shadow-glow">
      <div className="flex items-center gap-2 pb-4 border-b border-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-3 text-[11px] text-gray-500 font-mono">intelligence-engine · live</span>
      </div>

      <div className="mt-5 space-y-2.5 font-mono text-xs">
        <TerminalRow color="cyan" label="Consumer signals ingested..." status="847k events" tone="cyan" />
        <TerminalRow color="violet" label="Cultural shift mapping..." status="12 themes" tone="emerald" />
        <TerminalRow color="blue" label="Competitor positioning audit..." status="Active" tone="emerald" />
        <TerminalRow color="amber" label="AI visibility benchmark..." status="Live" tone="amber" />
        <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/20 flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500">Intelligence report</p>
            <p className="text-white text-sm mt-0.5">Sprint readout: <span className="text-gradient font-semibold">9 days</span></p>
          </div>
          <span className="text-[10px] px-2 py-1 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">on track</span>
        </div>
      </div>
    </div>
  );
}

function TerminalRow({ color, label, status, tone }: { color: string; label: string; status: string; tone: string }) {
  const colorMap: Record<string, string> = {
    violet: 'text-violet-300',
    blue: 'text-blue-300',
    cyan: 'text-cyan-300',
    amber: 'text-amber-300',
  };
  const toneMap: Record<string, string> = {
    emerald: 'text-emerald-300',
    cyan: 'text-cyan-300',
    amber: 'text-amber-300',
  };
  return (
    <div className="flex justify-between items-center bg-black/40 px-3 py-2 rounded-lg border border-white/5">
      <span className={colorMap[color]}>{label}</span>
      <span className={toneMap[tone]}>{status}</span>
    </div>
  );
}
