'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FOUNDERS = [
  {
    initial: 'M',
    name: 'Manny',
    role: 'Co-Founder & Senior Adjuster',
    bio: "Two decades mastering the field of insurance claim adjustment. Manny's encyclopedic knowledge of policy language and claim documentation consistently unlocks full coverage for storm-damaged properties.",
    badge: '20 Years Adjusting',
  },
  {
    initial: 'E',
    name: 'Efraim',
    role: 'Co-Founder & Client Advocate',
    bio: 'A career defined by client advocacy and complex negotiations — plus a unique background as a licensed therapist. Efraim guides property owners through the claim process with both expertise and genuine compassion.',
    badge: 'Licensed Therapist + Adjuster',
  },
  {
    initial: 'D',
    name: 'David',
    role: 'Co-Founder & Negotiations Lead',
    bio: 'A powerful background in business, finance, and high-stakes negotiations. David ensures every claim is fought with the financial acumen and strategic leverage needed to win optimal settlements.',
    badge: 'Finance & Negotiations',
  },
]

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section ref={ref} className="bg-white section-padding overflow-hidden">
      <div className="container-site">
        {/* Eyebrow + Headline */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading-dark mb-6"
          >
            We Built This Firm So Property Owners{' '}
            <span className="text-gradient-gold">Never Stand Alone</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-sub-dark mx-auto"
          >
            At Country Public Adjusters, we bring over 35 years of combined expertise in
            insurance claim advocacy — serving property owners across Nashville, Middle
            Tennessee, South Florida, and beyond. When a storm rips through your neighborhood
            — hail on your roof, wind damage to your structure, flooding in your basement —
            we&apos;re the team that stands between you and an insurance company that&apos;s
            already working hard on their side.
          </motion.p>
        </div>

        {/* Founders grid */}
        <div
          className="rounded-3xl p-8 md:p-12 mb-12"
          style={{
            background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FFFBEB 100%)',
            border: '1px solid rgba(245,158,11,0.18)',
          }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {FOUNDERS.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl border border-amber-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300"
                style={{ borderTop: '3px solid #F59E0B' }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-black text-white"
                  style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' }}
                >
                  {founder.initial}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-0.5">{founder.name}</h3>
                <p className="text-xs font-semibold text-gold-600 uppercase tracking-wide mb-3">
                  {founder.role}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{founder.bio}</p>

                {/* Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-700">
                  {founder.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Callout boxes */}
        <div className="space-y-4 max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.5 }}
            className="border-l-4 border-gold-500 pl-6 py-2"
          >
            <p className="text-xl font-bold text-slate-900">
              Three partners. One mission: get you paid what you deserve.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.6 }}
            className="border-l-4 border-slate-200 pl-6 py-2"
          >
            <p className="text-base text-slate-600">
              When you hire Country, your claim is personally handled by the founders — not
              passed down into a sales pipeline.
            </p>
          </motion.div>
        </div>

        {/* Story paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="max-w-3xl mx-auto space-y-5 text-slate-600 text-base leading-relaxed"
        >
          <p>
            Together, our founders have navigated more than 20 major storm events — hailstorms
            across Middle Tennessee, hurricanes battering South Florida, and everything in between.
            We&apos;ve seen every tactic insurers use to minimize payouts, and we know exactly how
            to counter them with thorough documentation, policy mastery, and tenacious negotiation.
          </p>
          <p>
            Efraim&apos;s background as a licensed therapist isn&apos;t just a credential — it
            shapes how we treat every client. Storm damage is stressful and disorienting. We guide
            property owners through the process with clarity, empathy, and honest communication at
            every step.
          </p>
          <p>
            One recent example that illustrates what&apos;s possible: a commercial property that
            received an initial offer of $80,000 from their insurer. After thorough documentation,
            re-inspection, and negotiation, the final settlement reached $900,000. This is not a
            typical result — but it demonstrates what complete, professional claim advocacy can
            achieve when there is real damage that has been missed or undervalued.
          </p>
          <p>
            From the moment you call us to the day your check arrives, we stand beside you as
            partners — not just service providers. Your fight is our fight.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
