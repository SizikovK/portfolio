import { LuBot, LuCode, LuDatabase, LuWrench } from 'react-icons/lu'
import { capabilityGroups } from '../../data/capabilities'
import './CapabilityMap.css'

const icons = {
  backend: LuCode,
  data: LuDatabase,
  ai: LuBot,
  tools: LuWrench,
}

export function CapabilityMap() {
  return (
    <div className="capability-map" aria-label="Карта навыков">
      <p className="capability-note">
        Проценты — предварительная самооценка. Позже заменю их результатами профильных тестов.
      </p>
      {capabilityGroups.map((group, groupIndex) => {
        const Icon = icons[group.id]

        return (
          <article className="capability-group" key={group.id} data-reveal data-reveal-delay={String(groupIndex)}>
            <header className="capability-header">
              <span className="capability-icon" aria-hidden="true"><Icon /></span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </header>
            <ul className="capability-list">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="capability-label">
                    <span>{item.name}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div
                    className="capability-scale"
                    role="progressbar"
                    aria-label={item.name}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={item.percent}
                  >
                    <span style={{ '--capability-value': `${item.percent}%` } as React.CSSProperties} />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        )
      })}
    </div>
  )
}
