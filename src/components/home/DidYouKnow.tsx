'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const FACTS = [
  { text: 'An incorrect statement can ruin your entire claim', stat: '!', size: 1 },
  { text: 'Hidden damage can silently cost your claim greatly', stat: '$', size: 1.1 },
  { text: 'A properly filed claim can consist of HUNDREDs of line items', stat: '100+', size: 0.95 },
  { text: 'Your insurance adjuster is trained to represent THEM — not you', stat: '⚖', size: 1.05 },
  { text: 'Insurance pays on what is PROVEN, not what occurred', stat: '≠', size: 0.9 },
  { text: 'Most policies cover WAY more than just repairs', stat: '+', size: 1.1 },
  { text: 'Missed damage can arise months after your claim is closed', stat: '⏱', size: 1 },
  { text: "It's never too late to hire us — even after payment or denial", stat: '✓', size: 1.15 },
]

export default function DidYouKnow() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([])
  const inView = useInView(sectionRef, { once: true, margin: '0px 0px -120px 0px' })
  const [expanded, setExpanded] = useState<number | null>(null)

  // GSAP floating per bubble
  useEffect(() => {
    import('gsap').then(({ gsap }) => {
      bubbleRefs.current.forEach((el, i) => {
        if (!el) return
        const inner = el.querySelector('.bubble-inner') as HTMLElement
        if (!inner) return
        gsap.to(inner, {
          y: gsap.utils.random(-18, 18),
          x: gsap.utils.random(-10, 10),
          rotation: gsap.utils.random(-4, 4),
          duration: gsap.utils.random(4, 8),
          repeat: -1,
          yoyo: true,
          delay: i * 0.45,
          ease: 'sine.inOut',
        })
      })
    })
  }, [])

  // Mouse repulsion
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const onMove = (e: MouseEvent) => {
      bubbleRefs.current.forEach(el => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 180
        const wrapper = el.querySelector('.bubble-repel') as HTMLElement
        if (!wrapper) return
        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 28
          const angle = Math.atan2(dy, dx)
          const px = -Math.cos(angle) * force
          const py = -Math.sin(angle) * force
          wrapper.style.transform = `translate(${px}px, ${py}px)`
        } else {
          wrapper.style.transform = 'translate(0, 0)'
        }
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden" style={{ background: '#0A1E3C' }}>

      {/* Cross-hatch grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }} />

      {/* Central ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)' }} />

      {/* Slowly rotating orbit rings */}
      {[900, 700, 500].map((size, i) => (
        <div key={i}
          className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
          style={{
            width: size, height: size,
            border: `1px solid rgba(245,158,11,${0.04 + i * 0.02})`,
            marginLeft: -size / 2, marginTop: -size / 2,
            animation: `spin-orbit ${35 + i * 10}s linear ${i % 2 === 0 ? 'normal' : 'reverse'} infinite`,
          }} />
      ))}

      <div className="container-site relative z-10">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3">
            DID YOU <span style={{ color: '#F59E0B' }}>KNOW?</span>
          </h2>
          <p className="text-white/40 max-w-sm mx-auto text-sm">Hover or click a bubble to explore. Most property owners find this out too late.</p>
        </motion.div>

        {/* Floating bubble grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {FACTS.map((fact, i) => (
            <motion.div
              key={i}
              ref={el => { bubbleRefs.current[i] = el }}
              initial={{ opacity: 0, scale: 0, filter: 'blur(16px)' }}
              whileInView={{ opacity: 1, scale: fact.size, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.08 * i, type: 'spring', stiffness: 200, damping: 18 }}
              className="relative aspect-square"
            >
              {/* Mouse repulsion wrapper */}
              <div className="bubble-repel w-full h-full" style={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)' }}>
                {/* Floating wrapper (GSAP target) */}
                <div className="bubble-inner w-full h-full relative">

                  {/* Outer pulsing rings */}
                  <motion.div className="absolute inset-[-12px] rounded-full pointer-events-none"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.4, 0.15] }}
                    transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                    style={{ border: '1px solid rgba(245,158,11,0.3)' }} />
                  <motion.div className="absolute inset-[-24px] rounded-full pointer-events-none"
                    animate={{ scale: [1, 1.06, 1], opacity: [0.08, 0.2, 0.08] }}
                    transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 + 1 }}
                    style={{ border: '1px solid rgba(245,158,11,0.2)' }} />

                  {/* Main clickable bubble */}
                  <motion.button
                    className="absolute inset-0 rounded-full flex flex-col items-center justify-center p-5 text-center cursor-pointer w-full"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: expanded === i
                        ? 'radial-gradient(circle at 40% 35%, rgba(245,158,11,0.25), rgba(245,158,11,0.08))'
                        : 'radial-gradient(circle at 35% 30%, rgba(245,158,11,0.1), rgba(245,158,11,0.03))',
                      border: expanded === i ? '2px solid rgba(245,158,11,0.7)' : '2px solid rgba(245,158,11,0.25)',
                      boxShadow: expanded === i ? '0 0 40px rgba(245,158,11,0.2), inset 0 0 30px rgba(245,158,11,0.05)' : 'none',
                      transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                    }}
                    onMouseEnter={e => {
                      if (expanded !== i) {
                        const el = e.currentTarget as HTMLElement
                        el.style.boxShadow = '0 0 35px rgba(245,158,11,0.18)'
                        el.style.borderColor = 'rgba(245,158,11,0.6)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (expanded !== i) {
                        const el = e.currentTarget as HTMLElement
                        el.style.boxShadow = 'none'
                        el.style.borderColor = 'rgba(245,158,11,0.25)'
                      }
                    }}
                  >
                    {/* Stat */}
                    <motion.div
                      className="text-sm font-black mb-2 px-2.5 py-0.5 rounded-full"
                      style={{ background: 'rgba(245,158,11,0.2)', color: '#F59E0B' }}
                      animate={{ scale: expanded === i ? 1.15 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {fact.stat}
                    </motion.div>

                    <p className="text-xs sm:text-sm font-semibold leading-snug" style={{ color: expanded === i ? 'white' : 'rgba(255,255,255,0.8)' }}>
                      {fact.text}
                    </p>

                    {/* Click hint */}
                    {expanded !== i && (
                      <motion.div className="absolute bottom-3 text-2xs text-white/20 font-medium"
                        animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2.5, repeat: Infinity }}>
                        tap
                      </motion.div>
                    )}

                    {/* Expanded glow inner ring */}
                    {expanded === i && (
                      <motion.div className="absolute inset-2 rounded-full pointer-events-none"
                        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                        style={{ border: '1px solid rgba(245,158,11,0.3)' }} />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTAs */}
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}>
          <a href="tel:18883975420"
            className="group px-8 py-4 rounded-xl font-bold text-navy-900 flex items-center gap-2 relative overflow-hidden transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }} />
            Contact Us Right Away! <ArrowRight size={16} />
          </a>
          <div className="px-8 py-4 rounded-xl font-bold text-white/70 text-center"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
            Zero Out of Pocket Cost!
          </div>
          <a href="#claim-form"
            className="group px-8 py-4 rounded-xl font-bold text-white flex items-center gap-2 relative overflow-hidden transition-all hover:scale-105"
            style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)' }}>
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.15), transparent)' }} />
            Get Your Free Inspection! <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes spin-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
