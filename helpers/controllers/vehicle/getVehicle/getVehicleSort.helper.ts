import { sortList } from '~/utils/server/listParams/sortList'
import { vehiclesSortOptions } from '~/constants/server/sort'
import { VehicleModel } from '~/models/vehicle.model'
import { rawSortParams } from '~/helpers/controllers/vehicle/getVehicle/types/getVehicleSort.helper.types'
import { vehiclesSortParams } from '~/types/server/vehiclesSortList'

export const getVehiclesSortHelper = (
  vehicles: VehicleModel[],
  sortParams: rawSortParams
) => {
  const { sortBy, sortType } = sortParams

  if (sortType !== 'ascending' && sortType !== 'descending') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad request'
    })
  }

  if (!(String(sortBy) in vehiclesSortOptions)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad request'
    })
  }

  const params = {
    sortBy,
    sortType
  } as vehiclesSortParams

  const { sortByNumber, sortByAlphabet } = sortList(vehicles, params)

  switch (sortBy) {
    case vehiclesSortOptions.rent:
      return sortByNumber()
    case vehiclesSortOptions.name:
      return sortByAlphabet(vehiclesSortOptions.name)
    default:
      return vehicles
  }
}
