<script setup lang="ts">
import { CloseCircleOutlined } from '@ant-design/icons-vue'
import { FilterParams } from '~/types/entities/filterParams'
import TheVehicleSortBy from '~/components/common/pages/vehicleList/components/vehicleListFilter/components/TheVehicleSortBy.vue'
import TheSortType from '~/components/common/pages/vehicleList/components/vehicleListFilter/components/TheSortType.vue'
import ThePickVehicleType from '~/components/common/pages/vehicleList/components/vehicleListFilter/components/ThePickVehicleType.vue'

const props = defineProps<{
  filter: FilterParams;
}>()

const emits = defineEmits<{
  (eventName: 'clearClicked'): void;
}>()

const model = useModel(props, 'filter')
</script>

<template>
  <div class="filter-container__sort">
    <TheVehicleSortBy v-model:value="model.sortBy" />
    <TheSortType v-model:value="model.sortType" />
  </div>
  <div class="filter-container__button-container">
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
@import "assets/styles/vendors/antd/antd-theme";

.filter-container {
  &__sort {
    display: flex;
    align-items: center;
    margin-right: 30px;
    @include md {
      margin-bottom: 16px;
    }
  }

  &__reset-button {
    margin-left: 20px;
    color: var(--main_400);
    font-size: 1.6em;
    @include sm {
      margin-left: auto;
      font-size: 1.8em;
    }
  }

  &__button-container {
    display: flex;
    align-items: center;
    margin-right: auto;
    @include md {
      order: 2;
      flex-basis: 100%;
    }
  }
}

:deep(.filter-container__radio-group) {
  @include sm {
    width: 100%;
    margin-right: 10px;
  }
}
</style>
