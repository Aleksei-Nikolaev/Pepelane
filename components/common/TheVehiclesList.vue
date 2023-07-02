<script setup lang="ts">
import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
import {IVehicle} from "~/types/vehicle";
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import {eventNames} from "~/constants/events";

const props = defineProps<{
  vehicles: IVehicle[]
}>()


const emits = defineEmits<{
  (eventName: eventNames.SCROLL_END): void;
  (eventName: eventNames.SCROLL_START): void;
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



const handleScrollEnd = () => {
  console.log("trigger")
}


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
          @scroll-end="emits(eventNames.SCROLL_END)"
          @scroll-start="emits(eventNames.SCROLL_START)"
      >
        <TheVehicleCard
            :vehicle="item"
            class="list-container__card"
        />
      </RecycleScroller>
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
  height: 700px;



}
:deep {
  .scroller {
    width: 100%;
    height: 100%;
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