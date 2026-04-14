'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Analytics } from '@/lib/analytics'

const PHONE = '18668069911'
const PHONE_DISPLAY = '1-866-806-9911'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Hail Damage Claims', href: '/damage/hail' },
      { label: 'Wind Damage Claims', href: '/damage/wind' },
      { label: 'Water Damage Claims', href: '/damage/water' },
      { label: 'Roof Damage Claims', href: '/damage/roof' },
      { label: 'Storm Damage Claims', href: '/damage/storm' },
      { label: 'Hurricane Claims', href: '/damage/hurricane' },
      { label: 'Commercial Property', href: '/damage/commercial' },
    ],
  },
  {
    label: 'Locations',
    href: '/nashville',
    children: [
      { label: 'Nashville, TN', href: '/nashville' },
      { label: 'Brentwood, TN', href: '/nashville/brentwood' },
      { label: 'Franklin, TN', href: '/nashville/franklin' },
      { label: 'South Florida', href: '/south-florida' },
      { label: 'Miami-Dade', href: '/south-florida/miami-dade' },
      { label: 'Broward County', href: '/south-florida/broward' },
      { label: 'Palm Beach', href: '/south-florida/palm-beach' },
    ],
  },
  { label: 'Results', href: '/results' },
  { label: 'FAQ', href: '/faq' },
]

interface DropdownProps {
  items: { label: string; href: string }[]
  isOpen: boolean
}

function Dropdown({ items, isOpen }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.97 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56
                     rounded-2xl bg-navy-900/95 backdrop-blur-xl
                     border border-white/[0.08] shadow-nav overflow-hidden z-50"
        >
          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 rounded-xl text-sm text-slate-600 font-medium
                           hover:text-white hover:bg-white/[0.06] transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (y) => {
      setScrolled(y > 40)
    })
  }, [scrollY])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleMouseEnter = (label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <>
      {/* ── Top credibility bar ── */}
      <div className="hidden sm:block bg-navy-950 border-b border-white/[0.04] py-2 text-center text-2xs font-medium tracking-wide text-slate-400">
        <span className="mr-4">35+ Years Combined Experience</span>
        <span className="text-white/20 mr-4">|</span>
        <span className="mr-4">No Upfront Cost</span>
        <span className="text-white/20 mr-4">|</span>
        <span>Nashville, TN &amp; South Florida</span>
      </div>

      {/* ── Main header ── */}
      <motion.header
        className={cn(
          'sticky top-0 z-40 transition-all duration-500',
          scrolled
            ? 'py-3'
            : 'py-5'
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-site">
          <div
            className={cn(
              'flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-500',
              scrolled
                ? 'bg-navy-950/90 backdrop-blur-xl border border-white/[0.07] shadow-nav py-3'
                : 'bg-transparent py-2'
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div>
                <div className="text-base font-bold text-white tracking-tight leading-tight">
                  Country Public Adjusters
                </div>
                <div className="text-xs text-gold-500 font-semibold tracking-wider uppercase">
                  Licensed Public Adjusters
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium
                                 text-slate-600 hover:text-white hover:bg-white/[0.06]
                                 transition-all duration-200"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          'transition-transform duration-200',
                          openDropdown === link.label ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    <Dropdown
                      items={link.children}
                      isOpen={openDropdown === link.label}
                    />
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 rounded-xl text-sm font-medium
                               text-slate-600 hover:text-white hover:bg-white/[0.06]
                               transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                onClick={() => Analytics.phoneClick('header')}
                className="flex items-center gap-2 text-sm font-semibold text-slate-500
                           hover:text-gold-400 transition-all duration-300 group"
              >
                <Phone size={14} className="group-hover:scale-110 transition-transform duration-300" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <Link
                href="/intake"
                onClick={() => Analytics.ctaClick('Free Inspection', 'header')}
                className="btn-primary-sm relative overflow-hidden"
              >
                <span className="relative z-10">Free Inspection</span>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-white
                         hover:bg-white/[0.06] transition-all duration-200"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-navy-950/98 backdrop-blur-xl lg:hidden overflow-y-auto"
            style={{ paddingTop: '80px' }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="container-site py-8 space-y-1"
            >
              {NAV_LINKS.map((link, i) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-lg font-semibold text-slate-700
                               hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2.5 rounded-xl text-sm text-slate-400
                                     hover:text-slate-700 hover:bg-white/[0.04] transition-all duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTAs */}
              <div className="pt-6 space-y-3 border-t border-white/[0.06] mt-4">
                <a
                  href={`tel:${PHONE}`}
                  onClick={() => {
                    Analytics.phoneClick('mobile-menu')
                    setMobileOpen(false)
                  }}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl
                             bg-white/[0.05] border border-white/10 text-white font-semibold"
                >
                  <Phone size={18} />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <Link
                  href="/intake"
                  onClick={() => {
                    Analytics.ctaClick('Free Inspection', 'mobile-menu')
                    setMobileOpen(false)
                  }}
                  className="btn-primary-lg w-full"
                >
                  Get Free Inspection
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
