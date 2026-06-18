import './Contact.css'

const LINKS = [
  {
    label: 'Email',
    value: 'sainidanish1229@gmail.com',
    href: 'mailto:sainidanish1229@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/danish-saini',
    href: 'https://www.linkedin.com/in/danish-saini/',
  },
  {
    label: 'GitHub',
    value: 'github.com/KARNAGE1203',
    href: 'https://github.com/KARNAGE1203',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="contact__heading">Let's build something.</h2>
        <p className="contact__subtext">
          Open to part-time, internship, and freelance roles in Dubai and remotely.
        </p>

        <div className="contact__links">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
              className="contact__link"
            >
              <span className="contact__link-label">{link.label}</span>
              <span className="contact__link-value">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
