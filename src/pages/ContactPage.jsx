import { useEffect, useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Icon from '../components/Icon'
import WorldMapBackground from '../components/WorldMapBackground'
import './ContactPage.css'

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/danish-saini/',
    path: 'M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/KARNAGE1203',
    path: 'M12 2C6.48 2 2 6.58 2 12.21c0 4.47 2.87 8.26 6.84 9.6.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.65.35-1.1.63-1.36-2.22-.26-4.55-1.13-4.55-5.02 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.04a9.4 9.4 0 0 1 5 0c1.91-1.31 2.75-1.04 2.75-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.61 1.03 2.72 0 3.9-2.34 4.76-4.57 5.01.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.21C22 6.58 17.52 2 12 2z',
  },
  {
    name: 'Behance',
    href: 'https://www.behance.net/danishsaini',
    path: 'M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z',
  },
]

export default function ContactPage() {
  useDocumentTitle('Contact — Danish Saini')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="contact-page">
      <WorldMapBackground />

      <div className="contact-page__container">
        <div className={`contact-card reveal ${visible ? 'is-visible' : ''}`}>
          <span className="section-label">Contact</span>
          <h1 className="contact-card__heading">Let's talk.</h1>
          <p className="contact-card__subtext">
            Three countries. One direction. Always moving forward.
          </p>

          <div className="contact-card__items">
            <article className="contact-item">
              <span className="contact-item__icon">
                <Icon name="briefcase" />
              </span>
              <h2 className="contact-item__title">Recruiter or Hiring Manager</h2>
              <p className="contact-item__desc">
                You've seen the work. You want to talk about a role. Available from September
                2026 for part-time and hybrid roles in Dubai.
              </p>
              <div className="contact-item__actions">
                <a
                  href="mailto:sainidanish1229@gmail.com?subject=Opportunity%20for%20Danish%20Saini"
                  className="btn btn-primary"
                >
                  Send Opportunity
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Download Resume
                </a>
              </div>
            </article>

            <article className="contact-item">
              <span className="contact-item__icon">
                <Icon name="zap" />
              </span>
              <h2 className="contact-item__title">Client or Collaborator</h2>
              <p className="contact-item__desc">
                You have something to build and need someone who designs and develops. Open to
                freelance projects remotely and in Dubai.
              </p>
              <div className="contact-item__actions">
                <a
                  href="mailto:sainidanish1229@gmail.com?subject=Project%20Enquiry"
                  className="btn btn-primary"
                >
                  Tell Me About Your Project
                </a>
              </div>
            </article>

            <article className="contact-item">
              <span className="contact-item__icon">
                <Icon name="smile" />
              </span>
              <h2 className="contact-item__title">Just a Human</h2>
              <p className="contact-item__desc">
                You read the book, related to something, want to say hello. Write to me directly.
                I read everything.
              </p>
              <div className="contact-item__actions">
                <a href="mailto:sainidanish1229@gmail.com" className="contact-item__email">
                  sainidanish1229@gmail.com
                </a>
              </div>
            </article>
          </div>

          <div className="contact-card__divider" />

          <div className="contact-card__socials">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="contact-card__social"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
