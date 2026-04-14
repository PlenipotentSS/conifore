import { Header, Footer } from './Layout'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-banner">
          <div className="legal-banner-inner">
            <p className="legal-banner-org">Conifore LLC</p>
            <h1>Privacy Policy</h1>
            <p className="legal-banner-meta">Effective Date: April 14, 2026 &nbsp;·&nbsp; Version 1.0</p>
          </div>
        </div>

        <div className="legal-doc">
          <div className="legal-effective-bar">
            <span><strong>Effective:</strong> April 14, 2026</span>
            <span><strong>Jurisdiction:</strong> Washington State, United States</span>
            <span><strong>Contact:</strong> <a href="mailto:privacy@conifore.com">privacy@conifore.com</a></span>
          </div>

          <div className="legal-summary">
            <p>
              <strong>Plain-language summary:</strong> Conifore LLC is a commercial lending company.
              We collect financial and identity information from borrowers to originate and service
              loans and to process interest payments. We use Plaid to verify your bank account. We do
              not sell your data. You have rights to access, correct, and request deletion of your
              information. For questions, contact us at{' '}
              <a href="mailto:privacy@conifore.com">privacy@conifore.com</a>.
            </p>
          </div>

          {/* ── 1 ── */}
          <h2 className="legal-h2">1. Who We Are</h2>
          <p>
            Conifore LLC ("Conifore," "we," "us," or "our") is a commercial lending company organized
            under the laws of the State of Washington, with its principal place of business in Issaquah,
            Washington. This Privacy Policy describes how we collect, use, store, share, and protect
            information about borrowers, guarantors, authorized representatives, and users of the
            Conifore borrower portal located at <strong>app.conifore.com</strong> (the "Platform").
          </p>
          <p>
            This Policy applies to information collected through the Platform, through our loan
            origination and servicing processes, and through our integration with third-party financial
            data services including Plaid Inc.
          </p>

          {/* ── 2 ── */}
          <h2 className="legal-h2">2. Information We Collect</h2>
          <p className="legal-h3">2a. Information You Provide Directly</p>
          <ul>
            <li>Full legal name, business entity name, and entity type</li>
            <li>Email address, phone number, and mailing address</li>
            <li>Government-issued identification for identity verification (KYC)</li>
            <li>Social Security Number or Employer Identification Number for tax and compliance purposes</li>
            <li>Loan application details including requested principal, purpose, and collateral information</li>
            <li>Signed loan agreements, personal guarantees, and related documents</li>
          </ul>

          <p className="legal-h3">2b. Financial Information Collected via Plaid</p>
          <p>
            When you connect your bank account through our borrower portal, we use{' '}
            <strong>Plaid Inc.</strong> to securely retrieve the following information directly from
            your financial institution:
          </p>
          <ul>
            <li>Bank account and routing numbers for ACH payment authorization</li>
            <li>Account holder name and account type</li>
            <li>Real-time and historical account balance information</li>
            <li>Identity information on file with your financial institution (for ownership verification)</li>
          </ul>
          <p>
            Plaid's privacy practices are described in the{' '}
            <a href="https://plaid.com/legal/privacy-policy/" target="_blank" rel="noreferrer">
              Plaid Privacy Policy
            </a>. By connecting your bank account, you also agree to Plaid's End User Privacy Policy.
          </p>

          <p className="legal-h3">2c. Information Collected Automatically</p>
          <ul>
            <li>IP address and approximate geographic location</li>
            <li>Browser type and operating system</li>
            <li>Login timestamps and session activity</li>
            <li>Device identifiers for security purposes</li>
          </ul>

          <p className="legal-h3">2d. Information from Third Parties</p>
          <ul>
            <li>Identity verification results from KYC and AML screening providers</li>
            <li>Government watchlist and sanctions screening results (required by law)</li>
            <li>Credit bureau or financial background information used in loan underwriting</li>
          </ul>

          {/* ── 3 ── */}
          <h2 className="legal-h2">3. How We Use Your Information</h2>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Legal Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Originating and servicing your loan</td><td>Performance of contract</td></tr>
              <tr><td>Processing monthly interest payments via ACH debit</td><td>Performance of contract; your explicit authorization</td></tr>
              <tr><td>Verifying your identity and bank account ownership (KYC)</td><td>Legal obligation (GLBA, BSA)</td></tr>
              <tr><td>Screening against government watchlists (AML/OFAC)</td><td>Legal obligation</td></tr>
              <tr><td>Communicating about your account, payments, and loan status</td><td>Performance of contract; legitimate interest</td></tr>
              <tr><td>Maintaining financial and audit records</td><td>Legal obligation</td></tr>
              <tr><td>Detecting and preventing fraud or unauthorized access</td><td>Legitimate interest; legal obligation</td></tr>
              <tr><td>Complying with applicable law and regulatory requirements</td><td>Legal obligation</td></tr>
              <tr><td>Improving the security and performance of the Platform</td><td>Legitimate interest</td></tr>
            </tbody>
          </table>
          <p>
            We do not use your information for advertising, marketing to third parties, or any purpose
            unrelated to the lending relationship.
          </p>

          {/* ── 4 ── */}
          <h2 className="legal-h2">4. ACH Payment Authorization</h2>
          <p>
            By linking your bank account through the Platform and executing a loan agreement with
            Conifore, you authorize Conifore LLC to initiate variable ACH debit entries from your
            designated bank account for monthly interest payments due under your loan agreement. Each
            debit will correspond to the interest amount calculated for that payment period as specified
            in your loan agreement.
          </p>
          <p>
            This authorization remains in effect until: (a) your loan is paid in full; (b) you provide
            written notice of revocation to{' '}
            <a href="mailto:payments@conifore.com">payments@conifore.com</a> at least three (3)
            business days prior to the scheduled payment date; or (c) Conifore terminates the
            authorization consistent with your loan agreement.
          </p>
          <p>
            Revocation of ACH authorization does not relieve you of any payment obligations under your
            loan agreement.
          </p>

          {/* ── 5 ── */}
          <h2 className="legal-h2">5. How We Share Your Information</h2>
          <p>
            We do not sell, rent, or trade your personal or financial information. We share your
            information only in the following circumstances:
          </p>

          <p className="legal-h3">5a. Service Providers</p>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Data Shared</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plaid Inc.</td>
                <td>Bank account verification and ACH authorization</td>
                <td>Borrower identity, bank credentials (via Link)</td>
              </tr>
              <tr>
                <td>ACH Payment Processor</td>
                <td>Executing interest payment debits</td>
                <td>Routing and account numbers, payment amount</td>
              </tr>
              <tr>
                <td>Google Cloud Platform</td>
                <td>Infrastructure and data hosting</td>
                <td>Encrypted data storage</td>
              </tr>
              <tr>
                <td>Identity Verification Provider</td>
                <td>KYC and AML screening</td>
                <td>Name, ID documents, date of birth</td>
              </tr>
            </tbody>
          </table>
          <p>
            All service providers are bound by data processing agreements requiring them to protect
            your information and use it only for the specified purpose.
          </p>

          <p className="legal-h3">5b. Legal Requirements</p>
          <p>
            We may disclose your information when required by law, court order, regulatory authority,
            or to protect the rights, property, or safety of Conifore, our borrowers, or others. This
            includes disclosures to financial regulators, law enforcement, and tax authorities.
          </p>

          <p className="legal-h3">5c. Business Transfers</p>
          <p>
            In the event of a merger, acquisition, or sale of assets, your information may be
            transferred as part of that transaction, subject to equivalent privacy protections.
          </p>

          {/* ── 6 ── */}
          <h2 className="legal-h2">6. Data Retention</h2>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Data Category</th>
                <th>Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Loan agreements and payment records</td><td>7 years from loan closure (regulatory requirement)</td></tr>
              <tr><td>Bank account and ACH authorization data</td><td>Duration of active loan + 7 years</td></tr>
              <tr><td>Identity and KYC records</td><td>5 years from account closure (BSA/AML requirement)</td></tr>
              <tr><td>Plaid access tokens</td><td>Deleted immediately upon loan payoff or consent revocation</td></tr>
              <tr><td>Application logs</td><td>90 days rolling</td></tr>
              <tr><td>Audit and transaction logs</td><td>7 years immutable</td></tr>
            </tbody>
          </table>
          <p>
            When retention periods expire, data is securely deleted within 30 days. Records subject to
            a legal or regulatory hold are retained for the minimum required period and deleted promptly
            upon expiration of that hold.
          </p>

          {/* ── 7 ── */}
          <h2 className="legal-h2">7. Data Security</h2>
          <p>
            We implement industry-standard technical and organizational measures to protect your
            information, including:
          </p>
          <ul>
            <li>AES-256-GCM encryption of sensitive financial data at rest</li>
            <li>TLS 1.2 or higher encryption for all data in transit</li>
            <li>Multi-factor authentication required for all personnel accessing production systems</li>
            <li>Access controls limiting data access to personnel with a documented business need</li>
            <li>Periodic access reviews and security audits</li>
            <li>Encryption key management via Google Cloud Key Management Service</li>
          </ul>
          <p>
            No method of transmission or storage is 100% secure. If you believe your account has been
            compromised, contact us immediately at{' '}
            <a href="mailto:security@conifore.com">security@conifore.com</a>.
          </p>

          {/* ── 8 ── */}
          <h2 className="legal-h2">8. Your Rights</h2>
          <p>
            Depending on your location and applicable law, you may have the following rights regarding
            your personal information:
          </p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your information, subject to legal retention requirements</li>
            <li><strong>Restriction:</strong> Request that we limit processing of your information in certain circumstances</li>
            <li><strong>Portability:</strong> Request your information in a structured, machine-readable format</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interest</li>
            <li><strong>Revoke ACH Authorization:</strong> Revoke bank account authorization as described in Section 4</li>
          </ul>
          <p>
            To exercise any of these rights, submit a written request to{' '}
            <a href="mailto:privacy@conifore.com">privacy@conifore.com</a>. We will respond within 30
            days. We may require identity verification before processing your request. Note that certain
            rights may be limited by our legal obligations as a regulated lender.
          </p>

          {/* ── 9 ── */}
          <h2 className="legal-h2">9. California Privacy Rights (CCPA)</h2>
          <p>
            If you are a California resident, you have rights under the California Consumer Privacy Act
            (CCPA), including the right to know, delete, and opt out of the sale of personal
            information. Conifore does not sell personal information. To submit a CCPA request, contact{' '}
            <a href="mailto:privacy@conifore.com">privacy@conifore.com</a>. We will not discriminate
            against you for exercising your CCPA rights.
          </p>

          {/* ── 10 ── */}
          <h2 className="legal-h2">10. Washington State Privacy</h2>
          <p>
            Washington residents have rights under the Washington My Health MY Data Act and applicable
            state consumer protection laws. For Washington-specific inquiries or to exercise your state
            privacy rights, contact{' '}
            <a href="mailto:privacy@conifore.com">privacy@conifore.com</a>.
          </p>

          {/* ── 11 ── */}
          <h2 className="legal-h2">11. GLBA Notice</h2>
          <p>
            As a financial institution subject to the Gramm-Leach-Bliley Act (GLBA), Conifore LLC is
            required to explain how we collect, share, and protect your financial information. This
            Privacy Policy serves as our GLBA privacy notice. We do not share your nonpublic personal
            information with nonaffiliated third parties for marketing purposes. We share it only as
            described in Section 5 of this Policy for the purpose of servicing your loan and complying
            with applicable law.
          </p>

          {/* ── 12 ── */}
          <h2 className="legal-h2">12. Cookies and Tracking</h2>
          <p>
            The Conifore borrower portal uses session cookies strictly necessary for authentication and
            security. We do not use third-party advertising cookies, behavioral tracking, or analytics
            services that share data with third parties. You may disable cookies in your browser
            settings, but doing so may impair portal functionality.
          </p>

          {/* ── 13 ── */}
          <h2 className="legal-h2">13. Children's Privacy</h2>
          <p>
            The Platform is intended solely for commercial borrowers who are legal entities or
            individuals of legal contracting age. We do not knowingly collect information from persons
            under the age of 18. If you believe we have inadvertently collected such information,
            contact us at{' '}
            <a href="mailto:privacy@conifore.com">privacy@conifore.com</a>.
          </p>

          {/* ── 14 ── */}
          <h2 className="legal-h2">14. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices,
            technology, or applicable law. We will notify active borrowers of material changes via
            email at least 30 days before the changes take effect. The effective date at the top of
            this page reflects the most recent revision. Your continued use of the Platform after the
            effective date constitutes acceptance of the updated Policy.
          </p>

          {/* ── 15 ── */}
          <h2 className="legal-h2">15. Contact Us</h2>
          <div className="legal-contact-box">
            <p className="legal-h3">Privacy Inquiries</p>
            <p>For questions, requests, or concerns about this Privacy Policy or your personal information:</p>
            <p><strong>Email:</strong> <a href="mailto:privacy@conifore.com">privacy@conifore.com</a></p>
            <p><strong>Security concerns:</strong> <a href="mailto:security@conifore.com">security@conifore.com</a></p>
            <p><strong>Mailing Address:</strong> Conifore LLC, Issaquah, WA</p>
            <p className="legal-footnote">
              Response time: 3 business days for general inquiries · 1 business day for security issues
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
