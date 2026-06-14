import './Projects.css'
import { useState } from 'react'

const PROJECTS = [
  {
    name: 'LearningZone Redesign',
    slug: 'learningzone-redesign',
    description: "Full stack redesign of DMU's student portal — React, TypeScript, Node.js, JWT auth, SQLite.",
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite'],
    links: [
      { label: 'Behance', href: 'https://www.behance.net/gallery/250928899/LearningZone-Redesign-Project' },
      { label: 'GitHub', href: 'https://github.com/KARNAGE1203/LearningZone-Redesign-Project' },
    ],
  },
  {
    name: 'FindMyTutor',
    slug: 'findmytutor',
    description: 'End-to-end UX case study for a tutor scheduling app — research, wireframes, design system, hi-fi prototype.',
    stack: ['Figma', 'UX Research', 'Design Systems', 'Prototyping'],
    links: [
      { label: 'Behance', href: 'https://www.behance.net/gallery/250146041/FindMyTutor-A-Tutor-Scheduling-App' },
    ],
  },
  {
    name: 'Little Lemon Restaurant',
    slug: 'little-lemon-restaurant',
    description: 'Multi-page React web app — menu, reservations, cart, order tracking. Meta Frontend capstone.',
    stack: ['React', 'JavaScript', 'CSS', 'React Router'],
    links: [
      { label: 'Live', href: 'https://littlelemonrestaurantproj.netlify.app' },
      { label: 'GitHub', href: 'https://github.com/KARNAGE1203/little-lemon-restaurant' },
    ],
  },
]

function ProjectThumb({ name, slug }) {
  const [hasImage, setHasImage] = useState(true)

  return (
    <div className="project-card__thumb">
      {hasImage ? (
        <img
          src={`/img/projects/${slug}.png`}
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

              <div className="project-card__links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    View Project ({link.label}) →
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
