<script setup lang="ts">

import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
import {IVehicle} from "~/types/vehicle";
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'


defineProps<{
  vehicles: IVehicle[]
}>()

const container = ref< HTMLElement | null >(null)

const containerWidth = ref< number | null >(null)

onMounted(() => {
  if (!container.value) return
  const styles = getComputedStyle(container.value);
  const paddingLeft = parseFloat(styles.paddingLeft);
  const paddingRight = parseFloat(styles.paddingRight);
  containerWidth.value = container.value.clientWidth - paddingLeft - paddingRight;
})

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
          :item-size="196"
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
  padding: calc(var(--padding_list) - var(--margin_card_horizontal));
  display: flex;
  flex-wrap: wrap;
}
:deep {
  .scroller {
    width: 100%;
    display: flex;

    &__list {
      display: flex;

      &-item {
        display: flex;
        padding: calc(var(--margin_card_vertical) /2) calc(var(--margin_card_horizontal) /2);
      }
    }
  }

}







</style>