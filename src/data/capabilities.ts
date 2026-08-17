export type SkillLevel = 1 | 2 | 3 | 4

export type CapabilityGroupId =
  | 'core'
  | 'data'
  | 'architecture'
  | 'tools'
  | 'ai'
  | 'team'

export type TechnicalCapability = {
  name: string
  level: SkillLevel
}

export type SoftCapability = {
  name: string
  evidence: string
}

type CapabilityGroupBase = {
  id: CapabilityGroupId
  title: string
  description: string
}

export type TechnicalCapabilityGroup = CapabilityGroupBase & {
  kind: 'technical'
  items: TechnicalCapability[]
}

export type SoftCapabilityGroup = CapabilityGroupBase & {
  kind: 'soft'
  items: SoftCapability[]
}

export type CapabilityGroup = TechnicalCapabilityGroup | SoftCapabilityGroup

export const skillLevels: Record<SkillLevel, { label: string; description: string }> = {
  1: {
    label: 'Изучаю',
    description: 'Знаком с основными понятиями и выполняю задачи по документации или готовому примеру.',
  },
  2: {
    label: 'Базовый',
    description: 'Самостоятельно решаю простые задачи, обращаясь к документации в нестандартных случаях.',
  },
  3: {
    label: 'Практический',
    description: 'Применял в проектах, самостоятельно решаю типовые задачи и разбираюсь с частыми ошибками.',
  },
  4: {
    label: 'Уверенный',
    description: 'Самостоятельно проектирую решения, разбираюсь со сложными ошибками и могу объяснить подход.',
  },
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'core',
    kind: 'technical',
    title: 'Основной стек',
    description: 'Python и инструменты backend-разработки.',
    items: [
      { name: 'Python', level: 3 },
      { name: 'FastAPI', level: 3 },
      { name: 'SQLAlchemy', level: 3 },
      { name: 'Alembic', level: 2 },
    ],
  },
  {
    id: 'data',
    kind: 'technical',
    title: 'Данные и базы данных',
    description: 'Хранение, запросы и модели данных.',
    items: [
      { name: 'SQL', level: 2 },
      { name: 'PostgreSQL', level: 2 },
      { name: 'SQLite', level: 3 },
      { name: 'MongoDB', level: 2 },
    ],
  },
  {
    id: 'architecture',
    kind: 'technical',
    title: 'Backend и архитектура',
    description: 'API, авторизация и устройство сервисов.',
    items: [
      { name: 'REST API', level: 3 },
      { name: 'Клиент-серверная архитектура', level: 3 },
      { name: 'JWT-аутентификация', level: 2 },
      { name: 'Проектирование моделей данных', level: 2 },
    ],
  },
  {
    id: 'tools',
    kind: 'technical',
    title: 'Инструменты и среда',
    description: 'Рабочая среда и инфраструктура.',
    items: [
      { name: 'Git', level: 3 },
      { name: 'Docker', level: 2 },
      { name: 'Linux', level: 3 },
      { name: 'VS Code / PyCharm', level: 3 },
    ],
  },
  {
    id: 'ai',
    kind: 'technical',
    title: 'AI/LLM-интеграции',
    description: 'Агенты, инструменты и поиск по данным.',
    items: [
      { name: 'LangChain', level: 3 },
      { name: 'LangGraph', level: 2 },
      { name: 'MCP', level: 3 },
      { name: 'RAG', level: 2 },
    ],
  },
  {
    id: 'team',
    kind: 'soft',
    title: 'Командная работа',
    description: 'Взаимодействие и ответственность.',
    items: [
      {
        name: 'Работа в команде',
        evidence: 'Согласовываю решения, учитываю мнения участников и поддерживаю работу над общим результатом.',
      },
      {
        name: 'Лидерство',
        evidence: 'Беру ответственность за результат, помогаю определить направление и организовать взаимодействие.',
      },
      {
        name: 'Коммуникация',
        evidence: 'Ясно формулирую мысли, уточняю детали, аргументирую решения и спокойно принимаю обратную связь.',
      },
      {
        name: 'Адаптивность и обучаемость',
        evidence: 'Быстро погружаюсь в задачи, осваиваю нужные инструменты и меняю подход вместе с требованиями.',
      },
    ],
  },
]
