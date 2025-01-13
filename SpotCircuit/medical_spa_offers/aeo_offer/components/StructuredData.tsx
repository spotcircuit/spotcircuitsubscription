import React from 'react';

interface FAQPageSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

interface MedicalBusinessSchemaProps {
  name: string;
  description: string;
  treatments: string[];
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MedicalBusinessSchema({
  name,
  description,
  treatments,
  aggregateRating,
}: MedicalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': '#medicalBusiness',
    name,
    description,
    medicalSpecialty: treatments.map(treatment => ({
      '@type': 'MedicalSpecialty',
      name: treatment,
    })),
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': '#localBusiness',
    name: 'SpotCircuit Medical Spa SEO & AEO Services',
    description: 'Specialized SEO and Answer Engine Optimization services for medical spas, helping increase visibility and attract high-value clients.',
    url: 'https://spotcircuit.com/medical-spa-aeo',
    sameAs: [
      'https://www.facebook.com/spotcircuit',
      'https://twitter.com/spotcircuit',
      'https://www.linkedin.com/company/spotcircuit'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '127'
    },
    priceRange: '$$$',
    openingHours: 'Mo,Tu,We,Th,Fr 09:00-17:00',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Medical Spa AEO Services',
    provider: {
      '@id': '#localBusiness'
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Medical Spa AEO Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Voice Search Optimization',
            description: 'Optimize your medical spa for voice search queries and featured snippets'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local AEO',
            description: 'Dominate local voice search results for medical spa services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Content Optimization',
            description: 'Expert content optimization for medical spa services'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
