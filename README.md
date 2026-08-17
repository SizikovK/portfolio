# Мой Персональный сайт

**Сайт:** [sizikovk.github.io/portfolio](https://sizikovk.github.io/portfolio/)

## Стек

- React
- TypeScript
- Vite
- CSS

## Локальный запуск

Понадобятся Node.js 24 и npm.

```bash
git clone git@github.com:SizikovK/portfolio.git
cd portfolio
npm ci
npm run dev
```

После запуска сайт будет доступен по адресу, который Vite выведет в терминале —
обычно `http://localhost:5173`.

## Команды

```bash
npm run dev      # запустить dev-сервер
npm run lint     # проверить код ESLint
npm run build    # собрать production-версию в dist
npm run preview  # локально открыть production-сборку
```

Перед отправкой изменений рекомендуется выполнить:

```bash
npm run lint
npm run build
```

## Контактная форма

По умолчанию форма отправляет сообщения в Yandex Cloud Function. Другой адрес
можно указать в `.env.local`:

```env
VITE_CONTACT_API_URL=https://functions.yandexcloud.net/function-id
```

Формат запроса:

```http
POST /
Content-Type: application/json
```

```json
{
  "name": "Иван",
  "replyTo": "@username или user@example.com",
  "message": "Текст сообщения"
}
```

Успешный ответ:

```json
{
  "ok": true
}
```

Сообщение записывается в Yandex Message Queue и затем асинхронно доставляется
в Telegram отдельной Cloud Function.

## Деплой

GitHub Actions проверяет и собирает проект после каждого push в `main`, а затем
публикует содержимое `dist` на GitHub Pages.

```bash
git add .
git commit -m "Описание изменений"
git push origin main
```

Статус публикации можно посмотреть во вкладке **Actions** репозитория.
