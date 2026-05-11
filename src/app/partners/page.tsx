import type { Metadata } from 'next'
import PartnersContent from '@/components/partners/PartnersContent'

export const metadata: Metadata = {
  title: 'Partners | Country Public Adjusters',
  description: 'Partner with Country Public Adjusters. We work with contractors, restoration companies, property managers, realtors and more across Tennessee and Florida.',
}

export default function PartnersPage() {
  return <PartnersContent />
}
