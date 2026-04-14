'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealTextProps {
  children: string
  className?: string
  delay?: number
  stagger?: number
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  splitBy?: 'word' | 'line'
}

/**
 * Animates text by splitting into words or lines,
 * each revealing with a staggered clip-path animation.
 */
export default function RevealText({
  children,
  className,
  delay = 0,
  stagger = 0.04,
  tag: Tag = 'h2',
  splitBy = 'word',
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const units = splitBy === 'word'
    ? children.split(' ')
    : children.split('\n')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: {
      y: '110%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    // @ts-expect-error — polymorphic tag
    <Tag ref={ref} className={className} aria-label={children}>
      <motion.span
        className="flex flex-wrap gap-x-[0.25em]"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        aria-hidden="true"
      >
        {units.map((unit, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span className="inline-block" variants={wordVariants}>
              {unit}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
