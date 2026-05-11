'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Skip touch-only devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.documentElement.classList.add('has-custom-cursor')

    let mouseX = -200, mouseY = -200
    let ringX = -200, ringY = -200
    let raf: number

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    // Dot: follows instantly via left/top
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = mouseX + 'px'
      dot.style.top = mouseY + 'px'
    }

    // Ring: smooth lerp via requestAnimationFrame
    const loop = () => {
      ringX = lerp(ringX, mouseX, 0.14)
      ringY = lerp(ringY, mouseY, 0.14)
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      raf = requestAnimationFrame(loop)
    }

    // Scale ring on interactive elements
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element
      if (el.closest('a, button, [role="button"], input, select, textarea, label')) {
        ring.style.width = '52px'
        ring.style.height = '52px'
        ring.style.borderColor = '#F59E0B'
        ring.style.backgroundColor = 'rgba(245,158,11,0.1)'
        dot.style.opacity = '0'
      } else {
        ring.style.width = '36px'
        ring.style.height = '36px'
        ring.style.borderColor = 'rgba(245,158,11,0.75)'
        ring.style.backgroundColor = 'transparent'
        dot.style.opacity = '1'
      }
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Dot — left/top updated directly, no React state, no re-renders */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#F59E0B',
          boxShadow: '0 0 10px rgba(245,158,11,0.9)',
          pointerEvents: 'none',
          zIndex: 99999,
          left: -200,
          top: -200,
          translate: '-50% -50%',
          transition: 'opacity 0.15s ease',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '2px solid rgba(245,158,11,0.75)',
          backgroundColor: 'transparent',
          pointerEvents: 'none',
          zIndex: 99998,
          left: -200,
          top: -200,
          translate: '-50% -50%',
          transition: 'width 0.18s ease, height 0.18s ease, border-color 0.18s ease, background-color 0.18s ease',
        }}
      />
    </>
  )
}
