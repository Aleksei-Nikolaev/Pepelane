<script setup lang="ts">
import { storeToRefs } from "pinia";
import TheVehiclesList from "~/components/common/TheVehiclesList.vue";
import TheListFilter from "~/components/common/TheListFilter.vue";
import { FilterParams, sortName, sortType } from "~/types/FilterParams";
import { mergeFilterParams } from "~/utils/mergeFilterParams";
import { useVehicleStore } from "~/stores/VehicleStore";

const initFiltersParams = {
  page: 1,
  pageSize: 9,
  sortBy: sortName.RENT,
  sortType: sortType.DESCENDING,
  type: null,
};

const route = useRoute();
const router = useRouter();

const filtersParams = ref<FilterParams>(
  mergeFilterParams(initFiltersParams, route.query)
);

const vehicleStore = useVehicleStore();

const { vehicles } = storeToRefs(vehicleStore);
const { getVehicles, isEmptyList } = vehicleStore;

const refreshState = ref(false);
const loadingStatus = ref({
  dataIsLoaded: false,
  elementIsRemoved: false,
});

const handleState = () => {
  refreshState.value = !refreshState.value;
  loadingStatus.value.dataIsLoaded = false;
  loadingStatus.value.elementIsRemoved = false;
};

const dataIsLoaded = () =>
  loadingStatus.value.elementIsRemoved
    ? handleState()
    : (loadingStatus.value.dataIsLoaded = true);

const elementIsRemoved = () =>
  loadingStatus.value.dataIsLoaded
    ? handleState()
    : (loadingStatus.value.elementIsRemoved = true);

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
    dataIsLoaded();
    return vehicles.value;
  },
  {
    watch: [filtersParams.value],
  }
);

const clearClicked = () => {
  filtersParams.value = Object.assign(filtersParams.value, initFiltersParams);
};

const handlePageChange = (changedFilterParams: FilterParams) => {
  filtersParams.value.page = changedFilterParams.page;
};
</script>

<template>
  <TheListFilter :filter="filtersParams" @clear-clicked="clearClicked" />
  <TheVehiclesList
    v-if="!isEmptyList"
    :vehicles="vehicles.data"
    :meta="vehicles.meta"
    :filter="filtersParams"
    :refresh-state="refreshState"
    @update-filter="handlePageChange"
    @element-removed="elementIsRemoved"
  />
</template>

<style scoped lang="scss"></style>
