'use client'

import { useFormContext } from 'react-hook-form'

interface StepProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export default function Step6ClaimDetails({ onNext }: StepProps) {
  const { register, watch, setValue } = useFormContext()
  const hasPhotos = watch('hasPhotos')

  return (
    <div className="card-dark p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-white mb-2">
        A little more about the damage
      </h2>
      <p className="text-sm text-white/50 mb-6">
        Optional — but more context helps us prepare a better review.
      </p>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wide">
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
        <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wide">
          Claim number (if already filed)
        </label>
        <input
          {...register('claimNumber')}
          placeholder="e.g. CLM-2024-XXXXXX"
          className="input-dark"
        />
      </div>

      {/* Photos */}
      <div className="mb-7">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={hasPhotos}
            onChange={(e) => setValue('hasPhotos', e.target.checked)}
            className="w-4 h-4 rounded border-white/20 bg-white/5 accent-gold-500"
          />
          <span className="text-sm text-white/70 font-medium">
            I have photos or documentation of the damage
          </span>
        </label>
        <p className="text-xs text-white/35 mt-2 ml-7">
          Don't worry if you don't — our inspection team documents everything.
        </p>
      </div>

      <button
        type="button"
        onClick={onNext}
        className="btn-primary-lg w-full"
      >
        Almost done — contact info
      </button>

      <p className="text-xs text-white/30 text-center mt-3">
        All information is kept strictly confidential.
      </p>
    </div>
  )
}
