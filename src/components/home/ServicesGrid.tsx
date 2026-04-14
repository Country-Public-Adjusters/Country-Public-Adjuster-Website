'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import {
  Cloud, Wind, Droplets, Home, Zap, Building, ShieldCheck,
  FileSearch, ArrowRight
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
    icon: Building,
    title: 'Commercial Property',
    desc: 'Business interruption, structural damage, multi-unit — commercial claims need a specialist.',
    href: '/damage/commercial',
    gradientFrom: 'rgba(203,213,225,0.2)',
    gradientTo: 'rgba(22,48,84,0.1)',
    hoverBorder: 'rgba(59,130,246,0.18)',
    iconColor: 'text-navy-300',
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
      className="relative bg-navy-900 section-padding"
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
                className="group block p-5 rounded-2xl border border-white/[0.05]
                           transition-all duration-400 hover:-translate-y-1.5
                           hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${service.gradientFrom} 0%, ${service.gradientTo} 100%)`,
                }}
              >
                {/* Hover border overlay */}
                <div
                  className="absolute inset-0 rounded-2xl border opacity-0
                             group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ borderColor: service.hoverBorder }}
                />

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.07]
                             flex items-center justify-center mb-4
                             group-hover:scale-110 group-hover:border-white/15
                             transition-all duration-350"
                >
                  <service.icon size={19} className={service.iconColor} />
                </div>

                <h3
                  className="text-sm font-bold text-white/90 mb-2
                             group-hover:text-white transition-colors duration-300"
                >
                  {service.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">{service.desc}</p>

                <div
                  className="flex items-center gap-1 mt-4 text-xs font-semibold
                             text-gold-500/55 group-hover:text-gold-400
                             transition-colors duration-300"
                >
                  Learn more
                  <ArrowRight
                    size={11}
                    className="group-hover:translate-x-1.5 transition-transform duration-350"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
