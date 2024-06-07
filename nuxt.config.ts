// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'system',
    dataValue: 'theme',
    classSuffix: '',
  },
  css: ['~/assets/css/main.pcss'],
  devtools: { enabled: true },
  devServer: { port: 1234 },
  eslint: {
    config: {
      standalone: false,
    },
  },
  modules: ['nuxt-icon', '@nuxt/eslint', '@nuxtjs/color-mode'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
})
