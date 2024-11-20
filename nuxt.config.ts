// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', '@pinia/nuxt'],

  runtimeConfig: {
    // The private keys which are only available within server-side
    secretToken: process.env.API_TOKEN,
    public: {
      moviesPath: process.env.API_MOVIES_PATH,
      imagesPath: process.env.API_IMAGES_PATH
    }
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  pinia: {
    storesDirs: ['./stores/**']
  },

  i18n: {
    vueI18n: './i18n.config.ts'
  }
})