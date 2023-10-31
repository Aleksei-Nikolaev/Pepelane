<script setup lang="ts">

const colorMode = useColorMode();


const switchColor = () => {
  colorMode.preference === "dark"
    ? (colorMode.preference = "light")
    : (colorMode.preference = "dark");
};
</script>

<template>
  <div class="color-mode__container" @click="switchColor()">
    <client-only>
      <nuxt-icon
        v-if="colorMode.value"
        class="color-mode__icon"
        :name="colorMode.value"
        filled
      ></nuxt-icon>
      <span class="color-mode__label">
        {{ $t(`header.colorMode.${colorMode.value}`) }}
      </span>
    </client-only>
  </div>
</template>

<style scoped lang="scss">
.color-mode {
  &__container {
    height: 100%;
    width: 130px;
    display: flex;
    align-items: center;
    cursor: pointer;
    @include sm {
      width: auto;
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
