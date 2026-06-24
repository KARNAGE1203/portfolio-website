import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import HeroBackground from './HeroBackground'
import lenis from '../lib/lenis'
import './Hero.css'

export default function Hero() {
  const heroRef = useRef(null)

  const scrollToProjects = (e) => {
    e.preventDefault()
    const el = document.getElementById('projects')
    if (el) lenis.scrollTo(el, { offset: -72 })
  }

  /* Lenis scroll → --exit custom property */
  useEffect(() => {
    const handleScroll = ({ scroll }) => {
      if (!heroRef.current) return
      const progress = Math.min(scroll / (window.innerHeight * 0.75), 1)
      heroRef.current.style.setProperty('--exit', progress)
    }
    lenis.on('scroll', handleScroll)
    return () => lenis.off('scroll', handleScroll)
  }, [])

  /* GSAP whirlwind assembly for the </> symbol */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.timeline({ delay: 0.55 })
        .set(['.hsym-char-l', '.hsym-char-s', '.hsym-char-r'], { opacity: 0 })
        .fromTo('.hsym-char-l',
          { x: -240, y: -180, rotation: -280, scale: 0.25, opacity: 0 },
          { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.15, ease: 'back.out(1.6)' }
        )
        .fromTo('.hsym-char-s',
          { x: 0, y: -360, rotation: 440, scale: 0.2, opacity: 0 },
          { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 0.95, ease: 'back.out(1.3)' },
          '-=0.72'
        )
        .fromTo('.hsym-char-r',
          { x: 240, y: -160, rotation: 280, scale: 0.25, opacity: 0 },
          { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, duration: 1.15, ease: 'back.out(1.6)' },
          '-=0.78'
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero" ref={heroRef}>
      <HeroBackground />

      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Danish Saini</h1>
          <p className="hero-tagline">
            <span className="hero-tagline__design">I design it.</span>{' '}
            <span className="hero-tagline__build">I build it.</span>
          </p>
          <p className="hero-desc">
            UX/UI designer and frontend developer. Based in Dubai. I write things, too.
          </p>
          <div className="hero-avail">
            <span className="hero-avail__dot" aria-hidden="true" />
            Available Sep 2026
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              Resume
            </a>
          </div>
        </div>

        <div className="hero-sym-col" aria-hidden="true">
          <div className="hsym-main">
            <span className="hsym-char-l">&lt;</span>
            <span className="hsym-char-s">/</span>
            <span className="hsym-char-r">&gt;</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span className="hero-scroll-cue__line" />
        <span className="hero-scroll-cue__label">scroll</span>
      </div>
    </section>
  )
}
