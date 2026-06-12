import type { MetadataRoute } from 'next';
import { SITE } from './lib/seo';
import { agents } from './lib/agents';
import { caseStudies } from './lib/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/agents', '/case-studies', '/contact'].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date('2026-06-12'),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const agentRoutes = agents.map((a) => ({
    url: `${SITE.url}/agents/${a.slug}`,
    lastModified: new Date('2026-06-12'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const caseRoutes = caseStudies.map((c) => ({
    url: `${SITE.url}/case-studies/${c.slug}`,
    lastModified: new Date(c.date),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...agentRoutes, ...caseRoutes];
}
