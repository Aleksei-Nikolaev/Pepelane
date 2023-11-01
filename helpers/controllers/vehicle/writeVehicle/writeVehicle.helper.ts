import * as fs from 'fs'
import { fileURLToPath } from 'url'
import { VehicleModel } from '~/models/vehicle.model'
import { jsonParse } from '~/utils/server/jsonParse'

export const writeVehicleHelper = (vehicleData: VehicleModel) => {
  const getModulesPath = fileURLToPath(
    new URL('../../db/vehicles.json', import.meta.url)
  )

  const currentData = jsonParse()

  // Set capacity of "DB"
  if (currentData.length < 110) {
    currentData.push(vehicleData)
  } else {
    currentData.splice(100, 10, vehicleData)
  }

  const updatedJson = JSON.stringify(currentData)

  try {
    fs.writeFileSync(getModulesPath, updatedJson)
    return {
      statusCode: 200,
      statusMessage: 'Done'
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'DB error'
    })
  }
}
