export type JourneyItem = {
  marker: string
  title: string
  description: string
  current?: boolean
}

export const journey: JourneyItem[] = [
  {
    marker: '3 курс',
    title: 'СибГУТИ',
    description: 'Обучение по направлению, связанному с разработкой программного обеспечения.',
  },
  {
    marker: 'Практика',
    title: 'Командные и собственные проекты',
    description: 'Backend-разработка, общая кодовая база и первые системные AI-эксперименты.',
  },
  {
    marker: '2026',
    title: 'Альфа-Будущее',
    description:
      'Участвовал в командном решении бизнес-кейса Альфа-Банка. Команда успешно решила кейс отборочного тура.',
  },
  {
    marker: 'Этап',
    title: 'Yandex / YSDA',
    description: 'Набрал проходной балл для получения сертификата.',
  },
  {
    marker: 'Этап',
    title: 'Школа 21',
    description: 'Прошёл отбор и поступил в Школу 21.',
  },
  {
    marker: 'Сейчас',
    title: 'Backend → ML / LLM',
    description: 'Развиваю backend-базу и постепенно углубляюсь в ML, LLM и PyTorch.',
    current: true,
  },
]
