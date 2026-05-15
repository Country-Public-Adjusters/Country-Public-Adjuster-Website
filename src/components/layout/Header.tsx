'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Analytics } from '@/lib/analytics'

const PHONE = '18883975420'
const PHONE_DISPLAY = '1-888-397-5420'

const NAV_LINKS = [
  { label: 'Meet the Founders', href: '/about' },
  { label: 'Our Results', href: '/results' },
  { label: 'Partners', href: '/partners' },
  {
    label: 'Damage Types',
    href: '/damage/storm',
    children: [
      { label: 'Storm Damage', href: '/damage/storm' },
      { label: 'Hurricane Claims', href: '/damage/hurricane' },
      { label: 'Wind Damage', href: '/damage/wind' },
      { label: 'Hail Damage', href: '/damage/hail' },
      { label: 'Water Damage', href: '/damage/water' },
      { label: 'Roof Damage', href: '/damage/roof' },
      { label: 'Fire & Smoke Damage', href: '/damage/fire' },
    ],
  },
  {
    label: 'Locations',
    href: '/nashville',
    children: [
      { label: 'Tennessee', href: '/nashville' },
      { label: 'Florida', href: '/south-florida' },
      { label: 'Georgia', href: '/georgia' },
      { label: 'New Jersey', href: '/new-jersey' },
    ],
  },
  { label: 'Property Types', href: '/#property-types' },
  { label: 'Contact', href: '/contact' },
]

interface DropdownProps {
  items: { label: string; href: string }[]
  isOpen: boolean
  wide?: boolean
}

function Dropdown({ items, isOpen, wide }: DropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.97 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 rounded-2xl backdrop-blur-xl overflow-hidden z-50 w-56"
          style={{ background: 'rgba(11,24,38,0.97)', border: '1px solid rgba(245,158,11,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
        >
          {(
          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 rounded-xl text-sm text-white/70 font-medium
                           hover:text-gold-400 hover:bg-white/5 transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
          )}
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
    return scrollY.on('change', (y) => setScrolled(y > 40))
  }, [scrollY])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

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
      {/* Top bar */}
      <div className="hidden sm:block py-2 text-center text-2xs font-bold tracking-wide text-navy-900"
           style={{ background: 'linear-gradient(90deg, #D97706 0%, #F59E0B 50%, #D97706 100%)' }}>
        <span className="mr-4">35+ Years Combined Experience</span>
        <span className="mr-4 opacity-40">|</span>
        <span className="mr-4">Zero Cost Until We Win · Contingency Only</span>
        <span className="mr-4 opacity-40">|</span>
        <span>TN · FL · GA · NJ</span>
      </div>

      {/* Main header */}
      <motion.header
        className={cn('sticky top-0 z-40 transition-all duration-500', scrolled ? 'py-2' : 'py-4')}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-site">
          <div
            className={cn(
              'flex items-center justify-between rounded-2xl px-4 sm:px-6 transition-all duration-500',
              scrolled
                ? 'py-3 backdrop-blur-xl'
                : 'bg-transparent py-2'
            )}
            style={scrolled ? { background: 'rgba(7,18,32,0.95)', border: '1px solid rgba(245,158,11,0.15)', boxShadow: '0 4px 40px rgba(0,0,0,0.4)' } : {}}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="transition-all duration-200 group-hover:opacity-90 group-hover:scale-[1.02]"
                style={{ background: 'white', borderRadius: '10px', padding: '4px 10px', display: 'inline-flex', alignItems: 'center' }}>
                <img
                  src="/logo-new.png"
                  alt="Country Public Adjusters"
                  style={{ height: '48px', width: 'auto', display: 'block' }}
                />
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
                    <button className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap
                                       text-white/80 hover:text-gold-400 hover:bg-white/5 transition-all duration-200">
                      {link.label}
                      <ChevronDown size={13} className={cn('transition-transform duration-200', openDropdown === link.label ? 'rotate-180' : '')} />
                    </button>
                    <Dropdown items={link.children} isOpen={openDropdown === link.label} />
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap text-white/80
                               hover:text-gold-400 hover:bg-white/5 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                onClick={() => Analytics.phoneClick('header')}
                className="flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors duration-200 whitespace-nowrap"
              >
                <Phone size={14} />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href="/#free-inspection"
                onClick={() => Analytics.ctaClick('Free Inspection', 'header')}
                className="px-4 py-2 rounded-xl text-sm font-bold text-navy-900 transition-all duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}
              >
                Free Inspection
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-white/70 hover:text-gold-400 hover:bg-white/5 transition-all duration-200"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 lg:hidden overflow-y-auto"
            style={{ background: 'rgba(7,18,32,0.99)', backdropFilter: 'blur(20px)', paddingTop: '80px' }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="container-site py-8 space-y-1"
            >
              {NAV_LINKS.map((link, i) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-lg font-semibold text-white
                               hover:text-gold-400 hover:bg-white/5 transition-all duration-200"
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
                          className="block px-4 py-2.5 rounded-xl text-sm text-white/60 font-medium
                                     hover:text-gold-400 hover:bg-white/5 transition-all duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 space-y-3 mt-4" style={{ borderTop: '1px solid rgba(245,158,11,0.2)' }}>
                <a
                  href={`tel:${PHONE}`}
                  onClick={() => { Analytics.phoneClick('mobile-menu'); setMobileOpen(false) }}
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-bold text-white"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(245,158,11,0.3)' }}
                >
                  <Phone size={18} className="text-gold-400" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <a
                  href="/#free-inspection"
                  onClick={() => { Analytics.ctaClick('Free Inspection', 'mobile-menu'); setMobileOpen(false) }}
                  className="flex items-center justify-center w-full py-4 rounded-2xl font-bold text-navy-900"
                  style={{ background: 'linear-gradient(135deg, #D97706, #F59E0B)' }}
                >
                  Get Free Inspection
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
