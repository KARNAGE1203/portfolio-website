import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import About from '../components/About'
import Book from '../components/Book'
import Contact from '../components/Contact'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Book />
      <Contact />
    </main>
  )
}
