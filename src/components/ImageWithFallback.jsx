import { useState } from 'react'
import { toWebp } from '../utils/image'

export default function ImageWithFallback({ src, alt, label, className = '', ...rest }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className={`img-placeholder ${className}`}>
        <span>{label || alt}</span>
      </div>
    )
  }

  return (
    <img
      src={toWebp(src)}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      {...rest}
    />
  )
}
