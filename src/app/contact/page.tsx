'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Clock, MessageCircle, Bot, ArrowRight } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import Link from 'next/link'

const CONTACT_CARDS = [
  {
    icon: MessageCircle,
    title: 'Start claim intake online',
    body: 'Answer 7 short questions. We review your details and call you prepared and ready to help. Takes under 3 minutes.',
    action: { label: 'Start Free Inspection', href: '/#free-inspection', isLink: true },
    accent: '#F59E0B',
    featured: true,
  },
  {
    icon: Phone,
    title: 'Call us directly',
    body: 'Talk to a real team member. For urgent or emergency situations — call now and we pick up.',
    action: { label: '1-888-397-5420', href: 'tel:18883975420', isLink: false },
    accent: '#F59E0B',
    featured: false,
  },
  {
    icon: Mail,
    title: 'Email us',
    body: 'For non-urgent inquiries, document sharing, or follow-up on an existing claim.',
    action: { label: 'claims@countrypublicadjusters.com', href: 'mailto:claims@countrypublicadjusters.com', isLink: false },
    accent: '#F59E0B',
    featured: false,
  },
  {
    icon: Bot,
    title: 'After hours?',
    body: 'Start the claim intake now. Our AI assistant captures your details and we respond first thing in the morning.',
    action: null,
    sub: 'Office hours: Mon–Fri 8am–6pm · Sat 9am–1pm',
    accent: '#F59E0B',
    featured: false,
  },
]

function ContactCard({ card, index }: { card: typeof CONTACT_CARDS[0]; index: number }) {
  const Icon = card.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
      className="group relative rounded-3xl p-7 flex flex-col cursor-default overflow-hidden"
      style={{
        background: card.featured ? 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(245,158,11,0.03) 100%)' : '#FFFFFF',
        border: card.featured ? '1.5px solid rgba(245,158,11,0.35)' : '1.5px solid #E8EDF2',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(245,158,11,0.5)'
        el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.1), 0 0 0 1px rgba(245,158,11,0.15)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = card.featured ? 'rgba(245,158,11,0.35)' : '#E8EDF2'
        el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
      }}
    >
      {/* Gold top bar on featured */}
      {card.featured && (
        <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
          style={{ background: 'linear-gradient(90deg, #D97706, #F59E0B, #FBBF24)' }} />
      )}

      {/* Icon */}
      <motion.div
        className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{
          width: '52px', height: '52px',
          background: card.featured
            ? 'linear-gradient(135deg, #D97706, #F59E0B)'
            : 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.06))',
          border: card.featured ? 'none' : '1px solid rgba(245,158,11,0.2)',
        }}
        whileHover={{ scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      >
        <Icon size={22} style={{ color: card.featured ? '#1e293b' : '#D97706' }} strokeWidth={1.8} />
      </motion.div>

      {/* Content */}
      <h2 className="text-lg font-black text-slate-900 mb-2 leading-snug">{card.title}</h2>
      <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">{card.body}</p>

      {/* Action */}
      {card.action && (
        card.action.isLink ? (
          <Link
            href={card.action.href}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-slate-900 self-start transition-all duration-200 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}
          >
            {card.action.label}
            <ArrowRight size={14} />
          </Link>
        ) : (
          <a
            href={card.action.href}
            className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors duration-200 group-hover:opacity-90"
            style={{ color: '#D97706' }}
          >
            {card.action.label}
          </a>
        )
      )}

      {card.sub && (
        <div className="flex items-center gap-2 text-xs text-slate-400 mt-auto">
          <Clock size={11} />
          <span>{card.sub}</span>
        </div>
      )}
    </motion.div>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative section-padding overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #030D1A 0%, #0D2545 50%, #0A1E3C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)' }} />

        <div className="container-site max-w-5xl relative z-10 text-center">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}>
              CONTACT US
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
              Get in touch
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Start your free claim review online, call us directly, or chat with our team.
              We respond quickly — because timing matters.
            </p>
          </FadeInView>
        </div>
      </section>


      {/* ── Contact cards ── */}
      <section className="bg-white py-16">
        <div className="container-site max-w-5xl">
          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {CONTACT_CARDS.map((card, i) => (
              <ContactCard key={card.title} card={card} index={i} />
            ))}
          </div>

        </div>
      </section>

    </>
  )
}
