<script setup lang="ts">
import { ref } from 'vue';
import type { UploadProps, UploadChangeParam } from 'ant-design-vue';
import {checkFileSize} from "~/utils/checkFileSize";
import {ImageUploadState} from "~/types/vendors/antd/ImageUploadStatus";
import {initStateFactory} from "~/factories/initStateFactory";
import {useAddVehicleValidation} from "~/composables/useAddVehicleModal/useCases/useAddVehicleValidation";

const props = defineProps<{
  uploadStatus: ImageUploadState;
}>();

const model = useModel(props, "uploadStatus");

const emits = defineEmits<{
  (eventName: "emitBase64", base64: string): void
  (eventName: "imgRemoved"): void
}>()

const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>("")
const {imgMaxSize} = useAddVehicleValidation()
const handleChange = async (info: UploadChangeParam) => {
  if (info.file.status) props.uploadStatus.fileUploadStatus =  info.file.status
  if (info.file.status === 'uploading') {
    loading.value = true;
    return;
  }
  if (info.file.status === "done") {
    imageUrl.value = await getBase64(info.file.originFileObj) as string
    emits("emitBase64", imageUrl.value)
  }
}

function getBase64(file: File | undefined) {
  if (!file) return

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const rejectLoading = () => {
  loading.value = false

  return loading.value
}

const beforeUpload = (file: UploadProps['fileList'][number]) => {
  const {fileUploadStatus, isImage, isSize} = toRefs(props.uploadStatus)

  fileUploadStatus.value = null
  isImage.value = file.type === 'image/jpeg' || file.type === 'image/png';
  isSize.value = checkFileSize(file, imgMaxSize)

  if (!props.uploadStatus.isImage || !props.uploadStatus.isSize) return rejectLoading()
};




</script>

<template>
  <div class="drop-zone">
    <a-upload
        v-model:file-list="fileList"
        v-show="props.uploadStatus.fileUploadStatus !== 'uploading'"
        list-type="picture-card"
        :max-count="1"
        :show-upload-list="{showPreviewIcon: false, showRemoveIcon: true}"
        :before-upload="beforeUpload"
        accept="image/*"
        class="drop-zone__upload"
        @change="handleChange"
        @remove="emits('imgRemoved')"
    >
        <nuxt-icon v-if="fileList.length < 1" name="image_upload" class="drop-zone__icon" filled/>
    </a-upload>
  </div>
</template>

<style scoped lang="scss">



.drop-zone {
  height: 350px;
  width: 100%;
  background-color: var(--base_50);
  border-radius: var(--border_radius_small);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;


  &__icon {
    color: var(--main_400);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;

    &-container {
      background-color: var(--base_0);
      width: 48px;
      height: 48px;
      border-radius: var(--border_radius_tiny);
    }
  }
}

:deep(.drop-zone__upload) {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border_radius_small);
}

:deep(.ant-upload-list-picture-card),
:deep(.ant-upload-select-picture-card),
:deep(.ant-upload-list-item-info),
:deep(.ant-upload-list-picture-card-container),
:deep(.ant-upload-list-item-list-type-picture-card) {
  width: 100%;
  height: 100%;
  border-radius: var(--border_radius_small);
  background-color: var(--base_50);
}

:deep(.ant-upload-list-item-progress) {
  display: none;
  visibility: hidden;
}


:deep(.ant-upload-list-item) {
  padding: 0 0;
}

:deep(.anticon-delete) {
  transform:  scale(1.4);
}



</style>