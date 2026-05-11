import type { Metadata } from 'next'

const BASE_URL = 'https://countrypublicadjusters.com'
const BRAND = 'Country Public Adjusters'
const PHONE = '1-888-397-5420'

// ─── BASE METADATA ────────────────────────────────────────────────────────────

export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${BRAND} | Nashville & South Florida Public Adjusters`,
    template: `%s | ${BRAND}`,
  },
  description:
    'Country Public Adjusters handle your storm damage insurance claim from start to finish. Free inspection, no upfront cost, contingency-only. Serving Nashville, TN and South Florida.',
  keywords: [
    'public adjuster',
    'public adjuster Nashville',
    'public adjuster South Florida',
    'storm damage claim',
    'hail damage claim',
    'wind damage claim',
    'insurance claim help',
    'property damage adjuster',
    'roof damage claim',
    'hurricane damage claim',
    'water damage claim',
    'underpaid insurance claim',
  ],
  authors: [{ name: BRAND }],
  creator: BRAND,
  publisher: BRAND,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: BRAND,
    title: `${BRAND} | Your Insurance Advocate`,
    description:
      'Free inspection. No upfront cost. We handle your entire storm damage claim so you get paid what you deserve.',
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Country Public Adjusters — Storm Damage Insurance Claim Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND} | Your Insurance Advocate`,
    description: 'Free inspection. No upfront cost. We fight for the full claim payout you deserve.',
    images: [`${BASE_URL}/og-image.jpg`],
  },
  verification: {
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    // yandex: 'YOUR_YANDEX_CODE',
  },
  alternates: {
    canonical: BASE_URL,
  },
}

// ─── PAGE METADATA HELPERS ───────────────────────────────────────────────────

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  keywords?: string[]
): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title: `${title} | ${BRAND}`,
      description,
      url: `${BASE_URL}${path}`,
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  }
}

export function localPageMetadata(
  city: string,
  state: string,
  slug: string,
  description?: string
): Metadata {
  const title = `Public Adjuster ${city}, ${state} | Storm & Property Damage Claims`
  const desc =
    description ??
    `Country Public Adjusters serve ${city}, ${state}. Licensed public adjusters handling storm damage, hail, wind, and water damage insurance claims. Free inspection. Call ${PHONE}.`

  return {
    title,
    description: desc,
    keywords: [
      `public adjuster ${city}`,
      `${city} public adjuster`,
      `storm damage claim ${city}`,
      `insurance claim help ${city}`,
      `property damage adjuster ${state}`,
    ],
    openGraph: {
      title: `${title} | ${BRAND}`,
      description: desc,
      url: `${BASE_URL}/${slug}`,
    },
    alternates: {
      canonical: `${BASE_URL}/${slug}`,
    },
  }
}

export function damagePageMetadata(
  damageType: string,
  slug: string
): Metadata {
  const title = `${damageType} Insurance Claims | Public Adjuster Help`
  const desc = `Underpaid on your ${damageType.toLowerCase()} insurance claim? Country Public Adjusters handle every step of your claim for free upfront. Call ${PHONE}.`

  return {
    title,
    description: desc,
    openGraph: {
      title: `${title} | ${BRAND}`,
      description: desc,
      url: `${BASE_URL}/damage/${slug}`,
    },
    alternates: {
      canonical: `${BASE_URL}/damage/${slug}`,
    },
  }
}
