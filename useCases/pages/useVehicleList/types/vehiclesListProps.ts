import { IVehicle } from '~/types/entities/vehicle'
import { FilterParams } from '~/types/entities/filterParams'
import { PaginationMeta } from '~/types/server/pagination'

export type VehiclesListProps = {
  vehicles: IVehicle[];
  filter: FilterParams;
  meta: PaginationMeta | null;
  renderItems: boolean;
};
