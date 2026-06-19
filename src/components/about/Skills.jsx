import './Skills.css'
import useInView from '../../hooks/useInView'

const SKILLS = [
  // ── Design ────────────────────────────────────────────────
  { text: 'Figma',                    cat: 'd', l: '3%',  t: '7%',  fw: 600, tier: 'l1', an: 'fc', dur: '6.4s',  dl: '0s'   },
  { text: 'UX Research',              cat: 'd', l: '20%', t: '33%', fw: 500, tier: 'l2', an: 'fa', dur: '8.2s',  dl: '.9s'  },
  { text: 'Wireframing',              cat: 'd', l: '2%',  t: '54%', fw: 400, tier: 'l2', an: 'fb', dur: '7.4s',  dl: '2.1s' },
  { text: 'Prototyping',              cat: 'd', l: '33%', t: '18%', fw: 400, tier: 'l2', an: 'fa', dur: '9s',    dl: '.4s'  },
  { text: 'Information Architecture', cat: 'd', l: '5%',  t: '74%', fw: 400, tier: 'l3', an: 'fb', dur: '10s',   dl: '1.6s' },
  { text: 'Design Systems',           cat: 'd', l: '38%', t: '55%', fw: 400, tier: 'l3', an: 'fa', dur: '7.8s',  dl: '3s'   },
  { text: 'Usability Testing',        cat: 'd', l: '12%', t: '44%', fw: 400, tier: 'l3', an: 'fb', dur: '8.6s',  dl: '1.2s' },
  { text: 'Visual Hierarchy',         cat: 'd', l: '42%', t: '72%', fw: 400, tier: 'l4', an: 'fc', dur: '11s',   dl: '2.4s' },
  { text: 'Mobile-First Design',      cat: 'd', l: '18%', t: '87%', fw: 400, tier: 'l4', an: 'fa', dur: '9.5s',  dl: '.7s'  },
  // ── Development ───────────────────────────────────────────
  { text: 'React',                    cat: 'v', l: '72%', t: '8%',  fw: 600, tier: 'l1', an: 'fc', dur: '5.8s',  dl: '.6s'  },
  { text: 'TypeScript',               cat: 'v', l: '56%', t: '27%', fw: 500, tier: 'l1', an: 'fa', dur: '7.6s',  dl: '1.4s' },
  { text: 'JavaScript',               cat: 'v', l: '44%', t: '47%', fw: 500, tier: 'l2', an: 'fb', dur: '8.8s',  dl: '0s'   },
  { text: 'Node.js',                  cat: 'v', l: '70%', t: '60%', fw: 400, tier: 'l2', an: 'fa', dur: '9.2s',  dl: '2.2s' },
  { text: 'Express',                  cat: 'v', l: '60%', t: '15%', fw: 400, tier: 'l2', an: 'fc', dur: '10.4s', dl: '1.8s' },
  { text: 'HTML5',                    cat: 'v', l: '82%', t: '38%', fw: 400, tier: 'l2', an: 'fb', dur: '8s',    dl: '.3s'  },
  { text: 'CSS3',                     cat: 'v', l: '50%', t: '65%', fw: 400, tier: 'l3', an: 'fa', dur: '11s',   dl: '2.8s' },
  { text: 'WordPress',                cat: 'v', l: '65%', t: '78%', fw: 400, tier: 'l3', an: 'fb', dur: '9.8s',  dl: '1s'   },
  { text: 'SQLite',                   cat: 'v', l: '78%', t: '83%', fw: 400, tier: 'l4', an: 'fc', dur: '8.4s',  dl: '3.2s' },
  { text: 'Git',                      cat: 'v', l: '58%', t: '88%', fw: 400, tier: 'l3', an: 'fa', dur: '7.2s',  dl: '1.5s' },
  { text: 'Vite',                     cat: 'v', l: '85%', t: '22%', fw: 400, tier: 'l3', an: 'fb', dur: '10.8s', dl: '.8s'  },
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section
      id="skills"
      ref={ref}
      className={`skills${inView ? ' skills--visible' : ''}`}
      aria-label="Skills"
    >
      {/* Watermark */}
      <div className="skills__watermark" aria-hidden="true">My Skills</div>

      {/* Desktop: scatter */}
      <div className="skills__scatter" aria-hidden="true">
        {SKILLS.map(({ text, cat, l, t, fw, tier, an, dur, dl }, i) => (
          <span
            key={text}
            className="skills__enter"
            style={{
              left: l,
              top: t,
              '--stagger': `${i * 0.045}s`,
            }}
          >
            <span
              className="skills__float"
              style={{
                fontWeight: fw,
                animationName: an,
                animationDuration: dur,
                animationDelay: dl,
              }}
            >
              <span className={`skills__word skills__word--${cat} skills__word--${tier}`}>
                {text}
              </span>
            </span>
          </span>
        ))}
      </div>

      {/* Mobile: two grouped lists */}
      <div className="skills__mobile">
        <div className="container">
          <div className="skills__mobile-group">
            <p className="skills__mobile-label skills__mobile-label--d">Design</p>
            <div className="skills__mobile-tags">
              {SKILLS.filter(s => s.cat === 'd').map(s => (
                <span key={s.text} className="skills__mobile-tag skills__mobile-tag--d">{s.text}</span>
              ))}
            </div>
          </div>
          <div className="skills__mobile-group">
            <p className="skills__mobile-label skills__mobile-label--v">Development</p>
            <div className="skills__mobile-tags">
              {SKILLS.filter(s => s.cat === 'v').map(s => (
                <span key={s.text} className="skills__mobile-tag skills__mobile-tag--v">{s.text}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
