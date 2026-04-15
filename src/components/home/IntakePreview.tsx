'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Bot, Phone, Shield, Clock, CheckCircle } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

const STEPS_PREVIEW = [
  { label: 'Property type', done: true },
  { label: 'Damage type', done: true },
  { label: 'Location', done: false, active: true },
  { label: 'Insurance stage', done: false },
  { label: 'Contact info', done: false },
]

const FEATURES = [
  {
    icon: Shield,
    title: 'Qualifies your claim instantly',
    body: 'Our intake logic identifies urgency, region, and damage type so we route your claim to the right adjuster immediately.',
  },
  {
    icon: Clock,
    title: 'Takes under 3 minutes',
    body: 'Seven short steps. No lengthy forms. We capture what we need to call you prepared and ready to help.',
  },
  {
    icon: Bot,
    title: 'After-hours? AI handles intake',
    body: 'Our AI assistant captures your claim details around the clock so no lead is ever missed after hours.',
  },
]

export default function IntakePreview() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="relative bg-amber-50 section-padding overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 0% 50%, rgba(245,158,11,0.05) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 100% 50%, rgba(203,213,225,0.3) 0%, transparent 60%)',
        }}
      />

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Mockup UI */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Intake form mockup */}
            <div
              className="rounded-3xl border border-slate-200 p-5 lg:p-6 backdrop-blur-sm shadow-card-dark"
              style={{
                background: 'linear-gradient(135deg, rgba(15,40,71,0.8) 0%, rgba(11,31,58,0.9) 100%)',
              }}
            >
              {/* Mock header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-200">
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-gold-500 mb-0.5">
                    Claim Intake
                  </div>
                  <div className="text-slate-900 font-semibold text-sm">
                    Free Inspection Request
                  </div>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(34,197,94,0.12)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    color: '#4ade80',
                  }}
                >
                  Step 3 of 7
                </span>
              </div>

              {/* Progress bar */}
              <div className="mb-5">
                <div className="flex gap-1.5 mb-3">
                  {STEPS_PREVIEW.map((step, i) => (
                    <div
                      key={i}
                      className="flex-1 h-1 rounded-full transition-all duration-500"
                      style={{
                        background: step.done
                          ? '#F59E0B'
                          : step.active
                          ? 'rgba(245,158,11,0.4)'
                          : 'rgba(0,0,0,0.05)',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-2xs text-slate-400">
                  {STEPS_PREVIEW.map((step, i) => (
                    <span
                      key={i}
                      className={step.active ? 'text-gold-400/80' : ''}
                    >
                      {step.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mock current step */}
              <div className="mb-6">
                <div className="text-slate-900 font-semibold text-sm mb-3">
                  Where is the property located?
                </div>
                <div className="space-y-2">
                  {['Nashville, TN', 'South Florida', 'Other area'].map((opt, i) => (
                    <div
                      key={i}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-xl border text-sm
                        cursor-pointer transition-all duration-200
                        ${i === 0
                          ? 'border-gold-500 bg-gold-500/10 text-slate-900 font-medium'
                          : 'border-slate-200 bg-slate-100 text-slate-400 hover:border-white/15'
                        }
                      `}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${
                          i === 0
                            ? 'border-gold-500 bg-gold-500'
                            : 'border-slate-300'
                        }`}
                      >
                        {i === 0 && (
                          <div className="w-full h-full rounded-full bg-white scale-[0.4]" />
                        )}
                      </div>
                      {opt}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock CTA */}
              <button
                className="w-full py-3.5 rounded-2xl font-bold text-sm text-navy-950
                           flex items-center justify-center gap-2"
                style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' }}
                aria-hidden="true"
                tabIndex={-1}
              >
                Continue
                <ArrowRight size={16} />
              </button>

              {/* Trust line */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <span className="flex items-center gap-1.5 text-2xs text-slate-400 font-medium">
                  <Shield size={11} className="text-green-400/60" />
                  No upfront cost
                </span>
                <span className="flex items-center gap-1.5 text-2xs text-slate-400 font-medium">
                  <CheckCircle size={11} className="text-green-400/60" />
                  No commitment
                </span>
              </div>
            </div>

            {/* Floating after-hours badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-4 -right-2 lg:-right-8 flex items-center gap-2.5
                         px-4 py-3 rounded-2xl glass shadow-card-dark text-sm"
            >
              <Bot size={18} className="text-gold-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-slate-900 text-xs">After hours?</div>
                <div className="text-slate-400 text-2xs">AI captures your claim now</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="section-label mb-4 block"
            >
              Smart Claim Intake
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-heading-dark mb-5"
            >
              Start your claim in{' '}
              <span className="text-gradient-gold">under 3 minutes</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="section-sub-dark mb-8"
            >
              Our guided intake collects exactly what we need to prepare your claim review,
              qualify urgency, and have the right adjuster call you ready to help.
            </motion.p>

            {/* Feature list */}
            <div className="space-y-5 mb-10">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(245,158,11,0.1)',
                      border: '1px solid rgba(245,158,11,0.2)',
                    }}
                  >
                    <feature.icon size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 mb-1">{feature.title}</div>
                    <div className="text-sm text-slate-400 leading-relaxed">{feature.body}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/intake"
                onClick={() => Analytics.ctaClick('Start Intake', 'intake-preview')}
                className="btn-primary-lg flex-1 sm:flex-none"
              >
                Start My Claim Review
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:18668069911"
                onClick={() => Analytics.phoneClick('intake-preview')}
                className="btn-secondary-lg flex-1 sm:flex-none"
              >
                <Phone size={17} />
                Call Instead
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
