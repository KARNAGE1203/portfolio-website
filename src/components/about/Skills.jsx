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

const DesignIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 21l3-1 11-11 1-3L14 3 3 14v7z" fill="currentColor" />
  </svg>
)

const DevIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 7L3 12l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 7l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__rows">
        {COLUMNS.map((column, i) => {
          const Icon = i === 0 ? DesignIcon : DevIcon
          const doubled = [...column.tags, ...column.tags]
          return (
            <div
              key={column.heading}
              className={`skills__row${i % 2 ? ' skills__row--reverse' : ''}`}
            >
              <span className="skills__row-label" aria-hidden="true">
                {column.heading}
              </span>
              <div
                className="skills__marquee"
                aria-label={`${column.heading}: ${column.tags.join(', ')}`}
              >
                <div className="skills__marquee-track">
                  {doubled.map((tag, j) => (
                    <span key={j} className="skills__tag">
                      <span className="skills__tag-icon">
                        <Icon />
                      </span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
