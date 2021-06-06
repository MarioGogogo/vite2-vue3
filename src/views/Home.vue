<template>
  <div>
    <h1>home</h1>
    <HelloWorld msg="Hello Vue 3 + Vite" @myclick="onMyclick" ref="hw" />
  </div>
</template>

<script setup>
import HelloWorld from 'comps/HelloWorld.vue'
import { ref } from 'vue';

const hw = ref(null)

const onMyclick = (ctx) => {
  console.log('hw :>> ', hw.value.someMethod);
  hw.value.someMethod()
  alert(ctx ? ctx : '123')

}
</script>

<style lang="css" scoped>
</style>