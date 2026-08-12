export type JourneyItem = {
  marker: string
  title: string
  description: string
  current?: boolean
}

export const journey: JourneyItem[] = [
  {
    marker: '2024–2028',
    title: 'СибГУТИ · ИВТ',
    description: 'Учусь по направлению «Информатика и вычислительная техника».',
  },
  {
    marker: 'С 2026',
    title: 'Школа 21',
    description:
      'Учусь в Школе 21, участвую в командных задачах и часто беру на себя роль тимлида. Рассматриваю дальнейшее развитие в ML или DevOps.',
  },
  {
    marker: '13–20 июля',
    title: 'Альфа-Будущее 2026',
    description:
      'Собрал команду из пяти человек и работал тимлидом над бизнес-кейсом Альфа-Банка. Команда успешно решила кейс отборочного тура.',
  },
  {
    marker: '15 июля — 13 августа',
    title: 'Yandex AI-Agents Security Week',
    description:
      'Прохожу программу по безопасности AI-агентов. Набрал проходной балл для получения сертификата.',
  },
  {
    marker: 'Сейчас',
    title: 'Python backend → ML / LLM',
    description:
      'Ищу стажировку в Python backend. Параллельно начинаю изучать ML/LLM и усиливаю английский для работы с технической документацией.',
    current: true,
  },
]
