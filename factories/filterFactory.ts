import {FilterParams, sortName, sortType} from "~/types/FilterParams";
export const filterFactory = () => {
    const createFilter = () :FilterParams => {
        return {
            page: 1,
            pageSize: 9,
            sortBy: sortName.RENT,
            sortType: sortType.DESCENDING,
            type: null,
        }
    }
    return {
        createFilter
    }
}