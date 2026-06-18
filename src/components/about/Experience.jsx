import useInView from '../../hooks/useInView'
import './Experience.css'

const EXPERIENCE = [
  {
    role: 'Junior Web Developer',
    org: 'GeoSols Consulting',
    location: 'New Delhi',
    period: 'Oct 2021-Feb 2022',
    text: 'Maintained a live WordPress site, resolved plugin conflicts, corrected on-page SEO structure, and collaborated on UI improvements.',
  },
  {
    role: 'International Peer Mentor',
    org: 'Kwantlen Polytechnic University',
    location: 'Surrey, BC',
    period: 'Aug 2023-Aug 2024',
    text: 'Supported 20+ first-semester international students navigating academic systems and cultural adjustment in Canada.',
  },
  {
    role: 'Sales Team Leader',
    org: 'Pure Lifestyle Inc (Rogers Products)',
    location: 'Richmond, BC',
    period: 'Sep-Dec 2024',
    text: 'Promoted to Team Leader within one month. Managed D2D sales team, exceeded weekly targets, 95% customer satisfaction.',
  },
  {
    role: 'Barista',
    org: 'Blenz Coffee',
    location: 'Ladner, BC',
    period: 'Feb 2023-Mar 2025',
    text: 'Served 200+ customers daily. Rebuilt the staff training process, resulting in 20% operational efficiency improvement.',
  },
]

function ExperienceCard({ item, index }) {
  const [ref, inView] = useInView()

  return (
    <article
      ref={ref}
      className={`experience-card reveal ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="experience-card__header">
        <h3 className="experience-card__role">{item.role}</h3>
        <span className="experience-card__period">{item.period}</span>
      </div>
      <p className="experience-card__org">{item.org} / {item.location}</p>
      <p className="experience-card__text">{item.text}</p>
    </article>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="experience__list">
          {EXPERIENCE.map((item, index) => (
            <ExperienceCard key={item.role} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
