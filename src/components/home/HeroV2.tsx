'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { Analytics } from '@/lib/analytics'
import { submitHomepageForm } from '@/lib/homepage-form'

const PHONE = '18883975420'

const CLAIM_TYPES = ['Storm Damage', 'Hurricane', 'Wind Damage', 'Hail Damage', 'Water Damage', 'Roof Damage', 'Fire Damage', 'Smoke / Soot', 'Other']
const PROPERTY_TYPES = ['Residential Home', 'Commercial Building', 'Multi-Unit / Apartment', 'Rental / Investment Property']

const TRUST_BULLETS = [
  'Zero Cost Until We Win!', '1,000s of Successful Claim Increases',
  '35+ Years of Combined Expertise', '5 Star Rated',
  'Get Paid What You Deserve!', 'Get Your Free Inspection NOW!',
]

const itemVariants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { delay: i * 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function HeroV2() {
  const heroRef = useRef<HTMLElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState<1 | 2 | 'done'>(1)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [form, setForm] = useState({ claimType: '', propertyType: '', phone: '', email: '', dateOfDamage: '', zipCode: '', affectsLife: '' as 'yes' | 'no' | '' })

  // Scroll parallax
  const { scrollY } = useScroll()
  const y = useSpring(useTransform(scrollY, [0, 700], [0, -90]), { stiffness: 60, damping: 20 })

  // Mouse-tracked gold orb
  useEffect(() => {
    const hero = heroRef.current
    const orb = orbRef.current
    if (!hero || !orb) return
    let currentX = 50, currentY = 35, mouseX = 50, mouseY = 35
    let raf: number
    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * 100
      mouseY = ((e.clientY - rect.top) / rect.height) * 100
    }
    const loop = () => {
      currentX += (mouseX - currentX) * 0.05
      currentY += (mouseY - currentY) * 0.05
      orb.style.background = `
        radial-gradient(ellipse 60% 70% at ${currentX}% ${currentY}%, rgba(245,158,11,0.13) 0%, transparent 65%),
        radial-gradient(ellipse 70% 50% at 20% 70%, rgba(245,158,11,0.06) 0%, transparent 60%)
      `
      raf = requestAnimationFrame(loop)
    }
    hero.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(loop)
    return () => { hero.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  // GSAP floating particles
  useEffect(() => {
    let gsap: any
    import('gsap').then(g => {
      gsap = g.gsap
      const dots = heroRef.current?.querySelectorAll('.hero-particle')
      dots?.forEach((dot: any, i: number) => {
        gsap.to(dot, {
          y: gsap.utils.random(-20, 20),
          x: gsap.utils.random(-10, 10),
          opacity: gsap.utils.random(0.2, 0.7),
          duration: gsap.utils.random(3, 7),
          repeat: -1, yoyo: true,
          delay: i * 0.3, ease: 'sine.inOut',
        })
      })
    })
  }, [])

  const handleNext = (e: React.FormEvent) => { e.preventDefault(); setSubmitError(''); setStep(2) }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitting(true)
    Analytics.ctaClick('Claim Form Submit', 'hero')

    const result = await submitHomepageForm(form, 'hero')
    setSubmitting(false)

    if (result.ok) {
      Analytics.formSubmit(form.zipCode || 'unknown', form.claimType)
      setStep('done')
    } else {
      setSubmitError(result.error || 'Submission failed. Please call 1-888-397-5420.')
    }
  }

  return (
    <section ref={heroRef} className="relative overflow-hidden pt-8 pb-0" style={{ background: '#0D2545', minHeight: '90vh' }}>

      {/* Cross-hatch grid */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 100%)',
      }} />

      {/* Mouse orb */}
      <div ref={orbRef} className="absolute inset-0 pointer-events-none transition-all duration-75" aria-hidden />

      {/* Corner brackets — targeting reticle effect */}
      {[['top-8 left-8', 'border-t-2 border-l-2'], ['top-8 right-8', 'border-t-2 border-r-2'], ['bottom-8 left-8', 'border-b-2 border-l-2'], ['bottom-8 right-8', 'border-b-2 border-r-2']].map(([pos, border], i) => (
        <motion.div key={i} className={`absolute ${pos} ${border} w-8 h-8 pointer-events-none hidden sm:block`}
          style={{ borderColor: 'rgba(245,158,11,0.3)' }}
          initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }} />
      ))}

      {/* Floating gold particles */}
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} className="hero-particle absolute rounded-full pointer-events-none"
          style={{
            width: `${Math.random() * 3 + 1.5}px`,
            height: `${Math.random() * 3 + 1.5}px`,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            background: i % 3 === 0 ? 'rgba(245,158,11,0.6)' : 'rgba(245,158,11,0.25)',
          }} />
      ))}

      <motion.div style={{ y }} className="container-site relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-start pt-4 lg:pt-8 pb-8">

          {/* LEFT */}
          <motion.div initial="hidden" animate="visible">
            <motion.div custom={0} variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
                style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)', color: '#F59E0B' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                OPPAGA CERTIFIED · 747% AVERAGE INCREASE
              </div>
            </motion.div>

            <motion.h1 custom={1} variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.8rem] font-black text-white leading-[1.0] tracking-tight mb-4">
              Property Damage?{' '}
              <span className="relative inline-block" style={{ color: '#F59E0B' }}>
                Multiply Your
                <motion.span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #D97706, #FBBF24)' }}
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} />
              </span>{' '}
              Claim Payout!
            </motion.h1>

            <motion.p custom={2} variants={itemVariants} className="text-xl sm:text-2xl text-white font-semibold mb-3 leading-snug">
              Using a Public Adjuster Can Help You Achieve a{' '}
              <span style={{ color: '#F59E0B' }}>747% Increase,</span> on Average
            </motion.p>

            <motion.p custom={3} variants={itemVariants} className="text-xs text-white/40 mb-8">
              *Per the Office of Program Policy Analysis and Government Accountability
            </motion.p>

            <motion.div custom={4} variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <a href={`tel:${PHONE}`} onClick={() => Analytics.phoneClick('hero')}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)' }}>
                <Phone size={16} className="group-hover:animate-pulse" />
                Questions? Call Us!
              </a>
              <a href="#claim-form"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-navy-900 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />
                FREE Inspection Now! <ArrowRight size={16} />
              </a>
            </motion.div>

          </motion.div>

          {/* RIGHT — Form */}
          <motion.div initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }} animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            id="claim-form" className="lg:sticky lg:top-28">
            <div className="rounded-2xl overflow-hidden relative"
              style={{ background: '#0A1E3C', border: '1px solid rgba(245,158,11,0.25)', boxShadow: '0 0 60px rgba(245,158,11,0.1), 0 40px 80px rgba(0,0,0,0.4)' }}>
              {/* Animated gold border glow */}
              <motion.div className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{ boxShadow: ['0 0 20px rgba(245,158,11,0.05)', '0 0 40px rgba(245,158,11,0.15)', '0 0 20px rgba(245,158,11,0.05)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />

              <div className="px-6 py-5 relative" style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                <h2 className="text-xl font-black text-navy-900 text-center">See Your TRUE Claim Value!</h2>
                {step !== 'done' && (
                  <div className="flex items-center justify-center gap-3 mt-2">
                    <div className="flex gap-1.5">
                      <div className="h-1.5 w-10 rounded-full bg-navy-900/40" />
                      <div className={`h-1.5 w-10 rounded-full transition-all duration-500 ${step === 2 ? 'bg-navy-900/80' : 'bg-navy-900/20'}`} />
                    </div>
                    <span className="text-xs font-bold text-navy-900/60">{step}/2</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                {step === 1 && (
                  <motion.form onSubmit={handleNext} className="space-y-4"
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    {[
                      { label: 'Claim Type', key: 'claimType', opts: CLAIM_TYPES, ph: 'Select claim type...' },
                      { label: 'Property Type', key: 'propertyType', opts: PROPERTY_TYPES, ph: 'Select property type...' },
                    ].map(({ label, key, opts, ph }) => (
                      <div key={key}>
                        <label className="block text-xs font-semibold text-white/50 mb-1.5">{label}</label>
                        <select required value={(form as any)[key]}
                          onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                          className="w-full rounded-xl px-4 py-3 text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
                          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <option value="" disabled>{ph}</option>
                          {opts.map(t => <option key={t} value={t} style={{ background: '#0D2545' }}>{t}</option>)}
                        </select>
                      </div>
                    ))}
                    {[{ label: 'Phone Number', key: 'phone', type: 'tel', ph: '(555) 000-0000' }, { label: 'Email Address', key: 'email', type: 'email', ph: 'your@email.com' }].map(({ label, key, type, ph }) => (
                      <div key={key}>
                        <label className="block text-xs font-semibold text-white/50 mb-1.5">{label}</label>
                        <input type={type} required value={(form as any)[key]}
                          onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                          placeholder={ph}
                          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:ring-1 focus:ring-gold-500/50 transition-all"
                          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }} />
                      </div>
                    ))}
                    <button type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-navy-900 flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] group relative overflow-hidden"
                      style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }} />
                      Next <ArrowRight size={16} />
                    </button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.form onSubmit={handleSubmit} className="space-y-4"
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <p className="text-sm font-bold text-center mb-2" style={{ color: '#F59E0B' }}>Your Claim Value May Be A Lot Higher Than You Expect!</p>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5">Date of Damage</label>
                      <input type="date" required value={form.dateOfDamage}
                        onChange={e => setForm(f => ({ ...f, dateOfDamage: e.target.value }))}
                        className="w-full rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', colorScheme: 'dark' }} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5">Zip Code</label>
                      <input type="text" required value={form.zipCode}
                        onChange={e => setForm(f => ({ ...f, zipCode: e.target.value }))}
                        placeholder="e.g. 33101"
                        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:ring-1 focus:ring-gold-500/50"
                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-2">Is Your Damage Affecting Your Daily Living or Business Activities?</label>
                      <div className="flex gap-3">
                        {(['yes', 'no'] as const).map(v => (
                          <button key={v} type="button"
                            onClick={() => setForm(f => ({ ...f, affectsLife: v }))}
                            className="flex-1 py-3 rounded-xl text-sm font-bold transition-all duration-200"
                            style={form.affectsLife === v
                              ? { background: 'linear-gradient(135deg, #D97706, #F59E0B)', color: '#0A1E3C' }
                              : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                            {v === 'yes' ? 'Yes' : 'No'}
                          </button>
                        ))}
                      </div>
                    </div>
                    {submitError && (
                      <p className="text-sm text-red-400 text-center">{submitError}</p>
                    )}
                    <button type="submit" disabled={submitting}
                      className="w-full py-3.5 rounded-xl font-bold text-navy-900 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] group relative overflow-hidden disabled:opacity-60 disabled:hover:scale-100"
                      style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                      <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)' }} />
                      {submitting ? 'Submitting...' : 'Submit Claim Details!'} <ArrowRight size={16} />
                    </button>
                  </motion.form>
                )}

                {step === 'done' && (
                  <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="py-4 text-center space-y-3">
                    <motion.div className="text-4xl" animate={{ rotate: [0, -10, 10, -5, 0] }} transition={{ duration: 0.6, delay: 0.3 }}>🏆</motion.div>
                    <h3 className="text-lg font-black" style={{ color: '#F59E0B' }}>You May Live in a Higher Than Normal Payout Zip Code!</h3>
                    <p className="text-sm text-white/65 leading-relaxed">Thank you for submitting your details. One of our founders has received your information and is currently building your True Claim Value. They may have a few extra questions — please keep an eye on your email and phone.</p>
                    <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-xl font-bold text-navy-900 text-sm"
                      style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                      <Phone size={14} /> 1-888-397-5420
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Trust bar */}
      <div className="relative overflow-hidden py-4 mt-4" style={{ background: 'rgba(245,158,11,0.07)', borderTop: '1px solid rgba(245,158,11,0.18)', borderBottom: '1px solid rgba(245,158,11,0.18)' }}>
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 28s linear infinite', width: 'max-content' }}>
          {[...TRUST_BULLETS, ...TRUST_BULLETS].map((b, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-8 text-sm font-bold text-white/75">
              <span style={{ color: '#F59E0B' }}>—</span>{b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
