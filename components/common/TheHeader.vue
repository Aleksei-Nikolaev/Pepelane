<script setup lang="ts">
import TheColorModeSwitcher from "~/components/common/header/TheColorModeSwitcher.vue";
import TheUserInfo from "~/components/common/header/TheUserInfo.vue";
import {initFiltersParams} from "~/constants/initFilterParams";
import {useVehicleStore} from "~/stores/VehicleStore";

const {resetFilters} = useVehicleStore()

</script>

<template>
  <header class="header">
    <div class="header__left-part">
      <NuxtLink
          :to="{ path: '/', query: initFiltersParams }"
          @click="resetFilters"
      >
        <div class="header__logo-container">
          <nuxt-icon class="header__icon-logo" name="Logo" filled />
          <h1 class="header__name">Pepelane</h1>
        </div>
      </NuxtLink>
      <h2 class="header__slogan">{{ $t("header.slogan") }}</h2>
    </div>
    <div class="header__right-part">
      <TheUserInfo />
      <div class="header__icon-container">
        <nuxt-icon class="header__icon-bell" name="Bell" filled />
      </div>
      <TheColorModeSwitcher />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  height: 56px;
  align-items: center;
  text-wrap: nowrap;
  width: 100%;

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
    width: auto;
    display: flex;
  }

  &__name {
    color: var(--base_500);
    font-size: 20px;
    font-weight: var(--font_weight_bold);
    margin-right: 64px;
    margin-bottom: 0;
  }

  &__slogan {
    color: var(--base_300);
    font-size: var(--font_size_default);
    font-weight: var(--font_weight_medium);
    margin-left: 64px;
    margin-bottom: 0;
  }

  &__icon {
    &-container {
      height: 21.5px;
      margin-left: 100px;
    }

    &-logo {
      cursor: pointer;
      width: 48px;
      height: 48px;
      margin-right: 18px;
    }

    &-bell {
      cursor: pointer;
    }
  }
}
</style>
