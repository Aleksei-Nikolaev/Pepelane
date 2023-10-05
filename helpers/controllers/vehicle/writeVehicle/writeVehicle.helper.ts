import {VehicleModel} from "~/models/vehicle.model";
import * as fs from "fs";
import {jsonParse} from "~/utils/server/jsonParse";
import {fileURLToPath} from "url";

export const writeVehicleHelper = (vehicleData: VehicleModel) => {
    const getModulesPath = fileURLToPath(new URL('../../db/vehicles.json', import.meta.url))

    const currentData = jsonParse()

    currentData.push(vehicleData)

    const updatedJson = JSON.stringify(currentData)

    try {
        fs.writeFileSync(getModulesPath, updatedJson)
        return {
            statusCode: 200,
            statusMessage: "Done"
        }

    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "DB error",
        });

    }
}