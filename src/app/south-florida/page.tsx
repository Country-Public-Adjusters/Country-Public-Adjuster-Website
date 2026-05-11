import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Globe } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CaseResults from '@/components/home/CaseResults'
import { localPageMetadata } from '@/lib/seo'
import { LOCAL_BUSINESS_SCHEMA, BREADCRUMB_SCHEMA, FAQ_SCHEMA } from '@/lib/schema'
import type { FAQItem } from '@/types'

export const metadata: Metadata = localPageMetadata(
  'South Florida',
  'Florida',
  'south-florida',
  'Country Public Adjusters serve South Florida — Miami-Dade, Broward, and Palm Beach counties. Hurricane, wind, water, and property damage insurance claims handled on contingency. Free inspection, no upfront cost.'
)

const FL_CITY_LINKS = [
  { name: 'Miami-Dade County', href: '/south-florida/miami-dade' },
  { name: 'Broward County', href: '/south-florida/broward' },
  { name: 'Palm Beach County', href: '/south-florida/palm-beach' },
  { name: 'Fort Lauderdale', href: '/south-florida/fort-lauderdale' },
  { name: 'Hollywood', href: '/south-florida/hollywood' },
  { name: 'Pompano Beach', href: '/south-florida/pompano-beach' },
  { name: 'Boca Raton', href: '/south-florida/boca-raton' },
  { name: 'Coral Springs', href: '/south-florida/coral-springs' },
]

const LOCAL_FAQS: FAQItem[] = [
  {
    id: 'fl-law',
    question: 'Is hiring a public adjuster in Florida legal?',
    answer: 'Yes. Public adjusters are licensed and regulated by the Florida Department of Financial Services. Florida law gives you the right to representation, and insurers cannot penalize you for hiring one.',
    category: 'legal',
  },
  {
    id: 'hurricane-deductible',
    question: 'What is a hurricane deductible and how does it affect my claim?',
    answer: 'Most Florida homeowners policies include a separate hurricane deductible — typically 2–5% of the insured dwelling value. This is separate from your standard deductible. We ensure every dollar of covered damage above this threshold is fully recovered.',
    category: 'claims',
  },
  {
    id: 'fl-timing',
    question: 'How long do I have to file a hurricane damage claim in Florida?',
    answer: 'Florida law sets claim filing deadlines and requires that supplemental claims be filed within 3 years of the date of loss. Don\'t wait — call us immediately after a storm event so we can document damage while evidence is fresh.',
    category: 'timeline',
  },
]

export default function SouthFloridaPage() {
  const schemas = [
    LOCAL_BUSINESS_SCHEMA('South Florida', 'Florida', 'south-florida'),
    BREADCRUMB_SCHEMA([
      { name: 'Home', url: 'https://countrypublicadjusters.com' },
      { name: 'South Florida', url: 'https://countrypublicadjusters.com/south-florida' },
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
                <span>Miami-Dade · Broward · Palm Beach Counties</span>
              </div>
              <span className="badge-gold mb-5">South Florida Public Adjuster</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                South Florida's hurricane{' '}
                <span style={{ color: '#F59E0B' }}>claim specialist</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-5 max-w-2xl">
                Country Public Adjusters serve all of Florida — with our primary hub in South Florida covering Miami-Dade, Broward, and Palm Beach counties.
                We handle hurricane damage, wind damage, water damage, and property insurance
                claims on contingency — free inspection, zero upfront cost.
              </p>
              <div className="flex items-start gap-2.5 mb-8 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <Globe size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                <p className="text-sm text-white/60 leading-relaxed">
                  <span className="text-white/80 font-semibold">We cover the entire state of Florida</span> — not just South Florida. Whether you're in Orlando, Tampa, Jacksonville, or anywhere in between, we can help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#free-inspection" className="btn-primary-lg">
                  Get Free Inspection
                  <ArrowRight size={17} />
                </Link>
                <a href="tel:17864961811"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Phone size={17} />
                  1-786-496-1811
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
                SOUTH FLORIDA CONTEXT
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Hurricane country requires a specialist
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  South Florida faces some of the most complex property insurance claims in the
                  United States. Hurricane events trigger multi-billion dollar claim volumes,
                  coordinated insurer response strategies, and disputes over concurrent causation,
                  wind vs. flood splits, and coverage scopes.
                </p>
                <p>
                  Country Public Adjusters has operated through multiple major hurricane events
                  in South Florida and understands the specific tactics used by Florida's largest
                  residential and commercial insurers after catastrophe events.
                </p>
                <p className="font-semibold text-slate-800">
                  We know what full recovery looks like — and we don't stop until you get there.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="rounded-3xl p-6" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Florida service area</h3>
                <p className="text-sm text-slate-500 mb-4">Primary hub in South Florida — we serve the entire state.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {FL_CITY_LINKS.map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                      style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#64748B' }}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
                <p className="text-xs text-slate-400">Also serving Orlando, Tampa, Jacksonville, Naples, Sarasota, and all of Florida.</p>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Case results — white, continues from white context above */}
      <CaseResults />


      {/* ── FAQ ── */}
      <section className="section-padding" style={{ background: '#0A1E3C' }}>
        <div className="container-site max-w-3xl">
          <FadeInView className="mb-8">
            <h2 className="text-3xl font-black text-white">South Florida public adjuster FAQ</h2>
          </FadeInView>
          <FadeInView delay={0.1}>
            <FAQAccordion items={LOCAL_FAQS} theme="dark" />
          </FadeInView>
        </div>
      </section>

      
    </>
  )
}
