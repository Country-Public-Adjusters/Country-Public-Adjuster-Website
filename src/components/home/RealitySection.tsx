'use client'

import { motion } from 'framer-motion'
import { X, Check, ArrowRight } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import Link from 'next/link'
import { Analytics } from '@/lib/analytics'

const WITHOUT = [
  'Insurance adjuster works against your interests',
  'Hidden damage goes undocumented and unpaid',
  'You negotiate alone against professional claim handlers',
  'Initial offer is typically a fraction of actual damage value',
  'Missed deadlines reduce or void your claim',
  'Complex paperwork errors delay or deny payment',
  'You absorb the full cost of what the insurer won\'t cover',
]

const WITH = [
  'Your own licensed expert inspects every inch of damage',
  'Comprehensive documentation of all visible and hidden damage',
  'Professional negotiation — we know their tactics',
  'Settlements average 10× the initial insurer offer',
  'All deadlines, filings, and communications handled for you',
  'End-to-end claim management — you stay focused on recovery',
  'No upfront cost. We only get paid when you do.',
  'Hundreds of emails, calls, and hours invested during negotiation — on your behalf.',
]

export default function RealitySection() {
  return (
    <section className="relative bg-white section-padding overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(15,23,42,0.9) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
        aria-hidden="true"
      />

      {/* Ambient red/gold split glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 40% 60% at 20% 50%, rgba(239,68,68,0.04) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10">
        {/* Section header */}
        <FadeInView className="text-center mb-16 max-w-3xl mx-auto" blur>
          <span className="section-label mb-4 block">The Reality</span>
          <h2 className="section-heading-dark mb-5">
            What most property owners{' '}
            <span className="text-gradient-gold">don't know</span>{' '}
            until it's too late
          </h2>
          <p className="section-sub-dark mx-auto">
            Insurance companies aren't on your side. Their adjusters are trained to minimize
            what gets paid out. You deserve your own expert.
          </p>
        </FadeInView>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {/* Without column */}
          <FadeInView direction="left" delay={0.1}>
            <div
              className="rounded-3xl border border-red-500/[0.18] p-6 lg:p-8 h-full relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(127,29,29,0.15) 0%, rgba(69,10,10,0.08) 100%)',
              }}
            >
              {/* Subtle inner glow */}
              <div
                className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 70%)',
                }}
              />
              <div className="flex items-center gap-3 mb-7 relative">
                <div className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/25
                               flex items-center justify-center flex-shrink-0">
                  <X size={17} className="text-red-400" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-red-400/70 mb-0.5">
                    Going it alone
                  </div>
                  <div className="text-slate-900 font-bold text-lg leading-tight">
                    Without a Public Adjuster
                  </div>
                </div>
              </div>

              <ul className="space-y-3 relative">
                {WITHOUT.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3 text-sm text-slate-700 font-medium"
                  >
                    <X size={14} className="text-red-400/60 flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-7 pt-6 border-t border-red-500/[0.12] relative">
                <div className="text-xs text-red-500 font-semibold leading-relaxed">
                  Result: Underpaid claims, missed damage, and months of stress handling
                  a process designed to work against you.
                </div>
              </div>
            </div>
          </FadeInView>

          {/* With Country column */}
          <FadeInView direction="right" delay={0.18}>
            <div
              className="rounded-3xl border border-gold-500/[0.22] p-6 lg:p-8 h-full relative overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(203,213,225,0.38) 0%, rgba(11,31,58,0.55) 100%)',
              }}
            >
              {/* Gold inner glow */}
              <div
                className="absolute top-0 right-0 w-56 h-56 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(circle, rgba(245,158,11,0.09) 0%, transparent 70%)',
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                aria-hidden="true"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(245,158,11,0.05) 0%, transparent 70%)',
                }}
              />

              <div className="flex items-center gap-3 mb-7 relative">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30
                               flex items-center justify-center flex-shrink-0">
                  <Check size={17} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-gold-500/70 mb-0.5">
                    With your advocate
                  </div>
                  <div className="text-slate-900 font-bold text-lg leading-tight">
                    With Country Public Adjusters
                  </div>
                </div>
              </div>

              <ul className="space-y-3 relative">
                {WITH.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3 text-sm text-slate-800 font-medium"
                  >
                    <Check size={14} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-7 pt-6 border-t border-slate-400 relative">
                <div className="text-xs text-slate-800 font-semibold leading-relaxed">
                  Result: Full damage documentation, professional negotiation, and an average
                  10× increase over the insurer's initial offer.
                </div>
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Bottom CTA */}
        <FadeInView className="text-center mt-14" delay={0.3}>
          <Link
            href="/intake"
            onClick={() => Analytics.ctaClick('Start Free Inspection', 'reality-section')}
            className="btn-primary-lg inline-flex"
          >
            Start My Free Inspection
            <ArrowRight size={18} />
          </Link>
          <p className="text-sm text-slate-400 mt-4">
            No cost. No commitment. Just clarity on what your claim is worth.
          </p>
        </FadeInView>
      </div>

      {/* Bottom curve — sweeps into HowItWorks (white section) */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none" className="w-full block" style={{ height: '55px' }}>
          <path d="M0,0 C360,70 1080,70 1440,0 L1440,70 L0,70 Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}
