'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

const STATES = [
  {
    state: 'Tennessee',
    hub: 'Nashville Metro',
    hubLink: '/nashville',
    hubDesc: 'Our Nashville team covers all of Middle Tennessee, handling storm, hail, wind, and water damage claims for residential and commercial owners across the region.',
    regions: ['Middle Tennessee', 'East Tennessee', 'West Tennessee', 'Upper Cumberland', 'Tri-Cities Area', 'Chattanooga Area', 'Memphis Area', 'Clarksville'],
  },
  {
    state: 'Florida',
    hub: 'South Florida',
    hubLink: '/south-florida',
    hubDesc: 'Our South Florida team covers Miami-Dade, Broward, and Palm Beach counties, specialising in hurricane, wind, and water damage claims across the tri-county area and beyond.',
    regions: ['Miami-Dade County', 'Broward County', 'Palm Beach County', 'Central Florida', 'Tampa Bay Area', 'Jacksonville Area', 'Southwest Florida', 'Florida Panhandle'],
  },
  {
    state: 'Georgia',
    hub: 'Atlanta Metro',
    hubLink: '/georgia',
    hubDesc: 'Our Georgia team is based in the Atlanta metro and handles storm, wind, hail, and property damage claims across the entire state of Georgia.',
    regions: ['Atlanta Metro', 'Savannah & Coastal GA', 'Augusta Area', 'Macon Area', 'Columbus Area', 'North Georgia', 'Albany Area', 'Rome & NW Georgia'],
  },
  {
    state: 'New Jersey',
    hub: 'Northern New Jersey',
    hubLink: '/new-jersey',
    hubDesc: 'Our New Jersey team covers the full state — from Bergen County to Cape May — handling wind, flood, nor\'easter, and storm damage claims for homeowners and commercial owners.',
    regions: ['Bergen & Essex County', 'Hudson County', 'Middlesex County', 'Monmouth & Shore Area', 'Morris & Sussex County', 'South Jersey / Camden', 'Atlantic City Area', 'Cape May Area'],
  },
]

function RegionPill({ label }: { label: string }) {
  return (
    <span
      className="inline-block px-3 py-1.5 rounded-full text-sm font-medium"
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255,0.65)',
      }}
    >
      {label}
    </span>
  )
}

function StateBlock({ data, inView, delay }: { data: typeof STATES[0]; inView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Hub card */}
      <div className="rounded-2xl p-5 mb-4"
        style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.25)' }}>
        <div className="flex items-start gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)' }}>
            <MapPin size={14} style={{ color: '#F59E0B' }} />
          </div>
          <div>
            <div className="text-[10px] font-black tracking-widest uppercase mb-0.5" style={{ color: '#F59E0B' }}>
              Primary Hub · {data.state}
            </div>
            <div className="text-lg font-black text-white">{data.hub}</div>
          </div>
        </div>
        <p className="text-xs text-white/55 leading-relaxed mb-3">{data.hubDesc}</p>
        <Link href={data.hubLink}
          className="inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-2.5"
          style={{ color: '#F59E0B' }}>
          View {data.state} coverage <ArrowRight size={11} />
        </Link>
      </div>

      {/* Regions */}
      <div className="flex items-center gap-2 mb-3">
        <div className="text-[10px] font-black tracking-widest uppercase text-white/35">Regions We Serve</div>
        <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />
      </div>
      <div className="flex flex-wrap gap-2">
        {data.regions.map(r => <RegionPill key={r} label={r} />)}
      </div>
    </motion.div>
  )
}

export default function ServiceAreas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  return (
    <section ref={ref} className="py-20 relative" style={{ background: '#0A1E3C' }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      <div className="container-site relative z-10">

        <Reveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
            style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}>
            <MapPin size={11} /> SERVICE AREAS
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Where We <span style={{ color: '#F59E0B' }}>Fight For You</span>
          </h2>
          <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
            We operate across <strong className="text-white">Tennessee, Florida, Georgia, and New Jersey</strong> — but we handle claims
            across the entire state in each region. If you're in any of these states, we can help.
          </p>
        </Reveal>

        {/* 2x2 state grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {STATES.map((s, i) => (
            <StateBlock key={s.state} data={s} inView={inView} delay={0.1 + i * 0.1} />
          ))}
        </div>

        {/* Don't see your state callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div>
            <div className="font-black text-white text-lg mb-1">Don't see your area?</div>
            <p className="text-sm text-white/55 leading-relaxed max-w-md">
              We handle claims statewide across Tennessee, Florida, Georgia, and New Jersey. Call us — we almost certainly cover your area.
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

        <motion.p
          className="text-center text-2xs mt-8 leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.25)' }}
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 }}
        >
          Country Public Adjusters is licensed in Tennessee, Florida, Georgia, and New Jersey. We serve property owners across all four states
          for storm damage, hurricane damage, hail, wind, water, fire, and all major property damage insurance claims.
        </motion.p>
      </div>
    </section>
  )
}
