'use client'

import { MessageSquare } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

// Replace with the actual SMS number
const SMS_NUMBER = '18668069911'

export default function TextUsTab() {
  return (
    <a
      href={`sms:${SMS_NUMBER}`}
      onClick={() => Analytics.ctaClick('Text Us', 'text-tab')}
      aria-label="Text us 24/7"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[10000] hidden md:flex
                 flex-col items-center justify-center gap-1.5
                 px-2 py-4 rounded-l-xl shadow-lg
                 transition-all duration-200 hover:pr-3"
      style={{
        backgroundImage: 'linear-gradient(180deg, #F59E0B 0%, #D97706 100%)',
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
      }}
    >
      <MessageSquare size={16} className="text-white rotate-90 flex-shrink-0" style={{ writingMode: 'horizontal-tb' }} />
      <span
        className="text-white font-black text-xs tracking-widest uppercase select-none"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
      >
        Text Us
      </span>
      <span
        className="text-white/80 font-semibold uppercase select-none"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', fontSize: '9px', letterSpacing: '0.15em' }}
      >
        24/7
      </span>
    </a>
  )
}
