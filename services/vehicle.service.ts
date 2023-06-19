import {ApiService} from "~/services/core/api.service";
import {IVehicle} from "~/types/vehicle";
import {getVehiclesResponse} from "~/services/types/vehicles";

export type getVehiclesRequestParams = {
    page?: number,
    pageSize?: number,
    sortBy?: string
    sortType?: string,
    type?: string,
}
export class VehicleService extends ApiService {
    getVehicles(params: getVehiclesRequestParams = {}): Promise<getVehiclesResponse> {
        return this.get("/vehicles/list", params)
    }
}

