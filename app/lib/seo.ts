import type { Metadata } from 'next';

export const SITE = {
  name: 'BranStan',
  url: 'https://bran-stan.com',
  tagline: 'We Stan Your Brand',
  description:
    'BranStan is an agentic AI marketing consultancy. We deploy six specialist agents — cultural, GEO, research, listening, social, and growth — to build brands that compound.',
  ogImage: '/og-default.png',
  twitter: '@branstan',
  email: 'branstan.111@gmail.com',
  whatsapp: 'https://wa.me/918052842921',
  whatsappNumber: '+91 80528 42921',
  formspree: 'https://formspree.io/f/xredrpvk',
};

export function buildMetadata(input: {
  title: string;
  description: string;
  path?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
}): Metadata {
  const url = input.path ? `${SITE.url}${input.path}` : SITE.url;
  return {
    metadataBase: new URL(SITE.url),
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE.name,
      type: input.type ?? 'website',
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
      publishedTime: input.publishedTime,
      authors: input.authors,
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [SITE.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/favicon.svg`,
  description: SITE.description,
  founder: { '@type': 'Person', name: 'Anubhuti' },
  sameAs: [SITE.whatsapp],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: SITE.email,
    telephone: SITE.whatsappNumber,
    availableLanguage: ['English', 'Hindi'],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
};

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: args.name,
    description: args.description,
    url: args.url,
    provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    areaServed: 'Global',
  };
}

export function articleSchema(args: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: args.headline,
    description: args.description,
    url: args.url,
    datePublished: args.datePublished,
    dateModified: args.datePublished,
    author: { '@type': 'Person', name: args.authorName ?? 'Anubhuti, BranStan' },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.svg` },
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
