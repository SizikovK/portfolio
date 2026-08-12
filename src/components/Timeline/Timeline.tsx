import { journey } from '../../data/journey'
import './Timeline.css'

export function Timeline() {
  return (
    <ol className="timeline">
      {journey.map((item, index) => (
        <li className={item.current ? 'timeline-item is-current' : 'timeline-item'} key={item.title} data-reveal data-reveal-delay={String(Math.min(index, 3))}>
          <p className="timeline-marker">{item.marker}</p>
          <div className="timeline-node" aria-hidden="true" />
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
