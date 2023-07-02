<script setup lang="ts">
import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
import {IVehicle} from "~/types/vehicle";



const props = defineProps<{
  vehicles: IVehicle[]
}>()


const container = ref< HTMLElement | null >(null)

const containerWidth = ref< number | null >(null)

// onMounted(() => {
//   if (!container.value) return
//   const styles = getComputedStyle(container.value);
//   const paddingLeft = parseFloat(styles.paddingLeft);
//   const paddingRight = parseFloat(styles.paddingRight);
//   containerWidth.value = container.value.clientWidth - paddingLeft - paddingRight;
// })

</script>

<template>
  <div ref="container" class="list-container">
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
  padding: var(--padding_list);
  display: flex;
  flex-wrap: wrap;
  min-height: 700px;
}












</style>