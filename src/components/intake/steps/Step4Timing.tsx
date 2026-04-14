'use client'

import { useFormContext } from 'react-hook-form'
import { Calendar, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

const URGENCY_OPTIONS = [
  {
    value: true,
    label: 'Yes — active damage or emergency',
    sub: 'Water intrusion, exposed structure, or immediate safety concern',
    urgent: true,
  },
  {
    value: false,
    label: 'No — stable situation',
    sub: 'Damage is documented, property is secure',
    urgent: false,
  },
]

interface StepProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export default function Step4Timing({ onNext }: StepProps) {
  const { register, watch, setValue } = useFormContext()
  const isUrgent = watch('isUrgent')

  return (
    <div className="card-dark p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-white mb-2">
        When did the damage occur?
      </h2>
      <p className="text-sm text-white/50 mb-6">
        Timing matters — some claims have filing deadlines.
      </p>

      {/* Date input */}
      <div className="mb-6">
        <label className="block text-xs font-semibold text-white/50 mb-2 uppercase tracking-wide">
          Approximate damage date
        </label>
        <div className="relative">
          <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
          <input
            {...register('damageDate')}
            type="date"
            className="input-dark pl-11"
          />
        </div>
        <label className="flex items-center gap-2 mt-3 cursor-pointer">
          <input
            {...register('dateCertain')}
            type="checkbox"
            className="w-4 h-4 rounded border-white/20 bg-white/5 accent-gold-500"
          />
          <span className="text-xs text-white/45">I don't know the exact date</span>
        </label>
      </div>

      {/* Urgency */}
      <div>
        <label className="block text-sm font-semibold text-white mb-3">
          Is there an active, ongoing issue with the property?
        </label>
        <div className="space-y-2.5">
          {URGENCY_OPTIONS.map((opt) => (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => setValue('isUrgent', opt.value)}
              className={cn(
                'intake-option w-full text-left',
                isUrgent === opt.value ? 'selected' : ''
              )}
            >
              <div
                className={cn(
                  'w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0',
                  opt.urgent
                    ? isUrgent === true
                      ? 'bg-red-500/20 border border-red-500/40'
                      : 'bg-white/[0.06] border border-white/[0.08]'
                    : 'bg-white/[0.06] border border-white/[0.08]'
                )}
              >
                <AlertTriangle
                  size={16}
                  className={
                    isUrgent === opt.value
                      ? opt.urgent ? 'text-red-400' : 'text-gold-400'
                      : 'text-white/35'
                  }
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{opt.label}</div>
                <div className="text-xs text-white/40 mt-0.5">{opt.sub}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {isUrgent === true && (
        <div className="mt-4 p-4 rounded-2xl border border-red-500/25 bg-red-500/8">
          <p className="text-sm text-red-300 font-semibold mb-1">
            ⚡ Emergency situation noted
          </p>
          <p className="text-xs text-red-300/70">
            We'll flag your claim for priority response. A team member will contact you as soon as possible.
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={onNext}
        className="btn-primary-lg w-full mt-6"
      >
        Continue
      </button>
    </div>
  )
}
