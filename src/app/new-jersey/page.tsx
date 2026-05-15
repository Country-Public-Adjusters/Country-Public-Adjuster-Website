import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Globe } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import CaseResults from '@/components/home/CaseResults'
import type { FAQItem } from '@/types'

export const metadata: Metadata = {
  title: 'New Jersey Public Adjuster | Storm & Property Damage Claims | Country Public Adjusters',
  description: 'Country Public Adjusters serve all of New Jersey — Northern NJ, Jersey Shore, South Jersey, and statewide. Licensed public adjusters handling storm, wind, flood, and property damage claims on contingency. Free inspection, no upfront cost.',
}

const NJ_REGIONS = [
  { name: 'Bergen & Essex County', note: 'Primary Hub' },
  { name: 'Hudson County' },
  { name: 'Middlesex County' },
  { name: 'Monmouth & Shore Area' },
  { name: 'Morris & Sussex County' },
  { name: 'South Jersey / Camden' },
  { name: 'Atlantic City Area' },
  { name: 'Cape May Area' },
]

const LOCAL_FAQS: FAQItem[] = [
  {
    id: 'nj-law',
    question: 'Is hiring a public adjuster in New Jersey legal?',
    answer: 'Yes. Public adjusters are licensed and regulated by the New Jersey Department of Banking and Insurance. You have the legal right to hire a licensed public adjuster to represent you, and your insurer cannot penalise you for doing so.',
    category: 'legal',
  },
  {
    id: 'nj-storms',
    question: 'What types of storm damage are most common in New Jersey?',
    answer: 'New Jersey experiences significant damage from nor\'easters, coastal flooding, wind events, hailstorms, and winter storms. Shore communities face unique flood and wind exposure, while inland areas deal with severe thunderstorms and occasional tornadoes. We handle all of these claim types across the entire state.',
    category: 'general',
  },
  {
    id: 'nj-timing',
    question: 'How quickly can you respond after storm damage in New Jersey?',
    answer: 'We prioritise rapid response after major storm events across New Jersey. For urgent situations, we aim for same-day response. Call us at 1-888-397-5420 as soon as damage occurs — early documentation is the foundation of a strong claim.',
    category: 'process',
  },
]

export default function NewJerseyPage() {
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
                <span>Northern NJ · Jersey Shore · South Jersey · Statewide New Jersey</span>
              </div>
              <span className="badge-gold mb-5">New Jersey Public Adjuster</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                New Jersey's property damage{' '}
                <span style={{ color: '#F59E0B' }}>insurance advocate</span>
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-5 max-w-2xl">
                Country Public Adjusters serve all of New Jersey — from Bergen County to Cape May.
                We handle storm damage, wind damage, flood damage, and property insurance
                claims on contingency — free inspection, no upfront cost.
              </p>
              <div className="flex items-start gap-2.5 mb-8 px-4 py-3 rounded-xl"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}>
                <Globe size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#F59E0B' }} />
                <p className="text-sm text-white/60 leading-relaxed">
                  <span className="text-white/80 font-semibold">We cover the entire state of New Jersey</span> — not just Northern NJ. Whether you're on the Shore, in South Jersey, or anywhere in between, we can help.
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
                  from nor'easters and tropical systems, while inland areas face severe
                  thunderstorms, hail, and winter storm damage year-round.
                </p>
                <p>
                  After major events, insurance companies deploy experienced teams to manage
                  their exposure. Country Public Adjusters puts an equally experienced team on
                  your side — documenting every dollar of damage and negotiating aggressively
                  for a fair settlement.
                </p>
                <p className="font-semibold text-slate-800">
                  No upfront cost. No recovery, no fee. We only get paid when you do.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="rounded-3xl p-6" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <h3 className="font-bold text-slate-900 text-lg mb-1">New Jersey service area</h3>
                <p className="text-sm text-slate-500 mb-4">Primary hub in Northern NJ — we serve the entire state.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {NJ_REGIONS.map((region) => (
                    <span
                      key={region.name}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={region.note
                        ? { background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#D97706' }
                        : { background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#64748B' }
                      }
                    >
                      {region.name}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400">We handle claims across all of New Jersey — if your property is in the state, call us.</p>
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
            <h2 className="text-3xl font-black text-white">New Jersey public adjuster FAQ</h2>
          </FadeInView>
          <FadeInView delay={0.1}>
            <FAQAccordion items={LOCAL_FAQS} theme="dark" />
          </FadeInView>
        </div>
      </section>
    </>
  )
}
