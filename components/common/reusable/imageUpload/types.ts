import { UploadFileStatus } from 'ant-design-vue/es/upload/interface'
import { eventNames } from '~/constants/events'

export type ImageUploadState = {
    isImage: boolean | null;
    fileUploadStatus: UploadFileStatus | null;
    isSize: boolean | null;
}

export type ImageUploadEmits = {
    (eventName: eventNames.UPDATE_VALUE, value: Partial<ImageUploadState>): void;
    (eventName: 'passTransformedImage', base64: string): void;
    (eventName: 'imgRemoved'): void;
}

export type ImageUploadProps = {
    uploadStatus: ImageUploadState;
}
