'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  Cloud, Wind, Droplets, Home, Zap, Building, ShieldCheck,
  FileSearch, ArrowRight, TrendingUp, Flame
} from 'lucide-react'

const SERVICES = [
  {
    icon: Cloud,
    title: 'Hail Damage Claims',
    desc: 'Roof bruising, granule loss, structural impact — we document every strike.',
    href: '/damage/hail',
    gradientFrom: 'rgba(59,130,246,0.12)',
    gradientTo: 'rgba(29,78,216,0.05)',
    hoverBorder: 'rgba(59,130,246,0.25)',
    iconColor: 'text-blue-400',
  },
  {
    icon: Wind,
    title: 'Wind Damage Claims',
    desc: 'Siding, roofing, windows, structural — wind damage is often massively undervalued.',
    href: '/damage/wind',
    gradientFrom: 'rgba(203,213,225,0.25)',
    gradientTo: 'rgba(11,31,58,0.15)',
    hoverBorder: 'rgba(59,130,246,0.2)',
    iconColor: 'text-navy-300',
  },
  {
    icon: Droplets,
    title: 'Water Damage Claims',
    desc: 'Intrusion, flooding, burst pipes — mold and hidden moisture change everything.',
    href: '/damage/water',
    gradientFrom: 'rgba(6,182,212,0.1)',
    gradientTo: 'rgba(8,145,178,0.04)',
    hoverBorder: 'rgba(6,182,212,0.22)',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Home,
    title: 'Roof Damage Claims',
    desc: 'Full replacement vs. repair disputes are where insurers save the most money. We fight back.',
    href: '/damage/roof',
    gradientFrom: 'rgba(245,158,11,0.1)',
    gradientTo: 'rgba(217,119,6,0.04)',
    hoverBorder: 'rgba(245,158,11,0.28)',
    iconColor: 'text-gold-400',
  },
  {
    icon: Zap,
    title: 'Storm & Hurricane Claims',
    desc: 'Complex catastrophe claims with total-loss potential. Expert documentation is critical.',
    href: '/damage/storm',
    gradientFrom: 'rgba(168,85,247,0.1)',
    gradientTo: 'rgba(139,92,246,0.04)',
    hoverBorder: 'rgba(168,85,247,0.22)',
    iconColor: 'text-purple-400',
  },
  {
    icon: Flame,
    title: 'Fire & Smoke Damage',
    desc: 'Smoke travels further than fire. HVAC distribution, contents, odour remediation — all claimable.',
    href: '/services',
    gradientFrom: 'rgba(251,146,60,0.12)',
    gradientTo: 'rgba(234,88,12,0.04)',
    hoverBorder: 'rgba(251,146,60,0.3)',
    iconColor: 'text-orange-400',
  },
  {
    icon: ShieldCheck,
    title: 'Underpaid / Denied Claims',
    desc: 'Already settled? It may not be too late. We review past settlements and reopen claims.',
    href: '/services',
    gradientFrom: 'rgba(34,197,94,0.1)',
    gradientTo: 'rgba(22,163,74,0.04)',
    hoverBorder: 'rgba(34,197,94,0.22)',
    iconColor: 'text-green-400',
  },
  {
    icon: FileSearch,
    title: 'Supplemental Claims',
    desc: 'Discovered additional damage after settlement? Supplemental claims recover what was missed.',
    href: '/services',
    gradientFrom: 'rgba(245,158,11,0.08)',
    gradientTo: 'rgba(245,158,11,0.03)',
    hoverBorder: 'rgba(245,158,11,0.25)',
    iconColor: 'text-gold-400',
  },
]

export default function ServicesGrid() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section
      ref={ref}
      className="relative bg-white section-padding"
    >
      {/* Faint ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(203,213,225,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-4 block"
          >
            What We Cover
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading-dark mb-5"
          >
            Every type of property.{' '}
            <span className="text-gradient-gold">Every type of damage.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-sub-dark mx-auto"
          >
            Residential, commercial, storm damage, fire, water — if your insurer owes
            you money, we know how to get it.
          </motion.p>
        </div>

        {/* Service tiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.65,
                delay: 0.12 + i * 0.055,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={service.href}
                className="group block p-5 rounded-2xl border border-slate-200
                           transition-all duration-400 hover:-translate-y-1.5
                           hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${service.gradientFrom} 0%, ${service.gradientTo} 100%)`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-2xl border opacity-0
                             group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ borderColor: service.hoverBorder }}
                />
                <div
                  className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200
                             flex items-center justify-center mb-4
                             group-hover:scale-110 group-hover:border-white/15
                             transition-all duration-350"
                >
                  <service.icon size={19} className={service.iconColor} />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-2 group-hover:text-slate-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{service.desc}</p>
                <div className="flex items-center gap-1 mt-4 text-xs font-semibold text-gold-500/55 group-hover:text-gold-400 transition-colors duration-300">
                  Learn more
                  <ArrowRight size={11} className="group-hover:translate-x-1.5 transition-transform duration-350" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Commercial / Business Interruption callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4"
        >
          <Link
            href="/damage/commercial"
            className="group relative flex flex-col sm:flex-row items-start sm:items-center
                       justify-between gap-5 p-6 lg:p-7 rounded-2xl overflow-hidden
                       border border-gold-500/30 hover:border-gold-500/60
                       transition-all duration-400 hover:-translate-y-0.5
                       hover:shadow-[0_12px_40px_rgba(245,158,11,0.15)]"
            style={{
              background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A22 100%)',
            }}
          >
            {/* Left */}
            <div className="flex items-start gap-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                           group-hover:scale-110 transition-transform duration-350"
                style={{
                  background: 'rgba(245,158,11,0.15)',
                  border: '1px solid rgba(245,158,11,0.3)',
                }}
              >
                <Building size={20} className="text-gold-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold tracking-widest uppercase text-gold-600">
                    Commercial Property
                  </span>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(245,158,11,0.15)',
                      border: '1px solid rgba(245,158,11,0.3)',
                      color: '#B45309',
                    }}
                  >
                    We handle this too
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-800 leading-snug max-w-xl">
                  Business interruption is one of the most underclaimed coverages. Most owners don't realise their policy covers far more than physical damage — lost revenue, payroll, rent, and operating expenses are all claimable.
                </p>
              </div>
            </div>

            {/* Right CTA */}
            <div className="flex items-center gap-2 text-sm font-bold text-gold-600 flex-shrink-0
                            group-hover:gap-3 transition-all duration-300">
              <TrendingUp size={15} />
              Commercial claims
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
