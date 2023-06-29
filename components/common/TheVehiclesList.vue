<script setup lang="ts">

import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
import {IVehicle} from "~/types/vehicle";
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'


defineProps<{
  vehicles: IVehicle[]
}>()

const container = ref<HTMLElement | null>(null)

const containerWidth = ref<null | number>(null)

onMounted(() => {
  if (!container.value) return
  containerWidth.value = container.value.clientWidth
}) // высчитать без паддингов

const cardWidth = computed(() => {
  if (!containerWidth.value) return
  return containerWidth.value / 3
})


</script>

<template>
  <div ref="container" class="list-container">
      <RecycleScroller
          class="scroller"
          :items="vehicles"
          :item-size="164"
          :item-secondary-size="cardWidth"
          :grid-items="3"
          :type-field="null"
          list-class="scroller__list"
          item-class="scroller__list-item"
          v-slot="{ item }"

      >
        <TheVehicleCard
            :vehicle="item"
            class="list-container__card"
        />

      </RecycleScroller>


<!--      <template #item>-->
<!--        <TheVehicleCard-->
<!--            v-for="vehicle in vehicles"-->
<!--            :key="vehicle.id"-->
<!--            :vehicle="vehicle"-->
<!--            class="list-container__card"-->
<!--        />-->
<!--      </template>-->


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

.scroller {
  width: 100%;
  //display: flex;

  //&__list {
  //  display: flex;
  //
  //  &-item {
  //    display: flex;
  //  }
  //}
}







</style>