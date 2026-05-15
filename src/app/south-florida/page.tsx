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
  title: 'Florida Public Adjuster | Hurricane, Wind & Water Damage Claims | Country Public Adjusters',
  description: 'Licensed Florida public adjusters serving Miami, Fort Lauderdale, Tampa, Orlando, Jacksonville and all of FL. Hurricane, wind & water damage claims on contingency. Free inspection, no upfront cost. Call 1-888-397-5420.',
  keywords: [
    'public adjuster Florida', 'Florida public adjuster', 'public adjuster Miami',
    'Miami public adjuster', 'public adjuster Fort Lauderdale', 'South Florida public adjuster',
    'hurricane damage claim Florida', 'wind damage claim Florida', 'water damage claim Florida',
    'public adjuster Tampa', 'public adjuster Orlando', 'public adjuster Jacksonville',
    'insurance claim help Florida', 'property damage adjuster FL', 'licensed public adjuster Florida',
    'hurricane deductible claim Florida', 'denied insurance claim Florida', 'underpaid claim Florida',
  ],
  openGraph: {
    title: 'Florida Public Adjuster | Hurricane & Property Damage Claims | Country Public Adjusters',
    description: 'Licensed Florida public adjusters serving Miami, Fort Lauderdale, Tampa, Orlando and statewide. Hurricane, wind, water claims. Free inspection, contingency-only.',
    url: `${BASE}/south-florida`,
  },
  alternates: { canonical: `${BASE}/south-florida` },
}

const FL_CITIES_LINKED = [
  { name: 'Miami-Dade County', href: '/south-florida/miami-dade' },
  { name: 'Broward County', href: '/south-florida/broward' },
  { name: 'Palm Beach County', href: '/south-florida/palm-beach' },
  { name: 'Fort Lauderdale', href: '/south-florida/fort-lauderdale' },
  { name: 'Hollywood', href: '/south-florida/hollywood' },
  { name: 'Pompano Beach', href: '/south-florida/pompano-beach' },
  { name: 'Boca Raton', href: '/south-florida/boca-raton' },
  { name: 'Coral Springs', href: '/south-florida/coral-springs' },
]

const FL_CITIES_EXTRA = [
  'Miami', 'Miami Beach', 'Hialeah', 'West Palm Beach', 'Doral',
  'Miramar', 'Pembroke Pines', 'Plantation', 'Sunrise', 'Weston',
  'Davie', 'Aventura', 'Delray Beach', 'Boynton Beach', 'Palm Beach Gardens',
  'Tampa', 'St. Petersburg', 'Clearwater', 'Orlando', 'Jacksonville',
  'Cape Coral', 'Fort Myers', 'Naples', 'Sarasota', 'Tallahassee',
]

const LOCAL_FAQS: FAQItem[] = [
  {
    id: 'fl-legal',
    question: 'Is hiring a public adjuster in Florida legal?',
    answer: 'Yes. Public adjusters are licensed and regulated by the Florida Department of Financial Services under Chapter 626 of the Florida Statutes. You have a fully protected legal right to hire a licensed public adjuster to represent you, and your insurer cannot penalise, cancel, or discriminate against you for doing so.',
    category: 'legal',
  },
  {
    id: 'fl-hurricane',
    question: 'What is a hurricane deductible and how does it affect my Florida claim?',
    answer: 'Most Florida homeowners policies include a separate hurricane deductible — typically 2–5% of the insured dwelling value — which is much higher than your standard deductible. This applies whenever a storm is officially named a hurricane. We ensure every dollar of covered damage above this threshold is fully documented and recovered, including wind, rain intrusion, and storm surge where covered.',
    category: 'claims',
  },
  {
    id: 'fl-timing',
    question: 'How long do I have to file a hurricane damage claim in Florida?',
    answer: 'Following legislative changes, Florida now requires claims to be reported promptly and supplemental claims filed within 18 months of the date of loss. Don\'t wait — call us immediately after a storm event so we can document damage while evidence is fresh and before the insurer sends their own adjuster.',
    category: 'timeline',
  },
  {
    id: 'fl-cost',
    question: 'What does a public adjuster cost in Florida?',
    answer: 'We work on a contingency-fee basis — we earn a percentage of the settlement we recover for you. There is no upfront cost, no hourly charge, and no fee if we don\'t recover anything. Florida law caps public adjuster fees at 20% on new claims (10% during a declared state of emergency). Our fee is agreed in writing before we begin.',
    category: 'fees',
  },
  {
    id: 'fl-increase',
    question: 'Can a public adjuster increase my Florida insurance settlement?',
    answer: 'Yes — significantly. Our clients achieve an average of 747% more than the initial insurer offer. After major hurricane events, insurers deploy experienced teams to manage their exposure. A public adjuster puts an equally qualified expert on your side — documenting concurrent causation, wind vs. flood splits, and hidden damage that insurers routinely miss or dispute.',
    category: 'general',
  },
  {
    id: 'fl-denied',
    question: 'My Florida hurricane or flood claim was denied — what can I do?',
    answer: 'A denial is not final. We review denied and underpaid claims regularly and are often able to reopen, supplement, or dispute the decision. Common grounds include improper damage assessment, incorrect application of the hurricane deductible, wind vs. flood misclassification, or failure to document all covered damage. Contact us with your claim details — even if your insurer has already issued a payment.',
    category: 'claims',
  },
]

