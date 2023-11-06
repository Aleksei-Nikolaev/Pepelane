<script setup lang="ts">
import { ImageUploadEmits, ImageUploadProps } from './types'
import { useImageUpload } from '~/useCases/reusable/useImageUpload/useImageUpload'

const props = defineProps<ImageUploadProps>()

const emits = defineEmits<ImageUploadEmits>()

const { fileList, beforeUpload, handleChange } = useImageUpload(emits)

</script>

<template>
  <div class="drop-zone">
    <a-upload
      v-show="props.uploadStatus.fileUploadStatus !== 'uploading'"
      v-model:file-list="fileList"
      list-type="picture-card"
      :max-count="1"
      :show-upload-list="{ showPreviewIcon: false, showRemoveIcon: true }"
      :before-upload="beforeUpload"
      accept=".jpg, .png"
      class="drop-zone__upload"
      @change="handleChange"
      @remove="emits('imgRemoved')"
    >
      <nuxt-icon
        v-if="fileList.length === 0"
        name="image_upload"
        class="drop-zone__icon"
        filled
      />
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

  @include sm {
    height: 200px;
  }

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
  transform: scale(1.4);
}
</style>
