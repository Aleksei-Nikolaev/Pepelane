<script setup lang="ts">
import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
import { eventNames } from "~/constants/events";
import { VehiclesListProps } from "~/composables/useVehicleList/types/vehiclesListProps";
import { useScrollDirection } from "~/composables/useVehicleList/useCases/useScrollDirection";
import {vehiclesListEmits} from "~/composables/useVehicleList/types/vehiclesListEmits";
import {usePageChange} from "~/composables/useVehicleList/useCases/usePageChange";
import {scrollDirection} from "~/constants/scrollDirection";
import {usePagePosition} from "~/composables/useVehicleList/useCases/usePagePosition";
import { onMounted } from 'vue'

const props = defineProps<VehiclesListProps>();
const emits = defineEmits<vehiclesListEmits>();

const scrollDirectionClass = ref(scrollDirection.DOWN);

const { defaultDirection } = useScrollDirection(scrollDirectionClass)
const { debouncedHandleScroll, debouncedHandleSwipe } = usePageChange(props, emits, scrollDirectionClass)
const { isLastPage, isFirstPage } = usePagePosition(props)

onMounted(() => {
  emits(eventNames.ELEMENT_REMOVED)
})

</script>

<template>
  <div
      v-touch:swipe.top="debouncedHandleSwipe"
      v-touch:swipe.bottom="debouncedHandleSwipe"
      ref="container"
      class="list-container"
      @wheel="debouncedHandleScroll"
  >
    <Transition name="blur">
      <div
          v-if="!isFirstPage"
          class="list-container__blur-top">
      </div>
    </Transition>
    <Transition
      :name="scrollDirectionClass"
      @after-leave="emits(eventNames.ELEMENT_REMOVED)"
      @after-enter="defaultDirection"
    >
      <div
          v-if="renderItems"
          class="list-container__transition"
          >
          <TheVehicleCard
            v-for="vehicle in vehicles"
            :key="vehicle.id"
            :vehicle="vehicle"
            class="list-container__card"
          />
      </div>
    </Transition>
    <Transition name="blur">
      <div
          v-if="!isLastPage"
          class="list-container__blur-bottom">
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.list-container {
  background: var(--base_50);
  border-radius: var(--border_radius_big);
  width: 100%;
  padding: var(--padding_list);
  display: flex;
  overflow: hidden;
  position: relative;

  &__blur-bottom,
  &__blur-top {
    width: 100%;
    height: 10%;
    z-index: 1;
    position: absolute;
    left: 0px;
  }

  &__blur-bottom {
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.9));
    bottom: 0px;
  }

  &__blur-top {
    background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0));
    bottom: 0px;
    top: 0px;
  }



  &__transition {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
}

.scroll-down-enter-active,
.scroll-down-leave-active,
.scroll-up-enter-active,
.scroll-up-leave-active {
  transition: all 0.3s ease-in-out;
}

.scroll-down-leave-to,
.scroll-down-enter-from,
.scroll-up-leave-to,
.scroll-down-enter-from {
  opacity: 0.5;
}

.scroll-down-leave-to,
.scroll-up-enter-from {
  transform: translateY(-700px);
}
.scroll-down-enter-from,
.scroll-up-leave-to {
  transform: translateY(700px);
}

.blur-enter-active,
.blur-leave-active {
  transition: all 0.3s ease-in-out;
}

.blur-leave-to,
.blur-enter-from {
  opacity: 0.5;
}


</style>


