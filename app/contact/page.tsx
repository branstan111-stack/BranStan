import type { Metadata } from 'next';
import Link from 'next/link';
import { GradientMesh } from '../components/GradientMesh';
import { ScrollReveal } from '../components/ScrollReveal';
import { SITE, buildMetadata } from '../lib/seo';
import { agents } from '../lib/agents';

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Book a Strategy Session | BranStan',
    description:
      'Tell us about your brand, the bottleneck you are hitting, and the timeline. We will come back with a scoped engagement and a 90-day plan.',
    path: '/contact',
  }),
  robots: { index: true, follow: true },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { service?: string };
}) {
  const preselected = searchParams?.service ?? '';
  return (
    <>
      <main className="relative min-h-screen pt-16 pb-24 overflow-hidden">
        <GradientMesh />

        <div className="container-page relative">
          <header className="flex justify-between items-center mb-16 reveal">
            <Link href="/" className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="inline-block w-7 h-7 rounded-lg bg-brand-gradient shadow-glow" aria-hidden />
              Bran<span className="text-gradient">Stan</span>
            </Link>
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M11 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to site
            </Link>
          </header>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 reveal">
              <p className="eyebrow mb-6">Book a strategy session</p>
              <h1 className="font-display font-semibold tracking-tightest text-5xl md:text-6xl text-balance leading-[1.05]">
                Let&apos;s map your <br />
                <span className="text-gradient">growth trajectory.</span>
              </h1>
              <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                A 30-minute scoping call. You bring the brand and the bottleneck. We come back with the agent mix and the 90-day plan.
              </p>

              <div className="mt-12 space-y-6">
                <DirectChannel
                  title="WhatsApp"
                  body="Fastest path to a reply. Aim for under 4 hours during business days."
                  cta="Open WhatsApp"
                  href={SITE.whatsapp}
                  external
                  icon={
                    <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                    </svg>
                  }
                />
                <DirectChannel
                  title="Email"
                  body={SITE.email}
                  cta="Compose email"
                  href={`mailto:${SITE.email}`}
                  icon={
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M4 6h16v12H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                  }
                />
              </div>

              <div className="mt-12 glass rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-3">What happens after you submit</p>
                <ol className="space-y-3 text-sm text-gray-300">
                  <li className="flex gap-3">
                    <span className="font-mono text-gray-500">01</span>
                    <span>We reply within one business day with a few diagnostic questions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-gray-500">02</span>
                    <span>We book a 30-minute scoping call at a time that works for you.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-gray-500">03</span>
                    <span>You receive a written engagement proposal and a 90-day plan within five working days.</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="lg:col-span-7 reveal" style={{ transitionDelay: '120ms' }}>
              <form
                action={SITE.formspree}
                method="POST"
                className="glass-strong rounded-3xl p-8 md:p-10 space-y-6"
              >
                <input type="hidden" name="_next" value={`${SITE.url}/contact/thank-you`} />
                <input type="hidden" name="_subject" value="New BranStan strategy session request" />

                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Your name" name="Name" required />
                  <Field label="Brand or business name" name="Brand" required />
                </div>

                <Field label="Email address" name="Email" type="email" required />
                <Field label="Website (optional)" name="Website" placeholder="https://" />

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">Service you want to opt for</label>
                  <select
                    name="Service"
                    required
                    defaultValue={preselected}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition appearance-none"
                  >
                    <option value="" disabled>Select a service...</option>
                    {agents.map((a) => (
                      <option key={a.slug} value={a.shortName}>{a.name}</option>
                    ))}
                    <option value="Not sure — recommend">Not sure — recommend a mix</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">Biggest marketing challenge right now</label>
                  <textarea
                    name="Challenge"
                    rows={4}
                    required
                    placeholder="The honest one. What is keeping you up at night about growth?"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition resize-y"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">Timeline</label>
                    <select
                      name="Timeline"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>Select timeline...</option>
                      <option>Starting now</option>
                      <option>Within 30 days</option>
                      <option>Within 90 days</option>
                      <option>Exploring</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-base !py-4"
                >
                  Submit and book the scoping call
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Your details go directly to the founder. We do not run a sales team — you talk to the person who builds the plan.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <ScrollReveal />
    </>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.15em] text-gray-400 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition"
      />
    </div>
  );
}

function DirectChannel({
  title,
  body,
  cta,
  href,
  external,
  icon,
}: {
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="glass rounded-xl p-5 flex gap-4 items-center hover:bg-white/5 transition group"
    >
      <span className="w-11 h-11 flex-shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold">{title}</p>
        <p className="text-sm text-gray-400 truncate">{body}</p>
      </div>
      <span className="text-xs text-gray-400 group-hover:text-white transition flex items-center gap-1 flex-shrink-0">
        {cta}
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}
