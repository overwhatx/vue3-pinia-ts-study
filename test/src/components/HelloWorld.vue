<template>
  <div class="HelloWorld-box">132</div>
</template>

<script lang="ts" setup>
import { useMainStore } from "../store/index";

const mainStore = useMainStore();
console.log(mainStore.count);
</script>
