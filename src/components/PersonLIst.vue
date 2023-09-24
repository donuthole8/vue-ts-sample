<script setup lang="ts">
import { Person } from './Persons.vue'

type Props = {
  persons: Person[]
}

defineProps<Props>()
</script>

<template>
  <li class="bg-teal-500 rounded m-4" v-for="person in persons" :key="person.id">
    <span class="m-2">{{ person.name }}</span>
    <span class="m-2">{{ person.age }}</span>
    <button class="m-2">
      <span>delete</span>
    </button>
  </li>
</template>
