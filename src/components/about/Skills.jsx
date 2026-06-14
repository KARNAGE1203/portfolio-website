import useInView from '../../hooks/useInView'
import './Skills.css'

const COLUMNS = [
  {
    heading: 'Design',
    tags: [
      'Figma',
      'UX Research',
      'Wireframing',
      'Prototyping',
      'Information Architecture',
      'Design Systems',
      'Visual Hierarchy',
      'Usability Testing',
      'Mobile-First Design',
    ],
  },
  {
    heading: 'Development',
    tags: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Node.js',
      'Express',
      'SQLite',
      'WordPress',
      'Git',
      'Vite',
    ],
  },
]

function SkillColumn({ column, groupIndex }) {
  const [ref, inView] = useInView()

  return (
    <div className="skills__column">
      <h3 className="skills__heading">{column.heading}</h3>
      <div ref={ref} className="skills__tags">
        {column.tags.map((tag, i) => (
          <span
            key={tag}
            className={`tag reveal ${inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${(groupIndex * column.tags.length + i) * 0.05}s` }}
          >
            <span className="tag__icon" aria-hidden>
              {column.heading === 'Design' ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21l3-1 11-11 1-3L14 3 3 14v7z" fill="currentColor" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7L3 12l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-label">What I work with</span>
        <div className="skills__grid">
          {COLUMNS.map((column, i) => (
            <SkillColumn key={column.heading} column={column} groupIndex={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
