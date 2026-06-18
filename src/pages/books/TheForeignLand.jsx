import { Link } from 'react-router-dom'
import useInView from '../../hooks/useInView'
import useDocumentTitle from '../../hooks/useDocumentTitle'
import ImageWithFallback from '../../components/ImageWithFallback'
import { toWebp } from '../../utils/image'
import './TheForeignLand.css'

const GUMROAD_URL = 'https://danishsaini12.gumroad.com/l/tazts'
const COVER = '/img/The Foreign Land Y1 Cover.png'
const AUTHOR_PHOTO = '/img/The Foreign Land Y1 Cover.png'

const PULL_QUOTES = [
  {
    text: '"Looking back is the one thing you cannot afford to do when you are still learning how to leave."',
  },
  {
    text: '"The loneliness wasn\'t dramatic anymore. Just ambient."',
  },
  {
    text: '"I adjusted my bag and walked to check-in."',
    note: 'Five seconds behind the door. Then this.',
  },
]

const DETAILS = [
  { value: '174', label: 'Pages' },
  { value: 'First Year', label: 'Volume' },
  { value: 'Remastered', label: 'Edition' },
  { value: '$5', label: 'Price' },
]

const EXCERPT_PARAGRAPHS = [
  '"The plane landed at 6:47 AM.',
  'I know this because I checked my phone the moment the wheels touched down, the way you do when you have been waiting for something for a very long time and you want to mark the exact second it arrives.',
  "Outside the window, Vancouver looked grey and flat and enormous. The mountains were somewhere behind the cloud cover — I couldn't see them yet. The terminal stretched out ahead of us, all glass and grey carpet and the particular fluorescent light of early mornings in airports.",
  'I picked up my bag and walked toward the terminal entrance.',
  'There are five seconds, maybe, between pushing through those doors and stepping into arrivals. Five seconds where you are neither here nor there — still in transit, still becoming. I used them.',
  'Can I do this? I asked myself.',
  'When will I see them again?',
  'The doors opened.',
  'I adjusted my bag.',
  'I walked to check-in."',
]

function AboutBookSection() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="about-book">
      <div className="container about-book__grid" ref={ref}>
        <div className="about-book__text">
          <p>
            In May 2022, at twenty years old, I boarded a flight to Canada with two suitcases, a
            KPU acceptance letter, and a plan. The plan did not survive contact with the country.
          </p>
          <p>
            The Foreign Land: First Year is the honest account of what followed — the basement
            apartments, the survival jobs, the loneliness that arrives not dramatically but
            quietly, the friendships that form fast when everyone is far from home, and the slow,
            unglamorous process of becoming someone who can function alone in a place that wasn't
            built for you.
          </p>
          <p>
            This is not an immigration success story. It is something more useful than that — a
            record of what it actually feels like, written by someone who was still in the middle
            of it.
          </p>
        </div>

        <div className="about-book__quotes">
          {PULL_QUOTES.map((quote, i) => (
            <div
              key={quote.text}
              className={`pull-quote reveal ${inView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <p>{quote.text}</p>
              {quote.note && <span className="pull-quote__note">{quote.note}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DetailsSection() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="book-details">
      <div className="container book-details__grid" ref={ref}>
        {DETAILS.map((detail, i) => (
          <div
            key={detail.label}
            className={`book-details__card reveal ${inView ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="book-details__value">{detail.value}</span>
            <span className="book-details__label">{detail.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function ExcerptSection() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="excerpt" className="excerpt">
      <div className="container">
        <div ref={ref} className={`excerpt__card reveal ${inView ? 'is-visible' : ''}`}>
          <div className="excerpt__text">
            {EXCERPT_PARAGRAPHS.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="excerpt__cta">
            <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Continue Reading — $5
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function AuthorSection() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="author-section">
      <div className="container author-section__grid" ref={ref}>
        <div className={`author-section__photo reveal-left ${inView ? 'is-visible' : ''}`}>
          <ImageWithFallback src={AUTHOR_PHOTO} alt="Danish Saini" label="Danish Saini" />
        </div>

        <div className={`author-section__content reveal-right ${inView ? 'is-visible' : ''}`}>
          <h2 className="author-section__heading">Danish Saini</h2>
          <p>
            I am twenty-three years old. I am in Dubai, studying Computer Science at De Montfort
            University. I left Canada in March 2025.
          </p>
          <p>
            I started writing The Foreign Land during my second year in Canada because I needed
            to put it somewhere. What began as journal entries became a manuscript. What became a
            manuscript became this.
          </p>
          <p>
            I am a designer and developer by profession. I am a writer by necessity.
          </p>

          <div className="author-section__coords">
            <span className="author-section__coords-value">28.6° N · 49.0° N · 25.2° N</span>
            <span className="author-section__coords-label">Delhi · Delta · Dubai</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SecondBookTeaser() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="second-book">
      <div className="container second-book__inner" ref={ref}>
        <h2 className={`second-book__heading reveal ${inView ? 'is-visible' : ''}`}>
          The second year was harder.
        </h2>
        <p className={`second-book__quote reveal ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          "If the first year was about arrival — figuring out what I had gotten myself into,
          surviving the things I hadn't anticipated, becoming someone who could function alone in
          a foreign country — then the second year was about something harder and quieter. It was
          about who I was when the newness wore off."
        </p>
        <p className="second-book__note">The Foreign Land: Second Year — Coming Soon</p>
        <span className="btn btn-ghost" aria-disabled="true">Coming Soon</span>
      </div>
    </section>
  )
}

function FinalCta() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="final-cta">
      <div className="final-cta__bg" style={{ backgroundImage: `url("${toWebp(COVER)}")` }} />
      <div className="final-cta__overlay" />
      <div className="container final-cta__content" ref={ref}>
        <h2 className={`final-cta__heading reveal ${inView ? 'is-visible' : ''}`}>Read The Foreign Land</h2>
        <p className={`final-cta__subtext reveal ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          174 pages. One honest account. Five dollars.
        </p>
        <a
          href={GUMROAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary final-cta__btn reveal ${inView ? 'is-visible' : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          Get It Now — $5
        </a>
      </div>
    </section>
  )
}

export default function TheForeignLand() {
  useDocumentTitle('The Foreign Land — Danish Saini')

  return (
    <main className="book-page">
      <section className="book-hero">
        <div className="book-hero__bg" style={{ backgroundImage: `url("${toWebp(COVER)}")` }} />
        <div className="book-hero__overlay" />

        <div className="container book-hero__back-wrap">
          <Link to="/books" className="book-hero__back">← All Books</Link>
        </div>

        <div className="container book-hero__content">
          <span className="book-hero__eyebrow fade-up" style={{ animationDelay: '0s' }}>A Memoir</span>
          <h1 className="book-hero__title fade-up" style={{ animationDelay: '0.15s' }}>THE FOREIGN LAND</h1>
          <p className="book-hero__subtitle fade-up" style={{ animationDelay: '0.3s' }}>First Year (Remastered)</p>
          <p className="book-hero__author fade-up" style={{ animationDelay: '0.45s' }}>Danish Saini</p>
          <div className="book-hero__actions fade-up" style={{ animationDelay: '0.6s' }}>
            <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Read It — $5
            </a>
            <a href="#excerpt" className="btn btn-outline">Read an Excerpt</a>
          </div>
        </div>

        <span className="book-hero__scroll" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </section>

      <AboutBookSection />
      <DetailsSection />
      <ExcerptSection />
      <AuthorSection />
      <SecondBookTeaser />
      <FinalCta />
    </main>
  )
}
