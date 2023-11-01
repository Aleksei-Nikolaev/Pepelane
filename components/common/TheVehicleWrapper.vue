<script setup lang="ts">
import { storeToRefs } from 'pinia'
import TheVehiclesList from '~/components/common/TheVehiclesList.vue'
import TheListFilter from '~/components/common/TheListFilter.vue'
import { useHandleListAppearance } from '~/composables/useVehicleWrapper/useCases/useHandleAnimation'
import { filterFactory } from '~/factories/filterFactory'
import { useVehicleWrapperFilter } from '~/composables/useVehicleWrapper/useCases/useVehicleWrapperFilter/useCases/useVehicleWrapperFilter'
import { useVehicleStore } from '~/stores/VehicleStore'
import TheNoDataPage from '~/components/common/TheNoDataPage.vue'
import { useShowModal } from '~/composables/useVehicleWrapper/useCases/useShowModal'
import { Modals } from '~/types/Modals'
import { useDevicePageSize } from '~/composables/useDevicePageSize/useDevicePageSize'

const { data, meta, filterParams, isEmptyList } = storeToRefs(
  useVehicleStore()
)
const { createFilter } = filterFactory()

const { getVehicles, resetFilters, updateFilterParams } = useVehicleStore()
const { openModal } = useShowModal()

const router = useRouter()
const route = useRoute()

updateFilterParams(route.query)

const { handlePageChange } = useVehicleWrapperFilter()
const { resetStatus, elementIsRemoved, loadingStatus, renderItems } =
  useHandleListAppearance()

const { page } = createFilter()

watch(
  () => filterParams.value.type,
  () =>
    updateFilterParams({
      page
    })
)

useAsyncData(
  'vehicles',
  async () => {
    resetStatus()
    router.push({ query: filterParams.value })
    await getVehicles(filterParams.value)
    loadingStatus.value.dataIsLoaded = true
    return filterParams.value
  },
  {
    watch: [filterParams.value]
  }
)

useDevicePageSize()
</script>

<template>
  <div class="control-panel">
    <TheListFilter :filter="filterParams" @clear-clicked="resetFilters" />
    <a-button
      type="primary"
      size="large"
      class="control-panel__add-button"
      @click="openModal(Modals.ADD_VEHICLE)"
    >
      Add new
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
  <TheNoDataPage v-else />
</template>

<style scoped lang="scss">
.control-panel {
  display: flex;
  flex-direction: row;
  padding: 10px 0px;
  @include sm {
    padding: 10px var(--padding-mobile-content);
  }
  @include md {
    display: flex;
    flex-wrap: wrap;
  }

  &__add-button {
    margin-left: auto;
    font-size: var(--font_size_tiny);
    font-weight: var(--font_weight_bold);
    border-radius: var(--border_radius_mini);
    height: 100%;

    @include sm {
      height: 32px;
      display: flex;
      align-items: center;
      font-size: 12px;
    }
  }
}

:deep(.control-panel__add-button span) {
  @include sm {
    padding-top: 0.15em;
  }
}
</style>
