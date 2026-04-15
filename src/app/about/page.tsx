import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FinalCTA from '@/components/home/FinalCTA'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'About Country Public Adjusters | Our Story & Team',
  'Country Public Adjusters — 35+ years combined expertise. Three founders. One mission: get you paid what you deserve. Serving Nashville, Middle Tennessee, and South Florida.',
  '/about'
)

const TEAM = [
  {
    initial: 'M',
    name: 'Manny',
    title: 'Co-Founder & Senior Adjuster',
    body: "Two decades mastering insurance claim adjustment across Nashville and Tennessee. Manny's deep knowledge of policy language and claim documentation consistently maximizes recoveries for storm-damaged properties.",
  },
  {
    initial: 'E',
    name: 'Efraim',
    title: 'Co-Founder & Client Advocate',
    body: 'A career defined by client advocacy and complex negotiations — plus a unique background as a licensed therapist. Efraim guides homeowners through the claim process with both expertise and genuine compassion.',
  },
  {
    initial: 'D',
    name: 'David',
    title: 'Co-Founder & Negotiations Lead',
    body: 'A powerful background in business, finance, and high-stakes negotiations. David ensures every claim is fought with the financial acumen and strategic leverage needed to win optimal settlements.',
  },
]

const STATS = [
  { num: '35+', label: 'Years Combined Experience' },
  { num: '20+', label: 'Major Storms Handled' },
  { num: '10×', label: 'Avg. Settlement Increase' },
  { num: '$0', label: 'Upfront Cost — Ever' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero + Stats combined */}
      <section
        className="relative pt-20 pb-0"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        }}
      >
        <div className="container-site text-center pb-12">
          <FadeInView>
            <span className="section-label mb-3 block">Our Story</span>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 max-w-3xl mx-auto">
              We built this firm so Nashville homeowners{' '}
              <span className="text-gradient-gold">never stand alone</span>
            </h1>
            <p className="text-base text-slate-500 max-w-xl mx-auto">
              35+ years of combined expertise. Three founders. One mission: get you paid what your policy truly owes.
            </p>
          </FadeInView>
        </div>

        {/* Stats band — flush to bottom of hero */}
        <div className="bg-slate-900 py-8">
          <div className="container-site">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl font-black mb-1"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-xs text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story + Team combined in one section */}
      <section className="bg-white py-14">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">

            {/* Story */}
            <FadeInView>
              <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
                <p>
                  At Country Public Adjusters, we bring over 35 years of combined expertise in insurance claim advocacy —
                  serving property owners across Nashville, Middle Tennessee, and the surrounding counties. When a storm
                  rips through your neighborhood — hail on your roof, wind damage to your structure, flooding in your
                  basement — we're the team that stands between you and an insurance company already working against you.
                </p>
                <p>
                  Together, we have faced over 20 major storms — hurricanes, floods, fires, mold, tornadoes, and
                  sinkholes. We've fought for countless homeowners who lost everything. We know this process is never
                  just about the money. Our clients need a steady hand during one of the most stressful experiences of
                  their lives — which is why Efraim's background as a licensed therapist allows us to offer not only
                  expert claim guidance but genuine compassionate support.
                </p>
                <p>
                  Across thousands of claims, we have repeatedly achieved settlements 10 times higher than what insurers
                  initially offered. We don't just handle your claim and disappear — we stand by our clients before the
                  storm, during the claim, and long after the settlement check clears.
                </p>
              </div>

              {/* Callout */}
              <div className="rounded-2xl border-l-4 border-gold-500 bg-amber-50 px-6 py-5 mb-12">
                <p className="text-slate-800 font-semibold text-sm leading-relaxed">
                  "We communicate every update, every step of the way — because you deserve to know exactly where your claim stands."
                </p>
              </div>
            </FadeInView>

            {/* Team header */}
            <FadeInView className="text-center mb-8">
              <span className="section-label mb-3 block">The Team</span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-1">
                Three partners. <span className="text-gradient-gold">One mission.</span>
              </h2>
              <p className="text-slate-500 text-sm">Get you paid what you deserve.</p>
            </FadeInView>

            {/* Team cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {TEAM.map((member, i) => (
                <FadeInView key={member.name} delay={i * 0.1}>
                  <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 h-full">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black text-slate-900 mb-4"
                      style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' }}
                    >
                      {member.initial}
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-0.5">{member.name}</h3>
                    <div className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-3">{member.title}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{member.body}</p>
                  </div>
                </FadeInView>
              ))}
            </div>

            {/* Promise box */}
            <FadeInView>
              <div className="bg-slate-900 rounded-2xl p-5 text-center mb-10">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <CheckCircle size={16} className="text-gold-500" />
                  <span className="text-gold-500 font-bold text-xs uppercase tracking-widest">Our Promise</span>
                </div>
                <p className="text-white font-semibold text-sm leading-relaxed">
                  When you hire Country, your claim is handled personally by the founders — not passed down into a sales pipeline.
                </p>
              </div>
            </FadeInView>

            {/* CTA */}
            <FadeInView className="text-center">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Ready to find out what your claim is worth?</h2>
              <p className="text-slate-500 text-sm mb-6">No upfront cost. No commitment. A founder will personally review your claim.</p>
              <Link href="/intake" className="btn-primary-lg inline-flex">
                Start Your Free Claim Review
                <ArrowRight size={17} />
              </Link>
            </FadeInView>

          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
