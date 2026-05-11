import type { Metadata } from 'next'
import { Check, Phone, ArrowRight } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Restoration Company Partners | Country Public Adjusters',
  description: 'Country Public Adjusters partners with restoration companies across Tennessee and Florida. We document full damage scopes so restoration teams get approved for the work the property actually needs.',
}

const BENEFITS = [
  'Full damage documentation before any work begins — supporting your full scope',
  'Supplemental claims filed when insurers cut your approved scope mid-project',
  'Faster insurer approvals backed by professional adjuster documentation',
  'We refer settled clients who need quality restoration work',
  'No cost to your client — we work on contingency',
  'Experience across water, fire, smoke, mold, and storm restoration claims',
]

const SCENARIOS = [
  {
    title: 'Water & Mold Restoration',
    body: 'Insurers frequently dispute drying scopes, limit affected materials, or deny mold remediation entirely. We document moisture intrusion, affected structural components, and mold propagation properly — so your full remediation scope gets approved.',
  },
  {
    title: 'Fire & Smoke Restoration',
    body: 'Smoke travels further than any visible burn damage. HVAC contamination, soot migration, and odour remediation throughout the full structure are routinely underdocumented by insurance adjusters. We capture everything your restoration team needs to do the job right.',
  },
  {
    title: 'Storm & Wind Restoration',
    body: 'High-volume storm events mean insurers deploy streamlined inspection strategies designed to minimise scope. We counter that with thorough documentation of every damaged surface, component, and structural element — so your estimate reflects reality.',
  },
  {
    title: 'Structural & Rebuild',
    body: 'Code upgrade requirements, load-bearing component damage, and secondary structural failures are common points of dispute. We bring in the documentation needed to support full rebuild scopes including code-mandated upgrades triggered by the damage.',
  },
]

export default function RestorationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative section-padding" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)' }}>
        <div className="container-site">
          <div className="max-w-3xl">
            <FadeInView>
              <span className="section-label mb-4 block">Restoration Partners</span>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-5 leading-[0.95]">
                Get Paid for the{' '}
                <span className="text-gradient-gold">Full Scope of Your Work</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Insurance companies routinely underscope restoration projects. We fix that. Country Public Adjusters documents every inch of damage before your team goes in — so your estimate gets approved, not argued over.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/partners" className="btn-primary-lg">
                  View All Partner Types
                  <ArrowRight size={17} />
                </Link>
                <a href="tel:18883975420" className="btn-secondary-lg">
                  <Phone size={17} />
                  1-888-397-5420
                </a>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-navy-900 section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            <FadeInView>
              <h2 className="text-2xl font-bold text-white mb-5">The gap that costs restoration companies</h2>
              <ul className="space-y-3">
                {[
                  'Insurance scopes that miss affected materials entirely',
                  'Drying and remediation limits that don\'t match actual conditions',
                  'Denied supplemental claims when mid-project damage is discovered',
                  'Low line-item pricing that doesn\'t reflect real restoration costs',
                  'Scope disputes that delay project start and payment',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInView>

            <FadeInView delay={0.15}>
              <h2 className="text-2xl font-bold text-white mb-5">What partnering with us changes</h2>
              <ul className="space-y-3">
                {BENEFITS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <Check size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Restoration types */}
      <section className="section-padding" style={{ background: '#FFFFFF' }}>
        <div className="container-site max-w-5xl">
          <FadeInView className="mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Restoration Types We Support</h2>
            <p className="text-slate-500">We've documented claims across every major restoration category in Tennessee and Florida.</p>
          </FadeInView>
          <div className="grid sm:grid-cols-2 gap-6">
            {SCENARIOS.map((s, i) => (
              <FadeInView key={s.title} delay={i * 0.1}>
                <div className="rounded-2xl p-7 h-full" style={{ background: '#F8FAFC', border: '1px solid rgba(0,0,0,0.08)' }}>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy-900 section-padding">
        <div className="container-narrow text-center">
          <FadeInView>
            <span className="section-label mb-4 block">How It Works</span>
            <h2 className="section-heading-dark mb-5">Simple mutual referral relationship</h2>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl mx-auto mb-10">
              We refer property owners who need quality restoration work. You refer clients with damage claims that need professional advocacy. Both businesses grow — and the property owner gets a better outcome on both the claim and the repair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:18883975420"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-navy-900 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                <Phone size={16} /> Call to Discuss
              </a>
              <a href="mailto:claims@countrypublicadjusters.com"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
                claims@countrypublicadjusters.com
              </a>
            </div>
          </FadeInView>
        </div>
      </section>

    </>
  )
}
