'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from '@/components/motion/CountUp'

const STATS = [
  {
    value: 747,
    suffix: '%',
    label: 'Average Claim Increase',
    source: 'OPPAGA Florida Catastrophic Claims Study',
    useCountUp: true,
  },
  {
    display: '$80K → $900K',
    label: 'One Recent Result',
    source: 'Example — not a guarantee',
    useCountUp: false,
  },
  {
    value: 35,
    suffix: '+',
    label: 'Years Combined Expertise',
    source: 'Across all three founders',
    useCountUp: true,
  },
  {
    display: 'No Fee',
    label: 'Until We Win',
    source: 'Contingency only',
    useCountUp: false,
  },
  {
    value: 80,
    suffix: '%+',
    label: 'Faster to Max Payout',
    source: 'When starting early in the process',
    useCountUp: true,
  },
]

export default function ProofBand() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      ref={ref}
      className="bg-slate-900 py-12 md:py-16 overflow-hidden"
    >
      <div className="container-site">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div
                className="text-3xl md:text-4xl font-black mb-1"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 60%, #FCD34D 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.useCountUp && stat.value !== undefined ? (
                  <CountUp end={stat.value} suffix={stat.suffix} duration={2.2} />
                ) : (
                  stat.display
                )}
              </div>
              <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-slate-400 leading-snug">{stat.source}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
