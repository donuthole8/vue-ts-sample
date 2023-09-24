<script setup lang="ts">
defineProps<{
  title: string,
}>()
</script>

<template>
  <div class="bg-amber-200 rounded m-4">
    <span class="font-bold text-xl">{{ title }}</span>
    <!-- Card内部の要素コンポーネントを表示 -->
    <slot></slot>
  </div>
</template>
