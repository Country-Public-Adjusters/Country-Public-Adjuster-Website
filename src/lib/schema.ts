// ─── STRUCTURED DATA / JSON-LD SCHEMA ────────────────────────────────────────

export const BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://countrypublicadjusters.com/#organization',
  name: 'Country Public Adjusters',
  url: 'https://countrypublicadjusters.com',
  telephone: '+18668069911',
  email: 'claims@countrypublicadjusters.com',
  description:
    'Country Public Adjusters are licensed public insurance adjusters serving Nashville, Tennessee and South Florida. We handle storm damage, hail damage, wind damage, and water damage insurance claims on a contingency basis — no upfront cost.',
  priceRange: 'Contingency fee — no upfront cost',
  image: 'https://countrypublicadjusters.com/og-image.jpg',
  logo: 'https://countrypublicadjusters.com/logo.png',
  sameAs: [
    'https://www.facebook.com/countrypublicadjusters',
    'https://www.instagram.com/countrypublicadjusters',
    'https://www.linkedin.com/company/country-public-adjusters',
  ],
  areaServed: [
    {
      '@type': 'State',
      name: 'Tennessee',
    },
    {
      '@type': 'State',
      name: 'Florida',
    },
    {
      '@type': 'City',
      name: 'Nashville',
      containedIn: {
        '@type': 'State',
        name: 'Tennessee',
      },
    },
    {
      '@type': 'City',
      name: 'Brentwood',
    },
    {
      '@type': 'City',
      name: 'Franklin',
    },
    {
      '@type': 'City',
      name: 'Miami',
    },
    {
      '@type': 'City',
      name: 'Fort Lauderdale',
    },
    {
      '@type': 'City',
      name: 'West Palm Beach',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Public Adjuster Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Free Property Damage Inspection',
          description:
            'No-cost, no-obligation inspection of storm or property damage by a licensed public adjuster.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Insurance Claim Negotiation',
          description:
            'Full-service insurance claim management, documentation, and negotiation on a contingency basis.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Supplemental Claim Filing',
          description:
            'Review of existing settlements and filing of supplemental claims for underpaid or denied property damage claims.',
        },
      },
    ],
  },
}

export const FAQ_SCHEMA = (items: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})

export const LOCAL_BUSINESS_SCHEMA = (
  city: string,
  state: string,
  slug: string
) => ({
  ...BUSINESS_SCHEMA,
  name: `Country Public Adjusters — ${city}, ${state}`,
  url: `https://countrypublicadjusters.com/${slug}`,
  telephone: '+18668069911',
  areaServed: {
    '@type': 'City',
    name: city,
    containedIn: {
      '@type': 'State',
      name: state,
    },
  },
})

export const BREADCRUMB_SCHEMA = (
  items: { name: string; url: string }[]
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const SERVICE_SCHEMA = (
  name: string,
  description: string,
  url: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Country Public Adjusters',
    url: 'https://countrypublicadjusters.com',
  },
  areaServed: ['Nashville, TN', 'South Florida'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Public Adjuster Services',
  },
})
