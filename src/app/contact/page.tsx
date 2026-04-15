import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle, Bot } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata: Metadata = pageMetadata(
  'Contact Us | Free Property Damage Inspection',
  'Contact Country Public Adjusters. Free property damage inspection, no upfront cost. Call 1-866-806-9911 or start your claim intake online. Nashville, TN & South Florida.',
  '/contact'
)

export default function ContactPage() {
  return (
    <section
      className="relative section-padding min-h-screen"
      style={{
        background:
          'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.08) 0%, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      }}
    >
      <div className="container-site max-w-5xl">
        <FadeInView className="text-center mb-14">
          <span className="section-label mb-4 block">Contact Us</span>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-5">
            Get in touch
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Start your free claim review online, call us directly, or chat with our team.
            We respond quickly — because timing matters.
          </p>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Start intake */}
          <FadeInView delay={0.1}>
            <div
              className="card-dark p-7 border-gold-500/20"
              style={{ borderColor: 'rgba(245,158,11,0.15)' }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)' }}
              >
                <MessageCircle size={22} className="text-gold-400" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Start claim intake online</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Answer 7 short questions. We review your details and call you prepared and ready to help.
                Takes under 3 minutes.
              </p>
              <Link href="/intake" className="btn-primary-sm">
                Start Free Inspection
              </Link>
            </div>
          </FadeInView>

          {/* Call */}
          <FadeInView delay={0.2}>
            <div className="card-dark p-7">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(203,213,225,0.4)', border: '1px solid rgba(203,213,225,0.6)' }}
              >
                <Phone size={22} className="text-gold-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Call us directly</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Talk to a real team member. For urgent or emergency situations, call now.
              </p>
              <a href="tel:18668069911" className="btn-outline-gold px-5 py-2.5 text-sm">
                1-866-806-9911
              </a>
            </div>
          </FadeInView>

          {/* Email */}
          <FadeInView delay={0.25}>
            <div className="card-dark p-7">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(203,213,225,0.3)', border: '1px solid rgba(203,213,225,0.5)' }}
              >
                <Mail size={22} className="text-gold-600" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">Email us</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                For non-urgent inquiries, document sharing, or follow-up on existing claims.
              </p>
              <a
                href="mailto:claims@countrypublicadjusters.com"
                className="text-gold-400 hover:text-gold-300 text-sm font-semibold transition-colors duration-200"
              >
                claims@countrypublicadjusters.com
              </a>
            </div>
          </FadeInView>

          {/* After hours */}
          <FadeInView delay={0.3}>
            <div className="card-dark p-7">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)' }}
              >
                <Bot size={22} className="text-gold-400/70" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">After hours?</h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                Start the claim intake now. Our AI assistant captures your details and we respond
                first thing in the morning. For emergencies, always call directly.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Clock size={12} />
                <span>Office hours: Mon–Fri 8am–6pm · Sat 9am–1pm</span>
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Service areas */}
        <FadeInView delay={0.35}>
          <div className="card-dark p-6 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900 mb-1">Nashville, Tennessee</div>
                <div className="text-xs text-slate-600">Davidson, Williamson, Rutherford, Sumner, Wilson, and surrounding counties</div>
              </div>
            </div>
            <div className="hidden sm:block w-px bg-slate-100 self-stretch" />
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900 mb-1">South Florida</div>
                <div className="text-xs text-slate-600">Miami-Dade, Broward, and Palm Beach counties</div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
