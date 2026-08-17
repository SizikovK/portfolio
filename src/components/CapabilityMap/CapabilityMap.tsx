import {
  LuBot,
  LuBoxes,
  LuCodeXml,
  LuDatabase,
  LuUsers,
  LuWrench,
} from 'react-icons/lu'
import type { IconType } from 'react-icons'
import {
  capabilityGroups,
  skillLevels,
  type CapabilityGroupId,
  type TechnicalCapability,
} from '../../data/capabilities'
import './CapabilityMap.css'

const icons: Record<CapabilityGroupId, IconType> = {
  core: LuCodeXml,
  data: LuDatabase,
  architecture: LuBoxes,
  tools: LuWrench,
  ai: LuBot,
  team: LuUsers,
}

function TechnicalSkill({ item }: { item: TechnicalCapability }) {
  const level = skillLevels[item.level]

  return (
    <li>
      <details className="technical-skill">
        <summary title={level.description}>
          <span className="skill-name">{item.name}</span>
          <span className="skill-rating">
            <span
              className="skill-segments"
              role="img"
              aria-label={`${level.label}: ${item.level} из 4`}
            >
              {[1, 2, 3, 4].map((segment) => (
                <i
                  className={segment <= item.level ? 'is-active' : undefined}
                  aria-hidden="true"
                  key={segment}
                />
              ))}
            </span>
            <span className="skill-level-name">{level.label}</span>
          </span>
        </summary>
        <p className="skill-level-description">{level.description}</p>
      </details>
    </li>
  )
}

export function CapabilityMap() {
  return (
    <div className="capability-section" aria-label="Навыки по категориям">
      <div className="capability-map">
        {capabilityGroups.map((group, groupIndex) => {
          const Icon = icons[group.id]

          return (
            <article
              className={`capability-group capability-group--${group.id}`}
              key={group.id}
              data-reveal
              data-reveal-delay={String(groupIndex % 3)}
            >
              <header className="capability-header">
                <span className="capability-icon" aria-hidden="true"><Icon /></span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </header>

              {group.kind === 'technical' ? (
                <ul className="capability-list capability-list--technical">
                  {group.items.map((item) => <TechnicalSkill item={item} key={item.name} />)}
                </ul>
              ) : (
                <ul className="capability-list capability-list--soft">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <h4>{item.name}</h4>
                      <p>{item.evidence}</p>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}
