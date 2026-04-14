import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/intake/'], // Don't index the form page itself
    },
    sitemap: 'https://countrypublicadjusters.com/sitemap.xml',
  }
}
