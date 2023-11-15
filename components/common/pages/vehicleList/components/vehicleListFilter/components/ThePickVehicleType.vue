<script setup lang="ts">
import { Skeletor } from 'vue-skeletor'
import { FilterParams } from '~/types/entities/filterParams'
import { eventNames } from '~/constants/events'
import { useVehicleTypes } from '~/composables/useVehicleTypes/useVehicleTypes'

defineProps<{
  value: FilterParams['type'] | null;
}>()

const emits = defineEmits<{
  (eventName: eventNames.UPDATE_VALUE, value: string | null): void;
}>()

const { vehicleFilterTypes } = useVehicleTypes()
</script>

<template>
  <div>
    <a-radio-group
      v-show="vehicleFilterTypes.length > 1"
      :value="value"
      :options="vehicleFilterTypes"
      option-type="button"
      button-style="solid"
      class="radio-group"
      @change="emits(eventNames.UPDATE_VALUE, $event.target?.value)"
    />
    <Skeletor v-show="vehicleFilterTypes.length <= 1" class="radio-group__skeleton" />
  </div>
</template>

<style scoped lang="scss">
.radio-group {
  width: 420px;
  &__skeleton {
    height: 32px;
    width: 420px;
    border-radius: var(--border_radius_micro);

    @include sm {
      width: 100%;
    }
  }
}

:deep(.ant-radio-group) {
  user-select: none;
  @include sm {
    width: 100%;
    display: flex;
  }
}

:deep(.ant-radio-button-wrapper) {
  @include sm {
    display: flex;
    justify-content: center;
    flex-grow: 1;
    padding: 0 4px;
  }
}
</style>
