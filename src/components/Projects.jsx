import './Projects.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { toWebp } from '../utils/image'

function ProjectVisual({ name, slug }) {
  const [hasImage, setHasImage] = useState(true)

  return (
    <div className="project-visual">
      {hasImage ? (
        <img
          src={toWebp(`/img/projects/${slug}.png`)}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={() => setHasImage(false)}
        />
      ) : (
        <span className="project-visual__fallback">{name}</span>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__stack">
        {PROJECTS.map((project, index) => (
          <div key={project.name} className="project-slot">
            <div className="container">
              <article className="project-card-sticky">
                <div className="project-card-sticky__info">
                  <span className="project-card-sticky__num">0{index + 1}</span>
                  <h3 className="project-card-sticky__title">{project.name}</h3>
                  <p className="project-card-sticky__desc">{project.description}</p>
                  <div className="project-card-sticky__pills">
                    {project.stack.map((tech) => (
                      <span key={tech} className="pill">{tech}</span>
                    ))}
                  </div>
                  <Link to={project.path} className="btn btn-primary">
                    View Case Study
                  </Link>
                </div>
                <ProjectVisual name={project.name} slug={project.slug} />
              </article>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
