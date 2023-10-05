import {H3Event} from "h3";
import {createVehicleHelper} from "~/helpers/controllers/vehicle/createVehicle/createVehicle.helper";
import {writeVehicleHelper} from "~/helpers/controllers/vehicle/writeVehicle/writeVehicle.helper";



export const createVehicle = async (event: H3Event) => {
    const body = await readBody(event)

    if (!body) {
        throw createError({
            statusCode: 400,
            statusMessage: "Bad request",
        });
    }

    const {normalizeVehicleData} = createVehicleHelper(body)
    const normalizedVehicle = normalizeVehicleData()

    return writeVehicleHelper(normalizedVehicle)
}