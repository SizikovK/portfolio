import { Navigation } from '../Navigation/Navigation'
import { SocialLinks } from '../SocialLinks/SocialLinks'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import type { Theme } from '../../hooks/useTheme'
import './Sidebar.css'

type SidebarProps = {
  activeSection: string
  theme: Theme
  onThemeToggle: () => void
}

export function Sidebar({ activeSection, theme, onThemeToggle }: SidebarProps) {
  return (
    <aside className="sidebar" aria-label="Профиль и навигация">
      <div>
        <a className="sidebar-name" href="#top">Константин Сизиков</a>
        <p className="sidebar-role">Python Backend Developer</p>
        <p className="sidebar-direction">Backend · ML / LLM</p>
      </div>
      <div className="sidebar-nav-group">
        <Navigation activeSection={activeSection} />
      </div>
      <div className="sidebar-footer">
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        <SocialLinks className="sidebar-socials" />
      </div>
    </aside>
  )
}
