import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Globe } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CaseResults from '@/components/home/CaseResults'
import { LOCAL_BUSINESS_SCHEMA, BREADCRUMB_SCHEMA, FAQ_SCHEMA, SERVICE_SCHEMA } from '@/lib/schema'
import type { FAQItem } from '@/types'

const BASE = 'https://countrypublicadjusters.com'

export const metadata: Metadata = {
  title: 'Tennessee Public Adjuster | Storm, Hail & Wind Damage Claims | Country Public Adjusters',
  description: 'Licensed Tennessee public adjusters serving Nashville, Memphis, Knoxville, Chattanooga and all of TN. Storm, hail, wind & water damage claims on contingency. Free inspection, no upfront cost. Call 1-888-397-5420.',
  keywords: [
    'public adjuster Tennessee', 'Tennessee public adjuster', 'public adjuster Nashville',
    'Nashville public adjuster', 'storm damage claim Tennessee', 'hail damage claim Tennessee',
    'wind damage claim Nashville', 'tornado damage claim Tennessee', 'water damage claim TN',
    'public adjuster Memphis', 'public adjuster Knoxville', 'public adjuster Chattanooga',
    'insurance claim help Tennessee', 'property damage adjuster TN', 'licensed public adjuster Tennessee',
    'underpaid insurance claim Tennessee', 'denied insurance claim Tennessee',
  ],
  openGraph: {
    title: 'Tennessee Public Adjuster | Storm & Property Damage Claims | Country Public Adjusters',
    description: 'Licensed Tennessee public adjusters serving Nashville, Memphis, Knoxville, Chattanooga and all 95 counties. Free inspection, contingency-only.',
    url: `${BASE}/nashville`,
  },
  alternates: { canonical: `${BASE}/nashville` },
}

