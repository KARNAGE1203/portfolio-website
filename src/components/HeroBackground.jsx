import { useEffect, useRef } from 'react'
import './HeroBackground.css'

const ACCENT_RGB = '108, 99, 255'
const LINK_DISTANCE = 140
const DENSITY = 0.00008
const MAX_PARTICLES = 60

export default function HeroBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    let ctx
    try {
      ctx = canvas.getContext('2d')
      if (!ctx) return
    } catch {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let particles = []
    let frameId = null

    const initParticles = () => {
      const count = Math.min(MAX_PARTICLES, Math.floor(width * height * DENSITY))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      width  = canvas.parentElement.offsetWidth
      height = canvas.parentElement.offsetHeight
      canvas.width  = width  * dpr
      canvas.height = height * dpr
      canvas.style.width  = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles()
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      /* Lines — opacity varies per pair so can't batch */
      ctx.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(${ACCENT_RGB},${(0.18 * (1 - dist / LINK_DISTANCE)).toFixed(3)})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      /* Dots — batched into a single fill call */
      ctx.fillStyle = `rgba(${ACCENT_RGB},0.55)`
      ctx.beginPath()
      for (const p of particles) {
        ctx.moveTo(p.x + 1.6, p.y)
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
      }
      ctx.fill()
    }

    const update = () => {
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x <= 0 || p.x >= width)  p.vx *= -1
        if (p.y <= 0 || p.y >= height) p.vy *= -1
      }
    }

    const step = () => {
      update()
      render()
      frameId = requestAnimationFrame(step)
    }

    /* Pause when tab is hidden, resume when visible */
    const handleVisibility = () => {
      if (document.hidden) {
        if (frameId) { cancelAnimationFrame(frameId); frameId = null }
      } else if (!frameId && !prefersReducedMotion) {
        frameId = requestAnimationFrame(step)
      }
    }

    /* Pause when canvas scrolls out of view */
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!frameId && !prefersReducedMotion) frameId = requestAnimationFrame(step)
      } else {
        if (frameId) { cancelAnimationFrame(frameId); frameId = null }
      }
    }, { threshold: 0 })

    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', handleVisibility)
    observer.observe(canvas)

    if (prefersReducedMotion) {
      render()
    } else {
      frameId = requestAnimationFrame(step)
    }

    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibility)
      observer.disconnect()
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-bg" aria-hidden="true" />
}
