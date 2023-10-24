<script setup lang="ts">
import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
import { eventNames } from "~/constants/events";
import { VehiclesListProps } from "~/composables/useVehicleList/types/vehiclesListProps";
import { useScrollDirection } from "~/composables/useVehicleList/useCases/useScrollDirection";
import { vehiclesListEmits } from "~/composables/useVehicleList/types/vehiclesListEmits";
import { usePageChange } from "~/composables/useVehicleList/useCases/usePageChange";
import { scrollDirection } from "~/constants/scrollDirection";
import { usePagePosition } from "~/composables/useVehicleList/useCases/usePagePosition";
import { onMounted } from "vue";

const props = defineProps<VehiclesListProps>();
const emits = defineEmits<vehiclesListEmits>();

const scrollDirectionClass = ref(scrollDirection.DOWN);

const { defaultDirection } = useScrollDirection(scrollDirectionClass);
const { debouncedHandleScroll, debouncedHandleSwipe } = usePageChange(
  props,
  emits,
  scrollDirectionClass
);
const { isLastPage, isFirstPage } = usePagePosition(props);


onMounted(() => {
  emits(eventNames.ELEMENT_REMOVED);
});
</script>

<template>
  <div
    ref="container"
    class="list-container"
    @wheel="debouncedHandleScroll"
  >
    <Transition name="empty-top">
      <div
        v-if="!isFirstPage && renderItems"
        class="list-container__empty-card-wrapper-top"
      >
        <div class="list-container__empty-card-top"></div>
        <div class="list-container__empty-card-top empty-card-second"></div>
        <div class="list-container__empty-card-top empty-card-third"></div>
      </div>
    </Transition>
    <Transition
      :name="scrollDirectionClass"
      @after-leave="emits(eventNames.ELEMENT_REMOVED)"
      @after-enter="defaultDirection"
    >
      <div
          v-if="renderItems"
          class="list-container__wrapper"
          v-touch:swipe.top="debouncedHandleSwipe"
          v-touch:swipe.bottom="debouncedHandleSwipe"
      >
        <TheVehicleCard
          v-for="vehicle in vehicles"
          :key="vehicle.id"
          :vehicle="vehicle"
          class="list-container__card"
        />
      </div>
    </Transition>
    <Transition name="empty-bottom">
      <div
          v-if="!isLastPage && renderItems"
          class="list-container__empty-card-wrapper-bottom"
      >
        <div class="list-container__empty-card-bottom"></div>
        <div class="list-container__empty-card-bottom empty-card-second"></div>
        <div class="list-container__empty-card-bottom empty-card-third"></div>
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
  border: 1px solid var(--base_100);

  min-height: calc(2 * var(--padding_list) + 2 * var(--gap) + 3 * 164px);

  @include lg {
    min-height: calc(2 * var(--padding_list) + 2 * var(--gap) + 3 * 164px);
  }

  @include sm {
    min-height: calc(2 * var(--padding_list) + 2 * var(--gap) + 3 * 164px);
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    gap: var(--gap);

    @include lg {
      gap: var(--gap);
    }

    @include sm {
      gap: var(--gap);
    }
  }

  &__empty {
    &-card {
      &-top,
      &-bottom {
        width: calc((100% - 2 * var(--gap)) / 3);
        height: 100%;
        background: var(--base_0);

        @include lg {
          width: calc((100% - var(--gap)) / 2);
        }

        @include sm {
          width: 100%;
          min-width: 200px;
        }
      }

      &-top {
        border-radius: 0 0 var(--border_radius_medium)
          var(--border_radius_medium);
      }
      &-bottom {
        border-radius: var(--border_radius_medium)
        var(--border_radius_medium) 0 0;
      }

      &-wrapper {
        &-top,
        &-bottom {
          position: absolute;
          height: calc(var(--padding_list) - var(--gap));
          width: calc(100% - 2 * var(--padding_list));
          display: flex;
          gap: var(--gap);
        }
        &-top {
          top: 1px;
        }
        &-bottom {
          bottom: 1px;
        }
      }
    }
  }

}

.empty-top-enter-active,
.empty-top-leave-active,
.empty-bottom-enter-active,
.empty-bottom-leave-active,
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

.empty-top-leave-to,
.empty-top-enter-from,
.scroll-down-leave-to,
.scroll-up-enter-from {
  transform: translateY(-700px);
}

.empty-bottom-leave-to,
.empty-bottom-enter-from,
.scroll-down-enter-from,
.scroll-up-leave-to {
  transform: translateY(700px);
}

.empty-card-third {
  @include lg {
    display: none;
  }
}

.empty-card-second {
  @include sm {
    display: none;
  }
}




</style>
