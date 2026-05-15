import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Country Public Adjusters',
  description: 'Terms of Service for Country Public Adjusters LLC. Understand your rights and our obligations when you engage our public adjuster services.',
}

export default function TermsPage() {
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
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">Terms of Service</h1>
          <p className="text-white/60 text-lg">Effective Date: May 1, 2026 &nbsp;·&nbsp; Last Updated: May 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl prose prose-slate prose-lg">

          <p>Please read these Terms of Service ("<strong>Terms</strong>") carefully before using the website or services of Country Public Adjusters LLC ("<strong>Company</strong>", "<strong>we</strong>", "<strong>us</strong>", or "<strong>our</strong>"). By accessing our website or engaging our services, you agree to be bound by these Terms.</p>

          <h2>1. Services</h2>
          <p>Country Public Adjusters LLC is a licensed public adjusting firm operating in Tennessee and Florida. We represent property owners — not insurance companies — in the preparation, documentation, and negotiation of insurance claims for property damage.</p>
          <p>Our services include claim assessment, documentation, policy review, and negotiation with your insurance carrier on your behalf. We are not attorneys and do not provide legal advice.</p>

          <h2>2. No Guarantee of Outcomes</h2>
          <p>We make no guarantee, warranty, or representation regarding the outcome of any insurance claim, including any specific settlement amount, timeline, or coverage determination. Past results referenced on our website are provided for informational purposes only and are not indicative of future outcomes.</p>

          <h2>3. Contingency Fee Basis</h2>
          <p>Our services are provided on a contingency-fee basis. Our fee is a percentage of the settlement recovered on your behalf. No fee is earned unless we recover funds for you. The specific fee percentage will be set out in your signed public adjuster agreement.</p>

          <h2>4. Client Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate and complete information about your property, damage, and insurance policy;</li>
            <li>Cooperate with our team and your insurance carrier throughout the claims process;</li>
            <li>Notify us promptly of any communications you receive from your insurance carrier;</li>
            <li>Take reasonable steps to protect your property from further damage after a loss event.</li>
          </ul>

          <h2>5. Communications and SMS</h2>
          <p>By providing your phone number and consenting to SMS communications, you agree to receive text messages from Country Public Adjusters regarding your claim, appointments, and related matters. Message and data rates may apply. Reply <strong>STOP</strong> at any time to opt out. See our <a href="/sms-consent" className="text-amber-600 hover:text-amber-700">SMS Consent Policy</a> for full details.</p>

          <h2>6. Intellectual Property</h2>
          <p>All content on this website — including text, images, logos, and design — is the property of Country Public Adjusters LLC and may not be reproduced, distributed, or used without our express written permission.</p>

          <h2>7. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Country Public Adjusters LLC shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of our website or services, or from any decision made by your insurance carrier.</p>
          <p>Our total liability to you for any claim arising out of these Terms or our services shall not exceed the fees actually paid by you to us.</p>

          <h2>8. Disclaimer</h2>
          <p>Our website is provided "as is" without warranties of any kind, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of harmful components.</p>

          <h2>9. Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Florida. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Broward County, Florida.</p>

          <h2>10. Changes to These Terms</h2>
          <p>We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our website or services following any changes constitutes your acceptance of the revised Terms.</p>

          <h2>11. Contact Us</h2>
          <p>If you have questions about these Terms, please contact us:</p>
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
