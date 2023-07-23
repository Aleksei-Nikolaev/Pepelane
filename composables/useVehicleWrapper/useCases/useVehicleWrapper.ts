import {FilterParams} from "~/types/FilterParams";
import {mergeFilterParams} from "~/utils/mergeFilterParams";
import {initFiltersParams} from "~/constants/initFilterParams";
import {useVehicleStore} from "~/stores/VehicleStore";
import {storeToRefs} from "pinia";
import { useVehicleWrapperFilter } from "~/composables/useVehicleWrapper/useCases/useVehicleWrapperFilter/useCases/useVehicleWrapperFilter";

export const useVehicleWrapper = () => {
    const route = useRoute();

    const filtersParams = ref<FilterParams>(
        mergeFilterParams(initFiltersParams, route.query)
    );

    const { handlePageChange } = useVehicleWrapperFilter(filtersParams)

    const vehicleStore = useVehicleStore();
    const { vehicles } = storeToRefs(vehicleStore);
    const { getVehicles, isEmptyList } = vehicleStore;

    return {
        filtersParams,
        vehicles,
        getVehicles,
        isEmptyList,
        handlePageChange
    }
}