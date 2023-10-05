<script setup lang="ts">
import TheImageUpload from "~/components/common/TheImageUpload.vue";
import {useAddVehicleForm} from "~/composables/useAddVehicleModal/useCases/useAddVehicleForm";

const {
  formRef,
  userVehicleData,
  vehicleTypes,
  selectRef,
  imageUploadStatus,
  rules,
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
    <a-form-item
        name="isImage"
    >
      <TheImageUpload
          v-model:value="userVehicleData.image"
          :upload-status="imageUploadStatus"
          @emit-base64="handleImageData"
          @img-removed="onImgRemoved"
      />
    </a-form-item>
    <a-form-item
        has-feedback
        name="type"
    >
      <div
          ref="selectRef"
          class="drop-menu__dropdown-container"
      />
      <a-select
          v-model:value="userVehicleData.type"
          :placeholder="$t('addVehicleModal.form.inputPlaceholder.type')"
          :options="vehicleTypes"
          :getPopupContainer="() => selectRef"
      >
      </a-select>
    </a-form-item>
    <a-form-item
        has-feedback
        name="name"
    >
      <a-input
          v-model:value="userVehicleData.name"
          autocomplete="off"
          :placeholder="$t('addVehicleModal.form.inputPlaceholder.name')"
          class="form__input"
          v-maska data-maska="@@@@@@@@@@"
      />
    </a-form-item>
    <a-form-item
        has-feedback
        name="description"
    >
      <a-textarea
          v-model:value="userVehicleData.description"
          autocomplete="off"
          :placeholder="$t('addVehicleModal.form.inputPlaceholder.description')"
          class="form__input text-area"
      />
    </a-form-item>
    <a-form-item
        has-feedback
        name="rent"
    >
      <a-input
          v-model:value="userVehicleData.rent"
          autocomplete="off"
          :placeholder="$t('addVehicleModal.form.inputPlaceholder.rent')"
          v-maska data-maska="####"
          class="form__input"
      >
        <template #suffix class="form__input">
          <a-tooltip class="form__input">
            $/h
          </a-tooltip>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button class="form_button" type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped lang="scss">


.form__input,
:deep(.ant-select .ant-select-selector) {
  height: 46px;
}

.form__input,
:deep(.ant-input),
:deep(.ant-select .ant-select-selector) {
  background-color: var(--base_50);
  font-size: var(--font_size_default);
  font-weight: var(--font_weight_medium);
  color: var(--base_300);
}

:deep(.form_button) {
  width: 100%;
  height: 56px;
  margin-top: 20px;
}

:deep(.ant-form-item-control-input-content) {
  padding: 0 0;
}

:deep(.ant-select-selector) {
  display: flex;
  align-items: center;
}



.drop-menu__dropdown-container {
  margin-top: 20px;
}

.text-area {
  padding-top: 10px;
}


</style>