<script setup lang="ts">
import { infoSections } from '~/constants/pages/vehicleDetailedPage/infoSections'
import { eventNames } from '~/constants/events'

defineProps<{
  sectionName: string;
}>()

const emits = defineEmits<{
  (eventName: eventNames.CHANGE, value: any): void;
}>()
</script>

<template>
  <a-radio-group
    :value="sectionName"
    :options="infoSections"
    option-type="button"
    button-style="solid"
    class="filter-container__section"
    @change="emits(eventNames.CHANGE, $event)"
  />
</template>

<style scoped lang="scss">
.filter-container__section {
  min-width: 100px;
}
</style>
