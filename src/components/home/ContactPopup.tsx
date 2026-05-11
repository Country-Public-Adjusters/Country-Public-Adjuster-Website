'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Mail, MessageSquare } from 'lucide-react'

export default function ContactPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Only trigger after the claim form section has scrolled OUT of view upward
    // (user has scrolled PAST it, not before it)
    const target = document.getElementById('free-inspection')
    if (!target) return

    let hasBeenVisible = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (dismissed) return
        if (entry.isIntersecting) {
          // User can see the form — mark it as seen
          hasBeenVisible = true
        } else if (hasBeenVisible && entry.boundingClientRect.bottom < 0) {
          // Form has been seen AND is now above the viewport (scrolled past)
          setShow(true)
        }
      },
      { threshold: 0 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [dismissed])

  const dismiss = () => { setShow(false); setDismissed(true) }

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* ── Mobile: slim strip pinned above the bottom CTA bar ── */}
          <motion.div
            key="mobile-popup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden"
            style={{
              position: 'fixed',
              bottom: 72,
              left: 12,
              right: 12,
              zIndex: 9985,
            }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: '#0A1E3C',
                border: '1px solid rgba(245,158,11,0.4)',
                boxShadow: '0 -4px 24px rgba(0,0,0,0.4)',
              }}
            >
              {/* Header row */}
              <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="text-sm font-black text-white leading-tight">Ready to get what you deserve?</p>
                <button
                  onClick={dismiss}
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ml-2"
                  style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
                >
                  <X size={11} />
                </button>
              </div>
              {/* 3 buttons */}
              <div className="grid grid-cols-3 divide-x" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <a
                  href="tel:18883975420"
                  className="flex flex-col items-center gap-1 py-3 text-xs font-bold text-slate-900"
                  style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}
                >
                  <Phone size={15} />
                  Call
                </a>
                <a
                  href="sms:18883975420"
                  className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-white"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <MessageSquare size={15} style={{ color: '#F59E0B' }} />
                  Text
                </a>
                <a
                  href="mailto:claims@countrypublicadjusters.com"
                  className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-white"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <Mail size={15} style={{ color: '#F59E0B' }} />
                  Email
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Desktop: full card ── */}
          <motion.div
            key="desktop-popup"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 z-[9990] hidden md:block"
            style={{ left: '50%', transform: 'translateX(-50%)', width: 'min(calc(100vw - 2rem), 32rem)' }}
          >
            <div
              className="rounded-2xl p-6 relative"
              style={{
                background: '#0A1E3C',
                border: '1px solid rgba(245,158,11,0.4)',
                boxShadow: '0 0 60px rgba(245,158,11,0.2), 0 20px 60px rgba(0,0,0,0.6)',
              }}
            >
              <button
                onClick={dismiss}
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <X size={16} />
              </button>
              <h3 className="text-xl font-black text-white mb-1">Ready to Get What You Deserve?</h3>
              <p className="text-sm text-white/60 mb-5">Contact us now — zero cost, zero risk, no obligation.</p>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="tel:18883975420"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl font-bold text-navy-900 text-sm text-center transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}
                >
                  <Phone size={20} /> Call Now
                </a>
                <a
                  href="sms:18883975420"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl font-semibold text-white text-sm text-center transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <MessageSquare size={20} className="text-gold-400" /> Text Us
                </a>
                <a
                  href="mailto:claims@countrypublicadjusters.com"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl font-semibold text-white text-sm text-center transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  <Mail size={20} className="text-gold-400" /> Email
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
