import {FilterParams, sortName, sortType} from "~/types/FilterParams";
import {useMediaQuery} from "@vueuse/core/index";

export const filterFactory = () => {
    const createFilter = (params?: FilterParams) :FilterParams => {
        const isMobile = useMediaQuery('(max-width: 768px)')
        const isMediumScreen = useMediaQuery('(max-width: 1200px)')
        const pageSize = ref<number>(9)
        if (isMediumScreen.value)  pageSize.value = 6
        if (isMobile.value) pageSize.value = 4


        return {
            page: 1,
            pageSize: pageSize.value,
            sortBy: sortName.RENT,
            sortType: sortType.DESCENDING,
            type: null,
            ...params ?? {}
        }
    }
    return {
        createFilter
    }
}