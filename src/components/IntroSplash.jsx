import { useEffect, useState } from 'react'
import './IntroSplash.css'

const KEY = 'introSplashSeen'

/*
 * Mobile-only intro splash: "danishsaini.com" front and centre while a
 * pen-stroke outline of </> draws itself in the background, then the
 * whole screen lifts away. Desktop gets the 3D hero tumble instead.
 * Plays once per session; tap to skip; reduced-motion users never see it.
 */
export default function IntroSplash() {
  const [show, setShow] = useState(() => {
    if (sessionStorage.getItem(KEY)) return false
    if (!window.matchMedia('(max-width: 900px)').matches) return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return true
  })

  useEffect(() => {
    if (!show) return
    sessionStorage.setItem(KEY, '1')
    document.documentElement.style.overflow = 'hidden'
    const t = setTimeout(() => setShow(false), 3250)
    return () => {
      clearTimeout(t)
      document.documentElement.style.overflow = ''
    }
  }, [show])

  if (!show) return null

  return (
    <div
      className="intro-splash"
      role="presentation"
      aria-hidden="true"
      onClick={() => setShow(false)}
    >
      <div className="intro-splash__stage">
        {/* pathLength=1 lets CSS animate stroke-dashoffset 1 → 0 as a pen stroke.
            Each glyph is a closed 2D letterform outline the pen traces around. */}
        <svg className="intro-splash__glyphs" viewBox="0 0 520 300" fill="none">
          {/* Sequence: / draws first, the name appears, then < and > draw together */}
          {/* < — hollow chevron, 45° arms, vertical end caps */}
          <path
            className="intro-splash__glyph"
            pathLength="1"
            d="M 162 58 L 70 150 L 162 242 L 162 212 L 100 150 L 162 88 Z"
            style={{ animationDelay: '1.55s' }}
          />
          {/* / — hollow slash, parallelogram with flat caps */}
          <path
            className="intro-splash__glyph"
            pathLength="1"
            d="M 285 48 L 315 48 L 245 252 L 215 252 Z"
            style={{ animationDelay: '0.1s' }}
          />
          {/* > — mirror of < */}
          <path
            className="intro-splash__glyph"
            pathLength="1"
            d="M 358 58 L 450 150 L 358 242 L 358 212 L 420 150 L 358 88 Z"
            style={{ animationDelay: '1.55s' }}
          />
        </svg>
        <p className="intro-splash__name">
          danishsaini<span className="intro-splash__tld">.com</span>
        </p>
      </div>
    </div>
  )
}
