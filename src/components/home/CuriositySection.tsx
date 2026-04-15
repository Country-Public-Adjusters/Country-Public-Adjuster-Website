'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const CARDS = [
  {
    number: '01',
    title: 'An incorrect statement can damage your claim',
    body: 'An incorrect or incomplete statement to your insurance company can seriously damage your claim and may even lead to denial. By calling us on day 1, we help build the case correctly from the very start.',
  },
  {
    number: '02',
    title: 'The burden of proof is on you',
    body: 'Hidden, missed, or misunderstood damage can be extremely costly. You are responsible for proving your claim — we make sure you do it right.',
  },
  {
    number: '03',
    title: 'A claim is hundreds of line items',
    body: 'Missing even a fraction of them can dramatically reduce your payout. We audit every detail to ensure nothing is left on the table.',
  },
  {
    number: '04',
    title: 'The insurance company has its own adjuster',
    body: "Their adjuster represents the insurer's interests — not yours. With us, you have an experienced partner representing you.",
  },
  {
    number: '05',
    title: 'Two similar homes, drastically different payouts',
    body: 'Insurance often pays based on what is found, documented, and proven. Professional documentation changes outcomes.',
  },
  {
    number: '06',
    title: 'Your policy may cover more than you think',
    body: 'Many policies include ALE/loss of use, code upgrade coverage, debris removal, and matching requirements. These are often missed.',
  },
  {
    number: '07',
    title: 'You can hire us after a denial or underpayment',
    body: "It's not too late. We routinely re-open and renegotiate claims that were denied, underpaid, or closed too early.",
  },
  {
    number: '08',
    title: 'Additional living expenses are often undercounted',
    body: 'If your home is uninhabitable, your ALE coverage may owe you far more than the insurer initially suggests.',
  },
  {
    number: '09',
    title: 'Business interruption is the most underclaimed coverage',
    body: 'Lost income, payroll, rent, operating expenses, and extra expenses may all be claimable. Most business owners leave significant money unclaimed.',
  },
]

function AccordionCard({ card, index, isInView }: { card: typeof CARDS[0]; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`relative border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? 'border-gold-400 shadow-md' : 'border-slate-200 hover:border-slate-300'
      } bg-white`}
    >
      {/* Gold left border when open */}
      {open && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500 rounded-l-2xl" />
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4 pr-4">
          {/* Background number */}
          <span className="text-4xl font-black text-slate-100 select-none flex-shrink-0 w-12">
            {card.number}
          </span>
          <span className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
            {card.title}
          </span>
        </div>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${
            open ? 'rotate-180 text-gold-500' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 pl-22 text-sm text-slate-600 leading-relaxed" style={{ paddingLeft: '4.5rem' }}>
              {card.body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function CuriositySection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section ref={ref} className="bg-white section-padding overflow-hidden">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="section-label mb-4 block"
          >
            What You Need to Know
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-heading-dark mb-5"
          >
            What Most Policyholders Don&apos;t Realize
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="section-sub-dark mx-auto"
          >
            The insurance claim process is more complex — and more in your favor — than most
            people know.
          </motion.p>
        </div>

        {/* Accordion cards */}
        <div className="max-w-3xl mx-auto space-y-3">
          {CARDS.map((card, i) => (
            <AccordionCard key={card.number} card={card} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
