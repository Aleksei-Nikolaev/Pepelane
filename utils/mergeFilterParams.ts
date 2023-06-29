import {FilterParams} from "~/types/FilterParams";
import {LocationQuery} from "vue-router";
import merge from "lodash.merge";

export const mergeFilterParams = (initFiltersParams: FilterParams, routeQuery: LocationQuery): FilterParams => {
    const queryParams = {
        page: routeQuery.page,
        pageSize: routeQuery.pageSize,
        sortBy: routeQuery.sortBy,
        sortType: routeQuery.sortType,
        type: routeQuery.type,
    }

    return merge(initFiltersParams, queryParams)
}