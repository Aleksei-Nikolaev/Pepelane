<script setup lang="ts">
import { Skeletor } from 'vue-skeletor'

const colorMode = useColorMode()

const switchColor = () => {
  colorMode.preference === 'dark'
    ? (colorMode.preference = 'light')
    : (colorMode.preference = 'dark')
}
</script>

<template>
  <div class="color-mode__container" @click="switchColor()">
    <client-only>
      <nuxt-icon
        class="color-mode__icon"
        :name="colorMode.value"
        filled
      />
      <span class="color-mode__label">
        {{ $t(`header.colorMode.${colorMode.value}`) }}
      </span>
    </client-only>
    <Skeletor v-show="colorMode.unknown" class="color-mode__skeleton" />
  </div>
</template>

<style scoped lang="scss">
.color-mode {
  &__container {
    height: 100%;
    width: 140px;
    display: flex;
    align-items: center;
    cursor: pointer;
    @include sm {
      width: auto;
    }
  }

  &__skeleton {
    width: 96%;
    height: 28px;

    @include sm {
      width: 26px;
      height: 26px;
      border-radius: 13px;
    }
  }

  &__label {
    color: var(--base_200);
    font-size: var(--font_size_default);
    font-weight: var(--font_weight_medium);
    user-select: none;
    @include sm {
      display: none;
    }
  }

  &__icon {
    width: 22px;
    height: 22px;
    margin-right: 18px;
    display: flex;
    align-items: center;
    @include sm {
      width: 22px;
      height: 22px;
      margin-right: 0px;
    }
  }
}
</style>
