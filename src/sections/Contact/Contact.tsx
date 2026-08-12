import { SectionHeading } from '../../components/Section/SectionHeading'
import { SocialLinks } from '../../components/SocialLinks/SocialLinks'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading" data-reveal>
      <SectionHeading id="contact-heading" index="04">Контакты</SectionHeading>
      <p className="contact-title">Ищу стажировку в Python backend.</p>
      <p className="contact-copy">
        Рассматриваю команды, где смогу работать над реальными задачами, укреплять backend-базу и постепенно развиваться в ML/LLM. Сейчас ссылки работают как временные заглушки.
      </p>
      <SocialLinks className="contact-links" />
      <footer className="site-footer">
        <span>Константин Сизиков</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  )
}
