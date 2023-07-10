<script setup lang="ts">
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
import TheListFilter from "~/components/common/TheListFilter.vue";
import { FilterParams, sortName, sortType } from "~/types/FilterParams";
import {mergeFilterParams} from "~/utils/mergeFilterParams";
import {useVehicleStore} from "~/stores/VehicleStore";
import {storeToRefs} from "pinia";




const initFiltersParams = {
  page: 1,
  pageSize: 9,
  sortBy: sortName.RENT,
  sortType: sortType.DESCENDING,
  type: null
}

const route = useRoute()
const router = useRouter()

const filtersParams = ref<FilterParams>(mergeFilterParams(initFiltersParams, route.query))

const vehicleStore = useVehicleStore()

const { vehicles } = storeToRefs(vehicleStore)
const { getVehicles, isEmptyList } = vehicleStore

watch(
    () => filtersParams.value.type,
    () => filtersParams.value.page = initFiltersParams.page,
)

const { data, refresh } = useAsyncData("vehicles", async () => {
      router.push({ query: filtersParams.value })
      await getVehicles(filtersParams.value)
      return vehicles.value
    }
    , {
      watch: [filtersParams.value],
    }
);

const clearClicked = () => {
  filtersParams.value = {...initFiltersParams}
  refresh()
  // UseAsyncData watcher does not work on pass new value to filter instead Object.assign
}

const handlePageChange = (changedFilterParams: FilterParams) => {
  filtersParams.value.page = changedFilterParams.page
}

</script>

<template>
  <TheListFilter
      :filter="filtersParams"
      @clear-clicked="clearClicked"
  />
  <TheVehiclesList
      v-if="!isEmptyList"
      :vehicles="vehicles.data"
      :meta="vehicles.meta"
      :filter="filtersParams"
      @updateFilter="handlePageChange"
  />
</template>

<style scoped lang="scss">

</style>