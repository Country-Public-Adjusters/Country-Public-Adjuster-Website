'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Phone, ArrowRight, Bot, Shield, Clock } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

const PHONE = '18668069911'
const PHONE_DISPLAY = '1-866-806-9911'

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // Parallax the inner glow orb
  const glowY = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)',
      }}
    >
      {/* Layered ambient glows */}
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 65% 55% at 50% 85%, rgba(245,158,11,0.16) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 40% 40% at 50% 95%, rgba(245,158,11,0.08) 0%, transparent 60%)',
          }}
        />
      </motion.div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 100%, black 30%, transparent 100%)',
        }}
      />

      {/* Rotating accent ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[600px] h-[600px] rounded-full border border-gold-500/[0.04]
                   pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{ animation: 'spin-slow 60s linear infinite' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[400px] h-[400px] rounded-full border border-gold-500/[0.06]
                   pointer-events-none hidden lg:block"
        aria-hidden="true"
        style={{ animation: 'spin-slow 40s linear infinite reverse' }}
      />

      <div className="container-site relative z-10 py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-7"
          >
            <span className="badge-gold px-5 py-1.5">
              <Shield size={11} />
              Free Inspection · No Upfront Cost · Licensed Professionals
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black text-white
                       tracking-tight leading-[1.0] mb-7"
          >
            Storm damage shouldn't cost you{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FCD34D 100%)',
              }}
            >
              twice.
            </span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg text-slate-400 leading-relaxed mb-11 max-w-xl mx-auto"
          >
            You paid for insurance. Now it's time to use it — with someone who knows how
            to make them pay what your damage actually warrants.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link
              href="/intake"
              onClick={() => Analytics.ctaClick('Get Free Inspection', 'final-cta')}
              className="btn-primary-lg w-full sm:w-auto shadow-glow-gold hover:shadow-glow-gold-lg"
            >
              Get My Free Inspection
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${PHONE}`}
              onClick={() => Analytics.phoneClick('final-cta')}
              className="btn-secondary-lg w-full sm:w-auto"
            >
              <Phone size={17} />
              Call {PHONE_DISPLAY}
            </a>
          </motion.div>

          {/* After-hours nudge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm text-white/30"
          >
            <Bot size={15} className="text-gold-500/45" />
            <span>
              After hours?{' '}
              <Link
                href="/intake"
                className="text-gold-400/60 hover:text-gold-400 underline underline-offset-2
                           transition-colors duration-300"
                onClick={() => Analytics.voiceIntakeClick()}
              >
                Start intake now
              </Link>
              {' '}— our AI captures your details and we'll respond first thing.
            </span>
          </motion.div>

          {/* Reassurance chips */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-10"
          >
            {[
              { icon: Shield, text: '$0 upfront — contingency only' },
              { icon: Clock, text: 'Same-day response available' },
              { icon: Shield, text: 'Licensed · Tennessee & Florida' },
            ].map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                           bg-white/[0.03] border border-white/[0.06]
                           text-xs text-white/40 font-medium"
              >
                <chip.icon size={11} className="text-gold-500/55" />
                {chip.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
