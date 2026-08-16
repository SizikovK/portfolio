import { SocialLinks } from '../../components/SocialLinks/SocialLinks'
import { HeroCommands } from '../../components/HeroCommands/HeroCommands'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker">Разработчик · Новосибирск</p>
          <div className="hero-name">
            <h1 id="hero-title">Константин<br />Сизиков</h1>
            <span className="hero-star hero-star--large" aria-hidden="true" />
            <span className="hero-star hero-star--medium" aria-hidden="true" />
            <span className="hero-star hero-star--small" aria-hidden="true" />
          </div>
          <p className="hero-role">Python Backend Developer · студент ИВТ</p>
          <p className="hero-intro">
            Разрабатываю клиент-серверные приложения и агентские системы на базе LLM. Работаю с Python, SQL и реляционными базами данных. Использую AI-ассистентов и кодовых агентов, чтобы быстрее проверять гипотезы, собирать прототипы и автоматизировать рутинные этапы разработки.
          </p>
          <SocialLinks className="hero-socials" />
        </div>
        <div className="hero-art" aria-hidden="true">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-ascii-clean.png`}
            alt=""
            width="998"
            height="1001"
          />
          <HeroCommands />
        </div>
      </div>
    </section>
  )
}
