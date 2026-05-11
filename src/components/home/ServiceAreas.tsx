'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

// ── City data — comprehensive for SEO coverage ─────────────────────────────
const TN_PRIMARY = ['Nashville', 'Brentwood', 'Franklin', 'Murfreesboro', 'Hendersonville']
const TN_SECONDARY = [
  'Smyrna', 'Spring Hill', 'Columbia', 'Clarksville', 'Lebanon',
  'Mount Juliet', 'Gallatin', 'La Vergne', 'Nolensville', 'Dickson',
  'Shelbyville', 'Springfield', 'Goodlettsville', 'White House', 'Portland',
]

const FL_PRIMARY = ['Miami', 'Fort Lauderdale', 'Boca Raton', 'West Palm Beach', 'Coral Gables']
const FL_SECONDARY = [
  'Doral', 'Hialeah', 'Pembroke Pines', 'Hollywood', 'Aventura',
  'Coral Springs', 'Pompano Beach', 'Boynton Beach', 'Delray Beach',
  'Palm Beach Gardens', 'Wellington', 'Plantation', 'Sunrise', 'Miramar',
  'Homestead', 'Kendall', 'Miami Beach', 'North Miami', 'Weston', 'Davie',
  'Hallandale Beach', 'Lauderdale Lakes', 'Margate', 'Coconut Creek',
]

function CityPill({ city, primary = false }: { city: string; primary?: boolean }) {
  return (
    <span
      className="inline-block px-3 py-1.5 rounded-full text-sm font-semibold"
      style={primary ? {
        background: 'rgba(245,158,11,0.15)',
        border: '1px solid rgba(245,158,11,0.4)',
        color: '#F59E0B',
      } : {
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255,0.7)',
      }}
    >
      {city}
    </span>
  )
}

function StateBlock({
  state,
  hubName,
  hubDesc,
  hubLink,
  primary,
  secondary,
  inView,
  delay,
}: {
  state: string
  hubName: string
  hubDesc: string
  hubLink: string
  primary: string[]
  secondary: string[]
  inView: boolean
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hub card */}
      <div className="rounded-2xl p-6 mb-5"
        style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)' }}>
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }}>
            <MapPin size={16} style={{ color: '#F59E0B' }} />
          </div>
          <div>
            <div className="text-xs font-black tracking-widest uppercase mb-1" style={{ color: '#F59E0B' }}>
              Primary Hub
            </div>
            <div className="text-xl font-black text-white">{hubName}</div>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed mb-4">{hubDesc}</p>
        <Link href={hubLink}
          className="inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-2.5"
          style={{ color: '#F59E0B' }}>
          View {state} coverage <ArrowRight size={12} />
        </Link>
      </div>

      {/* All cities header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="text-xs font-black tracking-widest uppercase text-white/40">Serving All Of {state}</div>
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Cities */}
      <div className="flex flex-wrap gap-2">
        {primary.map(c => <CityPill key={c} city={c} primary />)}
        {secondary.map(c => <CityPill key={c} city={c} />)}
      </div>
    </motion.div>
  )
}

// ── Section ────────────────────────────────────────────────────────────────────
export default function ServiceAreas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section ref={ref} className="py-20 relative" style={{ background: '#0A1E3C' }}>

      {/* Cross-hatch */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      <div className="container-site relative z-10">

        {/* Headline */}
        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
            style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}>
            <MapPin size={11} /> SERVICE AREAS
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Where We <span style={{ color: '#F59E0B' }}>Fight For You</span>
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
            Our primary hubs are <strong className="text-white">Nashville, Tennessee</strong> and <strong className="text-white">South Florida</strong> — but we handle claims
            across the entire state of Tennessee and Florida. If you're in either state, we can help.
          </p>
        </Reveal>

        {/* Two state blocks */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <StateBlock
            state="Tennessee"
            hubName="Nashville Metro"
            hubDesc="Our Nashville team covers all of Middle Tennessee, handling storm, hail, wind, and water damage claims for residential and commercial property owners across the region."
            hubLink="/nashville"
            primary={TN_PRIMARY}
            secondary={TN_SECONDARY}
            inView={inView}
            delay={0.1}
          />
          <StateBlock
            state="Florida"
            hubName="South Florida"
            hubDesc="Our South Florida team covers Miami-Dade, Broward, and Palm Beach counties — specialising in hurricane, wind, and water damage claims across the tri-county area and beyond."
            hubLink="/south-florida"
            primary={FL_PRIMARY}
            secondary={FL_SECONDARY}
            inView={inView}
            delay={0.25}
          />
        </div>

        {/* "Don't see your city" callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div>
            <div className="font-black text-white text-lg mb-1">Don't see your city?</div>
            <p className="text-sm text-white/55 leading-relaxed max-w-md">
              We handle claims statewide across Tennessee and Florida. If your property is in either state,
              call us — we almost certainly cover your area.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a href="tel:18883975420"
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-navy-900 transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
              <Phone size={15} /> Call Us
            </a>
          </div>
        </motion.div>

        {/* SEO note */}
        <motion.p
          className="text-center text-2xs mt-8 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.25)' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
        >
          Country Public Adjusters is licensed to practice in Tennessee and Florida. We serve property owners across both states
          for storm damage, hurricane damage, hail, wind, water, fire, and all major property damage insurance claims.
        </motion.p>
      </div>
    </section>
  )
}
