<script setup lang="ts">
import TheColorModeSwitcher from "~/components/common/header/TheColorModeSwitcher.vue";
import TheUserInfo from "~/components/common/header/TheUserInfo.vue";



</script>

<template>
  <header class="header">
    <div class="header__left-part">
      <nuxt-icon class="header__icon-logo" name="Logo" filled />
      <h1 class="header__name">Pepelane</h1>
      <h2 class="header__slogan">{{ $t('header.slogan') }}</h2>
    </div>
    <div class="header__right-part">
      <TheUserInfo />
      <nuxt-icon class="header__icon-bell" name="Bell" filled />
      <nuxt-icon class="header__icon-chat" name="Chat" filled />
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

  &__left-part,
  &__right-part {
    display: flex;
    align-items: inherit;
    height: 100%;
  }

  &__right-part {
    margin-left: auto;
    flex-direction: row-reverse;
  }

  &__name {
    color: var(--base_500);
    font-size: 20px;
    font-weight: var(--font_weight_bold);
    margin-right: 64px;
  }

  &__slogan {
    color: var(--base_300);
    font-size: var(--font_size_default);
    font-weight: var(--font_weight_medium);
    margin-right: 286px;
  }

  &__icon {
    &-logo {
      cursor: pointer;
      width: 48px;
      height: 48px;
      margin-right: 18px;
    }

    &-bell {
      cursor: pointer;
      margin-left: 30px;
      width: 18px;
      height: 21.5px;
    }

    &-chat {
      cursor: pointer;
      width: 20px;
      height: 18px;
    }
  }
}
</style>