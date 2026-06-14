import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { StatStrip } from './components/StatStrip';
import { SprintOffer } from './components/SprintOffer';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AgentGrid } from './components/AgentGrid';
import { IndividualServices } from './components/IndividualServices';
import { CaseStudyTeaser } from './components/CaseStudyTeaser';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { CTABanner } from './components/CTABanner';
import { ScrollReveal } from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatStrip />
        <SprintOffer />
        <ProcessTimeline />
        <AgentGrid />
        <IndividualServices />
        <CaseStudyTeaser />
        <About />
        <FAQ />
        <CTABanner
          eyebrow="Ready when you are"
          title={
            <>
              Get the intelligence <br />
              <span className="text-gradient">before the bet.</span>
            </>
          }
          subtitle="Start with the Consumer Intelligence Sprint, or scope a single capability. Either way, the next step is a 30-minute call."
          primaryLabel="Start a Consumer Intelligence Sprint"
        />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
