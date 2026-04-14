'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FAQItem } from '@/types'

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
  theme?: 'dark' | 'light'
}

export default function FAQAccordion({
  items,
  className,
  theme = 'dark',
}: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <div
            key={item.id}
            className={cn(
              'rounded-2xl border transition-all duration-300',
              theme === 'dark'
                ? isOpen
                  ? 'border-gold-500/30 bg-white/[0.06]'
                  : 'border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.05] hover:border-white/10'
                : isOpen
                ? 'border-navy-900/20 bg-navy-50/80'
                : 'border-navy-900/10 bg-white hover:bg-navy-50/50 hover:border-navy-900/15'
            )}
          >
            <button
              onClick={() => toggle(item.id)}
              className={cn(
                'w-full flex items-center justify-between gap-4 px-6 py-5 text-left',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-2xl'
              )}
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  'font-semibold text-base leading-snug',
                  theme === 'dark' ? 'text-slate-900' : 'text-navy-900'
                )}
              >
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-colors duration-300',
                  isOpen
                    ? 'border-gold-500 bg-gold-500/20 text-gold-400'
                    : theme === 'dark'
                    ? 'border-white/20 text-white/40'
                    : 'border-navy-900/20 text-navy-600/60'
                )}
              >
                <Plus size={14} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    className={cn(
                      'px-6 pb-5 text-sm leading-relaxed',
                      theme === 'dark' ? 'text-slate-500' : 'text-navy-700'
                    )}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
