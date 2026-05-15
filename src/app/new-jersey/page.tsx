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
  title: 'New Jersey Public Adjuster | Storm, Wind & Flood Damage Claims | Country Public Adjusters',
  description: 'Licensed New Jersey public adjusters serving Newark, Jersey City, Toms River, Cherry Hill and all of NJ. Storm, wind, flood & nor\'easter damage claims on contingency. Free inspection, no upfront cost. Call 1-888-397-5420.',
  keywords: [
    'public adjuster New Jersey', 'New Jersey public adjuster', 'public adjuster Newark',
    'Newark public adjuster', 'NJ public adjuster', 'storm damage claim New Jersey',
    'wind damage claim New Jersey', 'flood damage claim NJ', 'nor\'easter damage claim NJ',
    'public adjuster Jersey City', 'public adjuster Toms River', 'public adjuster Cherry Hill',
    'insurance claim help New Jersey', 'property damage adjuster NJ', 'licensed public adjuster NJ',
    'underpaid insurance claim New Jersey', 'denied insurance claim New Jersey',
  ],
  openGraph: {
    title: 'New Jersey Public Adjuster | Storm & Property Damage Claims | Country Public Adjusters',
    description: 'Licensed NJ public adjusters serving Newark, Jersey City, Toms River, Cherry Hill and all of New Jersey. Storm, wind, flood claims. Free inspection, contingency-only.',
    url: `${BASE}/new-jersey`,
  },
  alternates: { canonical: `${BASE}/new-jersey` },
}

const NJ_CITIES = [
  { name: 'Newark', primary: true },
  { name: 'Jersey City', primary: true },
  { name: 'Paterson', primary: true },
  { name: 'Elizabeth', primary: true },
  { name: 'Toms River', primary: true },
  { name: 'Edison' },
  { name: 'Woodbridge' },
  { name: 'Lakewood' },
  { name: 'Hamilton' },
  { name: 'Trenton' },
  { name: 'Clifton' },
  { name: 'Camden' },
  { name: 'Brick' },
  { name: 'Cherry Hill' },
  { name: 'Passaic' },
  { name: 'Middletown' },
  { name: 'Union City' },
  { name: 'Old Bridge' },
  { name: 'East Orange' },
  { name: 'Bayonne' },
  { name: 'Franklin Township' },
  { name: 'North Bergen' },
  { name: 'Vineland' },
  { name: 'New Brunswick' },
  { name: 'Perth Amboy' },
  { name: 'Hoboken' },
  { name: 'Atlantic City' },
  { name: 'Parsippany' },
  { name: 'Gloucester Township' },
  { name: 'Hackensack' },
]

const LOCAL_FAQS: FAQItem[] = [
  {
    id: 'nj-legal',
    question: 'Is hiring a public adjuster in New Jersey legal?',
    answer: 'Yes. Public adjusters are licensed and regulated by the New Jersey Department of Banking and Insurance under N.J.S.A. 17:22B-1 et seq. You have a fully protected legal right to hire a licensed public adjuster to represent you in an insurance claim, and your insurer cannot penalise, cancel, or discriminate against you for doing so.',
    category: 'legal',
  },
  {
    id: 'nj-storms',
    question: 'What types of storm damage are most common in New Jersey?',
    answer: 'New Jersey property owners face significant damage from nor\'easters, coastal flooding and storm surge, wind events, hailstorms, and winter storms. Shore communities from Monmouth to Cape May face unique coastal flood and wind exposure. Inland areas deal with severe thunderstorms, occasional tornadoes, and flash flooding. We handle all of these damage types across all 21 New Jersey counties.',
    category: 'general',
  },
  {
    id: 'nj-cost',
    question: 'What does a public adjuster cost in New Jersey?',
    answer: 'We work on a contingency-fee basis — we earn a percentage of the settlement we recover for you. There is no upfront cost, no hourly charge, and no fee if we don\'t recover anything. Our fee is agreed in writing before we begin, giving you complete transparency from day one.',
    category: 'fees',
  },
  {
    id: 'nj-increase',
    question: 'Can a public adjuster increase my insurance settlement in New Jersey?',
    answer: 'Yes — significantly. Our clients achieve an average of 747% more than the initial insurer offer. Insurance companies employ professional adjusters who represent their interests. Hiring a public adjuster puts an equally qualified expert on your side — documenting every dollar of damage, reviewing your full policy, and negotiating aggressively on your behalf.',
    category: 'general',
  },
  {
    id: 'nj-response',
    question: 'How quickly can you respond after a storm or flood in New Jersey?',
    answer: 'We prioritise same-day response after major storm events across New Jersey. Call 1-888-397-5420 immediately after a storm — early documentation is critical to a strong claim, especially for flood and coastal damage where conditions change quickly. We serve all 21 New Jersey counties, from Bergen to Cape May.',
    category: 'process',
  },
  {
    id: 'nj-denied',
    question: 'What if my New Jersey insurance claim was denied or underpaid?',
    answer: 'A denial or low offer is not final. We regularly review denied and underpaid claims in New Jersey and are often able to reopen, supplement, or dispute the insurer\'s decision. This is especially common with nor\'easter and flood-related claims where wind vs. flood coverage disputes arise. Contact us with your claim details — even if your insurer has already issued a payment — and we\'ll assess whether more can be recovered.',
    category: 'claims',
  },
]

