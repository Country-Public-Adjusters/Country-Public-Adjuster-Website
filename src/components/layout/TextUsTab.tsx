'use client'

import { MessageSquare } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

const SMS_NUMBER = '18883975420'

export default function TextUsTab() {
  return (
    <a
      href={`sms:${SMS_NUMBER}`}
      onClick={() => Analytics.ctaClick('Text Us', 'text-tab')}
      aria-label="Text us 24/7"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[10000]
                 flex flex-col items-center justify-center gap-2
                 transition-all duration-200 hover:pr-1 group"
      style={{
        background: 'linear-gradient(180deg, #F59E0B 0%, #D97706 100%)',
        width: 'clamp(28px, 4vw, 36px)',
        paddingTop: 'clamp(12px, 2.5vw, 20px)',
        paddingBottom: 'clamp(12px, 2.5vw, 20px)',
        borderRadius: '10px 0 0 10px',
        boxShadow: '-3px 0 16px rgba(245,158,11,0.35)',
      }}
    >
      <MessageSquare
        size={15}
        className="text-white flex-shrink-0 group-hover:scale-110 transition-transform"
        style={{ writingMode: 'horizontal-tb' }}
      />
      <span
        className="text-white font-black text-xs tracking-widest uppercase select-none"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', letterSpacing: '0.2em' }}
      >
        Text Us
      </span>
      <span
        className="text-white/90 font-black select-none"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', fontSize: '11px', letterSpacing: '0.15em' }}
      >
        24/7
      </span>
    </a>
  )
}
