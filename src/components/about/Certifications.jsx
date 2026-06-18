import useInView from '../../hooks/useInView'
import './Cards.css'

const CERTIFICATIONS = [
  {
    degree: 'Meta Frontend Development Professional Certificate',
    org: '2025',
    period: 'React, JavaScript, HTML/CSS, Version Control',
    details: [],
  },
  {
    degree: 'Google UX Design Certificate',
    org: '2025',
    period: 'Wireframing, Prototyping, User Research, Usability Testing',
    details: [],
  },
]

function CertificationCard({ item, index }) {
  const [ref, inView] = useInView()

  return (
    <article
      ref={ref}
      className={`info-card reveal ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <h3 className="info-card__title">{item.degree}</h3>
      <p className="info-card__org">{item.org}</p>
      <span className="info-card__period">{item.period}</span>
    </article>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="info-grid">
          {CERTIFICATIONS.map((item, index) => (
            <CertificationCard key={item.degree} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
