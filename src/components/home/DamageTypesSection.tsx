'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'

const DAMAGE_TYPES = [
  'Storm Damage', 'Hurricane Damage', 'Wind Damage', 'Hail Damage',
  'Water Damage', 'Roof Damage', 'Fire Damage', 'Smoke & Soot Damage',
  'Fallen Tree Damage', 'Structural Damage', 'Flood Damage', 'Lightning Damage',
  'Mold (Secondary)', 'HVAC Contamination', 'Personal Property Loss', 'Business Interruption',
]

const PROPERTY_TYPES = [
  'Single-Family Homes', 'Condominiums', 'Townhomes', 'Rental Properties',
  'Multi-Unit Apartments', 'Commercial Buildings', 'Retail Properties', 'Office Buildings',
  'Warehouses', 'Industrial Properties', 'Hotels & Hospitality', 'Mixed-Use Properties',
]


function PillGroup({ items, delay = 0 }: { items: string[]; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  return (
    <div ref={ref} className="flex flex-wrap gap-3">
      {items.map((label, i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.75, y: 20, filter: 'blur(8px)' }}
          animate={inView ? { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.5, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.08, y: -2 }}
          className="inline-block px-4 py-2 rounded-full text-sm font-semibold cursor-default"
          style={{
            color: '#334155',
            background: '#F1F5F9',
            border: '1px solid rgba(0,0,0,0.08)',
            transition: 'border-color 0.2s, box-shadow 0.2s, color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(217,119,6,0.6)'
            el.style.boxShadow = '0 0 16px rgba(217,119,6,0.15)'
            el.style.color = '#92400E'
            el.style.background = '#FEF3C7'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLElement
            el.style.borderColor = 'rgba(0,0,0,0.08)'
            el.style.boxShadow = 'none'
            el.style.color = '#334155'
            el.style.background = '#F1F5F9'
          }}
        >
          {label}
        </motion.span>
      ))}
    </div>
  )
}

export default function DamageTypesSection() {
  return (
    <section id="property-types" style={{ background: '#FFFFFF', scrollMarginTop: '80px' }} className="py-20 relative">
      {/* Cross-hatch */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(11,24,38,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,24,38,0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }} />

      <div className="container-site space-y-16 relative z-10">

        {/* Damage types */}
        <div>
          <Reveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-black mb-2" style={{ color: '#0D2545' }}>
              Damage Types <span style={{ color: '#F59E0B' }}>We Handle</span>
            </h2>
            <p className="text-slate-500 mb-6 text-sm">Every type of property damage claim, fully covered.</p>
          </Reveal>
          <PillGroup items={DAMAGE_TYPES} />
        </div>

        {/* Property types */}
        <div>
          <Reveal direction="left" delay={0.05}>
            <h2 className="text-3xl sm:text-4xl font-black mb-2" style={{ color: '#0D2545' }}>
              Property & Business <span style={{ color: '#F59E0B' }}>Types</span>
            </h2>
            <p className="text-slate-500 mb-6 text-sm">Residential and commercial — we fight for every property owner.</p>
          </Reveal>
          <PillGroup items={PROPERTY_TYPES} delay={0.05} />
        </div>


      </div>
    </section>
  )
}
