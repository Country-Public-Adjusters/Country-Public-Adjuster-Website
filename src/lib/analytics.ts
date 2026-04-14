'use client'

import type { AnalyticsEvent, AnalyticsPayload } from '@/types'

// ─── GTM / GA4 DATA LAYER PUSH ───────────────────────────────────────────────

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

function pushToDataLayer(payload: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(payload)
}

// ─── CORE TRACK FUNCTION ─────────────────────────────────────────────────────

export function track(event: AnalyticsEvent, properties?: AnalyticsPayload['properties']) {
  if (typeof window === 'undefined') return

  const payload = {
    event,
    ...properties,
    timestamp: new Date().toISOString(),
  }

  // GTM / GA4
  pushToDataLayer(payload)

  // GA4 direct (if not using GTM)
  if (window.gtag) {
    window.gtag('event', event, properties)
  }

  // Meta Pixel
  if (window.fbq && (event === 'form_submit' || event === 'phone_click')) {
    window.fbq('track', event === 'form_submit' ? 'Lead' : 'Contact', properties)
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event, properties)
  }
}

// ─── CONVENIENCE TRACKERS ────────────────────────────────────────────────────

export const Analytics = {
  ctaClick: (label: string, location: string) =>
    track('cta_click', { label, location }),

  phoneClick: (source: string) =>
    track('phone_click', { source }),

  chatOpen: () =>
    track('chat_open'),

  voiceIntakeClick: () =>
    track('voice_intake_click'),

  formStart: (formName: string) =>
    track('form_start', { formName }),

  formStepComplete: (step: number, stepName: string) =>
    track('form_step_complete', { step, stepName }),

  formSubmit: (region: string, damageTypes: string) =>
    track('form_submit', { region, damageTypes }),

  formAbandon: (step: number) =>
    track('form_abandon', { step }),

  scrollDepth: (depth: 25 | 50 | 75 | 100) =>
    track(`scroll_depth_${depth}`),
}

// ─── SCROLL DEPTH TRACKER ────────────────────────────────────────────────────

export function initScrollDepthTracking() {
  if (typeof window === 'undefined') return

  const depths: Set<number> = new Set()
  const checkDepths = [25, 50, 75, 100] as const

  function onScroll() {
    const scrollPct = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    )
    checkDepths.forEach((depth) => {
      if (!depths.has(depth) && scrollPct >= depth) {
        depths.add(depth)
        Analytics.scrollDepth(depth)
      }
    })
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}
