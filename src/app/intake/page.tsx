import type { Metadata } from 'next'
import ClaimIntake from '@/components/intake/ClaimIntake'
import { Shield, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Property Damage Inspection | Start Your Claim Review',
  description:
    'Start your free property damage inspection request. Country Public Adjusters handle your entire insurance claim on contingency — no upfront cost. Takes under 3 minutes.',
  robots: { index: false, follow: false }, // Don't index form pages
}

const TRUST_CHIPS = [
  { icon: Shield, text: 'No upfront cost — contingency only' },
  { icon: Clock, text: 'Response within 1–2 hours' },
  { icon: DollarSign, text: 'Average 10× settlement increase' },
]

export default function IntakePage() {
  return (
    <section
      className="min-h-screen section-padding"
      style={{
        background:
          'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.1) 0%, transparent 60%), linear-gradient(180deg, #060F1E 0%, #0B1F3A 100%)',
      }}
    >
      <div className="container-site max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge-gold mb-4">
            Free Inspection · No Commitment
          </span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Start your free{' '}
            <span className="text-gradient-gold">claim review</span>
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-md mx-auto">
            Takes under 3 minutes. A licensed public adjuster reviews your details
            and contacts you prepared to help.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            {TRUST_CHIPS.map((chip, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full
                           bg-white/[0.04] border border-white/[0.06] text-xs text-white/45 font-medium"
              >
                <chip.icon size={11} className="text-gold-500/70" />
                {chip.text}
              </div>
            ))}
          </div>
        </div>

        {/* Intake form */}
        <ClaimIntake />
      </div>
    </section>
  )
}
