'use client'

import { useFormContext } from 'react-hook-form'
import { Cloud, Wind, Droplets, Home, Zap, Flame, AlertTriangle, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const DAMAGE_TYPES = [
  { value: 'hail', label: 'Hail Damage', icon: Cloud },
  { value: 'wind', label: 'Wind Damage', icon: Wind },
  { value: 'water', label: 'Water / Flooding', icon: Droplets },
  { value: 'roof', label: 'Roof Damage', icon: Home },
  { value: 'hurricane', label: 'Hurricane / Storm', icon: Zap },
  { value: 'fire', label: 'Fire / Smoke', icon: Flame },
  { value: 'structural', label: 'Structural Damage', icon: AlertTriangle },
  { value: 'other', label: 'Other / Not Sure', icon: HelpCircle },
]

interface StepProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export default function Step2DamageType({ onNext }: StepProps) {
  const { watch, setValue, formState: { errors } } = useFormContext()
  const selected: string[] = watch('damageTypes') || []

  const toggle = (value: string) => {
    if (selected.includes(value)) {
      setValue('damageTypes', selected.filter((v) => v !== value))
    } else {
      setValue('damageTypes', [...selected, value])
    }
  }

  return (
    <div className="card-dark p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-white mb-2">
        What type of damage occurred?
      </h2>
      <p className="text-sm text-white/50 mb-7">
        Select all that apply. You can choose more than one.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-7">
        {DAMAGE_TYPES.map((type) => {
          const isSelected = selected.includes(type.value)
          return (
            <button
              key={type.value}
              type="button"
              onClick={() => toggle(type.value)}
              className={cn(
                'flex flex-col items-center gap-2 p-4 rounded-2xl border-2 text-center cursor-pointer',
                'transition-all duration-250',
                isSelected
                  ? 'border-gold-500 bg-gold-500/10'
                  : 'border-white/[0.08] bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.05]'
              )}
            >
              <div
                className={cn(
                  'w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-250',
                  isSelected
                    ? 'bg-gold-500/20 border border-gold-500/40'
                    : 'bg-white/[0.06] border border-white/[0.08]'
                )}
              >
                <type.icon
                  size={17}
                  className={isSelected ? 'text-gold-400' : 'text-white/45'}
                />
              </div>
              <span
                className={cn(
                  'text-xs font-semibold leading-tight',
                  isSelected ? 'text-white' : 'text-white/55'
                )}
              >
                {type.label}
              </span>
            </button>
          )
        })}
      </div>

      {errors.damageTypes && (
        <p className="text-sm text-red-400 mb-4">{errors.damageTypes.message as string}</p>
      )}

      <button
        type="button"
        onClick={onNext}
        disabled={selected.length === 0}
        className="btn-primary-lg w-full disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </div>
  )
}
