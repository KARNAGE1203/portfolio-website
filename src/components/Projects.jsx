import './Projects.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { toWebp } from '../utils/image'

function ProjectThumb({ name, slug }) {
  const [hasImage, setHasImage] = useState(true)

  return (
    <div className="project-card__thumb">
      {hasImage ? (
        <img
          src={toWebp(`/img/projects/${slug}.png`)}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={() => setHasImage(false)}
        />
      ) : (
        <span>{name}</span>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-label">Selected Work</span>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article key={project.name} className="project-card">
              <ProjectThumb name={project.name} slug={project.slug} />

              <h3 className="project-card__title">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__pills">
                {project.stack.map((tech) => (
                  <span key={tech} className="pill">{tech}</span>
                ))}
              </div>

              <Link to={project.path} className="btn btn-primary project-card__cta">
                View Case Study
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
