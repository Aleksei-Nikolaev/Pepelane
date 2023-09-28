<script setup lang="ts">
import {reactive, ref} from 'vue';
import type {FormInstance} from 'ant-design-vue';
import {UserVehicle} from "~/types/userVehicle";
import TheImageUpload from "~/components/common/TheImageUpload.vue";
import {useAddVehicleValidation} from "~/composables/useAddVehicleModal/useCases/useAddVehicleValidation";

const formRef = ref<FormInstance>();
const userVehicleData = reactive<UserVehicle>({
  name: '',
  description: '',
  rent: null,
  image: '',
})

const {imageUploadStatus, rules} = useAddVehicleValidation()


const handleImageData = (base64: string) => {
  userVehicleData.image = base64
}

const onImgRemoved = () => {
  imageUploadStatus.value.isImage = null;
  imageUploadStatus.value.isSize = null;
}

const onFinish = () => {
  alert("Схавало")
}

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
          class="modal__drop-container"
          @emit-base64="handleImageData"
          @img-removed="onImgRemoved"
      />
    </a-form-item>
    <a-form-item
        has-feedback
        name="name"
    >
      <a-input
          v-model:value="userVehicleData.name"
          autocomplete="off"
          :placeholder="$t('addVehicleModal.form.inputPlaceholder.name')"
          class="form__input "
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
          class="form__input "
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
        <template #suffix class="form__input ">
          <a-tooltip class="form__input ">
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
.form__input {
  height: 56px;
}

.form__input,
:deep(.ant-input) {
  background-color: var(--base_50);
  font-size: var(--font_size_default);
  font-weight: var(--font_weight_medium);
  color: var(--base_300);
  font-family: "Codec Pro", sans-serif;
}

:deep(.form_button) {
  width: 100%;
  height: 56px;
}

:deep(.ant-form-item-control-input-content) {
  padding: 0 0;
}

</style>