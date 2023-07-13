<script setup lang="ts">
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
import TheListFilter from "~/components/common/TheListFilter.vue";
import { useHandleListAppearance } from "~/composables/useVehicleWrapper/useCases/useHandleAnimation";
import { initFiltersParams } from "~/constants/initFilterParams";
import {useHandlers} from "~/composables/useVehicleWrapper/useCases/useHandlers";
import {useVehicleWrapper} from "~/composables/useVehicleWrapper/useCases/useVehicleWrapper";

const router = useRouter();

const { filtersParams, vehicles, getVehicles, isEmptyList } = useVehicleWrapper()
const { clearClicked, handlePageChange } = useHandlers(filtersParams)
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
    watch: [filtersParams.value],
  }
);

</script>

<template>
  <TheListFilter :filter="filtersParams" @clear-clicked="clearClicked" />
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
