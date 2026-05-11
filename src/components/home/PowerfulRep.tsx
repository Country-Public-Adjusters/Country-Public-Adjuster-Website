'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const REVIEWS = [
  { name: 'Scuba Steve', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Country Public Adjusters is great! Assisted me through the process and did most of the legwork. Everyone was nice and helpful.' },
  { name: 'Natasha Pace', location: 'South Florida', rating: 5, service: 'Google Review', text: 'Country Public Adjusters ended up getting me more money even after I thought I was done with my insurance company. Very thankful.' },
  { name: 'Brad Kreiger', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Ephraim and his staff were professional, adept and did a wonderful job. Immensely helpful.' },
  { name: 'Caron Morgan', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'I have been impressed from start to finish. Very professional, upfront and friendly. Always got a response in a timely manner.' },
  { name: 'Alexis Perez', location: 'South Florida', rating: 5, service: 'Hurricane Ian Claim', text: 'Had a fantastic experience with them, really helped us settle out our Ian claim.' },
  { name: 'C H', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'David and his staff are INCREDIBLE to work with. Honest, responsive, and dedicated.' },
  { name: 'Enrique Perez', location: 'South Florida', rating: 5, service: 'Google Review', text: 'Great Company, Loved working with Manny at all stages of the process. Amazing Results.' },
  { name: 'Mendy Rockmountain', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Country Public Adjusters made dealing with a stressful situation less stressful. Answered many questions and concerns.' },
  { name: 'Doron Rachman', location: 'South Florida', rating: 5, service: 'Google Review', text: 'AAA service. I really got educated on how the process works. David helped and guided me throughout.' },
  { name: 'Db Alerts', location: 'South Florida', rating: 5, service: 'Google Review', text: 'They helped us with our claim — getting us max return for the damage that was done.' },
  { name: 'Donna Wood', location: 'Nashville, TN', rating: 5, service: 'Storm Damage Claim', text: 'Very happy with the results Country Public Adjusters has provided for us from dealing with our insurance company after 3 damaging storms.' },
  { name: 'Stephen Goodman', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Showed our insurance company damages that they had missed and assured us of the proper settlement.' },
  { name: 'Jason Lloret', location: 'South Florida', rating: 5, service: 'Denied Claim Recovery', text: 'Got me a settlement after my insurance denied it 2 times. I would definitely recommend these guys.' },
  { name: 'Horacio Bustos', location: 'South Florida', rating: 5, service: 'Google Review', text: 'The most knowledgeable and experienced insurance adjuster in Florida. Delivered when we thought we were getting nothing.' },
  { name: 'Bruce Ronke', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'I was skeptical, but Country Public Adjusters representatives showed me things the insurance company missed. Boy was I wrong!' },
  { name: 'Sarah Elizabeth Lux Barrera', location: 'South Florida', rating: 5, service: 'Hurricane Ian Claim', text: 'Got me four times more than the insurance company wanted to pay after hurricane Ian.' },
  { name: 'Daniel Peckman', location: 'South Florida', rating: 5, service: 'Denied Claim Recovery', text: 'We were initially denied, but after working with Country Public Adjusters, insurance ended up paying us more than we thought we could get!' },
  { name: 'Jeff Adkins', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Country Public Adjusters basically doubled our claim amount. They took the hassle out of collecting what was due.' },
  { name: 'Aryeh Jonathan Bistricer', location: 'South Florida', rating: 5, service: 'Google Review', text: 'Easy to work with. I made one phone call, provided information, and they guided me through. Received the check in two months.' },
  { name: 'Amanda Layton', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Handled everything start to finish and were very patient explaining everything to me.' },
  { name: 'Arturo Heredia', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'As a first-time home buyer, they were very prompt and took care of everything. Very understanding.' },
  { name: 'Penny Davidson', location: 'South Florida', rating: 5, service: 'Google Review', text: 'Michael Fensterszaub and his team really came through. They explained each step and the time it would probably take.' },
  { name: 'Adel Kinn', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Incredible experience. They got us much more than we ever expected! Professional and easy to work with.' },
  { name: 'Jonathan "Mr. Happy"', location: 'South Florida', rating: 5, service: 'Google Review', text: 'Commitment to the claim at all stages is unparalleled. Constant communication so the right hand always knows what the left is doing.' },
  { name: 'Debra Scull', location: 'Nashville, TN', rating: 5, service: 'Roof Damage Claim', text: 'In contact with me all the time, taking me step by step. It was quick and painless and now I will get my new roof.' },
  { name: 'Baila Hirsch', location: 'South Florida', rating: 5, service: 'Google Review', text: 'Customer service is always helpful. Everyone goes the extra mile. Honest and communicative.' },
  { name: 'Lisbeth Arellano', location: 'South Florida', rating: 5, service: 'Water & Mold Claim', text: 'Extremely happy Manny and the team helped me through a very difficult situation with an AC leak and mold.' },
  { name: 'Brent Spechler', location: 'Nashville, TN', rating: 5, service: 'Multiple Claims', text: 'I have worked with David for several properties over the past 5 years. Always professional, ethical, and honest.' },
  { name: 'Bernard Mosconi', location: 'South Florida', rating: 5, service: 'Multiple Claims', text: 'They handled two claims for me. They got me a total of over $50,000 quickly and I was very happy with the results.' },
  { name: 'Dion van Eyck', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Attentive, knowledgeable, very professional and will go the extra mile to get the results needed.' },
  { name: 'Maria Wilson', location: 'South Florida', rating: 5, service: 'Google Review', text: 'Used them after my carrier filed bankruptcy. They helped me recover what was left. Highly recommend.' },
  { name: 'Nathaniel Benson', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Worked quickly and without issue to get me a much better settlement than I expected.' },
  { name: 'Albert Francis', location: 'South Florida', rating: 5, service: 'Google Review', text: 'You promised results and you delivered. Thank you!' },
  { name: 'Nick Engel', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'These guys are truly professional and a pleasure to work with.' },
  { name: 'Karl Berger', location: 'South Florida', rating: 5, service: 'Google Review', text: 'Would highly recommend, got great results after giving up hope.' },
  { name: 'Anne Daniel', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Amazing. Doing an excellent job.' },
  { name: 'Z Ztop', location: 'South Florida', rating: 5, service: 'Google Review', text: 'Great customer service! Would definitely recommend.' },
  { name: 'Eda Kram', location: 'Nashville, TN', rating: 5, service: 'Google Review', text: 'Easy to work with!! Very knowledgeable and experienced!!' },
  { name: 'Esther Suiskind', location: 'South Florida', rating: 5, service: 'Google Review', text: 'Country Public Adjusters is a great company. They were professional, informative, and caring.' },
]

const TRACK = [...REVIEWS, ...REVIEWS]

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] md:w-[380px] p-6 rounded-2xl mx-2.5 relative group overflow-hidden"
      style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(245,158,11,0.06) 0%, transparent 70%)' }} />

      <Quote size={22} style={{ color: 'rgba(217,119,6,0.4)' }} className="mb-3" />

      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={13} fill="#D97706" style={{ color: '#D97706' }} />
        ))}
      </div>

      <p className="text-sm text-slate-600 leading-relaxed mb-5">"{review.text}"</p>

      <div className="flex items-end justify-between">
        <div>
          <div className="text-sm font-bold" style={{ color: '#0D2545' }}>{review.name}</div>
          <div className="text-xs text-slate-400 mt-0.5">{review.location}</div>
          <div className="text-xs font-semibold mt-0.5" style={{ color: '#D97706' }}>{review.service}</div>
        </div>
        <div className="flex items-center gap-1 text-2xs text-slate-300 font-medium">
          <Star size={9} fill="currentColor" />
          Google
        </div>
      </div>
    </div>
  )
}

export default function PowerfulRep() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -150px 0px' })

  return (
    <section ref={ref} style={{ background: '#FFFFFF' }} className="py-20 overflow-hidden">
      <div className="container-site mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight" style={{ color: '#0D2545' }}>
            Insurance Companies Have{' '}
            <span style={{ color: '#D97706' }}>Powerful Representation...</span>
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mt-1 mb-6" style={{ color: '#0D2545' }}>
            Now You Do TOO!
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            By Combining Artificial Intelligence, Human Brilliance and Decades of Experience,
            Country Public Adjusting Can Help You{' '}
            <strong style={{ color: '#0D2545' }}>MULTIPLY Your Claim Payout</strong> So That You Get Paid What You Deserve!
          </motion.p>
        </motion.div>
      </div>

      {/* Scrolling carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative"
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
             style={{ background: 'linear-gradient(to right, #FFFFFF 0%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none"
             style={{ background: 'linear-gradient(to left, #FFFFFF 0%, transparent 100%)' }} />

        <div
          className="flex"
          style={{ animation: 'marquee 90s linear infinite', width: 'max-content' }}
          onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused' }}
          onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running' }}
        >
          {TRACK.map((review, i) => <ReviewCard key={i} review={review} />)}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="text-center mt-10 text-xs text-slate-400 font-medium"
      >
        ⭐ 5-star rated · Verified reviews from Google &amp; direct clients
      </motion.div>
    </section>
  )
}
