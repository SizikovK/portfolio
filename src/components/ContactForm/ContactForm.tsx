import { useState, type FormEvent } from 'react'
import { LuArrowRight, LuCheck, LuLoaderCircle, LuTriangleAlert } from 'react-icons/lu'
import { contactConstraints, sendContactMessage, type ContactRequest } from '../../api/contact'
import './ContactForm.css'

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionStatus>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const payload: ContactRequest = {
      name: String(data.get('name') ?? '').trim(),
      replyTo: String(data.get('replyTo') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
    }

    setStatus('sending')

    try {
      await sendContactMessage(payload)
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      className={`contact-dispatch contact-dispatch--${status}`}
      onSubmit={handleSubmit}
      onChange={() => {
        if (status === 'success' || status === 'error') setStatus('idle')
      }}
      aria-labelledby="contact-form-title"
    >
      <header className="contact-dispatch-heading">
        <h3 id="contact-form-title">Отправить сообщение</h3>
        <p>Сообщение будет передано мне в Telegram.</p>
      </header>

      <div className={`dispatch-route dispatch-route--${status}`} aria-label="Маршрут сообщения: вы, Telegram, я">
        <span>Вы</span><i aria-hidden="true" /><span>Telegram</span><i aria-hidden="true" /><span>Я</span>
      </div>

      <div className="dispatch-fields">
        <label>
          <span>Имя</span>
          <input name="name" autoComplete="name" minLength={contactConstraints.name.minLength} maxLength={contactConstraints.name.maxLength} placeholder="Как к вам обращаться" required />
        </label>
        <label>
          <span>Контакт для ответа</span>
          <input name="replyTo" autoComplete="email" minLength={contactConstraints.replyTo.minLength} maxLength={contactConstraints.replyTo.maxLength} placeholder="Telegram или email" required />
        </label>
        <label>
          <span>Сообщение</span>
          <textarea name="message" rows={3} minLength={contactConstraints.message.minLength} maxLength={contactConstraints.message.maxLength} placeholder="О чём хотите поговорить" required />
        </label>
      </div>

      <button className="dispatch-button" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Сообщение в пути' : status === 'success' ? 'Отправить ещё' : 'Передать сообщение'}
        {status === 'sending' ? <LuLoaderCircle className="dispatch-spinner" aria-hidden="true" /> : <LuArrowRight aria-hidden="true" />}
      </button>

      <div className="dispatch-feedback" aria-live="polite">
        {status === 'success' && (
          <div className="dispatch-feedback-message is-success" role="status">
            <LuCheck aria-hidden="true" />
            <span><strong>Спасибо, сообщение дошло.</strong> Отвечу по указанному контакту.</span>
          </div>
        )}
        {status === 'error' && (
          <div className="dispatch-feedback-message is-error" role="alert">
            <LuTriangleAlert aria-hidden="true" />
            <span><strong>Сообщение не отправилось.</strong> Попробуйте ещё раз или напишите напрямую.</span>
          </div>
        )}
      </div>
    </form>
  )
}
