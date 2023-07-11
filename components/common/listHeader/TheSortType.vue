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
  <div class="sort-type-container" @click="handleClick">
    <SortAscendingOutlined
        v-show="value === sortType.ASCENDING"
        class="sort-type-icon"
    />
    <SortDescendingOutlined
        class="sort-type-icon"
        v-show="value === sortType.DESCENDING"
    />
  </div>

</template>

<style scoped lang="scss">

.sort-type {
  &-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  &-icon {
    font-size: 1.4em;
    color: var(--main_400)
  }
}


</style>