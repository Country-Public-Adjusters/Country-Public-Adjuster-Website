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
    featured: true,
  },
  {
    icon: Scale,
    title: 'Advocate-Only Representation',
    body: "We represent you — never the insurance company. We have no financial incentive to accept a low offer.",
    accent: 'blue',
    featured: false,
  },
  {
    icon: FileCheck,
    title: 'End-to-End Claim Management',
    body: 'Inspection, documentation, filing, negotiation, settlement — we handle the entire process. You get one point of contact.',
    accent: 'gold',
    featured: false,
  },
  {
    icon: Clock,
    title: 'Start Early, Win More',
    body: 'Getting us involved from day 1 can cut the time to maximum payout by over 80%. Timing is everything — early documentation wins claims.',
    accent: 'blue',
    featured: false,
  },
  {
    icon: MapPin,
    title: 'Local Care. National Power.',
    body: 'We serve Nashville and South Florida with local expertise — and negotiate against large national insurers and small regional carriers with equal force.',
    accent: 'gold',
    featured: false,
  },
  {
    icon: Shield,
    title: 'Protected by State Law',
    body: 'Your right to hire a public adjuster is protected by Tennessee and Florida state law. Your insurer cannot penalize you for it.',
    accent: 'blue',
    featured: false,
  },
  {
    icon: HeartHandshake,
    title: 'Human-Centered Process',
    body: 'Storm damage is stressful. We handle the friction so you can focus on what matters. Clear communication at every step.',
    accent: 'gold',
    featured: false,
  },
  {
    icon: Bot,
    title: 'Industry-Leading Tech + Human Brilliance',
    body: "AI-driven processes, industry-leading software, and 35+ years of experience working together. Your claim has a real chance of realizing its true value.",
    accent: 'blue',
    featured: false,
  },
]

const goldCard = {
  bg: 'linear-gradient(145deg, #FFFBEB 0%, #FEF3C7 60%, #FDE68A22 100%)',
  border: 'rgba(245,158,11,0.35)',
  hoverBorder: 'rgba(245,158,11,0.7)',
  iconBg: 'rgba(245,158,11,0.15)',
  iconBorder: 'rgba(245,158,11,0.30)',
  iconColor: '#D97706',
  numColor: 'rgba(245,158,11,0.25)',
  numText: '#B45309',
  hoverShadow: '0 8px 40px rgba(245,158,11,0.18)',
}

const blueCard = {
  bg: 'linear-gradient(145deg, #F8FAFC 0%, #F1F5F9 60%, #E2E8F022 100%)',
  border: 'rgba(100,116,139,0.22)',
  hoverBorder: 'rgba(71,85,105,0.45)',
  iconBg: 'rgba(100,116,139,0.12)',
  iconBorder: 'rgba(100,116,139,0.22)',
  iconColor: '#475569',
  numColor: 'rgba(100,116,139,0.18)',
  numText: '#64748B',
  hoverShadow: '0 8px 40px rgba(100,116,139,0.15)',
}

export default function WhyChoose() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section
      ref={ref}
      className="relative bg-white section-padding overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.9) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 20% 50%, rgba(245,158,11,0.05) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 50%, rgba(100,116,139,0.05) 0%, transparent 60%)',
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
            What sets us{' '}
            <span className="text-gradient-gold">apart</span>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DIFFERENTIATORS.map((item, i) => {
            const style = item.accent === 'gold' ? goldCard : blueCard
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.1 + i * 0.075,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{
                  background: style.bg,
                  border: `1.5px solid ${style.border}`,
                  transition: 'border-color 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = style.hoverBorder
                  el.style.boxShadow = style.hoverShadow
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = style.border
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateY(0)'
                }}
              >
                {/* Number watermark */}
                <div
                  className="absolute top-3 right-4 text-6xl font-black leading-none select-none pointer-events-none"
                  style={{ color: style.numColor }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="relative p-6">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5
                               group-hover:scale-110 transition-transform duration-350"
                    style={{
                      background: style.iconBg,
                      border: `1px solid ${style.iconBorder}`,
                    }}
                  >
                    <item.icon size={18} style={{ color: style.iconColor }} />
                  </div>

                  {/* Number tag */}
                  <div
                    className="text-[10px] font-bold tracking-widest uppercase mb-1"
                    style={{ color: style.numText }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-2.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.body}</p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{
                    background: item.accent === 'gold'
                      ? 'linear-gradient(90deg, #F59E0B, #FCD34D)'
                      : 'linear-gradient(90deg, #94A3B8, #CBD5E1)',
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none" className="w-full block" style={{ height: '55px' }}>
          <path d="M0,0 C480,70 960,70 1440,0 L1440,70 L0,70 Z" fill="#F8FAFC" />
        </svg>
      </div>
    </section>
  )
}
