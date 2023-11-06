import { UserVehicle } from '~/types/entities/userVehicle'

export const useAddVehicleFormFactory = () => {
  const create = (initState?: UserVehicle) => {
    return {
      name: '',
      description: '',
      rent: null,
      image: '',
      type: null,
      ...(initState ?? {})
    }
  }

  return {
    create
  }
}
