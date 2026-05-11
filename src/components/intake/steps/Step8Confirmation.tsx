'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Phone, MessageCircle, Clock } from 'lucide-react'
import { isAfterHours } from '@/lib/utils'
import { Analytics } from '@/lib/analytics'

const PHONE = '18883975420'
const PHONE_DISPLAY = '1-888-397-5420'

interface StepProps {
  onNext: () => void
  onPrev: () => void
  isFirst: boolean
  isLast: boolean
}

export default function Step8Confirmation({ }: StepProps) {
  const afterHours = isAfterHours()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="card-dark p-8 lg:p-10 text-center"
    >
      {/* Success icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        className="w-20 h-20 rounded-full bg-green-500/15 border-2 border-green-500/40
                   flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle size={36} className="text-green-400" />
      </motion.div>

      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
        Your request has been received.
      </h2>

      {afterHours ? (
        <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
          It's after hours right now. Your claim details have been captured and queued for
          priority review. A licensed adjuster will contact you first thing tomorrow morning.
          <span className="block mt-2 font-semibold text-gold-400">
            If it's an emergency, call us now.
          </span>
        </p>
      ) : (
        <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
          A licensed public adjuster will review your details and contact you shortly —
          usually within the hour during business hours. We come prepared and ready to help.
        </p>
      )}

      {/* Next steps */}
      <div className="space-y-3 text-left max-w-md mx-auto mb-8">
        {[
          { icon: Clock, text: 'We\'ll review your claim details', sub: 'Typically within 1–2 hours' },
          { icon: Phone, text: 'A licensed adjuster will call you', sub: 'Prepared with your information' },
          { icon: CheckCircle, text: 'Free inspection scheduled', sub: 'At a time that works for you' },
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-100">
            <step.icon size={16} className="text-gold-500 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-sm font-semibold text-slate-900">{step.text}</div>
              <div className="text-xs text-slate-400">{step.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Immediate action CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`tel:${PHONE}`}
          onClick={() => Analytics.phoneClick('confirmation')}
          className="btn-primary-lg flex-1"
        >
          <Phone size={17} />
          Call Now · {PHONE_DISPLAY}
        </a>
        {/* Chatbase trigger */}
        <button
          type="button"
          onClick={() => {
            Analytics.chatOpen()
            // This triggers the Chatbase widget to open
            window.dispatchEvent(new CustomEvent('chatbase:open'))
          }}
          className="btn-secondary-lg flex-1"
        >
          <MessageCircle size={17} />
          Chat with Us
        </button>
      </div>

      <p className="text-xs text-slate-400 mt-6">
        Have a case number or urgent situation? Call us directly — we always answer.
      </p>
    </motion.div>
  )
}
