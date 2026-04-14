'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface Step {
  id: number
  label: string
  shortLabel: string
}

interface IntakeProgressProps {
  currentStep: number
  totalSteps: number
  steps: Step[]
}

export default function IntakeProgress({
  currentStep,
  totalSteps,
  steps,
}: IntakeProgressProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100

  return (
    <div className="mb-8">
      {/* Step label */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold tracking-widest uppercase text-gold-500">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-xs text-white/35 font-medium">
          {steps[currentStep - 1]?.label}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundImage: 'linear-gradient(90deg, #D97706 0%, #F59E0B 100%)' }}
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Step dots */}
      <div className="hidden sm:flex items-center justify-between">
        {steps.map((step, i) => {
          const isCompleted = currentStep > step.id
          const isActive = currentStep === step.id

          return (
            <div key={step.id} className="flex flex-col items-center gap-1.5">
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                  backgroundColor: isCompleted
                    ? '#F59E0B'
                    : isActive
                    ? 'rgba(245,158,11,0.2)'
                    : 'rgba(255,255,255,0.06)',
                  borderColor: isCompleted
                    ? '#F59E0B'
                    : isActive
                    ? 'rgba(245,158,11,0.6)'
                    : 'rgba(255,255,255,0.1)',
                }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
              >
                {isCompleted ? (
                  <Check size={12} className="text-navy-950" strokeWidth={3} />
                ) : isActive ? (
                  <div className="w-2 h-2 rounded-full bg-gold-500" />
                ) : null}
              </motion.div>
              <span
                className={`text-2xs font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-gold-400'
                    : isCompleted
                    ? 'text-slate-400'
                    : 'text-white/25'
                }`}
              >
                {step.shortLabel}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
