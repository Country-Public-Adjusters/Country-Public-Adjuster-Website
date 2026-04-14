import type { Metadata } from 'next'
import { TrendingUp, MapPin, ArrowRight } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FinalCTA from '@/components/home/FinalCTA'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'Case Results | Insurance Claim Settlement Outcomes',
  'See real claim settlement outcomes from Country Public Adjusters. Hurricane, hail, wind, and water damage claims settled at 5–11× the insurer\'s initial offer. Nashville & South Florida.',
  '/results'
)

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
    narrative: 'The homeowner filed a water damage claim independently and received an $8,500 offer. They called us before accepting. Our inspection identified foundation moisture intrusion, active mold propagation behind interior walls, compromised subfloor framing, and damaged HVAC components — none of which appeared in the insurer\'s report. The supplemental claim resulted in a $94,000 settlement.',
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
    narrative: 'The kitchen fire was limited in scope, but smoke was distributed through the entire HVAC system to every room in the house. The insurer\'s offer addressed only the visible fire damage. We documented contaminated insulation in the attic, ductwork replacement requirements, complete odor remediation for the entire structure, and contents replacement — producing a final settlement of $165,000.',
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
    narrative: 'Following a severe hailstorm, the insurer concluded the roof damage was purely cosmetic and offered $4,200 for spot repairs. We documented granule loss patterns, shingle bruising, compromised flashing, and evidence that multiple areas met the threshold for full replacement under the policy terms. The final settlement of $41,000 covered complete roof replacement.',
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
    narrative: 'A commercial property owner received a $35,000 offer on a warehouse that had significant roof panel damage, structural compromise to the loading dock area, damaged inventory, and business interruption losses. Our commercial claim specialist documented all physical damage plus business income loss components, resulting in a $310,000 final settlement.',
    result: 'Full structural and BI losses recovered',
  },
  {
    id: 6,
    tag: 'Wind / Roof Damage',
    location: 'Broward County, FL',
    propertyType: 'Multi-Unit',
    insurerOffer: 22000,
    settlement: 198000,
    multiplier: '9.0×',
    title: 'Multi-unit property with undervalued wind and roof damage across all units',
    narrative: 'A duplex owner received a $22,000 offer after high-wind damage. Each unit had independent roof, window, and interior damage that the insurer\'s single-adjuster visit failed to fully capture. We documented damage by unit and negotiated a final settlement of $198,000 covering full repair to both units.',
    result: 'Full multi-unit repair funded',
  },
]

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative section-padding"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        }}
      >
        <div className="container-site text-center">
          <FadeInView>
            <span className="section-label mb-4 block">Real Results</span>
            <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
              What we've recovered{' '}
              <span className="text-gradient-gold">for property owners</span>
            </h1>
            <p className="text-lg text-white/55 max-w-xl mx-auto">
              These are real claim outcomes from Nashville and South Florida.
              Numbers represent actual settlements vs. the insurer's initial position.
              All handled on contingency — no upfront cost.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-navy-950 section-padding">
        <div className="container-site max-w-5xl">
          <div className="space-y-6">
            {CASE_STUDIES.map((c, i) => (
              <FadeInView key={c.id} delay={i * 0.05}>
                <div className="card-dark p-6 lg:p-8">
                  <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-start">
                    <div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="badge-navy">{c.tag}</span>
                        <span className="badge bg-white/[0.05] border border-white/[0.06] text-slate-400">
                          <MapPin size={11} />
                          {c.location}
                        </span>
                        <span className="badge bg-white/[0.05] border border-white/[0.06] text-slate-400">
                          {c.propertyType}
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-white mb-3">{c.title}</h2>
                      <p className="text-sm text-white/55 leading-relaxed mb-4">{c.narrative}</p>

                      <div
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                        style={{
                          background: 'rgba(34,197,94,0.12)',
                          border: '1px solid rgba(34,197,94,0.25)',
                          color: '#4ade80',
                        }}
                      >
                        <TrendingUp size={12} />
                        {c.result}
                      </div>
                    </div>

                    {/* Numbers */}
                    <div className="flex lg:flex-col items-center lg:items-end gap-4 lg:gap-2 flex-shrink-0">
                      <div className="text-center">
                        <div className="text-xs text-white/35 uppercase tracking-wide mb-0.5">Insurer offer</div>
                        <div className="text-2xl font-black text-red-400/80">
                          ${c.insurerOffer.toLocaleString()}
                        </div>
                      </div>
                      <ArrowRight size={18} className="text-gold-500/50 rotate-90 lg:rotate-0" />
                      <div className="text-center">
                        <div className="text-xs text-white/35 uppercase tracking-wide mb-0.5">Final settlement</div>
                        <div
                          className="text-2xl font-black"
                          style={{
                            backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          ${c.settlement.toLocaleString()}
                        </div>
                        <div className="text-xs text-gold-500/60 font-bold mt-0.5">{c.multiplier} increase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>

          <FadeInView className="text-center mt-12">
            <p className="text-sm text-white/35 mb-6">
              All results represent actual claim outcomes. Individual results vary by claim complexity, damage extent, and insurer.
            </p>
            <Link href="/intake" className="btn-primary-lg inline-flex">
              Start My Free Inspection
              <ArrowRight size={17} />
            </Link>
          </FadeInView>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
