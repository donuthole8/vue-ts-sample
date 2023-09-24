<script setup lang="ts">
import { Person } from './Persons.vue'

type Props = {
  persons: Person[]
}

defineProps<Props>()

const emit = defineEmits(['delete'])

const onClickDelete = (id: number, name: string) => {
  if (confirm('Delete ' + name + '?')) {
    emit('delete', id)
  }
}
</script>

<template>
  <li class="flex flex-row justify-center items-center bg-teal-500 rounded m-4" v-for="person in persons" :key="person.id">
    <span class="basis-1/2 m-2">{{ person.name }}</span>
    <span class="basis-1/4 m-2">{{ person.age }}</span>
    <button class="basis-1/4 m-2" @click="onClickDelete(person.id, person.name)">
      <span>delete</span>
    </button>
  </li>
</template>
