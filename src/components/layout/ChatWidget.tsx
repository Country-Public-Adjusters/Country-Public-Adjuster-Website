'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

const CHATBASE_BOT_ID = process.env.NEXT_PUBLIC_CHATBASE_BOT_ID || ''

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!CHATBASE_BOT_ID) return

    // 1. Kill Chatbase's default launcher via CSS before the script even runs
    const style = document.createElement('style')
    style.id = 'chatbase-hide-default'
    style.textContent = `
      #chatbase-bubble-button,
      #chatbase-bubble-button-container,
      [id^="chatbase-bubble"],
      [class*="chatbase-bubble"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `
    document.head.appendChild(style)

    // 2. Load the script
    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = CHATBASE_BOT_ID
    script.setAttribute('domain', 'www.chatbase.co')
    script.onload = () => setReady(true)
    document.body.appendChild(script)

    return () => {
      style.remove()
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
    setOpen(o => !o)
  }

  if (!CHATBASE_BOT_ID) return null

  return (
    <>
      {/* Desktop */}
      <div
        id="cpa-chat-btn"
        className="fixed bottom-6 right-6 z-[9999] hidden md:flex flex-col items-end gap-3"
      >
        {/* Label pill */}
        <AnimatePresence>
          {!open && (
            <motion.button
              onClick={handleToggle}
              initial={{ opacity: 0, x: 12, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full
                         shadow-[0_4px_24px_rgba(0,0,0,0.18)] border border-gold-500/40
                         text-sm font-semibold text-slate-800 cursor-pointer
                         hover:shadow-[0_4px_28px_rgba(245,158,11,0.25)] transition-shadow duration-300"
              style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              Chat with us — we're online
            </motion.button>
          )}
        </AnimatePresence>

        {/* Main button */}
        <div className="relative">
          {/* Pulsing rings */}
          {!open && (
            <>
              <span
                className="absolute inset-0 rounded-full animate-ping pointer-events-none"
                style={{ background: 'rgba(245,158,11,0.4)', animationDuration: '2s' }}
              />
              <span
                className="absolute inset-0 rounded-full animate-ping pointer-events-none"
                style={{ background: 'rgba(245,158,11,0.2)', animationDuration: '2s', animationDelay: '0.6s' }}
              />
            </>
          )}
          <motion.button
            onClick={handleToggle}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{
              width: '62px',
              height: '62px',
              backgroundImage: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)',
              boxShadow: '0 0 32px rgba(245,158,11,0.55), 0 6px 24px rgba(0,0,0,0.25)',
            }}
            className="relative rounded-full flex items-center justify-center focus:outline-none"
            aria-label={open ? 'Close chat' : 'Open chat'}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="close"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={24} color="#1e293b" strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span key="chat"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <MessageCircle size={26} color="#1e293b" strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile */}
      <div
        id="cpa-chat-btn-mobile"
        className="fixed bottom-20 right-4 z-[9999] md:hidden flex flex-col items-end gap-2"
      >
        <AnimatePresence>
          {!open && (
            <motion.button
              onClick={handleToggle}
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold
                         text-slate-800 shadow-md border border-gold-500/40"
              style={{ background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              Chat with us
            </motion.button>
          )}
        </AnimatePresence>
        <div className="relative">
          {!open && (
            <span
              className="absolute inset-0 rounded-full animate-ping pointer-events-none"
              style={{ background: 'rgba(245,158,11,0.4)', animationDuration: '2s' }}
            />
          )}
          <motion.button
            onClick={handleToggle}
            whileTap={{ scale: 0.92 }}
            style={{
              width: '54px',
              height: '54px',
              backgroundImage: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
              boxShadow: '0 0 24px rgba(245,158,11,0.5), 0 4px_16px rgba(0,0,0,0.25)',
            }}
            className="relative rounded-full flex items-center justify-center focus:outline-none"
            aria-label={open ? 'Close chat' : 'Open chat'}
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.span key="close" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <X size={20} color="#1e293b" strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <MessageCircle size={22} color="#1e293b" strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </>
  )
}
