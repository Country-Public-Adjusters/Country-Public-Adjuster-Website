'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, TrendingUp, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Analytics } from '@/lib/analytics'

const CASES = [
  {
    id: 'hurricane-wind',
    tag: 'Hurricane / Wind Damage',
    location: 'South Florida',
    initial: '$12,000',
    final: '$127,000',
    multiplier: '10.6×',
    narrative:
      'Insurer\'s adjuster documented only cosmetic roofing damage. Our inspection revealed structural damage, compromised trusses, and water intrusion throughout the attic. Final settlement reflected full replacement cost.',
  },
  {
    id: 'water-flooding',
    tag: 'Water Damage / Flooding',
    location: 'East Nashville, TN',
    initial: '$8,500',
    final: '$94,000',
    multiplier: '11×',
    narrative:
      'Original claim filed by homeowner and immediately lowballed. We identified foundation moisture intrusion, mold propagation behind walls, and subfloor damage the insurer\'s report completely omitted.',
  },
  {
    id: 'fire-smoke',
    tag: 'Fire & Smoke Damage',
    location: 'Brentwood, TN',
    initial: '$15,000',
    final: '$165,000',
    multiplier: '11×',
    narrative:
      'HVAC system distributed smoke throughout the entire structure. We documented damage to insulation, ductwork, contents, and odor remediation costs that more than ten-folded the original settlement.',
  },
  {
    id: 'hail-roof',
    tag: 'Hail / Roof Damage',
    location: 'Franklin, TN',
    initial: '$4,200',
    final: '$41,000',
    multiplier: '9.8×',
    narrative:
      'Insurance company claimed the hail damage was cosmetic only and denied full replacement. We documented granule loss patterns, bruising, and compromised flashing that met replacement threshold.',
  },
  {
    id: 'commercial-storm',
    tag: 'Commercial Property / Storm',
    location: 'Nashville, TN',
    initial: '$80,000',
    final: '$900,000',
    multiplier: '11.25×',
    narrative:
      'Insurer\'s initial offer covered only surface-level repairs. Our lead negotiator identified widespread structural damage, code compliance requirements, and business interruption losses that were entirely overlooked — resulting in a $900,000 settlement.',
  },
]

export default function CaseResults() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="relative bg-navy-950 section-padding overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[800px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse, rgba(203,213,225,0.25) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            Real Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading-dark mb-5"
          >
            What we've recovered for{' '}
            <span className="text-gradient-gold">property owners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="section-sub-dark mx-auto"
          >
            These are real claim outcomes. Numbers reflect actual settlements vs. the insurer's
            initial position. All cases handled on contingency — no upfront cost.
          </motion.p>
        </div>

        {/* Case cards grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          {CASES.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.2 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-dark-hover p-6 lg:p-7 group"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <span className="badge-navy mb-2">{c.tag}</span>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                    <MapPin size={11} />
                    <span>{c.location}</span>
                  </div>
                </div>
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold
                             flex-shrink-0"
                  style={{
                    background: 'rgba(34,197,94,0.12)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    color: '#4ade80',
                  }}
                >
                  <TrendingUp size={12} />
                  {c.multiplier} increase
                </div>
              </div>

              {/* Before / After numbers */}
              <div className="flex items-center gap-4 mb-5 p-4 rounded-2xl bg-slate-100">
                <div className="flex-1 text-center">
                  <div className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wide">
                    Insurer's Offer
                  </div>
                  <div className="text-2xl font-black text-red-400/80">{c.initial}</div>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight
                    size={20}
                    className="text-gold-500 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 text-center">
                  <div className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wide">
                    Final Settlement
                  </div>
                  <div
                    className="text-2xl font-black"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {c.final}
                  </div>
                </div>
              </div>

              {/* Narrative */}
              <p className="text-sm text-slate-400 leading-relaxed">{c.narrative}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Link
            href="/results"
            onClick={() => Analytics.ctaClick('See All Results', 'case-results')}
            className="btn-secondary-lg inline-flex"
          >
            See All Case Results
            <ArrowRight size={17} />
          </Link>
          <p className="text-xs text-slate-400 mt-3">
            All results represent actual claim outcomes. Individual results vary by claim complexity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
