import {Device} from "@nuxtjs/device/dist/runtime/types/index"

declare module '#app' {
    interface NuxtApp {
        $device: Device;
    }
}
