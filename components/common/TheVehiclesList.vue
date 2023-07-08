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
}>()

const emits = defineEmits<{
  (eventName: eventNames.UPDATE_FILTER, filter: FilterParams): void;
}>()

const { handleWheel } = useHandleWheel()

const pageEmit = (page: number) => {
  emits(eventNames.UPDATE_FILTER, {
    ...props.filter,
    page: page
  })
}


const pageInc = (currentPage?: number) => {
  if (!currentPage || currentPage >= props.meta.totalPages) return
  currentPage++
  pageEmit(currentPage)
}

const pageDec = (currentPage?: number) => {
  if (!currentPage || currentPage <= 1) return
  currentPage--
  pageEmit(currentPage)
}
// const container = ref< HTMLElement | null >(null)
//
// const containerWidth = ref< number | null >(null)
//
// const cardWidth = computed(() => {
//   if (!containerWidth.value) return
//   return containerWidth.value / 3
// })


const handleScroll = (event: WheelEvent) => {
  if (!props.filter.page) return

 handleWheel(event) === WheelDirection.UP
     ? pageDec(props.filter.page)
     : pageInc(props.filter.page)
}

const debouncedHandleScroll = debounce(handleScroll, 500)


// onMounted(() => {
//   if (!container.value) return
//   const styles = getComputedStyle(container.value);
//   const paddingLeft = parseFloat(styles.paddingLeft);
//   const paddingRight = parseFloat(styles.paddingRight);
//   containerWidth.value = container.value.clientWidth - paddingLeft - paddingRight;
// })


</script>

<template>
  <div ref="container" class="list-container" @wheel="debouncedHandleScroll">
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
  min-height: calc(3 * var(--margin_card_horizontal) + 2 * var(--padding_list) + 3 * 164px);
}

</style>