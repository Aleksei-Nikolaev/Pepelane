import {ApiService} from "~/services/core/api.service";
import {getVehiclesResponse, getVehiclesRequestParams} from "~/services/types/vehicles";


export class VehicleService extends ApiService {
    getVehicles(params: getVehiclesRequestParams = {}): Promise<getVehiclesResponse> {
        return this.get("/vehicles/list", params)
    }
}

