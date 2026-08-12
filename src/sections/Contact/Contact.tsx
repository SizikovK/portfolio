import { SectionHeading } from '../../components/Section/SectionHeading'
import { SocialLinks } from '../../components/SocialLinks/SocialLinks'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading" data-reveal>
      <SectionHeading id="contact-heading" index="04">Контакты</SectionHeading>
      <p className="contact-title">Открыт к знакомству и совместной работе.</p>
      <p className="contact-copy">
        Сейчас ссылки работают как временные заглушки. Актуальные контакты появятся здесь позже.
      </p>
      <SocialLinks className="contact-links" />
      <footer className="site-footer">
        <span>Константин Сизиков</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  )
}
