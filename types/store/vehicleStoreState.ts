import { IVehicle } from '~/types/entities/vehicle'
import { PaginationMeta } from '~/types/server/pagination'
import { FilterParams } from '~/types/entities/filterParams'

export type vehicleStoreState = {
  data: IVehicle[];
  meta: PaginationMeta | null;
  filterParams: FilterParams;
};
