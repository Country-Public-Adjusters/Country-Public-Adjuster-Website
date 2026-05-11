'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CheckCircle, Shield, Star, Users, DollarSign, Clock } from 'lucide-react'

const TEAM = [
  {
    initial: 'M',
    name: 'Manny',
    title: 'Co-Founder & Senior Adjuster',
    body: "Two decades mastering insurance claim adjustment across Tennessee and Florida. Manny's deep knowledge of policy language and claim documentation consistently maximises recoveries for storm-damaged properties.",
    expertise: ['Policy Language', 'Storm Claims', 'Claim Documentation'],
  },
  {
    initial: 'E',
    name: 'Efraim',
    title: 'Co-Founder & Client Advocate',
    body: 'A career defined by client advocacy and complex negotiations — plus a unique background as a licensed therapist. Efraim guides property owners through the claim process with both expertise and genuine compassion.',
    expertise: ['Client Advocacy', 'Negotiations', 'Complex Claims'],
  },
  {
    initial: 'D',
    name: 'David',
    title: 'Co-Founder & Negotiations Lead',
    body: 'A powerful background in business, finance, and high-stakes negotiations. David ensures every claim is fought with the financial acumen and strategic leverage needed to win optimal settlements.',
    expertise: ['High-Stakes Negotiations', 'Commercial Claims', 'Settlement Strategy'],
  },
]

const STATS = [
  { num: '35+', label: 'Years Combined Experience', icon: Star },
  { num: '20+', label: 'Major Storms Handled', icon: Shield },
  { num: '10×', label: 'Avg. Settlement Increase', icon: DollarSign },
  { num: '$0', label: 'Upfront Cost — Ever', icon: CheckCircle },
]

const VALUES = [
  {
    icon: Shield,
    num: '01',
    title: 'We work for you — not the insurance company',
    body: "The insurer's adjuster works to protect their bottom line. We exist to protect yours.",
  },
  {
    icon: Users,
    num: '02',
    title: 'Founders handle every claim personally',
    body: 'Your case never gets handed off to a junior or a pipeline. A partner is on it from day one.',
  },
  {
    icon: DollarSign,
    num: '03',
    title: 'No win, no fee — ever',
    body: "We are 100% contingency. If we don't get you more, you owe us nothing.",
  },
  {
    icon: Clock,
    num: '04',
    title: 'Transparent at every step',
    body: "We communicate every update, every development — because you deserve to know exactly where your claim stands.",
  },
]

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
      className="text-center p-6 rounded-2xl cursor-default"
      style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}
    >
      <div className="text-4xl font-black mb-1" style={{ color: '#F59E0B' }}>{stat.num}</div>
      <div className="text-sm text-white/60 font-medium">{stat.label}</div>
    </motion.div>
  )
}

