<template>
  <p class="title">修改</p>
  <div>
    <p>{{ count }}</p>
    <p>姓名：{{ name }} 年龄：{{ age }}</p>
    <p>arr:{{ arr }}</p>
    <p><button @click="handelCount">方式1 简单修改一个数据</button></p>
    <p><button @click="handelCount2">方式2 一次性批量修改</button></p>
    <p>
      <button @click="handelCount3">
        方式3 一次性批量修改（更新稍微复杂的数据）
      </button>
    </p>
    <p>
      <button @click="handelCount4">
        方式4 调用封装在 actions中的函数进行修改
      </button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/index'

const mainStore = useMainStore()

const { count, age, name, arr } = storeToRefs(mainStore)

// 修改 state 中的值
const handelCount = () => {
  // 方式1
  mainStore.count++
}
const handelCount2 = () => {
  // 方式2 修改多个数据 建议使用 $patch 批量更新 （更新简易的数据）
  mainStore.$patch({
    count: mainStore.count++,
    age: mainStore.age + 10,
    name: '张三',
    arr: [...mainStore.arr, 4]
  })
}

const handelCount3 = () => {
  // 方式3 $patch 一个函数 批量更新 （是一种更好的批量更新方式 更新一些比较复杂的数据 ）
  mainStore.$patch((state) => {
    state.count++
    state.age += 100
    state.arr.push(4)
    state.name = '李四'
  })
}
const handelCount4 = () => {
  // 方式4 逻辑比较多的时候 可以封装到 actions 做处理
  // 直接调用封装在 actions 中的函数
  mainStore.changeState(100, '王五')
}
// const handelCount5 = () => {

// }

// 普通的多次修改 和 $patch 批量修改的区别 在于 普通修改 每一个修改都会更新一次视图 而$patch 只更新一次视图 （性能上的区别）
</script>
