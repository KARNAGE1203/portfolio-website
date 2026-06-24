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

  /* GSAP tornado: flies in from the front (z-axis) while spinning */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.fromTo('.hsym-anim-wrap',
        { z: 1100, rotationY: -1080, x: -80, opacity: 0 },
        {
          z: 0, rotationY: 0, x: 0, opacity: 1,
          duration: 2.2,
          ease: 'expo.out',
          delay: 0.5,
        }
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
