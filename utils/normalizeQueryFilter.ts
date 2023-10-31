import {FilterParams} from "~/types/FilterParams";

export const normalizeQueryFilter = (filter: Partial<FilterParams>) => {
    if (filter.page) {
        filter.page = Number(filter.page)
    }
    if (filter.pageSize) {
        filter.pageSize = Number(filter.pageSize)
    }
    const normalizedFilter = filter;

    return normalizedFilter
}