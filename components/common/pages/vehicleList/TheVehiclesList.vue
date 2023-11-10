<script setup lang="ts">
import { onMounted } from 'vue'
import TheVehicleCard from '~/components/common/pages/vehicleList/components/TheVehicleCard.vue'
import { eventNames } from '~/constants/events'
import { VehiclesListProps } from '~/useCases/pages/useVehicleList/types/vehiclesListProps'
import { useScrollDirection } from '~/useCases/pages/useVehicleList/useCases/useScrollDirection'
import { vehiclesListEmits } from '~/useCases/pages/useVehicleList/types/vehiclesListEmits'
import { usePageChange } from '~/useCases/pages/useVehicleList/useCases/usePageChange'
import { scrollDirection } from '~/constants/pages/vehicleList/scrollDirection'
import { usePagePosition } from '~/useCases/pages/useVehicleList/useCases/usePagePosition'
import { useEmptyCards } from '~/useCases/pages/useVehicleList/useCases/useEmptyCards'
import { useScreenSize } from '~/composables/useScreenSize/useScreenSize'

const props = defineProps<VehiclesListProps>()
const emits = defineEmits<vehiclesListEmits>()

const container = ref(null)
const { isSwiping, lengthY, lengthX } = useSwipe(container)

const scrollDirectionClass = ref(scrollDirection.DOWN)

const { defaultDirection } = useScrollDirection(scrollDirectionClass)
const { debouncedHandleScroll, debouncedHandleSwipe } = usePageChange(
  props,
  emits,
  scrollDirectionClass
)
const { isLastPage, isFirstPage } = usePagePosition(props)

const { emptyCardsBottom, emptyCardsTop, setEmptyCards } = useEmptyCards()
const { sm, lg } = useScreenSize()
const { $device } = useNuxtApp()

setEmptyCards(props)

watch(
  () => [sm.value, lg.value, props.meta],
  () => setEmptyCards(props),
  { deep: true }
)

if ($device.isMobileOrTablet) {
  watch(
      () => isSwiping.value,
      () => {
        if (!isSwiping.value) {
          debouncedHandleSwipe(lengthX.value, lengthY.value)
        }
      })
}

onMounted(() => {
  emits(eventNames.ELEMENT_REMOVED)
})
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
        <div
          v-for="index in emptyCardsTop"
          :key="index"
          class="list-container__empty-card-top"
        />
      </div>
    </Transition>
    <Transition
      :name="scrollDirectionClass"
      @after-leave="emits(eventNames.ELEMENT_REMOVED)"
      @after-enter="defaultDirection"
    >
      <div v-if="renderItems" class="list-container__wrapper">
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
        <div
          v-for="index in emptyCardsBottom"
          :key="index"
          class="list-container__empty-card-bottom"
        />
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

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    gap: var(--gap);
  }

  &__empty {
    &-card {
      &-top,
      &-bottom {
        width: calc((100% - 2 * var(--gap)) / 3);
        height: 100%;
        background: var(--base_0);

        @include lg {
          width: 100%;
          height: 164px;
        }
      }

      &-top {
        border-radius: 0 0 var(--border_radius_small) var(--border_radius_small);

        @include lg {
          border-radius: 0 var(--border_radius_small) var(--border_radius_small)
            0;
        }
      }
      &-bottom {
        border-radius: var(--border_radius_small) var(--border_radius_small) 0 0;

        @include lg {
          border-radius: var(--border_radius_small) 0 0
            var(--border_radius_small);
        }
      }

      &-wrapper {
        &-top,
        &-bottom {
          position: absolute;
          height: calc(var(--padding_list) - var(--gap));
          width: calc(100% - 2 * var(--padding_list));
          display: flex;
          gap: var(--gap);

          @include lg {
            height: calc(100% - 2 * var(--padding_list));
            width: calc(var(--padding_list) - var(--gap));
            flex-direction: column;
          }
        }
        &-top {
          top: 1px;
          @include lg {
            left: 1px;
            margin-top: var(--padding_list);
          }
        }
        &-bottom {
          bottom: 1px;
          @include lg {
            right: 1px;
            margin-bottom: var(--padding_list);
          }
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
  opacity: 0.1;
}

.empty-top-leave-to,
.empty-top-enter-from,
.scroll-down-leave-to,
.scroll-up-enter-from {
  transform: translateY(-700px);

  @include lg {
    transform: translateX(-1200px);
  }
}

.empty-bottom-leave-to,
.empty-bottom-enter-from,
.scroll-down-enter-from,
.scroll-up-leave-to {
  transform: translateY(700px);

  @include lg {
    transform: translateX(1200px);
  }
}
</style>
