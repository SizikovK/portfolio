import { navigation } from '../../data/navigation'
import './Navigation.css'

type NavigationProps = {
  activeSection: string
  mobile?: boolean
}

export function Navigation({ activeSection, mobile = false }: NavigationProps) {
  return (
    <nav className={mobile ? 'navigation navigation--mobile' : 'navigation'} aria-label="Основная навигация">
      <ol>
        {navigation.map((item, index) => (
          <li key={item.id}>
            <a
              className={activeSection === item.id ? 'is-active' : ''}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {!mobile && <span className="nav-index">{String(index + 1).padStart(2, '0')}</span>}
              {!mobile && <span className="nav-line" aria-hidden="true" />}
              <span>{mobile && item.id === 'journey' ? 'Путь' : item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
