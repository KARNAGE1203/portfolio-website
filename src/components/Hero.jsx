import HeroBackground from './HeroBackground'
import './Hero.css'

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="hero">
      <HeroBackground />
      <div className="container hero__inner">
        <p className="hero__name fade-up" style={{ animationDelay: '0s' }}>
          Hi! I am Danish Saini
        </p>
        <h1 className="hero__headline fade-up" style={{ animationDelay: '0.3s' }}>
          I design it. I build it.
        </h1>
        <p className="hero__subheading fade-up" style={{ animationDelay: '0.6s' }}>
          UX/UI Designer &amp; Frontend Developer based in Dubai.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
            View My Work
          </a>
          <a href="/resume.pdf" className="btn btn-outline" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
