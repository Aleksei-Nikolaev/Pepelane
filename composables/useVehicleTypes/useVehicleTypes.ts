import { capitalizeFirstLetter } from '~/utils/capitalizeFirstLetter'
import { optionObject } from '~/types/vendors/antd/optionObject'
import { $api } from '~/plugins/api'
import { getVehicleTypesResponse } from '~/services/types/vehicles'

export const useVehicleTypes = () => {
  const vehicleTypes = ref<optionObject[]>([])

  const fetchVehicleTypes = async () => {
    const { data: types } = await $api.vehicleService.getVehicleTypes()

    vehicleTypes.value = normalizeVehicleTypes(types)
  }

  const normalizeVehicleTypes = (types: getVehicleTypesResponse['data']) => {
    return types.reduce((array: optionObject[], currentValue: string) => {
      array.push({
        value: currentValue,
        label: capitalizeFirstLetter(currentValue)
      })
      return array
    }, [])
  }

  const vehicleFilterTypes = computed(() => {
    return [
      ...vehicleTypes.value,
      {
        value: null,
        label: 'All'
      }
    ]
  })

  fetchVehicleTypes()

  return {
    vehicleTypes,
    vehicleFilterTypes
  }
}
