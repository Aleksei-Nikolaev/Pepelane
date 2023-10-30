<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'
import TheAddVehicleForm from "~/components/common/modal/forms/TheAddVehicleForm.vue";

const emits = defineEmits<{
  (eventName: "closeModal"): void;
}>()



</script>

<template>
    <OnClickOutside
        class="modal"
        @trigger="emits('closeModal')"
    >
          <div class="modal__header">
            <h1 class="modal__heading">{{ $t("addVehicleModal.heading") }}</h1>
            <a-button
                class="modal__close-button"
                @click="emits('closeModal')"
            >
              <nuxt-icon class="modal__close-button-icon" name="close_cross" />
            </a-button>
          </div>
          <TheAddVehicleForm
              ref="ignoreElRef"
          />
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

  &__header {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 48px;
    margin-bottom: 24px;

    @include sm {
      margin-bottom: 10px;
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


  &-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
    z-index: 1;
  }

  &__drop-container {
    margin-top: 40px;
  }
}

.modal::-webkit-scrollbar-track {
  @include sm {
    margin-top: 18px;
  }
}



</style>