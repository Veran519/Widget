# Travel Widget

Виджет формы поиска авиабилетов. Встраивается на сторонние сайты через Web Component.

## Демо

Откройте `index.html` после сборки, чтобы увидеть виджет.

## Стек

- Vanilla JS (Web Components, Shadow DOM)
- Webpack 5
- PostCSS (autoprefixer)
- Без фреймворков и сторонних UI-библиотек

## Обоснование:

### Почему Web Components + Shadow DOM
- Изоляция стилей: виджет не ломает сайт-хозяина и наоборот.
- Нет зависимости от React/Vue: можно вставить на любой сайт.
- Нативная поддержка в браузерах.

### Почему без фреймворков
- Минимальный вес (~12 KB).
- Нет runtime-зависимостей.
- Проще встраивать.

### Почему Webpack и PostCSS
- Webpack — сборка одного бандла.
- PostCSS + autoprefixer — кроссбраузерность без SASS.

## Установка и запуск

Требования: Node.js 16+.

npm install
npm start        # dev-сервер на http://localhost:3000
npm run build    # production-сборка в dist/

## Использование на стороннем сайте

<script src="path/to/widget.js"></script>
<travel-widget></travel-widget>

### Кастомизация цветов

<travel-widget
  background-color="#1a1a1a"
  button-color="#ff6b00"
  text-color="#ffffff">
</travel-widget>

Или через CSS-переменные:

<style>
  travel-widget {
    --widget-bg: #1a1a1a;
    --widget-button-bg: #ff6b00;
    --widget-text: #ffffff;
  }
</style>

### Локализация

<travel-widget lang="en"></travel-widget>
<travel-widget lang="ru"></travel-widget>

Поддерживаемые языки: `en`, `ru`. По умолчанию — `en`.

## Структура проекта

project/
├── index.html
├── package.json
├── webpack.config.js
├── postcss.config.js
└── src/
    ├── widget.js
    ├── vocab.js
    |── icons/
    └── styles/
        └── widget.css

## Сложности при встраивании на сторонние сайты

1. **Конфликт CSS** — решается Shadow DOM.
2. **Наследуемые свойства** (font-family, color) — явно переопределены.
3. **Конфликт JS** — код изолирован в модуле, не пишет в window.
4. **Разные размеры контейнера** — min-width 200px, max-width 1024px, адаптив.
5. **Множественная вставка** — нет глобальных ID, каждый экземпляр независим.

## Важные характеристики виджетов

- Изоляция стилей и JS
- Малый вес бандла
- Простота вставки (один script + один тег)
- Адаптивность (200–1024px)
- Кастомизация (цвета, язык)
- Доступность (семантичный HTML)
- Кроссбраузерность
- Независимость экземпляров
