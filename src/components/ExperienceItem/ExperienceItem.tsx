import type { ExperienceItem as ExperienceItemData } from '../../data/experience'
import './ExperienceItem.css'

export function ExperienceItem({ item, index }: { item: ExperienceItemData; index: number }) {
  return (
    <article className="experience-item" data-reveal data-reveal-delay={String(index)}>
      <header className="experience-header">
        <div>
          <p className="experience-kind">{item.eyebrow}</p>
          <h3>{item.title}</h3>
        </div>
        <p className="experience-role">{item.level}</p>
      </header>
      <p className="experience-description">{item.summary}</p>
      <div className="experience-detail">
        <span>{item.detailLabel}</span>
        <p>{item.detail}</p>
      </div>
      <ul className="experience-context" aria-label="Технологии и навыки">
        {item.technologies.map((value) => <li key={value}>{value}</li>)}
      </ul>
    </article>
  )
}
