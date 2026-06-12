import Link from 'next/link';
import { SITE } from '../lib/seo';
import { agents } from '../lib/agents';

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32 pt-20 pb-10 relative">
      <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link href="/" className="font-display text-2xl font-bold text-white flex items-center gap-2">
            <span className="inline-block w-7 h-7 rounded-lg bg-brand-gradient" aria-hidden />
            Bran<span className="text-gradient">Stan</span>
          </Link>
          <p className="mt-5 text-gray-400 text-sm leading-relaxed max-w-sm">
            An agentic AI marketing partner for ambitious founders. We deploy six specialist agents to build brands that compound.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 text-sm"
            >
              Book Strategy Session
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-2.5 !px-5 text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Agents</p>
          <ul className="space-y-2.5 text-sm text-gray-400">
            {agents.map((a) => (
              <li key={a.slug}>
                <Link href={`/agents/${a.slug}`} className="hover:text-white transition">
                  {a.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li><Link href="/agents" className="hover:text-white transition">All agents</Link></li>
            <li><Link href="/case-studies" className="hover:text-white transition">Case studies</Link></li>
            <li><Link href="/#about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/#faq" className="hover:text-white transition">FAQ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li><a href={`mailto:${SITE.email}`} className="hover:text-white transition break-all">{SITE.email}</a></li>
            <li><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">{SITE.whatsappNumber}</a></li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} BranStan. We Stan Your Brand.</p>
        <p>Built for founders who refuse to settle for generic marketing.</p>
      </div>
    </footer>
  );
}
