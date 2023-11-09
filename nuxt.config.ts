// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import appConfig from './core/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'nuxt-icons',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/device'
  ],

  // build: {
  //   transpile: ['ant-design-vue']
  // },

  nitro: {
    compressPublicAssets: true
  },

  app: {
    head: {
      title: 'Pepelane',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },

  css: ['normalize.css/normalize.css', '~/assets/styles/global.scss'],

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en.json'
      }
    ],
    langDir: 'locales',
    defaultLocale: 'en'
  },

  image: {
    dir: '~assets/images'
  },

  runtimeConfig: {
    public: {
      baseUrl: appConfig.FRONTEND_API_BASE_URL
    }
  },

  pinia: {
    autoImports: ['defineStore']
  },

  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({ importStyle: 'less', resolveIcons: true })]
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': '#4959ff'
          },
          javascriptEnabled: true
        },
        scss: {
          additionalData: '@import "assets/styles/shared/_mixins";'
        }
      }
    }
  }
})
