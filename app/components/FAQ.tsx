import { Schema } from './Schema';
import { faqSchema } from '../lib/seo';

export type FAQItem = { question: string; answer: string };

const HOME_FAQS: FAQItem[] = [
  {
    question: 'What is a Consumer Intelligence company, and how is BranStan different from a marketing agency?',
    answer:
      'A marketing agency sells output — campaigns, content, ads, decks. We sell intelligence and the recommendation that comes with it. The Consumer Intelligence Sprint is a 14-day engagement that gives you a defensible read on your consumer, your category, your competitors, and your AI visibility — and the growth bets the intelligence actually supports. The work that follows the readout is yours to keep, hand to an agency, or scope with us separately.',
  },
  {
    question: 'What is the Consumer Intelligence Sprint?',
    answer:
      'A 14-day strategic engagement that uncovers six things: consumer insights, market shifts, competitive opportunities, cultural trends, AI discoverability gaps, and the prioritized growth opportunities the intelligence supports. You walk away with a written readout, an opportunity map, and a sequenced 90-day recommendation. It is the recommended starting point for every new client.',
  },
  {
    question: 'You mention AI agents — am I buying access to those?',
    answer:
      'No. The agents are the proprietary intelligence engine we run internally to deliver Sprints and capability engagements. You buy intelligence and recommendations; we run the engine. If you want a single capability — a GEO Audit, a Cultural Analysis, an AI Visibility Assessment — you can engage that module on its own.',
  },
  {
    question: 'What kind of brands do you work with?',
    answer:
      'Founder-led brands across D2C, B2B SaaS, F&B, and healthtech, typically between $1M and $50M in revenue. The common thread is teams that are about to make a non-trivial growth decision and want defensible signal underneath it before they commit budget.',
  },
  {
    question: 'Do you also execute on the recommendations?',
    answer:
      'Optionally. The Sprint readout is designed to be executable by your team, an existing agency, or — if it is the right fit — by us. We are intelligence-first by design, so execution engagements only follow when the intelligence makes the path obvious.',
  },
  {
    question: 'Do you work with brands outside India?',
    answer:
      'Yes. We currently run engagements across India, Southeast Asia, the UK, and North America. The intelligence engine is language- and culture-aware; the strategists are global.',
  },
];

export function FAQ({ faqs = HOME_FAQS, title }: { faqs?: FAQItem[]; title?: React.ReactNode }) {
  return (
    <section id="faq" className="py-32 relative">
      <Schema data={faqSchema(faqs)} />
      <div className="container-page max-w-4xl">
        <div className="reveal">
          <p className="eyebrow mb-6">Answers</p>
          <h2 className="section-h">
            {title ?? (
              <>
                Questions, <br />
                <span className="text-gradient">answered straight.</span>
              </>
            )}
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.question}
              className="reveal glass rounded-xl p-6 group transition open:bg-white/[0.03]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <summary className="cursor-pointer flex items-center justify-between text-white font-medium list-none gap-6">
                <span className="text-pretty">{f.question}</span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-open:rotate-45 transition-transform">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-[15px] pr-8">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
