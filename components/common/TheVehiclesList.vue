<script setup lang="ts">
import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
import {useVehicleStore} from "~/stores/VehicleStore";

const vehicleStore = useVehicleStore();

const { data: vehicles } = await useAsyncData("vehicles", async () => {
      await vehicleStore.getVehicles({
        page: 5,
        pageSize: 12,
        sortBy: "rent",
        sortType: "ascending"
      })
      return vehicleStore.vehicles
    }
);


</script>

<template>
    <div v-if="!vehicleStore.isEmptyList" class="list-container">
      <TheVehicleCard
          v-for="vehicle in vehicles.data"
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