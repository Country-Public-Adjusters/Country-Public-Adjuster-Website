import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ─── BRAND COLORS ────────────────────────────────────────────────────────
      colors: {
        navy: {
          950: '#FFFFFF',
          900: '#F8FAFC',
          800: '#F1F5F9',
          750: '#E2E8F0',
          700: '#CBD5E1',
          600: '#94A3B8',
          500: '#475569',
          400: '#334155',
          300: '#1E293B',
        },
        gold: {
          700: '#B45309',
          600: '#D97706',
          500: '#F59E0B',
          400: '#FBBF24',
          300: '#FCD34D',
          200: '#FDE68A',
          100: '#FEF3C7',
          50:  '#FFFBEB',
        },
        cream: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
        },
        // Semantic surface system
        surface: {
          dark:    '#F8FAFC', // primary light bg
          darker:  '#FFFFFF', // pure white
          mid:     '#E2E8F0', // mid-light section
          light:   '#FFFFFF', // light section
          cream:   '#FFFBEB', // warm cream section
        },
      },

      // ─── TYPOGRAPHY ──────────────────────────────────────────────────────────
      fontFamily: {
        sans:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        xs:    ['0.75rem',  { lineHeight: '1rem' }],
        sm:    ['0.875rem', { lineHeight: '1.25rem' }],
        base:  ['1rem',     { lineHeight: '1.5rem' }],
        lg:    ['1.125rem', { lineHeight: '1.75rem' }],
        xl:    ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem',  { lineHeight: '2.5rem' }],
        '5xl': ['3rem',     { lineHeight: '1.1' }],
        '6xl': ['3.75rem',  { lineHeight: '1.05' }],
        '7xl': ['4.5rem',   { lineHeight: '1.0' }],
        '8xl': ['6rem',     { lineHeight: '1.0' }],
        '9xl': ['8rem',     { lineHeight: '0.95' }],
        // Display-specific sizes
        'display-sm': ['2.5rem',  { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-md': ['3.5rem',  { lineHeight: '1.0',  letterSpacing: '-0.025em' }],
        'display-lg': ['4.5rem',  { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-xl': ['5.5rem',  { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        'display-2xl':['7rem',    { lineHeight: '0.9',  letterSpacing: '-0.04em' }],
      },

      // ─── SPACING ─────────────────────────────────────────────────────────────
      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        '38':  '9.5rem',
        '42':  '10.5rem',
        '46':  '11.5rem',
        '50':  '12.5rem',
        '54':  '13.5rem',
        '58':  '14.5rem',
        '62':  '15.5rem',
        '66':  '16.5rem',
        '70':  '17.5rem',
        '76':  '19rem',
        '84':  '21rem',
        '88':  '22rem',
        '92':  '23rem',
        '96':  '24rem',
        '100': '25rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
      },

      // ─── BORDER RADIUS ───────────────────────────────────────────────────────
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },

      // ─── SCREENS ─────────────────────────────────────────────────────────────
      screens: {
        xs:   '480px',
        sm:   '640px',
        md:   '768px',
        lg:   '1024px',
        xl:   '1280px',
        '2xl':'1440px',
        '3xl':'1600px',
      },

      // ─── SHADOWS ─────────────────────────────────────────────────────────────
      boxShadow: {
        'glow-gold':  '0 0 40px -10px rgba(245, 158, 11, 0.4)',
        'glow-gold-lg': '0 0 80px -20px rgba(245, 158, 11, 0.35)',
        'glow-navy':  '0 0 60px -15px rgba(30, 65, 117, 0.5)',
        'card-dark':  '0 4px 24px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.2)',
        'card-light': '0 4px 24px rgba(11, 31, 58, 0.08), 0 1px 4px rgba(11, 31, 58, 0.04)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.25), 0 4px 16px rgba(0,0,0,0.15)',
        'nav':        '0 1px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.06)',
      },

      // ─── GRADIENTS / BACKGROUNDS ─────────────────────────────────────────────
      backgroundImage: {
        'gradient-hero':     'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,158,11,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(203,213,225,0.4) 0%, transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 50%, #FFFFFF 100%)',
        'gradient-section':  'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        'gradient-light':    'linear-gradient(180deg, #FFFFFF 0%, #FFFBEB 100%)',
        'gradient-gold':     'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
        'gradient-gold-dark':'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
        'gradient-cta':      'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(245,158,11,0.15) 0%, transparent 70%), linear-gradient(180deg, #FEF3C7 0%, #FFFBEB 100%)',
        'noise':             "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },

      // ─── ANIMATION ───────────────────────────────────────────────────────────
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)' },
          '50%':       { boxShadow: '0 0 40px rgba(245, 158, 11, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up':     'fade-up 0.6s ease forwards',
        'fade-in':     'fade-in 0.4s ease forwards',
        'shimmer':     'shimmer 2s linear infinite',
        'pulse-gold':  'pulse-gold 3s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
        'spin-slow':   'spin-slow 20s linear infinite',
      },

      // ─── TRANSITIONS ─────────────────────────────────────────────────────────
      transitionTimingFunction: {
        'premium':     'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring':      'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-in-expo':'cubic-bezier(0.7, 0, 0.84, 0)',
        'ease-out-expo':'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000':'1000ms',
        '1200':'1200ms',
        '1500':'1500ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
