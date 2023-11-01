import { ImageUploadState } from '~/types/vendors/antd/ImageUploadStatus'

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
