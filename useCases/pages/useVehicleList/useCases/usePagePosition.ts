import { VehiclesListProps } from '~/useCases/pages/useVehicleList/types/vehiclesListProps'

export const usePagePosition = (props: VehiclesListProps) => {
  const isLastPage = computed(() => {
    return props.filter.page === props.meta?.totalPages
  })
  const isFirstPage = computed(() => {
    return props.filter.page === 1
  })

  return {
    isLastPage,
    isFirstPage
  }
}
