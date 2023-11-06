import { vehiclesSortOptions } from '~/constants/server/sort'

type sortType = 'ascending' | 'descending';
type sortBy = vehiclesSortOptions;

export interface vehiclesSortParams {
  sortBy: sortBy;
  sortType: sortType;
}
