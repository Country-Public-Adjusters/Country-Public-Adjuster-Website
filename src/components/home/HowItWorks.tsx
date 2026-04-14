'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Search, FileText, DollarSign, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Analytics } from '@/lib/analytics'

const STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'We Inspect',
    headline: 'Free, thorough property damage assessment',
    body: "A licensed public adjuster visits your property and documents every inch of damage — including hidden damage the insurer's adjuster often misses. No cost, no obligation.",
    detail: 'Roof, structure, interior, exterior — nothing overlooked.',
  },
  {
    number: '02',
    icon: FileText,
    title: 'We Handle Everything',
    headline: 'Full claim management from start to finish',
    body: "We prepare your claim documentation, file all paperwork, manage all communication with your insurer, and negotiate aggressively on your behalf. You stay focused on your life.",
    detail: 'All deadlines, forms, calls, and follow-ups handled.',
  },
  {
    number: '03',
    icon: DollarSign,
    title: 'You Get Paid',
    headline: 'The settlement your damage actually warrants',
    body: "We don't accept low offers. We negotiate until the settlement reflects the true cost of your damage. Our fee is a percentage of what we recover — so we only win when you win.",
    detail: "Average: 10× the insurer's initial offer.",
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="relative bg-navy-900 section-padding overflow-hidden"
      id="how-it-works"
    >
      {/* Top blend from white (RealitySection bottom) */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none" className="w-full block" style={{ height: '50px' }}>
          <path d="M0,60 C400,0 1040,0 1440,60 L1440,0 L0,0 Z" fill="#F8FAFC" />
        </svg>
      </div>

      {/* Ambient radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 85%, rgba(203,213,225,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading-dark mb-5"
          >
            Three steps to a fair settlement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="section-sub-dark mx-auto"
          >
            We remove every point of friction between you and the settlement you deserve.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-[3.25rem] left-[calc(16.66%+2.5rem)] right-[calc(16.66%+2.5rem)] h-px"
            aria-hidden="true"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full origin-left"
              style={{
                background:
                  'linear-gradient(90deg, rgba(245,158,11,0.3) 0%, rgba(245,158,11,0.65) 50%, rgba(245,158,11,0.3) 100%)',
              }}
            />
            {/* Travelling dot */}
            <motion.div
              initial={{ left: '0%' }}
              animate={isInView ? { left: ['0%', '100%', '0%'] } : {}}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay: 2 }}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{
                background: 'radial-gradient(circle, #FBBF24 30%, rgba(245,158,11,0.3) 100%)',
                boxShadow: '0 0 8px rgba(245,158,11,0.7)',
              }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-7">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 36, filter: 'blur(5px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative group"
              >
                {/* Mobile connector */}
                {i < STEPS.length - 1 && (
                  <div className="md:hidden flex justify-center my-5" aria-hidden="true">
                    <div
                      className="w-px h-8"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(245,158,11,0.5) 0%, rgba(245,158,11,0.08) 100%)',
                      }}
                    />
                  </div>
                )}

                <div
                  className="relative p-6 lg:p-8 h-full rounded-3xl border border-white/[0.06]
                             bg-navy-800/50 backdrop-blur-sm
                             group-hover:border-gold-500/25 group-hover:-translate-y-1
                             group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(245,158,11,0.04)]
                             transition-all duration-500 overflow-hidden"
                >
                  {/* Inner gold glow on hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                               transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(245,158,11,0.06) 0%, transparent 70%)',
                    }}
                  />

                  {/* Step number + icon */}
                  <div className="flex items-center gap-4 mb-7">
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center
                                 border border-gold-500/25 flex-shrink-0
                                 group-hover:border-gold-500/45 group-hover:shadow-glow-gold
                                 transition-all duration-400"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.04) 100%)',
                      }}
                    >
                      <step.icon size={22} className="text-gold-400" />
                    </div>
                    <span
                      className="text-5xl font-black tabular-nums leading-none
                                 group-hover:opacity-50 transition-opacity duration-400"
                      style={{
                        WebkitTextFillColor: 'transparent',
                        WebkitTextStroke: '1px rgba(245,158,11,0.2)',
                      }}
                    >
                      {step.number}
                    </span>
                  </div>

                  <div className="text-xs font-bold tracking-widest uppercase text-gold-500/60 mb-1.5">
                    Step {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm font-semibold text-white/55 mb-3 leading-snug">{step.headline}</p>
                  <p className="text-sm text-white/40 leading-relaxed mb-5">{step.body}</p>

                  <div
                    className="text-xs font-semibold text-gold-500/65 pt-4
                               border-t border-white/[0.05]"
                  >
                    {step.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-center mt-14"
        >
          <Link
            href="/intake"
            onClick={() => Analytics.ctaClick('Start My Claim', 'how-it-works')}
            className="btn-primary-lg inline-flex"
          >
            Start My Claim Review
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
