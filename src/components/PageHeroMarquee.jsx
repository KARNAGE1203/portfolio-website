import './PageHeroMarquee.css'

export default function PageHeroMarquee({ word }) {
  const items = Array(8).fill(word)
  return (
    <div className="page-marquee" aria-hidden="true">
      <div className="page-marquee__track">
        {items.map((w, i) => (
          <span key={i} className="page-marquee__word">{w}</span>
        ))}
      </div>
    </div>
  )
}
