'use client'

import { motion } from 'framer-motion'
import { TrendingUp, MapPin, ArrowRight } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import Link from 'next/link'

const CASE_STUDIES = [
  {
    id: 1,
    tag: 'Hurricane / Wind Damage',
    location: 'South Florida',
    propertyType: 'Residential',
    insurerOffer: 12000,
    settlement: 127000,
    multiplier: '10.6×',
    title: 'Hurricane wind damage — roof, structure, and water intrusion',
    narrative: "The insurer's adjuster documented only cosmetic roof damage and issued an offer of $12,000. Our full inspection revealed structural truss damage, compromised roof decking, water intrusion throughout the attic insulation, and interior damage to three rooms that the insurer's report completely omitted. After comprehensive documentation and negotiation, the final settlement was $127,000 — reflecting full replacement cost including all missed items.",
    result: 'Full replacement coverage secured',
  },
  {
    id: 2,
    tag: 'Water Damage / Flooding',
    location: 'East Nashville, TN',
    propertyType: 'Residential',
    insurerOffer: 8500,
    settlement: 94000,
    multiplier: '11×',
    title: 'Flooding caused foundation moisture, mold, and subfloor damage',
    narrative: "The homeowner filed a water damage claim independently and received an $8,500 offer. They called us before accepting. Our inspection identified foundation moisture intrusion, active mold propagation behind interior walls, compromised subfloor framing, and damaged HVAC components — none of which appeared in the insurer's report. The supplemental claim resulted in a $94,000 settlement.",
    result: 'Mold remediation and full structural repair funded',
  },
  {
    id: 3,
    tag: 'Fire & Smoke Damage',
    location: 'Brentwood, TN',
    propertyType: 'Residential',
    insurerOffer: 15000,
    settlement: 165000,
    multiplier: '11×',
    title: 'Kitchen fire with smoke distributed through HVAC throughout entire home',
    narrative: "The kitchen fire was limited in scope, but smoke was distributed through the entire HVAC system to every room in the house. The insurer's offer addressed only the visible fire damage. We documented contaminated insulation in the attic, ductwork replacement requirements, complete odor remediation for the entire structure, and contents replacement — producing a final settlement of $165,000.",
    result: 'Complete home restoration funded',
  },
  {
    id: 4,
    tag: 'Hail / Roof Damage',
    location: 'Franklin, TN',
    propertyType: 'Residential',
    insurerOffer: 4200,
    settlement: 41000,
    multiplier: '9.8×',
    title: 'Insurer denied full roof replacement after major hail event',
    narrative: "Following a severe hailstorm, the insurer concluded the roof damage was purely cosmetic and offered $4,200 for spot repairs. We documented granule loss patterns, shingle bruising, compromised flashing, and evidence that multiple areas met the threshold for full replacement under the policy terms. The final settlement of $41,000 covered complete roof replacement.",
    result: 'Full roof replacement covered',
  },
  {
    id: 5,
    tag: 'Hurricane Commercial Damage',
    location: 'Miami-Dade, FL',
    propertyType: 'Commercial',
    insurerOffer: 35000,
    settlement: 310000,
    multiplier: '8.9×',
    title: 'Commercial warehouse damage from Hurricane Irma winds',
    narrative: "A commercial property owner received a $35,000 offer on a warehouse that had significant roof panel damage, structural compromise to the loading dock area, damaged inventory, and business interruption losses. Our commercial claim specialist documented all physical damage plus business income loss components, resulting in a $310,000 final settlement.",
    result: 'Full structural and BI losses recovered',
  },
  {
    id: 6,
    tag: 'Commercial Property / Storm',
    location: 'Nashville, TN',
    propertyType: 'Commercial',
    insurerOffer: 80000,
    settlement: 900000,
    multiplier: '11.25×',
    title: 'Commercial property — widespread structural damage and business interruption overlooked',
    narrative: "The insurer's initial offer of $80,000 covered only surface-level repairs to a commercial property hit by severe storms. Our lead negotiator conducted a full structural assessment and identified widespread damage to load-bearing elements, code compliance upgrade requirements triggered by the damage, and significant business interruption losses that the insurer had entirely overlooked. After extensive documentation and negotiation, the final settlement reached $900,000.",
    result: 'Full structural, compliance, and BI losses recovered',
  },
  {
    id: 7,
    tag: 'Wind / Roof Damage',
    location: 'Broward County, FL',
    propertyType: 'Multi-Unit',
    insurerOffer: 22000,
    settlement: 198000,
    multiplier: '9.0×',
    title: 'Multi-unit property with undervalued wind and roof damage across all units',
    narrative: "A duplex owner received a $22,000 offer after high-wind damage. Each unit had independent roof, window, and interior damage that the insurer's single-adjuster visit failed to fully capture. We documented damage by unit and negotiated a final settlement of $198,000 covering full repair to both units.",
    result: 'Full multi-unit repair funded',
  },
]

