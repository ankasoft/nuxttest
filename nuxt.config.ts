// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: [
      'chart.js',
      'primevue'
    ]
  },

  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt',
    '@vue-macros/nuxt',
    'nuxt-typed-router',
    '@nuxtjs/google-fonts',
    '~/modules/primevue',
    '@nuxt/content'
  ],

  css: [
    'primevue/resources/primevue.css',
    'primeflex/primeflex.css',
    'primeicons/primeicons.css',
    'prismjs/themes/prism-coy.css',
    '~/assets/styles/layout.scss',
    '~/assets/demo/flags/flags.css'
  ],

  dir: {
    public: 'public/'
  },

  googleFonts: {
    families: {
      Inter: true
    }
  },

  imports: {
    autoImport: true,
    addons: {
      vueTemplate: true
    }
  },

})
