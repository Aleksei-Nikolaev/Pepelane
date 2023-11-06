<script setup lang="ts">
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
      :value="value"
      :options="vehicleFilterTypes"
      option-type="button"
      button-style="solid"
      class="radio-group"
      @change="emits(eventNames.UPDATE_VALUE, $event.target?.value)"
    />
  </div>
</template>

<style scoped lang="scss">
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
