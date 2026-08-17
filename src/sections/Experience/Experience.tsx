import { CapabilityMap } from '../../components/CapabilityMap/CapabilityMap'
import { SectionHeading } from '../../components/Section/SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading" data-reveal>
      <SectionHeading id="experience-heading" index="02">Навыки</SectionHeading>
      <CapabilityMap />
    </section>
  )
}
