// ─── CLAIM INTAKE ────────────────────────────────────────────────────────────

export type PropertyType = 'residential' | 'commercial' | 'multi-unit' | 'rental'
export type DamageType =
  | 'hail'
  | 'wind'
  | 'water'
  | 'roof'
  | 'hurricane'
  | 'fire'
  | 'structural'
  | 'other'
export type Region = 'nashville' | 'south-florida' | 'other'
export type InsuranceStage =
  | 'not-filed'
  | 'filed'
  | 'underpaid'
  | 'denied'
  | 'need-inspection'
  | 'second-opinion'
export type ContactMethod = 'phone' | 'email' | 'text' | 'any'
export type UrgencyLevel = 'emergency' | 'urgent' | 'standard'

export interface ClaimIntakeData {
  // Step 1
  propertyType: PropertyType | null
  ownerType: 'owner' | 'representative' | null

  // Step 2
  damageTypes: DamageType[]

  // Step 3
  address: string
  city: string
  state: string
  zip: string
  region: Region | null

  // Step 4
  damageDate: string
  dateCertain: boolean
  isUrgent: boolean
  urgencyDescription: string

  // Step 5
  insuranceStage: InsuranceStage | null
  insurerName: string

  // Step 6
  claimDescription: string
  claimNumber: string
  hasPhotos: boolean

  // Step 7
  firstName: string
  lastName: string
  phone: string
  email: string
  preferredContact: ContactMethod
  bestTime: string
  consent: boolean

  // Metadata
  source: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  timestamp: string
  urgencyScore: UrgencyLevel
}

// ─── CASE RESULTS ────────────────────────────────────────────────────────────

export interface CaseResult {
  id: string
  title: string
  location: string
  damageType: DamageType
  initialOffer: number
  finalSettlement: number
  multiplier: number
  shortNarrative: string
  tags: string[]
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  source: 'google' | 'yelp' | 'direct'
  damageType?: DamageType
  settlementIncrease?: number
  date: string
}

// ─── SERVICES ────────────────────────────────────────────────────────────────

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  href: string
  category: 'damage' | 'property' | 'claim-stage'
}

// ─── LOCAL PAGES ─────────────────────────────────────────────────────────────

export interface LocalPage {
  slug: string
  city: string
  state: string
  region: Region
  metaTitle: string
  metaDescription: string
  heroHeadline: string
  heroSub: string
  localContext: string
  commonDamageTypes: DamageType[]
  nearbyAreas: string[]
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: 'fees' | 'process' | 'timeline' | 'claims' | 'legal' | 'general'
  schema?: boolean
}

// ─── ANALYTICS EVENTS ────────────────────────────────────────────────────────

export type AnalyticsEvent =
  | 'cta_click'
  | 'phone_click'
  | 'chat_open'
  | 'voice_intake_click'
  | 'form_start'
  | 'form_step_complete'
  | 'form_submit'
  | 'form_abandon'
  | 'scroll_depth_25'
  | 'scroll_depth_50'
  | 'scroll_depth_75'
  | 'scroll_depth_100'

export interface AnalyticsPayload {
  event: AnalyticsEvent
  properties?: Record<string, string | number | boolean>
}

// ─── CRM LEAD PAYLOAD ────────────────────────────────────────────────────────

export interface LeadPayload {
  // Identity
  firstName: string
  lastName: string
  phone: string
  email: string
  preferredContact: ContactMethod
  bestTime: string

  // Property
  propertyType: PropertyType | null
  address: string
  city: string
  state: string
  zip: string
  region: Region | null

  // Claim
  damageTypes: DamageType[]
  insuranceStage: InsuranceStage | null
  insurerName: string
  claimNumber: string
  claimDescription: string
  damageDate: string
  isUrgent: boolean
  urgencyScore: UrgencyLevel

  // Attribution
  source: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  timestamp: string
  isAfterHours: boolean
  submittedAt: string
}
