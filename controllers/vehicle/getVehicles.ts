import { H3Event } from 'h3'
import { VehicleModel } from '~/models/vehicle.model'
import { PaginationMeta } from '~/types/server/pagination'
import { jsonParse } from '~/utils/server/jsonParse'
import { getVehiclesSortHelper } from '~/helpers/controllers/vehicle/getVehicle/getVehicleSort.helper'
import { getVehicleFilterHelper } from '~/helpers/controllers/vehicle/getVehicle/getVehicleFilter.helper'
import { getVehiclePaginationHelper } from '~/helpers/controllers/vehicle/getVehicle/getVehiclePagination.helper'

export const getVehicles = (event: H3Event) => {
  const query = getQuery(event)

  let vehicles: VehicleModel[] = jsonParse()

  let meta: PaginationMeta | null = null

  const { page, pageSize, sortBy, sortType, type } = query

  if (sortBy && sortType) {
    vehicles = getVehiclesSortHelper(vehicles, {
      sortBy,
      sortType
    })
  }

  if (type) {
    vehicles = getVehicleFilterHelper(vehicles, type)
  }

  const { vehicles: vehiclesNew, meta: metaNew } = getVehiclePaginationHelper(page, pageSize, vehicles)

  vehicles = vehiclesNew
  meta = metaNew

  return {
    data: vehicles,
    meta
  }
}
