import { ImageUploadState } from '~/components/common/TheImageUpload/types'

export const initStateFactory = () => {
  const createImgUploadState = (): ImageUploadState => {
    return {
      fileUploadStatus: null,
      isImage: null,
      isSize: null
    }
  }
  return {
    createImgUploadState
  }
}
