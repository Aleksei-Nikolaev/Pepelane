import { ref } from 'vue'
import { UploadChangeParam } from 'ant-design-vue'
import { UploadFile } from 'ant-design-vue/lib/upload/interface'
import { checkFileSize, checkImageType } from '~/utils/checkFileSize'
import { useAddVehicleValidation } from '~/useCases/modals/useAddVehicleModal/useCases/useAddVehicleValidation'
import { ImageUploadEmits } from '~/components/common/reusable/imageUpload/types'
import { eventNames } from '~/constants/events'

export const useImageUpload = (emits: ImageUploadEmits) => {
  const imageUrl = ref<string>('')
  const loading = ref<boolean>(false)
  const fileList = ref([])
  const { imgMaxSize } = useAddVehicleValidation()

  const getBase64 = (file: File | undefined) => {
    if (!file) { return }

    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  const rejectLoading = () => {
    loading.value = false

    return loading.value
  }

  const handleChange = async (info: UploadChangeParam) => {
    const { status, originFileObj } = info.file
    if (status) {
      emits(eventNames.UPDATE_VALUE, {
        fileUploadStatus: status
      })
    }

    if (status === 'uploading') {
      loading.value = true
      return
    }

    if (status === 'done') {
      imageUrl.value = (await getBase64(originFileObj)) as string
      emits('passTransformedImage', imageUrl.value)
    }
  }

  const beforeUpload = (file: UploadFile) => {
    const isImage = checkImageType(file)
    const isSize = checkFileSize(file, imgMaxSize)

    emits(eventNames.UPDATE_VALUE, {
      fileUploadStatus: null,
      isImage,
      isSize
    })

    if (!isImage || !isSize) {
      return rejectLoading()
    }
  }

  return {
    getBase64,
    loading,
    fileList,
    rejectLoading,
    beforeUpload,
    handleChange
  }
}
