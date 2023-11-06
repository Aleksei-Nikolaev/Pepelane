import { ImageUploadState } from '~/components/common/reusable/imageUpload/types'

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
