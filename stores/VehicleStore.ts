import { defineStore } from "pinia";
import { $api } from "~/plugins/api";
import { vehicleStoreState } from "~/types/store/vehicleStoreState";
import { getVehiclesRequestParams } from "~/services/types/vehicles";
import {initFiltersParams} from "~/constants/initFilterParams";


export const useVehicleStore = defineStore("VehicleStore", {
  state: (): vehicleStoreState => ({
    data: [],
    meta: null,
    filterParams: {...initFiltersParams},
  }),

  getters: {
   isEmptyList: (state) => !state.data.length
  },

  actions: {
    async getVehicles(params: getVehiclesRequestParams) {
      const {data, meta} = await $api.vehicleService.getVehicles(params);
      this.data = data;
      this.meta = meta;
    },

    resetFilters() {
      this.filterParams = Object.assign(this.filterParams, initFiltersParams)
    },

    updateFilterParams(filter: vehicleStoreState["filterParams"]) {
      this.filterParams = Object.assign(this.filterParams, filter)
    }
  }
});

