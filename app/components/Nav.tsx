import Link from 'next/link';

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="glass-strong border-b border-white/10">
        <div className="container-page h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <span className="inline-block w-7 h-7 rounded-lg bg-brand-gradient shadow-glow" aria-hidden />
            <span>Bran<span className="text-gradient">Stan</span></span>
          </Link>
          <ul className="hidden md:flex items-center gap-7 text-sm text-gray-300">
            <li><Link href="/#sprint" className="hover:text-white transition">Sprint</Link></li>
            <li><Link href="/#how" className="hover:text-white transition">How it works</Link></li>
            <li><Link href="/#engine" className="hover:text-white transition">Intelligence engine</Link></li>
            <li><Link href="/case-studies" className="hover:text-white transition">Case studies</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
          <Link
            href="/contact?service=Consumer%20Intelligence%20Sprint"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-5 text-sm"
          >
            Start a Sprint
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
