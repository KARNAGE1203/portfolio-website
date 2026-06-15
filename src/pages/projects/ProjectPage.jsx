import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import ImageWithFallback from '../../components/ImageWithFallback'
import Icon from '../../components/Icon'
import './ProjectPage.css'

const ACCENT_CYCLE = ['var(--accent)', 'var(--accent-2)', 'var(--accent-3)']
const ACCENT_DIM_CYCLE = ['var(--accent-dim)', 'var(--accent-2-dim)', 'var(--accent-3-dim)']
const STAT_ICONS = { Role: 'user', Timeline: 'clock', Type: 'tag' }

function OverviewSection({ problem, role, timeline, type }) {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="overview">
      <div className="container overview__grid" ref={ref}>
        <div className={`overview__problem reveal ${inView ? 'is-visible' : ''}`}>
          <span className="section-label">The Problem</span>
          <p>{problem}</p>
        </div>

        <div className="overview__stats">
          {[['Role', role], ['Timeline', timeline], ['Type', type]].map(([label, value], i) => (
            <div
              key={label}
              className={`overview__stat reveal ${inView ? 'is-visible' : ''}`}
              style={{
                transitionDelay: `${(i + 1) * 0.1}s`,
                '--card-accent': ACCENT_CYCLE[i % 3],
                '--card-accent-dim': ACCENT_DIM_CYCLE[i % 3],
              }}
            >
              <span className="icon-badge icon-badge--sm">
                <Icon name={STAT_ICONS[label]} />
              </span>
              <div className="overview__stat-text">
                <span className="overview__stat-label">{label}</span>
                <span className="overview__stat-value">{value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection({ steps }) {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="process">
      <div className="container">
        <span className="section-label">Process</span>
        <div ref={ref} className="process__grid">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`process__card reveal ${inView ? 'is-visible' : ''}`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                '--card-accent': ACCENT_CYCLE[i % 3],
                '--card-accent-dim': ACCENT_DIM_CYCLE[i % 3],
              }}
            >
              <span className="icon-badge">
                <Icon name={step.icon} />
              </span>
              <span className="process__number">{step.number}</span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function GallerySection({ screenshots }) {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    if (activeIndex === null) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIndex(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex])

  return (
    <section className="gallery">
      <div className="container">
        <span className="section-label">Screenshots</span>
        <div ref={ref} className="gallery__grid">
          {screenshots.map((shot, i) => (
            <button
              key={shot.src}
              type="button"
              className={`gallery__item reveal ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              onClick={() => setActiveIndex(i)}
              aria-label={`Expand screenshot: ${shot.alt}`}
            >
              <ImageWithFallback src={shot.src} alt={shot.alt} label={shot.alt} />
              <span className="gallery__item-overlay">View to expand</span>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="lightbox" onClick={() => setActiveIndex(null)}>
          <button
            type="button"
            className="lightbox__close"
            aria-label="Close screenshot preview"
            onClick={() => setActiveIndex(null)}
          >
            ×
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={screenshots[activeIndex].src}
              alt={screenshots[activeIndex].alt}
              label={screenshots[activeIndex].alt}
            />
          </div>
        </div>
      )}
    </section>
  )
}

function TechStackSection({ techStack }) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const hasBackend = Boolean(techStack.backend)

  return (
    <section className="tech-stack">
      <div className="container">
        <span className="section-label">Tech Stack</span>
        <div ref={ref} className={`tech-stack__grid ${hasBackend ? '' : 'tech-stack__grid--single'}`}>
          <div
            className={`tech-stack__col reveal ${inView ? 'is-visible' : ''}`}
            style={{ '--card-accent': ACCENT_CYCLE[0], '--card-accent-dim': ACCENT_DIM_CYCLE[0] }}
          >
            <h3 className="tech-stack__heading">
              <span className="icon-badge icon-badge--sm">
                <Icon name="monitor" />
              </span>
              Frontend
            </h3>
            <ul className="tech-list">
              {techStack.frontend.map((item) => (
                <li key={item}><span className="tech-dot" />{item}</li>
              ))}
            </ul>
          </div>

          {hasBackend && (
            <div
              className={`tech-stack__col reveal ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: '0.1s', '--card-accent': ACCENT_CYCLE[1], '--card-accent-dim': ACCENT_DIM_CYCLE[1] }}
            >
              <h3 className="tech-stack__heading">
                <span className="icon-badge icon-badge--sm">
                  <Icon name="server" />
                </span>
                Backend
              </h3>
              <ul className="tech-list">
                {techStack.backend.map((item) => (
                  <li key={item}><span className="tech-dot" />{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function DecisionsSection({ decisions }) {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="decisions">
      <div className="container">
        <span className="section-label">Key Decisions</span>
        <div ref={ref} className="decisions__grid">
          {decisions.map((decision, i) => (
            <div
              key={decision.title}
              className={`decisions__card reveal ${inView ? 'is-visible' : ''}`}
              style={{
                transitionDelay: `${i * 0.1}s`,
                '--card-accent': ACCENT_CYCLE[i % 3],
                '--card-accent-dim': ACCENT_DIM_CYCLE[i % 3],
              }}
            >
              <span className="icon-badge">
                <Icon name={decision.icon} />
              </span>
              <span className="decisions__number">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="decisions__title">{decision.title}</h3>
              <p className="decisions__desc">{decision.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReflectionSection({ paragraphs }) {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="reflection">
      <div className="container">
        <span className="section-label">Reflection</span>
        <div ref={ref} className={`reflection__card reveal ${inView ? 'is-visible' : ''}`}>
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function NextProjectSection({ nextProject }) {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="next-project-section">
      <div className="container">
        <Link
          ref={ref}
          to={`/projects/${nextProject.slug}`}
          className={`next-project reveal ${inView ? 'is-visible' : ''}`}
        >
          <div>
            <span className="next-project__label">Next Project</span>
            <h3 className="next-project__name">{nextProject.name}</h3>
          </div>
          <span className="next-project__arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export default function ProjectPage({
  number,
  name,
  description,
  role,
  timeline,
  type,
  stack,
  heroImage,
  primaryLink,
  secondaryLink,
  problem,
  process,
  screenshots,
  techStack,
  decisions,
  reflection,
  nextProject,
}) {
  useDocumentTitle(`${name} — Danish Saini`)

  return (
    <main className="project-page">
      <div className="container project-page__back-wrap">
        <Link to="/projects" className="project-page__back">← Back to Projects</Link>
      </div>

      <section className="project-hero">
        <div className="container project-hero__grid">
          <div className="project-hero__content">
            <span className="project-hero__number fade-up" style={{ animationDelay: '0s' }}>{number}</span>
            <h1 className="project-hero__name fade-up" style={{ animationDelay: '0.1s' }}>{name}</h1>
            <p className="project-hero__desc fade-up" style={{ animationDelay: '0.2s' }}>{description}</p>
            <div className="project-hero__meta fade-up" style={{ animationDelay: '0.3s' }}>
              <span>{role}</span>
              <span>{timeline}</span>
            </div>
            <div className="project-card__pills fade-up" style={{ animationDelay: '0.4s' }}>
              {stack.map((tech) => (
                <span key={tech} className="pill">{tech}</span>
              ))}
            </div>
            <div className="project-hero__actions fade-up" style={{ animationDelay: '0.5s' }}>
              <a href={primaryLink.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {primaryLink.label}
              </a>
              {secondaryLink && (
                <a href={secondaryLink.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  {secondaryLink.label}
                </a>
              )}
            </div>
          </div>

          <div className="project-hero__image fade-up" style={{ animationDelay: '0.2s' }}>
            <ImageWithFallback src={heroImage} alt={name} label={name} />
          </div>
        </div>
      </section>

      <OverviewSection problem={problem} role={role} timeline={timeline} type={type} />
      <ProcessSection steps={process} />
      <GallerySection screenshots={screenshots} />
      {techStack && <TechStackSection techStack={techStack} />}
      <DecisionsSection decisions={decisions} />
      <ReflectionSection paragraphs={reflection} />
      <NextProjectSection nextProject={nextProject} />
    </main>
  )
}
