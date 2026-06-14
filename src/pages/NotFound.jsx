import { Link } from 'react-router-dom'
import HeroBackground from '../components/HeroBackground'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="not-found">
      <HeroBackground />
      <div className="container not-found__inner">
        <span className="not-found__code fade-up" style={{ animationDelay: '0s' }}>404</span>
        <h1 className="not-found__heading fade-up" style={{ animationDelay: '0.15s' }}>Page not found</h1>
        <p className="not-found__text fade-up" style={{ animationDelay: '0.3s' }}>
          The page you're looking for doesn't exist or may have moved.
        </p>
        <div className="not-found__actions fade-up" style={{ animationDelay: '0.45s' }}>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/projects" className="btn btn-outline">View Projects</Link>
        </div>
      </div>
    </main>
  )
}
