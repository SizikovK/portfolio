export type ExperienceItem = {
  title: string
  role: string
  kind: string
  description: string
  contribution: string
  context: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'GeoRunner',
    role: 'Backend Developer',
    kind: 'Командный проект',
    description: 'Приложение для спортивного ориентирования по картам.',
    contribution:
      'Участвую в разработке backend, распределении задач и обсуждении общей архитектуры проекта.',
    context: ['небольшая команда', 'общая кодовая база', 'task tracker'],
  },
  {
    title: 'Mina',
    role: 'Independent Developer',
    kind: 'Собственный AI-проект',
    description:
      'Telegram AI assistant и площадка для самостоятельных инженерных экспериментов.',
    contribution:
      'Исследую работу контекста, RAG, хранение данных, MCP, подключение инструментов и AI agents.',
    context: ['RAG', 'контекст', 'MCP', 'AI agents'],
  },
]
