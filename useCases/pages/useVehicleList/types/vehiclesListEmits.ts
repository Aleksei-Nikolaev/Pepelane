import { eventNames } from '~/constants/events'
import { FilterParams } from '~/types/entities/filterParams'

export type vehiclesListEmits = {
  (eventName: eventNames.UPDATE_FILTER, filter: FilterParams): void;
  (eventName: eventNames.ELEMENT_REMOVED): void;
};
