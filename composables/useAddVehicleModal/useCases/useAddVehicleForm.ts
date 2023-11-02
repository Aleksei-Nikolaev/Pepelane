import { ref } from 'vue'
import type { FormInstance } from 'ant-design-vue'
import { pipe } from 'fp-ts/function'
import { UserVehicle } from '~/types/userVehicle'
import { useAddVehicleValidation } from '~/composables/useAddVehicleModal/useCases/useAddVehicleValidation'
import { useHandleVehiclesTypes } from '~/composables/useHandleVehiclesApi/useHandleVehiclesTypes'
import { useAddVehicleFormFactory } from '~/composables/useAddVehicleModal/factories/useAddVehicleFormFactory'
import { $api } from '~/plugins/api'
import { createVehicleRequestBody } from '~/services/types/vehicles'
import { useShowModal } from '~/composables/useVehicleWrapper/useCases/useShowModal'
import { useVehicleStore } from '~/stores/VehicleStore'
import { CreateStatusCode } from '~/types/createStatusCode'
import { useImageUploadStatus } from '~/composables/useImageUpload/useImageUploadStatus'

export const useAddVehicleForm = () => {
  const { create } = useAddVehicleFormFactory()

  const formRef = ref<FormInstance>()
  const userVehicleData = ref<UserVehicle>(create())

  const { vehicleTypes } = useHandleVehiclesTypes()

  const selectRef = ref<HTMLImageElement | null>(null)

  const { rules } = useAddVehicleValidation()

  const { closeModal } = useShowModal()

  const disabledButton = ref<boolean>(false)

  const { updateFilterParams } = useVehicleStore()

  const { imageUploadStatusUpdate, imageUploadStatus } = useImageUploadStatus()

  const { $toast: notify } = useNuxtApp()

  const { t } = useI18n()

  const handleImageData = (base64: string) => {
    userVehicleData.value.image = base64
  }

  const onImgRemoved = () => {
    imageUploadStatusUpdate({
      isImage: null,
      isSize: null
    })
  }

  const normalizePayLoad = (form: UserVehicle): createVehicleRequestBody => {
    return {
      name: form.name ?? '',
      description: form.description ?? '',
      rent: form.rent ? Number(form.rent) : 0,
      image: form.image ?? '',
      type: form.type ?? ''
    }
  }

  const onFinish = async () => {
    disabledButton.value = true
    const payLoad = pipe(userVehicleData, unref, normalizePayLoad)

    const res = await $api.vehicleService.createVehicle(payLoad)

    if (res.statusCode === CreateStatusCode.SUCCESS) {
      const message = t('notificationMessage.vehicleAdded')
      const newFilter = {
        type: payLoad.type
      }

      pipe(newFilter, updateFilterParams)

      notify.success(message)
    }
    if (res.statusCode === CreateStatusCode.ERROR) {
      const message = t('notificationMessage.vehicleAddedError')
      notify.error(message)
    }

    if (res.statusCode) {
      closeModal()
    }
  }

  return {
    formRef,
    userVehicleData,
    vehicleTypes,
    selectRef,
    imageUploadStatus,
    rules,
    disabledButton,
    handleImageData,
    imageUploadStatusUpdate,
    onImgRemoved,
    onFinish
  }
}