const TN_CITIES_LINKED = [
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

const TN_CITIES_EXTRA = [
  'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Jackson',
  'Johnson City', 'Kingsport', 'Bristol', 'Oak Ridge', 'Cleveland',
  'Cookeville', 'Germantown', 'Bartlett', 'Collierville', 'Morristown',
  'Maryville', 'Nolensville', 'Spring Hill', 'Dickson', 'Springfield',
]

const LOCAL_FAQS: FAQItem[] = [
  {
    id: 'tn-legal',
    question: 'Is hiring a public adjuster in Tennessee legal?',
    answer: 'Yes. Your right to hire a licensed public adjuster is fully protected under Tennessee state law (Tenn. Code Ann. § 56-6-901 et seq.). Insurance companies cannot cancel your policy, penalise you, or discriminate against you for hiring one. All Country Public Adjusters representatives are fully licensed by the Tennessee Department of Commerce & Insurance.',
    category: 'legal',
  },
  {
    id: 'tn-storms',
    question: 'What types of storm damage are most common in Tennessee?',
    answer: 'Tennessee sits in one of the Southeast\'s most active severe weather corridors. Middle Tennessee experiences frequent hailstorms, tornadoes, and straight-line wind events — especially spring (March–June). Nashville was hit by a tornado outbreak in 2020 causing over $1.5 billion in damage. East Tennessee faces flooding from heavy rainfall, while West Tennessee is exposed to Gulf-tracking storm systems. We handle all of these damage types statewide.',
    category: 'general',
  },
  {
    id: 'tn-cost',
    question: 'What does a public adjuster cost in Tennessee?',
    answer: 'We work on a contingency-fee basis — we earn a percentage of the settlement we recover for you. There is zero upfront cost, no hourly charge, and no fee if we don\'t recover anything. Our fee is agreed in writing before we begin, so you always know exactly what to expect.',
    category: 'fees',
  },
  {
    id: 'tn-increase',
    question: 'Can a public adjuster really increase my insurance settlement in Tennessee?',
    answer: 'Yes — significantly. Our clients achieve an average of 747% more than the initial insurer offer. Insurance companies employ professional adjusters who represent their interests. A public adjuster puts an equally qualified expert on your side — documenting every dollar of damage, reviewing your full policy, and negotiating aggressively on your behalf.',
    category: 'general',
  },
  {
    id: 'tn-response',
    question: 'How quickly can you respond after a storm in Tennessee?',
    answer: 'We prioritise same-day response after major storm events across Tennessee. Call 1-888-397-5420 immediately after a storm — early documentation is critical to a strong claim. We serve all 95 Tennessee counties, including Nashville, Memphis, Knoxville, Chattanooga, Clarksville, and all surrounding areas.',
    category: 'process',
  },
  {
    id: 'tn-denied',
    question: 'What if my Tennessee insurance claim was denied or underpaid?',
    answer: 'A denial or low offer is not the end. We review denied and underpaid claims regularly and in many cases successfully reopen, supplement, or appeal the decision. Contact us with your claim details — even if your insurer has already issued a payment — and we\'ll assess whether more can be recovered.',
    category: 'claims',
  },
]

export default function NashvillePage() {
  const schemas = [
    LOCAL_BUSINESS_SCHEMA('Nashville', 'Tennessee', 'nashville'),
    BREADCRUMB_SCHEMA([
      { name: 'Home', url: BASE },
      { name: 'Tennessee', url: `${BASE}/nashville` },
    ]),
    FAQ_SCHEMA(LOCAL_FAQS.map(f => ({ question: f.question, answer: f.answer }))),
    SERVICE_SCHEMA(
      'Tennessee Public Adjuster Services',
      'Licensed public adjusters handling storm, hail, wind, water, and property damage insurance claims across all of Tennessee. Contingency-only — no upfront cost.',
      `${BASE}/nashville`
    ),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
              <nav className="flex items-center gap-2 text-xs text-white/40 mb-4">
                <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white/70">Tennessee</span>
              </nav>
              <div className="flex items-center gap-2 text-xs text-white/50 mb-5">
                <MapPin size={13} style={{ color: 'rgba(245,158,11,0.7)' }} />
                <span>Nashville · Memphis · Knoxville · Chattanooga · All of Tennessee</span>
              </div>
              <span className="badge-gold mb-5">Tennessee Public Adjuster</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                Tennessee's property damage{' '}
                <span style={{ color: '#F59E0B' }}>insurance advocate</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-5 max-w-2xl">
                Country Public Adjusters serve all of Tennessee — with our primary hub in Nashville and Middle Tennessee.
                We handle storm damage, hail damage, tornado damage, wind damage, and water damage insurance claims on contingency. Free inspection, no upfront cost.
              </p>
              <div className="flex items-start gap-2.5 mb-8 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <Globe size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                <p className="text-sm text-white/60 leading-relaxed">
                  <span className="text-white/80 font-semibold">We cover all 95 Tennessee counties</span> — not just Nashville. Whether you're in Memphis, Knoxville, Chattanooga, or anywhere in between, we can help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#free-inspection" className="btn-primary-lg">
                  Get Free Inspection <ArrowRight size={17} />
                </Link>
                <a href="tel:18883975420"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Phone size={17} /> 1-888-397-5420
                </a>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ── Tennessee context ── */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <FadeInView>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706' }}>
                TENNESSEE STORM CONTEXT
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Tennessee's storm season is one of the most active in the Southeast
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Middle Tennessee sits in a severe weather corridor that generates hailstorms, tornadoes,
                  and straight-line wind events throughout spring and early summer. Nashville was hit by a
                  major tornado outbreak in 2020 causing over $1.5 billion in property damage — leaving
                  thousands of property owners navigating complex insurance claims alone.
                </p>
                <p>
                  Insurance companies deploy coordinated claim management strategies after major events,
                  prioritising their exposure over your recovery. Country Public Adjusters has operated
                  through every major Tennessee storm event and knows exactly what the insurers active
                  in this market do — and how to counter it effectively.
                </p>
                <p className="font-semibold text-slate-800">
                  Our Tennessee clients recover an average of 747% more than their initial insurer offer — with zero upfront cost.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="rounded-3xl p-6" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Tennessee cities we serve</h3>
                <p className="text-sm text-slate-500 mb-4">Primary hub in Nashville — serving all 95 Tennessee counties.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#D97706' }}>
                    Nashville (Davidson Co.)
                  </span>
                  {TN_CITIES_LINKED.map(city => (
                    <Link key={city.name} href={city.href}
                      className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:border-amber-300"
                      style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#64748B' }}>
                      {city.name}
                    </Link>
                  ))}
                  {TN_CITIES_EXTRA.map(city => (
                    <span key={city}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#64748B' }}>
                      {city}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400">Serving all 95 Tennessee counties — if your property is in the state, call us.</p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <CaseResults />

      {/* ── FAQ ── */}
      <section className="section-padding" style={{ background: '#0A1E3C' }}>
        <div className="container-site max-w-3xl">
          <FadeInView className="mb-8">
            <h2 className="text-3xl font-black text-white">Tennessee public adjuster — frequently asked questions</h2>
            <p className="text-white/50 mt-2 text-sm">Everything you need to know about hiring a public adjuster in Tennessee.</p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <FAQAccordion items={LOCAL_FAQS} theme="dark" />
          </FadeInView>
        </div>
      </section>
    </>
  )
}
