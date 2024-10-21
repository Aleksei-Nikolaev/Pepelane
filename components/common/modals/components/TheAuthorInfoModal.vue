<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'
import TheImage from "~/components/common/reusable/TheImage.vue";

const emits = defineEmits<{
  (eventName: 'closeModal'): void;
}>()

const image = '/img/face.jpg'
</script>

<template>
  <OnClickOutside class="modal" @trigger="emits('closeModal')">
    <div class="modal__header">
      <h1 class="modal__heading">
        {{ $t("authorInfo.name") }}
      </h1>
      <a-button class="modal__close-button" @click="emits('closeModal')">
        <nuxt-icon class="modal__close-button-icon" name="close_cross" />
      </a-button>
    </div>
    <div class="modal__user-avatar__container">
      <TheImage class="modal__user-avatar" :url="image" :alt="'user_avatar'" />
    </div>
    <div class="modal__text-block">
      {{ $t("authorInfo.greetings") }}
    </div>
    <div class="modal__contact-container">
      <a href="tel: 07482025912" class="modal__link">Phone: +447482025912</a>
      <a href="mailto: nikolaev.alex.ig@gmail.com" class="modal__link">Email: alex.nikolaev.ig@gmail.com</a>
    </div>
  </OnClickOutside>

</template>

<style scoped lang="scss">
.modal {
  background-color: var(--base_0);
  height: 100%;
  width: 600px;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  border-radius: var(--border_radius_big) 0 0 var(--border_radius_big);
  justify-content: flex-start;
  padding: 64px 72px;
  overflow: auto;

  @include sm {
    height: 98%;
    width: 100%;
    border-radius: var(--border_radius_small) var(--border_radius_small) 0 0;
    margin-top: auto;
    padding: 28px 14px;
  }

  &__text-block {
    font-weight: var(--font_weight_medium);
    font-size: var(--font_size_medium);
    color: var(--base_300);
    margin-bottom: 50px;
  }

  &__link {
    font-weight: var(--font_weight_medium);
    font-size: var(--font_size_medium);
  }

  &__header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 48px;
    margin-bottom: 100px;

    @include sm {
      margin-bottom: 50px;
    }
  }

  &__heading {
    color: var(--base_500);
    font-size: var(--font_size_largest);
    font-weight: var(--font_weight_bold);

    @include sm {
      font-size: var(--font_size_big);
    }
  }

  &__close-button {
    margin-left: auto;
    height: 48px;
    width: 48px;
    padding: 10px 10px;
    border-radius: var(--border_radius_tiny);
    background-color: var(--base_50);
    border: 1px solid var(--base_100);

    &:hover {
      border: 1px solid var(--switched_main_400);
    }

    @include sm {
      height: 32px;
      width: 32px;
      border-radius: var(--border_radius_micro);
      padding: 4px 4px;
    }

    &-icon {
      height: 100%;
      width: 100%;
      color: var(--base_500);
    }
  }

  &__user-avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 100px;

    &__container {
      display: flex;
      justify-content: center;
    }
  }

  &__contact-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.modal::-webkit-scrollbar-track {
  @include sm {
    margin-top: 18px;
  }
}
</style>