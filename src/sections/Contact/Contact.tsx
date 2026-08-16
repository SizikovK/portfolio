import { LuGithub, LuMail, LuMessageCircle } from 'react-icons/lu'
import { ContactForm } from '../../components/ContactForm/ContactForm'
import { SectionHeading } from '../../components/Section/SectionHeading'
import { contacts } from '../../data/contacts'
import './Contact.css'

const contactIcons = {
  Email: LuMail,
  Telegram: LuMessageCircle,
  GitHub: LuGithub,
} as const

export function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading" data-reveal>
      <SectionHeading id="contact-heading" index="04">Контакты</SectionHeading>
      <div className="contact-info">
        <div>
          <p className="contact-title">Давайте знакомиться :)</p>
          <p className="contact-copy">
            Для связи — email и Telegram. Код и текущие эксперименты собраны на GitHub.
          </p>
        </div>
        <address className="contact-list">
            {contacts.map(({ label, value, href }) => {
              const Icon = contactIcons[label]
              return (
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={label}>
                <span className="contact-icon" aria-hidden="true"><Icon /></span>
                <span><small>{label}</small>{value}</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
              )
            })}
        </address>
      </div>

      <ContactForm />
      <footer className="site-footer">
        <span>Константин Сизиков</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  )
}