function TeamCard({ member, index }: { member: typeof TEAM[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
      className="group relative rounded-2xl p-7 flex flex-col cursor-default overflow-hidden"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1.5px solid rgba(255,255,255,0.1)',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(245,158,11,0.4)'
        el.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(245,158,11,0.15)'
        el.style.background = 'rgba(255,255,255,0.07)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(255,255,255,0.1)'
        el.style.boxShadow = 'none'
        el.style.background = 'rgba(255,255,255,0.04)'
      }}
    >
      {/* Gold top bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(90deg, #D97706, #F59E0B, #FBBF24)' }} />

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-5">
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black text-slate-900 flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          {member.initial}
        </motion.div>
        <div>
          <h3 className="text-lg font-black text-white">{member.name}</h3>
          <div className="text-xs font-bold uppercase tracking-widest" style={{ color: '#F59E0B' }}>{member.title}</div>
        </div>
      </div>

      <p className="text-sm text-white/60 leading-relaxed mb-5 flex-1">{member.body}</p>

      <div className="flex flex-wrap gap-2">
        {member.expertise.map(tag => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-[11px] font-bold"
            style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)', color: '#F59E0B' }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function ValueCard({ v, index, inView }: { v: typeof VALUES[0]; index: number; inView: boolean }) {
  const Icon = v.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { type: 'spring', stiffness: 380, damping: 20 } }}
      className="group relative rounded-3xl p-7 flex gap-5 cursor-default overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: '1.5px solid #E8EDF2',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(245,158,11,0.45)'
        el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.09), 0 0 0 1px rgba(245,158,11,0.12)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = '#E8EDF2'
        el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
      }}
    >
      {/* Sliding gold left accent */}
      <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0"
        style={{ background: 'linear-gradient(180deg, #D97706, #F59E0B)' }} />

      {/* Large faded number */}
      <div className="absolute right-5 top-4 text-6xl font-black pointer-events-none select-none leading-none"
        style={{ color: 'rgba(245,158,11,0.06)' }}>{v.num}</div>

      {/* Icon */}
      <motion.div
        className="flex-shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center mt-0.5"
        style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}
        whileHover={{ scale: 1.12, rotate: -4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <Icon size={18} style={{ color: '#D97706' }} strokeWidth={1.8} />
      </motion.div>

      <div>
        <h3 className="font-black text-slate-900 text-base mb-1.5 leading-snug">{v.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{v.body}</p>
      </div>
    </motion.div>
  )
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <>
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #030D1A 0%, #0D2545 50%, #0A1E3C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)' }} />

        <div className="container-site relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}>
              <Users size={11} /> OUR STORY
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
              We built this firm so property owners{' '}
              <span style={{ color: '#F59E0B' }}>never stand alone</span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
              35+ years of combined expertise. Three founders. One mission: get you paid what your policy truly owes.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-3xl mx-auto">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>


      {/* ── Story ── */}
      <section className="bg-white py-20">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-xs font-black tracking-widest uppercase mb-3 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706' }}>
                How We Started
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">
                Three founders.{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                  One shared purpose.
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
                <p>
                  At Country Public Adjusters, we bring over 35 years of combined expertise in insurance claim advocacy — serving property owners across Tennessee and South Florida. When a storm hits your property — hail on your roof, wind damage to your structure, flooding in your basement — we're the team that stands between you and an insurance company already working against you.
                </p>
                <p>
                  Together, we have faced over 20 major storms — hurricanes, floods, fires, mold, tornadoes, and sinkholes. We've fought for countless property owners who lost everything. We know this process is never just about the money. Our clients need a steady hand during one of the most stressful experiences of their lives — which is why Efraim's background as a licensed therapist allows us to offer not only expert claim guidance but genuine compassionate support.
                </p>
                <p>
                  Across thousands of claims, we have repeatedly achieved settlements 10 times higher than what insurers initially offered. We don't just handle your claim and disappear — we stand by our clients before the storm, during the claim, and long after the settlement check clears.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 px-6 py-5 mb-4"
                style={{ borderColor: '#F59E0B', background: 'linear-gradient(135deg, rgba(245,158,11,0.06), rgba(245,158,11,0.02))' }}>
                <p className="text-slate-800 font-semibold text-base leading-relaxed italic">
                  "We communicate every update, every step of the way — because you deserve to know exactly where your claim stands."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ── Team ── */}
      <section className="py-20 relative" style={{ background: '#0A1E3C' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />

        <div className="container-site relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}>
              <Users size={11} /> THE TEAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Three partners. <span style={{ color: '#F59E0B' }}>One mission.</span>
            </h2>
            <p className="text-white/50 max-w-md mx-auto">
              Every claim is handled personally by a founder — not passed to a junior or sales pipeline.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {TEAM.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>


      {/* ── Values ── */}
      <section ref={valuesRef} className="bg-white py-20">
        <div className="container-site">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-black tracking-widest uppercase mb-3 px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706' }}>
              How We Operate
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What you can expect from us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {VALUES.map((v, i) => (
              <ValueCard key={v.title} v={v} index={i} inView={valuesInView} />
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="py-20" style={{ background: '#0A1E3C' }}>
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Ready to find out what your claim is worth?
            </h2>
            <p className="text-white/50 text-base mb-8 max-w-md mx-auto">
              No upfront cost. No commitment. A founder will personally review your claim.
            </p>
            <Link
              href="/#free-inspection"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-slate-900 text-base transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}
            >
              Get Free Inspection
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

    </>
  )
}
