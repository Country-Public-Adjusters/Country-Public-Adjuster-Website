import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FinalCTA from '@/components/home/FinalCTA'
import { NASHVILLE_CITIES } from '@/data/localPages'
import { LOCAL_BUSINESS_SCHEMA, BREADCRUMB_SCHEMA } from '@/lib/schema'
import { localPageMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return Object.keys(NASHVILLE_CITIES).map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const page = NASHVILLE_CITIES[city]
  if (!page) return {}
  return localPageMetadata(page.city, page.state, `nashville/${city}`)
}

export default async function NashvilleCityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const page = NASHVILLE_CITIES[city]
  if (!page) notFound()

  const schemas = [
    LOCAL_BUSINESS_SCHEMA(page.city, page.state, `nashville/${city}`),
    BREADCRUMB_SCHEMA([
      { name: 'Home', url: 'https://countrypublicadjusters.com' },
      { name: 'Nashville, TN', url: 'https://countrypublicadjusters.com/nashville' },
      { name: `${page.city}, TN`, url: `https://countrypublicadjusters.com/nashville/${city}` },
    ]),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section
        className="relative section-padding min-h-[50vh] flex items-center"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 60%), linear-gradient(180deg, #060F1E 0%, #0B1F3A 100%)',
        }}
      >
        <div className="container-site">
          <nav className="flex items-center gap-2 text-xs text-white/35 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/nashville" className="hover:text-white/60 transition-colors">Nashville, TN</Link>
            <span>/</span>
            <span className="text-white/60">{page.city}</span>
          </nav>

          <div className="max-w-3xl">
            <FadeInView>
              <div className="flex items-center gap-2 text-xs text-white/35 mb-5">
                <MapPin size={13} className="text-gold-500/60" />
                <span>{page.city}, {page.state}</span>
              </div>
              <span className="badge-gold mb-5">Public Adjuster · {page.city}, TN</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                {page.city} public adjuster —{' '}
                <span className="text-gradient-gold">storm &amp; property damage</span>
              </h1>
              <p className="text-lg text-white/55 leading-relaxed mb-5 max-w-2xl">
                {page.intro}
              </p>
              <p className="text-base text-white/45 leading-relaxed mb-8 max-w-2xl">
                {page.localContext}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/intake" className="btn-primary-lg">
                  Get Free Inspection
                  <ArrowRight size={17} />
                </Link>
                <a href="tel:18668069911" className="btn-secondary-lg">
                  <Phone size={17} />
                  1-866-806-9911
                </a>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="bg-navy-900 section-padding">
        <div className="container-site max-w-4xl">
          <FadeInView>
            <h2 className="section-heading-dark mb-8">
              Also serving nearby areas
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nashville"
                className="px-4 py-2 rounded-full text-sm font-medium
                           bg-gold-500/15 border border-gold-500/35 text-gold-300
                           hover:bg-gold-500/25 transition-all duration-200"
              >
                Nashville (all of Middle TN)
              </Link>
              {page.nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full text-sm font-medium
                             bg-white/[0.05] border border-white/[0.07] text-white/55"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Services quick links */}
            <div className="mt-10">
              <h3 className="text-sm font-bold text-white/60 mb-4 uppercase tracking-wide">
                Common {page.city} claim types
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: 'Hail Damage', href: '/damage/hail' },
                  { label: 'Wind Damage', href: '/damage/wind' },
                  { label: 'Roof Damage', href: '/damage/roof' },
                  { label: 'Water Damage', href: '/damage/water' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium
                               bg-white/[0.04] border border-white/[0.06] text-white/60
                               hover:text-white/80 hover:bg-white/[0.07] transition-all duration-200"
                  >
                    <ArrowRight size={13} className="text-gold-500/50" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
