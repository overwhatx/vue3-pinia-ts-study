<template>
  <div class="cart">
    <h2>购物车列表</h2>
    <ul>
      <li v-for="item in cartStore.cartProducts" :key="item.id">
        商品名称:{{ item.title }} - 商品价格:{{ item.price }} × 商品数量:{{
          item.quantity
        }}
      </li>
    </ul>
    <p>商品总价:{{ cartStore.totalPrice }}</p>
    <p><button @click="cartStore.checkout">结算</button></p>
    <p v-show="cartStore.checkoutStatus">结算:{{ cartStore.checkoutStatus }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()
</script>
