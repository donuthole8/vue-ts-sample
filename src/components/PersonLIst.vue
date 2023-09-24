<script setup lang="ts">
import { Person } from './Persons.vue'

type Props = {
  persons: Person[]
}

defineProps<Props>()
</script>

<template>
  <li v-for="person in persons" :key="person.id">
    <span>{{ person.name }}</span>
    <span>{{ person.age }}</span>
    <button>
      <span>delete</span>
    </button>
  </li>
</template>
