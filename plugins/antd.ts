import Antd from 'ant-design-vue'
import { defineNuxtPlugin } from '#app'
import 'ant-design-vue/dist/antd.less'
import '~/assets/styles/vendors/antd/override.less'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd)
})
