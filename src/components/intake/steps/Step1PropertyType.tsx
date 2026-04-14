'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { Home, Building, Layers, Key } from 'lucide-react'
import { cn } from '@/lib/utils'

const PROPERTY_TYPES = [
  { value: 'residential', label: 'Residential Home', icon: Home, desc: 'Single-family home, townhouse, or condo' },
  { value: 'commercial', label: 'Commercial Property', icon: Building, desc: 'Business, office, warehouse, or retail' },
  { value: 'multi-unit', label: 'Multi-Unit / Apartment', icon: Layers, desc: 'Duplex, apartment complex, or multi-family' },
  { value: 'rental', label: 'Rental Property', icon: Key, desc: 'Investment or rental property you own' },
]

interface StepProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export default function Step1PropertyType({ onNext }: StepProps) {
  const { control, watch, setValue } = useFormContext()
  const selected = watch('propertyType')

  const handleSelect = (value: string) => {
    setValue('propertyType', value)
    setTimeout(onNext, 300) // Brief delay so selection registers visually
  }

  return (
    <div className="card-dark p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        What type of property was damaged?
      </h2>
      <p className="text-sm text-slate-400 mb-7">
        This helps us route your claim to the right specialist.
      </p>

      <div className="grid sm:grid-cols-2 gap-3">
        {PROPERTY_TYPES.map((type) => (
          <button
            key={type.value}
            type="button"
            onClick={() => handleSelect(type.value)}
            className={cn(
              'intake-option text-left transition-all duration-250',
              selected === type.value ? 'selected' : ''
            )}
          >
            <div
              className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300',
                selected === type.value
                  ? 'bg-gold-500/25 border border-gold-500/50'
                  : 'bg-slate-100 border border-slate-200'
              )}
            >
              <type.icon
                size={18}
                className={selected === type.value ? 'text-gold-400' : 'text-slate-400'}
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">{type.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{type.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
