'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from '@/components/motion/CountUp'

const METRICS = [
  {
    value: 35,
    suffix: '+',
    label: 'Years Combined Experience',
    description: 'Across Nashville & South Florida',
  },
  {
    value: 10,
    suffix: '×',
    label: 'Average Settlement Increase',
    description: "vs. insurer's initial offer",
  },
  {
    value: 20,
    suffix: '+',
    label: 'Major Storms Handled',
    description: 'Hurricanes, hail events, floods',
  },
  {
    value: 0,
    prefix: '$',
    label: 'Upfront Cost',
    description: 'Contingency-only. No risk to you.',
  },
]

export default function MetricsBand() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="relative bg-navy-950 py-20 md:py-24"
    >
      {/* Ambient gradient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10">
        {/* Premium glow divider */}
        <div
          className="mb-14 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.35) 30%, rgba(245,158,11,0.5) 50%, rgba(245,158,11,0.35) 70%, transparent 100%)',
          }}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.75,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative text-center px-6 py-8 rounded-2xl border border-white/[0.05]
                         bg-white/[0.02] hover:bg-white/[0.04] hover:border-gold-500/20
                         transition-all duration-500"
            >
              {/* Gold inner glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                           transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,158,11,0.06) 0%, transparent 70%)',
                }}
              />

              <div
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-2 relative"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {metric.prefix || ''}
                <CountUp end={metric.value} duration={2.2} />
                {metric.suffix || ''}
              </div>
              <div className="text-sm font-bold text-white/90 mb-1 relative">
                {metric.label}
              </div>
              <div className="text-xs text-white/35 relative">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        <div
          className="mt-14 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.35) 30%, rgba(245,158,11,0.5) 50%, rgba(245,158,11,0.35) 70%, transparent 100%)',
          }}
        />
      </div>

      {/* Bottom blend into RealitySection */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: '60px' }}
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  )
}
