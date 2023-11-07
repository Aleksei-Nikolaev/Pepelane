<script setup lang="ts">
import { IVehicle } from '~/types/entities/vehicle'

defineProps<{
  price: IVehicle['rent'];
}>()

const { t } = useI18n()
const { $toast: notify } = useNuxtApp()

const onOrder = () => {
  const message = t('notificationMessage.vehicleOrdered')
  notify.success(message)
}
</script>

<template>
  <div class="rent__wrapper">
    <div class="rent__container">
      <h2 class="rent__text">
        Rent for <span class="rent__price">{{ price }}$</span>
      </h2>
      <a-button
        type="primary"
        size="large"
        class="rent__button"
        @click="onOrder"
      >
        Rent now
      </a-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rent {
  &__wrapper {
    margin-top: auto;
    @include sm {
      z-index: 2;
      margin-top: 40px;
      position: fixed;
      bottom: 0;
      height: 80px;
      width: calc(100% - 2 * var(--padding-mobile-content));
      background: linear-gradient(to bottom, transparent 1%, var(--base_0) 10%);
    }
  }
  &__container {
    border-radius: var(--border_radius_tiny);
    background: var(--base_50);
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0 32px;
    margin-top: 40px;

    @include md {
      padding: 0 16px;
    }

    @include sm {
      height: 68px;
      width: 100%;
      box-shadow: 0 -10px 15px var(--base_0);
      margin-top: 0;
    }
  }

  &__text {
    font-size: var(--font_size_medium_increase);
    font-weight: var(--font_weight_bold);
    color: var(--base_500);
    margin: 0;

    @include sm {
      font-size: var(--font_size_default);
    }
  }

  &__price {
    color: var(--secondary_400);
  }
}

:deep(.rent__button) {
  margin-left: auto;
  font-size: var(--font_size_default);
  font-weight: var(--font_weight_bold);
  border-radius: var(--border_radius_mini);
  width: 136px;
  height: 48px;

  @include sm {
    font-size: var(--font_size_tiny);
    width: 110px;
    height: 44px;
  }
}
</style>
