<script setup lang="ts">
import type {IVehicle} from "~/types/vehicle";

defineProps<{
  vehicle: IVehicle;
}>()


</script>

<template>
<div class="card-container">

</div>
</template>

<style scoped lang="scss">

.card-container {
  width: calc((100% - 2*var(--margin_card_horizontal)) / 3);
  height: 164px;
  background: var(--base_0);
  border-radius: var(--border_radius_medium);
  margin-bottom: var(--margin_card_vertical);

  &:not(:last-child) {
    margin-right: var(--margin_card_horizontal);
  }
}

</style>