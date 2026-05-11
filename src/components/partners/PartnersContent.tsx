'use client'

import { motion } from 'framer-motion'
import { Hammer, Building2, Home, Users, Shield, Wrench, ArrowRight, Phone, Check } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import Link from 'next/link'

const PARTNER_TYPES = [
  {
    icon: Hammer,
    title: 'Contractors & Builders',
    body: 'Your clients need to get paid before you can get fully paid. Insurance companies routinely underscope repair projects, leaving contractors underpaid or fighting for supplemental approvals. When you partner with us, we document every inch of damage before a single tool goes on site — full scopes, approved faster, fewer disputes.',
    benefits: ['Documented scopes that support your full estimate', 'Supplemental claims when insurers cut your approved scope', 'Faster insurer approvals backed by professional documentation', 'Referrals from our settled clients who need quality contractors'],
  },
  {
    icon: Wrench,
    title: 'Restoration Companies',
    body: 'The gap between what insurance approves and what the damage actually requires is where restoration companies lose money. We document moisture intrusion, smoke migration, mold propagation, and structural damage properly — so your full remediation scope gets approved, not argued over.',
    benefits: ['Pre-work documentation that supports your full remediation scope', 'Supplemental claims filed when mid-project damage is discovered', 'Coverage for water, fire, smoke, mold, and structural restoration', 'Mutual referral relationship — we send you clients, you send us claims'],
  },
  {
    icon: Building2,
    title: 'Property Managers',
    body: 'When managed properties take damage, you\'re caught between anxious tenants, frustrated owners, and a slow insurance process. We step in as the claim expert — handling every interaction with the insurer so you can focus on operations.',
    benefits: ['Single point of contact for the entire insurance claim', 'We coordinate directly with the insurer on your behalf', 'Regular progress updates so property owners stay informed', 'Commercial and multi-unit claim experience'],
  },
  {
    icon: Home,
    title: 'Realtors & Real Estate Professionals',
    body: 'Property damage claims can kill deals, delay closings, or quietly reduce your client\'s net recovery. Whether a listing has unresolved storm damage or a buyer discovers damage during due diligence, we resolve it professionally and quickly.',
    benefits: ['Free claim evaluation at any stage of the transaction', 'Rapid inspection turnaround to protect deal timelines', 'Pre-listing damage claim resolution', 'You stay in control — we handle the insurance side'],
  },
  {
    icon: Users,
    title: 'Multi-Family & Commercial Property Owners',
    body: 'Multi-unit and commercial claims involve multiple damage scopes, business interruption components, code compliance requirements, and coordinated insurer strategies designed to minimise payouts. Our team has handled some of the largest multi-unit and commercial settlements in both Tennessee and Florida.',
    benefits: ['Business interruption loss recovery', 'Code upgrade and compliance scope documentation', 'Multi-unit damage documented by individual unit', 'Commercial claim specialist assigned to your account'],
  },
  {
    icon: Shield,
    title: 'Insurance Professionals & Agents',
    body: 'When your clients feel their claim is being underpaid, delayed, or denied, the relationship is at risk — even when it\'s not your fault. Referring them to Country Public Adjusters means they get expert advocacy without you being caught in the middle.',
    benefits: ['Independent advocacy that protects your position', 'No conflict with your carrier relationships', 'Transparent process — you can stay informed throughout', 'Clients thank you for the referral, not blame you for the outcome'],
  },
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Make the Introduction', body: 'Connect us with a property owner with a damage claim — a quick email or call is all it takes.' },
  { step: '02', title: 'We Take It From There', body: 'We contact them within 24 hours, conduct a free inspection, and begin documenting the claim professionally.' },
  { step: '03', title: 'Full Claim Management', body: 'We handle every insurer interaction — documentation, negotiation, supplemental claims — from start to settlement.' },
  { step: '04', title: 'Everyone Wins', body: 'Your client gets the settlement they deserve. You\'ve added real value to the relationship.' },
]

