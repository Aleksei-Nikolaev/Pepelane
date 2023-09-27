import {UploadFileStatus} from "ant-design-vue/es/upload/interface";
export interface ImageUploadStatus {
    isImage: boolean | null;
    fileUploadStatus: UploadFileStatus | null;
}