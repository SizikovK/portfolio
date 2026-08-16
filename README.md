# Персональный сайт Константина Сизикова

Одностраничный сайт-визитка на React, TypeScript и Vite.

## Локальный запуск

```bash
npm install
npm run dev
```

Проверки проекта:

```bash
npm run lint
npm run build
```

## API контактной формы

Форма отправляет сообщения в Yandex Cloud Function:

```text
https://functions.yandexcloud.net/d4ejoodgt0smv96u1g1q
```

Адрес можно переопределить при сборке через переменную окружения:

```env
VITE_CONTACT_API_URL=https://functions.yandexcloud.net/function-id
```

Клиент отправляет запрос:

```http
POST https://functions.yandexcloud.net/d4ejoodgt0smv96u1g1q
Content-Type: application/json
```

Перед `POST` браузер отправляет CORS-запрос `OPTIONS`. Опубликованная версия
функции должна отвечать на него статусом `204` и заголовками
`Access-Control-Allow-Origin`, `Access-Control-Allow-Methods` и
`Access-Control-Allow-Headers`.

Тело запроса:

```json
{
  "name": "Иван",
  "replyTo": "@username или user@example.com",
  "message": "Текст сообщения"
}
```

Ограничения полей:

| Поле | Тип | Ограничения |
| --- | --- | --- |
| `name` | string | от 2 до 80 символов |
| `replyTo` | string | от 3 до 120 символов |
| `message` | string | от 10 до 2000 символов |

Успешный ответ — HTTP `200`:

```json
{
  "ok": true
}
```

Ответ означает, что входная функция провалидировала запрос и записала
сообщение в Yandex Message Queue. Доставка в Telegram выполняется асинхронно
отдельной функцией через триггер очереди.

Ошибка валидации — HTTP `400` или `422`:

```json
{
  "ok": false,
  "error": "Проверьте заполненные поля",
  "fieldErrors": {
    "replyTo": "Укажите Telegram или email"
  }
}
```

Ошибка записи в очередь — HTTP `502` или `503`:

```json
{
  "ok": false,
  "error": "Не удалось поставить сообщение в очередь"
}
```

Backend:

- принимать только JSON и возвращать `Content-Type: application/json`;
- проверять длину и тип всех полей повторно на сервере;
- ограничивать частоту запросов и защищать форму от спама;
- сериализовать тело сообщения в очередь через `json.dumps`;
- разрешить CORS только для домена сайта;
- не возвращать статические ключи Message Queue или внутренние тексты исключений.

Вторая функция получает сообщение через триггер Message Queue и доставляет
его в Telegram. При ошибке она должна завершаться исключением, чтобы триггер
вернул сообщение в очередь после тайм-аута видимости.
