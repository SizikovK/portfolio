import { contacts } from '../../data/contacts'
import './SocialLinks.css'

type SocialLinksProps = {
  className?: string
}

export function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <ul className={`social-links ${className}`.trim()} aria-label="Социальные сети">
      {contacts.map((contact) => (
        <li key={contact.label}>
          <a
            href={contact.href}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={contact.ariaLabel}
          >
            {contact.label}
            <span className="external-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
