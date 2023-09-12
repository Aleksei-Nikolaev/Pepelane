<script setup lang="ts">
import {useVehicleStore} from "~/stores/VehicleStore";

const {resetFilters} = useVehicleStore()

</script>

<template>
  <div
      class="error-container"
  >
    <h1 class="error-container__message-main">{{ $t("errorPage.noDataMessage") }}</h1>
    <h2 class="error-container__message-minor">{{ $t("errorPage.returnToMain") }}</h2>
    <a-button
        type="primary"
        size="large"
        class="error-container__button"
        @click="resetFilters"
    >Reload main page
    </a-button>
  </div>
</template>

<style scoped lang="scss">
.error-container {
  background: var(--base_50);
  border-radius: var(--border_radius_big);
  width: 100%;
  padding: var(--padding_list);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(
      3 * var(--margin_card_horizontal) + 2 * var(--padding_list) + 3 * 164px
  );
  height: 700px;

  &__message {
    &-main {
      color: var(--base_500);
      font-size: var(--font_size_largest);
      font-weight: var(--font_weight_bold);
      height: 48px;
      margin-bottom: 0;
    }
    &-minor {
      color: var(--base_300);
      font-size: var(--font_size_tiny);
      font-weight: var(--font_weight_medium);
      margin-top: 24px;
      margin-bottom: 0;
    }
  }
}

:deep(.error-container__button) {
  width: 180px;
  height: 48px;
  font-size: var(--font_size_default);
  font-weight: var(--font_weight_bold);
  border-radius: var(--border_radius_mini);
  margin-top: 40px;
}
</style>