import {useScreenSize} from "~/composables/useDevicePageSize/useScreenSize"
import {usePagePosition} from "~/composables/useVehicleList/useCases/usePagePosition";
import {VehiclesListProps} from "~/composables/useVehicleList/types/vehiclesListProps";

export const useEmptyCards = () => {

    const emptyCardsTop = ref<number>(0)
    const emptyCardsBottom = ref<number>(0)

    const setEmptyCards = (props: VehiclesListProps) => {
        if (!props.meta) return

        const {sm, lg} = useScreenSize()
        const {isLastPage, isPreLastPage} = usePagePosition(props)


        const { pageSize, totalPages, totalItems} = props.meta

        if (isLastPage.value) {
            emptyCardsBottom.value  = 0
            const emptyCardPortion = totalItems - ((totalPages - 1) * pageSize)
            if (sm.value) {
                emptyCardsTop.value = emptyCardPortion
                return;
            }
            if (lg.value) {
                emptyCardsTop.value = Math.ceil(emptyCardPortion  / 2)
                return
            }
            emptyCardsTop.value = 3
            return
        }

        if (isPreLastPage.value) {
            const leftCards = totalItems - ((totalPages - 1) * pageSize)

            if (sm.value) {
                emptyCardsTop.value = pageSize
                emptyCardsBottom.value  = leftCards
                return;
            }

            if (lg.value) {
                emptyCardsTop.value = Math.ceil(pageSize  / 2)
                emptyCardsBottom.value  = Math.ceil(leftCards  / 2)
                return
            }

            emptyCardsTop.value = 3

            if (leftCards <= 3) {
                emptyCardsBottom.value = leftCards
                return;
            }

            emptyCardsBottom.value = 3

            return;
        }

        if (sm.value) {
            emptyCardsBottom.value = emptyCardsTop.value = pageSize
            return;
        }
        if (lg.value) {
            emptyCardsBottom.value = emptyCardsTop.value = Math.ceil(pageSize / 2)
            return
        }

        emptyCardsBottom.value = emptyCardsTop.value = 3


    }

    return {
        emptyCardsBottom,
        emptyCardsTop,
        setEmptyCards,
    }

}


