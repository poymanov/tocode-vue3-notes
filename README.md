# Notes

Приложение для управления списком заметок. Заметки можно добавлять и удалять. Также для каждой заметки можно выбрать релевантные тэги.

[Демо](https://tocode-vue3-notes.vercel.app).

## Особенности

- Vue 3 + Vite
- Полная настройка VUEX
- Хранение заметок в localStorage
- Передача данных между компонентами
- Разделение логики по компонентам
- Фильтрация Элементов
- Создание глобальных конфигов

## Установка

Для запуска приложения требуется **Docker** и **Docker Compose**.

Для инициализации приложения выполнить команду:
```
make init
```

## Управление

Запуск:
```
make up
```

Остановка приложения:

```
make down
```

## Интерфейсы

Приложение - http://localhost:8080

## Качество кода

```
make frontend-lint
```

## Цель проекта

Код написан в образовательных целях в рамках курса [Vue.js 3 с нуля до результата](https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/).
