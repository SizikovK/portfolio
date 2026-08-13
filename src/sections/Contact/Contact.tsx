import { LuGithub, LuMail, LuMessageCircle, LuSend } from 'react-icons/lu'
import { SectionHeading } from '../../components/Section/SectionHeading'
import './Contact.css'

const contactItems = [
  { label: 'Email', value: 'email@example.com', href: 'mailto:email@example.com', icon: LuMail },
  { label: 'Telegram', value: '@username', href: 'https://t.me/username', icon: LuMessageCircle },
  { label: 'GitHub', value: 'github.com/username', href: 'https://github.com/username', icon: LuGithub },
]

export function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading" data-reveal>
      <SectionHeading id="contact-heading" index="04">Контакты</SectionHeading>
      <div className="contact-info">
        <div>
          <p className="contact-title">Ищу стажировку в Python backend.</p>
          <p className="contact-copy">
            Интересуют команды, где можно работать с API и базами данных, укреплять backend-базу и постепенно развиваться в ML/LLM.
          </p>
        </div>
        <address className="contact-list">
            {contactItems.map(({ label, value, href, icon: Icon }) => (
              <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={label}>
                <span className="contact-icon" aria-hidden="true"><Icon /></span>
                <span><small>{label}</small>{value}</span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
        </address>
      </div>

      <form className="contact-form" aria-labelledby="message-title" onSubmit={(event) => event.preventDefault()}>
          <div className="contact-form-heading">
            <span className="contact-form-icon" aria-hidden="true"><LuSend /></span>
            <div>
              <h3 id="message-title">Отправить сообщение</h3>
              <p>Форма подготовлена к подключению Telegram-бота.</p>
            </div>
          </div>
          <label className="contact-field">
            <span className="contact-field-index">01</span>
            <span className="contact-field-control"><span>Имя</span><input type="text" name="name" autoComplete="name" placeholder="Как к вам обращаться" /></span>
          </label>
          <label className="contact-field">
            <span className="contact-field-index">02</span>
            <span className="contact-field-control"><span>Контакт для ответа</span><input type="text" name="replyTo" placeholder="Telegram или email" /></span>
          </label>
          <label className="contact-field contact-field--message">
            <span className="contact-field-index">03</span>
            <span className="contact-field-control"><span>Сообщение</span><textarea name="message" rows={4} placeholder="О чём хотите поговорить" /></span>
          </label>
          <button type="submit" disabled>
            <LuSend aria-hidden="true" />
            Скоро заработает
          </button>
      </form>
      <footer className="site-footer">
        <span>Константин Сизиков</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  )
}
