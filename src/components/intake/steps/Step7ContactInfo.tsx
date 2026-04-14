'use client'

import { useFormContext } from 'react-hook-form'
import { Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

const CONTACT_METHODS = [
  { value: 'phone', label: 'Phone call' },
  { value: 'text', label: 'Text message' },
  { value: 'email', label: 'Email' },
  { value: 'any', label: 'Any method' },
]

const BEST_TIMES = [
  'Morning (8am – 12pm)',
  'Afternoon (12pm – 5pm)',
  'Evening (5pm – 7pm)',
  'Anytime',
]

interface StepProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export default function Step7ContactInfo({ isLast }: StepProps) {
  const {
    register,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useFormContext()
  const preferredContact = watch('preferredContact')
  const consent = watch('consent')

  return (
    <div className="card-dark p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-white mb-2">
        How should we reach you?
      </h2>
      <p className="text-sm text-slate-400 mb-6">
        A licensed public adjuster will call you — prepared and ready to help.
      </p>

      {/* Name */}
      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <div>
          <input
            {...register('firstName')}
            placeholder="First name *"
            className={cn('input-dark', errors.firstName && 'border-red-500/50')}
          />
          {errors.firstName && (
            <p className="text-xs text-red-400 mt-1">{errors.firstName.message as string}</p>
          )}
        </div>
        <div>
          <input
            {...register('lastName')}
            placeholder="Last name *"
            className={cn('input-dark', errors.lastName && 'border-red-500/50')}
          />
          {errors.lastName && (
            <p className="text-xs text-red-400 mt-1">{errors.lastName.message as string}</p>
          )}
        </div>
      </div>

      {/* Contact */}
      <div className="grid sm:grid-cols-2 gap-3 mb-5">
        <div>
          <input
            {...register('phone')}
            type="tel"
            placeholder="Phone number *"
            className={cn('input-dark', errors.phone && 'border-red-500/50')}
          />
          {errors.phone && (
            <p className="text-xs text-red-400 mt-1">{errors.phone.message as string}</p>
          )}
        </div>
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Email address *"
            className={cn('input-dark', errors.email && 'border-red-500/50')}
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1">{errors.email.message as string}</p>
          )}
        </div>
      </div>

      {/* Preferred contact method */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wide">
          Preferred contact method
        </label>
        <div className="flex flex-wrap gap-2">
          {CONTACT_METHODS.map((method) => (
            <button
              key={method.value}
              type="button"
              onClick={() => setValue('preferredContact', method.value)}
              className={cn(
                'px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200',
                preferredContact === method.value
                  ? 'border-gold-500 bg-gold-500/15 text-gold-300'
                  : 'border-white/10 bg-white/[0.04] text-white/45 hover:border-white/20'
              )}
            >
              {method.label}
            </button>
          ))}
        </div>
      </div>

      {/* Best time */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wide">
          Best time to reach you
        </label>
        <select
          {...register('bestTime')}
          className="input-dark"
          style={{ appearance: 'none' }}
        >
          <option value="">Select a time window</option>
          {BEST_TIMES.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      {/* Consent */}
      <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register('consent')}
            type="checkbox"
            className="w-4 h-4 rounded border-white/20 bg-white/5 accent-gold-500 mt-0.5 flex-shrink-0"
          />
          <span className="text-xs text-white/45 leading-relaxed">
            I agree to be contacted by Country Public Adjusters regarding my property damage claim.
            I understand this is not a commitment, my inspection is free, and there is no upfront cost.
            I've read and agree to the{' '}
            <a href="/privacy" className="text-gold-400/80 underline">Privacy Policy</a>.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-400 mt-2">{errors.consent.message as string}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting || !consent}
        className="btn-primary-lg w-full disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          'Submit My Inspection Request'
        )}
      </button>

      {/* Trust reassurance */}
      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-white/30">
        <Shield size={12} className="text-green-400/50" />
        <span>No upfront cost · No commitment · Licensed professionals</span>
      </div>
    </div>
  )
}
