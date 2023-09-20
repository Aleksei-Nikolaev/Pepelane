<script setup lang="ts">
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
import TheListFilter from "~/components/common/TheListFilter.vue";
import TheAddVehicleModal from "~/components/common/vehicleList/TheAddVehicleModal.vue";
import { useHandleListAppearance } from "~/composables/useVehicleWrapper/useCases/useHandleAnimation";
import { initFiltersParams } from "~/constants/initFilterParams";
import {useVehicleWrapperFilter} from "~/composables/useVehicleWrapper/useCases/useVehicleWrapperFilter/useCases/useVehicleWrapperFilter";
import {useVehicleStore} from "~/stores/VehicleStore";
import {storeToRefs} from "pinia";
import TheNoDataPage from "~/components/common/TheNoDataPage.vue";
import {useShowModal} from "~/composables/useVehicleWrapper/useCases/useShowModal";

const { data, meta, filterParams, isEmptyList } = storeToRefs(useVehicleStore())
const { getVehicles, resetFilters, updateFilterParams } = useVehicleStore()
const { showModal, handleModal} = useShowModal()

const router = useRouter()
const route = useRoute()

updateFilterParams(route.query)

const {  handlePageChange } = useVehicleWrapperFilter(filterParams)
const { resetStatus, elementIsRemoved, loadingStatus, renderItems} = useHandleListAppearance()

watch(
  () => filterParams.value.type,
  () => updateFilterParams({
    page: initFiltersParams.page
  })
);

useAsyncData(
  "vehicles",
  async () => {
    resetStatus();
    router.push({ query: filterParams.value });
    await getVehicles(filterParams.value);
    loadingStatus.value.dataIsLoaded = true;
    return filterParams.value
  },
  {
    watch:  [filterParams.value],
  },
);

</script>

<template>
  <div class="control-panel">
    <TheListFilter :filter="filterParams" @clear-clicked="resetFilters"/>
    <a-button
        type="primary"
        size="large"
        class="control-panel__add-button"
        @click="handleModal"
    >Add new
    </a-button>
  </div>
  <TheVehiclesList
      v-if="!isEmptyList"
      :vehicles="data"
      :meta="meta"
      :filter="filterParams"
      :render-items="renderItems"
      @update-filter="handlePageChange"
      @element-removed="elementIsRemoved"
  />
  <TheNoDataPage v-else/>
  <TheAddVehicleModal
      v-if="showModal"
      @close-modal="handleModal"
  />
</template>

<style scoped lang="scss">

.control-panel {
  display: flex;
  flex-direction: row;

  &__add-button {
    margin-left: auto;
    font-size: var(--font_size_tiny);
    font-weight: var(--font_weight_bold);
    border-radius: var(--border_radius_mini);
    height: 100%;
  }
}


</style>

