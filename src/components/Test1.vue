<template>
  <p class="title">访问 state</p>
  <div class="HelloWorld-box">
    <p>1.单个引用</p>
    <p>{{ mainStore.count }}</p>
    <p>姓名：{{ mainStore.name }} 年龄：{{ mainStore.age }}</p>
  </div>

  <!-- ------------------------- -->
  <div>
    2.一次性解构 (响应式 需要使用官方 api storeToRefs)
    <p>{{ count }}</p>
    <p>姓名：{{ name }} 年龄：{{ age }}</p>
    <p><button @click="handelCount">修改count</button></p>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/index'

const mainStore = useMainStore()
console.log(mainStore.count)

// 如下解构的方式 是有问题的 因为这样拿到的数据不是响应式的 是一次性的
//  pinia 其实就是把 state 数据都做了 reactive 处理
// const { count, age, name } = useMainStore()

// 通过官方api 进行解构值
// 把解构出来的数据做 ref 响应式代理
// 所以使用的时候 count.value 才可以拿到对应值
const { count, age, name } = storeToRefs(mainStore)

console.log(count.value)

// 修改 state 中的值
const handelCount = () => {
  // 方式1
  mainStore.count++
}
</script>
