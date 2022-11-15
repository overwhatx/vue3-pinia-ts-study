/**
 * 购物车
 */
import { defineStore } from 'pinia'
import { buyProducts, IProduct } from '../api/shop'
import { useProductsStore } from './products'

// 定义 一个数据类型 然后合并到 IProduct 中  最后 cartProducts使用
type CartProduct = {
  quantity: number
} & Omit<IProduct, 'inventory'> //Omit 是过滤掉 inventory这个数据类型 其他的保留
// 最终得到的数据为 [id,title,price,quantity]

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      cartProducts: [] as CartProduct[], //购物车商品列表
      checkoutStatus: null as null | string
    }
  },

  actions: {
    // 加入购物车
    addProductsToCart(product: IProduct) {
      console.log(product)
      // 判断商品库存
      if (product.inventory < 1) {
        return
      }

      // 判断购物车中是否已有当前添加的商品
      const cartItem = this.cartProducts.find((item) => item.id === product.id)

      if (cartItem) {
        // 存在时 购物车已有商品 加1份
        cartItem.quantity++
      } else {
        // 购物车没有该商品 则直接添加到购物车
        this.cartProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1
        })
      }

      // 更新商品库存
      const productsStore = useProductsStore()
      // 将当前添加的商品数据 传递给 products模块 进行处理
      productsStore.decrementProduct(product)
    },

    // 结算
    async checkout() {
      const ret = await buyProducts()
      this.checkoutStatus = ret ? '成功' : '失败'

      // 成功结算 清空购物车
      if (ret) {
        this.cartProducts = []
      }
    }
  },

  getters: {
    // 购物车商品总价格
    totalPrice(state) {
      return state.cartProducts.reduce((total, item) => {
        return total + item.price * item.quantity
      }, 0)
    }
  }
})
