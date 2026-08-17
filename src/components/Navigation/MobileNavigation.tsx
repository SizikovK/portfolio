import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import type { Theme } from '../../hooks/useTheme'
import './MobileNavigation.css'

type MobileNavigationProps = {
  theme: Theme
  onThemeToggle: () => void
}

export function MobileNavigation({ theme, onThemeToggle }: MobileNavigationProps) {
  return (
    <header className="mobile-header">
      <a className="mobile-mark" href="#top" aria-label="К началу страницы">Python Backend Developer</a>
      <ThemeToggle theme={theme} onToggle={onThemeToggle} compact />
    </header>
  )
}
