import type { Metadata } from 'next'
import FadeInView from '@/components/motion/FadeInView'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { pageMetadata } from '@/lib/seo'
import { FAQ_SCHEMA } from '@/lib/schema'
import type { FAQItem } from '@/types'

export const metadata: Metadata = pageMetadata(
  'FAQ | Public Adjuster Questions Answered',
  'Common questions about public adjusters, insurance claims, fees, timelines, and your rights as a policyholder. Country Public Adjusters — Nashville, TN & South Florida.',
  '/faq',
  ['public adjuster FAQ', 'how does a public adjuster work', 'public adjuster fee', 'insurance claim help']
)

const ALL_FAQS: FAQItem[] = [
  {
    id: 'what-is-pa',
    question: 'What exactly does a public adjuster do?',
    answer: 'A public adjuster is a licensed insurance claims professional who works exclusively for you — the property owner — not the insurance company. We inspect your damage, document everything thoroughly, prepare your claim, file all paperwork, and negotiate directly with your insurer to maximize your settlement. We\'re your expert, your advocate, and your claim manager from start to finish.',
    category: 'general',
    schema: true,
  },
  {
    id: 'different-from-insurer',
    question: 'How is a public adjuster different from the insurance company\'s adjuster?',
    answer: 'The insurer\'s adjuster works for the insurance company. They are trained, paid, and incentivized to minimize what gets paid out on your claim. A public adjuster works exclusively for you — we have no financial relationship with the insurer, and our incentive is to maximize your settlement, not minimize it.',
    category: 'general',
    schema: true,
  },
  {
    id: 'cost',
    question: 'How much does a public adjuster cost?',
    answer: 'Nothing upfront. Our fee is a contingency percentage of the settlement we recover for you. We only get paid when you get paid — and only from what we recover. If we can\'t help you recover more, you don\'t owe us anything. The percentage is disclosed upfront and agreed in writing before any work begins.',
    category: 'fees',
    schema: true,
  },
  {
    id: 'worth-it',
    question: 'Is it worth it to hire a public adjuster if I\'m paying a percentage?',
    answer: 'In almost all cases, yes. Our clients typically receive settlements 5–11× higher than the initial insurer offer. Even after our contingency fee, policyholders walk away with significantly more money than they would have accepted alone. The fee pays for itself many times over in most claims.',
    category: 'fees',
    schema: true,
  },
  {
    id: 'too-late',
    question: 'My insurance company already sent their adjuster. Is it too late?',
    answer: 'Absolutely not. Most people who call us have already received an initial offer — and that\'s often where our most impactful work happens. We review their assessment, document damage they missed or undervalued, and file a supplemental claim. Many of our largest settlement increases come at the supplemental stage.',
    category: 'process',
    schema: true,
  },
  {
    id: 'already-settled',
    question: 'Can you help me if I already accepted a settlement?',
    answer: 'Potentially, yes. In some circumstances, especially when new damage is discovered or additional items were missed, it\'s possible to reopen a claim or file a supplemental claim. Contact us and we\'ll review your specific situation at no charge.',
    category: 'process',
    schema: true,
  },
  {
    id: 'what-we-do',
    question: 'What exactly do you handle in the claim process?',
    answer: 'Everything. We conduct a thorough property inspection, document all visible and hidden damage with photos and detailed reports, prepare the claim package, file all required paperwork with the insurer, manage all correspondence and calls with the insurance company, attend all adjuster meetings on your behalf, and negotiate until we reach a fair settlement. You focus on your life — we handle the claim.',
    category: 'process',
    schema: true,
  },
  {
    id: 'timeline',
    question: 'How long does the process take?',
    answer: 'Simple residential claims are often resolved within a few weeks. More complex claims — commercial properties, hurricane damage, disputed claims, supplemental filings — can take 30–90 days or longer in contested cases. We keep you informed throughout and handle all follow-up so you\'re never left waiting for answers.',
    category: 'timeline',
    schema: true,
  },
  {
    id: 'insurer-angry',
    question: 'Will my insurance company get angry or cancel my policy?',
    answer: 'Your right to hire a public adjuster is protected by Tennessee and Florida state law. Insurance companies cannot penalize you, raise your rates, or cancel your policy simply because you hired a public adjuster. This is a legal right — and it\'s one they\'d rather you didn\'t know about.',
    category: 'legal',
    schema: true,
  },
  {
    id: 'sue-insurer',
    question: 'Should I sue my insurance company instead of hiring a public adjuster?',
    answer: 'Litigation is expensive, time-consuming, and adversarial. Most disputes are resolved far more efficiently through professional claim management and negotiation — which is what we do. If your claim legitimately requires litigation, we\'ll advise you on that path, but in the vast majority of cases, professional negotiation achieves a better outcome faster.',
    category: 'legal',
    schema: true,
  },
  {
    id: 'damage-types',
    question: 'What types of damage do you handle?',
    answer: 'We handle all types of storm and property damage: hail damage, wind damage, water intrusion, flooding, roof damage, hurricane and tropical storm damage, fire and smoke damage, structural damage, and more. We work with residential homes, commercial buildings, multi-unit properties, and rental properties.',
    category: 'claims',
    schema: true,
  },
  {
    id: 'worth-filing',
    question: 'I\'m not sure my damage is worth filing a claim. Should I still call?',
    answer: 'Yes — always. Our inspection is completely free. You\'d be surprised how much hidden damage storms cause: water intrusion behind walls, compromised attic insulation, subtle structural movement. We\'ve opened claims on properties that looked fine but had tens of thousands in hidden damage. The inspection costs you nothing and gives you clarity.',
    category: 'claims',
    schema: true,
  },
  {
    id: 'denied-claim',
    question: 'My claim was denied. Can you still help?',
    answer: 'Yes. Claim denials are not always final. We review the denial reason, gather additional documentation, and can file an appeal or demand letter on your behalf. Insurance companies sometimes deny claims expecting policyholders not to push back. We push back.',
    category: 'claims',
    schema: true,
  },
]

const CATEGORIES = [
  { id: 'general', label: 'General' },
  { id: 'fees', label: 'Fees & Cost' },
  { id: 'process', label: 'Process' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'claims', label: 'Claims' },
  { id: 'legal', label: 'Legal Rights' },
]

const FAQ_SCHEMA_DATA = FAQ_SCHEMA(
  ALL_FAQS.filter((f) => f.schema).map((f) => ({
    question: f.question,
    answer: f.answer,
  }))
)

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA_DATA) }}
      />

      {/* ── Hero ── */}
      <section
        className="relative section-padding overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #030D1A 0%, #0D2545 50%, #0A1E3C 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 70%)' }} />

        <div className="container-site text-center relative z-10">
          <FadeInView>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}>
              FAQ
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-white tracking-tight mb-5">
              Questions{' '}
              <span style={{ color: '#F59E0B' }}>honestly answered</span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Everything you need to know before you call — clear, direct answers
              about how this works, what it costs, and what your rights are.
            </p>
          </FadeInView>
        </div>
      </section>


      {/* ── FAQ by category ── */}
      <section className="section-padding" style={{ background: '#0A1E3C' }}>
        <div className="container-site max-w-3xl">
          {CATEGORIES.map((cat) => {
            const items = ALL_FAQS.filter((f) => f.category === cat.id)
            if (!items.length) return null
            return (
              <FadeInView key={cat.id} className="mb-12">
                <h2 className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: '#F59E0B' }}>
                  {cat.label}
                </h2>
                <FAQAccordion items={items} theme="dark" />
              </FadeInView>
            )
          })}
        </div>
      </section>

      
    </>
  )
}
