'use client'

import { useFormContext } from 'react-hook-form'
import { MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

const REGION_OPTIONS = [
  { value: 'nashville', label: 'Nashville, TN', sub: 'Davidson, Williamson, Rutherford, and surrounding counties' },
  { value: 'south-florida', label: 'South Florida', sub: 'Miami-Dade, Broward, Palm Beach counties' },
  { value: 'other', label: 'Other Area', sub: 'Contact us to discuss coverage' },
]

interface StepProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export default function Step3Location({ onNext }: StepProps) {
  const { register, watch, setValue, formState: { errors } } = useFormContext()
  const region = watch('region')

  const handleRegion = (value: string) => {
    setValue('region', value)
    // Auto-fill state for Nashville
    if (value === 'nashville') setValue('state', 'TN')
    if (value === 'south-florida') setValue('state', 'FL')
  }

  return (
    <div className="card-dark p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-white mb-2">
        Where is the property located?
      </h2>
      <p className="text-sm text-slate-400 mb-6">
        This helps us assign the right local adjuster.
      </p>

      {/* Region selector */}
      <div className="space-y-2.5 mb-6">
        {REGION_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => handleRegion(opt.value)}
            className={cn(
              'intake-option w-full text-left',
              region === opt.value ? 'selected' : ''
            )}
          >
            <div
              className={cn(
                'w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0',
                region === opt.value
                  ? 'bg-gold-500/20 border border-gold-500/40'
                  : 'bg-white/[0.06] border border-white/[0.08]'
              )}
            >
              <MapPin
                size={16}
                className={region === opt.value ? 'text-gold-400' : 'text-white/40'}
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{opt.label}</div>
              <div className="text-xs text-white/40 mt-0.5">{opt.sub}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Address fields */}
      {region && (
        <div className="space-y-3 pt-4 border-t border-white/[0.06]">
          <p className="text-xs text-white/40 font-medium mb-3">
            Property address (optional — helps us prepare your inspection)
          </p>
          <input
            {...register('address')}
            placeholder="Street address"
            className="input-dark"
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              {...register('city')}
              placeholder="City *"
              className={cn('input-dark', errors.city && 'border-red-500/50')}
            />
            <input
              {...register('zip')}
              placeholder="ZIP code *"
              className={cn('input-dark', errors.zip && 'border-red-500/50')}
            />
          </div>
          {(errors.city || errors.zip) && (
            <p className="text-xs text-red-400">City and ZIP are required.</p>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={onNext}
        disabled={!region}
        className="btn-primary-lg w-full mt-6 disabled:opacity-40"
      >
        Continue
      </button>
    </div>
  )
}
