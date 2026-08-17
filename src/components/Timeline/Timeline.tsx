import { journey } from '../../data/journey'
import './Timeline.css'

function TimelinePoints({ points, className = '' }: { points: string[]; className?: string }) {
  return (
    <ul className={`timeline-points ${className}`.trim()}>
      {points.map((point) => <li key={point}>{point}</li>)}
    </ul>
  )
}

export function Timeline() {
  return (
    <ol className="timeline">
      {journey.map((item, index) => (
        <li
          className={item.current ? 'timeline-item is-current' : 'timeline-item'}
          key={item.title}
          data-reveal
          data-reveal-delay={String(Math.min(index, 3))}
        >
          <p className="timeline-marker">{item.marker}</p>
          <div className="timeline-node" aria-hidden="true" />
          <div className="timeline-content">
            {item.entries ? (
              <div className="timeline-group">
                <h3>{item.title}</h3>
                <TimelinePoints points={item.points} />
                <details className="timeline-events-disclosure">
                  <summary>
                    <span className="timeline-disclosure-label">Путь хакатонов</span>
                    <span className="timeline-group-toggle">{item.entries.length} события</span>
                  </summary>
                  <ol className="timeline-events">
                    {item.entries.map((entry) => (
                      <li key={entry.title}>
                        <time>{entry.marker}</time>
                        <h4>{entry.title}</h4>
                        <TimelinePoints points={entry.points} className="timeline-event-points" />
                      </li>
                    ))}
                  </ol>
                </details>
              </div>
            ) : (
              <>
                <h3>{item.title}</h3>
                <TimelinePoints points={item.points} />
              </>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
