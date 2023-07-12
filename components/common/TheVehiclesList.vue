<script setup lang="ts">
import TheVehicleCard from "~/components/common/vehicleList/TheVehicleCard.vue";
import {IVehicle} from "~/types/vehicle";
import {useHandleWheel, WheelDirection} from "~/composables/useHandleWheel";
import debounce from "lodash.debounce";
import {PaginationMeta} from "~/types/server/pagination";
import {eventNames} from "~/constants/events";
import {FilterParams} from "~/types/FilterParams";


const props = defineProps<{
  vehicles: IVehicle[];
  filter: FilterParams;
  meta: PaginationMeta;
  refreshState: boolean;
}>()

const emits = defineEmits<{
  (eventName: eventNames.UPDATE_FILTER, filter: FilterParams): void;
  (eventName: eventNames.ELEMENT_REMOVED): void;
}>()

const { handleWheel } = useHandleWheel()

const pageEmit = (page: number) => {
  emits(eventNames.UPDATE_FILTER, {
    ...props.filter,
    page: page
  })
}

const scrollUp = ref(false)
const scrollDirection = computed(() => scrollUp.value ? "scroll-up" : "scroll-down")

const changingDirection = () => {
  scrollUp.value = !scrollUp.value
}

const defaultDirection = () => {
  if (!scrollUp.value) return
  changingDirection()
}


const handleDirection = () => {
  changingDirection()
}

const pageInc = (currentPage?: number) => {
  if (!currentPage || currentPage >= props.meta.totalPages) return
  currentPage++
  pageEmit(currentPage)
}

const pageDec = (currentPage?: number) => {
  if (!currentPage || currentPage <= 1) return
  handleDirection()
  currentPage--
  pageEmit(currentPage)
}

const handleScroll = (event: WheelEvent) => {
  if (!props.filter.page) return

 handleWheel(event) === WheelDirection.UP
     ? pageDec(props.filter.page)
     : pageInc(props.filter.page)
}

const debouncedHandleScroll = debounce(handleScroll, 600)

</script>

<template>
    <div ref="container" class="list-container" @wheel="debouncedHandleScroll">
      <Transition
          :name="scrollDirection"
          @after-leave="emits(eventNames.ELEMENT_REMOVED)"
          @after-enter="defaultDirection"


      >
        <div v-if="!refreshState" class="list-container__transition">
          <TheVehicleCard
              v-for="vehicle in vehicles"
              :key="vehicle.id"
              :vehicle="vehicle"
              class="list-container__card"
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
  min-height: calc(3 * var(--margin_card_horizontal) + 2 * var(--padding_list) + 3 * 164px);
  height: 700px;
  overflow: hidden;

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
.scroll-up-leave-active,{
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


</style>