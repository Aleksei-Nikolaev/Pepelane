<script setup lang="ts">
import type { SelectProps } from 'ant-design-vue'
import { SelectValue } from 'ant-design-vue/es/select'
import { sortName } from '~/types/entities/filterParams'
import { eventNames } from '~/constants/events'

defineProps<{
  value: sortName;
}>()

const emits = defineEmits<{
  (eventName: eventNames.UPDATE_VALUE, value: SelectValue): void;
}>()

const options: SelectProps['options'] = [
  {
    value: 'rent',
    label: 'Rent'
  },
  {
    value: 'name',
    label: 'Name'
  }
]
</script>

<template>
  <a-select
    :value="value"
    :options="options"
    class="filter-container__sort-by"
    @change="emits(eventNames.UPDATE_VALUE, $event)"
  />
</template>

<style scoped lang="scss">
.filter-container__sort-by {
  min-width: 100px;
}
</style>
