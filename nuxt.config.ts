import pkg from './package.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  colorMode: {
    preference: 'system',
    dataValue: 'theme',
    classSuffix: '',
  },
  components: [{
    path: '~/components',
    pathPrefix: false,
  }],
  css: ['~/assets/css/main.pcss'],
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false,
    },
  },
  modules: ['nuxt-icon', '@nuxt/eslint', '@nuxtjs/color-mode', '@pinia/nuxt', '@vueuse/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      version: pkg.version,
      // eslint-disable-next-line node/prefer-global/process
      baseUrl: process.env.VITE_BASE_URL,
    },
  },
  ssr: false,
})
