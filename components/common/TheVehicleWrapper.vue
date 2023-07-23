<script setup lang="ts">
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
import TheListFilter from "~/components/common/TheListFilter.vue";
import { useHandleListAppearance } from "~/composables/useVehicleWrapper/useCases/useHandleAnimation";
import { initFiltersParams } from "~/constants/initFilterParams";
import {useVehicleWrapperFilter} from "~/composables/useVehicleWrapper/useCases/useVehicleWrapperFilter/useCases/useVehicleWrapperFilter";
import {useVehicleWrapper} from "~/composables/useVehicleWrapper/useCases/useVehicleWrapper";
import { defineExpose } from 'vue'


const router = useRouter()

const { filtersParams, vehicles, getVehicles, isEmptyList } = useVehicleWrapper()
const { resetFilters, handlePageChange } = useVehicleWrapperFilter(filtersParams)
const { handleState, elementIsRemoved, loadingStatus, renderItems} = useHandleListAppearance()

watch(
  () => filtersParams.value.type,
  () => (filtersParams.value.page = initFiltersParams.page)
);

useAsyncData(
  "vehicles",
  async () => {
    handleState();
    router.push({ query: filtersParams.value });
    await getVehicles(filtersParams.value);
    loadingStatus.value.dataIsLoaded = true;
    return vehicles.value;
  },
  {
    watch:  [filtersParams.value],
  },
);

loadingStatus.value.elementIsRemoved = true

</script>

<template>
  <TheListFilter :filter="filtersParams" @clear-clicked="resetFilters" />
  {{route}}
  <p></p>
  {{ filtersParams }}
  <TheVehiclesList
    v-if="!isEmptyList"
    :vehicles="vehicles.data"
    :meta="vehicles.meta"
    :filter="filtersParams"
    :render-items="renderItems"
    @update-filter="handlePageChange"
    @element-removed="elementIsRemoved"
  />
</template>

<style scoped lang="scss"></style>
