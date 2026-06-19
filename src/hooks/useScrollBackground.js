import { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'top',      key: 'hero' },
  { id: 'projects', key: 'projects' },
  { id: 'about',    key: 'about' },
  { id: 'book',     key: 'book' },
  { id: 'contact',  key: 'contact' },
]

export default function useScrollBackground() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const els = SECTIONS
      .map(({ id, key }) => ({ el: document.getElementById(id), key }))
      .filter(({ el }) => el !== null)

    const update = () => {
      const threshold = window.scrollY + window.innerHeight * 0.38
      let current = els[0]?.key ?? 'hero'
      for (const { el, key } of els) {
        if (el.offsetTop <= threshold) current = key
      }
      setActive(prev => (prev === current ? prev : current))
    }

    window.addEventListener('scroll', update, { passive: true })
    update()

    return () => window.removeEventListener('scroll', update)
  }, [])

  return active
}
