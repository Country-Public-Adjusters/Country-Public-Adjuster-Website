'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowLeft } from 'lucide-react'

import Step1PropertyType from './steps/Step1PropertyType'
import Step2DamageType from './steps/Step2DamageType'
import Step3Location from './steps/Step3Location'
import Step4Timing from './steps/Step4Timing'
import Step5InsuranceStage from './steps/Step5InsuranceStage'
import Step6ClaimDetails from './steps/Step6ClaimDetails'
import Step7ContactInfo from './steps/Step7ContactInfo'
import Step8Confirmation from './steps/Step8Confirmation'
import IntakeProgress from './IntakeProgress'
import { Analytics } from '@/lib/analytics'
import { isAfterHours, getUTMParams } from '@/lib/utils'
import type { ClaimIntakeData } from '@/types'

// ─── SCHEMA ──────────────────────────────────────────────────────────────────

const intakeSchema = z.object({
  // Step 1
  propertyType: z.enum(['residential', 'commercial', 'multi-unit', 'rental']).nullable(),
  ownerType: z.enum(['owner', 'representative']).nullable(),
  // Step 2
  damageTypes: z.array(z.string()).min(1, 'Select at least one damage type'),
  // Step 3
  address: z.string().optional(),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip: z.string().min(5, 'Valid ZIP required'),
  region: z.enum(['nashville', 'south-florida', 'other']).nullable(),
  // Step 4
  damageDate: z.string().optional(),
  dateCertain: z.boolean().default(false),
  isUrgent: z.boolean().default(false),
  urgencyDescription: z.string().optional(),
  // Step 5
  insuranceStage: z.enum(['not-filed', 'filed', 'underpaid', 'denied', 'need-inspection', 'second-opinion']).nullable(),
  insurerName: z.string().optional(),
  // Step 6
  claimDescription: z.string().optional(),
  claimNumber: z.string().optional(),
  hasPhotos: z.boolean().default(false),
  // Step 7
  firstName: z.string().min(1, 'First name required'),
  lastName: z.string().min(1, 'Last name required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  preferredContact: z.enum(['phone', 'email', 'text', 'any']).default('any'),
  bestTime: z.string().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: 'You must agree to continue' }) }),
})

type IntakeFormData = z.infer<typeof intakeSchema>

// ─── STEPS CONFIG ────────────────────────────────────────────────────────────

const STEPS = [
  { id: 1, label: 'Property', shortLabel: 'Property' },
  { id: 2, label: 'Damage', shortLabel: 'Damage' },
  { id: 3, label: 'Location', shortLabel: 'Location' },
  { id: 4, label: 'Timing', shortLabel: 'Timing' },
  { id: 5, label: 'Insurance', shortLabel: 'Insurance' },
  { id: 6, label: 'Details', shortLabel: 'Details' },
  { id: 7, label: 'Contact', shortLabel: 'Contact' },
  { id: 8, label: 'Done', shortLabel: 'Done' },
]

const STEP_COMPONENTS = [
  Step1PropertyType,
  Step2DamageType,
  Step3Location,
  Step4Timing,
  Step5InsuranceStage,
  Step6ClaimDetails,
  Step7ContactInfo,
  Step8Confirmation,
]

// ─── SLIDE VARIANTS ──────────────────────────────────────────────────────────

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.97,
  }),
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function ClaimIntake() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const methods = useForm<IntakeFormData>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      propertyType: null,
      ownerType: null,
      damageTypes: [],
      address: '',
      city: '',
      state: '',
      zip: '',
      region: null,
      damageDate: '',
      dateCertain: false,
      isUrgent: false,
      urgencyDescription: '',
      insuranceStage: null,
      insurerName: '',
      claimDescription: '',
      claimNumber: '',
      hasPhotos: false,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      preferredContact: 'any',
      bestTime: '',
    },
    mode: 'onTouched',
  })

  const goNext = useCallback(() => {
    const nextStep = step + 1
    Analytics.formStepComplete(step, STEPS[step - 1].label)
    setDirection(1)
    setStep(nextStep)
  }, [step])

  const goPrev = useCallback(() => {
    if (step === 1) return
    setDirection(-1)
    setStep(step - 1)
  }, [step])

  const onSubmit = async (data: IntakeFormData) => {
    const utmParams = getUTMParams()

    // Build CRM-ready payload
    const payload = {
      ...data,
      source: 'website',
      isAfterHours: isAfterHours(),
      submittedAt: new Date().toISOString(),
      urgencyScore: data.isUrgent ? 'emergency' : 'standard',
      ...utmParams,
    }

    try {
      // Send to your CRM webhook — replace with your endpoint
      const webhookUrl = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
      }

      Analytics.formSubmit(
        data.region ?? 'unknown',
        data.damageTypes.join(',')
      )

      setSubmitted(true)
      setDirection(1)
      setStep(8)
    } catch (err) {
      console.error('Intake submission error:', err)
      // Still advance to confirmation — we'll follow up
      setSubmitted(true)
      setStep(8)
    }
  }

  const CurrentStep = STEP_COMPONENTS[step - 1]

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      {step < 8 && (
        <IntakeProgress
          currentStep={step}
          totalSteps={7}
          steps={STEPS.slice(0, 7)}
        />
      )}

      {/* Form */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <CurrentStep
                onNext={goNext}
                onPrev={goPrev}
                isFirst={step === 1}
                isLast={step === 7}
              />
            </motion.div>
          </AnimatePresence>
        </form>
      </FormProvider>

      {/* Back button (outside form card, above progress) */}
      {step > 1 && step < 8 && (
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex items-center gap-2 text-sm text-white/40
                       hover:text-white/70 transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            Back
          </button>
        </div>
      )}
    </div>
  )
}
