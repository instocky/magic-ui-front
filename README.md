# Magic UI Front - Учебный проект

## 📋 Описание

Это учебный проект на **Next.js + Tailwind CSS + Magic UI**, демонстрирующий, как создавать современные веб-приложения с красивыми анимированными компонентами.

Проект показывает базовый рабочий процесс разработки:

- Инициализация Next.js приложения
- Интеграция Tailwind CSS
- Создание собственных компонентов с анимациями
- Горячая перезагрузка во время разработки
- Сборка для production

## 🚀 Быстрый старт

### Требования

- Node.js 18+
- npm или yarn
- Windows 10/11, macOS или Linux

### Способ 1: Клонирование существующего проекта

```bash
# Перейти в папку проекта
cd 1019_magic-ui-front

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev
```

Откроется на **http://localhost:3000**

### Способ 2: Создание проекта с нуля

**Автоматическая установка (с флагами):**

```bash
cd C:\Projects\_Others
npx create-next-app@latest 1019_magic-ui-front ^
  --typescript=false ^
  --eslint ^
  --tailwind ^
  --no-src-dir ^
  --app ^
  --no-turbopack ^
  --skip-install

cd 1019_magic-ui-front
npm install
npm run dev
```

**Или интерактивная установка:**

```bash
cd C:\Projects\_Others
npx create-next-app@latest 1019_magic-ui-front
```

При установке выберите опции:

```txt
✔ Would you like to use TypeScript? › No
✔ Would you like to use ESLint? › Yes
✔ Would you like to use Tailwind CSS? › Yes
✔ Would you like your code inside a `src/` directory? › No
✔ Would you like to use App Router? (recommended) › Yes
✔ Would you like to use Turbopack? (recommended) › No
✔ Would you like to customize the import alias? › No
```

После установки:

```bash
cd 1019_magic-ui-front
npm run dev
```

## 📁 Структура проекта

```
1019_magic-ui-front/
├── app/
│   ├── page.js              # Главная страница
│   ├── layout.js            # Макет приложения
│   └── globals.css          # Глобальные стили + анимации
├── components/
│   └── ripple-button.jsx    # Компонент кнопки с ripple эффектом
├── public/                  # Статичные файлы
├── package.json             # Зависимости проекта
├── tailwind.config.js       # Конфигурация Tailwind
├── next.config.js           # Конфигурация Next.js
└── README.md                # Этот файл
```

## 🎯 Что здесь изучается

### 1. **Next.js фреймворк**

- Структура файлов App Router
- Серверные и клиентские компоненты (`"use client"`)
- Горячая перезагрузка (Fast Refresh)

### 2. **Tailwind CSS**

- Utility-first CSS подход
- Адаптивный дизайн с `md:`, `sm:` брейкпоинтами
- Темизация и кастомная конфигурация

### 3. **React Hooks**

- `useState` для управления состоянием
- Обработка событий клика
- Динамическое рендеринга элементов

### 4. **CSS Анимации**

- `@keyframes` для определения анимаций
- `animation` свойство для применения
- Трансформации и opacity для эффектов

### 5. **Компонентная архитектура**

- Переиспользуемые компоненты
- Props для кастомизации
- Правильное разделение кода

## 💡 Ключевой компонент: RippleButton

### Что делает?

Кнопка с анимированным ripple-эффектом при клике (как в Material Design).

### Как работает?

```jsx
// 1. Отслеживаем клики на кнопку
const handleClick = (e) => {
  // 2. Вычисляем позицию клика относительно кнопки
  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  // 3. Создаём объект ripple с id, позицией и размером
  const ripple = { id, x, y, size };

  // 4. Добавляем в состояние для рендеринга
  setRipples([...ripples, ripple]);

  // 5. Удаляем после завершения анимации (600ms)
  setTimeout(() => removeRipple(id), 600);
};

// 6. Рендерим каждый ripple как span с CSS анимацией
<span className="animate-rippling" style={{ ... }} />
```

### Props

| Prop          | Тип       | Описание                                        |
| ------------- | --------- | ----------------------------------------------- |
| `children`    | ReactNode | Текст кнопки                                    |
| `className`   | string    | Дополнительные Tailwind классы                  |
| `rippleColor` | string    | RGB цвет ripple (по умолчанию: "255, 173, 216") |
| `...props`    | object    | Остальные HTML атрибуты кнопки                  |

