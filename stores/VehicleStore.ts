// import { defineStore } from 'pinia'
// import { $api } from "~/plugins/api";
// import { vehicleStoreState } from "~/types/store/vehicleStoreState";
// import {getVehiclesRequestParams} from "~/services/types/vehicles";
//
//
// export const useVehicleStore = defineStore('VehicleStore', () => {
//     const vehicles = ref<vehicleStoreState | null>(null)
//
//     async function getVehicles(params: getVehiclesRequestParams) {
//         vehicles.value = await $api.vehicleService.getVehicles(params);
//     };
//
//     const isEmptyList = computed(() => {
//         return !vehicles?.value?.data?.length
//     })
//
//     return {
//         vehicles: vehicles?.value?.data,
//         meta: vehicles?.value?.meta,
//         getVehicles,
//         isEmptyList
//     }
// });

import { defineStore } from 'pinia'
import { $api } from "~/plugins/api";
import { vehicleStoreState } from "~/types/store/vehicleStoreState";
import {getVehiclesRequestParams} from "~/services/types/vehicles";


export const useVehicleStore = defineStore('VehicleStore', () => {
    const vehicles = ref<vehicleStoreState>({
        data: [],
        meta: null
    });

    const getVehicles = async (params: getVehiclesRequestParams) => {
        const { data, meta } = await $api.vehicleService.getVehicles(params)
        vehicles.value.data = [...vehicles.value.data, ...data]
        vehicles.value.meta = meta
    };

    const addVehiclesBefore = async (params: getVehiclesRequestParams) => {
        const { data, meta } = await $api.vehicleService.getVehicles(params)
        vehicles.value.data = [...data, ...vehicles.value.data]
        vehicles.value.meta = meta
    };

    // const addVehiclesToEnd = async (params: getVehiclesRequestParams) =>{
    //     if (!vehicles.value) return
    //
    //     const addVehicles = await $api.vehicleService.getVehicles(params)
    //     vehicles.value.data.push(...addVehicles.data)
    //     vehicles.value.meta = addVehicles.meta
    // }

    const isEmptyList = computed(() => {
        return !vehicles.value?.data.length
    })

    return {
        vehicles,
        getVehicles,
        addVehiclesBefore,
        isEmptyList
    }
});