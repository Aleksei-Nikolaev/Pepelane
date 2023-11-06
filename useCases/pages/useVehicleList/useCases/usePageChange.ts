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
import { swipeDirection } from '~/constants/pages/vehicleList/swipeDirection'

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

  const handleSwipe = (event: swipeDirection) => {
    if (event === swipeDirection.LEFT) {
      pageInc(props.filter.page)
      return
    }
    if (event === swipeDirection.RIGHT) {
      pageDec(props.filter.page)
    }
  }

  const debouncedHandleScroll = debounce(handleScroll, 600)
  const debouncedHandleSwipe = debounce(handleSwipe, 200)

  return {
    debouncedHandleScroll,
    debouncedHandleSwipe
  }
}
