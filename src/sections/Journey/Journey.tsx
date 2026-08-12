import { SectionHeading } from '../../components/Section/SectionHeading'
import { Timeline } from '../../components/Timeline/Timeline'

export function Journey() {
  return (
    <section id="journey" className="section" aria-labelledby="journey-heading" data-reveal>
      <SectionHeading id="journey-heading" index="03">Траектория</SectionHeading>
      <Timeline />
    </section>
  )
}
