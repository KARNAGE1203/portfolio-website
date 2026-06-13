import useInView from '../../hooks/useInView'
import './Cards.css'

const EDUCATION = [
  {
    degree: 'BSc Computer Science (Hons)',
    org: 'De Montfort University Dubai',
    period: 'Sep 2025-Present',
    details: ['GPA: 3.8', 'Deputy Class Representative'],
  },
  {
    degree: 'Diploma in Computer Information Systems',
    org: 'Kwantlen Polytechnic University',
    period: 'May 2022-Aug 2024',
    details: ['KPU IT Club', 'Two-time Peer Mentorship Award winner'],
  },
]

function InfoCard({ item, index }) {
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
      <ul className="info-card__details">
        {item.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </article>
  )
}

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <span className="section-label">Education</span>
        <div className="info-grid">
          {EDUCATION.map((item, index) => (
            <InfoCard key={item.degree} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
