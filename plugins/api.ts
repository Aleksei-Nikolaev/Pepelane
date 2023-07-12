import { $fetch } from "ofetch";
import { VehicleService } from "~/services/vehicle.service";

export interface IApi {
  vehicleService: VehicleService;
}

let $api: IApi;

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  const fetchWrapper = $fetch.create({
    baseURL: runtimeConfig.public.baseUrl,
  });

  $api = {
    vehicleService: new VehicleService(fetchWrapper),
  };

  return {
    provide: {
      api: $api,
    },
  };
});

export { $api };
