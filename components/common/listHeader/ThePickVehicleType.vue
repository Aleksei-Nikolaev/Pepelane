<script setup lang="ts">
// import { vehicleTypes } from "~/constants/vehicleTypes";
import { FilterParams } from "~/types/FilterParams";
import { eventNames } from "~/constants/events";
import {useHandleVehiclesTypes} from "~/composables/useHandleVehiclesApi/useHandleVehiclesTypes";

defineProps<{
  value: FilterParams["type"] | null;
}>();

const emits = defineEmits<{
  (eventName: eventNames.UPDATE_VALUE, value: string | null): void;
}>();

const {vehicleFilterTypes} = useHandleVehiclesTypes()





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
