'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import ReactCountUp from 'react-countup'

interface CountUpProps {
  end: number
  prefix?: string
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}

export default function CountUp({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2.5,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <span ref={ref} className={className}>
      {isInView ? (
        <ReactCountUp
          start={0}
          end={end}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          duration={duration}
          separator=","
          useEasing
          easingFn={(t, b, c, d) => {
            // Expo ease out
            return c * (-Math.pow(2, (-10 * t) / d) + 1) + b
          }}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  )
}
