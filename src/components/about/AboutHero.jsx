import './AboutHero.css'

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__photo">
        <img
          src="/images/danish-portrait.jpg"
          alt="Danish Saini"
          onError={(event) => {
            event.currentTarget.style.display = 'none'
          }}
        />
        <div className="about-hero__placeholder">
          <span>Danish Saini</span>
        </div>
        <div className="about-hero__overlay" />
      </div>

      <div className="about-hero__content">
        <span className="section-label">About Me</span>
        <h1 className="about-hero__heading">Designer. Developer. Storyteller.</h1>
        <p className="about-hero__text">
          I'm Danish Saini - a 23-year-old UX/UI Designer and Frontend Developer currently
          completing my BSc in Computer Science at De Montfort University Dubai. I've lived and
          worked across three countries, built products from scratch, written a memoir, and I'm
          just getting started.
        </p>
        <div className="about-hero__actions">
          <a href="/#projects" className="btn btn-primary">View My Work</a>
          <a href="/resume.pdf" className="btn btn-outline" download>Download Resume</a>
        </div>
      </div>
    </section>
  )
}
