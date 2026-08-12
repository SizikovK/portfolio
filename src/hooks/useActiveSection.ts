import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: readonly string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!sections.length) return

    const updateFromHash = () => {
      const id = window.location.hash.slice(1)
      if (sectionIds.includes(id)) setActiveSection(id)
    }

    updateFromHash()

    const visible = new Map<string, IntersectionObserverEntry>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visible.set(entry.target.id, entry))
        const current = [...visible.values()]
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0]

        if (current) setActiveSection(current.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.1, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('hashchange', updateFromHash)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', updateFromHash)
    }
  }, [sectionIds])

  return activeSection
}