### Пример использования

```jsx
import { RippleButton } from '@/components/ripple-button';

export default function Home() {
  return (
    <div>
      {/* Базовая кнопка */}
      <RippleButton>Click me</RippleButton>

      {/* С кастомным цветом */}
      <RippleButton rippleColor="59, 130, 246" className="bg-blue-600">
        Blue Button
      </RippleButton>

      {/* С обработчиком */}
      <RippleButton onClick={() => console.log('Clicked!')}>
        Action Button
      </RippleButton>
    </div>
  );
}
```

## 🔄 Процесс разработки

1. **Разработка** → Редактируете файлы → Браузер обновляется автоматически
2. **Отладка** → DevTools (F12) для инспекции HTML/CSS/JS
3. **Добавление компонентов** → Копируйте с https://magicui.design
4. **Тестирование** → Клиентские и серверные компоненты работают вместе
5. **Production** → `npm run build` → Оптимизированный бандл готов

## 📦 Сборка для production

```bash
# Создать оптимизированную сборку
npm run build

# Запустить production версию локально
npm start
```

Результат в папке `.next/` — готовая к деплою сборка.

## 🌐 Деплой

### На Vercel (рекомендуется для Next.js)

```bash
npm install -g vercel
vercel
```

### На Netlify

Просто коннектите GitHub репозиторий в Netlify dashboard.

### На свой сервер

Скопируйте папку `.next/` и запустите `npm start`.

## 🎓 Дальнейшее обучение

### Добавьте больше компонентов с Magic UI

- Перейдите на https://magicui.design
- Выбирайте понравившиеся компоненты
- Копируйте код в `components/`
- Импортируйте и используйте в `page.js`

### Практические задачи

- [ ] Создайте компонент "Animated Text"
- [ ] Добавьте компонент "Gradient Card"
- [ ] Сделайте страницу с несколькими компонентами
- [ ] Подключите простой API и выводите данные
- [ ] Создайте form с валидацией
- [ ] Добавьте темизацию (light/dark mode)

### Полезные ресурсы

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Magic UI Components](https://magicui.design)
- [React Documentation](https://react.dev)
- [CSS Animations Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

## 🛠️ Используемые технологии

| Технология   | Версия | Назначение                     |
| ------------ | ------ | ------------------------------ |
| Next.js      | 15.5.6 | React фреймворк для production |
| React        | 19     | Библиотека для UI              |
| Tailwind CSS | 4.x    | CSS фреймворк для стилизации   |
| Node.js      | 18+    | Runtime для JavaScript         |

## 📝 Заметки для учащихся

### Горячая перезагрузка (Hot Reload)

- Изменили файл → Браузер обновился автоматически
- Состояние компонента сохраняется (если возможно)
- Ошибки показываются сразу в браузере

### "use client"

- Компоненты с `"use client"` выполняются в браузере
- Может использовать React hooks (useState, useEffect и т.д.)
- Нужна для интерактивных компонентов

### Tailwind классы

- Вместо CSS файлов используем классы: `bg-black`, `text-white`, `px-8`
- Меньше CSS кода, быстрее разработка
- DevTools показывает, какой класс применён

### CSS Анимации vs JavaScript

- **CSS анимации** → более гладкие, производительнее
- **JavaScript анимации** → больше контроля
- В этом проекте используются оба подхода

## 🐛 Часто встречающиеся ошибки

### Проблема: Кнопка не реагирует на клик

**Решение:** Убедитесь, что в компоненте есть `"use client"` в начале файла.

### Проблема: Стили не применяются

**Решение:** Проверьте `tailwind.config.js` — там должны быть пути к файлам.

### Проблема: Ripple не видно

**Решение:** Убедитесь, что кнопка имеет `overflow: hidden` (в Tailwind это `overflow-hidden`).

## 📄 Лицензия

MIT - используйте в образовательных целях свободно.

## 💬 Вопросы?

Если что-то непонятно:

1. Прочитайте комментарии в коде
2. Откройте DevTools (F12) и инспектируйте элементы
3. Проверьте документацию технологий выше
4. Экспериментируйте с кодом!
