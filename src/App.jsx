import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import ProjectsPage from './pages/ProjectsPage'
import LearningZone from './pages/projects/LearningZone'
import FindMyTutor from './pages/projects/FindMyTutor'
import LittleLemon from './pages/projects/LittleLemon'
import Books from './pages/Books'
import TheForeignLand from './pages/books/TheForeignLand'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/learningzone" element={<LearningZone />} />
        <Route path="/projects/findmytutor" element={<FindMyTutor />} />
        <Route path="/projects/littlelemon" element={<LittleLemon />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/the-foreign-land" element={<TheForeignLand />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
