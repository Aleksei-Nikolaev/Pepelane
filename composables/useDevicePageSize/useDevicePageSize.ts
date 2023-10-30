import {filterFactory} from "~/factories/filterFactory";
export const useDevicePageSize = () => {
    const {$device} = useNuxtApp();
    const {createFilter} = filterFactory()


    if ($device.isMobile) {
        return createFilter({pageSize: 4})
    }

    if ($device.isTablet) {
        return createFilter({pageSize: 8})
    }

    return createFilter({pageSize: 9})
}
