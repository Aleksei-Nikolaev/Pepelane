import {defineNuxtPlugin} from "#app";
import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3Toastify, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        clearOnUrlChange: false,
        multiple: false,
        transition: toast.TRANSITIONS.SLIDE,
        toastClassName: "notification",
    });

    return {
        provide: { toast },
    };
});