export default function NewJerseyPage() {
  const schemas = [
    LOCAL_BUSINESS_SCHEMA('Newark', 'New Jersey', 'new-jersey'),
    BREADCRUMB_SCHEMA([
      { name: 'Home', url: BASE },
      { name: 'New Jersey', url: `${BASE}/new-jersey` },
    ]),
    FAQ_SCHEMA(LOCAL_FAQS.map(f => ({ question: f.question, answer: f.answer }))),
    SERVICE_SCHEMA(
      'New Jersey Public Adjuster Services',
      'Licensed public adjusters handling storm, wind, flood, nor\'easter, and property damage insurance claims across all of New Jersey. Contingency-only — no upfront cost.',
      `${BASE}/new-jersey`
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
                <span className="text-white/70">New Jersey</span>
              </nav>
              <div className="flex items-center gap-2 text-xs text-white/50 mb-5">
                <MapPin size={13} style={{ color: 'rgba(245,158,11,0.7)' }} />
                <span>Newark · Jersey City · Toms River · Cherry Hill · All of New Jersey</span>
              </div>
              <span className="badge-gold mb-5">New Jersey Public Adjuster</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                New Jersey's property damage{' '}
                <span style={{ color: '#F59E0B' }}>insurance advocate</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-5 max-w-2xl">
                Country Public Adjusters serve all of New Jersey — from Bergen County to Cape May.
                We handle storm damage, wind damage, flood damage, nor'easter damage, and property insurance claims on contingency. Free inspection, no upfront cost.
              </p>
              <div className="flex items-start gap-2.5 mb-8 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <Globe size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                <p className="text-sm text-white/60 leading-relaxed">
                  <span className="text-white/80 font-semibold">We cover all 21 New Jersey counties</span> — not just Northern NJ. Whether you're on the Shore, in South Jersey, or anywhere in between, we can help.
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

      {/* ── NJ context ── */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <FadeInView>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706' }}>
                NEW JERSEY STORM CONTEXT
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                From nor'easters to coastal flooding — New Jersey demands expert advocacy
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  New Jersey property owners face some of the most complex insurance claims
                  on the East Coast. Coastal communities deal with flood, wind, and surge damage
                  from nor'easters and tropical systems — as seen during Superstorm Sandy, which
                  caused over $36 billion in damage across the state. Inland areas face severe
                  thunderstorms, hail, and winter storm damage year-round.
                </p>
                <p>
                  After major events, insurance companies deploy experienced teams to manage
                  their exposure. Country Public Adjusters puts an equally experienced team on
                  your side — documenting every dollar of damage and negotiating aggressively
                  for a fair settlement.
                </p>
                <p className="font-semibold text-slate-800">
                  No upfront cost. No recovery, no fee. Our clients average 747% more than their initial insurer offer.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="rounded-3xl p-6" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">New Jersey cities we serve</h3>
                <p className="text-sm text-slate-500 mb-4">Primary hub in Northern NJ — serving all 21 New Jersey counties.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {NJ_CITIES.map(city => (
                    <span key={city.name}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={city.primary
                        ? { background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#D97706' }
                        : { background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#64748B' }}>
                      {city.name}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400">Serving all 21 New Jersey counties — if your property is in the state, call us.</p>
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
            <h2 className="text-3xl font-black text-white">New Jersey public adjuster — frequently asked questions</h2>
            <p className="text-white/50 mt-2 text-sm">Everything you need to know about hiring a public adjuster in New Jersey.</p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <FAQAccordion items={LOCAL_FAQS} theme="dark" />
          </FadeInView>
        </div>
      </section>
    </>
  )
}
