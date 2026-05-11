import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Globe } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { FLORIDA_CITIES } from '@/data/localPages'
import { LOCAL_BUSINESS_SCHEMA, BREADCRUMB_SCHEMA } from '@/lib/schema'
import { localPageMetadata } from '@/lib/seo'
import type { FAQItem } from '@/types'

export function generateStaticParams() {
  return Object.keys(FLORIDA_CITIES).map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const page = FLORIDA_CITIES[city]
  if (!page) return {}
  return localPageMetadata(page.city, page.state, `south-florida/${city}`)
}

// City-specific FAQs — falls back to generic if slug not found
const CITY_FAQS: Record<string, FAQItem[]> = {
  'miami-dade': [
    { id: 'q1', question: 'What hurricane damage risks are specific to Miami-Dade County?', answer: 'Miami-Dade faces the full range of hurricane impacts — wind damage, storm surge, flooding, and roof failure. Post-hurricane claims in Miami-Dade are among the most complex in Florida because of wind vs. flood coverage questions and the volume of insurer activity following major events.', category: 'general' },
    { id: 'q2', question: 'How soon should I call after hurricane damage in Miami-Dade?', answer: 'Immediately. Florida law sets filing deadlines for hurricane claims, and early documentation is critical. Call 1-786-496-1811 right after a storm — we respond throughout Miami-Dade County.', category: 'process' },
  ],
  broward: [
    { id: 'q1', question: 'What hurricane damage risks are specific to Broward County?', answer: "Broward County properties face direct hurricane impacts as well as wind and flooding from systems passing over South Florida. Fort Lauderdale's dense urban environment and Hollywood's waterfront properties see some of the most complex claims profiles in the tri-county area.", category: 'general' },
    { id: 'q2', question: 'How soon should I call after hurricane damage in Broward County?', answer: "Don't wait. Call 1-786-496-1811 immediately after the storm passes — we serve all of Broward County and respond rapidly to document damage before any repairs begin.", category: 'process' },
  ],
  'palm-beach': [
    { id: 'q1', question: 'What hurricane damage risks are specific to Palm Beach County?', answer: "Palm Beach County's high-value residential market — including Boca Raton, West Palm Beach, and Delray Beach — faces hurricane wind damage, roof failure, and flooding. High-value policies often come with larger hurricane deductibles and more aggressive insurer responses.", category: 'general' },
    { id: 'q2', question: 'How soon should I call after hurricane damage in Palm Beach County?', answer: "As soon as it's safe to do so. Call 1-786-496-1811 right after the storm — we serve all of Palm Beach County and prioritise early documentation to protect your claim.", category: 'process' },
  ],
  'fort-lauderdale': [
    { id: 'q1', question: 'What hurricane damage risks are specific to Fort Lauderdale?', answer: "Fort Lauderdale's dense urban core, Intracoastal waterway properties, and commercial districts face wind damage, storm surge, and roof failure. The combination of residential and commercial claims after a major storm makes professional documentation essential.", category: 'general' },
    { id: 'q2', question: 'How soon should I call after hurricane damage in Fort Lauderdale?', answer: 'Immediately after the storm clears. Call 1-786-496-1811 — we are based in South Florida and respond rapidly throughout Fort Lauderdale and Broward County.', category: 'process' },
  ],
  hollywood: [
    { id: 'q1', question: 'What hurricane damage risks are specific to Hollywood, FL?', answer: 'Hollywood sits directly in the path of Atlantic hurricane systems between Miami and Fort Lauderdale. Dense residential neighbourhoods, beachfront properties, and commercial corridors face wind, surge, and flood damage — often from the same storm event.', category: 'general' },
    { id: 'q2', question: 'How soon should I call after hurricane damage in Hollywood?', answer: "Immediately. Don't start cleanup before documentation. Call 1-786-496-1811 — we respond throughout Hollywood and Broward County same-day after major storm events.", category: 'process' },
  ],
  'pompano-beach': [
    { id: 'q1', question: 'What hurricane damage risks are specific to Pompano Beach?', answer: "Pompano Beach's coastal exposure along the Atlantic means significant wind and surge risk. Beachfront and Intracoastal properties face roof, window, and structural damage, while interior properties deal primarily with wind and water intrusion.", category: 'general' },
    { id: 'q2', question: 'How soon should I call after hurricane damage in Pompano Beach?', answer: 'Right after the storm clears. Call 1-786-496-1811 — we cover all of Broward County including Pompano Beach and respond same-day for urgent damage situations.', category: 'process' },
  ],
  'boca-raton': [
    { id: 'q1', question: 'What hurricane damage risks are specific to Boca Raton?', answer: "Boca Raton's high-value residential market faces hurricane wind damage, roof failure, and flooding. Many policies in this area carry significant hurricane deductibles, making professional claim documentation particularly important for maximising your recovery.", category: 'general' },
    { id: 'q2', question: 'How soon should I call after hurricane damage in Boca Raton?', answer: "As soon as it's safe to assess the property. Call 1-786-496-1811 — we serve all of Palm Beach County including Boca Raton and respond rapidly after storm events.", category: 'process' },
  ],
  'coral-springs': [
    { id: 'q1', question: 'What hurricane damage risks are specific to Coral Springs?', answer: "As an inland Broward County city, Coral Springs is most affected by wind damage, rain intrusion, and tree-fall damage from hurricane systems. While surge risk is lower than coastal areas, wind and water damage from major hurricanes can be extensive throughout Coral Springs.", category: 'general' },
    { id: 'q2', question: 'How soon should I call after hurricane damage in Coral Springs?', answer: 'Immediately after the storm. Call 1-786-496-1811 — we cover all of Broward County including Coral Springs and respond same-day to document damage.', category: 'process' },
  ],
}

