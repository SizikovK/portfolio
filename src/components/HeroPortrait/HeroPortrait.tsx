import { useRef, type PointerEvent } from 'react'
import './HeroPortrait.css'

export function HeroPortrait() {
  const portraitRef = useRef<HTMLDivElement>(null)

  const updateScanner = (event: PointerEvent<HTMLDivElement>) => {
    const portrait = portraitRef.current
    if (!portrait || event.pointerType === 'touch') return

    const bounds = portrait.getBoundingClientRect()
    const x = Math.min(100, Math.max(0, ((event.clientX - bounds.left) / bounds.width) * 100))
    const y = Math.min(100, Math.max(0, ((event.clientY - bounds.top) / bounds.height) * 100))

    portrait.style.setProperty('--scan-x', `${x}%`)
    portrait.style.setProperty('--scan-y', `${y}%`)
    portrait.style.setProperty('--scan-coordinate', `'${String(Math.round(x)).padStart(2, '0')} / ${String(Math.round(y)).padStart(2, '0')}'`)
  }

  return (
    <div
      ref={portraitRef}
      className="hero-portrait"
      aria-hidden="true"
      onPointerMove={updateScanner}
    >
      <img src="/images/hero-ascii.png" alt="" width="998" height="1001" />
      <span className="hero-portrait-accent" />
      <span className="hero-portrait-reticle" />
      <span className="hero-portrait-caption">visual / 01</span>
    </div>
  )
}
