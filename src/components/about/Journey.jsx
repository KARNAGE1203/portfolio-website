import useInView from '../../hooks/useInView'
import './Journey.css'

const NODES = [
  {
    location: 'Delhi, India',
    period: '2003-2022',
    text: 'Where it started. School topper, competitive student, and the kid who convinced his father to send him to Canada with three suitcases and a plan.',
  },
  {
    location: 'Surrey, Canada',
    period: '2022-2024',
    text: 'Three years of survival jobs, a Computer Information Systems diploma from KPU, a broken immigration dream, and the most formative chapter of my life. I came back different.',
  },
  {
    location: 'Dubai, UAE',
    period: '2024-Present',
    text: "A fresh start in a city that rewards ambition. BSc Computer Science at DMU Dubai, three deployed projects, a published memoir, and a career that's just beginning.",
  },
  {
    location: "What's Next",
    period: '2026',
    text: 'Full-time in my field. Building products that matter. Still writing.',
    current: true,
  },
]

function JourneyItem({ node, index }) {
  const [ref, inView] = useInView()
  const side = index % 2 === 0 ? 'left' : 'right'

  return (
    <div
      ref={ref}
      className={`journey__item journey__item--${side} ${node.current ? 'journey__item--current' : ''} reveal ${inView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="journey__card">
        <span className="journey__period">{node.period}</span>
        <h3 className="journey__location">{node.location}</h3>
        <p className="journey__text">{node.text}</p>
      </div>
      <div className="journey__dot" />
    </div>
  )
}

export default function Journey() {
  const [lineRef, lineInView] = useInView({ threshold: 0.1 })

  return (
    <section id="journey" className="journey">
      <div className="container">
        <h2 className="journey__heading">Three countries. One direction.</h2>

        <div ref={lineRef} className={`journey__timeline ${lineInView ? 'is-visible' : ''}`}>
          {NODES.map((node, index) => (
            <JourneyItem key={node.location} node={node} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
