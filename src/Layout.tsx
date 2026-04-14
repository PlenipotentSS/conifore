import { navigate } from './router'

interface NavLinkProps {
  to: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ to, children, className }: NavLinkProps) {
  const isExternal = to.startsWith('http') || to.startsWith('mailto:')
  if (isExternal) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}

export function Header() {
  return (
    <header className="header">
      <a
        href="/"
        className="header-logo"
        aria-label="Conifore — Home"
        onClick={(e) => { e.preventDefault(); navigate('/') }}
      >
        <img src="/Conifore-noname.png" alt="Conifore" className="logo-mobile" />
        <img src="/Conifore-nameonly.png" alt="Conifore" className="logo-desktop" />
      </a>

      <nav aria-label="Primary navigation">
        <ul className="header-nav">
          <li><a href="/#about">About</a></li>
          <li><a href="/#history">History</a></li>
          <li><a href="/#partner">Partner With Us</a></li>
        </ul>
      </nav>

      <a href="/#partner" className="btn btn-outline-cream">
        Get in Touch
      </a>
    </header>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <a
            href="/"
            className="footer-logo"
            aria-label="Conifore — Home"
            onClick={(e) => { e.preventDefault(); navigate('/') }}
          >
            <img src="/Conifore-nameonly.png" alt="Conifore" />
          </a>

          <nav aria-label="Footer navigation">
            <ul className="footer-links">
              <li><a href="/#about">About</a></li>
              <li><a href="/#history">History</a></li>
              <li><a href="/#partner">Partner With Us</a></li>
              <li>
                <a href="mailto:contact@conifore.com">contact@conifore.com</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {year} Conifore LLC. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <NavLink to="/privacy" className="footer-legal-link">Privacy Policy</NavLink>
            <span className="footer-legal-sep" aria-hidden="true">·</span>
            <NavLink to="/terms" className="footer-legal-link">Terms of Service</NavLink>
            <span className="footer-legal-sep" aria-hidden="true">·</span>
            <a href="https://www.conifore.com" className="footer-legal-link" target="_blank" rel="noreferrer">
              www.conifore.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
