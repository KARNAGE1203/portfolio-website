import { useState } from 'react'
import './Skills.css'

// ── Geometry ────────────────────────────────────────────
const CX    = 260
const CY    = 260
const R_IN  = 66   // inner hole
const R_OUT = 196  // outer edge
const R_ICO = 136  // icon centre
const GAP   = 2.8  // degrees of gap on each side of each segment

// ── Skills ──────────────────────────────────────────────
// First 5 = dev (purple, right side). Last 5 = design (teal, left side).
const SKILLS = [
  { id: 'react',    label: 'React',        sub: 'v18 · hooks',      cat: 'v' },
  { id: 'ts',       label: 'TypeScript',   sub: 'strict mode',      cat: 'v' },
  { id: 'node',     label: 'Node.js',      sub: 'express APIs',     cat: 'v' },
  { id: 'html',     label: 'HTML + CSS',   sub: 'semantic markup',  cat: 'v' },
  { id: 'git',      label: 'Git',          sub: 'version control',  cat: 'v' },
  { id: 'figma',    label: 'Figma',        sub: 'interface design', cat: 'd' },
  { id: 'systems',  label: 'Design Sys.',  sub: 'scalable tokens',  cat: 'd' },
  { id: 'research', label: 'UX Research',  sub: 'user testing',     cat: 'd' },
  { id: 'wire',     label: 'Wireframing',  sub: 'lo-fi to hi-fi',   cat: 'd' },
  { id: 'proto',    label: 'Prototyping',  sub: 'clickable flows',  cat: 'd' },
]

const N   = SKILLS.length  // 10
const ARC = 360 / N        // 36° each

function toRad(deg) {
  return ((deg - 90) * Math.PI) / 180
}

function arcPath(i) {
  const s  = toRad(i * ARC + GAP)
  const e  = toRad((i + 1) * ARC - GAP)
  const c  = (r, a) => `${CX + r * Math.cos(a)} ${CY + r * Math.sin(a)}`
  return [
    `M ${c(R_IN, s)}`,
    `L ${c(R_OUT, s)}`,
    `A ${R_OUT} ${R_OUT} 0 0 1 ${c(R_OUT, e)}`,
    `L ${c(R_IN, e)}`,
    `A ${R_IN} ${R_IN} 0 0 0 ${c(R_IN, s)}`,
    'Z',
  ].join(' ')
}

function iconXY(i) {
  const mid  = toRad((i + 0.5) * ARC)
  return {
    x:     CX + R_ICO * Math.cos(mid),
    y:     CY + R_ICO * Math.sin(mid),
    pushX: Math.cos(mid) * 10,
    pushY: Math.sin(mid) * 10,
  }
}

