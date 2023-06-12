// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        'nuxt-icons',
        '@nuxtjs/i18n',
        '@nuxtjs/color-mode',
        '@nuxt/image',
    ],

    css: [
        'normalize.css/normalize.css',
        '~/assets/styles/global.scss',
    ],

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
        dir: 'assets/images'
    }


});

