<script setup lang="ts">
import {reactive, ref} from 'vue';
import type {Rule} from 'ant-design-vue/es/form';
import type {FormInstance} from 'ant-design-vue';
import {UserVehicle} from "~/types/userVehicle";
import TheImageUpload from "~/components/common/TheImageUpload.vue";

const formRef = ref<FormInstance>();
const userVehicleData = reactive<UserVehicle>({
  name: '',
  description: '',
  rent: null,
  isImage: false,
})

const regex = /^[A-Za-z]/;
const checkImage = async (_rule: Rule, value: string) => {
  if (!userVehicleData.isImage) {
    return Promise.reject('Please upload JPG or PNG image');
  } else {
    return Promise.resolve();
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
  if (!regex.test(value)) {
    return Promise.reject('Name must start with letter');
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
  name: [{required: true, validator: validateName, trigger: 'change'}],
  description: [{required: true, validator: validateDescription, trigger: 'change'}],
  rent: [{validator: checkRent, trigger: 'change'}],
  isImage: [{validator: checkImage, trigger: 'change'}],
};

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
          class="modal__drop-container"
          @image-deleted="userVehicleData.isImage = false"
          @image-uploaded="userVehicleData.isImage = true"
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
          class="input"
      />
    </a-form-item>
    <a-form-item
        has-feedback
        name="description"
    >
      <a-input
          v-model:value="userVehicleData.description"
          autocomplete="off"
          :placeholder="$t('imageUpload.inputPlaceholder.description')"
          class="input"
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
          class="input"
      >
        <template #suffix class="input">
          <a-tooltip>
            $/h
          </a-tooltip>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<style scoped lang="scss">


.input {
  height: 56px;
  background-color: var(--base_50);
}
</style>