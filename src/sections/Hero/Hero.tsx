import { SocialLinks } from '../../components/SocialLinks/SocialLinks'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <p className="hero-kicker">Разработчик · Новосибирск</p>
      <h1 id="hero-title">Константин<br />Сизиков</h1>
      <p className="hero-role">Python Backend Developer</p>
      <p className="hero-intro">
        Студент-разработчик. Работаю с Python backend, участвую в командной разработке и изучаю ML/LLM.
      </p>
      <SocialLinks className="hero-socials" />
      <a className="scroll-cue" href="#about">
        <span aria-hidden="true">↓</span> Обо мне
      </a>
    </section>
  )
}
