'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FadeInViewProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
  threshold?: number
  blur?: boolean
}

export default function FadeInView({
  children,
  className,
  delay = 0,
  duration = 0.85,
  direction = 'up',
  distance = 32,
  once = true,
  threshold = 0.1,
  blur = false,
}: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const directionMap = {
    up:    { y: distance, x: 0 },
    down:  { y: -distance, x: 0 },
    left:  { y: 0, x: distance },
    right: { y: 0, x: -distance },
    none:  { y: 0, x: 0 },
  }

  const initial = {
    opacity: 0,
    filter: blur ? 'blur(8px)' : 'blur(0px)',
    ...directionMap[direction],
  }

  const animate = isInView
    ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }
    : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
