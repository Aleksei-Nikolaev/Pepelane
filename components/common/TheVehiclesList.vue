<script setup lang="ts">
import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
import {IVehicle} from "~/types/vehicle";
import {useHandleWheel} from "~/composables/useHandleWheel";



const props = defineProps<{
  vehicles: IVehicle[]
}>()




const { handleWheel } = useHandleWheel()



// const container = ref< HTMLElement | null >(null)
//
// const containerWidth = ref< number | null >(null)
//
// const cardWidth = computed(() => {
//   if (!containerWidth.value) return
//   return containerWidth.value / 3
// })

const test = (event: WheelEvent) => {
  console.log(handleWheel(event))
}


// onMounted(() => {
//   if (!container.value) return
//   const styles = getComputedStyle(container.value);
//   const paddingLeft = parseFloat(styles.paddingLeft);
//   const paddingRight = parseFloat(styles.paddingRight);
//   containerWidth.value = container.value.clientWidth - paddingLeft - paddingRight;
// })


</script>

<template>
  <div ref="container" class="list-container" @wheel="test">
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