'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Building2, Home, Layers, TrendingUp, Handshake, ArrowRight } from 'lucide-react'

const CARDS = [
  {
    icon: Home,
    title: 'Business Owners',
    body: 'Lost revenue, equipment damage, and structural repairs. We document everything the insurer might miss.',
  },
  {
    icon: Building2,
    title: 'Landlords & Property Managers',
    body: 'Rental income loss, unit damage, tenant displacement. Complex claims require expert hands.',
  },
  {
    icon: Layers,
    title: 'Commercial Real Estate',
    body: 'Multi-unit, mixed-use, or large-scale property damage. We negotiate with the depth and leverage it demands.',
  },
  {
    icon: TrendingUp,
    title: 'Business Interruption',
    body: 'One of the most underclaimed coverages. Lost income, payroll, rent, extra expenses — all may be owed.',
  },
  {
    icon: Handshake,
    title: 'Referral Partners',
    body: 'Contractors, roofers, mitigation companies, and agents: become a trusted Country partner.',
  },
]

export default function CommercialSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="bg-slate-50 section-padding overflow-hidden">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            Commercial Claims
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading-dark mb-5"
          >
            We Handle Commercial Claims Too —{' '}
            <span className="text-gradient-gold">And We&apos;re Very Good At It</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-sub-dark mx-auto"
          >
            Business owners and property managers face unique and complex claim challenges.
            We fight for full recovery on income-producing properties.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              style={{ border: '1px solid #E2E8F0', borderLeft: '4px solid #F59E0B' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: 'rgba(245,158,11,0.09)',
                  border: '1px solid rgba(245,158,11,0.20)',
                }}
              >
                <card.icon size={18} className="text-gold-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-center"
        >
          <Link href="/intake" className="btn-primary-lg inline-flex gap-2">
            Get a Commercial Claim Assessment
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
