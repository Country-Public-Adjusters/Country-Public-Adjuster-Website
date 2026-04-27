'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Phone } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  isTyping?: boolean
}

let msgCounter = 0
const newId = () => String(++msgCounter)

const OPENING_MESSAGE: Message = {
  id: 'open',
  role: 'assistant',
  content: "Hi! I'm here to help with your property damage insurance claim. Whether you've just had damage, received a low offer, or want to understand your options — I can help.\n\nWhat's going on with your property?",
}

function TypingDots() {
  return (
    <span className="flex gap-1 items-center py-0.5">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
    </span>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([OPENING_MESSAGE])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = useCallback(async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { id: newId(), role: 'user', content: text }
    const history = messages.filter(m => m.content && !m.isTyping)
    const apiMessages = [...history, userMsg].map(m => ({ role: m.role, content: m.content }))

    setMessages(prev => [...prev.filter(m => !m.isTyping), userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })

      const data = await res.json()

      if (!res.ok || data.error) throw new Error(data.error || 'Request failed')

      const paragraphs = (data.text as string)
        .split(/\n\n+/)
        .map(p => p.trim())
        .filter(Boolean)

      if (paragraphs.length === 0) return

      // Keep typing dots visible a moment longer before first reply appears
      const firstDelay = Math.min(1800 + paragraphs[0].length * 25, 4500)
      await new Promise(r => setTimeout(r, firstDelay))

      setLoading(false)

      // Show first paragraph
      setMessages(prev => [...prev, { id: newId(), role: 'assistant', content: paragraphs[0] }])

      // Show each remaining paragraph with typing indicator delay
      for (let i = 1; i < paragraphs.length; i++) {
        await new Promise(r => setTimeout(r, 2000))
        const typingId = newId()
        setMessages(prev => [...prev, { id: typingId, role: 'assistant', content: '', isTyping: true }])

        // Scale delay to paragraph length so longer paragraphs feel more "thought about"
        const delay = Math.min(3500 + paragraphs[i].length * 40, 8000)
        await new Promise(r => setTimeout(r, delay))

        const para = paragraphs[i]
        setMessages(prev =>
          prev.map(m => m.id === typingId ? { ...m, content: para, isTyping: false } : m)
        )
      }
    } catch (err: any) {
      console.error('Chat error:', err?.message)
      setLoading(false)
      setMessages(prev => [...prev, {
        id: newId(),
        role: 'assistant',
        content: "Sorry, I'm having trouble connecting right now. Please call us directly at 1.866.806.9911 and we'll be happy to help.",
      }])
    }
  }, [input, loading, messages])

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 md:right-6 z-[9998] w-[calc(100vw-2rem)] max-w-sm
                       rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{
              height: '520px',
              border: '1px solid rgba(245,158,11,0.3)',
              background: '#FFFFFF',
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 60%, #FBBF24 100%)' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={15} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm leading-tight">Country Public Adjusters</div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                    <span className="text-white/80 text-[11px] font-medium">Online now</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="tel:18668069911"
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/30
                             text-white text-[11px] font-semibold transition-colors duration-200"
                >
                  <Phone size={11} />
                  Call
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center
                             transition-colors duration-200"
                >
                  <X size={14} className="text-white" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              <AnimatePresence initial={false}>
                {messages.map(msg => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div
                        className="w-6 h-6 rounded-full flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)' }}
                      >
                        <MessageCircle size={11} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap
                        ${msg.role === 'user'
                          ? 'text-white rounded-br-sm'
                          : 'text-slate-800 rounded-bl-sm border border-slate-100'
                        }`}
                      style={msg.role === 'user'
                        ? { background: 'linear-gradient(135deg, #D97706, #F59E0B)' }
                        : { background: '#F8FAFC' }
                      }
                    >
                      {msg.isTyping || (msg.role === 'assistant' && msg.content === '')
                        ? <TypingDots />
                        : msg.content
                      }
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading indicator while waiting for first response */}
              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="flex justify-start"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #F59E0B, #FBBF24)' }}
                    >
                      <MessageCircle size={11} className="text-white" />
                    </div>
                    <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm border border-slate-100 bg-slate-50">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex-shrink-0 px-3 py-3 border-t border-slate-100 bg-white">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50
                             focus-within:border-gold-500/60 transition-colors duration-200">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-sm text-slate-900 placeholder-slate-400
                             focus:outline-none min-w-0"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                             transition-all duration-200 disabled:opacity-40"
                  style={{ background: input.trim() && !loading ? 'linear-gradient(135deg, #D97706, #F59E0B)' : '#E2E8F0' }}
                >
                  <Send size={14} className={input.trim() && !loading ? 'text-white' : 'text-slate-400'} />
                </button>
              </div>
              <p className="text-[10px] text-slate-400 text-center mt-2">
                Or call us directly: <a href="tel:18668069911" className="text-gold-500 font-semibold">1.866.806.9911</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Desktop trigger ── */}
      <div id="cpa-chat-btn" className="fixed bottom-6 right-6 z-[9999] hidden md:flex flex-col items-end gap-3">
        <AnimatePresence>
          {!open && (
            <motion.button
              onClick={() => { setOpen(true); Analytics.chatOpen() }}
              initial={{ opacity: 0, x: 12, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-full
                         text-sm font-bold text-white
                         transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 60%, #FBBF24 100%)',
                boxShadow: '0 4px 20px rgba(245,158,11,0.5), 0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              <span className="relative flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                <span className="relative w-2.5 h-2.5 rounded-full bg-green-400 block" />
              </span>
              Chat with us — we're online
            </motion.button>
          )}
        </AnimatePresence>

        <div className="relative">
          {!open && (
            <>
              <span className="absolute inset-0 rounded-full animate-ping pointer-events-none"
                style={{ background: 'rgba(245,158,11,0.4)', animationDuration: '2s' }} />
              <span className="absolute inset-0 rounded-full animate-ping pointer-events-none"
                style={{ background: 'rgba(245,158,11,0.2)', animationDuration: '2s', animationDelay: '0.6s' }} />
            </>
          )}
          <motion.button
            onClick={() => { setOpen(o => !o); if (!open) Analytics.chatOpen() }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{
              width: '62px', height: '62px',
              backgroundImage: 'linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #FBBF24 100%)',
              boxShadow: '0 0 32px rgba(245,158,11,0.55), 0 6px 24px rgba(0,0,0,0.2)',
            }}
            className="relative rounded-full flex items-center justify-center focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {open
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <X size={24} color="#1e293b" strokeWidth={2.5} />
                  </motion.span>
                : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                    <MessageCircle size={26} color="#1e293b" strokeWidth={2} />
                  </motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* ── Mobile trigger ── */}
      <div id="cpa-chat-btn-mobile" className="fixed bottom-20 right-4 z-[9999] md:hidden flex flex-col items-end gap-2">
        <AnimatePresence>
          {!open && (
            <motion.button
              onClick={() => { setOpen(true); Analytics.chatOpen() }}
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold text-white"
              style={{
                background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 60%, #FBBF24 100%)',
                boxShadow: '0 4px 16px rgba(245,158,11,0.5)',
              }}
            >
              <span className="relative flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                <span className="relative w-2 h-2 rounded-full bg-green-400 block" />
              </span>
              Chat with us
            </motion.button>
          )}
        </AnimatePresence>
        <div className="relative">
          {!open && (
            <span className="absolute inset-0 rounded-full animate-ping pointer-events-none"
              style={{ background: 'rgba(245,158,11,0.4)', animationDuration: '2s' }} />
          )}
          <motion.button
            onClick={() => { setOpen(o => !o); if (!open) Analytics.chatOpen() }}
            whileTap={{ scale: 0.92 }}
            style={{
              width: '54px', height: '54px',
              backgroundImage: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
              boxShadow: '0 0 24px rgba(245,158,11,0.5), 0 4px 16px rgba(0,0,0,0.2)',
            }}
            className="relative rounded-full flex items-center justify-center focus:outline-none"
          >
            <AnimatePresence mode="wait">
              {open
                ? <motion.span key="x" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <X size={20} color="#1e293b" strokeWidth={2.5} />
                  </motion.span>
                : <motion.span key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <MessageCircle size={22} color="#1e293b" strokeWidth={2} />
                  </motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </>
  )
}
