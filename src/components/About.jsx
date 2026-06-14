import './About.css'

const SKILLS = [
  'Figma',
  'React',
  'TypeScript',
  'Node.js',
  'WordPress',
  'UX Research',
  'HTML/CSS',
  'Git',
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="section-label">About</span>
        <h2 className="about__heading">Designer by instinct. Developer by choice.</h2>
        <p className="about__text">
          I'm a 23-year-old Computer Science student at De Montfort University Dubai. I've lived
          and worked across India, Canada, and the UAE — each place teaching me something the
          last one couldn't. I build things because I find it genuinely satisfying to take
          something broken and make it work. I write books for the same reason.
        </p>

        <div className="about__skills">
          {SKILLS.map((skill) => (
            <span key={skill} className="pill">{skill}</span>
          ))}
        </div>
        <div className="about__tool-logos" aria-label="Tools I use">
          <img src="/img/logos/figma.svg" alt="Figma" className="about__logo" loading="lazy" width="48" height="48" />
          <img src="/img/logos/react.svg" alt="React" className="about__logo" loading="lazy" width="48" height="48" />
          <img src="/img/logos/nodejs.svg" alt="Node.js" className="about__logo" loading="lazy" width="48" height="48" />
        </div>
      </div>
    </section>
  )
}
