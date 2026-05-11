'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { gsap } from 'gsap'
import { Phone, Shield, Star, ChevronDown, ArrowRight } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

const PHONE = '18883975420'
const PHONE_DISPLAY = '1-888-397-5420'

const TRUST_CHIPS = [
  { icon: Shield, text: 'No upfront cost' },
  { icon: Star, text: '35+ years experience' },
  { icon: null, text: '1,000s of claims negotiated' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.25 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const gradientRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)

  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const { scrollY } = useScroll()

  // Desktop: 90px parallax drift. Mobile: no parallax so stat boxes stay visible
  const rawYDesktop = useTransform(scrollY, [0, 700], [0, 90])
  const rawYMobile  = useTransform(scrollY, [0, 700], [0, 0])
  const heroY = useSpring(isMobile ? rawYMobile : rawYDesktop, { stiffness: 80, damping: 20, mass: 0.8 })

  // Desktop fades by 500px. Mobile fades much later so all 3 stat boxes stay visible
  const heroOpacityDesktop = useTransform(scrollY, [0, 500],  [1, 0])
  const heroOpacityMobile  = useTransform(scrollY, [0, 1100], [1, 0])
  const heroOpacity = isMobile ? heroOpacityMobile : heroOpacityDesktop

  // Mouse-tracked ambient gradient orb
  useEffect(() => {
    const hero = heroRef.current
    const gradient = gradientRef.current
    if (!hero || !gradient) return

    let rafId: number
    let mouseX = 50
    let mouseY = 45
    let currentX = 50
    let currentY = 45

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * 100
      mouseY = ((e.clientY - rect.top) / rect.height) * 100
    }

    const tick = () => {
      currentX += (mouseX - currentX) * 0.05
      currentY += (mouseY - currentY) * 0.05
      gradient.style.background = `
        radial-gradient(ellipse 55% 65% at ${currentX}% ${currentY}%, rgba(245,158,11,0.07) 0%, transparent 70%),
        radial-gradient(ellipse 80% 55% at 25% 38%, rgba(203,213,225,0.38) 0%, transparent 65%),
        radial-gradient(ellipse 55% 75% at 75% 65%, rgba(203,213,225,0.22) 0%, transparent 60%)
      `
      rafId = requestAnimationFrame(tick)
    }

    hero.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(tick)
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // GSAP floating particles
  useEffect(() => {
    const dots = document.querySelectorAll('.hero-dot')
    dots.forEach((dot, i) => {
      gsap.to(dot, {
        y: gsap.utils.random(-22, 22),
        x: gsap.utils.random(-12, 12),
        opacity: gsap.utils.random(0.25, 0.75),
        duration: gsap.utils.random(3.5, 7),
        repeat: -1,
        yoyo: true,
        delay: i * 0.35,
        ease: 'sine.inOut',
      })
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-6 pb-28 md:pb-36"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 90% 70% at 50% -5%, rgba(245,158,11,0.11) 0%, transparent 58%), radial-gradient(ellipse 65% 45% at 82% 52%, rgba(203,213,225,0.28) 0%, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 55%, #FFFFFF 100%)',
      }}
    >
      {/* Ambient gradient layer — follows mouse */}
      <div
        ref={gradientRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Floating particle dots */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="hero-dot absolute rounded-full"
            style={{
              width: `${Math.random() * 3.5 + 1.5}px`,
              height: `${Math.random() * 3.5 + 1.5}px`,
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              background:
                i % 4 === 0
                  ? 'rgba(245,158,11,0.55)'
                  : i % 4 === 1
                  ? 'rgba(245,158,11,0.2)'
                  : 'rgba(0,0,0,0.08)',
              opacity: Math.random() * 0.5 + 0.15,
            }}
          />
        ))}
      </div>

      {/* Gold glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at center top, rgba(245,158,11,0.13) 0%, transparent 65%)',
        }}
      />

      {/* Subtle vignette bottom — helps curve blend */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(4,13,26,0.85) 100%)',
        }}
      />

      {/* ── Main content with spring-parallax ── */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 container-site"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Pre-headline badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-7">
            <span className="badge-gold text-xs py-1.5 px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              Licensed Public Adjusters · Nashville &amp; South Florida
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black text-slate-900
                       tracking-tight leading-[0.93] mb-7"
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #FCD34D 100%)',
              }}
            >
              747% More,
            </span>
            {' '}On Average.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-[38rem] mx-auto mb-11"
          >
            Storm damage to your property? We handle the claim from inspection to settlement
            so you can pursue what your policy may truly owe.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/#free-inspection"
              onClick={() => Analytics.ctaClick('Get Free Inspection', 'hero')}
              className="btn-primary-lg w-full sm:w-auto gap-2 shadow-glow-gold"
            >
              Get My Free Inspection
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${PHONE}`}
              onClick={() => Analytics.phoneClick('hero')}
              className="btn-secondary-lg w-full sm:w-auto gap-2"
            >
              <Phone size={17} />
              Call {PHONE_DISPLAY}
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {TRUST_CHIPS.map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                           bg-slate-100 border border-slate-200
                           text-sm text-slate-500 font-medium backdrop-blur-sm"
              >
                {chip.icon && (
                  <chip.icon size={13} className="text-gold-500 flex-shrink-0" />
                )}
                {chip.text}
              </div>
            ))}
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full
                            bg-slate-100 border border-slate-200 backdrop-blur-sm">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-gold-500 text-gold-500" />
              ))}
              <span className="text-sm text-slate-500 font-medium ml-1.5">5-star rated</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Floating stat cards ── */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto"
        >
          {[
            { value: '$900K', label: 'vs $80K offer', note: 'Commercial claim' },
            { value: '747%', label: 'avg. claim increase', note: 'Source: OPPAGA' },
            { value: '$0', label: 'upfront cost', note: 'Contingency only' },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl px-5 py-4 text-center border border-slate-200
                         backdrop-blur-md"
              style={{
                background: 'rgba(0,0,0,0.02)',
              }}
            >
              <div
                className="text-2xl font-black tracking-tight"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-700 mt-0.5">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.note}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-2xs text-slate-300 font-medium tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={17} className="text-slate-300" />
        </motion.div>
      </motion.div>

      {/* ── Section blend — deep sweep into metrics band ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: '80px' }}
        >
          <path
            d="M0,55 C280,100 760,20 1440,65 L1440,100 L0,100 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  )
}
