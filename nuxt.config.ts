// @ts-ignore
export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  sourcemap: true,
  app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'referrer', content: 'no-referrer' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: '/css/theme.css'
        }
      ]
    }
  },
  css: [
    '~/assets/css/baseColors.css'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV,
      apiEnv: process.env.API_ENV || 'development',
      demoUser: process.env.DEMO_USER || 'demo',
      provider: process.env.PROVIDER || 'koality',
      devUser: process.env.DEV_USER || 'dev',
      devPass: process.env.DEV_PASS || 'pass',
      AMPLITUDE_API_KEY: process.env.AMPLITUDE_API_KEY
    }
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/devtools',
    '@vueuse/nuxt',
    ['@pinia/nuxt', {
      autoImports: [
        'defineStore',
        ['defineStore', 'definePiniaStore']
      ]
    }]
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nested',
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  vite: {
    logLevel: 'info',
    build: {
      minify: true
    }
  },

  devtools: {
    timeline: {
      enabled: true
    }
  }
})
