'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

const CLAIM_TYPES = ['Storm Damage', 'Hurricane', 'Wind Damage', 'Hail Damage', 'Water Damage', 'Roof Damage', 'Fire Damage', 'Smoke / Soot', 'Other']
const PROPERTY_TYPES = ['Residential Home', 'Commercial Building', 'Multi-Unit / Apartment', 'Rental / Investment Property']

const darkInput = {
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: '#FFFFFF',
}

export default function ClaimFormBottom() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [step, setStep] = useState<1 | 2 | 'done'>(1)
  const [form, setForm] = useState({
    claimType: '', propertyType: '', phone: '', email: '',
    dateOfDamage: '', zipCode: '', affectsLife: '' as 'yes' | 'no' | '',
  })

  const handleNext = (e: React.FormEvent) => { e.preventDefault(); setStep(2) }
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setStep('done') }

  return (
    <section id="free-inspection" ref={ref} style={{ background: '#FFFFFF' }} className="py-20 relative overflow-hidden">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-3 text-slate-900">
            See Your <span style={{ color: '#D97706' }}>TRUE Claim Value</span>
          </h2>
          <p className="text-slate-500 text-lg">Your claim may be worth far more than you think.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto"
        >
          <div className="rounded-2xl overflow-hidden"
            style={{ background: '#0A1E3C', border: '1px solid rgba(245,158,11,0.25)', boxShadow: '0 20px 60px rgba(10,30,60,0.25)' }}>

            {/* Header bar */}
            <div className="px-6 py-5 flex items-center justify-between"
              style={{ background: 'linear-gradient(135deg, #0D2545, #0A1E3C)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <h3 className="text-xl font-black text-white">See Your TRUE Claim Value!</h3>
              {step !== 'done' && <span className="text-sm font-bold text-white/40">{step}/2</span>}
            </div>

            {/* Form body */}
            <div className="p-8">
              {step === 1 && (
                <form onSubmit={handleNext} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-2">Claim Type</label>
                    <select required value={form.claimType}
                      onChange={e => setForm(f => ({ ...f, claimType: e.target.value }))}
                      className="w-full rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-gold-500/40"
                      style={{ ...darkInput }}>
                      <option value="" disabled style={{ background: '#0D2545' }}>Select claim type...</option>
                      {CLAIM_TYPES.map(t => <option key={t} value={t} style={{ background: '#0D2545' }}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-2">Property Type</label>
                    <select required value={form.propertyType}
                      onChange={e => setForm(f => ({ ...f, propertyType: e.target.value }))}
                      className="w-full rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-gold-500/40"
                      style={{ ...darkInput }}>
                      <option value="" disabled style={{ background: '#0D2545' }}>Select property type...</option>
                      {PROPERTY_TYPES.map(t => <option key={t} value={t} style={{ background: '#0D2545' }}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-2">Phone Number</label>
                    <input type="tel" required value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      placeholder="(555) 000-0000"
                      className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500/40"
                      style={{ ...darkInput, ...{ '::placeholder': { color: 'rgba(255,255,255,0.3)' } } as any }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-2">Email Address</label>
                    <input type="email" required value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500/40 placeholder-white/30"
                      style={{ ...darkInput }} />
                  </div>
                  <button type="submit"
                    className="w-full py-4 rounded-xl font-black text-slate-900 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] text-lg"
                    style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                    Next <ArrowRight size={18} />
                  </button>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-center font-bold mb-2" style={{ color: '#F59E0B' }}>Your Claim Value May Be A Lot Higher Than You Expect!</p>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-2">Date of Damage</label>
                    <input type="date" required value={form.dateOfDamage}
                      onChange={e => setForm(f => ({ ...f, dateOfDamage: e.target.value }))}
                      className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500/40"
                      style={{ ...darkInput, colorScheme: 'dark' } as any} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-2">Zip Code</label>
                    <input type="text" required value={form.zipCode}
                      onChange={e => setForm(f => ({ ...f, zipCode: e.target.value }))}
                      placeholder="e.g. 33101"
                      className="w-full rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-gold-500/40 placeholder-white/30"
                      style={{ ...darkInput }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-3">Is Your Damage Affecting Your Daily Living or Business Activities?</label>
                    <div className="flex gap-3">
                      {(['yes', 'no'] as const).map(v => (
                        <button key={v} type="button"
                          onClick={() => setForm(f => ({ ...f, affectsLife: v }))}
                          className="flex-1 py-3.5 rounded-xl text-sm font-bold transition-all"
                          style={form.affectsLife === v
                            ? { background: 'linear-gradient(135deg, #D97706, #F59E0B)', color: '#0A1E3C' }
                            : { background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: 'white' }
                          }>
                          {v === 'yes' ? 'Yes' : 'No'}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="submit"
                    className="w-full py-4 rounded-xl font-black text-slate-900 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] text-lg"
                    style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                    Submit Claim Details! <ArrowRight size={18} />
                  </button>
                </form>
              )}

              {step === 'done' && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-4">
                  <div className="text-5xl">🏆</div>
                  <h3 className="text-2xl font-black" style={{ color: '#F59E0B' }}>You May Live in a Higher Than Normal Payout Zip Code!</h3>
                  <p className="text-white/65 leading-relaxed">
                    Thank you for submitting your details. One of our founders has received your information and is currently building your True Claim Value. They may have a few extra questions — please keep an eye on your email and phone.
                  </p>
                  <a href="tel:18883975420"
                    className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-xl font-bold text-slate-900"
                    style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}>
                    <Phone size={16} /> 1-888-397-5420
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
