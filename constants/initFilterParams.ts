import {sortName, sortType} from "~/types/FilterParams";

export const initFiltersParams = {
    page: 1,
    pageSize: 9,
    sortBy: sortName.RENT,
    sortType: sortType.DESCENDING,
    type: null,
};