// https://nuxt.com/docs/api/configuration/nuxt-config
import appConfig from "./core/config";
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "nuxt-icons",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@pinia/nuxt",
    "@vueuse/nuxt",
  ],

  css: ["normalize.css/normalize.css", "~/assets/styles/global.scss"],

  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "ru",
        file: "ru.json",
      },
    ],
    langDir: "locales",
    defaultLocale: "en",
  },

  image: {
    dir: "assets/images",
  },


  runtimeConfig: {
    public: {
      baseUrl: appConfig.FRONTEND_API_BASE_URL,
    },
  },

  pinia: {
    autoImports: ["defineStore"],
  },

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
});
