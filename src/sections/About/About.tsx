import { SectionHeading } from '../../components/Section/SectionHeading'
import './About.css'

const principles = [
  ['Быстрое погружение', 'Получаю рабочее понимание новой технологии, применяю её в задаче и затем углубляюсь по мере необходимости.'],
  ['Практика', 'Осваиваю технологии через работающие задачи: API, базы данных, Telegram-ботов и AI-агентов.'],
  ['Командная разработка', 'Работаю с общей кодовой базой, распределением задач и планированием; могу брать ответственность за команду.'],
  ['AI-assisted development', 'Использую coding agents для исследования кодовых баз, прототипирования, поиска решений и ускорения разработки.'],
]

export function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading" data-reveal>
      <SectionHeading id="about-heading" index="01">Обо мне</SectionHeading>
      <div className="body-copy about-intro">
        <p>
          Учусь в СибГУТИ на направлении «Информатика и вычислительная техника» (2024–2028) и в Школе 21 с 2026 года. Основное направление сейчас — Python и backend-разработка.
        </p>
        <p>
          Мне интересно устройство системы целиком: API, хранение данных, инфраструктура и инструменты разработки. Недавно начал изучать область ML/LLM и рассматриваю её как следующее направление развития.
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
