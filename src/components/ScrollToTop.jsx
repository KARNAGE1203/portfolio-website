import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import lenis from '../lib/lenis'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [pathname, hash])

  return null
}
