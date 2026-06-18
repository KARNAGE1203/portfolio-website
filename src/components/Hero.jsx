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
          Hi, I'm Danish Saini —
        </p>
        <h1 className="hero__headline">
          <span className="hero__hl-bold fade-up" style={{ animationDelay: '0.2s' }}>
            I design it.
          </span>
          <span className="hero__hl-ghost fade-up" style={{ animationDelay: '0.4s' }}>
            I build it.
          </span>
        </h1>
        <p className="hero__subheading fade-up" style={{ animationDelay: '0.6s' }}>
          UX/UI designer and developer in Dubai. I write things, too.
        </p>
        <div className="hero__actions fade-up" style={{ animationDelay: '0.8s' }}>
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
