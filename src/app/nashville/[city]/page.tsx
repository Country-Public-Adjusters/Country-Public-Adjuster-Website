import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Globe } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { NASHVILLE_CITIES } from '@/data/localPages'
import { LOCAL_BUSINESS_SCHEMA, BREADCRUMB_SCHEMA } from '@/lib/schema'
import { localPageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/types'

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

// City-specific FAQs — falls back to generic if slug not found
const CITY_FAQS: Record<string, FAQItem[]> = {
  brentwood: [
    { id: 'q1', question: 'What storm damage is most common in Brentwood, TN?', answer: 'Brentwood is in the Williamson County hail corridor — hail damage to roofs, gutters, and siding is the most frequent claim type we see. Spring thunderstorms often bring damaging hail alongside high winds, which can compound damage to high-value residential properties.', category: 'general' },
    { id: 'q2', question: 'How quickly can Country Public Adjusters respond in Brentwood?', answer: "We're based in Nashville and respond to Brentwood same-day for urgent situations. Call us at 1-615-953-0094 immediately after a storm — early documentation is critical to the strength of your claim.", category: 'process' },
  ],
  franklin: [
    { id: 'q1', question: 'What storm damage is most common in Franklin, TN?', answer: "Franklin sees hail, straight-line wind, and tornado-related damage. The mix of historic downtown structures and newer construction subdivisions means we handle both delicate restoration claims and straightforward replacement claims from the same storm event.", category: 'general' },
    { id: 'q2', question: 'How quickly can Country Public Adjusters respond in Franklin?', answer: 'We respond rapidly throughout Franklin and Williamson County. Call 1-615-953-0094 immediately — we prioritise documenting damage before any cleanup begins.', category: 'process' },
  ],
  murfreesboro: [
    { id: 'q1', question: 'What storm damage is most common in Murfreesboro?', answer: 'Murfreesboro and Rutherford County experience some of the highest hail frequency in Middle Tennessee. Roof damage, gutter replacement, and HVAC damage from hail are the most common claim types we handle here.', category: 'general' },
    { id: 'q2', question: 'How quickly can Country Public Adjusters respond in Murfreesboro?', answer: 'We serve Murfreesboro from our Nashville hub and respond same-day for urgent storm situations. Call 1-615-953-0094 right after a storm event — the sooner we document, the stronger your claim.', category: 'process' },
  ],
  hendersonville: [
    { id: 'q1', question: 'What storm damage is most common in Hendersonville?', answer: 'Northeast-tracking storm systems hit Hendersonville and Sumner County regularly. Wind damage, hail, and flooding near Old Hickory Lake are the most common claims we document in this area.', category: 'general' },
    { id: 'q2', question: 'How quickly can Country Public Adjusters respond in Hendersonville?', answer: 'We cover all of Sumner County and respond same-day to Hendersonville for urgent damage situations. Call 1-615-953-0094 immediately after a storm.', category: 'process' },
  ],
  smyrna: [
    { id: 'q1', question: 'What storm damage is most common in Smyrna?', answer: 'Smyrna and the I-24 corridor in Rutherford County sit in an active hail belt. Hail damage to roofs, siding, and gutters is the most frequent claim type — often combined with wind damage from the same storm system.', category: 'general' },
    { id: 'q2', question: 'How quickly can Country Public Adjusters respond after a storm in Smyrna?', answer: 'We prioritise same-day response for storm situations throughout Rutherford County. Call 1-615-953-0094 immediately — the sooner we document damage, the stronger your claim.', category: 'process' },
  ],
  gallatin: [
    { id: 'q1', question: 'What storm damage is most common in Gallatin?', answer: 'Gallatin and Sumner County are in the path of northeast-tracking storm systems. Wind damage, hail, and storm damage to lakeside properties near Old Hickory Lake are all common claim types in this area.', category: 'general' },
    { id: 'q2', question: 'How quickly can Country Public Adjusters respond in Gallatin?', answer: 'We serve all of Sumner County from our Nashville hub and respond same-day for urgent damage. Call 1-615-953-0094 right after a storm — early documentation protects your claim.', category: 'process' },
  ],
  lebanon: [
    { id: 'q1', question: 'What storm damage is most common in Lebanon, TN?', answer: 'Lebanon and Wilson County experience regular severe thunderstorm activity with hail, wind, and occasional tornado damage. Both older downtown properties and newer suburban subdivisions face significant storm exposure each spring.', category: 'general' },
    { id: 'q2', question: 'How quickly can Country Public Adjusters respond in Lebanon?', answer: 'We cover all of Wilson County from our Nashville office. For urgent storm situations in Lebanon, call 1-615-953-0094 and we respond same-day.', category: 'process' },
  ],
  columbia: [
    { id: 'q1', question: 'What storm damage is most common in Columbia, TN?', answer: 'Columbia and Maury County experience severe thunderstorm activity throughout the spring season. Residential properties face hail, straight-line wind, and tornado risk — commercial and agricultural properties also see significant claim volume.', category: 'general' },
    { id: 'q2', question: 'How quickly can Country Public Adjusters respond in Columbia?', answer: 'We serve all of Middle Tennessee including Maury County. Call 1-615-953-0094 for same-day response after major storm events in Columbia.', category: 'process' },
  ],
  'la-vergne': [
    { id: 'q1', question: 'What storm damage is most common in La Vergne?', answer: "La Vergne sits in the Rutherford County hail belt. High-density residential properties along the I-24 corridor face significant hail exposure, and the area also sees wind and water damage from severe thunderstorms.", category: 'general' },
    { id: 'q2', question: 'How quickly can Country Public Adjusters respond in La Vergne?', answer: "La Vergne is part of our Rutherford County service area. Call 1-615-953-0094 for same-day response — we prioritise documenting damage before any cleanup work begins.", category: 'process' },
  ],
  'mount-juliet': [
    { id: 'q1', question: 'What storm damage is most common in Mount Juliet?', answer: "Mount Juliet and Wilson County experience active spring storm seasons with hail, wind, and tornado activity. The city's rapid growth means significant new residential construction — all facing Middle Tennessee's storm exposure.", category: 'general' },
    { id: 'q2', question: 'How quickly can Country Public Adjusters respond in Mount Juliet?', answer: 'We cover all of Wilson County from our Nashville hub. Call 1-615-953-0094 for urgent storm situations in Mount Juliet — same-day response is our priority.', category: 'process' },
  ],
}

function getDefaultFaqs(cityName: string): FAQItem[] {
  return [
    { id: 'q1', question: `What storm damage is most common in ${cityName}?`, answer: `${cityName} is part of Middle Tennessee's active storm corridor. Hail damage, wind damage, and water intrusion are the most common claim types we handle in this area. Country Public Adjusters serve all of Tennessee — including ${cityName} — from our Nashville hub.`, category: 'general' },
    { id: 'q2', question: `How quickly can Country Public Adjusters respond in ${cityName}?`, answer: `We serve all of Tennessee from our Nashville hub and prioritise same-day response for urgent storm situations. Call 1-615-953-0094 immediately after a storm — early documentation is critical to the strength of your claim.`, category: 'process' },
  ]
}

export default async function NashvilleCityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const page = NASHVILLE_CITIES[city]
  if (!page) notFound()

  const faqs = CITY_FAQS[city] ?? getDefaultFaqs(page.city)

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

      {/* ── Hero ── */}
      <section
        className="relative section-padding overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #071220 0%, #0D2545 50%, #0A1E3C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)' }} />

        <div className="container-site relative z-10">
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/nashville" className="hover:text-white/70 transition-colors">Nashville, TN</Link>
            <span>/</span>
            <span className="text-white/60">{page.city}</span>
          </nav>

          <div className="max-w-3xl">
            <FadeInView>
              <div className="flex items-center gap-2 text-xs text-white/50 mb-5">
                <MapPin size={13} style={{ color: 'rgba(245,158,11,0.7)' }} />
                <span>{page.city}, {page.state}</span>
              </div>
              <span className="badge-gold mb-5">Public Adjuster · {page.city}, TN</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                {page.city} public adjuster —{' '}
                <span style={{ color: '#F59E0B' }}>storm &amp; property damage</span>
              </h1>
              <p className="text-lg text-white/65 leading-relaxed mb-4 max-w-2xl">
                {page.intro}
              </p>
              <p className="text-base text-white/50 leading-relaxed mb-5 max-w-2xl">
                {page.localContext}
              </p>

              {/* Statewide coverage note */}
              <div className="flex items-start gap-2.5 mb-8 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <Globe size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                <p className="text-sm text-white/60 leading-relaxed">
                  <span className="text-white/80 font-semibold">We serve all of Tennessee</span> — not just {page.city}.
                  If your property is anywhere in the state, we can help.{' '}
                  <a href="tel:16159530094" className="font-semibold" style={{ color: '#F59E0B' }}>Call 1-615-953-0094.</a>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#free-inspection" className="btn-primary-lg">
                  Get Free Inspection
                  <ArrowRight size={17} />
                </Link>
                <a href="tel:16159530094"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Phone size={17} />
                  1-615-953-0094
                </a>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>


      {/* ── Nearby areas + FAQ ── */}
      <section className="section-padding bg-white">
        <div className="container-site max-w-4xl">
          <FadeInView>
            {/* Statewide statement */}
            <p className="text-sm text-slate-500 leading-relaxed mb-8 pb-8"
              style={{ borderBottom: '1px solid #E2E8F0' }}>
              <span className="text-slate-700 font-semibold">Country Public Adjusters cover all of Tennessee</span> — our Nashville hub serves Middle Tennessee but we handle claims statewide. Wherever your property is, we can help.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-8">
              Also serving nearby areas
            </h2>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/nashville"
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: '#D97706' }}
              >
                Nashville (all of Middle TN)
              </Link>
              {page.nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', color: '#64748B' }}
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mb-10">
              <h3 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wide">
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
                    className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:border-amber-300"
                    style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569' }}
                  >
                    <ArrowRight size={13} style={{ color: '#D97706' }} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* City FAQ */}
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-5">{page.city} — Common Questions</h3>
              <FAQAccordion items={faqs} theme="light" />
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  )
}
