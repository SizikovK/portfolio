import { Navigation } from './Navigation'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import type { Theme } from '../../hooks/useTheme'
import './MobileNavigation.css'

type MobileNavigationProps = {
  activeSection: string
  theme: Theme
  onThemeToggle: () => void
}

export function MobileNavigation({ activeSection, theme, onThemeToggle }: MobileNavigationProps) {
  return (
    <header className="mobile-header">
      <a className="mobile-mark" href="#top" aria-label="К началу страницы">КС</a>
      <div className="mobile-nav-scroll">
        <Navigation activeSection={activeSection} mobile />
      </div>
      <ThemeToggle theme={theme} onToggle={onThemeToggle} compact />
    </header>
  )
}
