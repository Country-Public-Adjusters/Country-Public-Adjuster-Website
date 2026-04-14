'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

const CHATBASE_BOT_ID = process.env.NEXT_PUBLIC_CHATBASE_BOT_ID || ''

export default function ChatWidget() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!CHATBASE_BOT_ID) return

    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = CHATBASE_BOT_ID
    script.setAttribute('domain', 'www.chatbase.co')
    document.body.appendChild(script)

    // Hide Chatbase's default bubble once — stop as soon as we find and kill it
    const OUR_IDS = ['cpa-chat-btn', 'cpa-chat-btn-mobile', 'cpa-cursor-dot', 'cpa-cursor-ring']
    const SKIP_TAGS = ['SCRIPT','STYLE','NOSCRIPT','HEADER','MAIN','FOOTER']
    let hiddenBubble = false

    const interval = setInterval(() => {
      // Once we've hidden the bubble, stop — don't interfere with the open chat panel
      if (hiddenBubble) {
        clearInterval(interval)
        return
      }

      document.querySelectorAll('body > *').forEach((el) => {
        const id = (el as HTMLElement).id || ''
        if (OUR_IDS.includes(id)) return
        if (SKIP_TAGS.includes((el as HTMLElement).tagName)) return
        const computed = window.getComputedStyle(el as HTMLElement)
        if (computed.position === 'fixed') {
          ;(el as HTMLElement).style.setProperty('display', 'none', 'important')
          hiddenBubble = true
        }
      })
    }, 300)

    // Stop after 10s regardless
    const timeout = setTimeout(() => clearInterval(interval), 10000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const handleToggle = () => {
    const cb = (window as any).chatbase
    if (typeof cb !== 'function') return
    if (!open) {
      cb('open')
      Analytics.chatOpen()
    } else {
      cb('close')
    }
    setOpen((o) => !o)
  }

  if (!CHATBASE_BOT_ID) return null

  return (
    <>
      {/* Desktop */}
      <div id="cpa-chat-btn" className="fixed bottom-6 right-6 z-[9999] flex-col items-end gap-3 hidden md:flex">
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 px-4 py-2 rounded-full
                         bg-navy-950/95 backdrop-blur-md border border-gold-500/30
                         text-sm font-semibold text-white shadow-lg pointer-events-none"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              Chat with us — we're online
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative">
          {!open && (
            <>
              <span className="absolute inset-0 rounded-full animate-ping"
                style={{ background: 'rgba(245,158,11,0.35)', animationDuration: '2s' }} />
              <span className="absolute inset-0 rounded-full animate-ping"
                style={{ background: 'rgba(245,158,11,0.2)', animationDuration: '2s', animationDelay: '0.5s' }} />
            </>
          )}
          <motion.button
            onClick={handleToggle}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{ width: '60px', height: '60px', backgroundImage: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)' }}
            className="relative rounded-full flex items-center justify-center
                       shadow-[0_0_30px_rgba(245,158,11,0.45),0_4px_20px_rgba(0,0,0,0.35)]
                       focus:outline-none"
            aria-label={open ? 'Close chat' : 'Open chat'}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="close"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} className="text-navy-950" strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span key="chat"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <MessageCircle size={26} className="text-navy-950" strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile */}
      <div id="cpa-chat-btn-mobile" className="fixed bottom-20 right-4 z-[9999] md:hidden">
        <div className="relative">
          {!open && (
            <span className="absolute inset-0 rounded-full animate-ping"
              style={{ background: 'rgba(245,158,11,0.35)', animationDuration: '2s' }} />
          )}
          <motion.button
            onClick={handleToggle}
            whileTap={{ scale: 0.92 }}
            style={{ width: '52px', height: '52px', backgroundImage: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)' }}
            className="relative rounded-full flex items-center justify-center
                       shadow-[0_0_24px_rgba(245,158,11,0.4),0_4px_16px_rgba(0,0,0,0.3)]
                       focus:outline-none"
            aria-label={open ? 'Close chat' : 'Open chat'}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <X size={20} className="text-navy-950" strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <MessageCircle size={22} className="text-navy-950" strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </>
  )
}
