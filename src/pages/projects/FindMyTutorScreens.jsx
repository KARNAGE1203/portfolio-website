import { useState, useEffect } from 'react'
import useInView from '../../hooks/useInView'
import './FindMyTutorScreens.css'

const FIGMA_URL = 'https://www.figma.com/design/c1LQn9C78mxJXqc2XBqSWB/Tutor-Scheduling-App?node-id=87-384&t=olTOrF0TxfQ1ewq3-1'
const BASE = '/img/FindMyTutor Screenshots'

const LOFI  = [1,2,3,4,5,6].map(n => ({ src: `${BASE}/Lofi (${n}).webp`,  alt: `Lo-fi wireframe ${n}` }))
const HIFI  = [1,2,3,4].map(n =>   ({ src: `${BASE}/Hifi (${n}).webp`,  alt: `Hi-fi screen ${n}` }))
const DS    = [{ src: `${BASE}/Design System.webp`, alt: 'Design system — components and tokens' }]

// ── Phone frame with internal crossfade slideshow ─────────────────────
function PhoneSlideshow({ frames, caption }) {
  const [active, setActive] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [paused,  setPaused]  = useState(false)

  const prev = () => setActive(i => (i - 1 + frames.length) % frames.length)
  const next = () => setActive(i => (i + 1) % frames.length)

  useEffect(() => {
    if (!playing || paused) return
    const t = setInterval(() => setActive(i => (i + 1) % frames.length), 2500)
    return () => clearInterval(t)
  }, [playing, paused, frames.length])

  return (
    <div className="pf-show">
      <div className="pf-show__header">
        <button
          className={`pf-toggle${playing ? ' pf-toggle--playing' : ''}`}
          onClick={() => setPlaying(p => !p)}
          aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
        >
          {playing ? (
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>

      <div
        className="pf-show__frame-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pf">
          <div className="pf__notch" aria-hidden="true" />
          <div className="pf__screen">
            {frames.map((frame, i) => (
              <img
                key={i}
                src={frame.src}
                alt={frame.alt}
                className={`pf__slide${i === active ? ' pf__slide--active' : ''}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            ))}
            <button className="pf__chevron pf__chevron--prev" onClick={prev} aria-label="Previous screen">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="pf__chevron pf__chevron--next" onClick={next} aria-label="Next screen">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="pf__indicator" aria-hidden="true" />
        </div>
      </div>

      <div className="pf-show__dots" role="tablist" aria-label="Screen navigation">
        {frames.map((f, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`View screen ${i + 1}`}
            className={`pf-show__dot${i === active ? ' pf-show__dot--active' : ''}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>

      {caption && <p className="pf-caption">{caption}</p>}
    </div>
  )
}

// ── Design system grid ────────────────────────────────────────────────
function DSGrid({ images }) {
  const [expanded, setExpanded] = useState(null)

  useEffect(() => {
    if (expanded === null) return
    const onKey = (e) => { if (e.key === 'Escape') setExpanded(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expanded])

  return (
    <>
      <div className={`ds-grid${images.length === 1 ? ' ds-grid--single' : ''}`}>
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            className="ds-grid__item"
            onClick={() => setExpanded(i)}
            aria-label={`Expand: ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            <span className="ds-grid__overlay">View full size</span>
          </button>
        ))}
      </div>
      {expanded !== null && (
        <div className="lightbox" onClick={() => setExpanded(null)}>
          <button type="button" className="lightbox__close" aria-label="Close" onClick={() => setExpanded(null)}>×</button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={images[expanded].src} alt={images[expanded].alt} />
          </div>
        </div>
      )}
    </>
  )
}

// ── Main ──────────────────────────────────────────────────────────────
export default function FindMyTutorScreens() {
  const [ref1, inView1] = useInView({ threshold: 0.1 })
  const [ref2, inView2] = useInView({ threshold: 0.1 })
  const [ref3, inView3] = useInView({ threshold: 0.1 })

  return (
    <div className="fmt-screens">

      {/* 01 — Lo-Fi Wireframes */}
      <section ref={ref1} className={`fmt-section reveal ${inView1 ? 'is-visible' : ''}`}>
        <div className="container">
          <span className="fmt-eyebrow">01 — Lo-Fi</span>
          <h2 className="section-title">Wireframes</h2>
          <p className="fmt-subtext">
            Information architecture and navigation logic established before any visual decisions were made.
          </p>
          <PhoneSlideshow
            frames={LOFI}
            caption="6 screens mapped in lo-fi before moving to design system"
          />
        </div>
      </section>

      {/* 02 — Design System */}
      <section ref={ref2} className={`fmt-section reveal ${inView2 ? 'is-visible' : ''}`}>
        <div className="container">
          <span className="fmt-eyebrow">02 — Foundations</span>
          <h2 className="section-title">Design System</h2>
          <p className="fmt-subtext">
            Type scale, colour tokens, spacing units, and component library defined before any hi-fi screen was produced.
          </p>
          <DSGrid images={DS} />
        </div>
      </section>

      {/* 03 — Hi-Fi Prototype */}
      <section ref={ref3} className={`fmt-section reveal ${inView3 ? 'is-visible' : ''}`}>
        <div className="container">
          <span className="fmt-eyebrow">03 — Final Design</span>
          <h2 className="section-title">Hi-Fi Screens</h2>
          <p className="fmt-subtext">
            Five-screen clickable prototype — Home, Tutor Profile, Book a Session, Booking Confirmation, My Bookings.
          </p>
          <PhoneSlideshow frames={HIFI} />
          <div className="fmt-cta-wrap">
            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary fmt-cta"
            >
              View Interactive Prototype on Figma
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
