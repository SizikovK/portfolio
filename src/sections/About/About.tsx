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
          Я Python-backend разработчик из Новосибирска. Создаю API и серверную логику для клиент-серверных приложений: проектирую модели данных, работаю с PostgreSQL и SQLite, использую FastAPI, SQLAlchemy и Alembic, реализую JWT-аутентификацию и упаковываю сервисы в Docker. Отдельно экспериментирую с LLM-агентами, RAG и подключением моделей к внешним инструментам и данным.
        </p>
        <p>
          Мне интересно устройство системы целиком: архитектура API, хранение и обработка данных, взаимодействие сервисов, развёртывание и командные процессы. Сейчас укрепляю знания в backend-разработке и параллельно изучаю классическое машинное обучение и LLM. Хочу развиваться на стыке backend и ML/LLM, создавая AI-системы с полноценной продуктовой архитектурой.
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
