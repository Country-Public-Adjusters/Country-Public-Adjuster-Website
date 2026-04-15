import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Check, X, ArrowRight, Phone } from 'lucide-react'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import FinalCTA from '@/components/home/FinalCTA'
import { DAMAGE_PAGES } from '@/data/damagePages'
import { SERVICE_SCHEMA, BREADCRUMB_SCHEMA, FAQ_SCHEMA } from '@/lib/schema'

// Static generation
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

      {/* Hero */}
      <section
        className="relative section-padding min-h-[50vh] flex items-center"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.1) 0%, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        }}
      >
        <div className="container-site">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-slate-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-600">{page.title}</span>
          </nav>

          <div className="max-w-3xl">
            <FadeInView>
              <span className="badge-gold mb-5">{page.title}</span>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-5 leading-[0.95]">
                {page.heroHeadline}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                {page.heroSub}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/intake" className="btn-primary-lg">
                  Get Free Inspection
                  <ArrowRight size={17} />
                </Link>
                <a href="tel:18668069911" className="btn-secondary-lg">
                  <Phone size={17} />
                  1-866-806-9911
                </a>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* What damage looks like */}
      <section className="bg-navy-900 section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                What {page.title.toLowerCase()} looks like
              </h2>
              <ul className="space-y-3">
                {page.whatItLooks.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInView>

            <FadeInView delay={0.15}>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                What insurers routinely undervalue
              </h2>
              <ul className="space-y-3">
                {page.whatInsurersUndervalue.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <X size={15} className="text-red-400/70 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="bg-navy-950 section-padding">
        <div className="container-narrow text-center">
          <FadeInView>
            <span className="section-label mb-4 block">Local Context</span>
            <h2 className="section-heading-dark mb-5">Nashville &amp; South Florida</h2>
            <p className="text-slate-600 text-base leading-relaxed">{page.localContext}</p>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      {faqItems.length > 0 && (
        <section className="bg-navy-900 section-padding">
          <div className="container-site max-w-3xl">
            <FadeInView className="mb-8">
              <h2 className="section-heading-dark">{page.title} — FAQ</h2>
            </FadeInView>
            <FadeInView delay={0.1}>
              <FAQAccordion items={faqItems} theme="dark" />
            </FadeInView>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  )
}
