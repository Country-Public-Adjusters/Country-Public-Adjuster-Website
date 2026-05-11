'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowRight, TrendingUp, MapPin, Flame, Wind, Droplets, Home } from 'lucide-react'

// ── Data ──────────────────────────────────────────────────────────────────────
const RESULTS = [
  {
    type: 'Residential', tag: 'Wind & Hail', location: 'South Florida',
    icon: Wind, iconColor: '#60A5FA',
    beforeRaw: 32637, afterRaw: 243798,
    desc: 'Hidden structural and roof damage entirely missed in the insurer\'s initial assessment.',
    delay: 0,
  },
  {
    type: 'Commercial', tag: 'Hurricane', location: 'Nashville, TN',
    icon: TrendingUp, iconColor: '#F59E0B',
    beforeRaw: 349682, afterRaw: 2612124,
    desc: 'Business interruption losses and full structural scope recovered on a commercial property.',
    delay: 0.15,
  },
  {
    type: 'Residential', tag: 'Fire & Smoke', location: 'Brentwood, TN',
    icon: Flame, iconColor: '#F97316',
    beforeRaw: 15000, afterRaw: 165000,
    desc: 'HVAC contamination and smoke spread throughout entire home overlooked by the insurer.',
    delay: 0.3,
  },
  {
    type: 'Residential', tag: 'Water Damage', location: 'East Nashville, TN',
    icon: Droplets, iconColor: '#38BDF8',
    beforeRaw: 8500, afterRaw: 94000,
    desc: 'Active mold propagation and compromised subfloor framing not documented by the insurer.',
    delay: 0.45,
  },
]

const TOTAL_BEFORE = RESULTS.reduce((a, r) => a + r.beforeRaw, 0)
const TOTAL_AFTER  = RESULTS.reduce((a, r) => a + r.afterRaw,  0)

// ── Helpers ───────────────────────────────────────────────────────────────────
function useCountUp(target: number, inView: boolean, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    const timeout = setTimeout(() => {
      let start = 0
      const step = target / (duration / 16)
      const timer = setInterval(() => {
        start += step
        if (start >= target) { setCount(target); clearInterval(timer) }
        else setCount(Math.floor(start))
      }, 16)
      return () => clearInterval(timer)
    }, delay)
    return () => clearTimeout(timeout)
  }, [inView, target, duration, delay])
  return count
}

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000)     return `$${n.toLocaleString()}`
  return `$${n}`
}

function pct(before: number, after: number) {
  return `${Math.round(((after - before) / before) * 100)}%`
}

