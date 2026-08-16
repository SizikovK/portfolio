export type ExperienceItem = {
  title: string
  eyebrow: string
  level: string
  summary: string
  detailLabel: string
  detail: string
  technologies: string[]
}

export const experience: ExperienceItem[] = [
  {
    title: 'Python backend и данные',
    eyebrow: 'Основное направление',
    level: 'Практический опыт',
    summary:
      'Разрабатываю API на FastAPI и работаю с реляционными базами данных в командных и собственных задачах.',
    detailLabel: 'Делал',
    detail:
      'Реализовывал эндпоинты, инициализацию базы и таблиц через SQLAlchemy, настраивал миграции схемы базы данных.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic'],
  },
  {
    title: 'AI / LLM-эксперименты',
    eyebrow: 'Самостоятельная практика',
    level: 'Развиваюсь',
    summary:
      'Собираю Telegram-ботов и проверяю на практике, как устроены RAG, инструменты и состояние AI-агента.',
    detailLabel: 'Пробовал',
    detail:
      'Создавал агента на LangGraph и LangChain, подключал ChromaDB для векторного поиска и SQLite для хранения сообщений.',
    technologies: ['Aiogram', 'LangChain', 'LangGraph', 'ChromaDB', 'SQLite', 'RAG'],
  },
  {
    title: 'Инженерная среда',
    eyebrow: 'Ежедневная работа',
    level: 'Linux-first',
    summary:
      'Использую Linux как основную систему для разработки и повседневной работы, Git — для ведения общей кодовой базы.',
    detailLabel: 'Подход',
    detail:
      'Практикую работу с базами данных почти в каждом проекте. Docker использую на базовом уровне и продолжаю осваивать.',
    technologies: ['Linux', 'Git', 'SQL', 'Docker · базово'],
  },
  {
    title: 'Команда и ответственность',
    eyebrow: 'Совместная разработка',
    level: 'Учусь у практиков',
    summary:
      'Работаю рядом с более опытными разработчиками и перенимаю практики реальной продуктовой разработки.',
    detailLabel: 'Контекст',
    detail:
      'Через совместную работу, обсуждение решений и обратную связь по коду знакомлюсь с требованиями к production-разработке.',
    technologies: ['планирование', 'task tracker', 'code review', 'коммуникация'],
  },
]
