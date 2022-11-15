import { defineStore } from 'pinia'
import { getProducts, IProduct } from '../api/shop'

export const useProductsStore = defineStore('products', {
  state: () => {
    return {
      all: [] as IProduct[] // 所有商品列表  (as IProduct[] 转换类型 )
    }
  },
  getters: {},
  actions: {
    // 获取商品列表
    async loadAll() {
      const res = await getProducts()
      this.all = res
    },

    // 减库存
    decrementProduct(product: IProduct) {
      const ret = this.all.find((item) => item.id === product.id)
      if (ret) {
        ret.inventory--
      }
    }
  }
})
