import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Globe } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CaseResults from '@/components/home/CaseResults'
import type { FAQItem } from '@/types'

export const metadata: Metadata = {
  title: 'Georgia Public Adjuster | Storm & Property Damage Claims | Country Public Adjusters',
  description: 'Country Public Adjusters serve all of Georgia — Atlanta Metro, Savannah, Augusta, and statewide. Licensed public adjusters handling storm, hail, wind, and property damage claims on contingency. Free inspection, no upfront cost.',
}

const GA_CITIES = [
  { name: 'Atlanta', primary: true },
  { name: 'Augusta', primary: true },
  { name: 'Savannah', primary: true },
  { name: 'Columbus', primary: true },
  { name: 'Macon', primary: true },
  { name: 'Albany' },
  { name: 'Athens' },
  { name: 'Warner Robins' },
  { name: 'Roswell' },
  { name: 'Sandy Springs' },
  { name: 'Marietta' },
  { name: 'Valdosta' },
  { name: 'Smyrna' },
  { name: 'Dunwoody' },
  { name: 'Alpharetta' },
  { name: 'Rome' },
  { name: 'Peachtree City' },
  { name: 'Johns Creek' },
  { name: 'Gainesville' },
  { name: 'Dalton' },
  { name: 'Kennesaw' },
  { name: 'Newnan' },
  { name: 'Douglasville' },
  { name: 'LaGrange' },
  { name: 'Statesboro' },
  { name: 'Carrollton' },
  { name: 'Hinesville' },
  { name: 'Canton' },
  { name: 'McDonough' },
  { name: 'Stockbridge' },
]

const LOCAL_FAQS: FAQItem[] = [
  {
    id: 'ga-law',
    question: 'Is hiring a public adjuster in Georgia legal?',
    answer: 'Yes. Public adjusters are licensed and regulated by the Georgia Office of Insurance and Safety Fire Commissioner. You have the legal right to hire a licensed public adjuster to represent you in an insurance claim, and your insurer cannot penalise you for doing so.',
    category: 'legal',
  },
  {
    id: 'ga-storms',
    question: 'What types of storm damage are most common in Georgia?',
    answer: 'Georgia experiences significant severe weather including hailstorms, tornadoes, tropical storm remnants, and straight-line wind events. The Atlanta metro sits in the Southeast\'s active storm corridor, while coastal Georgia faces tropical weather from the Gulf and Atlantic. We\'ve handled claims across all of these damage types statewide.',
    category: 'general',
  },
  {
    id: 'ga-timing',
    question: 'How quickly can you respond after a storm in Georgia?',
    answer: 'We prioritise rapid response after major storm events across Georgia. For urgent situations, we aim for same-day response. Call us at 1-888-397-5420 as soon as damage occurs — early documentation is critical to a strong claim.',
    category: 'process',
  },
]

export default function GeorgiaPage() {
  return (
    <>
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
                <span>Atlanta Metro · Savannah · Augusta · Statewide Georgia</span>
              </div>
              <span className="badge-gold mb-5">Georgia Public Adjuster</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                Georgia's property damage{' '}
                <span style={{ color: '#F59E0B' }}>insurance advocate</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-5 max-w-2xl">
                Country Public Adjusters serve all of Georgia — with our primary hub in the Atlanta metro area.
                We handle storm damage, hail damage, wind damage, and water damage insurance
                claims on contingency — free inspection, no upfront cost.
              </p>
              <div className="flex items-start gap-2.5 mb-8 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <Globe size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                <p className="text-sm text-white/60 leading-relaxed">
                  <span className="text-white/80 font-semibold">We cover the entire state of Georgia</span> — not just Atlanta. Whether you're in Savannah, Augusta, Macon, Columbus, or anywhere in between, we can help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#free-inspection" className="btn-primary-lg">
                  Get Free Inspection
                  <ArrowRight size={17} />
                </Link>
                <a href="tel:18883975420"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Phone size={17} />
                  1-888-397-5420
                </a>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ── Georgia context ── */}
      <section className="bg-white section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <FadeInView>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
                style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706' }}>
                GEORGIA STORM CONTEXT
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-5">
                Georgia's storm season demands an expert in your corner
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Georgia sits in one of the most active severe weather corridors in the Southeast.
                  The Atlanta metro regularly sees hailstorms, tornadoes, and severe thunderstorm
                  events — while coastal Georgia faces tropical weather systems from both the Gulf
                  and Atlantic coasts. Property owners across the state face complex insurance
                  claims after every major weather event.
                </p>
                <p>
                  Insurance companies respond to large-scale storm events with coordinated claim
                  management strategies designed to limit payouts. Country Public Adjusters
                  represents you — not your insurer — and we know exactly how to document,
                  negotiate, and maximise your recovery.
                </p>
                <p className="font-semibold text-slate-800">
                  No upfront cost. No recovery, no fee. We only get paid when you do.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="rounded-3xl p-6" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Georgia service area</h3>
                <p className="text-sm text-slate-500 mb-4">Primary hub in Atlanta Metro — we serve the entire state.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {GA_CITIES.map((city) => (
                    <span
                      key={city.name}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={city.primary
                        ? { background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#D97706' }
                        : { background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#64748B' }
                      }
                    >
                      {city.name}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400">Also serving all surrounding areas across Georgia — if your property is in the state, call us.</p>
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
            <h2 className="text-3xl font-black text-white">Georgia public adjuster FAQ</h2>
          </FadeInView>
          <FadeInView delay={0.1}>
            <FAQAccordion items={LOCAL_FAQS} theme="dark" />
          </FadeInView>
        </div>
      </section>
    </>
  )
}