export default function ResultsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative section-padding overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #030D1A 0%, #0D2545 50%, #0A1E3C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)' }} />

        <div className="container-site text-center relative z-10">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}>
              REAL RESULTS
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
              What we've recovered{' '}
              <span style={{ color: '#F59E0B' }}>for property owners</span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              These are real claim outcomes from Nashville and South Florida.
              Numbers represent actual settlements vs. the insurer's initial position.
              All handled on contingency — no upfront cost.
            </p>
          </FadeInView>
        </div>
      </section>


      {/* ── Cases — white section ── */}
      <section className="bg-white section-padding">
        <div className="container-site max-w-5xl">
          <div className="space-y-4">
            {CASE_STUDIES.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                transition={{ duration: 0.55, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 350, damping: 22 } }}
                className="group relative rounded-3xl p-6 lg:p-8 overflow-hidden cursor-default"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #E8EDF2',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(245,158,11,0.4)'
                  el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.09), 0 0 0 1px rgba(245,158,11,0.1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E8EDF2'
                  el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
                }}
              >
                {/* Gold left bar on hover */}
                <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(180deg, #D97706, #F59E0B)' }} />

                <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-start">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'rgba(14,30,58,0.07)', border: '1px solid rgba(14,30,58,0.12)', color: '#0D2545' }}>
                        {c.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', color: '#64748B' }}>
                        <MapPin size={10} />{c.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: '#F1F5F9', border: '1px solid #E2E8F0', color: '#64748B' }}>
                        {c.propertyType}
                      </span>
                    </div>

                    <h2 className="text-lg font-black text-slate-900 mb-3 leading-snug">{c.title}</h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{c.narrative}</p>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#16a34a' }}>
                      <TrendingUp size={12} />{c.result}
                    </div>
                  </div>

                  {/* Numbers */}
                  <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2 flex-shrink-0 lg:min-w-[140px]">
                    <div className="text-center lg:text-right">
                      <div className="text-xs text-slate-400 uppercase tracking-wide mb-0.5 font-medium">Insurer offer</div>
                      <div className="text-2xl font-black text-red-500/70">
                        ${c.insurerOffer.toLocaleString()}
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 rotate-90 lg:rotate-0" />
                    <div className="text-center lg:text-right">
                      <div className="text-xs text-slate-400 uppercase tracking-wide mb-0.5 font-medium">Final settlement</div>
                      <div className="text-2xl font-black" style={{ color: '#D97706' }}>
                        ${c.settlement.toLocaleString()}
                      </div>
                      <div className="text-xs font-bold mt-0.5" style={{ color: 'rgba(217,119,6,0.7)' }}>{c.multiplier} increase</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm text-slate-400 mb-6">
              All results represent actual claim outcomes. Individual results vary by claim complexity, damage extent, and insurer.
            </p>
            <Link href="/#free-inspection" className="btn-primary-lg inline-flex">
              Get Free Inspection
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

    </>
  )
}
