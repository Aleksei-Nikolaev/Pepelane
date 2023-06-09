import { defineStore } from "pinia";
import { $api } from "~/plugins/api";
import { vehicleStoreState } from "~/types/store/vehicleStoreState";
import { getVehiclesRequestParams } from "~/services/types/vehicles";

export const useVehicleStore = defineStore("VehicleStore", () => {
  const vehicles = ref<vehicleStoreState>({
    data: [],
    meta: null,
  });

  const getVehicles = async (params: getVehiclesRequestParams) => {
    const { data, meta } = await $api.vehicleService.getVehicles(params);

    vehicles.value.data = data;
    vehicles.value.meta = meta;
  };

  const isEmptyList = computed(() => {
    return !vehicles.value?.data.length;
  });

  return {
    vehicles,
    getVehicles,
    isEmptyList,
  };
});
