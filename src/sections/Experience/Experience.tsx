import { ExperienceItem } from '../../components/ExperienceItem/ExperienceItem'
import { SectionHeading } from '../../components/Section/SectionHeading'
import { experience } from '../../data/experience'

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading" data-reveal>
      <SectionHeading id="experience-heading" index="02">Опыт</SectionHeading>
      <div>
        {experience.map((item, index) => <ExperienceItem item={item} index={index} key={item.title} />)}
      </div>
    </section>
  )
}
