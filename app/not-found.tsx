import Link from 'next/link';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { GradientMesh } from './components/GradientMesh';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="relative min-h-[80vh] flex items-center justify-center px-6">
        <GradientMesh />
        <div className="text-center max-w-xl">
          <p className="eyebrow mb-6">404 — page not found</p>
          <h1 className="section-h">
            That page <span className="text-gradient">drifted off-brand.</span>
          </h1>
          <p className="section-sub mx-auto">
            The page you were looking for does not exist. Let&apos;s get you back to something useful.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="btn-primary">Back to home</Link>
            <Link href="/agents" className="btn-secondary">See the agents</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
