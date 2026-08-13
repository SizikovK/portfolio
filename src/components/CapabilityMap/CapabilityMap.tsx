import { LuBot, LuDatabase } from 'react-icons/lu'
import { capabilityGroups } from '../../data/capabilities'
import './CapabilityMap.css'

const icons = {
  backend: LuDatabase,
  ai: LuBot,
}

export function CapabilityMap() {
  return (
    <div className="capability-map" aria-label="Карта навыков">
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
                    <span>{item.level}</span>
                  </div>
                  <div className="capability-scale" aria-hidden="true">
                    {Array.from({ length: 4 }, (_, index) => (
                      <span className={index < item.strength ? 'is-filled' : ''} key={index} />
                    ))}
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
