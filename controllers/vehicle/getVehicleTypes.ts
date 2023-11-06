import { availableFilterTypes } from '~/constants/server/availableFilterTypes'

export const getVehicleTypes = () => {
  return {
    data: availableFilterTypes
  }
}
