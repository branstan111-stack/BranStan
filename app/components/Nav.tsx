import Link from 'next/link';

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-page mt-4">
        <nav className="glass-strong rounded-2xl h-16 px-5 flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="inline-block w-7 h-7 rounded-lg bg-brand-gradient shadow-glow" aria-hidden />
            Bran<span className="text-gradient">Stan</span>
          </Link>
          <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <li><Link href="/agents" className="hover:text-white transition">Agents</Link></li>
            <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
            <li><Link href="/#about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/#faq" className="hover:text-white transition">FAQ</Link></li>
          </ul>
          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-5 text-sm"
          >
            Book Strategy
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
