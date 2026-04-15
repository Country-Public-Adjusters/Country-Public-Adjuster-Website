'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle, Shield, Phone } from 'lucide-react'

const DAMAGE_TYPES = ['Hail', 'Wind', 'Water', 'Fire', 'Storm', 'Hurricane', 'Roof', 'Other']

const CLAIM_STATUS_OPTIONS = [
  'Not Filed Yet',
  'Filed — Awaiting Response',
  'Received Offer',
  'Denied',
  'Underpaid',
]

interface FormData {
  // Step 1
  name: string
  phone: string
  email: string
  zip: string
  // Step 2
  dateOfLoss: string
  propertyType: string
  damageTypes: string[]
  carrier: string
  claimStatus: string
  // Step 3
  adjusterInspected: string
  repairsMade: string
  hasPhotos: string
  occupied: string
}

const INITIAL_DATA: FormData = {
  name: '',
  phone: '',
  email: '',
  zip: '',
  dateOfLoss: '',
  propertyType: '',
  damageTypes: [],
  carrier: '',
  claimStatus: '',
  adjusterInspected: '',
  repairsMade: '',
  hasPhotos: '',
  occupied: '',
}

const STEPS = ['About You', 'Your Claim', 'Quick Questions']

function ProgressBar({ step }: { step: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        {STEPS.map((label, i) => (
          <div key={i} className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                i < step
                  ? 'bg-gold-500 text-white'
                  : i === step
                  ? 'bg-gold-500/20 border-2 border-gold-500 text-gold-400'
                  : 'bg-slate-700 text-slate-500'
              }`}
            >
              {i < step ? <CheckCircle size={14} /> : i + 1}
            </div>
            <span
              className={`text-xs font-semibold hidden sm:block ${
                i === step ? 'text-gold-400' : i < step ? 'text-slate-300' : 'text-slate-500'
              }`}
            >
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <div
                className={`h-px w-8 sm:w-12 mx-1 transition-all duration-500 ${
                  i < step ? 'bg-gold-500' : 'bg-slate-700'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #F59E0B, #FBBF24)' }}
          initial={false}
          animate={{ width: `${((step) / (STEPS.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  )
}

function Step1({ data, update }: { data: FormData; update: (d: Partial<FormData>) => void }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white mb-6">Tell us about yourself</h3>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => update({ name: e.target.value })}
          placeholder="Your full name"
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
          Phone Number *
        </label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => update({ phone: e.target.value })}
          placeholder="(555) 000-0000"
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
          Email Address *
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => update({ email: e.target.value })}
          placeholder="you@example.com"
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
          Property ZIP Code *
        </label>
        <input
          type="text"
          value={data.zip}
          onChange={(e) => update({ zip: e.target.value })}
          placeholder="ZIP code"
          maxLength={10}
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
        />
      </div>
    </div>
  )
}

function Step2({ data, update }: { data: FormData; update: (d: Partial<FormData>) => void }) {
  const toggleDamage = (type: string) => {
    const current = data.damageTypes
    if (current.includes(type)) {
      update({ damageTypes: current.filter((t) => t !== type) })
    } else {
      update({ damageTypes: [...current, type] })
    }
  }

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold text-white mb-6">About your claim</h3>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
          Date of Loss
        </label>
        <input
          type="date"
          value={data.dateOfLoss}
          onChange={(e) => update({ dateOfLoss: e.target.value })}
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
          Property Type
        </label>
        <select
          value={data.propertyType}
          onChange={(e) => update({ propertyType: e.target.value })}
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-500 transition-colors"
        >
          <option value="">Select property type…</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Mixed Use">Mixed Use</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
          Damage Type (select all that apply)
        </label>
        <div className="flex flex-wrap gap-2">
          {DAMAGE_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => toggleDamage(type)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                data.damageTypes.includes(type)
                  ? 'bg-gold-500/20 border-gold-500 text-gold-400'
                  : 'bg-slate-800 border-slate-600 text-slate-400 hover:border-slate-400'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5">
          Insurance Carrier
        </label>
        <input
          type="text"
          value={data.carrier}
          onChange={(e) => update({ carrier: e.target.value })}
          placeholder="e.g. State Farm, Citizens, Allstate…"
          className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
          Claim Status
        </label>
        <div className="space-y-2">
          {CLAIM_STATUS_OPTIONS.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div
                className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                  data.claimStatus === opt ? 'border-gold-500 bg-gold-500' : 'border-slate-500'
                }`}
                onClick={() => update({ claimStatus: opt })}
              >
                {data.claimStatus === opt && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
              <span
                className="text-sm text-slate-300 cursor-pointer"
                onClick={() => update({ claimStatus: opt })}
              >
                {opt}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

function QuickQuestion({
  question,
  options,
  value,
  onChange,
}: {
  question: string
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white mb-2">{question}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 ${
              value === opt
                ? 'bg-gold-500/20 border-gold-500 text-gold-400'
                : 'bg-slate-800 border-slate-600 text-slate-400 hover:border-slate-400'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

function Step3({ data, update }: { data: FormData; update: (d: Partial<FormData>) => void }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-6">A few quick questions</h3>
      <QuickQuestion
        question="Has an insurance adjuster already inspected your property?"
        options={['Yes', 'No', 'Scheduled']}
        value={data.adjusterInspected}
        onChange={(v) => update({ adjusterInspected: v })}
      />
      <QuickQuestion
        question="Have you made any repairs or temporary fixes?"
        options={['Yes', 'No', 'Partial']}
        value={data.repairsMade}
        onChange={(v) => update({ repairsMade: v })}
      />
      <QuickQuestion
        question="Do you have photos or documentation of the damage?"
        options={['Yes', 'No', 'Some']}
        value={data.hasPhotos}
        onChange={(v) => update({ hasPhotos: v })}
      />
      <QuickQuestion
        question="Is the property currently occupied?"
        options={['Yes', 'No', 'Partially']}
        value={data.occupied}
        onChange={(v) => update({ occupied: v })}
      />
    </div>
  )
}

function SuccessState({ name }: { name: string }) {
  return (
    <div className="text-center py-10">
      <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={32} className="text-green-400" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">
        Thank you{name ? `, ${name.split(' ')[0]}` : ''}.
      </h3>
      <p className="text-slate-400 text-base leading-relaxed max-w-sm mx-auto">
        A founder will reach out within 24 hours to personally review your submission and
        discuss the potential value of your claim.
      </p>
    </div>
  )
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
}

export default function IntakePreview() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const update = (partial: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...partial }))
    setError('')
  }

  const validateStep = (): boolean => {
    if (step === 0) {
      if (!formData.name.trim()) { setError('Please enter your name.'); return false }
      if (!formData.phone.trim()) { setError('Please enter your phone number.'); return false }
      if (!formData.email.trim()) { setError('Please enter your email.'); return false }
      if (!formData.zip.trim()) { setError('Please enter your ZIP code.'); return false }
    }
    return true
  }

  const next = () => {
    if (!validateStep()) return
    setDirection(1)
    setStep((s) => s + 1)
  }

  const back = () => {
    setError('')
    setDirection(-1)
    setStep((s) => s - 1)
  }

  const submit = () => {
    // Submit form data (could POST to an API route)
    console.log('Claim submission:', formData)
    setSubmitted(true)
  }

  return (
    <section
      ref={ref}
      className="bg-slate-900 section-padding overflow-hidden relative"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 55% at 50% 0%, rgba(245,158,11,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            Claim Assessment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-5"
          >
            Check the True Value of{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 60%, #FCD34D 100%)',
              }}
            >
              Your Claim
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Answer a few quick questions. No commitment. No pressure. We&apos;ll give you a
            real picture of what your claim may be worth.
          </motion.p>
        </div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-xl mx-auto"
        >
          <div className="rounded-3xl border border-slate-700 bg-slate-800/60 backdrop-blur-sm p-7 md:p-10">
            {!submitted ? (
              <>
                <ProgressBar step={step} />

                {/* Sliding step content */}
                <div className="overflow-hidden min-h-[360px]">
                  <AnimatePresence mode="wait" custom={direction} initial={false}>
                    <motion.div
                      key={step}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {step === 0 && <Step1 data={formData} update={update} />}
                      {step === 1 && <Step2 data={formData} update={update} />}
                      {step === 2 && <Step3 data={formData} update={update} />}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-red-400 text-sm mt-3">{error}</p>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between gap-3 mt-7 pt-5 border-t border-slate-700">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors font-medium"
                    >
                      <ArrowLeft size={16} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 2 ? (
                    <button
                      type="button"
                      onClick={next}
                      className="btn-primary-lg px-7 py-3 text-sm gap-2"
                    >
                      Next
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={submit}
                      className="btn-primary-lg px-7 py-3 text-sm gap-2"
                    >
                      Get My Claim Assessment
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </>
            ) : (
              <SuccessState name={formData.name} />
            )}
          </div>

          {/* Below form links */}
          <div className="text-center mt-6 space-y-3">
            <p className="text-sm text-slate-500">
              Need to submit a full formal claim?{' '}
              <Link href="/intake" className="text-gold-400 hover:text-gold-300 font-semibold transition-colors">
                Start the full intake process →
              </Link>
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Shield size={11} className="text-green-400/70" />
                No commitment required
              </span>
              <span className="flex items-center gap-1.5">
                <Shield size={11} className="text-green-400/70" />
                No fee unless we win
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={11} className="text-gold-400/70" />
                A founder will personally review your submission
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
