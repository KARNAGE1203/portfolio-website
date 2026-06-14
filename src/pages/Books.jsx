import { Link } from 'react-router-dom'
import useInView from '../hooks/useInView'
import useDocumentTitle from '../hooks/useDocumentTitle'
import ImageWithFallback from '../components/ImageWithFallback'
import WritingBackground from '../components/WritingBackground'
import './Books.css'

const GUMROAD_URL = 'https://danishsaini12.gumroad.com/l/tazts'
const BOOK1_COVER = '/img/The Foreign Land Y1 Cover.png'

function BookCard({ children, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <article ref={ref} className={`book-card reveal ${inView ? 'is-visible' : ''} ${className}`}>
      {children}
    </article>
  )
}

export default function Books() {
  useDocumentTitle('Books — Danish Saini')

  return (
    <main>
      <section className="books-hero">
        <WritingBackground />
        <div className="container">
          <span className="section-label fade-up" style={{ animationDelay: '0s' }}>Written Work</span>
          <h1 className="books-hero__heading fade-up" style={{ animationDelay: '0.15s' }}>Stories worth telling.</h1>
          <p className="books-hero__subtext fade-up" style={{ animationDelay: '0.3s' }}>
            Memoir. Honesty. The kind of writing that costs something to put down.
          </p>
        </div>
      </section>

      <section className="books-list">
        <div className="container">
          <BookCard>
            <div className="book-card__cover">
              <ImageWithFallback src={BOOK1_COVER} alt="The Foreign Land: First Year cover" label="The Foreign Land" />
            </div>
            <div className="book-card__content">
              <span className="badge badge--available">Available Now</span>
              <h2 className="book-card__title">The Foreign Land</h2>
              <p className="book-card__subtitle">First Year (Remastered)</p>
              <p className="book-card__author">Danish Saini</p>
              <p className="book-card__desc">
                Three years in Canada. Survival jobs, a diploma, a broken immigration dream, and
                the most honest account of what it costs to start over in a country that wasn't
                ready for you yet.
              </p>
              <div className="book-card__tags">
                <span className="tag">Memoir</span>
                <span className="tag">International Student</span>
                <span className="tag">Coming of Age</span>
              </div>
              <div className="book-card__actions">
                <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Read It — $5
                </a>
                <Link to="/books/the-foreign-land" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </BookCard>

          <BookCard>
            <div className="book-card__cover book-card__cover--placeholder">
              <span className="book-card__placeholder-text">The Foreign Land: Second Year</span>
            </div>
            <div className="book-card__content">
              <span className="badge badge--soon">Coming Soon</span>
              <h2 className="book-card__title">The Foreign Land</h2>
              <p className="book-card__subtitle">Second Year</p>
              <p className="book-card__author">Danish Saini</p>
              <p className="book-card__desc">
                The newness wore off. The routine settled. The loneliness stopped being dramatic
                and became ambient. The second year was about something harder and quieter — who
                I was when I had no more distractions left to hide behind.
              </p>
              <div className="book-card__tags">
                <span className="tag">Memoir</span>
                <span className="tag">International Student</span>
                <span className="tag">Identity</span>
              </div>
              <div className="book-card__actions">
                <span className="btn btn-ghost" aria-disabled="true">Coming Soon</span>
              </div>
            </div>
          </BookCard>
        </div>
      </section>

      <section className="books-closing">
        <div className="container">
          <p>The Foreign Land is a series. More volumes are in progress.</p>
        </div>
      </section>
    </main>
  )
}
