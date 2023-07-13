import {WheelDirection} from "~/composables/useVehicleList/useCases/useHandleWheel";
import {VehiclesListProps} from "~/composables/useVehicleList/types/vehiclesListProps";
import { useScrollDirection } from "~/composables/useVehicleList/useCases/useScrollDirection";
import {useHandleWheel} from "~/composables/useVehicleList/useCases/useHandleWheel";
import {eventNames} from "~/constants/events";
import {vehiclesListEmits} from "~/composables/useVehicleList/types/vehiclesListEmits";
import debounce from "lodash.debounce";
import {Ref} from "vue";
import {scrollDirection} from "~/constants/scrollDirection";



export const usePageChange = (props: VehiclesListProps, emits: vehiclesListEmits, scrollDirection: Ref<scrollDirection>) => {
    const { changeScrollDirection } = useScrollDirection(scrollDirection)
    const { handleWheel } = useHandleWheel();
    const pageEmit = (page: number) => {
        emits(eventNames.UPDATE_FILTER, {
            ...props.filter,
            page,
        });
    };
     const pageInc = (currentPage?: number) => {
        if (!currentPage || currentPage >= props.meta.totalPages) return;
        currentPage++;
        pageEmit(currentPage);
    };
    const pageDec = (currentPage?: number) => {
        if (!currentPage || currentPage <= 1) return;
        changeScrollDirection();
        currentPage--;
        pageEmit(currentPage);
    };

    const handleScroll = (event: WheelEvent) => {
        if (!props.filter.page) return;

        handleWheel(event) === WheelDirection.UP
            ? pageDec(props.filter.page)
            : pageInc(props.filter.page);
    };

    const debouncedHandleScroll = debounce(handleScroll, 600);

    return {
        debouncedHandleScroll
    }
}