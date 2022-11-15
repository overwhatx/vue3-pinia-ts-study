<template>
  <!-- 商品列表 -->
  <ul>
    <li v-for="item in productsStore.all" :key="item.id">
      商品名称:{{ item.title }} - 商品价格:{{ item.price }} - 库存:{{
        item.inventory
      }}
      <button
        :disabled="!item.inventory"
        @click="cartStore.addProductsToCart(item)"
      >
        添加到购物车
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { useCartStore } from '../store/cart'
import { useProductsStore } from '../store/products'

const productsStore = useProductsStore()
const cartStore = useCartStore()

// 加载所有数据
productsStore.loadAll()
</script>
