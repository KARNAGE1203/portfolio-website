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

  /* GSAP: each character tumbles in individually from the z-axis */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.45 })

      tl
        .set(['.hsym-char-l', '.hsym-char-s', '.hsym-char-r'], { opacity: 0 })
        // < — tumbles from upper-front-left
        .fromTo('.hsym-char-l',
          { z: 380, rotationX: -140, rotationY: 65, opacity: 0 },
          { z: 0, rotationX: 0, rotationY: 0, opacity: 1, duration: 2.2, ease: 'power2.out' }
        )
        // / — barrel-rolls from directly in front
        .fromTo('.hsym-char-s',
          { z: 430, rotationX: 180, rotationZ: 210, opacity: 0 },
          { z: 0, rotationX: 0, rotationZ: 0, opacity: 1, duration: 1.9, ease: 'power2.out' },
          '-=1.5'
        )
        // > — mirrors < from upper-front-right
        .fromTo('.hsym-char-r',
          { z: 380, rotationX: 140, rotationY: -65, opacity: 0 },
          { z: 0, rotationX: 0, rotationY: 0, opacity: 1, duration: 2.2, ease: 'power2.out' },
          '-=1.6'
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
          <div className="hsym-anim-wrap">
            <div className="hsym-main">
              <span className="hsym-char-l">&lt;</span>
              <span className="hsym-char-s">/</span>
              <span className="hsym-char-r">&gt;</span>
            </div>
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
