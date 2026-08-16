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
            {item.entries ? (
              <details className="timeline-group">
                <summary>
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                  </span>
                  <span className="timeline-group-toggle" aria-hidden="true">2 события</span>
                </summary>
                <ol className="timeline-events">
                  {item.entries.map((entry) => (
                    <li key={entry.title}>
                      <time>{entry.marker}</time>
                      <h4>{entry.title}</h4>
                      <p>{entry.description}</p>
                    </li>
                  ))}
                </ol>
              </details>
            ) : (
              <>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
