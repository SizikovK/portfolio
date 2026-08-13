import { useEffect } from 'react'

export function useHashNavigation() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined

    if (navigation?.type === 'reload') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search)
      window.scrollTo(0, 0)
      return
    }

    const scrollToHash = () => {
      const id = window.location.hash.slice(1)
      if (!id) return
      document.getElementById(id)?.scrollIntoView()
    }

    const frame = requestAnimationFrame(() => requestAnimationFrame(scrollToHash))
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])
}
