<script setup lang="ts">
import TheHeader from '~/components/common/pageSections/header/TheHeader.vue'
</script>

<template>
  <div class="content">
    <TheHeader />
    <div class="error__container">
      <h1 class="error__container-message-main">
        {{ $t("errorPage.errorMessage") }}
      </h1>
      <h2 class="error__container-message-minor">
        {{ $t("errorPage.reloadMessage") }}
      </h2>
      <a-button
        href="/"
        class="error__container-button"
        type="primary"
        size="large"
      >
        {{ $t("errorPage.buttonMessage") }}
      </a-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  width: 1440px;
  margin: 0 auto;
  padding: 48px 64px;

  @include xl {
    width: 100%;
  }
  @include sm {
    padding: 0 0;
  }
}
.page {
  padding-top: 40px;
  @include sm {
    padding: 16px 0;
  }
}

.error__container {
  background: var(--base_50);
  border-radius: var(--border_radius_big);
  width: 100%;
  padding: var(--padding_list);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  border: 1px solid var(--base_100);

  @include sm {
    height: 400px;
  }

  &-message {
    &-main {
      color: var(--base_500);
      font-size: var(--font_size_largest);
      font-weight: var(--font_weight_bold);
      height: 48px;
      margin-bottom: 0;

      @include sm {
        font-size: var(--font_size_big);
      }
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

:deep(.error__container-button) {
  width: 180px;
  font-size: var(--font_size_default);
  font-weight: var(--font_weight_bold);
  border-radius: var(--border_radius_mini);
  margin-top: 40px;
}
</style>
