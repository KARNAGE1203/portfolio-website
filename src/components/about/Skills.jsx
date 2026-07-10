import { useState } from 'react'
import './Skills.css'

// ── Geometry ────────────────────────────────────────────
// Scaled up overall size, but kept petals thinner (smaller radial thickness)
const CX    = 325
const CY    = 325
const R_OUT = 245  // outer edge (bigger overall)
const THICK = 100   // radial thickness of the petals (increased for mobile visibility)
const R_IN  = R_OUT - THICK // inner hole (thicker petals)
// icons sit on the petal's radial midline, centred in each segment
const R_ICO = Math.round(R_OUT - THICK * 0.5)  // icon centre
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
    pushX: Math.cos(mid) * 12,
    pushY: Math.sin(mid) * 12,
  }
}

// ── Inline SVG icons (centred at 0,0, ~26px bbox) ───────
const ICONS = {
  react: (
    <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <ellipse rx="12" ry="4.6" />
      <ellipse rx="12" ry="4.6" transform="rotate(60)" />
      <ellipse rx="12" ry="4.6" transform="rotate(120)" />
      <circle r="2.6" fill="currentColor" stroke="none" />
    </g>
  ),
  ts: (
    <text textAnchor="middle" dominantBaseline="central" fill="currentColor"
      fontSize="18" fontFamily="monospace" fontWeight="700">TS</text>
  ),
  node: (
    <polygon points="0,-13 11.5,6.5 -11.5,6.5"
      fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  ),
  html: (
    <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="-9.5,-8.5 -14,0 -9.5,8.5" />
      <polyline points="9.5,-8.5 14,0 9.5,8.5" />
    </g>
  ),
  git: (
    <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <circle cx="0"  cy="-9.5" r="3" />
      <circle cx="-8.5" cy="8.5"  r="3" />
      <circle cx="8.5"  cy="8.5"  r="3" />
      <line x1="0"  y1="-6.5" x2="0"  y2="1.5" />
      <line x1="0"  y1="1.5"  x2="-6.5" y2="6" />
      <line x1="0"  y1="1.5"  x2="6.5"  y2="6" />
    </g>
  ),
  figma: (
    <g stroke="currentColor" strokeWidth="1.5" fill="none">
      <circle cx="-4.2" cy="-8.4" r="4.2" />
      <circle cx="4.2"  cy="-8.4" r="4.2" />
      <circle cx="-4.2" cy="0"    r="4.2" />
      <circle cx="4.2"  cy="0"    r="4.2" />
      <circle cx="-4.2" cy="8.4"  r="4.2" />
    </g>
  ),
  systems: (
    <g stroke="currentColor" strokeWidth="1.6" fill="none">
      <rect x="-11" y="-11" width="9" height="9" rx="1.3" />
      <rect x="2"   y="-11" width="9" height="9" rx="1.3" />
      <rect x="-11" y="2"   width="9" height="9" rx="1.3" />
      <rect x="2"   y="2"   width="9" height="9" rx="1.3" />
    </g>
  ),
  research: (
    <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <circle cx="-2.5" cy="-2.5" r="8" />
      <line x1="4" y1="4" x2="12" y2="12" />
    </g>
  ),
  wire: (
    <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <rect x="-12" y="-8.5" width="24" height="17" rx="2" />
      <line x1="-7.5" y1="-2.5" x2="7.5" y2="-2.5" />
      <line x1="-7.5" y1="2.5"  x2="7.5" y2="2.5"  />
    </g>
  ),
  proto: (
    <g stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round">
      <rect x="-8" y="-13" width="16" height="26" rx="3" />
      <circle cx="0" cy="9.5" r="1.7" />
      <line x1="-2.4" y1="-10.5" x2="2.4" y2="-10.5" />
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
        <h2 className="skills__heading">Tools I use...</h2>

        <div className="skills__wheel-wrap">
          <div className="wheel-frame">
            <svg
              className={`wheel${hovered !== null ? ' wheel--hovering' : ''}`}
              viewBox="0 0 650 650"
              aria-hidden="true"
            >
              {/* Outer dashed ring */}
              <circle cx={CX} cy={CY} r={R_OUT + 14} className="wheel__ring" />

              {/* ── Visual layer: segment + icon move together ── */}
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
                  >
                    <path className="wheel__seg-path" d={arcPath(i)} />
                    {/* Outer g: the SVG attribute transform positions the icon.
                        Inner g: CSS-only effects (opacity/scale) live here so a
                        CSS transform can never wipe out the positioning. */}
                    <g transform={`translate(${x} ${y})`} style={{ color }}>
                      <g className="wheel__icon">{ICONS[skill.id]}</g>
                    </g>
                  </g>
                )
              })}

              {/* Centre hub (reduced by 20% for better icon visibility) */}
              <circle cx={CX} cy={CY} r={Math.round((R_IN + 8) * 0.8)} className="wheel__hub" />

              {/* ── Hit layer: static invisible copies of each segment.
                    They never move, so hover can't jitter or flicker. ── */}
              {SKILLS.map((skill, i) => (
                <path
                  key={`hit-${skill.id}`}
                  className="wheel__hit"
                  d={arcPath(i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setHovered(hovered === i ? null : i)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${skill.label}: ${skill.sub}`}
                />
              ))}
            </svg>

            {/* HTML centre label — real pixel type, doesn't shrink with the SVG */}
            <div className="wheel__center" aria-hidden="true">
              <div className={`wheel__center-default${active ? ' is-hidden' : ''}`}>
                <span className="wheel__center-title">The</span>
                <span className="wheel__center-title wheel__center-title--accent">Toolkit.</span>
              </div>
              <div className={`wheel__center-active${active ? ' is-shown' : ''}`}>
                <span className="wheel__center-skill">{active?.label ?? ''}</span>
                <span className="wheel__center-desc">{active?.sub ?? ''}</span>
              </div>
            </div>
          </div>

          {/* Screen reader list */}
          <ul className="sr-only">
            {SKILLS.map(s => <li key={s.id}>{s.label}: {s.sub}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
