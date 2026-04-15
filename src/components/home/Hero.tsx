'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

const PHONE = '18668069911'
const PHONE_DISPLAY = '1-866-806-9911'

const TRUST_CHIPS = [
  { icon: Shield, text: 'No Fee Until We Win' },
  { icon: CheckCircle, text: '35+ Years Combined Expertise' },
  { icon: CheckCircle, text: 'Residential & Commercial' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-8 pb-24 md:pb-32"
      style={{
        background:
          'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(245,158,11,0.10) 0%, transparent 55%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      }}
    >
      {/* Subtle radial gold glow top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(245,158,11,0.10) 0%, transparent 60%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 container-site">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-7">
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase bg-amber-50 border border-amber-200 text-amber-700">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse flex-shrink-0" />
              OPPAGA Data — Florida Catastrophic Claims Study
            </span>
          </motion.div>

          {/* Main stat — the 747% */}
          <motion.div variants={itemVariants} className="mb-5">
            <div
              className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-black leading-none tracking-tight"
              style={{
                backgroundImage: 'linear-gradient(135deg, #D97706 0%, #F59E0B 40%, #FBBF24 70%, #FCD34D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              747%
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6"
          >
            Using a Public Adjuster Increases the Average Insurance Claim by 747%
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-4"
          >
            According to OPPAGA data, policyholders represented by a public adjuster received
            dramatically higher payments. That&apos;s the average in the referenced study. While
            we can&apos;t promise the same result in every case, the potential upside can be
            enormous.
          </motion.p>

          {/* Secondary supporting copy */}
          <motion.p
            variants={itemVariants}
            className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto mb-4"
          >
            This is just the average. While every claim is different and outcomes are never
            guaranteed, when a claim is properly documented, presented, and negotiated — the
            difference can be extraordinary.
          </motion.p>

          {/* Disclaimer */}
          <motion.p
            variants={itemVariants}
            className="text-xs text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            *Study references specific Florida catastrophic claim data. Results vary by claim,
            policy, carrier, documentation, and damage type. No outcome is guaranteed.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link
              href="/intake"
              onClick={() => Analytics.ctaClick('Check Claim Value', 'hero')}
              className="btn-primary-lg w-full sm:w-auto gap-2 shadow-glow-gold"
            >
              Check the True Value of Your Claim
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${PHONE}`}
              onClick={() => Analytics.phoneClick('hero')}
              className="btn-secondary-lg w-full sm:w-auto gap-2"
            >
              <Phone size={17} />
              Speak With a Founder
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            {TRUST_CHIPS.map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                           bg-slate-100 border border-slate-200
                           text-sm text-slate-600 font-medium"
              >
                <chip.icon size={13} className="text-gold-500 flex-shrink-0" />
                {chip.text}
              </div>
            ))}
          </motion.div>

          {/* Secondary callout strip */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto"
          >
            <div
              className="rounded-2xl border border-gold-500/30 px-8 py-5 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.06) 0%, rgba(245,158,11,0.02) 100%)',
              }}
            >
              <p className="text-base sm:text-lg font-semibold text-slate-800 leading-snug">
                &ldquo;Your insurance company is strongly represented — and now, together with us,
                you are too.&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom blend */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: '48px' }}
        >
          <path
            d="M0,30 C360,60 1080,0 1440,40 L1440,60 L0,60 Z"
            fill="#0F172A"
          />
        </svg>
      </div>
    </section>
  )
}
