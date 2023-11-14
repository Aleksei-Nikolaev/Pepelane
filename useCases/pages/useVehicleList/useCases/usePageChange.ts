import debounce from 'lodash.debounce'
import { Ref } from 'vue'
import {
  useHandleWheel,
  WheelDirection
} from '~/useCases/pages/useVehicleList/useCases/useHandleWheel'
import { VehiclesListProps } from '~/useCases/pages/useVehicleList/types/vehiclesListProps'
import { useScrollDirection } from '~/useCases/pages/useVehicleList/useCases/useScrollDirection'
import { eventNames } from '~/constants/events'
import { vehiclesListEmits } from '~/useCases/pages/useVehicleList/types/vehiclesListEmits'
import { scrollDirection } from '~/constants/pages/vehicleList/scrollDirection'

export const usePageChange = (
  props: VehiclesListProps,
  emits: vehiclesListEmits,
  scrollDirection: Ref<scrollDirection>
) => {
  const { changeScrollDirection } = useScrollDirection(scrollDirection)
  const { handleWheel } = useHandleWheel()
  const pageEmit = (page: number) => {
    emits(eventNames.UPDATE_FILTER, {
      ...props.filter,
      page
    })
  }
  const pageInc = (currentPage: number) => {
    if (props.meta && currentPage >= props.meta.totalPages) { return }
    currentPage++
    pageEmit(currentPage)
  }
  const pageDec = (currentPage: number) => {
    if (currentPage <= 1) { return }
    changeScrollDirection()
    currentPage--
    pageEmit(currentPage)
  }

  const handleScroll = (event: WheelEvent) => {
    if (!props.filter.page) { return }

    handleWheel(event) === WheelDirection.UP
      ? pageDec(props.filter.page)
      : pageInc(props.filter.page)
  }

  const handleSwipe = (lengthX: number, lengthY:number) => {
    const isHorizontalSwipe = (Math.abs(lengthX) > Math.abs(0.7 * lengthY) && (Math.abs(lengthX) > 25))
    if (lengthX > 0 && isHorizontalSwipe) {
      pageInc(props.filter.page)
      return
    }
    if (lengthX < 0 && isHorizontalSwipe) {
      pageDec(props.filter.page)
    }
  }

  // const debouncedHandleScroll = debounce(handleScroll, 200)
  const debouncedHandleSwipe = debounce(handleSwipe, 200)

  return {
    debouncedHandleSwipe,
    handleScroll
  }
}
