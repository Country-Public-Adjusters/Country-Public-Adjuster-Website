'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Clock, Search, ArrowRight, Award, Cpu, Shield, User, DollarSign, TrendingUp } from 'lucide-react'

const POINTS = [
  { icon: Clock, text: 'We spend up to HUNDREDS of hours on your claim', label: 'Time Invested' },
  { icon: Search, text: 'We find & document all damage the insurance company missed', label: 'Damage Discovery' },
  { icon: ArrowRight, text: 'We handle the ENTIRE process from inspection to Payout', label: 'Full Coverage' },
  { icon: Award, text: 'We are HIGHLY trained in finding the hard-to-find damage', label: 'Expert Detection' },
  { icon: Cpu, text: 'We use top technology and deep industry knowledge', label: 'AI + Expertise' },
  { icon: Shield, text: 'ZERO Stress! We FIGHT for you while you focus on your life.', label: 'Stress-Free' },
  { icon: User, text: 'Your Claim Will Be PERSONALLY Handled By One Of Our Founders!', label: 'Founder Direct' },
  { icon: DollarSign, text: 'ZERO Risk. ZERO Out of Pocket Cost. Get Paid What You Deserve!', label: 'No Risk' },
  { icon: TrendingUp, text: 'Thousands of successful claims and millions recovered — our track record speaks for itself.', label: 'Proven Results' },
]

export default function HowWeWin() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.05 })
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden" style={{ background: '#FFFFFF' }}>

      {/* Dot grid — dark on white */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{
        backgroundImage: 'radial-gradient(circle, rgba(11,24,38,0.12) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
      }} />

      {/* Parallax glow */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)' }} />
      </motion.div>

      <div className="container-site relative z-10">
        <motion.div className="text-center mb-4"
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <h2 className="text-4xl sm:text-5xl font-black" style={{ color: '#0D2545' }}>
            THIS IS HOW <span style={{ color: '#D97706' }}>WE WIN!</span>
          </h2>
        </motion.div>

        <motion.div className="w-24 h-1 rounded-full mx-auto mb-14"
          style={{ background: 'linear-gradient(90deg, #D97706, #F59E0B)' }}
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POINTS.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 80, filter: 'blur(14px)', scale: 0.92 }}
                animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-6 flex items-start gap-4 relative overflow-hidden group cursor-default"
                style={{
                  background: '#F8FAFC',
                  border: '1px solid rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(-6px)'
                  el.style.boxShadow = '0 20px 50px rgba(0,0,0,0.12), 0 0 30px rgba(245,158,11,0.1)'
                  el.style.borderColor = 'rgba(217,119,6,0.5)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                  el.style.borderColor = 'rgba(0,0,0,0.08)'
                }}
              >
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.06), transparent)' }} />

                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: 'rgba(217,119,6,0.12)' }}>
                  <Icon size={18} style={{ color: '#D97706' }} />
                </div>

                <div className="flex-1">
                  <div className="text-2xs font-black tracking-wider mb-1.5" style={{ color: '#D97706' }}>{p.label}</div>
                  <p className="font-bold leading-snug text-sm" style={{ color: '#0D2545' }}>{p.text}</p>
                </div>

                <div className="absolute bottom-3 right-4 text-5xl font-black select-none" style={{ color: 'rgba(11,24,38,0.05)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
