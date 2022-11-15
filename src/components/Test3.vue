<template>
  <p class="title">getters</p>
  <div>
    <p>{{ count }}</p>
    <p>{{ mainStore.count100 }}</p>
    <p>{{ mainStore.count100 }}</p>
    <p>{{ mainStore.count100 }}</p>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '../store/index'

const mainStore = useMainStore()

const { count, age, name, arr } = storeToRefs(mainStore)
</script>
