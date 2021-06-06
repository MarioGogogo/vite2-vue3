<template>
  <h1>{{ msg }}</h1>
  <h2 @click="$store.commit('add')">{{$store.state.couter}}</h2>
  <comp />
  <button @click="state.count++">count is: {{ state.count }}</button>

  <button @click="baseClick">普通点击事件</button>
  <van-button @click="emit('myclick')" type="primary">emit</van-button>
 <van-field v-model="value" label="文本" placeholder="请输入用户名" />
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import Comp from 'comps/comp.vue';
import { defineProps, reactive, defineEmit, useContext } from 'vue'

// 属性定义
defineProps({
  msg: String
})
// 定义事件
const emit = defineEmit(['myclick'])

//获取上下文
const ctx = useContext()
console.log('%c 🍕 ctx: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', ctx);

ctx.expose({
  someMethod () {
    console.log('some message from HelloWord')
  }
})

const baseClick = () => {
  ctx.emit('myclick', 'hello vite2')
}


//请求
fetch('/api/getUsers').then(res => res.json()).then(data => {
  console.log('%c 🍥 获取请求: ', 'font-size:20px;background-color: #6EC1C2;color:#fff;', data);
})



const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>