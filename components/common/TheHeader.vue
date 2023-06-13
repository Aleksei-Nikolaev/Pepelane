<script setup lang="ts">
import TheColorModeSwitcher from "~/components/common/TheColorModeSwitcher.vue";
import TheImage from "~/components/common/TheImage.vue";
import TheUserInfo from "~/components/common/TheUserInfo.vue";



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
    }

    &__icon {
      &-logo {
        width: 48px;
        height: 48px;
        margin-right: 18px;
      }

      &-chat,
      &-bell {
        margin-left: 30px;
      }

      &-chat {
        width: 20px;
        height: 18px;
      }

      &-bell {
        width: 18px;
        height: 21.5px;
      }
    }
  }
</style>