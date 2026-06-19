import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import useScrollBackground from '../hooks/useScrollBackground'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Book from '../components/Book'
import Contact from '../components/Contact'
import ScrollBackground from '../components/ScrollBackground'
import lenis from '../lib/lenis'

export default function Home() {
  useDocumentTitle('Danish Saini — UX/UI Designer & Frontend Developer')

  const activeSection = useScrollBackground()

  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const target = document.querySelector(hash)
    if (target) {
      lenis.scrollTo(target, { duration: 1.2, offset: -88 })
    }
  }, [hash])

  return (
    <>
      <ScrollBackground active={activeSection} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Book />
        <Contact />
      </main>
    </>
  )
}
