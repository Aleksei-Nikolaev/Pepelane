import { IVehicle } from "~/types/vehicle";
import { PaginationMeta } from "~/types/server/pagination";

export type vehicleStoreState = {
  data: IVehicle[];
  meta: PaginationMeta | null;
};
