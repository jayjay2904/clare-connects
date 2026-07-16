import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react'
import { nav, site } from '../content/siteContent'
import { Assistant } from './Assistant'

function Logo() {
  return <Link className="logo" to="/" aria-label="Clare Connects home"><img className="logo-image" src={site.logo} alt="" /><span>Clare <em>Connects</em></span></Link>
}

export function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useEffect(() => { if (open) closeRef.current?.focus() }, [open])
  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className="header">
      <div className="header-inner"><Logo />
        <nav className="desktop-nav" aria-label="Main navigation">{nav.slice(0, 5).map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}</nav>
        <Link className="button button-small header-cta" to="/contact">Talk to Clare <ArrowUpRight size={16} /></Link>
        <button className="menu-button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu /></button>
      </div>
    </header>
    {open && <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Navigation menu" onKeyDown={(e) => { if (e.key === 'Escape') setOpen(false) }}>
      <div className="mobile-panel-top"><Logo /><button ref={closeRef} aria-label="Close menu" onClick={() => setOpen(false)}><X /></button></div>
      <nav aria-label="Mobile navigation">{nav.map((item, index) => <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}<ArrowUpRight /></NavLink>)}</nav>
      <a className="mobile-email" href={`mailto:${site.email}`}>{site.email}</a>
    </div>}
    <main id="main"><Outlet /></main>
    <footer className="footer"><div className="footer-top"><div><Logo /><p>Practical help, useful introductions and one trusted point of contact.</p></div><div><h2>Explore</h2>{nav.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div><div><h2>Stay connected</h2><a href={`mailto:${site.email}`}>{site.email}</a><a className="social-link" href={site.social.linkedin} target="_blank" rel="noreferrer">Clare on LinkedIn <ArrowUpRight size={15} /></a><p>{site.responseTime}</p><Link className="text-link" to="/contact">Start a conversation <ArrowUpRight size={16} /></Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Clare Connects</span><div><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div><span className="made"><Sparkles size={14} /> Thoughtfully connected</span></div></footer>
    <Assistant />
    <CookieNotice />
  </div>
}

function CookieNotice() {
  const [visible, setVisible] = useState(() => localStorage.getItem('cc-cookie-notice') !== 'dismissed')
  if (!visible) return null
  return <aside className="cookie" aria-label="Cookie notice"><div><strong>A simple, privacy-first website</strong><p>We use only essential browser storage at present. No advertising or analytics cookies are set.</p></div><button className="button button-small" onClick={() => { localStorage.setItem('cc-cookie-notice', 'dismissed'); setVisible(false) }}>Understood</button></aside>
}
