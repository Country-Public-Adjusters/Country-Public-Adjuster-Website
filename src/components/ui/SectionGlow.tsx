'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionGlow({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-12%' })

  return (
    <div ref={ref} className="relative">
      {/* Sweep beam — travels top to bottom once when section enters view */}
      <motion.div
        className="absolute left-0 right-0 pointer-events-none z-10"
        initial={{ top: '-5%', opacity: 0 }}
        animate={inView ? { top: '105%', opacity: [0, 0.5, 0] } : { top: '-5%', opacity: 0 }}
        transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.1 }}
        style={{
          height: '80px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(245,158,11,0.06) 50%, transparent 100%)',
        }}
      />

      {/* Ambient inner glow only — no border lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        animate={inView
          ? { boxShadow: 'inset 0 0 140px rgba(245,158,11,0.04)' }
          : { boxShadow: 'inset 0 0 0px rgba(245,158,11,0)' }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {children}
    </div>
  )
}
