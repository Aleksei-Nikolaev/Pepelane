<script setup lang="ts">
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
import TheListFilter from "~/components/common/TheListFilter.vue";
import { useHandleListAppearance } from "~/composables/useVehicleWrapper/useCases/useHandleAnimation";
import { initFiltersParams } from "~/constants/initFilterParams";
import {useVehicleWrapperFilter} from "~/composables/useVehicleWrapper/useCases/useVehicleWrapperFilter/useCases/useVehicleWrapperFilter";
import {useVehicleStore} from "~/stores/VehicleStore";
import {storeToRefs} from "pinia";

const { data, meta, filterParams } = storeToRefs(useVehicleStore())
const {getVehicles, resetFilters, updateFilterParams, isEmptyList} = useVehicleStore()

const router = useRouter()

const {  handlePageChange } = useVehicleWrapperFilter(filterParams)
const { handleState, elementIsRemoved, loadingStatus, renderItems} = useHandleListAppearance()



watch(
  () => filterParams.value.type,
  () => updateFilterParams({
    page: initFiltersParams.page
  })
);

useAsyncData(
  "vehicles",
  async () => {
    handleState();
    router.push({ query: filterParams.value });
    await getVehicles(filterParams.value);
    loadingStatus.value.dataIsLoaded = true;
    return filterParams.value
  },
  {
    watch:  [filterParams.value],
  },
);

loadingStatus.value.elementIsRemoved = true

</script>

<template>
  <TheListFilter :filter="filterParams" @clear-clicked="resetFilters"/>
  <TheVehiclesList
      v-if="!isEmptyList"
      :vehicles="data"
      :meta="meta"
      :filter="filterParams"
      :render-items="renderItems"
      @update-filter="handlePageChange"
      @element-removed="elementIsRemoved"
  />
</template>

<style scoped lang="scss"></style>

