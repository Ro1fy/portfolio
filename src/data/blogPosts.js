export const blogPosts = [
  {
    id: 1,
    slug: "getting-started-with-flutter",
    title: {
      ru: "Первые шаги с Flutter: моё путешествие в мобильную разработку",
      en: "Getting Started with Flutter: My Journey into Mobile Development"
    },
    excerpt: {
      ru: "Рассказываю, как начал изучать Flutter и создал своё первое мобильное приложение для ВУЗа.",
      en: "How I started learning Flutter and built my first university mobile app."
    },
    content: {
      ru: `# Первые шаги с Flutter

Когда я впервые открыл документацию Flutter, меня поразило, насколько универсальным может быть один фреймворк. Возможность писать код один раз и запускать его на iOS и Android — это мощно.

## Почему Flutter?

Я учусь по специальности «Информационные системы и программирование» и хотел попробовать мобильную разработку. Flutter привлек меня тем, что использует Dart — язык со строгой типизацией, похожий на Java/TypeScript.

## Первый проект

Моим первым проектом стало приложение для ВУза ИжГТУ. Оно включало:
- Новостную ленту для абитуриентов
- Информацию о факультетах
- ИИ-ассистент для ответов на вопросы

## Что я изучил

- Работу с виджетами и состоянием
- Навигацию между экранами
- Интеграцию с API
- Основы UI/UX для мобильных устройств

Flutter оказался отличным выбором для старта в мобильной разработке.`,
      en: `# Getting Started with Flutter

When I first opened the Flutter documentation, I was amazed at how versatile a single framework could be. The ability to write code once and run it on both iOS and Android is powerful.

## Why Flutter?

I'm studying "Information Systems and Programming" and wanted to try mobile development. Flutter attracted me because it uses Dart — a strongly typed language similar to Java/TypeScript.

## First Project

My first project was a university app for ISTU. It included:
- A news feed for applicants
- Information about faculties
- An AI assistant for answering questions

## What I Learned

- Working with widgets and state management
- Navigation between screens
- API integration
- UI/UX basics for mobile devices

Flutter turned out to be a great choice for starting in mobile development.`
    },
    date: "2025-03-15",
    tags: ["Flutter", "Dart", "Mobile"],
    readTime: { ru: "5 мин", en: "5 min" }
  },
  {
    id: 2,
    slug: "python-voice-recognition",
    title: {
      ru: "Распознавание речи на Python: управляем компьютером голосом",
      en: "Speech Recognition in Python: Voice-Controlled Computer"
    },
    excerpt: {
      ru: "Делюсь опытом создания программы голосового управления ПК — от выбора библиотек до реализации.",
      en: "Sharing my experience building a voice-controlled PC application — from library selection to implementation."
    },
    content: {
      ru: `# Распознавание речи на Python

Идея управлять компьютером голосом казалась чем-то из научной фантастики. Но с современными Python-библиотеками это стало реальностью.

## Выбор инструментов

Для распознавания речи я использую:
- **SpeechRecognition** — обёртка над различными API распознавания
- **PyAudio** — для захвата звука с микрофона
- Стандартный **subprocess** для выполнения команд

## Архитектура приложения

Приложение работает в нескольких потоках:
1. Захват аудио с микрофона
2. Отправка на распознавание
3. Парсинг команды
4. Выполнение действия

## Сложности

- Фоновый шум влияет на точность
- Нужна хорошая обработка ошибок
- Русскоязычное распознавание требует дополнительных настроек

## Плны

Хочу добавить машинное обучение для улучшения точности и поддержку большего количества команд.`,
      en: `# Speech Recognition in Python

The idea of controlling a computer by voice seemed like something from science fiction. But with modern Python libraries, it became reality.

## Choosing Tools

For speech recognition I use:
- **SpeechRecognition** — a wrapper over various recognition APIs
- **PyAudio** — for microphone audio capture
- Standard **subprocess** for executing commands

## Application Architecture

The app works in several threads:
1. Audio capture from microphone
2. Sending for recognition
3. Command parsing
4. Action execution

## Challenges

- Background noise affects accuracy
- Good error handling is needed
- Russian language recognition requires extra configuration

## Plans

I want to add machine learning for improved accuracy and support more commands.`
    },
    date: "2025-04-02",
    tags: ["Python", "Speech Recognition", "AI"],
    readTime: { ru: "7 мин", en: "7 min" }
  },
  {
    id: 3,
    slug: "react-vs-vanilla-js",
    title: {
      ru: "React vs Vanilla JS: когда стоит использовать фреймворк",
      en: "React vs Vanilla JS: When to Use a Framework"
    },
    excerpt: {
      ru: "Сравниваю подход к созданию сайтов на чистом JavaScript и с React — на основе своего опыта.",
      en: "Comparing website development with pure JavaScript vs React — based on my experience."
    },
    content: {
      ru: `# React vs Vanilla JS

Начав с HTML, CSS и JavaScript, я постепенно перешёл на React. Вот что я понял о том, когда фреймворк нужен, а когда можно обойтись без него.

## Когда хватает Vanilla JS

- Лендинги и одностраничные сайты
- Простые интерактивные элементы
- Быстрые прототипы
- Когда важна максимальная производительность

## Когда нужен React

- Многостраничные приложения (SPA)
- Частые обновления интерфейса
- Работа с состоянием
- Командная разработка

## Мой опыт

Я делал лендинги на чистом JS и SPA на React. React даёт:
- Компонентный подход
- Удобную работу с состоянием
- Экосистему библиотек
- Горячую перезагрузку (HMR)

## Вывод

Не нужно бояться фреймворков, но и не стоит использовать их везде. Инструмент должен соответствовать задаче.`,
      en: `# React vs Vanilla JS

Starting with HTML, CSS, and JavaScript, I gradually moved to React. Here's what I learned about when a framework is needed and when you can do without it.

## When Vanilla JS is Enough

- Landing pages and single-page sites
- Simple interactive elements
- Quick prototypes
- When maximum performance is critical

## When You Need React

- Single Page Applications (SPA)
- Frequent UI updates
- State management
- Team development

## My Experience

I built landing pages with pure JS and SPAs with React. React provides:
- Component approach
- Convenient state management
- Library ecosystem
- Hot Module Replacement (HMR)

## Conclusion

Don't be afraid of frameworks, but don't use them everywhere. The tool should match the task.`
    },
    date: "2025-04-10",
    tags: ["React", "JavaScript", "Web"],
    readTime: { ru: "6 мин", en: "6 min" }
  }
];
