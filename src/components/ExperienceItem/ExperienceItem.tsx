import type { ExperienceItem as ExperienceItemData } from '../../data/experience'
import './ExperienceItem.css'

export function ExperienceItem({ item, index }: { item: ExperienceItemData; index: number }) {
  return (
    <article className="experience-item" data-reveal data-reveal-delay={String(index)}>
      <header className="experience-header">
        <div>
          <p className="experience-kind">{item.kind}</p>
          <h3>{item.title}</h3>
        </div>
        <p className="experience-role">{item.role}</p>
      </header>
      <p className="experience-description">{item.description}</p>
      <div className="experience-detail">
        <span>Вклад</span>
        <p>{item.contribution}</p>
      </div>
      <ul className="experience-context" aria-label="Контекст проекта">
        {item.context.map((value) => <li key={value}>{value}</li>)}
      </ul>
    </article>
  )
}
