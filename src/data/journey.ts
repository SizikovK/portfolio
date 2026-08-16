export type JourneyItem = {
  marker: string
  title: string
  description: string
  current?: boolean
  entries?: Array<{
    marker: string
    title: string
    description: string
  }>
}

export const journey: JourneyItem[] = [
  {
    marker: '2024–2028',
    title: 'СибГУТИ · ИВТ',
    description: 'Учусь по направлению «Информатика и вычислительная техника».',
  },
  {
    marker: 'С 2026',
    title: 'Школа 21 от Сбера',
    description:
      'Учусь в Школе 21, участвую в командных задачах и часто беру на себя роль тимлида. Рассматриваю дальнейшее развитие в ML или DevOps.',
  },
  {
    marker: '2026',
    title: 'Хакатоны',
    description: 'Командные интенсивы, бизнес-кейсы и практика работы в ограниченные сроки.',
    entries: [
      {
        marker: '13–20 июля',
        title: 'Альфа-Будущее 2026',
        description: 'Собрал команду из пяти человек и успешно решил бизнес-кейс от Альфа-Банка в роли тимлида.',
      },
      {
        marker: '15 июля — 13 августа',
        title: 'Yandex AI-Agents Security Week',
        description: 'Прошёл программу по безопасности AI-агентов и получил сертификат от Яндекса.',
      },
    ],
  },
  {
    marker: 'Сейчас',
    title: 'Python backend / ML / LLM Engineer',
    description:
      'Активно изучаю Python backend, ML и LLM. Работаю над pet-проектами с товарищами, участвую в хакатонах и развиваюсь как специалист.',
    current: true,
  },
]
