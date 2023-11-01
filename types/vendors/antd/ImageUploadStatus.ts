import { UploadFileStatus } from 'ant-design-vue/es/upload/interface'
export interface ImageUploadState {
  isImage: boolean | null;
  fileUploadStatus: UploadFileStatus | null;
  isSize: boolean | null;
}
