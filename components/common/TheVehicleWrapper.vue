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
}

const route = useRoute()
const router = useRouter()

const filtersParams = ref<FilterParams>(mergeFilterParams(initFiltersParams, route.query))

const vehicleStore = useVehicleStore()

const { vehicles } = storeToRefs(vehicleStore)
const { getVehicles, isEmptyList } = vehicleStore

const { data } = useAsyncData("vehicles", async () => {
      router.push({ query: filtersParams.value })
      await getVehicles(filtersParams.value)
      return vehicles.value
    }
    , {
      watch: [filtersParams.value]
    }
);

watch(
    () => filtersParams.value.type,
    () => filtersParams.value.page = initFiltersParams.page
)

// watch(filtersParams.value.type, (newValue, oldValue) => {
//   if (newValue.type === oldValue.type) return
//   filtersParams.value.page = initFiltersParams.page
// })

const handlePageChange = (changedFilterParams: FilterParams) => {
  filtersParams.value.page = changedFilterParams.page
}


</script>

<template>
  <TheListFilter :filter="filtersParams" />
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