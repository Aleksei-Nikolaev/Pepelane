import {useScreenSize} from "~/composables/useDevicePageSize/useScreenSize"
import {usePagePosition} from "~/composables/useVehicleList/useCases/usePagePosition";
import {VehiclesListProps} from "~/composables/useVehicleList/types/vehiclesListProps";

export const useEmptyCards = () => {

    const emptyCardsTop = ref<number>(0)
    const emptyCardsBottom = ref<number>(0)
    const isPreLastPage = ref<boolean>(false)



    const setEmptyCards = (props: VehiclesListProps) => {
        const {sm, lg} = useScreenSize()
        const {isLastPage, isPreLastPage} = usePagePosition(props)
        const {page, pageSize, totalPages, totalItems} = props.meta


        if (isLastPage.value) {
            emptyCardsBottom.value  = 0
            if (sm.value) {
                emptyCardsTop.value = totalItems - ((totalPages - 1) * pageSize)
                return;
            }
            if (lg.value) {
                emptyCardsTop.value = Math.ceil((totalItems - ((totalPages - 1) * pageSize))  / 2)
                return
            }
            return;
        }

        if (isPreLastPage.value) {
            emptyCardsBottom.value  = Math.ceil((totalItems - ((totalPages - 1) * pageSize))  / 2)
            if (sm.value) {
                emptyCardsTop.value = pageSize
                return;
            }
            if (lg.value) {
                emptyCardsTop.value = Math.ceil(pageSize  / 2)
                return
            }
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
        isPreLastPage
    }

}


