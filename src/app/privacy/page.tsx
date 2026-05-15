import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Country Public Adjusters',
  description: 'Privacy Policy for Country Public Adjusters LLC. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-20 lg:py-28"
        style={{ background: 'linear-gradient(160deg, #030D1A 0%, #0D2545 50%, #0A1E3C 100%)' }}
      >
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
            style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B' }}>
            LEGAL
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-lg">Effective Date: May 1, 2025 &nbsp;·&nbsp; Last Updated: May 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl prose prose-slate prose-lg">

          <p>Country Public Adjusters LLC ("<strong>Company</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.</p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following categories of personal information:</p>
          <ul>
            <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
            <li><strong>Property Information:</strong> Property address, type of damage, insurance carrier, and policy details you provide.</li>
            <li><strong>Communication Records:</strong> Records of phone calls, emails, chat messages, and SMS exchanges with our team.</li>
            <li><strong>Usage Data:</strong> Pages visited, time on site, browser type, and IP address collected automatically via cookies and analytics tools.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide public adjuster services and manage your insurance claim;</li>
            <li>Contact you regarding your claim, inspection, or inquiry;</li>
            <li>Send appointment confirmations, claim status updates, and document requests via phone, email, or SMS (with your consent);</li>
            <li>Improve our website and services;</li>
            <li>Comply with applicable laws and regulations.</li>
          </ul>

          <h2>3. SMS Communications</h2>
          <p>We send SMS messages only to individuals who have provided explicit consent. Consent is obtained verbally during a phone call or in-person intake. You may opt out at any time by replying <strong>STOP</strong> to any text message. Message and data rates may apply.</p>
          <p>We do not use SMS for cold outreach, purchased lead lists, or unsolicited marketing. For full details, see our <a href="/sms-consent" className="text-amber-600 hover:text-amber-700">SMS Consent Policy</a>.</p>

          <h2>4. Sharing of Information</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul>
            <li><strong>Insurance Companies:</strong> As necessary to process and negotiate your claim;</li>
            <li><strong>Service Providers:</strong> Third-party vendors who assist us in operating our business (CRM platforms, scheduling tools, communication software), each bound by confidentiality obligations;</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to provide our services and meet our legal obligations. Claim-related records are typically retained for a minimum of seven (7) years in compliance with industry standards.</p>

          <h2>6. Your Rights</h2>
          <p>Depending on your state of residence, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you;</li>
            <li>Request correction of inaccurate information;</li>
            <li>Request deletion of your information, subject to legal retention requirements;</li>
            <li>Opt out of SMS communications at any time by replying STOP.</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:claims@countrypublicadjusters.com" className="text-amber-600 hover:text-amber-700">claims@countrypublicadjusters.com</a>.</p>

          <h2>7. Cookies and Analytics</h2>
          <p>Our website uses cookies and third-party analytics tools (such as Google Analytics) to understand how visitors use our site. You can disable cookies in your browser settings; however, some features of the website may not function properly.</p>

          <h2>8. Children's Privacy</h2>
          <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>

          <h2>9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the revised policy.</p>

          <h2>10. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <p>
            <strong>Country Public Adjusters LLC</strong><br />
            7051 W Commercial Blvd Suite 3A<br />
            Tamarac, FL 33319<br />
            Phone: <a href="tel:18883975420" className="text-amber-600 hover:text-amber-700">1-888-397-5420</a><br />
            Email: <a href="mailto:claims@countrypublicadjusters.com" className="text-amber-600 hover:text-amber-700">claims@countrypublicadjusters.com</a>
          </p>
        </div>
      </section>
    </>
  )
}
