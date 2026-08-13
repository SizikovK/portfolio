import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>('[data-reveal]')]

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-revealed'))
      return
    }

    document.documentElement.classList.add('reveal-ready')

    const revealVisible = () => {
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.92) {
          element.classList.add('is-revealed')
        }
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )

    elements.forEach((element) => {
      if (!element.classList.contains('is-revealed')) observer.observe(element)
    })
    const frame = requestAnimationFrame(revealVisible)
    window.addEventListener('load', revealVisible, { once: true })

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('load', revealVisible)
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [])
}
