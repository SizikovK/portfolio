export type Capability = {
  name: string
  level: 'основной инструмент' | 'практика в проектах' | 'экспериментирую' | 'базово'
  strength: number
}

export type CapabilityGroup = {
  id: 'backend' | 'ai'
  title: string
  description: string
  items: Capability[]
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'backend',
    title: 'Backend и данные',
    description: 'Инструменты, с которыми решал практические задачи.',
    items: [
      { name: 'Python / FastAPI', level: 'основной инструмент', strength: 4 },
      { name: 'PostgreSQL / SQLAlchemy', level: 'практика в проектах', strength: 3 },
      { name: 'Alembic', level: 'практика в проектах', strength: 3 },
      { name: 'Docker', level: 'базово', strength: 1 },
    ],
  },
  {
    id: 'ai',
    title: 'AI и инструменты',
    description: 'Самостоятельная практика и направления развития.',
    items: [
      { name: 'LangGraph / LangChain', level: 'экспериментирую', strength: 2 },
      { name: 'ChromaDB / RAG', level: 'экспериментирую', strength: 2 },
      { name: 'Aiogram / SQLite', level: 'практика в проектах', strength: 3 },
      { name: 'Linux / Git', level: 'основной инструмент', strength: 4 },
    ],
  },
]
