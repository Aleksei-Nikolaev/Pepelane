import { UploadFile } from 'ant-design-vue/lib/upload/interface'

export const checkFileSize = (file: UploadFile, sizeLimit: number) => {
  if (!file.size) { return false }

  return file.size / 1024 / 1024 < sizeLimit
}

export const checkImageType = (file: UploadFile) => {
  if (!file.type) { return false }

  const allowedTypes = ['image/jpeg', 'image/png']

  return allowedTypes.includes(file.type)
}
