import {IVehicle} from "~/types/vehicle";
import {FilterParams} from "~/types/FilterParams";
import {PaginationMeta} from "~/types/server/pagination";

export type VehiclesListProps = {
    vehicles: IVehicle[];
    filter: FilterParams;
    meta: PaginationMeta;
    renderItems: boolean;
}