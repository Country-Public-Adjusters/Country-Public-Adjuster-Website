import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ProofBand from '@/components/home/ProofBand'
import IntakePreview from '@/components/home/IntakePreview'
import CommercialSection from '@/components/home/CommercialSection'
import CaseResults from '@/components/home/CaseResults'
import Testimonials from '@/components/home/Testimonials'
import CuriositySection from '@/components/home/CuriositySection'
import AboutSection from '@/components/home/AboutSection'
import ReferralSection from '@/components/home/ReferralSection'
import ServicesGrid from '@/components/home/ServicesGrid'
import LocalCoverage from '@/components/home/LocalCoverage'
import HomeFAQ from '@/components/home/HomeFAQ'
import FinalCTA from '@/components/home/FinalCTA'
import { FAQ_SCHEMA } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Country Public Adjusters | Nashville & South Florida Storm Damage Claims',
  description:
    'Your insurance company has adjusters. Now you do too. Country Public Adjusters handle your entire storm damage insurance claim — free inspection, no upfront cost, contingency-only. Serving Nashville, TN and South Florida.',
  openGraph: {
    title: 'Country Public Adjusters — Your Insurance Advocate',
    description:
      'Free inspection. No upfront cost. We fight for the full settlement your storm damage warrants. Nashville & South Florida.',
  },
}

const HOME_FAQ_SCHEMA = FAQ_SCHEMA([
  {
    question: 'What exactly does a public adjuster do?',
    answer:
      'A public adjuster is a licensed insurance claims professional who works exclusively for you — the property owner — not the insurance company. We inspect your damage, document everything, file all paperwork, and negotiate directly with your insurer to maximize your settlement.',
  },
  {
    question: 'How much does a public adjuster cost?',
    answer:
      'Nothing upfront. We work on contingency — our fee is a percentage of the settlement we recover for you. If we don\'t recover more for you, you don\'t pay.',
  },
  {
    question: 'Is it too late if my insurance company already sent their adjuster?',
    answer:
      'Absolutely not. Most people who call us have already received a low initial offer. We review their assessment, document missed damage, and file supplemental claims to recover the full value.',
  },
  {
    question: 'How long does the insurance claim process take with a public adjuster?',
    answer:
      'Simple claims resolve in a few weeks. Complex or disputed claims may take 30–90 days. We handle all communication and keep you updated throughout.',
  },
])

export default function HomePage() {
  return (
    <>
      {/* JSON-LD FAQ Schema for homepage FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQ_SCHEMA) }}
      />

      {/* 1 — Hero */}
      <Hero />

      {/* 2 — Proof Band (stats bar) */}
      <ProofBand />

      {/* 3 — Intake / Claim Check Form */}
      <IntakePreview />

      {/* 4 — Commercial Section */}
      <CommercialSection />

      {/* 5 — Case Results */}
      <CaseResults />

      {/* 6 — Testimonials */}
      <Testimonials />

      {/* 7 — Curiosity / Education */}
      <CuriositySection />

      {/* 8 — About / Founders */}
      <AboutSection />

      {/* 9 — Referral Program */}
      <ReferralSection />

      {/* 10 — Services Grid */}
      <ServicesGrid />

      {/* 11 — Local Coverage */}
      <LocalCoverage />

      {/* 12 — FAQ */}
      <HomeFAQ />

      {/* 13 — Final CTA */}
      <FinalCTA />
    </>
  )
}
