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

export default function Step6ClaimDetails({ isLast }: StepProps) {
  const {
    register,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useFormContext()

  const hasPhotos = watch('hasPhotos')
  const preferredContact = watch('preferredContact')

  return (
    <div className="card-dark p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        A little more about the damage
      </h2>
      <p className="text-sm text-slate-400 mb-6">
        Optional — but more context helps us prepare a better review.
      </p>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
          Describe the damage in your own words
        </label>
        <textarea
          {...register('claimDescription')}
          rows={4}
          placeholder="Tell us what happened — when, what you saw, what's most damaged..."
          className="input-dark resize-none"
        />
      </div>

      {/* Claim number */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
          Claim number (if already filed)
        </label>
        <input
          {...register('claimNumber')}
          placeholder="e.g. CLM-2024-XXXXXX"
          className="input-dark"
        />
      </div>

      {/* Photos */}
      <div className="mb-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={hasPhotos}
            onChange={(e) => setValue('hasPhotos', e.target.checked)}
            className="w-4 h-4 rounded border-slate-300 bg-white/5 accent-gold-500"
          />
          <span className="text-sm text-slate-600 font-medium">
            I have photos or documentation of the damage
          </span>
        </label>
        <p className="text-xs text-slate-400 mt-2 ml-7">
          Don't worry if you don't — our inspection team documents everything.
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 mb-6" />

      {/* Preferred contact method */}
      <div className="mb-4">
        <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
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
                  ? 'border-gold-500 bg-gold-500/15 text-gold-400'
                  : 'border-slate-200 bg-slate-100 text-slate-400 hover:border-slate-300'
              )}
            >
              {method.label}
            </button>
          ))}
        </div>
      </div>

      {/* Best time */}
      <div className="mb-7">
        <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">
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

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary-lg w-full disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
            Submitting...
          </span>
        ) : (
          'Submit My Inspection Request'
        )}
      </button>

      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400">
        <Shield size={12} className="text-green-400/50" />
        <span>All information is kept strictly confidential</span>
      </div>
    </div>
  )
}