// ── Result Card ───────────────────────────────────────────────────────────────
function ResultCard({ r, inView, idx }: { r: typeof RESULTS[0]; inView: boolean; idx: number }) {
  const Icon = r.icon
  const before = useCountUp(r.beforeRaw, inView, 1400, r.delay * 1000 + 400)
  const after  = useCountUp(r.afterRaw,  inView, 2000, r.delay * 1000 + 600)
  const [hovered, setHovered] = useState(false)
  const increase = pct(r.beforeRaw, r.afterRaw)

  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.9, filter: 'blur(16px)' }}
      animate={inView ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay: r.delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden relative group cursor-default"
      style={{
        border: '1px solid rgba(245,158,11,0.2)',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
        transform: hovered ? 'translateY(-8px)' : 'none',
        boxShadow: hovered ? '0 32px 64px rgba(0,0,0,0.5), 0 0 50px rgba(245,158,11,0.12)' : 'none',
        borderColor: hovered ? 'rgba(245,158,11,0.5)' : 'rgba(245,158,11,0.2)',
      }}
    >
      {/* Scan beam on enter */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        initial={{ top: '-100%' }}
        animate={inView ? { top: ['−100%', '110%'] } : {}}
        transition={{ duration: 0.9, delay: r.delay + 0.4, ease: 'easeInOut' }}
        style={{ height: '40%', background: 'linear-gradient(180deg, transparent 0%, rgba(245,158,11,0.08) 50%, transparent 100%)' }}
      />

      {/* Shimmer on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        animate={hovered ? { x: ['−100%', '200%'] } : { x: '−100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.08), transparent)', width: '60%' }}
      />

      {/* Top band */}
      <div className="px-5 pt-5 pb-4 flex items-start justify-between" style={{ background: 'rgba(14,31,58,0.8)' }}>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${r.iconColor}18`, border: `1px solid ${r.iconColor}40` }}>
            <Icon size={16} style={{ color: r.iconColor }} />
          </div>
          <div>
            <div className="text-xs font-black text-white/80 leading-none">{r.tag}</div>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={9} style={{ color: 'rgba(245,158,11,0.6)' }} />
              <span className="text-2xs text-white/40">{r.location}</span>
            </div>
          </div>
        </div>
        {/* Percentage badge — spring pop */}
        <motion.div
          initial={{ scale: 0, rotate: -15 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 16, delay: r.delay + 0.6 }}
          className="px-2.5 py-1 rounded-full text-xs font-black text-navy-900 flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #D97706, #FBBF24)' }}
        >
          +{increase}
        </motion.div>
      </div>

      {/* Numbers */}
      <div className="px-5 py-5" style={{ background: 'linear-gradient(135deg, rgba(7,18,32,1), rgba(11,24,38,1))' }}>
        <div className="flex items-center justify-between gap-3">
          <div className="text-center flex-1">
            <div className="text-2xs text-white/35 font-semibold uppercase tracking-wider mb-1.5">Insurer Offered</div>
            <motion.div
              className="text-xl sm:text-2xl font-black line-through"
              style={{ color: 'rgba(255,100,100,0.6)' }}
            >
              {fmt(before)}
            </motion.div>
          </div>

          {/* Animated arrow */}
          <motion.div
            animate={{ x: [0, 5, 0], scale: hovered ? 1.3 : 1 }}
            transition={{ x: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }, scale: { duration: 0.3 } }}
          >
            <ArrowRight size={22} style={{ color: '#F59E0B', filter: 'drop-shadow(0 0 6px rgba(245,158,11,0.6))' }} />
          </motion.div>

          <div className="text-center flex-1">
            <div className="text-2xs text-white/35 font-semibold uppercase tracking-wider mb-1.5">We Recovered</div>
            <motion.div
              className="text-2xl sm:text-3xl font-black"
              style={{ color: '#F59E0B', textShadow: hovered ? '0 0 20px rgba(245,158,11,0.4)' : 'none', transition: 'text-shadow 0.3s' }}
            >
              {fmt(after)}
            </motion.div>
          </div>
        </div>

        {/* Dual progress bars */}
        <div className="mt-5 space-y-2">
          <div className="flex items-center gap-2">
            <div className="text-2xs text-white/30 w-16 text-right">Insurer</div>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div className="h-full rounded-full"
                style={{ background: 'rgba(255,100,100,0.5)' }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${Math.max(2, (r.beforeRaw / r.afterRaw) * 100)}%` } : {}}
                transition={{ duration: 1.5, delay: r.delay + 0.7, ease: 'easeOut' }} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-2xs text-white/30 w-16 text-right">Ours</div>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #D97706, #FBBF24)' }}
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 1.8, delay: r.delay + 0.9, ease: 'easeOut' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 text-2xs text-white/40 leading-relaxed" style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        {r.desc}
      </div>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function ResultsShowcase() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '0px 0px -120px 0px' })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  // Aggregate counters
  const totalBefore = useCountUp(TOTAL_BEFORE, inView, 2000, 200)
  const totalAfter  = useCountUp(TOTAL_AFTER,  inView, 2500, 400)

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden" style={{ background: '#0A1E3C' }}>

      {/* Cross-hatch */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      {/* Parallax orb */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)' }} />
      </motion.div>

      <div className="container-site relative z-10">

        {/* Headline */}
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8 }}>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
            Real Settlements, <span style={{ color: '#F59E0B' }}>Real Results</span>
          </h2>
          <p className="text-white/45 text-sm max-w-lg mx-auto">
            Every number below is a real outcome. Real damage. Real insurer. Real recovery.
          </p>
        </motion.div>


        {/* 2×2 card grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          {RESULTS.map((r, i) => (
            <ResultCard key={i} r={r} inView={inView} idx={i} />
          ))}
        </div>

        <motion.p className="text-center text-2xs text-white/25 max-w-2xl mx-auto"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }}>
          *Results vary by claim complexity, damage type, documentation, and insurer. Past outcomes do not guarantee future results.
          According to the OPPAGA, public adjusters achieve a 747% average settlement increase vs direct insurer offers.
        </motion.p>
      </div>
    </section>
  )
}
