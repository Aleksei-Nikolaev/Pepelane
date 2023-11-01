import { useScreenSize } from '~/composables/useDevicePageSize/useScreenSize'
import { usePagePosition } from '~/composables/useVehicleList/useCases/usePagePosition'
import { VehiclesListProps } from '~/composables/useVehicleList/types/vehiclesListProps'

export const useEmptyCards = () => {
  const emptyCardsTop = ref(3)
  const emptyCardsBottom = ref(3)

  const setEmptyCards = (props: VehiclesListProps) => {
    const { sm, lg } = useScreenSize()
    const { isLastPage, isFirstPage } = usePagePosition(props)

    if (!props.meta) { return }

    const { pageSize, totalItems, page } = props.meta

    const leftCards = totalItems - pageSize * page

    const renderCards = isLastPage.value
      ? totalItems - pageSize * (page - 1)
      : pageSize

    const checkFirstLast = () => {
      if (isLastPage.value) { emptyCardsBottom.value = 0 }
      if (isFirstPage.value) { emptyCardsTop.value = 0 }
    }

    if (sm.value) {
      emptyCardsTop.value = renderCards
      emptyCardsBottom.value = pageSize < leftCards ? renderCards : leftCards

      checkFirstLast()
      return
    }

    if (lg.value) {
      const ceilCard = (cardAmount: number) => Math.ceil(cardAmount / 2)
      const ceiledRenderCards = ceilCard(renderCards)
      const ceiledLeftCards = ceilCard(leftCards)

      emptyCardsTop.value = ceiledRenderCards
      emptyCardsBottom.value =
        pageSize < leftCards * 2 ? ceiledRenderCards : ceiledLeftCards

      checkFirstLast()
      return
    }

    emptyCardsTop.value = 3
    emptyCardsBottom.value = leftCards < 3 ? leftCards : 3

    checkFirstLast()
  }

  return {
    emptyCardsBottom,
    emptyCardsTop,
    setEmptyCards
  }
}
