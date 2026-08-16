import type { CSSProperties } from 'react'
import './HeroCommands.css'

const commands = [
  'pytest -q',
  'git pull --rebase',
  'docker compose up -d',
  'alembic upgrade head',
  'uvicorn app.main:app',
  'ruff check .',
  'git status',
  'python -m pytest',
]

export function HeroCommands() {
  return (
    <div className="hero-commands" aria-hidden="true">
      {commands.map((command, index) => (
        <code
          key={command}
          style={{ '--command-index': index } as CSSProperties}
        >
          {command}
        </code>
      ))}
    </div>
  )
}
