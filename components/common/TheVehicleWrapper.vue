<script setup lang="ts">
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
import TheListFilter from "~/components/common/TheListFilter.vue";
import { FilterParams, sortName, sortType } from "~/types/FilterParams";
import {mergeFilterParams} from "~/utils/mergeFilterParams";
import debounce from "lodash.debounce";
import {useVehicleStore} from "~/stores/VehicleStore";
import {storeToRefs} from "pinia";

const initFiltersParams = {
  page: 1,
  pageSize: 15,
  sortBy: sortName.RENT,
  sortType: sortType.DESCENDING,
}

const route = useRoute()
const router = useRouter()
const isPageInc = ref(true)


const filtersParams = ref<FilterParams>(mergeFilterParams(initFiltersParams, route.query))

const vehicleStore = useVehicleStore()

const { vehicles } = storeToRefs(vehicleStore)
const { getVehicles, isEmptyList, addVehiclesBefore } = vehicleStore

const { data } = useAsyncData("vehicles", async () => {
      router.push({ query: filtersParams.value })
      isPageInc.value
          ? await getVehicles(filtersParams.value)
          : await addVehiclesBefore(filtersParams.value)
      return vehicles.value
    }
    , {
      watch: [filtersParams.value]
    }
);

const page = computed(() => Number(filtersParams?.value?.page))

const handleScrollEnd = async () => {
  if (vehicles.value.meta && page.value >= vehicles.value.meta.totalPages) return

  isPageInc.value = true
  filtersParams.value.page = page.value + 1

}
const handleScrollStart = async () => {
  if (page.value <= 1) return

  isPageInc.value = false
  filtersParams.value.page = page.value - 1
}


const debouncedHandleScrollEnd = debounce(handleScrollEnd, 1000)
const debouncedHandleScrollStart = debounce(handleScrollStart, 1000)



</script>

<template>
  <TheListFilter :filter="filtersParams" />
  <TheVehiclesList
      v-if="!isEmptyList"
      :vehicles="vehicles.data"
      @scroll-end="debouncedHandleScrollEnd"
      @scroll-start="debouncedHandleScrollStart"
  />
</template>

<style scoped lang="scss">

</style>