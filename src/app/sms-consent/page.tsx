import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SMS Consent Policy | Country Public Adjusters',
  description: 'SMS verbal consent policy for Country Public Adjusters LLC. Learn how we collect, record, and honor SMS consent for claim-related communications.',
}

export default function SMSConsentPage() {
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
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">SMS Verbal Consent Policy</h1>
          <p className="text-white/60 text-lg">Effective Date: May 1, 2025 &nbsp;·&nbsp; Last Updated: May 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container mx-auto px-6 max-w-3xl prose prose-slate prose-lg">

          <h2>1. Business Name</h2>
          <p>
            Country Public Adjusters LLC<br />
            DBA: Country Public Adjusters
          </p>

          <h2>2. Messaging Use Case</h2>
          <p>Country Public Adjusters uses SMS messages for customer care and claim-related communication only.</p>
          <p>Messages may include:</p>
          <ul>
            <li>Appointment confirmations</li>
            <li>Inspection scheduling updates</li>
            <li>Document requests</li>
            <li>Claim status updates</li>
            <li>Responses to customer questions</li>
            <li>Follow-up communication related to an active or potential insurance claim</li>
          </ul>
          <p>Country Public Adjusters does not use SMS messages for cold outreach, purchased lead lists, spam or mass marketing campaigns.</p>
          <p>SMS messages are sent only to customers, potential customers or referral partners who have given permission to receive text messages.</p>

          <h2>3. Opt-In Type</h2>
          <p><strong>Verbal Opt-In</strong></p>
          <p>Consent is collected verbally during a phone call, in-person intake, onboarding call or claim intake conversation.</p>

          <h2>4. Full Verbal Consent Script</h2>
          <p>When speaking with a customer, potential customer or referral partner, our staff uses the following script before sending any SMS messages:</p>
          <blockquote>
            <p>"Would you like to receive text messages from Country Public Adjusters at this mobile number regarding your claim or inquiry? These messages may include appointment confirmations, claim status updates, document requests and responses to your questions. Message and data rates may apply. You can reply STOP at any time to opt out. Do we have your permission to send you these text messages?"</p>
          </blockquote>
          <p>If the customer says <strong>yes</strong>, our staff records the consent in the customer's CRM profile.</p>
          <p>If the customer says <strong>no</strong>, our staff marks SMS consent as <em>No</em> and no SMS messages are sent.</p>

          <h2>5. How Consent Is Recorded</h2>
          <p>When verbal SMS consent is received, our team records the consent in the customer's CRM contact profile.</p>
          <p>The following information is stored:</p>
          <ul>
            <li><strong>SMS Consent:</strong> Yes</li>
            <li><strong>Consent Date:</strong> Date when consent was received</li>
            <li><strong>Consent Source:</strong> Phone call or in-person intake</li>
            <li><strong>Phone Number:</strong> Mobile number approved by the customer for SMS communication</li>
          </ul>

          <h2>6. STOP Opt-Out Handling</h2>
          <p>Customers can opt out of SMS messages at any time by replying <strong>STOP</strong>.</p>
          <p>When a customer replies STOP, SMS messaging to that customer is stopped. The customer will no longer receive text messages from Country Public Adjusters unless they provide new consent in the future.</p>
          <p>Opt-outs are handled as follows:</p>
          <ul>
            <li>Update SMS Consent to <em>No</em></li>
            <li>Stop all SMS communication to that phone number</li>
            <li>Use phone calls or email for future communication unless the customer gives new SMS consent</li>
          </ul>

          <h2>7. Internal Compliance Statement</h2>
          <p>Country Public Adjusters sends SMS messages only to individuals who have provided consent. SMS communication is used for customer care and claim-related communication. We do not send unsolicited messages, cold SMS outreach or messages to purchased contact lists.</p>
          <p>Consent is documented in the customer's CRM profile and opt-out requests are honored immediately.</p>

          <p className="text-sm text-slate-500 mt-8 pt-6 border-t border-slate-200">
            <a href="/privacy" className="text-amber-600 hover:text-amber-700 mr-4">Privacy Policy</a>
            <a href="/terms" className="text-amber-600 hover:text-amber-700">Terms of Service</a>
          </p>
        </div>
      </section>
    </>
  )
}
