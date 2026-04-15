'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Wrench, UserCheck, Building, ArrowRight } from 'lucide-react'

const COLUMNS = [
  {
    icon: Wrench,
    title: 'Contractors & Tradespeople',
    body: 'Roofers, plumbers, restoration companies, and general contractors. Refer clients who need expert claim help — and know they\'ll be in good hands.',
  },
  {
    icon: UserCheck,
    title: 'Agents & Adjusters',
    body: 'Independent agents, captive agents, and adjusters who want to ensure clients get proper representation when disputes arise.',
  },
  {
    icon: Building,
    title: 'Property Professionals',
    body: 'Real estate agents, property managers, HOAs, and commercial property owners who regularly deal with damage claims.',
  },
]

export default function ReferralSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="bg-slate-900 section-padding overflow-hidden">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            Partner Program
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5"
          >
            Work With Us —{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 60%, #FCD34D 100%)',
              }}
            >
              Referral & Partner Program
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            If you work with property owners, homeowners, or businesses — we want to be your
            trusted claim partner.
          </motion.p>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {COLUMNS.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-7 hover:border-gold-500/40 transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: 'rgba(245,158,11,0.12)',
                  border: '1px solid rgba(245,158,11,0.25)',
                }}
              >
                <col.icon size={20} className="text-gold-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-3">{col.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{col.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center"
        >
          <Link href="/contact" className="btn-primary-lg inline-flex gap-2">
            Become a Referral Partner
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
