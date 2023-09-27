<script setup lang="ts">
import {reactive, ref} from 'vue';
import type {Rule} from 'ant-design-vue/es/form';
import type {FormInstance} from 'ant-design-vue';
import {UploadFileStatus} from "ant-design-vue/es/upload/interface";
import {UserVehicle} from "~/types/userVehicle";
import TheImageUpload from "~/components/common/TheImageUpload.vue";
import {ImageUploadStatus} from "~/types/vendors/antd/ImageUploadStatus";

const formRef = ref<FormInstance>();
const userVehicleData = reactive<UserVehicle>({
  name: '',
  description: '',
  rent: null,
  image: '',
})

const imageUploadStatus = ref<ImageUploadStatus>({
  fileUploadStatus: null,
  isImage: null
})

const regexLetters = /^[A-Za-z]/;


const checkImage = async () => {
  if (imageUploadStatus.value.fileUploadStatus === "uploading") return Promise.resolve();
  if (imageUploadStatus.value.fileUploadStatus === "done" && imageUploadStatus.value.isImage) {
    return Promise.resolve();
  } else {
    return Promise.reject('Please upload JPG or PNG image');
  }
}

const checkRent = async (_rule: Rule, value: number) => {
  if (!value) {
    return Promise.reject('Please input the price');
  }
  if (isNaN(Number(value))) {
    return Promise.reject('Please input digits');
  }
  if (!Number.isInteger(Number(value))) {
    return Promise.reject('Please input integer number');
  }
  if (!(Number(value) < 10000)) {
    return Promise.reject('Price must be less than 10000$');
  } else {
    return Promise.resolve();
  }
};
const validateName = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the name');
  }
  if (!regexLetters.test(value)) {
    return Promise.reject('Name must start with latin letter');
  }
  if (value.length < 4) {
    return Promise.reject('Name must contain at least 4 characters');
  } else {
    return Promise.resolve();
  }
};
const validateDescription = async (_rule: Rule, value: string) => {
  if (value === '') {
    return Promise.reject('Please input the description');
  }
  if (value.length < 10) {
    return Promise.reject('Description must contain at least 10 characters');
  } else {
    return Promise.resolve();
  }
};

const rules: Record<string, Rule[]> = {
  name: [{validator: validateName, trigger: 'change'}],
  description: [{ validator: validateDescription, trigger: 'change'}],
  rent: [{ validator: checkRent, trigger: 'change'}],
  isImage: [{ validator: checkImage, trigger: 'change'}],
};

const handleImageStatus = (status: UploadFileStatus) => {
  imageUploadStatus.value.fileUploadStatus = status
}

const imageDeleted = () => {
  userVehicleData.image = ''
  imageUploadStatus.value.isImage = null;
}

const handleImageData = (base64: string) => {
  userVehicleData.image = base64
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
          class="modal__drop-container"
          @image-deleted="imageDeleted"
          @image-status="handleImageStatus"
          @image-added="imageUploadStatus.isImage = true"
          @emit-base64="handleImageData"
      />
    </a-form-item>
    <a-form-item
        has-feedback
        name="name"
    >
      <a-input
          v-model:value="userVehicleData.name"
          autocomplete="off"
          :placeholder="$t('imageUpload.inputPlaceholder.name')"
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
          :placeholder="$t('imageUpload.inputPlaceholder.description')"
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
          :placeholder="$t('imageUpload.inputPlaceholder.rent')"
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