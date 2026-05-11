import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Shield, Globe } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CaseResults from '@/components/home/CaseResults'
import { localPageMetadata } from '@/lib/seo'
import { LOCAL_BUSINESS_SCHEMA, BREADCRUMB_SCHEMA, FAQ_SCHEMA } from '@/lib/schema'
import type { FAQItem } from '@/types'

export const metadata: Metadata = localPageMetadata(
  'Nashville',
  'Tennessee',
  'nashville',
  'Country Public Adjusters serve all of Tennessee — with our primary hub in Nashville and Middle Tennessee. Licensed public adjusters handling storm damage, hail, wind, water damage insurance claims. Free inspection, no upfront cost. Call 1-615-953-0094.'
)

const NASHVILLE_CITY_LINKS = [
  { name: 'Brentwood', href: '/nashville/brentwood' },
  { name: 'Franklin', href: '/nashville/franklin' },
  { name: 'Murfreesboro', href: '/nashville/murfreesboro' },
  { name: 'Hendersonville', href: '/nashville/hendersonville' },
  { name: 'Smyrna', href: '/nashville/smyrna' },
  { name: 'Gallatin', href: '/nashville/gallatin' },
  { name: 'Lebanon', href: '/nashville/lebanon' },
  { name: 'Columbia', href: '/nashville/columbia' },
  { name: 'La Vergne', href: '/nashville/la-vergne' },
  { name: 'Mount Juliet', href: '/nashville/mount-juliet' },
]

const LOCAL_FAQS: FAQItem[] = [
  {
    id: 'tn-law',
    question: 'Is hiring a public adjuster in Tennessee legal?',
    answer: 'Yes. Your right to hire a licensed public adjuster is protected under Tennessee state law. Insurance companies cannot penalize, cancel, or discriminate against policyholders who hire a public adjuster. We are licensed to practice in Tennessee.',
    category: 'legal',
  },
  {
    id: 'nashville-storms',
    question: 'What types of storm damage are most common in Nashville?',
    answer: 'Nashville and Middle Tennessee experience hailstorms, tornadoes, severe straight-line wind events, and periodic major flooding. The spring storm season (March–June) is particularly active. We\'ve handled claims through multiple major tornado outbreaks in the Nashville metro area.',
    category: 'general',
  },
  {
    id: 'how-fast',
    question: 'How quickly can you respond after a Nashville storm event?',
    answer: 'We prioritize response after major storm events in our service area. For urgent or emergency situations, we respond same-day. Call us at 1-615-953-0094 immediately after a storm — the sooner we document damage, the stronger your claim.',
    category: 'process',
  },
]

export default function NashvillePage() {
  const schemas = [
    LOCAL_BUSINESS_SCHEMA('Nashville', 'Tennessee', 'nashville'),
    BREADCRUMB_SCHEMA([
      { name: 'Home', url: 'https://countrypublicadjusters.com' },
      { name: 'Nashville, TN', url: 'https://countrypublicadjusters.com/nashville' },
    ]),
    FAQ_SCHEMA(LOCAL_FAQS.map((f) => ({ question: f.question, answer: f.answer }))),
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
        style={{ background: 'linear-gradient(160deg, #030D1A 0%, #0D2545 50%, #0A1E3C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)' }} />

        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <FadeInView>
              <div className="flex items-center gap-2 text-xs text-white/50 mb-5">
                <MapPin size={13} style={{ color: 'rgba(245,158,11,0.7)' }} />
                <span>Nashville, Tennessee · Middle Tennessee</span>
              </div>
              <span className="badge-gold mb-5">Nashville Public Adjuster</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                Nashville's property damage{' '}
                <span style={{ color: '#F59E0B' }}>insurance advocate</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-5 max-w-2xl">
                Country Public Adjusters serve all of Tennessee — with our primary hub in Nashville and Middle Tennessee.
                We handle storm damage, hail damage, wind damage, and water damage insurance
                claims on contingency — free inspection, no upfront cost.
              </p>
              <div className="flex items-start gap-2.5 mb-8 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <Globe size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                <p className="text-sm text-white/60 leading-relaxed">
                  <span className="text-white/80 font-semibold">We cover the entire state of Tennessee</span> — not just Nashville. Whether you're in Memphis, Knoxville, Chattanooga, or anywhere in between, we can help.
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


      {/* ── Nashville context ── */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <FadeInView>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706' }}>
                NASHVILLE STORM CONTEXT
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Nashville's storm season is one of the most active in the Southeast
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Middle Tennessee sits in a corridor that generates hailstorms, tornadoes,
                  and severe thunderstorms throughout spring and early summer. Nashville
                  has been hit by multiple billion-dollar storm events in recent years,
                  leaving thousands of property owners navigating complex insurance claims.
                </p>
                <p>
                  Insurance companies deploy coordinated claim management strategies after
                  major events — prioritizing their exposure over your recovery. Country
                  Public Adjusters has operated through every major Nashville storm event
                  and knows exactly what the insurers active in this market do and how
                  to counter it.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="rounded-3xl p-6" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Tennessee service area</h3>
                <p className="text-sm text-slate-500 mb-4">Primary hub in Middle Tennessee — we serve the entire state.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#D97706' }}>
                    Nashville (Davidson Co.)
                  </span>
                  {NASHVILLE_CITY_LINKS.map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:border-amber-300"
                      style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#64748B' }}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
                <p className="text-xs text-slate-400">Also serving Clarksville, Jackson, Knoxville, Memphis, Chattanooga, and all of Tennessee.</p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Case results — white section, continues naturally from white context above */}
      <CaseResults />


      {/* ── FAQ ── */}
      <section className="section-padding" style={{ background: '#0A1E3C' }}>
        <div className="container-site max-w-3xl">
          <FadeInView className="mb-8">
            <h2 className="text-3xl font-black text-white">Nashville public adjuster FAQ</h2>
          </FadeInView>
          <FadeInView delay={0.1}>
            <FAQAccordion items={LOCAL_FAQS} theme="dark" />
          </FadeInView>
        </div>
      </section>

      
    </>
  )
}
