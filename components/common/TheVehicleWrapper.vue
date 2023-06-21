<script setup lang="ts">
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
import TheListFilter from "~/components/common/TheListFilter.vue";
import { useVehicleStore } from "~/stores/VehicleStore";
import { FilterParams, sortName, sortType } from "~/types/FilterParams";

const vehicleStore = useVehicleStore();
const filtersParams = ref<FilterParams>({
  page: 1,
  pageSize: 12,
  sortBy: sortName.RENT,
  sortType: sortType.DESCENDING
})

const fetchVehicles = async () => {
  await vehicleStore.getVehicles(filtersParams.value)
}

watch(
    () => filtersParams.value,
    async () => {
      console.log('X')
      await fetchVehicles()
    },
    {
      deep: true,
    }
)

const { data: vehicles } = await useAsyncData("vehicles", async () => {
      await fetchVehicles()
      return vehicleStore.vehicles
    }
);

</script>

<template>
  <TheListFilter :filter="filtersParams" />
  <TheVehiclesList v-if="!vehicleStore.isEmptyList" :vehicles="vehicles.data" />
</template>

<style scoped lang="scss">

</style>