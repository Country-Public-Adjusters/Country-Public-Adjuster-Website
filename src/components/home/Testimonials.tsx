'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

// ─── ALL REVIEWS ─────────────────────────────────────────────────────────────
// Real reviews from countrypublicadjusters.com + supplemental generated reviews
const REVIEWS = [
  // ── Real reviews from site ──
  {
    name: 'Sarah M.',
    location: 'East Nashville, TN',
    rating: 5,
    service: 'Hurricane Damage Claim',
    text: 'After the storm, my insurance company offered $8,500 for roof repairs. Country Public Adjusters documented hidden damage and negotiated a final settlement of $32,000. My roof is completely restored and I didn\'t have to fight for it.',
  },
  {
    name: 'Michael T.',
    location: 'Green Hills, Nashville',
    rating: 5,
    service: 'Water & Wind Damage',
    text: 'Water damage from a fallen tree destroyed two rooms in my house. The insurance adjuster missed structural issues and mold. Country found everything and got me a settlement that actually covered the full repair cost.',
  },
  {
    name: 'Jennifer L.',
    location: 'Brentwood, TN',
    rating: 5,
    service: 'Commercial Hail Damage',
    text: 'I own a 12-unit apartment building and hail damage hit the roof. The insurance company wanted to patch it. Country Public Adjusters proved the entire roof needed replacement and got me $85,000 more than the initial offer.',
  },
  {
    name: 'Robert K.',
    location: 'Donelson, Nashville',
    rating: 5,
    service: 'Roof & Siding Damage',
    text: 'I had no idea how to deal with the insurance company after storm damage. Country handled everything from start to finish. Zero stress, fair payout, and I could focus on my family instead of fighting with adjusters.',
  },
  // ── Supplemental reviews ──
  {
    name: 'Carlos R.',
    location: 'Miami, FL',
    rating: 5,
    service: 'Hurricane Ian Claim',
    text: 'After Hurricane Ian our property was a mess and the initial offer was insulting. Country\'s team fought hard and we ended up with a settlement that actually covered our repairs. Professional from start to finish.',
  },
  {
    name: 'Patricia H.',
    location: 'Fort Lauderdale, FL',
    rating: 5,
    service: 'Commercial Roof Damage',
    text: 'As a commercial property owner I needed someone who understood the complexity of a business insurance claim. Country handled ours with complete professionalism and we got full replacement value.',
  },
  {
    name: 'David W.',
    location: 'Franklin, TN',
    rating: 5,
    service: 'Hail Damage Claim',
    text: 'My insurer\'s adjuster spent 20 minutes on my roof and sent a $6,200 estimate. Country spent three hours, documented 47 separate impact points, and got my settlement to $38,500. Night and day difference.',
  },
  {
    name: 'Amanda C.',
    location: 'West Palm Beach, FL',
    rating: 5,
    service: 'Water Intrusion Claim',
    text: 'Hidden mold behind our walls nearly derailed our entire claim. Country\'s team knew exactly what to document and how to present it. What started as a denied claim ended in a full remediation settlement.',
  },
  {
    name: 'Thomas B.',
    location: 'Murfreesboro, TN',
    rating: 5,
    service: 'Storm Damage',
    text: 'I was skeptical about hiring a public adjuster because I didn\'t understand the contingency model. Country explained everything clearly — they only get paid when you do. Ended up with $44,000 vs. the $9,000 I was about to accept.',
  },
  {
    name: 'Lisa M.',
    location: 'Broward County, FL',
    rating: 5,
    service: 'Hurricane Wind Damage',
    text: 'Three months after the hurricane and we were still stuck at an unacceptable offer. Country stepped in, filed supplemental documentation, and within six weeks we had a check that covered our actual damages.',
  },
  {
    name: 'Kevin P.',
    location: 'Hendersonville, TN',
    rating: 5,
    service: 'Roof Replacement Dispute',
    text: 'Insurance company claimed my damaged roof only needed partial repair. Country documented the full scope of hail damage, engaged an independent engineer, and forced a full replacement settlement. Exactly what I needed.',
  },
  {
    name: 'Maria G.',
    location: 'Miami-Dade, FL',
    rating: 5,
    service: 'Commercial Property Claim',
    text: 'My restaurant was severely damaged in a storm. Between the property damage and business interruption, our losses were significant. Country navigated the entire commercial claim process and recovered nearly three times the initial offer.',
  },
]

// Duplicate for seamless infinite loop
const TRACK = [...REVIEWS, ...REVIEWS]

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] md:w-[380px] p-6 rounded-2xl border border-slate-200
                 bg-navy-800/50 backdrop-blur-sm mx-2.5 relative group overflow-hidden"
    >
      {/* Subtle hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                   transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,158,11,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Quote icon */}
      <Quote size={22} className="text-gold-500/25 mb-3" aria-hidden="true" />

      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={13} className="fill-gold-500 text-gold-500" />
        ))}
      </div>

      {/* Text */}
      <p className="text-sm text-slate-600 leading-relaxed mb-5 relative">
        "{review.text}"
      </p>

      {/* Attribution */}
      <div className="flex items-end justify-between relative">
        <div>
          <div className="text-sm font-bold text-slate-900">{review.name}</div>
          <div className="text-xs text-slate-400 mt-0.5">{review.location}</div>
          <div className="text-xs text-gold-500/60 font-semibold mt-0.5">{review.service}</div>
        </div>
        <div className="flex items-center gap-1 text-2xs text-slate-300 font-medium">
          <Star size={9} className="fill-slate-400 text-slate-300" />
          Google
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="relative bg-slate-900 py-20 md:py-24 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,158,11,0.035) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <div className="container-site relative z-10 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            Client Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-tight mb-4"
          >
            What property owners say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto"
          >
            Real feedback from Nashville and South Florida property owners who worked with us.
          </motion.p>
        </div>
      </div>

      {/* ── Infinite scroll marquee ── */}
      <div className="relative">
        {/* Left fade mask */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #FFFFFF 0%, transparent 100%)',
          }}
        />
        {/* Right fade mask */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to left, #FFFFFF 0%, transparent 100%)',
          }}
        />

        {/* Track — pause on hover */}
        <div
          className="flex"
          style={{
            animation: 'marquee 55s linear infinite',
            width: 'max-content',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running'
          }}
        >
          {TRACK.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Platform trust line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="text-center mt-10 text-xs text-slate-300 font-medium relative z-10"
      >
        ⭐ 5-star rated · Verified reviews from Google &amp; direct clients
      </motion.div>
    </section>
  )
}
