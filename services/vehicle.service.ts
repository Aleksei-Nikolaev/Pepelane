import { ApiService } from "~/services/core/api.service";
import {
  getVehiclesResponse,
  getVehiclesRequestParams,
  getVehicleByIdResponse,
  getVehicleTypesResponse, createVehicleRequestParams, createVehicleRequestBody
} from "~/services/types/vehicles";

export class VehicleService extends ApiService {
  getVehicles(
    params: getVehiclesRequestParams = {}
  ): Promise<getVehiclesResponse> {
    return this.get("/vehicles/list", params);
  }

  getVehicleById(
      id: string
  ): Promise<getVehicleByIdResponse> {
    return this.get(`/vehicles/${id}`)
  }

  getVehicleTypes(): Promise<getVehicleTypesResponse> {
    return this.get(`/vehicles/types`)
  }

  createVehicle(data: createVehicleRequestBody): Promise<createVehicleRequestParams> {
    return this.post(`/vehicles/create`, data)
  }
}
