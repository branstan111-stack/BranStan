import Link from 'next/link';

export function CTABanner({
  eyebrow = 'Ready when you are',
  title,
  subtitle,
  primaryLabel = 'Start an engagement',
  primaryHref = '/contact?service=Consumer%20Intelligence%20Sprint',
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="py-32 relative">
      <div className="container-page">
        <div className="reveal glass-strong rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.5), transparent 60%)' }} />
          </div>
          <div className="relative">
            <p className="eyebrow mb-6 mx-auto">{eyebrow}</p>
            <h2 className="section-h">
              {title ?? (
                <>
                  Let&apos;s start the <br />
                  <span className="text-gradient">conversation.</span>
                </>
              )}
            </h2>
            <p className="section-sub mx-auto">
              {subtitle ??
                'Tell us the decision you are about to make. We will scope the intelligence engagement that gives you defensible signal before you commit.'}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                {primaryLabel}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link href={secondaryHref} className="btn-secondary text-base">
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
