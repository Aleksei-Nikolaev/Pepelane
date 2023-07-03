<script setup lang="ts">
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
import TheListFilter from "~/components/common/TheListFilter.vue";
import { FilterParams, sortName, sortType } from "~/types/FilterParams";
import {mergeFilterParams} from "~/utils/mergeFilterParams";
import debounce from "lodash.debounce";
import {useVehicleStore} from "~/stores/VehicleStore";
import {storeToRefs} from "pinia";
import {useHandleWheel} from "~/composables/useHandleWheel";

const initFiltersParams = {
  page: 1,
  pageSize: 15,
  sortBy: sortName.RENT,
  sortType: sortType.DESCENDING,
}

const route = useRoute()
const router = useRouter()

// const isPageInc = ref(true)



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

const page = computed(() => Number(filtersParams?.value?.page))





</script>

<template>
  <TheListFilter :filter="filtersParams" />
  <TheVehiclesList
      v-if="!isEmptyList"
      :vehicles="vehicles.data"
  />
</template>

<style scoped lang="scss">

</style>