import { useEffect, useState } from 'react'
import './Nav.css'

const LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Book', href: '#book' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
        <a href="#top" className="nav__logo">Danish Saini</a>

        <nav className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link" onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
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
