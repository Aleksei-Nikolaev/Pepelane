import Vue3Toastify, { toast } from 'vue3-toastify'
import { defineNuxtPlugin } from '#app'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    clearOnUrlChange: false,
    multiple: false,
    transition: toast.TRANSITIONS.SLIDE,
    toastClassName: 'notification',
    closeButton: false,
    autoClose: 1000,
  })

  return {
    provide: { toast }
  }
})
