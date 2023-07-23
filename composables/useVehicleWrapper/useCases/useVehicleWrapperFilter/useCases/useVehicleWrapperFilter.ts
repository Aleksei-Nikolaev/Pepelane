import {FilterParams} from "~/types/FilterParams";
import {useVehicleStore} from "~/stores/VehicleStore";


export const useVehicleWrapperFilter = (filterParams: Ref<FilterParams>) => {
    const { updateFilterParams } = useVehicleStore()
    const handlePageChange = (changedFilterParams: FilterParams) => {
        updateFilterParams({
            page: changedFilterParams.page,
        })
    };

    return {
        handlePageChange
    }
}



