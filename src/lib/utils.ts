import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatMultiplier(multiplier: number): string {
  return `${multiplier.toFixed(1)}×`
}

export function isAfterHours(): boolean {
  const now = new Date()
  const hours = now.getHours()
  const day = now.getDay()
  // After hours: Mon-Fri before 8am or after 6pm, Sat after 1pm, Sun all day
  if (day === 0) return true
  if (day === 6 && hours >= 13) return true
  if (hours < 8 || hours >= 18) return true
  return false
}

export function getUTMParams(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  return {
    utmSource: params.get('utm_source') ?? '',
    utmMedium: params.get('utm_medium') ?? '',
    utmCampaign: params.get('utm_campaign') ?? '',
    utmContent: params.get('utm_content') ?? '',
    utmTerm: params.get('utm_term') ?? '',
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}
