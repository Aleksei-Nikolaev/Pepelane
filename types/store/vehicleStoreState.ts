import { IVehicle } from '~/types/vehicle'
import { PaginationMeta } from '~/types/server/pagination'
import { FilterParams } from '~/types/FilterParams'

export type vehicleStoreState = {
  data: IVehicle[];
  meta: PaginationMeta | null;
  filterParams: FilterParams;
};
