import { useEffect, useRef } from 'react'
import './WritingBackground.css'

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

function pickType() {
  const r = Math.random()
  if (r < 0.55) return 'page'
  if (r < 0.8) return 'quote'
  return 'pen'
}

export default function WritingBackground() {
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
        const type = pickType()
        const base = {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          rotation: (Math.random() - 0.5) * 0.3,
          vr: (Math.random() - 0.5) * 0.0006,
          type,
        }

        if (type === 'page') {
          const w = 50 + Math.random() * 50
          const ratio = 1.3 + Math.random() * 0.3
          return { ...base, w, h: w * ratio }
        }

        if (type === 'quote') {
          return { ...base, size: 36 + Math.random() * 36 }
        }

        return { ...base, len: 40 + Math.random() * 30 }
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

        if (f.type === 'page') {
          const x = -f.w / 2
          const y = -f.h / 2

          ctx.strokeStyle = `rgba(${ACCENT_RGB}, 0.16)`
          ctx.lineWidth = 1.5
          tracePill(ctx, x, y, f.w, f.h, 6)
          ctx.stroke()

          ctx.strokeStyle = `rgba(${ACCENT_RGB}, 0.12)`
          ctx.lineWidth = 1
          const lineCount = 4
          const innerW = f.w - 24
          for (let i = 0; i < lineCount; i++) {
            const ly = y + 16 + i * ((f.h - 32) / (lineCount - 1))
            const lw = innerW * (i === 0 ? 0.6 : 0.85 - (i % 2) * 0.15)
            ctx.beginPath()
            ctx.moveTo(x + 12, ly)
            ctx.lineTo(x + 12 + lw, ly)
            ctx.stroke()
          }
        } else if (f.type === 'quote') {
          ctx.font = `${f.size}px Georgia, 'Times New Roman', serif`
          ctx.fillStyle = `rgba(${ACCENT_RGB}, 0.14)`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText('"', 0, 0)
        } else {
          const len = f.len

          ctx.strokeStyle = `rgba(${ACCENT_RGB}, 0.18)`
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.moveTo(-len / 2, len / 2)
          ctx.lineTo(len / 2, -len / 2)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(len / 2, -len / 2)
          ctx.lineTo(len / 2 - 9, -len / 2 + 2)
          ctx.lineTo(len / 2 - 2, -len / 2 + 9)
          ctx.closePath()
          ctx.fillStyle = `rgba(${ACCENT_RGB}, 0.3)`
          ctx.fill()

          ctx.beginPath()
          ctx.arc(-len / 2 - 5, len / 2 + 5, 1.8, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${ACCENT_RGB}, 0.4)`
          ctx.fill()
        }

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

  return <canvas ref={canvasRef} className="writing-bg" aria-hidden="true" />
}
