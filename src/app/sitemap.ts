import type { MetadataRoute } from 'next'
import { DAMAGE_PAGES } from '@/data/damagePages'
import { NASHVILLE_CITIES, FLORIDA_CITIES } from '@/data/localPages'

const BASE_URL = 'https://countrypublicadjusters.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // ── Core pages ──
  const corePages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/services`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/intake`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/results`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/reviews`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/faq`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
  ].map((p) => ({ ...p, lastModified: now }))

  // ── Damage type pages ──
  const damagePages = Object.keys(DAMAGE_PAGES).map((slug) => ({
    url: `${BASE_URL}/damage/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // ── Nashville region pages ──
  const nashvilleHub = {
    url: `${BASE_URL}/nashville`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }

  const nashvilleCity = Object.keys(NASHVILLE_CITIES).map((slug) => ({
    url: `${BASE_URL}/nashville/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // ── South Florida pages ──
  const floridaHub = {
    url: `${BASE_URL}/south-florida`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }

  const floridaCity = Object.keys(FLORIDA_CITIES).map((slug) => ({
    url: `${BASE_URL}/south-florida/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [
    ...corePages,
    ...damagePages,
    nashvilleHub,
    ...nashvilleCity,
    floridaHub,
    ...floridaCity,
  ]
}
