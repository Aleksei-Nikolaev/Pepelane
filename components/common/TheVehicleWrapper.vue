<script setup lang="ts">
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
import TheListFilter from "~/components/common/TheListFilter.vue";
import { FilterParams, sortName, sortType } from "~/types/FilterParams";
import { $api } from "~/plugins/api";

const initFiltersParams = {
  page: 1,
  pageSize: 12,
  sortBy: sortName.RENT,
  sortType: sortType.DESCENDING
}

const route = useRoute()
const router = useRouter()

const filtersParams = ref<FilterParams>({
  ...initFiltersParams,
  ...route.query,
})


const { data: vehicles } = await useAsyncData("vehicles", async () => {
      router.push({ query: filtersParams.value })
      return await $api.vehicleService.getVehicles(filtersParams.value)
    }, {
      watch: [filtersParams.value]
    }
);

const isEmptyList = computed(() => {
  return !vehicles.value?.data.length
})


</script>

<template>
  <TheListFilter :filter="filtersParams" />
  <TheVehiclesList v-if="!isEmptyList" :vehicles="vehicles.data" />
</template>

<style scoped lang="scss">

</style>