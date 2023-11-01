import { createVehicle } from '~/controllers/vehicle/createVehicle'

export default defineEventHandler((event) => {
  return createVehicle(event)
})
