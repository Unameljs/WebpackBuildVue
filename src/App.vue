<template>
  <div>webpack {{ name }}</div>
</template>

<script setup lang="ts">
import "@/assets/index.less";
import {ref} from 'vue'

const name = ref<string>('无敌暴龙战神')

</script>

<style>

</style>