import { Link } from 'react-router-dom'
import './Book.css'

export default function Book() {
  return (
    <section id="book">
      <div className="container book__inner">
        <h2 className="book__heading">A memoir about starting over.</h2>
        <p className="book__text">
          Three years in Canada. Survival jobs, a diploma, a broken immigration dream, and a
          flight to Dubai to begin again. The Foreign Land is the honest account of what that
          cost and what it built — with a second volume on the way.
        </p>
        <Link to="/books" className="btn btn-primary">
          Explore the Books
        </Link>
      </div>
    </section>
  )
}
