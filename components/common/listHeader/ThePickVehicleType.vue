<script setup lang="ts">
import {vehicleTypes} from "~/constants/vehicleTypes";
import {FilterParams} from "~/types/FilterParams";
import {eventNames} from "~/constants/events";

const props = defineProps<{
  value: FilterParams["type"]
}>()

const emits = defineEmits<{
  (eventName: eventNames.UPDATE_VALUE, value: string): void;
}>()

</script>

<template>
  <div>
    <a-radio-group
        :value="value"
        :options="vehicleTypes"
        option-type="button"
        button-style="solid"
        @change="emits(eventNames.UPDATE_VALUE, $event.target?.value)"
    />
  </div>
</template>

<style scoped lang="scss">

</style>