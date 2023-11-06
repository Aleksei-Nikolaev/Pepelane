import { FilterParams } from '~/types/entities/filterParams'
import { useVehicleStore } from '~/stores/VehicleStore'

export const useVehicleWrapperFilter = () => {
  const { updateFilterParams } = useVehicleStore()
  const handlePageChange = (changedFilterParams: FilterParams) => {
    updateFilterParams({
      page: changedFilterParams.page
    })
  }

  return {
    handlePageChange
  }
}
