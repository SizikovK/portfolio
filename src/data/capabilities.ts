export type Capability = {
  name: string
  percent: number
}

export type CapabilityGroup = {
  id: 'backend' | 'data' | 'ai' | 'tools'
  title: string
  description: string
  items: Capability[]
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'backend',
    title: 'Backend и API',
    description: 'Python-сервисы и взаимодействие по HTTP.',
    items: [
      { name: 'Python', percent: 68 },
      { name: 'FastAPI', percent: 63 },
      { name: 'REST API / HTTP', percent: 66 },
    ],
  },
  {
    id: 'data',
    title: 'Данные и хранение',
    description: 'Реляционные базы, ORM и управление схемой.',
    items: [
      { name: 'PostgreSQL / SQL', percent: 55 },
      { name: 'SQLAlchemy', percent: 58 },
      { name: 'Alembic', percent: 48 },
      { name: 'SQLite', percent: 60 },
    ],
  },
  {
    id: 'ai',
    title: 'AI и инструменты',
    description: 'Агенты, RAG и Telegram-интерфейсы.',
    items: [
      { name: 'LangGraph', percent: 42 },
      { name: 'LangChain', percent: 40 },
      { name: 'ChromaDB / RAG', percent: 45 },
      { name: 'Aiogram', percent: 58 },
    ],
  },
  {
    id: 'tools',
    title: 'Среда и процессы',
    description: 'Инструменты ежедневной разработки и командной работы.',
    items: [
      { name: 'Linux', percent: 78 },
      { name: 'Git', percent: 72 },
      { name: 'Docker / Compose', percent: 32 },
      { name: 'Coding agents', percent: 74 },
    ],
  },
]
