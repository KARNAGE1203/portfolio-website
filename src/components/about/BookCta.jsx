import useInView from '../../hooks/useInView'
import './BookCta.css'

export default function BookCta() {
  const [ref, inView] = useInView()

  return (
    <section className="about-book">
      <div className="container">
        <div ref={ref} className={`about-book__card reveal ${inView ? 'is-visible' : ''}`}>
          <div className="about-book__copy">
            <span className="section-label">Also</span>
            <h2>I wrote a book.</h2>
            <p>
              The Foreign Land is a memoir about three years in Canada - the survival jobs, the
              broken immigration dream, and what it cost to start over. Available now.
            </p>
          </div>
          <a
            href="https://danishsaini.gumroad.com"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Read The Foreign Land
          </a>
        </div>
      </div>
    </section>
  )
}
