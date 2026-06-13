import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

const SECTION_LINKS = [
  { label: 'Projects', hash: '#projects' },
  { label: 'Book', hash: '#book' },
  { label: 'Contact', hash: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className={`nav ${scrolled || menuOpen ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" onClick={handleLinkClick}>Danish Saini</Link>

        <nav className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {SECTION_LINKS.slice(0, 1).map((link) =>
            onHome ? (
              <a key={link.hash} href={link.hash} className="nav__link" onClick={handleLinkClick}>
                {link.label}
              </a>
            ) : (
              <Link key={link.hash} to={`/${link.hash}`} className="nav__link" onClick={handleLinkClick}>
                {link.label}
              </Link>
            )
          )}

          <NavLink
            to="/about"
            className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            onClick={handleLinkClick}
          >
            About
          </NavLink>

          {SECTION_LINKS.slice(1).map((link) =>
            onHome ? (
              <a key={link.hash} href={link.hash} className="nav__link" onClick={handleLinkClick}>
                {link.label}
              </a>
            ) : (
              <Link key={link.hash} to={`/${link.hash}`} className="nav__link" onClick={handleLinkClick}>
                {link.label}
              </Link>
            )
          )}

          <a
            href="mailto:sainidanish1229@gmail.com"
            className="btn btn-primary nav__cta nav__cta--mobile"
            onClick={handleLinkClick}
          >
            Get In Touch
          </a>
        </nav>

        <a href="mailto:sainidanish1229@gmail.com" className="btn btn-primary nav__cta">
          Get In Touch
        </a>

        <button
          className={`nav__toggle ${menuOpen ? 'nav__toggle--open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
