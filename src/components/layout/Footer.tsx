import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const PHONE = '18883975420'
const PHONE_DISPLAY = '1-888-397-5420'
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
    { label: 'Start Claim Intake', href: '/#free-inspection' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy-950">
{/* ── Main footer grid ── */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-6 group">
              <div className="transition-all duration-200 group-hover:opacity-90"
                style={{ background: 'white', borderRadius: '10px', padding: '4px 10px', display: 'inline-flex', alignItems: 'center' }}>
                <img
                  src="/logo-new.png"
                  alt="Country Public Adjusters"
                  style={{ height: '48px', width: 'auto', display: 'block' }}
                />
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
      <div className="border-t border-slate-200">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            © {new Date().getFullYear()} Country Public Adjusters. All rights reserved.
            Licensed in Tennessee &amp; Florida.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-slate-400 hover:text-slate-500 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-slate-400 hover:text-slate-500 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
