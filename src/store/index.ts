import { defineStore } from 'pinia'

// 1.定义容器
// 参数1 main 为 容器的id 必须唯一， 将来 pinia会把所有的容器挂载到根容器
// 参数2 选项对象
// 命名规范 export const usexxxStore = defineStore('xxx', {})  (use +id名 +store)
export const useMainStore = defineStore('mian', {
  //  state 类似于组件的 data 用来储存全局状态的
  // 1.必须是函数：这样是为了在服务端渲染的时候避免交叉请求导致的数据状态污染
  // 2.必须是箭头函数，这是为了更好的 ts 类型推导
  state: () => {
    return {
      count: 10,
      age: 18,
      name: '小八嘎',
      arr: [1, 2, 3]
    }
  },

  // getters 类似于组件的 computed， 用来封装计算属性，有缓存的功能
  getters: {
    // 函数 接受一个可选参数 state状态对象
    // count100(state) {
    //   console.log('count100被调用了');
    //   return state.count+100

    // }

    // 如果在 getters 中使用了 this 则必须手动指定返回值的类型 否则 TS的类型推导不出来
    // 只有当值改变的时候 才会再次被调用
    count100(): number {
      console.log('count100被调用了')
      return this.count + 100
    }
  },

  // actios 类似于组件的 methods 封装业务逻辑 修改 state
  // 不能使用 箭头函数 定义 actions 因为箭头函数 没有自己的this 导致this改变
  actions: {
    // 如果只是修改一个数据可以通过 this去修改
    changeState(num: number, str: string) {
      // this.count++
      // this.age+=num
      // this.name=str
      // this.arr.push(12345)

      // 多个数据修改 批量修改 还是推荐使用 $patch
      this.$patch((state) => {
        state.count++
        state.age += num
        state.arr.push(5)
        state.name = str
      })
    }
  }
})
