'use client'

import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface Props {
  title: string
  whatItLooks: string[]
  whatInsurersUndervalue: string[]
}

export default function DamageInfoSection({ title, whatItLooks, whatInsurersUndervalue }: Props) {
  return (
    <section className="pt-20 pb-8 bg-white">
      <div className="container-site">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Left — what it looks like */}
          <div className="rounded-2xl p-7"
            style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)' }}>
                <Check size={16} style={{ color: '#D97706' }} />
              </div>
              <h2 className="text-lg font-black text-slate-900 leading-tight">
                What {title.toLowerCase()} looks like
              </h2>
            </div>
            <ul className="space-y-2.5">
              {whatItLooks.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px 0px -30px 0px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-600"
                  style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}
                >
                  <Check size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#D97706' }} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — what insurers undervalue */}
          <div className="rounded-2xl p-7"
            style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                <X size={16} style={{ color: '#EF4444' }} />
              </div>
              <h2 className="text-lg font-black text-slate-900 leading-tight">
                What insurers routinely undervalue
              </h2>
            </div>
            <ul className="space-y-2.5">
              {whatInsurersUndervalue.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '0px 0px -30px 0px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start gap-3 px-4 py-2.5 rounded-xl text-sm text-slate-600"
                  style={{ background: '#FFFFFF', border: '1px solid #E2E8F0' }}
                >
                  <X size={13} className="flex-shrink-0 mt-0.5" style={{ color: '#EF4444' }} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
