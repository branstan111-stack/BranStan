import { Schema } from './Schema';
import { faqSchema } from '../lib/seo';

export type FAQItem = { question: string; answer: string };

const HOME_FAQS: FAQItem[] = [
  {
    question: 'What does an agentic AI marketing consultancy actually do?',
    answer:
      'We combine senior marketing strategists with specialist AI agents that handle the work that used to require a six-person team — competitive research, cultural mapping, LLM citation optimization, social listening, content production, and quarterly strategy. You get one accountable partner and the depth of an in-house function.',
  },
  {
    question: 'How is this different from hiring an agency or a fractional CMO?',
    answer:
      'A traditional agency sells output (decks, campaigns, posts). A fractional CMO sells leadership. We sell an operating system — a sequenced growth plan, a continuous research substrate, and execution against it. The cost is closer to a senior hire than a retainer agency, and the throughput is higher.',
  },
  {
    question: 'What kind of brands do you work with?',
    answer:
      'Founder-led brands across D2C, B2B SaaS, F&B, and healthtech. Typical engagements are with companies between $1M and $50M in revenue who are past the experimentation stage and ready to compound. We are intentionally selective — we take on only as much work as we can do well.',
  },
  {
    question: 'How long are engagements?',
    answer:
      'Initial engagements are quarterly — long enough to see real lift, short enough to test fit. Most clients renew on a quarterly cadence. We do not run annual contracts that lock you in beyond the work being valuable.',
  },
  {
    question: 'Do you work with brands outside India?',
    answer:
      'Yes. We currently work with brands across India, Southeast Asia, the UK, and North America. The agents are language- and culture-aware; the strategists are global.',
  },
  {
    question: 'What does the first 30 days look like?',
    answer:
      'Week one: diagnostic and bet architecture. Week two: research substrate goes live, first cultural and citation audits delivered. Week three: first campaigns and assets ship. Week four: first performance review and roadmap refinement. You see real work, not slideware, by the end of week one.',
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
