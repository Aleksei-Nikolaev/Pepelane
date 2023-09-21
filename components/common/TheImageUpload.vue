<script setup lang="ts">
import { ref } from 'vue';
import type { UploadProps } from 'ant-design-vue';
import {antdUploadFileEvent} from "~/types/vendors/antd/antdUploadFileEvent";

const emits = defineEmits<{
  (eventName: "imageUploaded"): void;
  (eventName: "imageDeleted"): void;
}>()

const fileList = ref([]);
const isFile = ref<boolean | null>(null)
const isImage = ref<boolean | null>(null)


const handleChange = (event: antdUploadFileEvent) => {
  if (isImage.value && event.file.status === "done") {
    emits( "imageUploaded")
  }
}

const handleRemove = () => emits("imageDeleted")

const beforeUpload = (file: UploadProps['fileList'][number]) => {
  isImage.value = file.type === 'image/jpeg' || file.type === 'image/png';
};
</script>

<template>
  <div class="drop-zone">
    <a-upload
        v-model:file-list="fileList"
        list-type="picture-card"
        :max-count="1"
        :show-upload-list="{showPreviewIcon: false, showRemoveIcon: true}"
        :before-upload="beforeUpload"
        accept="image/*"
        class="drop-zone__upload"
        @change="handleChange"
        @remove="handleRemove"
    >
      <div class="drop-zone__icon-container">
        <nuxt-icon v-if="fileList.length < 1" name="image_upload" class="drop-zone__icon" filled/>
      </div>
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
//
//:deep(.ant-upload-select-picture-card) {
//  width: 100%;
//  height: 100%;
//}


</style>