// ── Inline SVG icons (centred at 0,0, ~22px bbox) ───────
const ICONS = {
  react: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <ellipse rx="10" ry="3.8" />
      <ellipse rx="10" ry="3.8" transform="rotate(60)" />
      <ellipse rx="10" ry="3.8" transform="rotate(120)" />
      <circle r="2.2" fill="currentColor" stroke="none" />
    </g>
  ),
  ts: (
    <text textAnchor="middle" dominantBaseline="central" fill="currentColor"
      fontSize="15" fontFamily="monospace" fontWeight="700">TS</text>
  ),
  node: (
    <polygon points="0,-11 9.5,5.5 -9.5,5.5"
      fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  ),
  html: (
    <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="-8,-7 -12,0 -8,7" />
      <polyline points="8,-7 12,0 8,7" />
    </g>
  ),
  git: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <circle cx="0"  cy="-8" r="2.5" />
      <circle cx="-7" cy="7"  r="2.5" />
      <circle cx="7"  cy="7"  r="2.5" />
      <line x1="0"  y1="-5.5" x2="0"  y2="1"  />
      <line x1="0"  y1="1"    x2="-5" y2="5"  />
      <line x1="0"  y1="1"    x2="5"  y2="5"  />
    </g>
  ),
  figma: (
    <g stroke="currentColor" strokeWidth="1.3" fill="none">
      <circle cx="-3.5" cy="-7"  r="3.5" />
      <circle cx="3.5"  cy="-7"  r="3.5" />
      <circle cx="-3.5" cy="0"   r="3.5" />
      <circle cx="3.5"  cy="0"   r="3.5" />
      <circle cx="-3.5" cy="7"   r="3.5" />
    </g>
  ),
  systems: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none">
      <rect x="-9" y="-9" width="7" height="7" rx="1" />
      <rect x="2"  y="-9" width="7" height="7" rx="1" />
      <rect x="-9" y="2"  width="7" height="7" rx="1" />
      <rect x="2"  y="2"  width="7" height="7" rx="1" />
    </g>
  ),
  research: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <circle cx="-2" cy="-2" r="7" />
      <line x1="3.5" y1="3.5" x2="10" y2="10" />
    </g>
  ),
  wire: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <rect x="-10" y="-7" width="20" height="14" rx="1.5" />
      <line x1="-6" y1="-2" x2="6" y2="-2" />
      <line x1="-6" y1="2"  x2="6" y2="2"  />
    </g>
  ),
  proto: (
    <g stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round">
      <rect x="-7" y="-11" width="14" height="22" rx="2.5" />
      <circle cx="0" cy="8" r="1.5" />
      <line x1="-2" y1="-9" x2="2" y2="-9" />
    </g>
  ),
}

// ── Component ────────────────────────────────────────────
export default function Skills() {
  const [hovered, setHovered] = useState(null)
  const active = hovered !== null ? SKILLS[hovered] : null

  return (
    <section id="skills" className="skills" aria-label="Skills">
      <div className="container">
        <h2 className="skills__heading">The toolkit.</h2>

        <div className="skills__wheel-wrap">
          <svg
            className={`wheel${hovered !== null ? ' wheel--hovering' : ''}`}
            viewBox="0 0 520 520"
            role="img"
            aria-label="Skills wheel — hover a segment to explore"
          >
            {/* Outer dashed ring */}
            <circle cx={CX} cy={CY} r={R_OUT + 14} className="wheel__ring" />

            {/* Segments */}
            {SKILLS.map((skill, i) => {
              const { x, y, pushX, pushY } = iconXY(i)
              const isActive = hovered === i
              const color = skill.cat === 'v'
                ? 'rgba(108,99,255,1)'
                : 'rgba(45,212,191,1)'

              return (
                <g
                  key={skill.id}
                  className={`wheel__seg wheel__seg--${skill.cat}${isActive ? ' wheel__seg--active' : ''}`}
                  style={{
                    '--push-x': `${pushX}px`,
                    '--push-y': `${pushY}px`,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${skill.label}: ${skill.sub}`}
                >
                  <path className="wheel__seg-path" d={arcPath(i)} />
                  <g
                    className="wheel__seg-icon"
                    transform={`translate(${x}, ${y})`}
                    color={color}
                  >
                    {ICONS[skill.id]}
                  </g>
                </g>
              )
            })}

            {/* Centre hub */}
            <circle cx={CX} cy={CY} r={R_IN - 6} className="wheel__hub" />

            {/* Centre label — default */}
            <g className={`wheel__center-default${active ? ' is-hidden' : ''}`}>
              <text x={CX} y={CY - 7}  className="wheel__center-word">The</text>
              <text x={CX} y={CY + 14} className="wheel__center-word wheel__center-word--accent">
                Toolkit.
              </text>
            </g>

            {/* Centre label — hovered */}
            <g className={`wheel__center-active${active ? ' is-shown' : ''}`}>
              <text x={CX} y={CY - 8}  className="wheel__center-skill">
                {active?.label ?? ''}
              </text>
              <text x={CX} y={CY + 10} className="wheel__center-desc">
                {active?.sub ?? ''}
              </text>
            </g>
          </svg>

          {/* Screen reader list */}
          <ul className="sr-only">
            {SKILLS.map(s => <li key={s.id}>{s.label}: {s.sub}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
