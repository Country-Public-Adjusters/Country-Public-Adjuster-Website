import Link from 'next/link'
import { ArrowRight, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center section-padding"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
      }}
    >
      <div className="text-center max-w-lg">
        <div
          className="text-8xl font-black mb-4"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(245,158,11,0.1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          404
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Page not found</h1>
        <p className="text-slate-600 mb-8">
          The page you're looking for doesn't exist. If you're dealing with storm damage,
          don't wait — start your free inspection now.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-secondary-lg">
            <Home size={16} />
            Back to Home
          </Link>
          <Link href="/#free-inspection" className="btn-primary-lg">
            Start Free Inspection
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
