import { Header, Footer } from './Layout'

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-banner">
          <div className="legal-banner-inner">
            <p className="legal-banner-org">Conifore LLC</p>
            <h1>Terms of Service</h1>
            <p className="legal-banner-meta">Effective Date: April 14, 2026 &nbsp;·&nbsp; Version 1.0</p>
          </div>
        </div>

        <div className="legal-doc">
          <div className="legal-effective-bar">
            <span><strong>Effective:</strong> April 14, 2026</span>
            <span><strong>Governing Law:</strong> Washington State</span>
            <span><strong>Contact:</strong> <a href="mailto:legal@conifore.com">legal@conifore.com</a></span>
          </div>

          <div className="legal-summary">
            <p>
              <strong>Plain-language summary:</strong> These Terms govern your use of the Conifore
              borrower portal. By accessing the portal or entering into a loan with Conifore, you agree
              to these Terms. Key points: you must provide accurate information, you authorize ACH debits
              for interest payments, the portal is for commercial borrowers only, and your loan agreement
              governs all lending terms. Please read this carefully.
            </p>
          </div>

          {/* ── 1 ── */}
          <h2 className="legal-h2">1. Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you
            ("Borrower," "you," or "your") and Conifore LLC, a Washington limited liability company
            ("Conifore," "we," "us," or "our"). These Terms govern your access to and use of the
            Conifore borrower portal at <strong>app.conifore.com</strong> and any related services
            (collectively, the "Platform").
          </p>
          <p>
            By accessing the Platform, creating an account, linking a bank account, or executing any
            loan or authorization agreement with Conifore, you confirm that you have read, understood,
            and agree to be bound by these Terms and our{' '}
            <a href="/privacy">Privacy Policy</a>, which is incorporated herein by reference.
          </p>
          <p>
            If you are accessing the Platform on behalf of a business entity, you represent and warrant
            that you have authority to bind that entity to these Terms, and that "you" refers to both
            you individually and the entity.
          </p>
          <div className="legal-warning">
            <p><strong>If you do not agree to these Terms, do not access or use the Platform.</strong></p>
          </div>

          {/* ── 2 ── */}
          <h2 className="legal-h2">2. Eligibility and Account Registration</h2>
          <p className="legal-h3">2a. Eligibility</p>
          <p>The Platform is available exclusively to:</p>
          <ul>
            <li>
              Business entities (LLCs, corporations, partnerships, or similar) that have entered into
              or are in the process of entering into a commercial loan agreement with Conifore; and
            </li>
            <li>
              Individual guarantors or authorized representatives of such entities who are at least
              18 years of age and have legal capacity to contract.
            </li>
          </ul>
          <p>
            The Platform is not available for consumer or personal use. All loans originated by
            Conifore are commercial loans governed by applicable commercial lending laws.
          </p>

          <p className="legal-h3">2b. Account Creation</p>
          <p>
            To access the Platform, you must create an account using a valid email address and complete
            our identity verification process. You agree to:
          </p>
          <ul>
            <li>Provide accurate, current, and complete information during registration and throughout your use of the Platform</li>
            <li>Maintain the security of your login credentials and not share access with unauthorized persons</li>
            <li>
              Notify Conifore immediately at{' '}
              <a href="mailto:security@conifore.com">security@conifore.com</a> of any unauthorized
              access or suspected breach of your account
            </li>
            <li>Accept responsibility for all activity occurring under your account credentials</li>
          </ul>

          <p className="legal-h3">2c. Identity Verification (KYC)</p>
          <p>
            As a regulated financial institution, Conifore is required by law to verify the identity of
            all borrowers and authorized representatives. By creating an account, you consent to
            Conifore performing identity verification, AML screening, and government watchlist checks
            using your provided information. Failure to pass verification will result in denial of
            access to the Platform and loan services.
          </p>

          {/* ── 3 ── */}
          <h2 className="legal-h2">3. Platform Services</h2>
          <p className="legal-h3">3a. Borrower Portal</p>
          <p>The Platform provides authorized borrowers with access to:</p>
          <ul>
            <li>Loan account information, balance, and payment history</li>
            <li>Monthly interest calculation details and upcoming payment previews</li>
            <li>Bank account linking and ACH authorization management via Plaid</li>
            <li>Secure messaging with Conifore account management</li>
            <li>Document access for executed loan agreements and payment records</li>
          </ul>

          <p className="legal-h3">3b. Plaid Integration</p>
          <p>
            The Platform uses Plaid Inc. to facilitate bank account verification and connection. When
            you use Plaid Link within the Platform, you are also subject to{' '}
            <a href="https://plaid.com/legal/end-user-privacy-policy/" target="_blank" rel="noreferrer">
              Plaid's End User Privacy Policy
            </a>. Conifore is not responsible for Plaid's services, availability, or practices. Your
            use of Plaid is at your own risk, subject to Plaid's terms.
          </p>

          <p className="legal-h3">3c. Service Availability</p>
          <p>
            Conifore does not guarantee that the Platform will be available at all times. We may
            temporarily suspend access for maintenance, security updates, or circumstances beyond our
            control. We will provide reasonable advance notice of planned maintenance when possible.
            Scheduled ACH payments are processed independently of portal availability.
          </p>

          {/* ── 4 ── */}
          <h2 className="legal-h2">4. ACH Payment Authorization</h2>
          <p className="legal-h3">4a. Authorization</p>
          <p>
            By linking your bank account through the Platform and executing your loan agreement, you
            provide Conifore LLC with written authorization to initiate Automated Clearing House (ACH)
            debit entries from your designated bank account. Specifically, you authorize Conifore to:
          </p>
          <ul>
            <li>Debit your designated account for monthly interest payments in variable amounts as calculated under your loan agreement</li>
            <li>Initiate debits on or after the payment due date specified in your loan agreement</li>
            <li>Re-present a debit up to two (2) additional times if the initial debit is returned for insufficient funds (NACHA return codes R01 or R09)</li>
          </ul>

          <p className="legal-h3">4b. Variable Amount Disclosure</p>
          <p>
            You acknowledge that the amount of each ACH debit will vary from month to month based on
            the interest calculation methodology specified in your loan agreement, which may include a
            floating rate component tied to the Secured Overnight Financing Rate (SOFR) plus an
            applicable spread, or a fixed rate. Conifore will make the calculated interest amount
            available in the Platform at least three (3) business days before the scheduled debit date.
          </p>

          <p className="legal-h3">4c. Revocation</p>
          <p>
            You may revoke ACH authorization by providing written notice to{' '}
            <a href="mailto:payments@conifore.com">payments@conifore.com</a> at least three (3)
            business days prior to the scheduled debit. Revocation of ACH authorization does not
            extinguish or modify your payment obligations under your loan agreement. Conifore may
            pursue all available remedies to collect amounts owed if ACH authorization is revoked.
          </p>

          <p className="legal-h3">4d. Failed Payments</p>
          <p>
            If a scheduled ACH debit fails for any reason, you remain responsible for the full payment
            amount plus any late fees or default interest as specified in your loan agreement. Repeated
            ACH failures may constitute an event of default under your loan agreement.
          </p>

          {/* ── 5 ── */}
          <h2 className="legal-h2">5. Borrower Obligations</h2>
          <p>In connection with your use of the Platform and your loan with Conifore, you agree to:</p>
          <ul>
            <li>Maintain sufficient funds in your designated bank account to cover scheduled ACH debits</li>
            <li>Notify Conifore promptly of any change to your banking information, legal entity status, ownership, or contact information</li>
            <li>Provide accurate and complete financial and identity information at all times</li>
            <li>Not use the Platform for any fraudulent, unlawful, or unauthorized purpose</li>
            <li>Not attempt to circumvent, disable, or interfere with any security feature of the Platform</li>
            <li>Not access or attempt to access accounts, data, or systems belonging to other borrowers</li>
            <li>Promptly notify Conifore of any suspected unauthorized access to your account</li>
          </ul>

          {/* ── 6 ── */}
          <h2 className="legal-h2">6. Loan Agreements</h2>
          <p>
            These Terms govern your use of the Platform only. All terms and conditions related to your
            loan — including interest rates, principal amounts, maturity dates, default provisions,
            remedies, collateral, and personal guarantees — are governed exclusively by the executed
            loan agreement between you and Conifore.
          </p>
          <p>
            In the event of any conflict between these Terms and your executed loan agreement, the loan
            agreement will control with respect to all lending matters. These Terms will control with
            respect to Platform access and use.
          </p>
          <p>
            Nothing in these Terms creates a commitment by Conifore to lend money or extend credit to
            any person or entity.
          </p>

          {/* ── 7 ── */}
          <h2 className="legal-h2">7. Intellectual Property</h2>
          <p>
            All content, features, functionality, software, design, and materials on the Platform —
            including but not limited to text, graphics, logos, and code — are the exclusive property
            of Conifore LLC or its licensors and are protected by applicable intellectual property laws.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable, revocable license to access and
            use the Platform solely for the purpose of managing your Conifore loan account. You may not
            copy, modify, distribute, reverse engineer, or create derivative works from any portion of
            the Platform.
          </p>

          {/* ── 8 ── */}
          <h2 className="legal-h2">8. Privacy and Data</h2>
          <p>
            Your use of the Platform is subject to our <a href="/privacy">Privacy Policy</a>, which
            describes how we collect, use, and protect your personal and financial information. By
            using the Platform, you consent to the data practices described in the Privacy Policy.
          </p>
          <p>
            Our Privacy Policy also serves as our notice under the Gramm-Leach-Bliley Act (GLBA)
            regarding how we handle your nonpublic personal financial information.
          </p>

          {/* ── 9 ── */}
          <h2 className="legal-h2">9. Disclaimers</h2>
          <p className="legal-caps">
            THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
            EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. CONIFORE DOES NOT WARRANT THAT
            THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL
            COMPONENTS.
          </p>
          <p>
            Conifore makes no representations regarding the accuracy or completeness of information
            displayed on the Platform, including interest calculation previews, which are estimates
            only. The executed payment run and your loan agreement govern actual amounts due.
          </p>

          {/* ── 10 ── */}
          <h2 className="legal-h2">10. Limitation of Liability</h2>
          <p className="legal-caps">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, CONIFORE LLC, ITS MEMBERS, OFFICERS,
            EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY
            TO USE THE PLATFORM, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, OR
            BUSINESS INTERRUPTION, EVEN IF CONIFORE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES.
          </p>
          <p className="legal-caps">
            CONIFORE'S TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATED
            TO THESE TERMS OR THE PLATFORM SHALL NOT EXCEED THE GREATER OF (A) $500 OR (B) THE
            AMOUNTS PAID BY YOU TO CONIFORE IN THE THREE (3) MONTHS PRECEDING THE CLAIM.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of certain damages, so the
            above limitations may not apply to you.
          </p>

          {/* ── 11 ── */}
          <h2 className="legal-h2">11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Conifore LLC and its members, officers,
            employees, and agents from and against any claims, liabilities, damages, losses, costs,
            and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your
            use of the Platform in violation of these Terms; (b) your provision of false or inaccurate
            information; (c) your violation of any applicable law or regulation; or (d) your
            infringement of any third-party rights.
          </p>

          {/* ── 12 ── */}
          <h2 className="legal-h2">12. Dispute Resolution</h2>
          <p className="legal-h3">12a. Governing Law</p>
          <p>
            These Terms are governed by and construed in accordance with the laws of the State of
            Washington, without regard to conflict of law principles.
          </p>

          <p className="legal-h3">12b. Informal Resolution</p>
          <p>
            Before initiating any formal dispute, you agree to contact Conifore at{' '}
            <a href="mailto:legal@conifore.com">legal@conifore.com</a> and attempt to resolve the
            dispute informally. Conifore will make reasonable efforts to respond within 10 business
            days.
          </p>

          <p className="legal-h3">12c. Venue</p>
          <p>
            If informal resolution fails, any dispute arising from or related to these Terms or your
            use of the Platform shall be subject to the exclusive jurisdiction of the state and federal
            courts located in King County, Washington. You consent to personal jurisdiction in those
            courts.
          </p>

          <p className="legal-h3">12d. Loan Agreement Disputes</p>
          <p>
            Disputes related to your loan terms, payment obligations, or defaults are governed by the
            dispute resolution provisions in your executed loan agreement, which may differ from this
            section.
          </p>

          {/* ── 13 ── */}
          <h2 className="legal-h2">13. Termination and Suspension</h2>
          <p className="legal-h3">13a. By Conifore</p>
          <p>
            Conifore may suspend or terminate your Platform access at any time, with or without notice,
            if: (a) your loan is paid in full; (b) you breach these Terms or your loan agreement; (c)
            we suspect fraudulent activity; (d) we are required to do so by law or regulation; or (e)
            we discontinue the Platform.
          </p>
          <p>
            Termination of Platform access does not affect any outstanding obligations under your loan
            agreement, which remain in full force and effect.
          </p>

          <p className="legal-h3">13b. By You</p>
          <p>
            You may request termination of your Platform account by contacting{' '}
            <a href="mailto:support@conifore.com">support@conifore.com</a>. Account termination is
            subject to the satisfaction of all outstanding loan obligations and does not affect
            Conifore's rights to pursue collection of any amounts owed.
          </p>

          <p className="legal-h3">13c. Effect of Termination</p>
          <p>
            Upon termination, your right to access the Platform ceases immediately. Conifore will
            retain your data as required by our Privacy Policy and applicable law. Sections 6, 7, 9,
            10, 11, 12, and 14 of these Terms survive termination.
          </p>

          {/* ── 14 ── */}
          <h2 className="legal-h2">14. General Provisions</h2>
          <p className="legal-h3">14a. Entire Agreement</p>
          <p>
            These Terms, together with the Privacy Policy and any executed loan agreement, constitute
            the entire agreement between you and Conifore regarding the Platform and supersede all
            prior agreements or understandings relating to the same subject matter.
          </p>

          <p className="legal-h3">14b. Modifications</p>
          <p>
            Conifore reserves the right to modify these Terms at any time. Material changes will be
            communicated to active borrowers via email at least 30 days before taking effect. Your
            continued use of the Platform after the effective date of any modification constitutes
            acceptance of the revised Terms.
          </p>

          <p className="legal-h3">14c. Severability</p>
          <p>
            If any provision of these Terms is found to be unenforceable, that provision will be
            modified to the minimum extent necessary to make it enforceable, and the remaining
            provisions will continue in full force and effect.
          </p>

          <p className="legal-h3">14d. Waiver</p>
          <p>
            Conifore's failure to enforce any provision of these Terms will not constitute a waiver of
            its right to enforce that provision in the future.
          </p>

          <p className="legal-h3">14e. Assignment</p>
          <p>
            You may not assign your rights or obligations under these Terms without Conifore's prior
            written consent. Conifore may assign these Terms, including in connection with a merger,
            acquisition, or sale of assets, without notice to you.
          </p>

          <p className="legal-h3">14f. No Third-Party Beneficiaries</p>
          <p>These Terms do not create any third-party beneficiary rights.</p>

          {/* ── 15 ── */}
          <h2 className="legal-h2">15. Contact Information</h2>

          <div className="legal-contact-box">
            <p className="legal-h3">Questions About These Terms</p>
            <p>For legal questions or concerns about these Terms of Service:</p>
            <p><strong>Legal inquiries:</strong> <a href="mailto:legal@conifore.com">legal@conifore.com</a></p>
            <p><strong>Payment/ACH questions:</strong> <a href="mailto:payments@conifore.com">payments@conifore.com</a></p>
            <p><strong>Account support:</strong> <a href="mailto:support@conifore.com">support@conifore.com</a></p>
            <p><strong>Mailing Address:</strong> Conifore LLC, Issaquah, WA</p>
            <p className="legal-footnote">
              These Terms were last updated April 14, 2026. Prior versions are available upon written request.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
