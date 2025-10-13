// Импортируем необходимые модули и компоненты
import { StrictMode } from 'react' // Строгий режим React для выявления потенциальных проблем
import { createRoot } from 'react-dom/client' // Метод для создания корневого элемента React 18
import './index.css' // Глобальные стили приложения
import App from './App.jsx' // Корневой компонент приложения
import { BrowserRouter } from 'react-router-dom' // Router для навигации между страницами
import { ClerkProvider } from '@clerk/clerk-react' // Провайдер аутентификации Clerk

// Получаем публичный ключ Clerk из переменных окружения
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Проверяем наличие публичного ключа
if (!PUBLISHABLE_KEY) {
  // Если ключ отсутствует, выбрасываем ошибку
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

// Создаем корневой элемент React и монтируем приложение
createRoot(document.getElementById('root')).render(
  // Оборачиваем приложение в провайдер Clerk для управления аутентификацией
  <ClerkProvider
    publishableKey={PUBLISHABLE_KEY} // Передаем публичный ключ
    afterSignOutUrl="/" // URL для перенаправления после выхода
    >
    {/* Обеспечиваем клиентскую маршрутизацию */}
    <BrowserRouter>
    {/* Рендерим основное приложение */}
      <App />
    </BrowserRouter>
  </ClerkProvider>,
)

