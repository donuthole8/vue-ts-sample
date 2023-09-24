<script setup lang="ts">
import Persons from './components/Persons.vue'
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    Vue + ts + tailwind Sample App
  </h1>
  <Persons />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
