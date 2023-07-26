<script setup lang="ts">
import {IVehicle} from "~/types/vehicle";

defineProps<{
  vehicleData: IVehicle
}>();

</script>

<template>
<p class="specification-text">{{vehicleData.specifications_text}}</p>
</template>

<style scoped lang="scss">

.specification {
  &-text {
    margin-top: var(--margin_specification_medium);
    font-weight: var(--font_weight_medium);
    font-size: var(--font_size_tiny);
    color: var(--base_300);
    text-align: justify;
  }
}

</style>