function getDefaultFaqs(cityName: string): FAQItem[] {
  return [
    { id: 'q1', question: `What hurricane damage risks are specific to ${cityName}?`, answer: `${cityName} faces the full range of South Florida hurricane exposures — wind damage, roof failure, flooding, and storm surge. Country Public Adjusters serve all of Florida — including ${cityName} — from our South Florida hub.`, category: 'general' },
    { id: 'q2', question: `How soon should I call after hurricane damage in ${cityName}?`, answer: `As soon as it is safe to do so. Florida law sets filing deadlines for hurricane claims, and early documentation protects your recovery. Call 1-786-496-1811 immediately — we cover all of Florida and respond rapidly.`, category: 'process' },
  ]
}

export default async function FloridaCityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const page = FLORIDA_CITIES[city]
  if (!page) notFound()

  const faqs = CITY_FAQS[city] ?? getDefaultFaqs(page.city)

  const schemas = [
    LOCAL_BUSINESS_SCHEMA(page.city, page.state, `south-florida/${city}`),
    BREADCRUMB_SCHEMA([
      { name: 'Home', url: 'https://countrypublicadjusters.com' },
      { name: 'South Florida', url: 'https://countrypublicadjusters.com/south-florida' },
      { name: page.city, url: `https://countrypublicadjusters.com/south-florida/${city}` },
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
            <Link href="/south-florida" className="hover:text-white/70 transition-colors">South Florida</Link>
            <span>/</span>
            <span className="text-white/60">{page.city}</span>
          </nav>

          <div className="max-w-3xl">
            <FadeInView>
              <div className="flex items-center gap-2 text-xs text-white/50 mb-5">
                <MapPin size={13} style={{ color: 'rgba(245,158,11,0.7)' }} />
                <span>{page.city}, {page.state}</span>
              </div>
              <span className="badge-gold mb-5">Public Adjuster · {page.city}, FL</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                {page.city} public adjuster —{' '}
                <span style={{ color: '#F59E0B' }}>hurricane &amp; storm claims</span>
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
                  <span className="text-white/80 font-semibold">We serve all of Florida</span> — not just {page.city}.
                  If your property is anywhere in the state, we can help.{' '}
                  <a href="tel:17864961811" className="font-semibold" style={{ color: '#F59E0B' }}>Call 1-786-496-1811.</a>
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


      {/* ── Nearby + services + FAQ ── */}
      <section className="section-padding bg-white">
        <div className="container-site max-w-4xl">
          <FadeInView>
            {/* Statewide statement */}
            <p className="text-sm text-slate-500 leading-relaxed mb-8 pb-8"
              style={{ borderBottom: '1px solid #E2E8F0' }}>
              <span className="text-slate-700 font-semibold">Country Public Adjusters cover all of Florida</span> — our South Florida hub serves the tri-county area but we handle claims statewide. Wherever your property is in Florida, we can help.
            </p>

            <h2 className="text-3xl font-black text-slate-900 mb-8">Also serving nearby areas</h2>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/south-florida"
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)', color: '#D97706' }}
              >
                All of South Florida
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
                  { label: 'Hurricane Damage', href: '/damage/hurricane' },
                  { label: 'Wind Damage', href: '/damage/wind' },
                  { label: 'Water Damage', href: '/damage/water' },
                  { label: 'Roof Damage', href: '/damage/roof' },
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
