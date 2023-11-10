<script setup lang="ts">
import TheImageUpload from '~/components/common/reusable/imageUpload/TheImageUpload.vue'
import { useAddVehicleForm } from '~/useCases/modals/useAddVehicleModal/useCases/useAddVehicleForm'

const {
  formRef,
  userVehicleData,
  vehicleTypes,
  selectRef,
  imageUploadStatus,
  rules,
  disabledButton,
  imageUploadStatusUpdate,
  handleImageData,
  onImgRemoved,
  onFinish
} = useAddVehicleForm()
</script>

<template>
  <a-form
    ref="formRef"
    :model="userVehicleData"
    :rules="rules"
    @finish="onFinish"
  >
    <a-form-item name="isImage">
      <TheImageUpload
        :upload-status="imageUploadStatus"
        @pass-transformed-image="handleImageData"
        @img-removed="onImgRemoved"
        @update:value="imageUploadStatusUpdate"
      />
    </a-form-item>
    <a-form-item has-feedback name="type">
      <div ref="selectRef" class="drop-menu__dropdown-container" />
      <a-select
        v-model:value="userVehicleData.type as string"
        :placeholder="$t('addVehicleModal.forms.inputPlaceholder.type')"
        :options="vehicleTypes"
        :get-popup-container="() => selectRef as HTMLImageElement"
      />
    </a-form-item>
    <a-form-item has-feedback name="name">
      <a-input
        v-model:value="userVehicleData.name"
        v-maska
        autocomplete="off"
        :placeholder="$t('addVehicleModal.forms.inputPlaceholder.name')"
        class="form__input"
        data-maska="@@@@@@@@@@"
      />
    </a-form-item>
    <a-form-item has-feedback name="description">
      <a-textarea
        v-model:value="userVehicleData.description"
        autocomplete="off"
        :placeholder="$t('addVehicleModal.forms.inputPlaceholder.description')"
        class="form__input text-area"
      />
    </a-form-item>
    <a-form-item has-feedback name="rent">
      <a-input
        v-model:value="userVehicleData.rent as number"
        v-maska
        autocomplete="off"
        :placeholder="$t('addVehicleModal.forms.inputPlaceholder.rent')"
        data-maska="####"
        class="form__input"
      >
        <template #suffix>
          <a-tooltip>$/h</a-tooltip>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        class="form_button"
        type="primary"
        html-type="submit"
        :disabled="disabledButton"
      >
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped lang="scss">
@import "assets/styles/vendors/antd/antd-theme";

.form__input,
:deep(.ant-select .ant-select-selector) {
  height: 46px;
}

.form__input {
  background-color: var(--base_50);
  font-size: var(--font_size_default);
  font-weight: var(--font_weight_medium);
  color: var(--base_300);
}

:deep(.form_button) {
  width: 100%;
  height: 56px;
  margin-top: 20px;

  @include sm {
    height: 48px;
    margin-top: 14px;
  }
}

:deep(.ant-form-item-control-input-content) {
  padding: 0 0;
}

:deep(.ant-select-selector) {
  display: flex;
  align-items: center;
}

:deep(.ant-form-item-control-input-content) {
  display: flex;
}

.drop-menu__dropdown-container {
  margin-top: 20px;
}

.text-area {
  padding-top: 10px;
}
</style>
