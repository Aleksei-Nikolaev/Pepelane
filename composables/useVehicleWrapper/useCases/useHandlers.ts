import {FilterParams} from "~/types/FilterParams";
import { initFiltersParams } from "~/constants/initFilterParams";
import {Ref} from "vue"


export const useHandlers = (filtersParams: Ref<FilterParams>) => {
    const clearClicked = () => {
        filtersParams.value = Object.assign(filtersParams.value, initFiltersParams);
    };

    const handlePageChange = (changedFilterParams: FilterParams) => {
        filtersParams.value.page = changedFilterParams.page;
    };

    return {
        clearClicked,
        handlePageChange
    }
}



