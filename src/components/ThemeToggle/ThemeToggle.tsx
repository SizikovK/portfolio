import type { Theme } from '../../hooks/useTheme'
import './ThemeToggle.css'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
  compact?: boolean
}

export function ThemeToggle({ theme, onToggle, compact = false }: ThemeToggleProps) {
  const nextTheme = theme === 'light' ? 'тёмную' : 'светлую'

  return (
    <button
      className={compact ? 'theme-toggle theme-toggle--compact' : 'theme-toggle'}
      type="button"
      onClick={onToggle}
      aria-label={`Включить ${nextTheme} тему`}
      title={`Включить ${nextTheme} тему`}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {theme === 'light' ? '☾' : '☀'}
      </span>
      {!compact && <span>{theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}</span>}
    </button>
  )
}
