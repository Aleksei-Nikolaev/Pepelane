<script setup lang="ts">
import TheColorModeSwitcher from '~/components/common/pageSections/header/components/TheColorModeSwitcher.vue'
import TheUserInfo from '~/components/common/pageSections/header/components/TheUserInfo.vue'
import { useVehicleStore } from '~/stores/VehicleStore'

const { resetFilters, filterParams } = useVehicleStore()
</script>

<template>
  <header class="header">
    <div class="header__left-part">
      <NuxtLink
        :to="{ path: '/', query: filterParams }"
        class="header__logo-container"
        @click="resetFilters"
      >
        <div class="header__logo-container">
          <nuxt-icon class="header__icon-logo" name="Logo" filled />
          <h1 class="header__name">
            Pepelane
          </h1>
        </div>
      </NuxtLink>
      <h2 class="header__slogan">
        {{ $t("header.slogan") }}
      </h2>
    </div>
    <div class="header__right-part">
      <TheUserInfo />
      <TheColorModeSwitcher class="header__color-mode" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  height: 56px;
  align-items: center;
  text-wrap: avoid;
  width: 100%;

  @include sm {
    padding: 6px var(--padding-mobile-content);
    border-bottom: 1px solid var(--base_100);
    box-shadow: 0 1px var(--base_50);
  }

  &__left-part,
  &__right-part {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__right-part {
    margin-left: auto;
    flex-direction: row-reverse;
  }

  &__logo-container {
    height: 100%;
    align-items: center;
    display: flex;
  }

  &__name {
    color: var(--base_500);
    font-size: var(--font_size_medium_increase);
    font-weight: var(--font_weight_bold);
    margin-right: 64px;
    margin-bottom: 0;
    @include sm {
      margin-right: 0;
      font-size: var(--font_size_default);
    }
  }

  &__slogan {
    color: var(--base_300);
    font-size: var(--font_size_default);
    font-weight: var(--font_weight_medium);
    margin-left: 64px;
    margin-bottom: 0;

    @include xl {
      margin-left: 0;
    }
    @include md {
      display: none;
    }
  }

  &__color-mode {
    margin-right: 40px;
    @include sm {
      margin-right: 0;
    }
  }

  &__icon {
    &-logo {
      cursor: pointer;
      width: 48px;
      height: 48px;
      margin-right: 18px;

      @include sm {
        margin-right: 10px;
        width: 32px;
        height: 32px;
      }
    }
  }
}

:deep(.header__icon-logo > svg > circle:first-child) {
  fill: var(--base_500);
}
</style>
