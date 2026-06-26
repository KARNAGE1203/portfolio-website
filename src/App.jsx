import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingFallback from './components/LoadingFallback'

const Home          = lazy(() => import('./pages/Home'))
const About         = lazy(() => import('./pages/About'))
const ProjectsPage  = lazy(() => import('./pages/ProjectsPage'))
const LearningZone  = lazy(() => import('./pages/projects/LearningZone'))
const FindMyTutor   = lazy(() => import('./pages/projects/FindMyTutor'))
const LittleLemon   = lazy(() => import('./pages/projects/LittleLemon'))
const Books         = lazy(() => import('./pages/Books'))
const TheForeignLand = lazy(() => import('./pages/books/TheForeignLand'))
const ContactPage   = lazy(() => import('./pages/ContactPage'))
const NotFound      = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Nav />
      <div id="main-content" tabIndex="-1">
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/"                        element={<Home />} />
              <Route path="/about"                   element={<About />} />
              <Route path="/projects"                element={<ProjectsPage />} />
              <Route path="/projects/learningzone"   element={<LearningZone />} />
              <Route path="/projects/findmytutor"   element={<FindMyTutor />} />
              <Route path="/projects/littlelemon"    element={<LittleLemon />} />
              <Route path="/books"                   element={<Books />} />
              <Route path="/books/the-foreign-land"  element={<TheForeignLand />} />
              <Route path="/contact"                 element={<ContactPage />} />
              <Route path="*"                        element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
