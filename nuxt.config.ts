import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'
import { defineNuxtConfig } from 'nuxt/config'

const envs = import.meta.env

const isProduction = envs.NUXT_APP_NODE_ENV === 'production'
const isDevtoolsEnabled = envs.NUXT_ENABLE_DEVTOOLS === 'true'

const metaRobots = isProduction ? {} : { name: 'robots', content: 'noindex, nofollow' }

const title = ''
const description = ``

export default defineNuxtConfig({
  compatibilityDate: '2026-05-10',

  devtools: { enabled: isDevtoolsEnabled },

  srcDir: './src',

  serverDir: './src/server',

  dir: {
    app: './app',
    layouts: './app/layouts',
    middleware: './app/middleware',
    modules: './app/modules',
    pages: './app/pages',
    plugins: './app/plugins',
    public: './src/public'
  },

  components: {
    dirs: []
  },

  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
    '@assets': fileURLToPath(new URL('./src/app/assets', import.meta.url)),
    '@images': fileURLToPath(new URL('./src/app/assets/images', import.meta.url)),
    '@icons': fileURLToPath(new URL('./src/app/assets/icons', import.meta.url)),
    '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
    '@uikit': fileURLToPath(new URL('./src/shared/uikit', import.meta.url)),
    '@base': fileURLToPath(new URL('./src/shared/components/base', import.meta.url))
  },

  app: {
    pageTransition: { name: 'page' },
    layoutTransition: { name: 'layout' },
    head: {
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index' },
        {
          name: 'description',
          content: description
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:image',
          content: `/ogimage.png`
        },
        {
          property: 'og:description',
          content: description
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: description
        },
        { name: 'twitter:image:src', content: `/ogimage.png` },
        { name: 'format-detection', content: 'telephone=no' },
        metaRobots
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: `/favicon.ico` }]
    }
  },

  runtimeConfig: {
    public: {
      baseApiUrl: envs.NUXT_API_BASE_URL,
      nodeEnv: envs.NUXT_APP_NODE_ENV,
      isProduction
    }
  },

  css: ['@assets/styles/index.scss', '@assets/styles/tailwind/index.css'],

  vite: {
    optimizeDeps: {
      include: ['swiper/modules', 'swiper/vue']
    },
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@assets/styles/global/vars.scss";
            @import "@assets/styles/global/mixins.scss";
          `,
          silenceDeprecations: ['import']
        }
      }
    }
  },

  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },

  modules: ['@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/stylelint-module', 'nuxt-viewport'],

  typescript: {
    typeCheck: true
  },

  imports: {
    scan: false
  },

  viewport: {
    breakpoints: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440
    },
    defaultBreakpoints: {
      desktop: 'lg',
      mobile: 'xs',
      tablet: 'sm'
    },
    cookie: {
      expires: 365,
      name: 'viewport',
      path: '/',
      sameSite: 'Strict',
      secure: true
    },
    fallbackBreakpoint: 'lg'
  }
})
