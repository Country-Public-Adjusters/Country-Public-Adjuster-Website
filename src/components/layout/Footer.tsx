import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const PHONE = '18668069911'
const PHONE_DISPLAY = '1-866-806-9911'
const EMAIL = 'claims@countrypublicadjusters.com'

const FOOTER_LINKS = {
  services: [
    { label: 'Hail Damage Claims', href: '/damage/hail' },
    { label: 'Wind Damage Claims', href: '/damage/wind' },
    { label: 'Water Damage Claims', href: '/damage/water' },
    { label: 'Roof Damage Claims', href: '/damage/roof' },
    { label: 'Storm Damage Claims', href: '/damage/storm' },
    { label: 'Hurricane Claims', href: '/damage/hurricane' },
    { label: 'Commercial Property', href: '/damage/commercial' },
    { label: 'Residential Property', href: '/damage/residential' },
  ],
  nashville: [
    { label: 'Nashville Public Adjuster', href: '/nashville' },
    { label: 'Brentwood Public Adjuster', href: '/nashville/brentwood' },
    { label: 'Franklin Public Adjuster', href: '/nashville/franklin' },
    { label: 'Murfreesboro', href: '/nashville/murfreesboro' },
    { label: 'Hendersonville', href: '/nashville/hendersonville' },
  ],
  florida: [
    { label: 'South Florida Public Adjuster', href: '/south-florida' },
    { label: 'Miami-Dade Public Adjuster', href: '/south-florida/miami-dade' },
    { label: 'Broward County', href: '/south-florida/broward' },
    { label: 'Palm Beach County', href: '/south-florida/palm-beach' },
    { label: 'Fort Lauderdale', href: '/south-florida/fort-lauderdale' },
  ],
  company: [
    { label: 'About Country', href: '/about' },
    { label: 'How It Works', href: '/about#process' },
    { label: 'Case Results', href: '/results' },
    { label: 'Client Reviews', href: '/reviews' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Start Claim Intake', href: '/intake' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.05]">
      {/* ── Emergency CTA strip ── */}
      <div className="border-b border-white/[0.05]">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">Storm damage? Don't wait.</p>
            <p className="text-slate-400 text-sm mt-0.5">
              Every day delayed can reduce your claim value. Get a free inspection today.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${PHONE}`}
              className="btn-outline-gold px-6 py-3 text-sm font-semibold flex items-center gap-2"
            >
              <Phone size={15} />
              Call Now
            </a>
            <Link
              href="/intake"
              className="btn-primary-sm"
            >
              Free Inspection
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-glow-gold"
                style={{ backgroundImage: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)' }}
              >
                <span className="text-navy-950 font-black text-lg">C</span>
              </div>
              <div>
                <div className="text-sm font-bold text-white">Country Public Adjusters</div>
                <div className="text-xs text-gold-500 font-semibold tracking-wider uppercase">
                  Your Insurance Advocate
                </div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Licensed public adjusters fighting for the full insurance settlement you deserve.
              No upfront cost. Contingency-only. 35+ years combined experience.
            </p>

            <div className="space-y-3">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 text-sm text-slate-500 hover:text-gold-400 transition-colors duration-200"
              >
                <Phone size={15} className="text-gold-500 flex-shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm text-slate-500 hover:text-gold-400 transition-colors duration-200"
              >
                <Mail size={15} className="text-gold-500 flex-shrink-0" />
                <span>{EMAIL}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin size={15} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span>Nashville, TN &amp; South Florida</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gold-500 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-slate-700 transition-colors duration-200
                               flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nashville */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gold-500 mb-4">
              Nashville Region
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.nashville.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-slate-700 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Florida */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gold-500 mb-4">
              South Florida
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.florida.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-slate-700 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-gold-500 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-slate-700 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.05]">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © {new Date().getFullYear()} Country Public Adjusters. All rights reserved.
            Licensed in Tennessee &amp; Florida.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/30 hover:text-slate-500 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/30 hover:text-slate-500 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
