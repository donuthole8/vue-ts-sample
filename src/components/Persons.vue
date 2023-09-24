<script setup lang="ts">
import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';
import { Ref, ref } from 'vue';

export type Person = {
  id: number,
  name: string,
  age: number,
}

const persons: Ref<Person[]> = ref([
  {
    id: 0,
    name: 'varan',
    age: 24,
  },
  {
    id: 1,
    name: 'vargo',
    age: 26,
  },
])

</script>

<template>
  <div class="container flex flex-col">
    <PersonPostForm />
    <div class="list-container">
      <ul>
        <PersonList :persons="persons"/>
      </ul>
    </div>
  </div>
</template>
