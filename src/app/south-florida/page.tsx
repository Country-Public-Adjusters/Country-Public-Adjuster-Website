import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FinalCTA from '@/components/home/FinalCTA'
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

const FL_CITIES = [
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

      {/* Hero */}
      <section
        className="relative section-padding min-h-[55vh] flex items-center"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.1) 0%, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        }}
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInView>
              <div className="flex items-center gap-2 text-xs text-white/35 mb-6">
                <MapPin size={13} className="text-gold-500/60" />
                <span>Miami-Dade · Broward · Palm Beach Counties</span>
              </div>
              <span className="badge-gold mb-5">South Florida Public Adjuster</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                South Florida's hurricane{' '}
                <span className="text-gradient-gold">claim specialist</span>
              </h1>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-2xl">
                Country Public Adjusters serve Miami-Dade, Broward, and Palm Beach counties.
                We handle hurricane damage, wind damage, water damage, and property insurance
                claims on contingency — free inspection, zero upfront cost.
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

      {/* Florida context */}
      <section className="bg-navy-900 section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <FadeInView>
              <span className="section-label mb-4 block">South Florida Context</span>
              <h2 className="section-heading-dark mb-5">
                Hurricane country requires a specialist
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  South Florida faces some of the most complex property insurance claims in the
                  United States. Hurricane events trigger multi-billion dollar claim volumes,
                  coordinated insurer response strategies, and disputes over concurrent causation,
                  wind vs. flood splits, and coverage scopes.
                </p>
                <p>
                  Country Public Adjusters has operated through multiple major hurricane events
                  in South Florida and understands the specific tactics used by Florida\'s largest
                  residential and commercial insurers after catastrophe events.
                </p>
                <p className="font-semibold text-slate-700">
                  We know what full recovery looks like — and we don\'t stop until you get there.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="card-dark p-6">
                <h3 className="font-bold text-white text-lg mb-4">South Florida service area</h3>
                <p className="text-sm text-slate-400 mb-5">We serve all three tri-county markets:</p>
                <div className="flex flex-wrap gap-2">
                  {FL_CITIES.map((city) => (
                    <Link
                      key={city.name}
                      href={city.href}
                      className="px-3 py-1.5 rounded-full text-xs font-medium
                                 bg-white/[0.05] border border-white/[0.06] text-white/55
                                 hover:text-slate-700 hover:bg-white/[0.08] transition-all duration-200"
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

      <CaseResults />

      {/* FAQ */}
      <section className="bg-navy-950 section-padding">
        <div className="container-site max-w-3xl">
          <FadeInView className="mb-8">
            <h2 className="section-heading-dark">South Florida public adjuster FAQ</h2>
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
