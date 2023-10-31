import { defineStore } from "pinia";
import { $api } from "~/plugins/api";
import { vehicleStoreState } from "~/types/store/vehicleStoreState";
import { getVehiclesRequestParams } from "~/services/types/vehicles";
import {useDevicePageSize} from "~/composables/useDevicePageSize/useDevicePageSize";
import {normalizeQueryFilter} from "~/utils/normalizeQueryFilter";

export const useVehicleStore = defineStore("VehicleStore", {
  state: (): vehicleStoreState => ({
    data: [],
    meta: null,
    filterParams: {...useDevicePageSize()},
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
      this.filterParams = Object.assign(this.filterParams, useDevicePageSize())
    },

    updateFilterParams(filter: Partial<vehicleStoreState["filterParams"]>) {
      normalizeQueryFilter(filter)
      this.filterParams = Object.assign(this.filterParams, filter)
    }
  }
});

