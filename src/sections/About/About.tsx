import { SectionHeading } from '../../components/Section/SectionHeading'
import './About.css'

const principles = [
  ['Быстрое погружение', 'Быстро изучаю новые технологии и инструменты, чтобы использовать их в работе.'],
  ['Практика', 'Считаю, что лучший способ изучить что-то — это применить знания на практике.'],
  ['Работа в команде', 'Легко нахожу общий язык с людьми и умею работать в команде.'],
  ['AI-assisted development', 'Использую coding agents для исследования кодовых баз, прототипирования, поиска решений и ускорения разработки.'],
]

export function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading" data-reveal>
      <SectionHeading id="about-heading" index="01">Обо мне</SectionHeading>
      <div className="body-copy about-intro">
        <p>
          Учусь в СибГУТИ на направлении «Информатика и вычислительная техника» (2024–2028) и в Школе 21 от Сбера с 2026 года. Основное направление сейчас — Python и backend-разработка.
        </p>
        <p>
          Мне интересно устройство системы целиком: API, хранение данных, инфраструктура и инструменты разработки. Активно изучаю область ML/LLM и рассматриваю её как следующее направление развития.
        </p>
      </div>
      <div className="principles" aria-label="Подход к работе">
        {principles.map(([title, description]) => (
          <article className={title === 'AI-assisted development' ? 'principle principle--ai' : 'principle'} key={title} data-reveal>
            <h3>
              {title === 'AI-assisted development' && <span className="ai-star ai-star--left" aria-hidden="true" />}
              <span>{title}</span>
              {title === 'AI-assisted development' && <span className="ai-star ai-star--right" aria-hidden="true" />}
            </h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
