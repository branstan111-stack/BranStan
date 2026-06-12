import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { StatStrip } from './components/StatStrip';
import { About } from './components/About';
import { AgentGrid } from './components/AgentGrid';
import { ProcessTimeline } from './components/ProcessTimeline';
import { CaseStudyTeaser } from './components/CaseStudyTeaser';
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
        <About />
        <AgentGrid />
        <ProcessTimeline />
        <CaseStudyTeaser />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
