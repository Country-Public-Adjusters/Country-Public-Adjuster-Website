'use client'

import { useFormContext } from 'react-hook-form'
import { FileText, Send, TrendingDown, XCircle, Search, GitCompare } from 'lucide-react'
import { cn } from '@/lib/utils'

const STAGES = [
  { value: 'not-filed', label: 'Haven\'t filed yet', sub: 'Damage occurred — no claim filed', icon: FileText },
  { value: 'filed', label: 'Claim filed, waiting', sub: 'Claim is open — awaiting assessment', icon: Send },
  { value: 'underpaid', label: 'Underpaid — offer received', sub: 'Received an offer that seems too low', icon: TrendingDown },
  { value: 'denied', label: 'Claim denied', sub: 'Insurance company denied the claim', icon: XCircle },
  { value: 'need-inspection', label: 'Need free inspection first', sub: 'Not sure of the extent of damage', icon: Search },
  { value: 'second-opinion', label: 'Want a second opinion', sub: 'Have an offer but unsure if it\'s fair', icon: GitCompare },
]

interface StepProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export default function Step5InsuranceStage({ onNext }: StepProps) {
  const { register, watch, setValue } = useFormContext()
  const selected = watch('insuranceStage')

  const handleSelect = (value: string) => {
    setValue('insuranceStage', value)
    setTimeout(onNext, 300)
  }

  return (
    <div className="card-dark p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-white mb-2">
        Where are you in the claim process?
      </h2>
      <p className="text-sm text-white/50 mb-6">
        We help at every stage — before, during, and after filing.
      </p>

      <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
        {STAGES.map((stage) => (
          <button
            key={stage.value}
            type="button"
            onClick={() => handleSelect(stage.value)}
            className={cn(
              'intake-option text-left',
              selected === stage.value ? 'selected' : ''
            )}
          >
            <div
              className={cn(
                'w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0',
                selected === stage.value
                  ? 'bg-gold-500/20 border border-gold-500/40'
                  : 'bg-white/[0.06] border border-white/[0.08]'
              )}
            >
              <stage.icon
                size={16}
                className={selected === stage.value ? 'text-gold-400' : 'text-white/40'}
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{stage.label}</div>
              <div className="text-xs text-white/40 mt-0.5">{stage.sub}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Optional insurer name */}
      <div className="pt-4 border-t border-white/[0.06]">
        <label className="block text-xs font-semibold text-white/40 mb-2 uppercase tracking-wide">
          Insurance company name (optional)
        </label>
        <input
          {...register('insurerName')}
          placeholder="e.g. State Farm, Allstate, Citizens..."
          className="input-dark"
        />
      </div>
    </div>
  )
}
