import { useEffect, useRef } from 'react'
import './FramesBackground.css'

const ACCENT_RGB = '108, 99, 255'
const MAX_FRAMES = 12
const DENSITY = 0.000018

function tracePill(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.lineTo(x + w - r, y)
  ctx.arcTo(x + w, y, x + w, y + r, r)
  ctx.lineTo(x + w, y + h - r)
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
  ctx.lineTo(x + r, y + h)
  ctx.arcTo(x, y + h, x, y + h - r, r)
  ctx.lineTo(x, y + r)
  ctx.arcTo(x, y, x + r, y, r)
  ctx.closePath()
}

export default function FramesBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let frames = []
    let frameId = null

    const initFrames = () => {
      const count = Math.min(MAX_FRAMES, Math.max(4, Math.floor(width * height * DENSITY)))
      frames = Array.from({ length: count }, () => {
        const w = 60 + Math.random() * 90
        const ratio = 0.65 + Math.random() * 0.6
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          w,
          h: w * ratio,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          rotation: (Math.random() - 0.5) * 0.3,
          vr: (Math.random() - 0.5) * 0.0006,
        }
      })
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.parentElement.offsetWidth
      height = canvas.parentElement.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initFrames()
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (const f of frames) {
        ctx.save()
        ctx.translate(f.x, f.y)
        ctx.rotate(f.rotation)
        ctx.strokeStyle = `rgba(${ACCENT_RGB}, 0.16)`
        ctx.lineWidth = 1.5
        const r = 10
        const x = -f.w / 2
        const y = -f.h / 2
        tracePill(ctx, x, y, f.w, f.h, r)
        ctx.stroke()
        ctx.fillStyle = `rgba(${ACCENT_RGB}, 0.5)`
        ctx.beginPath()
        ctx.arc(x + 14, y + 14, 1.6, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    const margin = 120

    const update = () => {
      for (const f of frames) {
        f.x += f.vx
        f.y += f.vy
        f.rotation += f.vr

        if (f.x < -margin) f.x = width + margin
        if (f.x > width + margin) f.x = -margin
        if (f.y < -margin) f.y = height + margin
        if (f.y > height + margin) f.y = -margin
      }
    }

    const step = () => {
      update()
      render()
      frameId = requestAnimationFrame(step)
    }

    resize()
    window.addEventListener('resize', resize)

    if (prefersReducedMotion) {
      render()
    } else {
      step()
    }

    return () => {
      window.removeEventListener('resize', resize)
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="frames-bg" aria-hidden="true" />
}
