'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Premium custom cursor with dot + spring-delayed ring.
 * - Dot tracks exactly; ring follows with physics delay (luxury feel)
 * - Ring scales + turns gold on interactive elements
 * - Disabled on touch devices and prefers-reduced-motion
 * - Adds `has-custom-cursor` class to <html> for CSS cursor:none
 */
export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  // Dot tracks mouse 1:1
  const mx = useMotionValue(-200)
  const my = useMotionValue(-200)

  // Ring follows with spring physics — the slight lag is the "premium" feel
  const rx = useSpring(mx, { stiffness: 320, damping: 28, mass: 0.45 })
  const ry = useSpring(my, { stiffness: 320, damping: 28, mass: 0.45 })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = navigator.maxTouchPoints > 0
    // Graceful degradation: do nothing on touch or reduced-motion
    if (isTouch || prefersReduced) return

    document.documentElement.classList.add('has-custom-cursor')

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    const checkHover = (e: MouseEvent) => {
      const t = e.target as Element
      const interactive = t.closest(
        'a, button, [role="button"], input, select, textarea, label, summary, [tabindex]:not([tabindex="-1"])'
      )
      setHovering(!!interactive)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mousemove', checkHover, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousemove', checkHover)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [mx, my])

  return (
    <>
      {/* Precise dot — follows mouse exactly, disappears when hovering interactive elements */}
      <motion.span
        id="cpa-cursor-dot"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: mx,
          y: my,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 9999,
          pointerEvents: 'none',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 0 : 1,
          backgroundColor: hovering ? '#F59E0B' : 'rgba(255,255,255,0.92)',
        }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
      />

      {/* Spring ring — slightly delayed, reacts on hover */}
      <motion.span
        id="cpa-cursor-ring"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: rx,
          y: ry,
          translateX: '-50%',
          translateY: '-50%',
          zIndex: 9998,
          pointerEvents: 'none',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.45 : 1,
          borderColor: hovering
            ? 'rgba(245,158,11,0.55)'
            : 'rgba(255,255,255,0.18)',
          backgroundColor: hovering
            ? 'rgba(245,158,11,0.07)'
            : 'transparent',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      />
    </>
  )
}
