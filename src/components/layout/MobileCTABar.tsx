'use client'

import Link from 'next/link'
import { Phone, FileText } from 'lucide-react'
import { Analytics } from '@/lib/analytics'

const PHONE = '18883975420'

export default function MobileCTABar() {
  return (
    <div className="mobile-cta-bar safe-area-bottom">
      <a
        href={`tel:${PHONE}`}
        onClick={() => Analytics.phoneClick('mobile-cta-bar')}
        className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl
                   bg-white/10 border border-white/20 text-white font-semibold text-sm
                   active:bg-white/15 transition-all duration-150 min-w-0"
      >
        <Phone size={16} className="flex-shrink-0" />
        <span className="truncate">Call Now</span>
      </a>
      <Link
        href="/#free-inspection"
        onClick={() => Analytics.ctaClick('Free Inspection', 'mobile-cta-bar')}
        className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl
                   font-bold text-sm text-navy-950 active:opacity-90 transition-all duration-150 min-w-0"
        style={{ backgroundImage: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)' }}
      >
        <FileText size={16} className="flex-shrink-0" />
        <span className="truncate">Free Inspection</span>
      </Link>
    </div>
  )
}
