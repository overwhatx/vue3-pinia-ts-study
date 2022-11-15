import { defineStore } from 'pinia'
// 1.定义容器
// 参数1 main 为 容器的id 必须唯一， 将来 pinia会把所有的容器挂载到根容器
// 参数2 选项对象
export const useMainStore= defineStore('mian', {
  //  state 类似于组件的 data 用来储存全局状态的
  // 1.必须是函数：这样式为了在服务端渲染的时候避免交叉请求导致的数据状态污染
  // 2.必须是箭头函数，这是为了更好的 ts 类型推导
  state: () => {
    return {
      count: 10
    }
  },

  // getters 类似于组件的 computed， 用来封装计算属性，有缓存的功能
  getters: {},

  // actios 类似于组件的 methods 封装业务逻辑 修改 state
  actions:{}
})

// 2.使用容器中的 state

// 3.修改 state
// 4.容器中的 action 的使用