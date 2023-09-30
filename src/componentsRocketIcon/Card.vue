<script setup lang="ts">
defineProps<{
  title: string,
}>()
</script>

<template>
  <div class="bg-amber-100 rounded m-4 pt-4">
    <div>
      <span class="font-bold text-xl">{{ title }}</span>
      <slot></slot>
    </div>
    <div class="flex flex-row items-center justify-center bg-rose-400 m-0 pd-0">
      <slot name="footer">Default Footer</slot>
    </div>
  </div>
</template>
