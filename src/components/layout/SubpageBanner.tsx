import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function SubpageBanner() {
  return (
    <div className="bg-white py-5">
      <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black text-slate-900">Your insurer has already sent their adjuster. Now it's your turn.</p>
          <p className="text-xs text-slate-500 mt-0.5">Free inspection · No upfront cost · We only get paid when you do</p>
        </div>
        <Link
          href="/#free-inspection"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white flex-shrink-0 transition-all hover:scale-105 whitespace-nowrap"
          style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}
        >
          Claim Your Free Inspection <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}
