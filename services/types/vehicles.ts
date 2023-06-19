import {IVehicle} from "~/types/vehicle";
import {PaginationMeta} from "~/types/server/pagination";

export type getVehiclesResponse = {
    data: IVehicle[],
    meta: PaginationMeta
}