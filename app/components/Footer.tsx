import Link from 'next/link';
import { SITE } from '../lib/seo';

const CAPABILITY_LINKS = [
  { label: 'GEO Audit', service: 'GEO Audit' },
  { label: 'Cultural Analysis', service: 'Cultural Analysis' },
  { label: 'Consumer Research', service: 'Consumer Research' },
  { label: 'Social Listening', service: 'Social Listening' },
  { label: 'Competitive Intelligence', service: 'Competitive Intelligence' },
  { label: 'AI Visibility Assessment', service: 'AI Visibility Assessment' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-32 pt-20 pb-10 relative">
      <div className="container-page grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Link href="/" className="font-display text-2xl font-bold text-white flex items-center gap-2.5">
            <span className="inline-block w-7 h-7 rounded-lg bg-brand-gradient" aria-hidden />
            <span>Bran<span className="text-gradient">Stan</span></span>
          </Link>
          <p className="mt-5 text-gray-400 text-sm leading-relaxed max-w-sm">
            An AI-native Consumer Intelligence company. We help founder-led brands understand consumers, culture, competitors, and AI visibility before they make growth decisions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact?service=Consumer%20Intelligence%20Sprint"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !py-2.5 !px-5 text-sm"
            >
              Start a Sprint
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
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Capabilities</p>
          <ul className="space-y-2.5 text-sm text-gray-400">
            {CAPABILITY_LINKS.map((c) => (
              <li key={c.service}>
                <Link
                  href={`/contact?service=${encodeURIComponent(c.service)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li><Link href="/#sprint" className="hover:text-white transition">Sprint</Link></li>
            <li><Link href="/#engine" className="hover:text-white transition">Intelligence engine</Link></li>
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
        <p>© {new Date().getFullYear()} BranStan — {SITE.brandMark}.</p>
        <p>Intelligence before the bet. Decisions, not output.</p>
      </div>
    </footer>
  );
}
