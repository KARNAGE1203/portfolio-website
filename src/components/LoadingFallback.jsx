import './LoadingFallback.css'

export default function LoadingFallback() {
  return (
    <div className="loading-fallback" aria-hidden="true">
      <div className="loading-fallback__bar" />
    </div>
  )
}
