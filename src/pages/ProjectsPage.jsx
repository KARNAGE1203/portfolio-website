import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import useDocumentTitle from '../hooks/useDocumentTitle'
import ImageWithFallback from '../components/ImageWithFallback'
import FramesBackground from '../components/FramesBackground'
import { PROJECTS_LIST } from '../data/projectsList'
import './ProjectsPage.css'

function ProjectRow({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const imageOnLeft = index % 2 === 0

  return (
    <article
      ref={ref}
      className={`project-row ${imageOnLeft ? 'project-row--image-left' : 'project-row--image-right'} ${inView ? 'is-visible' : ''}`}
    >
      <div className="project-row__image">
        <ImageWithFallback src={project.image} alt={project.name} label={project.name} />
      </div>

      <div className="project-row__content">
        <span className="project-row__number">{project.number}</span>
        <h2 className="project-row__name">{project.name}</h2>
        <p className="project-row__desc">{project.description}</p>
        <span className="project-row__role">{project.role}</span>

        <div className="project-card__pills">
          {project.stack.map((tech) => (
            <span key={tech} className="pill">{tech}</span>
          ))}
        </div>

        <Link to={`/projects/${project.slug}`} className="btn btn-primary project-row__cta">
          View Project
        </Link>
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  useDocumentTitle('Projects — Danish Saini')

  return (
    <main>
      <section className="projects-hero">
        <FramesBackground />
        <div className="container">
          <span className="section-label fade-up" style={{ animationDelay: '0s' }}>Selected Work</span>
          <h1 className="projects-hero__heading fade-up" style={{ animationDelay: '0.15s' }}>Three projects.</h1>
          <p className="projects-hero__subtext fade-up" style={{ animationDelay: '0.3s' }}>End to end. Research to deployment.</p>
        </div>
      </section>

      <section className="projects-list">
        {PROJECTS_LIST.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </section>

      <section className="projects-closing">
        <div className="container">
          <p>
            More work on{' '}
            <a href="https://www.behance.net/danishsaini" target="_blank" rel="noopener noreferrer">Behance</a>
            {' '}and{' '}
            <a href="https://github.com/KARNAGE1203" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </section>
    </main>
  )
}
