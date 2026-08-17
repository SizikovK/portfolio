import { SectionHeading } from '../../components/Section/SectionHeading'
import './About.css'

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
    </section>
  )
}
