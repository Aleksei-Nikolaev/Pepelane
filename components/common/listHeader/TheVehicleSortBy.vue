<script setup lang="ts">
import type { SelectProps } from 'ant-design-vue';
import {sortName} from "~/types/FilterParams";
import {eventNames} from "~/constants/events";

const props = defineProps<{
    value: sortName
}>()

const emits = defineEmits<{
  (eventName: eventNames.UPDATE_VALUE, value: string): void;
}>()

const options: SelectProps['options'] = [
  {
    value: 'rent',
    label: 'Rent',
  },
  {
    value: 'name',
    label: 'Name',
  },
]

</script>

<template>
  <a-select
      :value="value"
      :options="options"
      @change="emits(eventNames.UPDATE_VALUE, $event)"
  />

</template>

<style scoped lang="scss">

</style>