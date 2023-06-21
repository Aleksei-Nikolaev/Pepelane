<script setup lang="ts">
import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
import {IVehicle} from "~/types/vehicle";

defineProps<{
  vehicles: IVehicle
}>()

</script>

<template>
    <div class="list-container">
      <TheVehicleCard
          v-for="vehicle in vehicles"
          :key="vehicle.id"
          :vehicle="vehicle"
          class="list-container__card"
      />
    </div>
</template>

<style scoped lang="scss">
.list-container {
  background: var(--base_50);
  border-radius: var(--border_radius_big);
  width: 100%;
  padding: 64px 64px 56px 64px;
  display: flex;
  flex-wrap: wrap;
}

</style>