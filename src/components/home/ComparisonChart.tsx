'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

// ── Data ──────────────────────────────────────────────────────────────────────
const CHARTS = [
  {
    label: 'Residential Claim',
    without: 14129,
    with: 105544,   // $14,129 × 7.47
    tag: 'OPPAGA Study · Median Residential Payment',
  },
  {
    label: 'Commercial Claim',
    without: 349462,
    with: 2610481,  // $349,462 × 7.47
    tag: 'OPPAGA Study · Median Commercial Payment',
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────
function useCountUp(target: number, active: boolean, duration = 1800, delay = 0) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    const t = setTimeout(() => {
      let v = 0
      const step = target / (duration / 16)
      const id = setInterval(() => {
        v += step
        if (v >= target) { setVal(target); clearInterval(id) }
        else setVal(Math.floor(v))
      }, 16)
      return () => clearInterval(id)
    }, delay)
    return () => clearTimeout(t)
  }, [active, target, duration, delay])
  return val
}

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  return `$${n.toLocaleString()}`
}

// ── Single chart panel ────────────────────────────────────────────────────────
function Chart({ data, inView, delay, progress }: { data: typeof CHARTS[0]; inView: boolean; delay: number; progress: any }) {
  const BAR_H = 240
  const withoutH = Math.max(52, BAR_H * (data.without / data.with))
  // "With PA" bar height driven by scroll progress
  const withBarH = useTransform(progress, [0, 1], [0, BAR_H])
  const withBarHSpring = useSpring(withBarH, { stiffness: 50, damping: 15 })

  const withoutVal = useCountUp(data.without, inView, 1400, delay + 300)
  const withVal    = useCountUp(data.with,    inView, 1800, delay + 500)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex-1 rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(245,158,11,0.2)' }}
    >
      {/* Panel header */}
      <div className="px-6 pt-5 pb-4 flex items-center justify-between gap-4"
        style={{ background: 'rgba(245,158,11,0.07)', borderBottom: '1px solid rgba(245,158,11,0.12)' }}>
        <div className="min-w-0">
          <div className="text-xs font-black tracking-widest uppercase mb-0.5" style={{ color: '#F59E0B' }}>
            {data.label}
          </div>
          <div className="text-2xs text-white/40 truncate">{data.tag}</div>
        </div>
        <motion.div
          className="text-xl font-black flex-shrink-0"
          style={{ color: '#F59E0B', textShadow: '0 0 16px rgba(245,158,11,0.4)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.9, duration: 0.5 }}
        >
          {fmt(withVal)}
        </motion.div>
      </div>

      {/* Chart area */}
      <div className="px-6 pb-6 pt-4" style={{ background: 'rgba(7,18,32,0.6)' }}>
        {/* Bars */}
        <div className="flex items-end justify-center gap-8" style={{ height: BAR_H + 60 }}>

          {/* Without PA */}
          <div className="flex flex-col items-center gap-2">
            {/* Dollar label */}
            <motion.div
              className="text-sm font-black"
              style={{ color: 'rgba(255,255,255,0.45)' }}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: delay + 0.6, duration: 0.5 }}
            >
              {fmt(withoutVal)}
            </motion.div>

            {/* Bar */}
            <div className="relative flex items-end" style={{ height: BAR_H }}>
              <motion.div
                className="w-24 rounded-t-xl"
                style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }}
                initial={{ height: 0 }}
                animate={inView ? { height: withoutH } : {}}
                transition={{ duration: 1.0, delay: delay + 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="text-2xs text-white/40 text-center font-medium leading-tight mt-1">
              Without a<br />Public Adjuster
            </div>
          </div>

          {/* With PA */}
          <div className="flex flex-col items-center gap-2">
            {/* Upward arrows */}
            <motion.div
              className="flex flex-col items-center gap-0.5"
              initial={{ opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: delay + 1.1, duration: 0.5 }}
            >
              <ArrowUp size={14} style={{ color: '#F59E0B', opacity: 0.5 }} />
              <ArrowUp size={18} style={{ color: '#F59E0B' }} />
            </motion.div>

            {/* Bar — height driven by scroll progress */}
            <div className="relative flex items-end" style={{ height: BAR_H }}>
              <motion.div
                className="w-24 rounded-t-xl relative overflow-hidden"
                style={{
                  height: withBarHSpring,
                  background: 'linear-gradient(180deg, #FBBF24 0%, #D97706 100%)',
                  boxShadow: '0 0 30px rgba(245,158,11,0.35)',
                }}
              >
                {/* Shine overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 40%)' }} />
              </motion.div>
            </div>

            <div className="text-2xs text-white/60 text-center font-semibold leading-tight mt-1" style={{ color: 'rgba(245,158,11,0.8)' }}>
              With a<br />Public Adjuster
            </div>
          </div>
        </div>

        {/* Multiplier callout */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 1.3, duration: 0.5, type: 'spring', stiffness: 200 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black text-navy-900"
            style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
            747% more with a public adjuster
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function ComparisonChart() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -120px 0px' })

  // Scroll-driven progress through this section
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'center 0.4'] })
  const rawProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
  const progress = useSpring(rawProgress, { stiffness: 60, damping: 18 })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden" style={{ background: '#0A1E3C' }}>

      {/* Cross-hatch */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      <div className="container-site relative z-10">

        {/* Headline */}
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8 }}>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
            The Difference a Public Adjuster{' '}
            <span style={{ color: '#F59E0B' }}>Makes</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm">
            Side-by-side settlement outcomes — with and without professional representation.
          </p>
        </motion.div>

        {/* Two charts */}
        <div className="flex flex-col md:flex-row gap-6 max-w-3xl mx-auto mb-8">
          {CHARTS.map((chart, i) => (
            <Chart key={i} data={chart} inView={inView} delay={i * 0.2} progress={progress} />
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-2xs max-w-lg mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.3)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
        >
          *According to the OPPAGA, public adjusters can achieve a settlement increase of 747%, on average, compared to what your insurance company is willing to offer if you settle directly. Figures shown are real client outcomes. Individual results vary.
        </motion.p>
      </div>
    </section>
  )
}
