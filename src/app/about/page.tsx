import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Award, MapPin, Users, ArrowRight } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FinalCTA from '@/components/home/FinalCTA'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata(
  'About Country Public Adjusters | Why Choose Us',
  'Learn about Country Public Adjusters — licensed public adjusters with 35+ years combined experience serving Nashville, TN and South Florida. No upfront cost, contingency-only representation.',
  '/about'
)

const VALUES = [
  {
    icon: Shield,
    title: 'Advocate First, Always',
    body: 'We represent you — the property owner — exclusively. We never work for insurance companies. Our interests are aligned entirely with yours.',
  },
  {
    icon: Award,
    title: '35+ Years Combined Experience',
    body: 'Our team has handled claims from hurricanes, tornadoes, hailstorms, floods, and wildfires across two major US markets. Experience that matters when your claim is on the line.',
  },
  {
    icon: MapPin,
    title: 'Deeply Local',
    body: 'Nashville and South Florida aren\'t just service areas to us — we\'ve worked these markets through multiple major storm events and know the insurer tactics, contractor costs, and local building codes.',
  },
  {
    icon: Users,
    title: 'Human and Accessible',
    body: 'You get a real team member on your claim. Clear communication, regular updates, and a direct line to the person negotiating on your behalf.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative section-padding min-h-[50vh] flex items-center"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.1) 0%, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        }}
      >
        <div className="container-site text-center">
          <FadeInView>
            <span className="section-label mb-4 block">About Country</span>
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-5">
              Your insurance company{' '}
              <br className="hidden sm:block" />
              has adjusters.{' '}
              <span className="text-gradient-gold">Now you do too.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Country Public Adjusters is a team of licensed insurance claims professionals
              who work exclusively for property owners — never for insurance companies.
              We handle your entire claim so you get paid what you actually deserve.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-navy-900 section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <FadeInView direction="left">
              <span className="section-label mb-4 block">Our Story</span>
              <h2 className="section-heading-dark mb-5">
                Built from the inside out
              </h2>
              <div className="space-y-4 text-slate-500 text-base leading-relaxed">
                <p>
                  Country Public Adjusters was founded by claims professionals who spent
                  years working in the insurance industry — and who saw firsthand how
                  policyholders were consistently underpaid.
                </p>
                <p>
                  The decision to switch sides was easy. Property owners deserve their own
                  expert — someone who knows the system, knows the tactics, and works
                  entirely in their interest.
                </p>
                <p>
                  Today we serve Nashville and South Florida, two markets with
                  high storm activity, complex building environments, and insurers
                  who count on policyholders not knowing their rights.
                </p>
                <p className="text-slate-700 font-semibold">
                  We've negotiated thousands of claims and recovered millions in settlements
                  that would otherwise have gone unpaid.
                </p>
              </div>
            </FadeInView>

            <FadeInView direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '35+', label: 'Years Combined Experience' },
                  { num: '10×', label: 'Average Settlement Increase' },
                  { num: '20+', label: 'Major Storms Handled' },
                  { num: '$0', label: 'Upfront Cost — Ever' },
                ].map((stat) => (
                  <div key={stat.label} className="card-dark p-5 text-center">
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
                    <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-950 section-padding">
        <div className="container-site">
          <FadeInView className="text-center mb-14 max-w-2xl mx-auto">
            <span className="section-label mb-4 block">Our Values</span>
            <h2 className="section-heading-dark">How we operate</h2>
          </FadeInView>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {VALUES.map((v, i) => (
              <FadeInView key={v.title} delay={i * 0.1}>
                <div className="card-dark p-6 h-full">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: 'rgba(245,158,11,0.1)',
                      border: '1px solid rgba(245,158,11,0.2)',
                    }}
                  >
                    <v.icon size={18} className="text-gold-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.body}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Process anchor */}
      <section id="process" className="bg-navy-900 section-padding">
        <div className="container-narrow text-center">
          <FadeInView>
            <span className="section-label mb-4 block">Our Process</span>
            <h2 className="section-heading-dark mb-5">How we handle your claim</h2>
            <p className="section-sub-dark mx-auto mb-8">
              From first call to final settlement — here's exactly what we do.
            </p>
            <Link href="/#how-it-works" className="btn-primary-lg inline-flex">
              See How It Works
              <ArrowRight size={17} />
            </Link>
          </FadeInView>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
