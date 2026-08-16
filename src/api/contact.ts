export type ContactRequest = {
  name: string
  replyTo: string
  message: string
}

export type ContactResponse = {
  ok: true
  messageId?: string
}

export type ContactErrorResponse = {
  ok: false
  error: string
  fieldErrors?: Partial<Record<keyof ContactRequest, string>>
}

export const contactConstraints = {
  name: { minLength: 2, maxLength: 80 },
  replyTo: { minLength: 3, maxLength: 120 },
  message: { minLength: 10, maxLength: 2000 },
} as const

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL?.trim()
  || 'https://functions.yandexcloud.net/d4ejoodgt0smv96u1g1q'

export async function sendContactMessage(payload: ContactRequest): Promise<ContactResponse> {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const result = await response.json().catch(() => null) as ContactResponse | ContactErrorResponse | null

  if (!response.ok || !result?.ok) {
    const errorMessage = result && !result.ok
      ? result.error
      : 'Не удалось отправить сообщение'

    throw new Error(errorMessage)
  }

  return result
}
