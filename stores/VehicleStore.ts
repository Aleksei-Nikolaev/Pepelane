import { defineStore } from 'pinia'
import { $api } from "~/plugins/api";
import { vehicleStoreState } from "~/types/store/vehicleStoreState";
import {getVehiclesRequestParams} from "~/services/types/vehicles";


export const useVehicleStore = defineStore('VehicleStore', () => {
    const vehicles = ref<vehicleStoreState>();

    const getVehicles = async (params: getVehiclesRequestParams) => {
        vehicles.value = await $api.vehicleService.getVehicles(params);
    };

    const isEmptyList = computed(() => {
        return !vehicles.value?.data.length
    })

    return {
        vehicles,
        getVehicles,
        isEmptyList
    }
});