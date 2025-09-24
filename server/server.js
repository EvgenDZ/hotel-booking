// Импорт необходимых модулей
import express from "express" // Фреймворк для создания сервера
import "dotenv/config" // Загрузка переменных окружения из .env файла
import cors from "cors" // Middleware для обработки CORS (Cross-Origin Resource Sharing)
import connectDB from "./configs/db.js" // Функция подключения к базе данных
import { clerkMiddleware } from '@clerk/express' // Middleware для аутентификации через Clerk
import clerkWebhooks from "./controllers/clerkWebhooks.js" // Обработчик вебхуков от Clerk
import userRouter from "./routes/userRoutes.js" // Роутер для работы с пользователями
import cookieParser from "cookie-parser"

// Инициализация приложения
const app = express()

// Middleware для разрешения кросс-доменных запросов
// Позволяет обрабатывать запросы с других доменов
app.use(cors()) //Enable Cross-Origin Resource Sharing


// Подключение к базе данных MongoDB
connectDB()


// Middleware для парсинга JSON данных из запросов
// Преобразует тело запроса в формате JSON в JavaScript объект
app.use(express.json())

// Middleware для аутентификации через Clerk.com
// Добавляет объект auth в запрос (req.auth) с информацией о пользователе
app.use(clerkMiddleware())

// Регистрация маршрута для обработки вебхуков от Clerk
// Вебхуки - это HTTP callback, которые Clerk отправляет при событиях (создание пользователя и т.д.)
app.use("/api/clerk", clerkWebhooks)

// Базовый маршрут для проверки работы API
// Возвращает простой текст при обращении к корневому пути
app.get('/', (req, res)=> res.send("API is working"))
app.use('/api/user', userRouter)

// Определение порта сервера
// Использует порт из переменной окружения PORT или 3000 по умолчанию
const PORT = process.env.PORT || 3000

// Запуск сервера на указанном порту
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))

