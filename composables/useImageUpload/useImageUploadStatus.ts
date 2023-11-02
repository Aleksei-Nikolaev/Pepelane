import { ref } from 'vue'
import { initStateFactory } from '~/factories/initStateFactory'
import { ImageUploadState } from '~/components/common/TheImageUpload/types'

const { createImgUploadState } = initStateFactory()
const imageUploadStatus = ref<ImageUploadState>(createImgUploadState())

export const useImageUploadStatus = () => {
  const imageUploadStatusUpdate = (status: Partial<ImageUploadState>) => {
    imageUploadStatus.value = {
      ...imageUploadStatus.value,
      ...status
    }
  }

  return {
    imageUploadStatus,
    imageUploadStatusUpdate
  }
}
