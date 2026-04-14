'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  DollarSign, Clock, Scale, MapPin, Bot, Shield, FileCheck, HeartHandshake
} from 'lucide-react'

const DIFFERENTIATORS = [
  {
    icon: DollarSign,
    title: 'Zero Upfront Cost',
    body: "No retainer. No hourly rate. We work on contingency — our fee is a percentage of what we recover. If we don't win, you don't pay.",
    accent: 'gold',
  },
  {
    icon: Scale,
    title: 'Advocate-Only Representation',
    body: "We represent you — never the insurance company. We have no financial incentive to accept a low offer.",
    accent: 'gold',
  },
  {
    icon: FileCheck,
    title: 'End-to-End Claim Management',
    body: 'Inspection, documentation, filing, negotiation, settlement — we handle the entire process. You get one point of contact.',
    accent: 'blue',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    body: 'We respond quickly because timing matters. Delays in documentation after storm damage give insurers grounds to reduce claims.',
    accent: 'blue',
  },
  {
    icon: MapPin,
    title: 'Local Market Knowledge',
    body: 'Nashville and South Florida have distinct storm patterns, building codes, and insurer behaviors. We know the specific tactics used in each market.',
    accent: 'gold',
  },
  {
    icon: Shield,
    title: 'Protected by State Law',
    body: 'Your right to hire a public adjuster is protected by Tennessee and Florida state law. Your insurer cannot penalize you for it.',
    accent: 'blue',
  },
  {
    icon: HeartHandshake,
    title: 'Human-Centered Process',
    body: 'Storm damage is stressful. We handle the friction so you can focus on what matters. Clear communication at every step.',
    accent: 'gold',
  },
  {
    icon: Bot,
    title: 'After-Hours AI Intake',
    body: "Can't wait until business hours? Our AI assistant captures your claim details and routes your inquiry so we can respond first thing.",
    accent: 'blue',
  },
]

export default function WhyChoose() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section
      ref={ref}
      className="relative bg-navy-950 section-padding"
    >
      {/* Top ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 50% 0%, rgba(203,213,225,0.22) 0%, transparent 65%)',
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
            Why Country
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading-dark mb-5"
          >
            What sets us apart
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-sub-dark mx-auto"
          >
            There are a lot of public adjusters. Here is what makes Country different —
            and why it matters to your claim outcome.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {DIFFERENTIATORS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
              animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{
                duration: 0.7,
                delay: 0.12 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-5 rounded-2xl border border-slate-200
                         bg-slate-100 overflow-hidden
                         hover:border-slate-200 hover:bg-slate-100
                         hover:-translate-y-0.5
                         transition-all duration-450"
            >
              {/* Subtle inner glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                           transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    item.accent === 'gold'
                      ? 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,158,11,0.05) 0%, transparent 70%)'
                      : 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(203,213,225,0.12) 0%, transparent 70%)',
                }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl border flex items-center justify-center mb-4
                           group-hover:scale-105 transition-all duration-350"
                style={{
                  background:
                    item.accent === 'gold'
                      ? 'rgba(245,158,11,0.09)'
                      : 'rgba(203,213,225,0.28)',
                  borderColor:
                    item.accent === 'gold'
                      ? 'rgba(245,158,11,0.18)'
                      : 'rgba(203,213,225,0.5)',
                }}
              >
                <item.icon
                  size={17}
                  className={item.accent === 'gold' ? 'text-gold-400' : 'text-navy-300'}
                />
              </div>

              <h3 className="text-sm font-bold text-slate-800 mb-2
                             group-hover:text-slate-700 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom curve into testimonials/cream section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none" className="w-full block" style={{ height: '55px' }}>
          <path d="M0,0 C480,70 960,70 1440,0 L1440,70 L0,70 Z" fill="#FEFDF8" />
        </svg>
      </div>
    </section>
  )
}
