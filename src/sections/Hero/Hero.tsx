import { SocialLinks } from '../../components/SocialLinks/SocialLinks'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker">Разработчик · Новосибирск</p>
          <h1 id="hero-title">Константин<br />Сизиков</h1>
          <p className="hero-role">Python Backend Developer · студент ИВТ</p>
          <p className="hero-intro">
            Разрабатываю backend на Python, работаю с API и базами данных. Ищу стажировку, где смогу приносить пользу команде и расти в сторону ML/LLM.
          </p>
          <SocialLinks className="hero-socials" />
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src="/images/hero-ascii.png" alt="" width="1448" height="1086" />
        </div>
      </div>
    </section>
  )
}
