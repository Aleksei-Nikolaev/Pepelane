import {VehiclesListProps} from "~/composables/useVehicleList/types/vehiclesListProps";

export const usePagePosition = (props: VehiclesListProps) => {
    const isLastPage = computed(() => {

        return (Number(props.filter.page) === props.meta?.totalPages)
    })
    const isFirstPage = computed(() => {
        return (Number(props.filter.page) === 1)
    })


    return {
        isLastPage,
        isFirstPage
    }
}