export default function PartnersContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative section-padding overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #030D1A 0%, #0D2545 50%, #0A1E3C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)' }} />

        <div className="container-site max-w-4xl relative z-10">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}>
              PARTNER PROGRAMME
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
              Your Clients Deserve Full Compensation.{' '}
              <span style={{ color: '#F59E0B' }}>So Do You.</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl">
              Partner with Country Public Adjusters and add a powerful resource to your professional network — one that helps your clients win their insurance claims and rewards the relationship you've built.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:18883975420"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-900 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                <Phone size={17} /> Call to Discuss a Partnership
              </a>
              <a href="mailto:claims@countrypublicadjusters.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
                Email Us
              </a>
            </div>
          </FadeInView>
        </div>
      </section>


      {/* ── Partner types ── */}
      <section className="bg-white section-padding">
        <div className="container-site max-w-5xl">
          <FadeInView className="mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-3">Who We Partner With</h2>
            <p className="text-slate-500 max-w-2xl">We work with professionals across construction, restoration, real estate, and property management who want to add genuine value to their client relationships.</p>
          </FadeInView>

          <div className="space-y-4">
            {PARTNER_TYPES.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 350, damping: 22 } }}
                  className="group relative rounded-3xl p-7 lg:p-8 overflow-hidden cursor-default"
                  style={{
                    background: '#FFFFFF',
                    border: '1.5px solid #E8EDF2',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'rgba(245,158,11,0.4)'
                    el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.08), 0 0 0 1px rgba(245,158,11,0.1)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = '#E8EDF2'
                    el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
                  }}
                >
                  <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(180deg, #D97706, #F59E0B)' }} />

                  <div className="grid lg:grid-cols-[1fr_260px] gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(217,119,6,0.1)', border: '1px solid rgba(217,119,6,0.2)' }}
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        >
                          <Icon size={19} style={{ color: '#D97706' }} strokeWidth={1.8} />
                        </motion.div>
                        <h3 className="text-xl font-black text-slate-900">{p.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
                    </div>
                    <div className="rounded-2xl p-5" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                      <div className="text-[11px] font-black tracking-widest mb-3" style={{ color: '#D97706' }}>WHAT YOU GET</div>
                      <ul className="space-y-2.5">
                        {p.benefits.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                            <Check size={12} className="flex-shrink-0 mt-0.5" style={{ color: '#D97706' }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>


      {/* ── How it works ── */}
      <section className="section-padding" style={{ background: '#0A1E3C' }}>
        <div className="container-site max-w-5xl">
          <FadeInView className="mb-12">
            <h2 className="text-4xl font-black text-white mb-3">How a Referral Works</h2>
            <p className="text-white/50">Simple, professional, and zero friction on your end.</p>
          </FadeInView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOW_IT_WORKS.map((h, i) => (
              <motion.div
                key={h.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 380, damping: 20 } }}
                className="group relative rounded-2xl p-6 h-full cursor-default overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1.5px solid rgba(255,255,255,0.1)',
                  transition: 'border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(245,158,11,0.4)'
                  el.style.background = 'rgba(255,255,255,0.07)'
                  el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.25), 0 0 0 1px rgba(245,158,11,0.12)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.1)'
                  el.style.background = 'rgba(255,255,255,0.04)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, #D97706, #F59E0B)' }} />
                <div className="text-5xl font-black mb-4 leading-none" style={{ color: 'rgba(245,158,11,0.18)' }}>{h.step}</div>
                <h3 className="font-bold text-white mb-2">{h.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Stats + CTA ── */}
      <section className="section-padding" style={{ background: '#0A1E3C' }}>
        <div className="container-site max-w-4xl text-center">
          <FadeInView>
            <h2 className="text-4xl font-black text-white mb-4">Why Refer to Country Public Adjusters?</h2>
            <p className="text-white/50 mb-12 max-w-xl mx-auto">Our results speak for themselves. When you refer a client to us, you're connecting them with a team that consistently delivers.</p>
          </FadeInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {[['747%', 'Average settlement increase'], ['35+', 'Years combined experience'], ['1,000s', 'Claims negotiated'], ['$0', 'Upfront cost to clients']].map(([val, label]) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 400, damping: 20 } }}
                className="rounded-2xl p-5 cursor-default"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.2)' }}
              >
                <div className="text-3xl font-black mb-1" style={{ color: '#F59E0B' }}>{val}</div>
                <div className="text-xs text-white/50">{label}</div>
              </motion.div>
            ))}
          </div>
          <FadeInView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:18883975420"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-900 transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                <Phone size={16} /> 1-888-397-5420
              </a>
              <a href="mailto:claims@countrypublicadjusters.com"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
                claims@countrypublicadjusters.com
              </a>
            </div>
          </FadeInView>
        </div>
      </section>

      
    </>
  )
}
