import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider'
import ChatWidget from '@/components/layout/ChatWidget'
import CustomCursor from '@/components/layout/CustomCursor'
import TextUsTab from '@/components/layout/TextUsTab'
import { BUSINESS_SCHEMA } from '@/lib/schema'
import { baseMetadata } from '@/lib/seo'

// ─── FONTS ───────────────────────────────────────────────────────────────────
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  adjustFontFallback: true,
})

// ─── METADATA ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

// ─── LAYOUT ──────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_SCHEMA) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* GTM — replace GTM-XXXXXX with your container ID */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
        )}
      </head>
      <body className="bg-navy-900 font-sans antialiased">
        {/* GTM noscript */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        <SmoothScrollProvider>
          {/* Skip to content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50
                       focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-navy-950 focus:rounded-lg
                       focus:font-semibold focus:text-sm"
          >
            Skip to main content
          </a>

          <CustomCursor />
          <Header />

          <main id="main-content">
            {children}
          </main>

          <Footer />
          <ChatWidget />
          <TextUsTab />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
