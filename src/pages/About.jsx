import useDocumentTitle from '../hooks/useDocumentTitle'
import AboutHero from '../components/about/AboutHero'
import Journey from '../components/about/Journey'
import Skills from '../components/about/Skills'
import Experience from '../components/about/Experience'
import Education from '../components/about/Education'
import Certifications from '../components/about/Certifications'
import BookCta from '../components/about/BookCta'
import Contact from '../components/Contact'

export default function About() {
  useDocumentTitle('About — Danish Saini')

  return (
    <main>
      <AboutHero />
      <Journey />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
      <BookCta />
      <Contact />
    </main>
  )
}
