import './Skills.css'
import useInView from '../../hooks/useInView'

const DESIGN = [
  { pkg: 'figma',              note: 'interface design'      },
  { pkg: 'ux-research',        note: 'user-centered process' },
  { pkg: 'wireframing',        note: 'lo-fi to hi-fi'        },
  { pkg: 'prototyping',        note: 'clickable flows'       },
  { pkg: 'design-systems',     note: 'scalable components'   },
  { pkg: 'usability-testing',  note: 'moderated sessions'    },
  { pkg: 'visual-hierarchy',   note: 'layout & composition'  },
  { pkg: 'info-architecture',  note: 'sitemaps & flows'      },
]

const DEV = [
  { pkg: 'react',              note: 'v18 · hooks + context' },
  { pkg: 'typescript',         note: 'strict mode'           },
  { pkg: 'javascript',         note: 'es2024'                },
  { pkg: 'node.js + express',  note: 'rest apis'             },
  { pkg: 'html5 + css3',       note: 'semantic, responsive'  },
  { pkg: 'vite',               note: 'sub-second builds'     },
  { pkg: 'sqlite',             note: 'relational data'       },
  { pkg: 'git',                note: 'version control'       },
  { pkg: 'wordpress',          note: 'cms & plugins'         },
]

function Panel({ cmd, items, color, showCursor, visible, baseDelay, footerNote }) {
  return (
    <div className={`skill-panel skill-panel--${color}`}>
      <div className="skill-panel__chrome" aria-hidden="true">
        <span className="skill-panel__dot" />
        <span className="skill-panel__dot" />
        <span className="skill-panel__dot" />
        <span className="skill-panel__cmd-inline">{cmd}</span>
      </div>

      <ul className="skill-panel__list" role="list">
        {items.map((item, i) => (
          <li
            key={item.pkg}
            className={`skill-panel__row${visible ? ' is-visible' : ''}`}
            style={{ transitionDelay: `${baseDelay + i * 0.06}s` }}
          >
            <span className="skill-panel__check" aria-hidden="true">✓</span>
            <span className="skill-panel__pkg">{item.pkg}</span>
            <span className="skill-panel__note">{item.note}</span>
          </li>
        ))}
      </ul>

      <div
        className={`skill-panel__footer${visible ? ' is-visible' : ''}`}
        style={{ transitionDelay: `${baseDelay + items.length * 0.06 + 0.08}s` }}
      >
        <span className="skill-panel__footer-note">{footerNote}</span>
        {showCursor && <span className="skill-panel__cursor" aria-hidden="true" />}
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.08 })

  return (
    <section id="skills" className="skills" aria-label="Skills" ref={ref}>
      <div className="container">
        <h2 className="skills__heading">The toolkit.</h2>
        <div className="skills__grid">
          <Panel
            cmd="install design-toolkit"
            items={DESIGN}
            color="d"
            footerNote="// Figma open. Always."
            showCursor={false}
            visible={inView}
            baseDelay={0}
          />
          <Panel
            cmd="install dev-stack"
            items={DEV}
            color="v"
            footerNote="// npm install hope"
            showCursor={true}
            visible={inView}
            baseDelay={0.2}
          />
        </div>
      </div>
    </section>
  )
}
