<h1 align="center"> Как запустить? </h1>

___

```

npm i - Установить зависимости

npm run start:dev - Запустить сервер и фронтенд проекта в dev режиме на webpack dev server

или

npm run start:vite:dev - Запустить сервер и фронтенд проекта в dev режиме на vite
```


<h1 align="center"> Скрипты </h1>

___

### _Запуск_
- `npm run start` - Запускает проект на webpack dev server
- `npm run start:vite` - Запускает проект на vite
- `npm run start:dev` - Запускает проект на webpack dev server + backend (json-server)
- `npm run start:dev:vite` - Запускает проект на vite + backend (json-server)
- `npm run start:dev:server` - Запуск backend (json-server)
### _Сборка_
- `npm run build:prod` - Собирает проект в продакшн
- `npm run build:dev` - Собирает проект (не минимизирует)
### _Линтеры_
- `npm run lint:ts` - Проверяет линтером .ts файлы
- `npm run lint:ts:fix` - Исправляет линтером .ts файлы
- `npm run lint:scss` - Проверяет линтером .scss файлы
- `npm run lint:scss:fix` - Исправляет линтером .scss файлы
### _Тесты_
- `npm run test:unit` - Запускает unit тесты с помощью jest
- `npm run test:ui` - Запускает скриншотные тесты с помощью loki
- `npm run test:ui:ok` - Подтверждает новые или изменёные скриншоты
- `npm run test:ui:ci` - Запускает скриншотные тесты в CI
- `npm run test:ui:report` - Создаёт полный отчёт для скриншотных тестов
- `npm run test:ui:json` - Создаёт JSON отчёт для скриншотных тестов
- `npm run test:ui:html` - Создаёт HTML отчёт для скриншотных тестов
### _Прочие приколы_
- `npm run storybook` - Запускает Storybook
- `npm run storybook:build` - Собирает storybook
- `npm run prepare` - Прекоммит хуки
- `npm run generate:slice` - Скрипт для создания FSD слайсов

<h1 align="center"> Архитектура проекта </h1>

---

>_Проект написан в соответствии с методологией [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)_


<h1 align="center"> Работа с переводами </h1>

---
Используется библиотека [i18next](https://react.i18next.com/) для работы с переводами.
>_Файлы с переводами хранятся в public/locales._

Для комфортной работы лучше установить [плагин](https://github.com/lokalise/i18n-ally) для вашей IDE

<h1 align="center"> Работа с тестами </h1>

___
__Используются 4 вида тестов:__
1) Unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотные тесты с loki `npm run test:ui`
4) e2e тесты с Cypress `npm run test:e2e`

___[Подробнее о тестах](/docs/tests.md)___

<h1 align="center"> Работа с линтерами </h1>

----
Используется __ESLint__ для проверки __.ts/.tsx__ файлов и Stylelint для проверки __.scss__ файлов.

Также для контроля главных архитектурных принципов
используется собственный [ESLint plugin](https://www.npmjs.com/package/eslint-plugin-sample-text-plugin),
который содержит следующие правила

| Правило            | Что делает                                                           |
|--------------------|----------------------------------------------------------------------|
| path-checker       | Запрещает использовать абсолютные импорты в рамках одного модуля     |
| layer-imports      | Проверяет корректность использования слоёв с точки зрения FSD        |
| public-api-imports | Разрешает импорт других модулей только из public api, есть авто фикс |


### _Запуск_
- `npm run lint:ts` - Проверяет .ts файлы
- `npm run lint:ts:fix` - Исправляет .ts файлы
- `npm run lint:scss` - Проверяет .scss файлы
- `npm run lint:scss:fix` - Исправляет .scss файлы

<h1 align="center"> Storybook </h1>

___
Для __каждого__ компонента создаётся _сторикейс_.

Запросы на сервер мокаются с помощью `storybook-addon-mock`.

Файл со сторикейсами создает рядом с компонентом с расширением `.stories.tsx`

Запустить сторибук можно командой:
- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};
```

<h1 align="center"> Конфигурация проекта </h1>

___
Для разработки имеется 2 конфига:
1. Webpack - ./config/build
2. Vite - vite.config.ts

Вся конфигурация хранится в `/config`
- __/config/build__ - конфигурация webpack
- __/config/jest__ - конфигурация тестовой среды jest
- __/config/storybook__ - конфигурация storybook

В папке `scripts` находятся скрипты для создания отчётов\рефакторинга\упрощения написания кода


<h1 align="center"> CI пайплайн и pre commit хуки </h1>

___
Конфигурация GitHub Actions находится в `/.github/workflows`
В CI проект собирается, проверяется линтерами, тестируется имеющимися тестами.

В прекоммит хуках проверяем проект линтерами, конфиг в `/.husky`

<h1 align="center"> Работа с данными </h1>

___
Взаимодействие с данными осуществляется с помощью Redux Toolkit.
По возможности пере используемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

<h1 align="center"> Сущности </h1>

___
- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)
