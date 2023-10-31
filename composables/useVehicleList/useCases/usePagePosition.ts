import {VehiclesListProps} from "~/composables/useVehicleList/types/vehiclesListProps";

export const usePagePosition = (props: VehiclesListProps) => {
    const isLastPage = computed(() => {

        return (props.filter.page === props.meta?.totalPages)
    })
    const isFirstPage = computed(() => {
        return (props.filter.page === 1)
    })

    const isPreLastPage = computed(() => {
        if (!props.meta) return false
        return ((props.meta.totalPages - props.meta.page) === 1)
    })


    return {
        isLastPage,
        isFirstPage,
        isPreLastPage
    }
}