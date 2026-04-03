import './index.css'

// Update this URL with your Google Calendar appointment scheduling link
const SCHEDULE_URL = 'https://calendar.app.google/tE13E3ksGHep8Ek29'

function Header() {
  return (
    <header className="header">
      <a href="#hero" className="header-logo" aria-label="Conifore — Home">
        {/* Mobile: tree icon mark */}
        <img
          src="/Conifore-noname.png"
          alt="Conifore"
          className="logo-mobile"
        />
        {/* Desktop: full wordmark (dark background baked in, seamless) */}
        <img
          src="/Conifore-nameonly.png"
          alt="Conifore"
          className="logo-desktop"
        />
      </a>

      <nav aria-label="Primary navigation">
        <ul className="header-nav">
          <li><a href="#about">About</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#partner">Partner With Us</a></li>
        </ul>
      </nav>

      <a href="#partner" className="btn btn-outline-cream">
        Get in Touch
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="hero-content">
        <p className="eyebrow">Lending · Capital · Equity Investment</p>

        <h1>
          Patient capital.<br />
          <em>Principled stewardship.</em>
        </h1>

        <p className="hero-desc">
          We deploy capital with a long view — partnering with people and
          businesses to create sustainable outcomes for investors, operators,
          and the communities they serve.
        </p>

        <div className="hero-tags" aria-hidden="true">
          <span className="hero-tag">Lending</span>
          <span className="hero-tag">Equity Investment</span>
          <span className="hero-tag">Capital Deployment</span>
          <span className="hero-tag">Long-Term Partnership</span>
        </div>

        <a href="#partner" className="btn btn-cream btn-lg">
          Schedule a Conversation
        </a>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about-section on-light" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-label">About</span>
            <h2 className="section-heading">A single principal.<br />A clear purpose.</h2>

            <p>
              Conifore is a privately held investment firm led by a single
              principal with deep roots in the Pacific Northwest. Our approach
              is deliberate — we take time to understand each opportunity,
              each operator, and each relationship before committing capital.
            </p>
            <p>
              We believe that patience is not a liability — it is a competitive
              advantage. Our best outcomes have come from informed decisions
              made with a long horizon in mind, not from moving fast or chasing
              short-term returns.
            </p>
            <p>
              Whether the opportunity is a structured loan, an equity
              partnership, or a creative hybrid, we bring the same commitment:
              to understand your business, align on outcomes, and show up as a
              genuine partner for the duration.
            </p>
          </div>

          <div>
            <div className="contact-card" role="complementary" aria-label="Principal contact">
              {/* Update with the principal's name */}
              <h3 className="contact-card-name">Steven Stevenson</h3>
              <p className="contact-card-title">Founder &amp; Managing Principal</p>

              <div className="contact-divider" aria-hidden="true" />

              <div className="contact-row">
                <span className="contact-row-label">Email</span>
                <a href="mailto:steven@conifore.com" className="contact-row-value">
                  steven@conifore.com
                </a>
              </div>

              <div className="contact-row">
                <span className="contact-row-label">Focus</span>
                <span className="contact-row-value">
                  Real Estate, Lending, Financial, Business
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function History() {
  return (
    <section className="section history-section on-dark" id="history">
      <div className="section-inner">
        <div className="history-intro">
          <span className="section-label">History</span>
          <h2 className="section-heading">
            Two decades of deploying capital across industries.
          </h2>
          <p>
            Our track record spans complex capital structures, hands-on board
            service, and business transformations across sectors where most
            investors hesitate to go. That experience is the foundation of
            everything we do today.
          </p>
        </div>

        <div className="history-grid" role="list">
          <article className="history-card" role="listitem">
            <div className="history-num" aria-hidden="true">20+</div>
            <h3>Years Deploying Capital</h3>
            <p>
              Over two decades of leveraging capital expenditures across
              multiple industries — identifying where patient capital creates
              the most durable value and structuring creative solutions for
              operators with real needs.
            </p>
          </article>

          <article className="history-card" role="listitem">
            <div className="history-num" aria-hidden="true">↗</div>
            <h3>Board-Level Perspective</h3>
            <p>
              In-depth board service spanning hospitality, real estate,
              land development, and natural resources. We understand
              governance, accountability, and what it takes to guide an
              organization through cycles of growth and challenge.
            </p>
          </article>

          <article className="history-card" role="listitem">
            <div className="history-num" aria-hidden="true">$</div>
            <h3>Financial &amp; Budgeting Depth</h3>
            <p>
              A deep background in business finance, budgeting, and operational
              planning means we engage at the level of real numbers —
              understanding how capital flows through a business and where the
              leverage points actually are.
            </p>
          </article>

          <article className="history-card" role="listitem">
            <div className="history-num" aria-hidden="true">∞</div>
            <h3>Family Roots in the Land</h3>
            <p>
              Generational ties to timber, hospitality, and land development
              give us a grounded perspective on long-term value. We understand
              that the best investments are built over time, not extracted from
              it.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function Partner() {
  return (
    <section className="section partner-section" id="partner">
      <div className="section-inner">
        <div className="partner-inner">
          <span className="section-label">Partner With Us</span>
          <h2 className="section-heading">
            Let's talk about your business.
          </h2>
          <p>
            If you're working through a capital challenge — whether it's
            short-term liquidity, a growth opportunity, or a longer-term
            structure — we'd like to hear about it. We don't rush to a term
            sheet. We take the time to understand the full picture first.
          </p>
          <p>
            Reach out to schedule a conversation. No pitch deck required —
            just a straightforward discussion about where you are and where
            you're trying to go.
          </p>

          <a
            href={SCHEDULE_URL}
            className="btn btn-forest btn-lg"
            target="_blank"
            rel="noreferrer"
          >
            Schedule a Meeting
          </a>

          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#888' }}>
            Or reach us directly at{' '}
            <a
              href="mailto:contact@conifore.com"
              style={{ color: '#4a7c59', textDecoration: 'none' }}
            >
              contact@conifore.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <a href="#hero" className="footer-logo" aria-label="Conifore — Home">
            <img src="/Conifore-nameonly.png" alt="Conifore" />
          </a>

          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#history">History</a></li>
              <li><a href="#partner">Partner With Us</a></li>
              <li>
                <a href="mailto:contact@conifore.com">
                  contact@conifore.com
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} Conifore. All rights reserved.
          </p>
          <div className="footer-email">
            <a href="https://www.conifore.com" target="_blank" rel="noreferrer">
              www.conifore.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <History />
        <Partner />
      </main>
      <Footer />
    </>
  )
}