export default function SouthFloridaPage() {
  const schemas = [
    LOCAL_BUSINESS_SCHEMA('South Florida', 'Florida', 'south-florida'),
    BREADCRUMB_SCHEMA([
      { name: 'Home', url: BASE },
      { name: 'Florida', url: `${BASE}/south-florida` },
    ]),
    FAQ_SCHEMA(LOCAL_FAQS.map(f => ({ question: f.question, answer: f.answer }))),
    SERVICE_SCHEMA(
      'Florida Public Adjuster Services',
      'Licensed public adjusters handling hurricane, wind, water, and property damage insurance claims across all of Florida. Contingency-only — no upfront cost.',
      `${BASE}/south-florida`
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
                <span className="text-white/70">Florida</span>
              </nav>
              <div className="flex items-center gap-2 text-xs text-white/50 mb-5">
                <MapPin size={13} style={{ color: 'rgba(245,158,11,0.7)' }} />
                <span>Miami · Fort Lauderdale · Tampa · Orlando · All of Florida</span>
              </div>
              <span className="badge-gold mb-5">Florida Public Adjuster</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                Florida's hurricane & storm damage{' '}
                <span style={{ color: '#F59E0B' }}>claim specialist</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-5 max-w-2xl">
                Country Public Adjusters serve all of Florida — with our primary hub in South Florida covering Miami-Dade, Broward, and Palm Beach counties.
                We handle hurricane damage, wind damage, water damage, and property insurance claims on contingency. Free inspection, zero upfront cost.
              </p>
              <div className="flex items-start gap-2.5 mb-8 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <Globe size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                <p className="text-sm text-white/60 leading-relaxed">
                  <span className="text-white/80 font-semibold">We cover the entire state of Florida</span> — not just South Florida. Whether you're in Orlando, Tampa, Jacksonville, Naples, or anywhere in between, we can help.
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

      {/* ── Florida context ── */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <FadeInView>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706' }}>
                FLORIDA STORM & HURRICANE CONTEXT
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Hurricane country requires a specialist — not a generalist
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Florida property owners face some of the most complex insurance claims in the
                  United States. Hurricane events trigger multi-billion dollar claim volumes,
                  coordinated insurer response strategies, and disputes over concurrent causation,
                  wind vs. flood splits, hurricane deductible application, and coverage scope.
                </p>
                <p>
                  Country Public Adjusters has operated through multiple major hurricane events
                  in Florida — including Irma, Ian, and Idalia — and understands the specific
                  tactics used by Florida's largest residential and commercial insurers after
                  catastrophe events.
                </p>
                <p className="font-semibold text-slate-800">
                  We know what full recovery looks like — and we don't stop until you get there.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="rounded-3xl p-6" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Florida cities we serve</h3>
                <p className="text-sm text-slate-500 mb-4">Primary hub in South Florida — we serve the entire state.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {FL_CITIES_LINKED.map(city => (
                    <Link key={city.name} href={city.href}
                      className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:border-amber-300"
                      style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#64748B' }}>
                      {city.name}
                    </Link>
                  ))}
                  {FL_CITIES_EXTRA.map(city => (
                    <span key={city}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#64748B' }}>
                      {city}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400">Serving all 67 Florida counties — if your property is in the state, call us.</p>
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
            <h2 className="text-3xl font-black text-white">Florida public adjuster — frequently asked questions</h2>
            <p className="text-white/50 mt-2 text-sm">Everything you need to know about hiring a public adjuster in Florida.</p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <FAQAccordion items={LOCAL_FAQS} theme="dark" />
          </FadeInView>
        </div>
      </section>
    </>
  )
}
