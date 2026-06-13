import './Book.css'

export default function Book() {
  return (
    <section id="book">
      <div className="container book__inner">
        <span className="section-label">The Foreign Land</span>
        <h2 className="book__heading">A memoir about starting over.</h2>
        <p className="book__text">
          Three years in Canada. Survival jobs, a diploma, a broken immigration dream, and a
          flight to Dubai to begin again. This is the honest account of what that cost and what
          it built.
        </p>
        <a
          href="https://danishsaini.gumroad.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read It
        </a>
      </div>
    </section>
  )
}
