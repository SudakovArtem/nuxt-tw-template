<script setup lang="ts">
defineOptions({
  name: 'DevStartView'
})

const commands = [
  { label: 'yarn dev', desc: 'Запуск девсервера' },
  { label: 'yarn lint', desc: 'Проверка кода' },
  { label: 'yarn lint:fix', desc: 'Автоисправление' },
  { label: 'yarn build', desc: 'Сборка для продакшна' }
]

const tailwindRules = [
  '1 unit = 1px (spacing: 0.1rem, html: 10px)',
  'gap-12 вместо gap-[12px]',
  'text-muted-foreground вместо ручных серых цветов',
  'Desktop-first: базовые стили = 1440px+',
  'max-lg: <1440  max-md: <768  max-sm: <375'
]

const notes = [
  'Авто-импорт компонентов отключён — импортировать явно',
  'Базовые Vue-штуки по типу ref, computed и т.д. импортировать явно не нужно',
  'Никаких #imports в shared компонентах',
  'Иконки: <BaseIcon name="..." /> из src/app/assets/icons/',
  'Всегда запускать yarn lint:fix перед коммитом'
]

const links = [
  { label: 'Storybook — localhost:6006', href: 'http://localhost:6006' },
  { label: 'Nuxt Docs', href: 'https://nuxt.com/docs' },
  { label: 'Tailwind CSS v4', href: 'https://tailwindcss.com/docs' }
]

const aliases = [
  { name: '@', path: 'src/' },
  { name: '@app', path: 'src/app/' },
  { name: '@assets', path: 'src/app/assets/' },
  { name: '@shared', path: 'src/shared/' },
  { name: '@base', path: 'src/shared/components/base/' }
]

const baseLayer = [
  { name: 'BaseIcon', desc: 'SVG-иконка из assets/icons/' },
  { name: 'BaseImage', desc: 'обёртка для изображений' },
  { name: 'BaseLayout', desc: 'базовый layout-контейнер' }
]
</script>

<template>
  <section class="dev-start px-40 py-60 max-md:px-20 max-md:py-40">
    <div class="dev-start__container container">
      <header class="dev-start__header mb-60 border-b border-border pb-40">
        <p class="dev-start__eyebrow text-13 mb-8 font-bold text-muted-foreground uppercase">nuxt-tw-template</p>
        <h1 class="dev-start__title font-display text-40 leading-none font-black text-foreground uppercase">
          Dev Start
        </h1>
      </header>

      <div class="dev-start__grid grid grid-cols-3 gap-40 max-lg:grid-cols-2 max-md:grid-cols-1">
        <section class="dev-start__section">
          <h2
            class="dev-start__section-title text-11 mb-16 border-b border-border pb-8 font-bold text-foreground uppercase"
          >
            Команды
          </h2>
          <ul class="dev-start__list space-y-12">
            <li v-for="command in commands" :key="command.label" class="dev-start__list-item flex flex-col gap-4">
              <code
                class="dev-start__command text-13 inline-block w-fit bg-muted px-10 py-4 font-mono text-foreground"
                v-text="command.label"
              />
              <span class="dev-start__text text-13 text-muted-foreground" v-text="command.desc" />
            </li>
          </ul>
        </section>

        <section class="dev-start__section">
          <h2
            class="dev-start__section-title text-11 mb-16 border-b border-border pb-8 font-bold text-foreground uppercase"
          >
            Tailwind v4
          </h2>
          <ul class="dev-start__list text-13 space-y-10 text-foreground">
            <li v-for="rule in tailwindRules" :key="rule" class="dev-start__list-item flex gap-10">
              <span aria-hidden="true" class="dev-start__bullet mt-2 size-6 shrink-0 rounded-full bg-primary" />
              <span class="dev-start__text" v-text="rule" />
            </li>
          </ul>
        </section>

        <section class="dev-start__section">
          <h2
            class="dev-start__section-title text-11 mb-16 border-b border-border pb-8 font-bold text-foreground uppercase"
          >
            Важно
          </h2>
          <ul class="dev-start__list text-13 space-y-10 text-foreground">
            <li v-for="note in notes" :key="note" class="dev-start__list-item flex gap-10">
              <span aria-hidden="true" class="dev-start__bullet mt-2 size-6 shrink-0 rounded-full bg-foreground" />
              <span class="dev-start__text" v-text="note" />
            </li>
          </ul>
        </section>

        <section class="dev-start__section">
          <h2
            class="dev-start__section-title text-11 mb-16 border-b border-border pb-8 font-bold text-foreground uppercase"
          >
            Ссылки
          </h2>
          <ul class="dev-start__list space-y-8">
            <li v-for="link in links" :key="link.href" class="dev-start__list-item">
              <a
                :href="link.href"
                target="_blank"
                class="dev-start__link text-13 text-foreground underline underline-offset-3 transition-colors duration-180 hover:text-primary"
                v-text="link.label"
              />
            </li>
          </ul>
        </section>

        <section class="dev-start__section">
          <h2
            class="dev-start__section-title text-11 mb-16 border-b border-border pb-8 font-bold text-foreground uppercase"
          >
            Алиасы
          </h2>
          <ul class="dev-start__list space-y-8">
            <li
              v-for="alias in aliases"
              :key="alias.name"
              class="dev-start__list-item text-13 flex items-baseline gap-12"
            >
              <code class="dev-start__alias text-13 font-mono whitespace-nowrap text-primary" v-text="alias.name" />
              <span class="dev-start__text text-muted-foreground" v-text="alias.path" />
            </li>
          </ul>
        </section>

        <section class="dev-start__section">
          <h2
            class="dev-start__section-title text-11 mb-16 border-b border-border pb-8 font-bold text-foreground uppercase"
          >
            Base
          </h2>
          <ul class="dev-start__list text-13 space-y-8 text-foreground">
            <li v-for="component in baseLayer" :key="component.name" class="dev-start__list-item">
              <code class="dev-start__alias font-mono text-primary" v-text="component.name" />
              <span class="dev-start__text ml-8 text-muted-foreground" v-text="`— ${component.desc}`" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
