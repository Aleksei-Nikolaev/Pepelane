<script setup lang="ts">
import {IVehicle} from "~/types/vehicle";
import TheCollapsedText from "~/components/common/TheCollapsedText.vue";

defineProps<{
  vehicleData: IVehicle
}>();

</script>

<template>
  <TheCollapsedText :detailed-text="vehicleData.term_text" />
</template>

<style scoped lang="scss">

</style>