'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'scale' | 'blur'
  className?: string
  duration?: number
}

const VARIANTS = {
  up:    { hidden: { opacity: 0, y: 70,   filter: 'blur(12px)', scale: 0.97 }, visible: { opacity: 1, y: 0,  filter: 'blur(0px)', scale: 1 } },
  left:  { hidden: { opacity: 0, x: -60,  filter: 'blur(10px)' },              visible: { opacity: 1, x: 0,  filter: 'blur(0px)' } },
  right: { hidden: { opacity: 0, x: 60,   filter: 'blur(10px)' },              visible: { opacity: 1, x: 0,  filter: 'blur(0px)' } },
  scale: { hidden: { opacity: 0, scale: 0.7, filter: 'blur(14px)' },           visible: { opacity: 1, scale: 1, filter: 'blur(0px)' } },
  blur:  { hidden: { opacity: 0, filter: 'blur(16px)' },                       visible: { opacity: 1, filter: 'blur(0px)' } },
}

export default function Reveal({ children, delay = 0, direction = 'up', className, duration = 0.85 }: RevealProps) {
  const ref = useRef(null)
  // Only trigger when element is 120px inside the viewport — not just peeking
  const inView = useInView(ref, { once: true, margin: '0px 0px -120px 0px' })
  const { hidden, visible } = VARIANTS[direction]

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={inView ? visible : hidden}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
