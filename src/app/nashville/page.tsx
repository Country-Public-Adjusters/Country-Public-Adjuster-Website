import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Shield } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FinalCTA from '@/components/home/FinalCTA'
import CaseResults from '@/components/home/CaseResults'
import { localPageMetadata } from '@/lib/seo'
import { LOCAL_BUSINESS_SCHEMA, BREADCRUMB_SCHEMA, FAQ_SCHEMA } from '@/lib/schema'
import type { FAQItem } from '@/types'

export const metadata: Metadata = localPageMetadata(
  'Nashville',
  'Tennessee',
  'nashville',
  'Country Public Adjusters serve Nashville and all of Middle Tennessee. Licensed public adjusters handling storm damage, hail, wind, water damage insurance claims. Free inspection, no upfront cost. Call 1-866-806-9911.'
)

const NASHVILLE_CITIES = [
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
    answer: 'We prioritize response after major storm events in our service area. For urgent or emergency situations, we respond same-day. Call us at 1-866-806-9911 immediately after a storm — the sooner we document damage, the stronger your claim.',
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

      {/* Hero */}
      <section
        className="relative section-padding min-h-[55vh] flex items-center"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.1) 0%, transparent 60%), linear-gradient(180deg, #060F1E 0%, #0B1F3A 100%)',
        }}
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInView>
              <div className="flex items-center gap-2 text-xs text-white/35 mb-6">
                <MapPin size={13} className="text-gold-500/60" />
                <span>Nashville, Tennessee · Middle Tennessee</span>
              </div>
              <span className="badge-gold mb-5">Nashville Public Adjuster</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                Nashville's property damage{' '}
                <span className="text-gradient-gold">insurance advocate</span>
              </h1>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-2xl">
                Country Public Adjusters serve Nashville and all of Middle Tennessee.
                We handle storm damage, hail damage, wind damage, and water damage insurance
                claims on contingency — free inspection, no upfront cost.
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

      {/* Nashville context section */}
      <section className="bg-navy-900 section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <FadeInView>
              <span className="section-label mb-4 block">Nashville Storm Context</span>
              <h2 className="section-heading-dark mb-5">
                Nashville's storm season is one of the most active in the Southeast
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
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
              <div className="card-dark p-6">
                <h3 className="font-bold text-white text-lg mb-4">
                  Nashville service area
                </h3>
                <p className="text-sm text-white/50 mb-5">
                  We serve all of Middle Tennessee including:
                </p>
                <div className="flex flex-wrap gap-2">
                  <div
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(245,158,11,0.15)',
                      border: '1px solid rgba(245,158,11,0.35)',
                      color: '#FBBF24',
                    }}
                  >
                    Nashville (Davidson Co.)
                  </div>
                  {NASHVILLE_CITIES.map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="px-3 py-1.5 rounded-full text-xs font-medium
                                 bg-white/[0.05] border border-white/[0.06] text-white/55
                                 hover:text-white/80 hover:bg-white/[0.08] transition-all duration-200"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Case results */}
      <CaseResults />

      {/* FAQ */}
      <section className="bg-navy-950 section-padding">
        <div className="container-site max-w-3xl">
          <FadeInView className="mb-8">
            <h2 className="section-heading-dark">Nashville public adjuster FAQ</h2>
          </FadeInView>
          <FadeInView delay={0.1}>
            <FAQAccordion items={LOCAL_FAQS} theme="dark" />
          </FadeInView>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
