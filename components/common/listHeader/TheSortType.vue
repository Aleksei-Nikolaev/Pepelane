<script setup lang="ts">
import {DownOutlined} from "@ant-design/icons-vue";
import {sortType} from "~/types/FilterParams";
import {eventNames} from "~/constants/events";

const props = defineProps<{
  value: sortType
}>()

const emits = defineEmits<{
  (eventName: eventNames.UPDATE_VALUE, value: sortType): void;
}>()

const handleClick = () => {
  const value = props.value === sortType.ASCENDING ? sortType.DESCENDING : sortType.ASCENDING
  emits(eventNames.UPDATE_VALUE, value)
}

</script>

<template>
  <DownOutlined
      class="sort-type-icon"
      :class="{ '--asc': value === sortType.ASCENDING}"
      @click="handleClick"
  />
</template>

<style scoped lang="scss">
.sort-type-icon {

  &.--asc {
    transform: rotate(180deg);
  }
}

</style>