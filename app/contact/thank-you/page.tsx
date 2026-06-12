import type { Metadata } from 'next';
import Link from 'next/link';
import { GradientMesh } from '../../components/GradientMesh';
import { SITE } from '../../lib/seo';

export const metadata: Metadata = {
  title: 'Application Received | BranStan',
  description: 'Thanks — we have received your details and will be in touch shortly.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      <GradientMesh />
      <div className="glass-strong max-w-xl w-full p-10 md:p-14 rounded-3xl text-center relative">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center justify-center mb-8">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
          Application received.
        </h1>
        <p className="mt-5 text-gray-400 leading-relaxed">
          Thank you for reaching out. We have received your details. You will hear back within one business day with a few diagnostic questions and a link to book the scoping call.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="btn-primary">Back to home</Link>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Ping us on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
