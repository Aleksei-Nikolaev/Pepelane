import {eventNames} from "~/constants/events";
import {FilterParams} from "~/types/FilterParams";

export type vehiclesListEmits = {
    (eventName: eventNames.UPDATE_FILTER, filter: FilterParams): void;
    (eventName: eventNames.ELEMENT_REMOVED): void;
}