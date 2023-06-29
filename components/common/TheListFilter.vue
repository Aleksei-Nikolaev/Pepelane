<script setup lang="ts">
import {FilterParams} from "~/types/FilterParams";
import TheVehicleSortBy from "~/components/common/listHeader/TheVehicleSortBy.vue";
import TheSortType from "~/components/common/listHeader/TheSortType.vue";
import ThePickVehicleType from "~/components/common/listHeader/ThePickVehicleType.vue";

const props = defineProps<{
  filter: FilterParams
}>()

const model = useModel(props, "filter")

</script>

<template>
  <div class="filter-container">
    <TheVehicleSortBy v-model:value="model.sortBy" />
    <TheSortType v-model:value="model.sortType" />
    <ThePickVehicleType v-model:value="model.type" />
  </div>
</template>

<style scoped lang="scss">

</style>