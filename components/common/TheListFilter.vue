<script setup lang="ts">
import { FilterParams } from "~/types/FilterParams";
import TheVehicleSortBy from "~/components/common/listHeader/TheVehicleSortBy.vue";
import TheSortType from "~/components/common/listHeader/TheSortType.vue";
import ThePickVehicleType from "~/components/common/listHeader/ThePickVehicleType.vue";

const props = defineProps<{
  filter: FilterParams;
}>();

const emits = defineEmits<{
  (eventName: "clearClicked"): void;
}>();

const model = useModel(props, "filter");
</script>

<template>
  <div class="filter-container">
    <div class="filter-container__sort">
      <TheVehicleSortBy v-model:value="model.sortBy" />
      <TheSortType v-model:value="model.sortType" />
    </div>
    <ThePickVehicleType
      v-model:value="model.type"
      class="filter-container__radio-group"
    />
    <CloseCircleOutlined
      class="filter-container__reset-button"
      @click="emits('clearClicked')"
    />
  </div>
</template>

<style scoped lang="scss">
.filter-container {
  display: flex;
  align-items: center;
  padding: 10px 0px;

  &__sort {
    display: flex;
    align-items: center;
    color: var(--base_500);
  }

  &__radio-group {
    margin-left: 30px;
  }

  &__reset-button {
    margin-left: 20px;
    color: var(--main_400);
    font-size: 1.4em;
  }
}
</style>
