'use client'

import { useFormContext } from 'react-hook-form'
import { Shield, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StepProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export default function Step1ContactCapture({ onNext }: StepProps) {
  const {
    register,
    trigger,
    watch,
    formState: { errors },
  } = useFormContext()

  const consent = watch('consent')

  const handleNext = async () => {
    const valid = await trigger(['firstName', 'lastName', 'phone', 'email', 'consent'])
    if (valid) onNext()
  }

  return (
    <div className="card-dark p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-1">
        Let's start with your details
      </h2>
      <p className="text-sm text-slate-400 mb-6">
        We'll save your spot so you can continue even if you get interrupted.
      </p>

      {/* Name */}
      <div className="grid sm:grid-cols-2 gap-3 mb-3">
        <div>
          <input
            {...register('firstName')}
            placeholder="First name *"
            autoComplete="given-name"
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
            autoComplete="family-name"
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
            autoComplete="tel"
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
            autoComplete="email"
            className={cn('input-dark', errors.email && 'border-red-500/50')}
          />
          {errors.email && (
            <p className="text-xs text-red-400 mt-1">{errors.email.message as string}</p>
          )}
        </div>
      </div>

      {/* Consent */}
      <div className="mb-6 p-4 rounded-2xl bg-slate-100 border border-slate-200">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            {...register('consent')}
            type="checkbox"
            className="w-4 h-4 rounded border-slate-300 bg-white/5 accent-gold-500 mt-0.5 flex-shrink-0"
          />
          <span className="text-xs text-slate-400 leading-relaxed">
            I agree to be contacted by Country Public Adjusters regarding my property damage claim.
            Free inspection, no upfront cost, no commitment. I've read the{' '}
            <a href="/privacy" className="text-gold-400/80 underline">Privacy Policy</a>.
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-400 mt-2">{errors.consent.message as string}</p>
        )}
      </div>

      <button
        type="button"
        onClick={handleNext}
        disabled={!consent}
        className="btn-primary-lg w-full disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        Start My Claim Review
        <ArrowRight size={18} />
      </button>

      <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-400">
        <Shield size={12} className="text-green-400/50" />
        <span>No upfront cost · No commitment · Licensed professionals</span>
      </div>
    </div>
  )
}
