import { getVehiclesRequestParams } from "~/services/types/vehicles";
export enum sortName {
  RENT = "rent",
  NAME = "name",
}

export enum sortType {
  ASCENDING = "ascending",
  DESCENDING = "descending",
}

export type FilterParams = getVehiclesRequestParams;
