<script setup lang="ts">
import TheImage from '~/components/common/reusable/TheImage.vue'
import {Modals} from "~/constants/modals/modals";
import {useShowModal} from "~/useCases/modals/useShowModal";

const { openModal } = useShowModal()

const image = '/img/face.jpg'
</script>

<template>
  <div
      class="user-info__container"
      @click="openModal(Modals.AUTHOR_INFO)"
  >
    <span class="user-info__name">Aleksei Nikolaev</span>
    <TheImage class="user-info__image" :url="image" :alt="'user_avatar'" />
  </div>
</template>

<style scoped lang="scss">
.user-info {
  &__container {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 20px;
    @include sm {
      margin-left: 0;
    }
    cursor: pointer;
  }

  &__name {
    color: var(--base_500);
    font-size: var(--font_size_default);
    font-weight: var(--font_weight_bold);
    @include sm {
      display: none;
    }
  }

  &__image {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-left: 16px;
    @include sm {
      width: 42px;
      height: 42px;
    }
  }
}
</style>
