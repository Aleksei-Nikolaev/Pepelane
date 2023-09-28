import {UploadProps} from "ant-design-vue";
export const checkFileSize = (file: UploadProps['fileList'][number], sizeLimit: number) => {
    return file.size / 1024 / 1024 < sizeLimit
}