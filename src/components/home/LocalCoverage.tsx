'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const NASHVILLE_CITIES = [
  { name: 'Nashville', href: '/nashville', primary: true },
  { name: 'Brentwood', href: '/nashville/brentwood' },
  { name: 'Franklin', href: '/nashville/franklin' },
  { name: 'Murfreesboro', href: '/nashville/murfreesboro' },
  { name: 'Hendersonville', href: '/nashville/hendersonville' },
  { name: 'Smyrna', href: '/nashville/smyrna' },
  { name: 'Columbia', href: '/nashville/columbia' },
  { name: 'Gallatin', href: '/nashville/gallatin' },
  { name: 'Lebanon', href: '/nashville/lebanon' },
  { name: 'La Vergne', href: '/nashville/la-vergne' },
]

const FLORIDA_CITIES = [
  { name: 'South Florida', href: '/south-florida', primary: true },
  { name: 'Miami-Dade', href: '/south-florida/miami-dade' },
  { name: 'Broward County', href: '/south-florida/broward' },
  { name: 'Palm Beach', href: '/south-florida/palm-beach' },
  { name: 'Fort Lauderdale', href: '/south-florida/fort-lauderdale' },
  { name: 'Hollywood', href: '/south-florida/hollywood' },
  { name: 'Pompano Beach', href: '/south-florida/pompano-beach' },
  { name: 'Boca Raton', href: '/south-florida/boca-raton' },
  { name: 'Coral Springs', href: '/south-florida/coral-springs' },
  { name: 'Deerfield Beach', href: '/south-florida/deerfield-beach' },
]

interface RegionCardProps {
  title: string
  subtitle: string
  cities: { name: string; href: string; primary?: boolean }[]
  context: string
  href: string
  delay: number
  isInView: boolean
}

function RegionCard({ title, subtitle, cities, context, href, delay, isInView }: RegionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="card-dark p-6 lg:p-8 flex flex-col"
    >
      {/* Region header */}
      <div className="flex items-start gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: 'rgba(245,158,11,0.12)',
            border: '1px solid rgba(245,158,11,0.25)',
          }}
        >
          <MapPin size={16} className="text-gold-400" />
        </div>
        <div>
          <h3 className="font-bold text-white text-lg">{title}</h3>
          <p className="text-xs text-white/45 mt-0.5">{subtitle}</p>
        </div>
      </div>

      {/* Context */}
      <p className="text-sm text-white/55 leading-relaxed mb-6">{context}</p>

      {/* City chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cities.map((city) => (
          <Link
            key={city.name}
            href={city.href}
            className={`
              px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200
              ${city.primary
                ? 'bg-gold-500/20 border border-gold-500/40 text-gold-300 hover:bg-gold-500/30'
                : 'bg-white/[0.05] border border-white/[0.06] text-white/55 hover:text-white/80 hover:bg-white/[0.08]'
              }
            `}
          >
            {city.name}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gold-400
                     hover:text-gold-300 transition-colors duration-200 group"
        >
          View {title} service area
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-300"
          />
        </Link>
      </div>
    </motion.div>
  )
}

export default function LocalCoverage() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      className="relative bg-navy-900 section-padding"
    >
      {/* Top curve from cream */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg"
             preserveAspectRatio="none" className="w-full block" style={{ height: '50px' }}>
          <path d="M0,0 C400,60 1040,60 1440,0 L1440,0 L0,0 Z" fill="#FEFDF8" />
        </svg>
      </div>

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-4 block"
          >
            Service Areas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-heading-dark mb-5"
          >
            Nashville &amp; South Florida's{' '}
            <span className="text-gradient-gold">public adjuster</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-sub-dark mx-auto"
          >
            Deep local knowledge of storm patterns, building codes, and insurer tactics
            in each of our service markets.
          </motion.p>
        </div>

        {/* Region cards */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
          <RegionCard
            title="Nashville, Tennessee"
            subtitle="Middle Tennessee · Davidson, Williamson, Rutherford, Sumner, Wilson Counties"
            cities={NASHVILLE_CITIES}
            context="Nashville and Middle Tennessee experience heavy hail seasons, tornado outbreaks, and severe wind events. We know the local insurer response patterns, contractor costs, and claim timeline expectations for this market."
            href="/nashville"
            delay={0.2}
            isInView={isInView}
          />
          <RegionCard
            title="South Florida"
            subtitle="Miami-Dade, Broward, Palm Beach Counties"
            cities={FLORIDA_CITIES}
            context="Hurricane country. South Florida homeowners and commercial property owners face some of the most complex insurance claims in the US. We've handled claims through multiple major hurricane events and know what it takes to fight for full recovery."
            href="/south-florida"
            delay={0.3}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  )
}
