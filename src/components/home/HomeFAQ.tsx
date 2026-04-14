'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import FAQAccordion from '@/components/ui/FAQAccordion'
import type { FAQItem } from '@/types'
import { ArrowRight } from 'lucide-react'

const HOME_FAQS: FAQItem[] = [
  {
    id: 'what-is-pa',
    question: 'What exactly does a public adjuster do?',
    answer:
      'A public adjuster is a licensed insurance claims professional who works exclusively for you — the property owner — not the insurance company. We inspect your damage, document everything thoroughly, file all paperwork, and negotiate directly with your insurer to maximize your settlement. We\'re your expert, your advocate, and your claim manager.',
    category: 'general',
    schema: true,
  },
  {
    id: 'cost',
    question: 'How much does this cost?',
    answer:
      'Nothing upfront. We work entirely on contingency — our fee is a percentage of the settlement we recover for you. If we don\'t recover more than you\'d get on your own, or if we can\'t help you, you don\'t owe us anything. Our incentive is perfectly aligned with yours.',
    category: 'fees',
    schema: true,
  },
  {
    id: 'too-late',
    question: 'My insurance company already sent their adjuster. Is it too late?',
    answer:
      'Absolutely not. Most people who call us have already received an initial offer — and that\'s often where our work begins. We review their assessment, document damage they missed, and file a supplemental claim. In many cases the biggest wins come at this stage.',
    category: 'process',
    schema: true,
  },
  {
    id: 'timeline',
    question: 'How long does the process take?',
    answer:
      'Simpler residential claims are often resolved in a few weeks. Larger or more complex claims — commercial properties, hurricane damage, disputed claims — may take 30–90 days. We keep you updated at every stage and handle all communication so you\'re never in the dark.',
    category: 'timeline',
    schema: true,
  },
  {
    id: 'worth-filing',
    question: 'I\'m not sure if my damage is worth filing a claim.',
    answer:
      'Call us or start your free inspection — there\'s no obligation. You\'d be surprised how much hidden damage storms cause. Small visible damage often conceals much larger structural, moisture, or mold issues underneath. Our inspection is completely free.',
    category: 'general',
    schema: true,
  },
  {
    id: 'insurer-angry',
    question: 'Will my insurance company get angry if I hire a public adjuster?',
    answer:
      'Your right to hire a public adjuster is protected by Tennessee and Florida state law. Insurance companies cannot penalize you, cancel your policy, or retaliate for exercising your right to professional representation. It\'s your policy. You\'re allowed to fight for what you\'re owed.',
    category: 'legal',
    schema: true,
  },
]

export default function HomeFAQ() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="relative bg-navy-950 section-padding"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(30,65,117,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-28">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="section-label mb-4 block"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="section-heading-dark mb-5"
            >
              Questions most people have before they call
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="section-sub-dark mb-8"
            >
              Clear, honest answers — because you deserve to understand exactly what
              you're getting into before we start.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-semibold
                           text-gold-400 hover:text-gold-300 transition-colors duration-200 group"
              >
                See all FAQs
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <FAQAccordion items={HOME_FAQS} theme="dark" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
