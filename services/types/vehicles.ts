import {IVehicle} from "~/types/vehicle";
import {PaginationMeta} from "~/types/server/pagination";

export type getVehiclesResponse = {
    data: IVehicle[],
    meta: PaginationMeta
}

export type getVehiclesRequestParams = {
    page?: number,
    pageSize?: number,
    sortBy?: string
    sortType?: string,
    type?: string | null,
}