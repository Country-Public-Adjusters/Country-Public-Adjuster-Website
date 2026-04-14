'use client'

import Link from 'next/link'
import { Phone, FileText } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

const PHONE = '18668069911'

export default function MobileCTABar() {
  return (
    <div className="mobile-cta-bar safe-area-bottom">
      <a
        href={`tel:${PHONE}`}
        onClick={() => Analytics.phoneClick('mobile-cta-bar')}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
                   bg-slate-100 border border-slate-200 text-slate-900 font-semibold text-sm
                   active:bg-white/10 transition-all duration-150"
      >
        <Phone size={17} />
        <span>Call Now</span>
      </a>
      <Link
        href="/intake"
        onClick={() => Analytics.ctaClick('Free Inspection', 'mobile-cta-bar')}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl
                   font-bold text-sm text-navy-950 active:opacity-90 transition-all duration-150"
        style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' }}
      >
        <FileText size={17} />
        <span>Free Inspection</span>
      </Link>
    </div>
  )
}
