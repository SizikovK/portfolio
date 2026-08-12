import { SectionHeading } from '../../components/Section/SectionHeading'
import './About.css'

const principles = [
  ['Быстрое погружение', 'Получаю рабочее понимание новой технологии, применяю её в задаче и углубляюсь по мере необходимости.'],
  ['Практика', 'Предпочитаю осваивать инструменты через реальные задачи, прототипы и собственные эксперименты.'],
  ['Командная разработка', 'Есть опыт общей кодовой базы, распределения задач, планирования и работы с task tracker.'],
  ['AI-assisted development', 'Использую coding agents для исследования кодовых баз, прототипирования, поиска решений и ускорения разработки.'],
]

export function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading" data-reveal>
      <SectionHeading id="about-heading" index="01">Обо мне</SectionHeading>
      <div className="body-copy about-intro">
        <p>
          Я студент 3 курса СибГУТИ и участник Школы 21. Сейчас основное направление — Python и backend-разработка.
        </p>
        <p>
          Мне интересно устройство системы целиком: от прикладной логики и хранения данных до инфраструктуры, ML и LLM. Новые инструменты стараюсь проверять в работающих проектах.
        </p>
      </div>
      <div className="principles" aria-label="Подход к работе">
        {principles.map(([title, description]) => (
          <article className="principle" key={title} data-reveal>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
