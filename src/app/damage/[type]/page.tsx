import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import DamageInfoSection from '@/components/damage/DamageInfoSection'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { DAMAGE_PAGES } from '@/data/damagePages'
import { SERVICE_SCHEMA, BREADCRUMB_SCHEMA, FAQ_SCHEMA } from '@/lib/schema'

export function generateStaticParams() {
  return Object.keys(DAMAGE_PAGES).map((slug) => ({ type: slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>
}): Promise<Metadata> {
  const { type } = await params
  const page = DAMAGE_PAGES[type]
  if (!page) return {}
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://countrypublicadjusters.com/damage/${type}` },
  }
}

export default async function DamageTypePage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params
  const page = DAMAGE_PAGES[type]
  if (!page) notFound()

  const faqItems = page.faqs.map((f, i) => ({
    id: `faq-${i}`,
    question: f.question,
    answer: f.answer,
    category: 'general' as const,
  }))

  const schemas = [
    SERVICE_SCHEMA(page.title, page.metaDescription, `/damage/${type}`),
    BREADCRUMB_SCHEMA([
      { name: 'Home', url: 'https://countrypublicadjusters.com' },
      { name: 'Services', url: 'https://countrypublicadjusters.com/services' },
      { name: page.title, url: `https://countrypublicadjusters.com/damage/${type}` },
    ]),
    ...(page.faqs.length > 0 ? [FAQ_SCHEMA(page.faqs)] : []),
  ]

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── Hero ── */}
      <section
        className="relative section-padding overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #071220 0%, #0D2545 50%, #0A1E3C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)' }} />

        <div className="container-site relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/damage/storm" className="hover:text-white/70 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/60">{page.title}</span>
          </nav>

          <div className="max-w-3xl">
            <FadeInView>
              <span className="badge-gold mb-5">{page.title}</span>
              <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-[0.95]">
                {page.heroHeadline}
              </h1>
              <p className="text-lg text-white/60 leading-relaxed mb-8 max-w-2xl">
                {page.heroSub}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#free-inspection" className="btn-primary-lg">
                  Get Free Inspection
                  <ArrowRight size={17} />
                </Link>
                <a href="tel:18883975420"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Phone size={17} />
                  1-888-397-5420
                </a>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>


      <DamageInfoSection
        title={page.title}
        whatItLooks={page.whatItLooks}
        whatInsurersUndervalue={page.whatInsurersUndervalue}
      />

      

      {/* ── Local context ── */}
      <section className="bg-white pt-8 pb-20">
        <div className="container-narrow text-center">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: 'rgba(245,158,11,0.1)', color: '#D97706' }}>
              LOCAL CONTEXT
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-5">Nashville &amp; South Florida</h2>
            <p className="text-slate-600 text-base leading-relaxed">{page.localContext}</p>
          </FadeInView>
        </div>
      </section>


      {/* ── FAQ ── */}
      {faqItems.length > 0 && (
        <section className="section-padding" style={{ background: '#0A1E3C' }}>
          <div className="container-site max-w-3xl">
            <FadeInView className="mb-8">
              <h2 className="text-3xl font-black text-white">{page.title} — FAQ</h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <FAQAccordion items={faqItems} theme="dark" />
            </FadeInView>
          </div>
        </section>
      )}

      
    </>
  )
}
