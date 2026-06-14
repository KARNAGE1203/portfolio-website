import { useState } from 'react'

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
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setErrored(true)}
      {...rest}
    />
  )
}
