import './ScrollBackground.css'

const LAYERS = ['hero', 'projects', 'about', 'book', 'contact']

export default function ScrollBackground({ active }) {
  return (
    <div className="scroll-bg" aria-hidden="true">
      {LAYERS.map((key) => (
        <div
          key={key}
          className={`scroll-bg__layer scroll-bg__layer--${key}${active === key ? ' is-active' : ''}`}
        />
      ))}
    </div>
  )
}
