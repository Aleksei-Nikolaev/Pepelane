import { IVehicle } from "~/types/vehicle";
import { PaginationMeta } from "~/types/server/pagination";
import { defaultResponseType } from "~/services/types/default";

export type getVehiclesResponse = {
  data: IVehicle[];
  meta: PaginationMeta;
};


export type getVehiclesRequestParams = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortType?: string;
  type?: string | null;
};

export type getVehicleByIdResponse = {
  data: IVehicle;
}

export type getVehicleTypesResponse = {
  data: string[];
}

export type createVehicleRequestBody = {
  name: string;
  description: string;
  rent: number;
  image: string;
  type: string;
}

export type createVehicleResponse = defaultResponseType




