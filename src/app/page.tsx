import type { Metadata } from 'next'
import HeroV2 from '@/components/home/HeroV2'
import PowerfulRep from '@/components/home/PowerfulRep'
import DidYouKnow from '@/components/home/DidYouKnow'
import HowWeWin from '@/components/home/HowWeWin'
import ResultsShowcase from '@/components/home/ResultsShowcase'
import ComparisonChart from '@/components/home/ComparisonChart'
import DamageTypesSection from '@/components/home/DamageTypesSection'
import ServiceAreas from '@/components/home/ServiceAreas'
import ClaimFormBottom from '@/components/home/ClaimFormBottom'
import ContactPopup from '@/components/home/ContactPopup'
import WaveDivider from '@/components/ui/WaveDivider'
import SectionGlow from '@/components/ui/SectionGlow'

export const metadata: Metadata = {
  title: 'Country Public Adjusters | Multiply Your Claim Payout — Tennessee & Florida',
  description: 'Using a public adjuster can help you achieve a 747% increase on average. Country Public Adjusters fight for property owners across Tennessee and Florida. Free inspection. Zero cost until we win.',
}

// Exact hex values matching each section's background
const HERO   = '#0D2545'   // HeroV2 only
const DARK   = '#0A1E3C'   // all other dark sections
const LIGHT  = '#FFFFFF'
const FOOTER = '#030D1A'   // matches bg-navy-950 footer exactly

export default function HomePage() {
  return (
    <>
      {/* ─── DARK (hero) ─── */}
      <SectionGlow><HeroV2 /></SectionGlow>
      <WaveDivider fromColor={HERO} toColor={LIGHT} />

      {/* ─── WHITE ─── */}
      <SectionGlow><PowerfulRep /></SectionGlow>
      <WaveDivider fromColor={LIGHT} toColor={DARK} flip />

      {/* ─── DARK ─── */}
      <SectionGlow><DidYouKnow /></SectionGlow>
      <WaveDivider fromColor={DARK} toColor={LIGHT} />

      {/* ─── WHITE ─── */}
      <SectionGlow><HowWeWin /></SectionGlow>
      <WaveDivider fromColor={LIGHT} toColor={DARK} flip />

      {/* ─── DARK (results + comparison share same bg, no wave between) ─── */}
      <SectionGlow><ResultsShowcase /></SectionGlow>
      <SectionGlow><ComparisonChart /></SectionGlow>
      <WaveDivider fromColor={DARK} toColor={LIGHT} />

      {/* ─── WHITE ─── */}
      <SectionGlow><DamageTypesSection /></SectionGlow>
      <WaveDivider fromColor={LIGHT} toColor={DARK} flip />

      {/* ─── DARK ─── */}
      <SectionGlow><ServiceAreas /></SectionGlow>

      {/* ─── WHITE ─── */}
      <WaveDivider fromColor={DARK} toColor={LIGHT} />
      <SectionGlow><ClaimFormBottom /></SectionGlow>
      <WaveDivider fromColor={LIGHT} toColor={FOOTER} flip />

      <ContactPopup />
    </>
  )
}
