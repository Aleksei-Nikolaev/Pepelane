<script setup lang="ts">
import {useVehicleStore} from "~/stores/VehicleStore";

const {resetFilters} = useVehicleStore()

</script>
<template>
  <div
      class="no-data__container"
  >
    <h1 class="no-data__container-message-main">{{ $t("noDataPage.noDataMessage") }}</h1>
    <h2 class="no-data__container-message-minor">{{ $t("noDataPage.resetMessage") }}</h2>
    <a-button
        type="primary"
        size="large"
        class="no-data__container-button"
        @click="resetFilters"
    >
      {{ $t("noDataPage.buttonMessage") }}
    </a-button>
  </div>
</template>

<style scoped lang="scss">
.no-data__container {
  background: var(--base_50);
  border-radius: var(--border_radius_big);
  width: 100%;
  padding: var(--padding_list);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;

  &-message {
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

:deep(.no-data__container-button) {
  width: 180px;
  font-size: var(--font_size_default);
  font-weight: var(--font_weight_bold);
  border-radius: var(--border_radius_mini);
  margin-top: 40px;
}
</style>