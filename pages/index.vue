<script setup lang="ts">

const count = ref(0)
  const obj = ref({
    name: "biba",
    age: 3
  })

  const firtsComp = computed(() => {
    return {
      name: obj.value.name + "boba",
      age: obj.value.age + 5,
    }
  })
  const handleClick = () => {
    count.value += 1
  }
</script>

<template>
<div>{{ count }}</div>
  <button @click="handleClick">Click</button>
  <p>{{ obj.name }} {{ obj.age }}</p>
  <p>{{ firtsComp }}</p>

</template>

<style scoped lang="scss">

</style>