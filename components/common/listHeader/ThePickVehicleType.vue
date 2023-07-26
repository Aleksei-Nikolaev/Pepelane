<script setup lang="ts">
import { vehicleTypes } from "~/constants/vehicleTypes";
import { FilterParams } from "~/types/FilterParams";
import { eventNames } from "~/constants/events";

defineProps<{
  value: FilterParams["type"] | null;
}>();

const emits = defineEmits<{
  (eventName: eventNames.UPDATE_VALUE, value: string | null): void;
}>();


</script>

<template>
  <div>
    <client-only>
      <a-radio-group
        :value="value"
        :options="vehicleTypes"
        option-type="button"
        button-style="solid"
        class="radio-group"
        @change="emits(eventNames.UPDATE_VALUE, $event.target?.value)"
      />
    </client-only>
  </div>
</template>

<style scoped lang="scss"></style>
